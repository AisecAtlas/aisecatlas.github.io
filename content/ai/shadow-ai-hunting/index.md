---
title: "EDR 텔레메트리 기반 Shadow AI 헌팅"
description: "프록시가 닿지 않는 단말의 CLI, IDE 확장, MCP 서버, 웹 AI 사용을 엔드포인트 프로세스와 DNS 텔레메트리로 잡는 6축 헌팅 방법론."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["Shadow AI", "AI 사용 가시화", "위협 헌팅", "EDR"]
categories: ["ai"]
ShowToc: true
---

네트워크 인라인 통제(프록시, SASE, CASB)는 직원이 브라우저로 여는 웹 AI는 잡지만 단말에서 직접 도는 AI는 놓칩니다. 로컬 CLI(claude, ollama, aider), IDE의 AI 확장, MCP 서버, 데스크톱 AI 앱은 네트워크 경로에 인라인 검사점을 두기 어렵고, 인증서를 핀닝한 클라이언트는 TLS 가로채기 자체를 거부합니다. 이 사각지대를 메우는 방법이 EDR 텔레메트리 헌팅입니다. 단말의 프로세스 실행 기록(`ProcessRollup2`)과 DNS 질의 기록(`DnsRequest`)에서 "누가 어떤 AI를 실제로 돌렸는가"를 직접 찾습니다. 단말에서 보기 때문에 TLS 암호화나 인증서 핀닝에 막히지 않습니다.

핵심 전제는 실행과 설치를 구분하는 데 있습니다. 자산 인벤토리는 "무엇이 깔려 있나"를 보지만, 텔레메트리는 "무엇이 실제로 돌았나"를 봅니다. 설치만 하고 안 쓰는 도구와 인벤토리에 안 잡히는 실행 흔적은 텔레메트리에서만 드러납니다.

## 탐지 대상

여섯 개 축으로 단말의 AI 사용을 잡습니다. 프로세스 다섯 축은 실행 흔적을, DNS 한 축은 프로세스로 안 잡히는 웹 사용을 봅니다.

| 축 | 텔레메트리 신호(필드) | 잡는 대상 |
|---|---|---|
| CLI 프로세스 | `ProcessRollup2` `ImageFileName` basename | 단일 바이너리로 도는 AI CLI |
| IDE 확장 | `ProcessRollup2` `ImageFileName` 실행 경로(`extensions/<publisher.ext>`) | 코드 에디터의 AI 코딩 확장 |
| MCP 서버 | `ProcessRollup2` `CommandLine` 패턴 | 호스트 앱이 띄운 MCP 서버 프로세스 |
| AI 에이전트 | `ProcessRollup2` `CommandLine` 패턴 | 자율 에이전트 프레임워크 실행 |
| 데스크톱 앱 | `ProcessRollup2` `ImageFileName` basename | 설치형 GUI AI 앱 실행 |
| 웹 AI | `DnsRequest` `DomainName` 도메인 접미사 | 브라우저 웹 AI와 LLM API egress |

프로세스 축은 `ParentBaseFileName`(부모 프로세스명), `UserName`, `aid`(단말 식별자)를 함께 집계해 "어느 단말의 누가 무엇으로 띄웠는가"를 채웁니다.

## 탐지 원리

오탐을 줄이면서 실제 사용만 잡는 다섯 원칙입니다.

- **실행은 설치가 아닙니다.** 자산 인벤토리(Discover류)는 설치 여부만 봅니다. 텔레메트리는 실제 실행과 통신을 봅니다. 둘을 합쳐야 설치와 사용의 간극(설치만 하고 안 쓰는 단말)까지 드러납니다.
- **정밀 매칭으로 오탐을 차단합니다.** `*claude*` 같은 부분일치는 경로나 파일명에 우연히 포함되어 오탐이 많습니다. 바이너리 basename 완전매칭, 경로 앵커(`$`), 단어경계(`\b`)로 좁힙니다. 부분일치는 최후수단입니다.
- **경로가 곧 증거입니다.** IDE 확장은 별도 이름의 바이너리가 없어도, 확장이 spawn하는 보조 프로세스 경로가 `extensions/<publisher.ext>`를 지납니다. 이 경로에서 식별자를 파싱해 AI 확장 목록과 대조하면 이름 없이도 정체가 드러납니다.
- **부모와 자식 관계로 맥락을 얻습니다.** MCP 서버와 IDE 확장은 부모 프로세스(Code, Cursor, Claude Desktop 등)를 보면 무엇이 띄웠는지가 드러납니다.
- **프로세스로 안 잡히면 DNS로 봅니다.** 웹 ChatGPT, Gemini, Claude.ai는 브라우저 안에서 돌아 고유한 프로세스 시그니처가 없습니다. 이때는 DNS 질의 도메인을 AI 서비스 목록과 대조해 egress로 잡습니다.

특히 명령행 기반 축(MCP, AI 에이전트)은 일반어가 도구명과 겹쳐 오탐이 많습니다. 단어경계 매칭에 더해 `version`, `help`, `install` 같은 비실행 호출을 배제하고 명령행 원문을 확인하면 오탐이 줄어듭니다.

## 6축별 풀이

각 축이 무슨 필드로 무엇을 잡는지입니다.

- **CLI 프로세스.** `ImageFileName`의 basename이 알려진 CLI명과 완전일치하면 실행으로 봅니다. claude, ollama, aider, gemini, codex, goose, cursor-agent 같은 단일 바이너리가 대상입니다. macOS 앱 번들(`.app/Contents/MacOS/`) 내부 실행은 데스크톱 앱 축으로 분리합니다.
- **IDE 확장.** 확장이 띄운 보조 프로세스의 실행 경로에서 `publisher.ext` 식별자를 파싱해 AI 확장 목록과 대조합니다. Copilot, Continue, Cody, Codeium, Amazon Q, Tabnine 등이 대상입니다. 보조 프로세스를 안 띄우는 순수 인프로세스 확장은 미탐 한계가 있습니다.
- **MCP 서버.** `CommandLine`에서 `@modelcontextprotocol/server-*`, `mcp-server-*`, `uvx mcp-*`, `npx -y @modelcontextprotocol/*` 패턴을 잡고 부모 프로세스로 호스트 앱(Claude Desktop, Cursor, VS Code)을 구분합니다. 일반어 `server-`가 무관한 배포명에 걸릴 수 있어 알려진 서버명으로 좁힙니다.
- **AI 에이전트.** `CommandLine`에서 autogpt, openhands, cline, crewai, browser-use 같은 프레임워크명을 단어경계로 잡습니다. 이름이 일반적이라 오탐이 가장 많은 축이라 버전 확인, 설치, git 조작 같은 비실행 신호를 배제합니다.
- **데스크톱 앱.** `ImageFileName`의 basename을 카탈로그와 룩업합니다. ChatGPT, Claude, Cursor, Perplexity, LM Studio, GPT4All 같은 설치형 GUI 앱이 대상입니다. 설치 인벤토리와 교차하면 설치와 사용의 간극이 드러납니다.
- **웹 AI.** `DnsRequest`의 도메인을 AI 서비스 도메인 목록과 접미사 매칭합니다. 웹 ChatGPT, Gemini, Claude.ai 같은 서비스 도메인과 OpenAI, Anthropic, Cohere 등 LLM API 엔드포인트가 대상입니다. 브라우저 확장이나 사이드카가 백그라운드로 도메인을 호출할 수 있어 사람의 직접 사용과 완전히 동일하지는 않으니 빈도와 시간대로 해석합니다.

여섯 축 모두 탐지력의 핵심은 매칭 카탈로그(탐지 대상 CLI명, IDE 확장 식별자, MCP 서버명, AI 도메인 목록)입니다. 카탈로그가 곧 정책이고, 그 최신성이 탐지 범위를 결정합니다.

## 네트워크 통제와의 보완

[AI 사용 가시화](/ai/ai-usage-visibility/)는 직원 AI 사용을 캡처하는 메커니즘을 네트워크 인라인, 엔드포인트, 브라우저, DNS로 나눕니다. EDR 헌팅은 그중 엔드포인트 축을 프로세스와 DNS 텔레메트리로 구현한 방법론입니다.

| 비교축 | 네트워크 인라인(프록시, SASE) | EDR 텔레메트리 헌팅 |
|---|---|---|
| 위치 | 네트워크 egress 경로 | 단말 |
| TLS 처리 | 끊고 재서명(루트 CA 필요) | 끊지 않음 |
| 인증서 핀닝 | 핀닝 앱은 우회되어 사각 | 영향 없음 |
| 로컬 CLI/IDE/MCP | 네트워크 시그니처 약해 놓치기 쉬움 | 프로세스 실행으로 직접 포착 |
| 프롬프트 내용 | 복호화 시 페이로드까지 | 페이로드 아님(실행과 도메인 사실) |
| 전제 | 네트워크 통제점 배치 | 단말에 EDR 센서 배포 |

두 방식은 보완 관계입니다. 인라인 프록시는 브라우저 웹 사용의 프롬프트 내용까지 보지만 핀닝 앱과 단말 로컬 도구에 약합니다. EDR 헌팅은 핀닝과 TLS에 막히지 않고 로컬 CLI와 IDE까지 잡지만 단말 센서 배포가 전제이고 프롬프트 내용은 보지 않습니다. 무엇을 입력했나(콘텐츠)가 목표면 인라인 또는 브라우저 캡처가, 무엇을 실행했나(단말 사용 사실)가 목표면 EDR 헌팅이 맞습니다.

## 운영 시 유의

- **정상 사용 오탐.** CLI와 IDE 확장의 AI 코딩 도구는 개발 조직의 정상 업무 도구이기도 합니다. 탐지 결과를 위반으로 보기 전에 단말 소유자와 용도를 확인합니다. 명령행 축은 비실행 신호(버전 확인, 설치)를 배제해도 잔여 오탐이 남습니다.
- **카탈로그 최신화.** 신규 LLM 벤더, MCP 서버, IDE 확장이 계속 등장합니다. 카탈로그를 보강하지 않으면 신규 도구가 누락됩니다. 카탈로그 갱신이 곧 탐지 범위 유지입니다.
- **프라이버시와 거버넌스.** 직원의 단말 행위 수집은 거버넌스 근거가 필요합니다. 수집 범위를 AI 사용 식별에 한정하고, 단말 텔레메트리의 처리와 보관 위치를 문서화하며, 개인정보 처리 근거를 확보합니다.
- **DNS 해석.** DNS 축은 사람의 직접 사용과 백그라운드 자동 호출이 섞입니다. 단일 질의를 사용 근거로 단정하지 않고 빈도와 시간대로 해석합니다.

## 관련 페이지

- [AI 사용 가시화와 Shadow AI 통제](/ai/ai-usage-visibility/) — 네트워크 인라인, 엔드포인트, 브라우저, DNS 등 8가지 캡처 메커니즘
- [Nightfall AI](/ai/vendors/nightfall/) — 브라우저 플러그인과 엔드포인트 기반 Shadow AI 발견, DLP 결합
- [Cyberhaven](/ai/vendors/cyberhaven/) — 엔드포인트 데이터 리니지로 AI 반출 데이터 추적
- [AI 보안 솔루션 지도](/ai/map/) — 캡처 메커니즘과 통제 지점별 벤더 분포

## 출처

- [CrowdStrike — Innovations to Secure AI Agents and Govern Shadow AI](https://www.crowdstrike.com/en-us/blog/new-crowdstrike-innovations-secure-ai-agents-govern-shadow-ai/)
- [Splunk Security Content — Data Source: CrowdStrike ProcessRollup2](https://research.splunk.com/sources/cbb06880-9dd9-4542-ac60-bd6e5d3c3e4e/)
- [CrowdStrike — Falcon Data Replicator Technical Add-on for Splunk (가이드)](https://www.crowdstrike.com/wp-content/uploads/2021/06/CrowdStrike-Falcon-Data-Replicator-Technical-Add-On-Guide.pdf)
- [Panther Docs — CrowdStrike Falcon Data Replicator (event_simpleName/필드 스키마)](https://docs.panther.com/data-onboarding/supported-logs/crowdstrike/falcon-data-replicator)
- [Model Context Protocol — Specification](https://modelcontextprotocol.io/specification/2025-06-18)
- [MITRE ATLAS](https://atlas.mitre.org/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 텔레메트리 필드명과 스키마는 센서 버전에 따라 달라질 수 있으니 운영 환경에서 직접 확인합니다.

---
최초 발행 2026-06-07, 최종 검토 2026-06-07, 다음 검토 2026-07-07
