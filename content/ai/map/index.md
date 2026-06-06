---
title: "AI 보안 솔루션 지도"
description: "어느 벤더가 무엇을 하고 어디서 통제하는가. AI 보안 솔루션 14곳을 기능과 아키텍처로 한눈에 비교합니다."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["AI Security", "벤더 비교", "AI 보안 솔루션"]
ShowToc: true
---

AI 보안 솔루션을 고를 때 막히는 질문은 둘입니다. **누가 무엇을 하는가**, 그리고 **어디서 통제하는가**.

벤더가 하는 일은 세 가지로 갈립니다.

- **① AI를 지킨다** — 사내 LLM과 모델, 에이전트를 공격에서 보호합니다. 런타임 가드레일, 모델 스캔, 레드티밍.
- **② AI 사용을 통제한다** — 직원이 외부 AI에 무엇을 넣는지 보고 막습니다. Shadow AI 발견, DLP.
- **③ AI로 보안을 강화한다** — AI가 SOC 운영을 가속합니다. 단, 이것은 AI를 보호하는 일이 아니라 보안에 AI를 쓰는 일이라 따로 둡니다.

대형 8사는 셋을 한 플랫폼에 담고, 스타트업 6사는 하나에 깊습니다. 같은 일을 해도 **통제 지점의 위치**가 다릅니다. 직원 AI 사용을 네트워크 회선에서 막는 것과 단말 브라우저에서 막는 것은 도입에 필요한 것이 다릅니다.

## AI는 어디서 공격받나

AI는 데이터부터 사용자까지 여섯 단계에서 공격받습니다. 벤더는 이 중 어느 단계에 통제 지점을 두느냐로 갈립니다.

{{< ai-pipeline >}}

## 어느 벤더가 무엇을 하나

열은 세 가지 일, 행은 벤더입니다. 빈 칸은 그 벤더가 하지 않는 일이자, 다른 벤더에게 남는 자리입니다.

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

대형 8사는 ①②③이 거의 채워집니다. 인수가 그 자리를 채운 경우가 많습니다(Lakera는 Check Point, Protect AI는 Palo Alto, Robust Intelligence는 Cisco, Prompt Security는 SentinelOne으로). 스타트업은 한 칸에 깊고, 인접 칸으로 넓혀 갑니다.

## 대형이냐 스타트업이냐

| 무리 | 무엇이 다른가 | 벤더 |
|---|---|---|
| 대형 8사 | 기존 플랫폼(SASE, 엔드포인트, M365, 네트워크, CNAPP) 위에 AI 보안을 얹어 ①②③을 한곳에서 운영 | Palo Alto, CrowdStrike, Microsoft, Cisco, Zscaler, Check Point, SentinelOne, Wiz |
| 스타트업 6사 | 한 통제 지점에 특화해 대형이 비운 자리를 메움 | Harmonic, WitnessAI, Nightfall, Cyberhaven, HiddenLayer, Mindgard |

## 같은 일, 다른 자리 — 통제 지점

도입에 무엇이 필요한지를 가르는 건 통제 지점이 어디 있느냐입니다. 같은 ② 직원 AI 사용 통제라도, 네트워크에서 막으려면 SASE가 있어야 하고 단말에서 막으려면 단말마다 소프트웨어를 깔아야 합니다.

| 통제 지점 | 어디서 | 대표 벤더 | 도입에 필요한 것 |
|---|---|---|---|
| 네트워크 회선 | 직원과 외부 AI 사이(SASE, 프록시) | Zscaler, WitnessAI, Cisco, Palo Alto | SASE 또는 TLS 가로채기. 인증서 핀닝 앱은 사각 |
| 앱과 모델 사이 | 사내 앱이 부르는 LLM 앞(런타임 가드레일) | Lakera, Prompt Security, AI Guard, Prompt Shields | 앱이 게이트를 거치도록 연결 |
| 단말과 브라우저 | 직원 PC에서 제출 전 | Harmonic, Nightfall, Cyberhaven | 단말마다 확장과 에이전트 설치. TLS와 무관 |
| 클라우드 태세 | 클라우드 설정을 밖에서 읽음 | Wiz, Defender AI-SPM | 클라우드 계정 연결. 실시간 차단은 아님 |
| 모델 파일 | 배포 전 모델을 정적 스캔 | HiddenLayer, Palo Alto | CI/CD와 모델 레지스트리 연결 |
| 공격 시뮬레이션 | 만든 AI를 공격해 약점 찾기 | Mindgard, Lakera Red | API 접근. 막는 게 아니라 테스트 |

직원의 AI 사용을 막고 싶다면 먼저 단말에 소프트웨어를 깔 수 있는지를 정해야 합니다. 깔 수 있으면 단말 방식이 가장 확실하고(TLS와 핀닝에 막히지 않음), 이미 SASE가 있으면 네트워크 방식이 빠릅니다. 캡처 기술의 자세한 비교는 [AI 사용 가시화](/ai/ai-usage-visibility/)에 있습니다.

## 무엇부터 보면 되나

| 지금 급한 일 | 출발점 |
|---|---|
| 직원이 외부 AI에 뭘 넣는지 모른다 | [AI 사용 가시화](/ai/ai-usage-visibility/) → Zscaler, Harmonic, WitnessAI |
| 사내 LLM 앱의 프롬프트를 막아야 한다 | [LLM 게이트웨이](/ai/llm-gateway/) → Lakera, Prompt Security |
| 외부에서 받은 모델이 안전한지 모른다 | [모델 공급망](/ai/model-supply-chain/) → HiddenLayer, Protect AI |
| 배포 전 약점을 찾고 싶다 | [AI 레드티밍](/ai/ai-red-teaming/) → Mindgard, HiddenLayer |
| 회사에 어떤 AI 자산이 있는지 모른다 | [AI-SPM](/ai/ai-spm/) → Wiz, Prisma AIRS |
| SOC 인력이 부족하다 | [AI로 보안 강화](/ai/augment-security/) → Charlotte AI, Security Copilot |

## 더 자세히

- 회사별 제품군과 아키텍처(ZTA): [벤더 프로필](/ai/vendors/)
- 기능별 시장 동향: [AI 보안](/ai/) — ① 지키기 / ② 사용 가시화 / ③ 보안 강화
- 기준이 되는 표준: [표준과 규제](/framework/) — OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF

각 항목의 수치와 출처는 해당 [벤더 프로필](/ai/vendors/)에 있습니다. 시장이 빠르게 바뀌므로 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-06-07, 최종 확인 2026-06-07, 다음 확인 2026-07-07
