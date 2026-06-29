---
title: "OWASP MCP Top 10 (v0.1 베타)"
description: "에이전트와 도구를 잇는 MCP가 받는 10가지 위험. MCP01~MCP10을 영문 원제와 함께 한국어로 푼다. v0.1 베타 단계."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["OWASP", "MCP", "Agentic AI", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [OWASP MCP Top 10](https://owasp.org/www-project-mcp-top-10/)
>
> 한국어 풀이입니다. 원문은 v0.1 베타 단계라 항목이 바뀔 수 있습니다. 권위 있는 해석이 필요하면 원문을 봅니다.

MCP(Model Context Protocol)를 쓰는 시스템이 생애주기에서 받는 위험을 10가지로 분류한 OWASP 표준입니다. 대상은 모델도 에이전트도 아니라, 에이전트와 외부 도구를 잇는 **연결 계층**입니다. [에이전트 자체의 위험](/framework/owasp-agentic-top-10/)과 별개로, 도구 연결 통로에 생기는 토큰 노출과 인증 부재와 도구 중독을 다룹니다. 2025년 v0.1 베타로 공개된 초기 단계입니다([OWASP](https://owasp.org/www-project-mcp-top-10/)).

## 적용 대상

대상은 **MCP 서버와 클라이언트, 그 연결**입니다. 에이전트가 도구를 호출하기 위해 거치는 프로토콜 계층의 토큰, 인증, 권한, 도구 메타데이터, 감사, 컨텍스트 전달입니다.

- 포함: MCP 서버 배포와 인증, 토큰과 시크릿 관리, 도구 정의와 메타데이터, 클라이언트의 도구 신뢰, 서버 간 컨텍스트 공유
- 제외: 에이전트의 계획과 자율 행동 위험(그쪽은 [Agentic Top 10](/framework/owasp-agentic-top-10/)), 단일 LLM 앱의 입출력(그쪽은 [LLM Top 10](/framework/owasp-llm-top-10/))

## 분류 기준

MCP의 **생애주기와 신뢰 경계**를 따라 10가지로 나눴습니다. 토큰과 시크릿(MCP01), 권한과 인증(MCP02, MCP07), 도구와 공급망(MCP03, MCP04), 실행(MCP05), 의도와 컨텍스트(MCP06, MCP10), 운영 가시성(MCP08, MCP09)으로 흩어집니다. 코드는 식별자이고 v0.1 베타라 순서와 명칭은 정식판에서 바뀔 수 있습니다.

## 전체 구성

10개 항목 전부입니다. 영문 원제를 함께 둔 이유는 한국어 번역만으로는 의미가 좁아지기 때문입니다.

| 코드 | 항목 (영문 원제) | 무엇을 노리나 |
|---|---|---|
| MCP01 | 토큰 관리 부실과 시크릿 노출 (Token Mismanagement & Secret Exposure) | MCP 서버가 모은 토큰과 시크릿의 노출 |
| MCP02 | 범위 확장을 통한 권한 상승 (Privilege Escalation via Scope Creep) | 권한 범위가 슬금슬금 넓어져 상승 |
| MCP03 | 도구 중독 (Tool Poisoning) | 도구 메타데이터에 악성 지시를 심어 추론 조작 |
| MCP04 | 소프트웨어 공급망 공격과 의존성 변조 (Software Supply Chain Attacks & Dependency Tampering) | 도구와 의존성 공급망 침해 |
| MCP05 | 명령 주입과 실행 (Command Injection & Execution) | 비검증 입력을 명령으로 실행 |
| MCP06 | 의도 흐름 전복 (Intent Flow Subversion) | 에이전트의 의도 흐름을 중간에 뒤집음 |
| MCP07 | 불충분한 인증과 인가 (Insufficient Authentication & Authorization) | 인증 없는 서버 노출과 접근 |
| MCP08 | 감사와 텔레메트리 부재 (Lack of Audit and Telemetry) | 행위 기록이 없어 탐지와 추적 불가 |
| MCP09 | 섀도 MCP 서버 (Shadow MCP Servers) | 승인되지 않은 MCP 서버의 은밀한 운영 |
| MCP10 | 컨텍스트 주입과 과잉 공유 (Context Injection & Over-Sharing) | 컨텍스트에 악성 데이터 주입과 과잉 노출 |

## 항목별 풀이

**MCP01 토큰 관리 부실과 시크릿 노출.** MCP 서버는 여러 기업 서비스의 자격증명을 한곳에 모읍니다. 그만큼 단일 실패점이 됩니다. 서버 하나가 침해되면 연결된 모든 데이터베이스, 파일, 클라우드가 노출됩니다.

**MCP02 범위 확장을 통한 권한 상승.** 도구에 부여한 권한 범위가 운영 중 조금씩 넓어지면서, 처음 의도보다 큰 권한으로 작동합니다. 최소 권한과 주기적 권한 재검토가 핵심입니다.

**MCP03 도구 중독.** 가장 빈번하고 영향이 큰 클라이언트 측 취약점입니다. 도구 메타데이터(설명)에 악성 지시를 심으면, 클라이언트가 검증 없이 그 설명을 모델 컨텍스트에 넣어 행동을 조작합니다. 간접 프롬프트 인젝션의 한 형태입니다([Simon Willison](https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/)). 방어는 [Prompt Injection 방어](/ai/prompt-injection-defense/)와 맞물립니다.

**MCP04 소프트웨어 공급망 공격과 의존성 변조.** 도구와 그 의존성, 외부 MCP 서버가 침해됐을 때 위험이 들어옵니다. 도구가 설치 후 자기 정의를 조용히 바꾸는 변조(Rug Pull)도 여기 속합니다. AI 모델과 도구 공급망은 [모델 공급망 보안](/ai/model-supply-chain/)에서 다룹니다.

**MCP05 명령 주입과 실행.** 일부 구현이 이스케이프하지 않은 문자열을 시스템 명령으로 전달하는 기본 오류를 냅니다. 샌드박스와 입력 검증이 필요합니다.

**MCP06 의도 흐름 전복.** 에이전트가 도구를 호출하는 의도의 흐름을 중간에 가로채 다른 작업으로 바꿉니다. 호출 순서와 인자의 무결성 검증이 핵심입니다.

**MCP07 불충분한 인증과 인가.** 인증 없이 배포된 MCP 서버가 그대로 노출됩니다. CVE-2025-49596이 대표 사례입니다. MCP Inspector의 프록시 서버가 클라이언트와 프록시 사이 인증을 하지 않아 인증 없는 요청을 허용했고, 임의 명령 실행 경로가 됐습니다. NVD 기준 CVSS v4.0 고심각이며 0.14.1 이상에서 패치됐습니다([NVD](https://nvd.nist.gov/vuln/detail/CVE-2025-49596)).

**MCP08 감사와 텔레메트리 부재.** 도구 호출과 권한 사용의 기록이 없으면 침해를 탐지하거나 사후에 추적할 수 없습니다. 감사 로그와 텔레메트리를 설계 단계에서 넣어야 합니다.

**MCP09 섀도 MCP 서버.** 승인 절차를 거치지 않은 MCP 서버가 조직 안에서 은밀히 운영됩니다. 발견되지 않은 서버는 통제 밖의 공격면입니다. 승인되지 않은 서버와 에이전트의 발견이 대응입니다.

**MCP10 컨텍스트 주입과 과잉 공유.** 서버 간 또는 도구 간 컨텍스트를 주고받을 때 악성 데이터가 끼어들거나, 필요 이상으로 많은 컨텍스트가 노출됩니다. 컨텍스트 격리와 최소 공유가 핵심입니다.

## 다른 표준 및 본 사이트와의 관계

- [Agentic Top 10](/framework/owasp-agentic-top-10/)과의 관계: Agentic Top 10의 ASI04 에이전트 공급망 취약점이 MCP 계층에서 구체화한 것이 MCP Top 10입니다. 에이전트 위험과 연결 계층 위험을 함께 봅니다.
- [LLM Top 10](/framework/owasp-llm-top-10/)과의 관계: OWASP는 단일 LLM 앱, 자율 에이전트, 도구 연결 계층을 각각 LLM, Agentic, MCP Top 10으로 나눠 다룹니다.
- 구현과 방어는 [Agentic AI 보안과 MCP](/ai/agentic-security/)에서, 표준 묶음 색인은 [AI 보안 표준](/framework/ai-security-standards/)에서 다룹니다.

## 관련 페이지

- [OWASP Agentic Top 10](/framework/owasp-agentic-top-10/) — 자율 에이전트가 받는 10가지 위험
- [Agentic AI 보안과 MCP](/ai/agentic-security/) — MCP 위협의 구현과 방어
- [모델 공급망 보안](/ai/model-supply-chain/) — MCP04 공급망 위험
- [Identity 영역](/pillars/identity/) — MCP01 토큰과 시크릿 통제

## 출처

- [OWASP MCP Top 10](https://owasp.org/www-project-mcp-top-10/)
- [CVE-2025-49596 (NVD)](https://nvd.nist.gov/vuln/detail/CVE-2025-49596)
- [Simon Willison — MCP has prompt injection security problems](https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/)

---
최초 발행 2026-06-07, 최종 검토 2026-06-07, 다음 검토 2026-09-07
