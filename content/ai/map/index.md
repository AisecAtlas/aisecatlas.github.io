---
title: "AI 보안 솔루션 지도"
description: "어느 벤더가 무엇을 하고 어디서 통제하는가. AI 보안 솔루션 14곳을 기능과 아키텍처로 한눈에 비교합니다."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["AI Security", "벤더 비교", "AI 보안 솔루션"]
ShowToc: true
---

AI 보안 솔루션 선택의 축은 둘입니다. **기능**과 **통제 지점**입니다.

기능은 세 가지로 갈립니다.

- **① AI를 지킨다** — 사내 LLM과 모델, 에이전트를 공격에서 보호합니다. 런타임 가드레일, 모델 스캔, 레드티밍.
- **② AI 사용을 통제한다** — 직원이 외부 AI에 무엇을 넣는지 보고 막습니다. Shadow AI 발견, DLP.
- **③ AI로 보안을 강화한다** — AI로 SOC 운영을 가속합니다. 경보 분류, 위협 헌팅, 조사 자동화에 LLM을 적용합니다.

같은 기능이라도 **통제 지점의 위치**가 다릅니다. 직원 AI 사용을 네트워크 회선에서 막는 것과 단말 브라우저에서 막는 것은 도입 전제가 다릅니다.

## AI 공격 벡터

AI는 데이터부터 사용자까지 여섯 단계에서 공격받습니다. 벤더는 이 중 어느 단계에 통제 지점을 두느냐로 갈립니다.

{{< ai-pipeline >}}

## 기능별 벤더 커버리지

| 벤더 | ① AI를 지킨다 | ② AI 사용을 통제한다 | ③ AI로 보안을 강화한다 |
|---|---|---|---|
| [Palo Alto](/ai/vendors/palo-alto/) | Prisma AIRS | AI Access Security | — |
| [CrowdStrike](/ai/vendors/crowdstrike/) | AIDR, AI-SPM, Shield | Data Protection, Shadow AI | Charlotte AI |
| [Microsoft](/ai/vendors/microsoft/) | Defender AI-SPM, Prompt Shields, Entra Agent ID | Purview DSPM for AI, Defender for Cloud Apps | Security Copilot |
| [Cisco](/ai/vendors/cisco/) | AI Defense | AI Access(Secure Access) | Splunk |
| [Zscaler](/ai/vendors/zscaler/) | AI Guard, AI-SPM | AI Access Security, DSPM | Data Fabric |
| [Check Point](/ai/vendors/check-point/) | AI Agent Security, AI Red Teaming(Lakera) | GenAI Protect | Infinity AI Copilot |
| [SentinelOne](/ai/vendors/sentinelone/) | Prompt Security 런타임, AI-SPM | Prompt Security 직원 보호 | Purple AI |
| [Wiz](/ai/vendors/wiz/) | AI-SPM, AI-BOM, DSPM for AI | 섀도 AI 발견(부분) | Wiz Defend |
| [Harmonic](/ai/vendors/harmonic/) | MCP Gateway | Shadow AI(브라우저) | — |
| [WitnessAI](/ai/vendors/witnessai/) | AI Firewall | AI 사용 거버넌스(네트워크) | — |
| [Nightfall](/ai/vendors/nightfall/) | — | GenAI DLP(엔드포인트와 API) | — |
| [Cyberhaven](/ai/vendors/cyberhaven/) | — | 데이터 리니지(엔드포인트) | — |
| [HiddenLayer](/ai/vendors/hiddenlayer/) | Model Scanner, AIDR, AIBOM | — | — |
| [Mindgard](/ai/vendors/mindgard/) | AI 레드티밍 | — | — |

AI 보안 기능은 두 방식으로 채워집니다. 대형 보안 벤더가 자체 개발하거나, AI 보안 스타트업을 인수해 기존 제품군에 합칩니다. 최근만 봐도 Lakera는 Check Point, Protect AI는 Palo Alto, Robust Intelligence는 Cisco, Prompt Security는 SentinelOne에 인수됐습니다. 신생 기술이라 제품 경계와 명칭, 인수 구도가 빠르게 바뀝니다.

## 통제 지점 (PEP 위치)

도입 전제를 가르는 건 통제 지점의 위치입니다. 직원의 외부 AI 사용을 막더라도 네트워크 경로에서 거를지 단말에서 거를지에 따라 필요한 사전 조건이 달라집니다. 네트워크 방식은 트래픽을 통과시킬 프록시나 게이트웨이가, 단말 방식은 기기마다 설치할 소프트웨어가 필요합니다.

| 통제 지점 | 어디서 | 대표 벤더 | 도입에 필요한 것 |
|---|---|---|---|
| 네트워크 회선 | 직원과 외부 AI 사이(SASE, 프록시) | Zscaler, WitnessAI, Cisco, Palo Alto | SASE 또는 TLS 가로채기. 인증서 핀닝 앱은 사각 |
| 앱과 모델 사이 | 사내 앱이 부르는 LLM 앞(런타임 가드레일) | Lakera, Prompt Security, AI Guard, Prompt Shields | 앱이 게이트를 거치도록 연결 |
| 단말과 브라우저 | 직원 PC에서 제출 전 | Harmonic, Nightfall, Cyberhaven | 단말마다 확장과 에이전트 설치. TLS와 무관 |
| 클라우드 태세 | 클라우드 설정을 밖에서 읽음 | Wiz, Defender AI-SPM | 클라우드 계정 연결. 실시간 차단은 아님 |
| 모델 파일 | 배포 전 모델을 정적 스캔 | HiddenLayer, Palo Alto | CI/CD와 모델 레지스트리 연결 |
| 공격 시뮬레이션 | 만든 AI를 공격해 약점 찾기 | Mindgard, Lakera Red | API 접근. 막는 게 아니라 테스트 |

직원 AI 사용 통제는 단말 소프트웨어 배포 가능 여부가 1차 분기점입니다. 배포 가능하면 단말 방식이 가장 확실하고(TLS와 핀닝에 막히지 않음), 기존 SASE가 있으면 네트워크 방식이 빠릅니다. 캡처 기술의 상세 비교는 [AI 사용 가시화](/ai/ai-usage-visibility/)를 참조합니다.

## 도입 우선순위

| 현안 | 출발점 |
|---|---|
| 직원이 외부 AI에 뭘 넣는지 모른다 | [AI 사용 가시화](/ai/ai-usage-visibility/) → Zscaler, Harmonic, WitnessAI |
| 사내 LLM 앱의 프롬프트를 막아야 한다 | [LLM 게이트웨이](/ai/llm-gateway/) → Lakera, Prompt Security |
| 외부에서 받은 모델이 안전한지 모른다 | [모델 공급망](/ai/model-supply-chain/) → HiddenLayer, Protect AI |
| 배포 전 약점을 찾고 싶다 | [AI 레드티밍](/ai/ai-red-teaming/) → Mindgard, HiddenLayer |
| 회사에 어떤 AI 자산이 있는지 모른다 | [AI-SPM](/ai/ai-spm/) → Wiz, Prisma AIRS |
| SOC 인력이 부족하다 | [AI로 보안 강화](/ai/augment-security/) → Charlotte AI, Security Copilot |

## 관련 페이지

- 벤더별 제품군과 아키텍처(ZTA): [벤더 프로필](/ai/vendors/)
- 기능별 시장 동향: [AI 보안](/ai/) — 지키기, 사용 가시화, 보안 강화
- 기준 표준: [표준과 규제](/framework/) — OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF

각 항목의 수치와 출처는 해당 [벤더 프로필](/ai/vendors/)에 있습니다. 시장 변동이 빠른 영역이므로 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-06-07, 최종 확인 2026-06-07, 다음 확인 2026-07-07
