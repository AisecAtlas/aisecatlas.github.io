---
title: "AI 보안 지도"
description: "14개 벤더를 한 장으로. 기능(① 보호 / ② 사용 / ③ 강화) × 벤더 교차표, 아키텍처(통제 지점) 유형, 어떻게 고르나. 벤더 프로필로 들어가는 지도입니다."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["AI Security", "벤더 지도", "AI 보안 솔루션"]
ShowToc: true
---

> **이 페이지의 결론**: AI 보안 벤더는 두 무리입니다. **대형 8사**는 ①②③ 전 스펙트럼을 한 플랫폼에 담고, **스타트업 6사**는 단일 기능에 특화해 대형이 비운 자리를 메웁니다. 벤더를 가르는 진짜 기준은 "무엇을 커버하나"가 아니라 **"어디서 통제하나(통제 지점)"**와 **"무엇을 보호하나"**입니다. 이 지도는 14개 벤더를 기능과 아키텍처로 배치하고, 각 [벤더 프로필](/ai/vendors/)로 들어가는 입구입니다.

## AI 공격표면 (기준 지형)

벤더는 이 6단계 중 어디에 통제 지점을 두느냐로 갈립니다. 위협 ID는 OWASP LLM Top 10과 MITRE ATLAS 기준입니다.

{{< ai-pipeline title="AI 공격표면 6단계" >}}

## 기능 × 벤더 교차표

행은 벤더, 열은 보안표준 기능입니다. ③은 AI 보안이 아니라 AI로 보안을 강화하는 일이라 따로 둡니다.

| 벤더 | ① AI 보호 | ② AI 사용 보호 | ③ AI로 보안 강화 |
|---|---|---|---|
| [Palo Alto](/ai/vendors/palo-alto/) | Prisma AIRS | AI Access Security | — |
| [CrowdStrike](/ai/vendors/crowdstrike/) | AIDR, AI-SPM, Shield | Data Protection, Shadow AI | Charlotte AI |
| [Microsoft](/ai/vendors/microsoft/) | Defender AI-SPM, Prompt Shields, Entra Agent ID | Purview DSPM for AI, Defender for Cloud Apps | Security Copilot |
| [Cisco](/ai/vendors/cisco/) | AI Defense | AI Access(Secure Access) | Splunk |
| [Zscaler](/ai/vendors/zscaler/) | AI Guard, AI-SPM | AI Access Security(핵심), DSPM | Data Fabric |
| [Check Point](/ai/vendors/check-point/) | AI Agent Security, AI Red Teaming(Lakera) | GenAI Protect | Infinity AI Copilot |
| [SentinelOne](/ai/vendors/sentinelone/) | Prompt Security 런타임, AI-SPM | Prompt Security 직원 보호 | Purple AI |
| [Wiz](/ai/vendors/wiz/) | AI-SPM, AI-BOM, DSPM for AI(태세) | 섀도 AI 발견(부분) | Wiz Defend |
| [Harmonic](/ai/vendors/harmonic/) | MCP Gateway | Shadow AI(브라우저) | — |
| [WitnessAI](/ai/vendors/witnessai/) | AI Firewall | AI 사용 거버넌스(네트워크 인라인) | — |
| [Nightfall](/ai/vendors/nightfall/) | — | GenAI DLP(엔드포인트 + API 하이브리드) | — |
| [Cyberhaven](/ai/vendors/cyberhaven/) | — | 데이터 리니지(엔드포인트) | — |
| [HiddenLayer](/ai/vendors/hiddenlayer/) | Model Scanner, AIDR, AIBOM | — | — |
| [Mindgard](/ai/vendors/mindgard/) | AI 레드티밍(공세적) | — | — |

빈 칸은 그 벤더가 비운 기능이자 시장 지형의 빈틈입니다. 대형 8사는 ①②③이 거의 채워지고, 스타트업은 한 칸에 깊습니다.

## 대형과 스타트업

| 무리 | 특징 | 벤더 |
|---|---|---|
| 대형 8사 | ①②③ 전 스펙트럼, 기존 플랫폼(SASE, 엔드포인트, M365, 네트워크, CNAPP) 위에 AI 보안을 얹음. 인수로 ① 칸을 채운 경우 많음(Lakera, Protect AI, Robust Intelligence, Prompt Security) | Palo Alto, CrowdStrike, Microsoft, Cisco, Zscaler, Check Point, SentinelOne, Wiz |
| 스타트업 6사 | 단일 기능 특화, 대형이 비운 통제 지점을 메움. 인접 기능으로 확장 중(Harmonic의 MCP Gateway 등) | Harmonic, WitnessAI, Nightfall, Cyberhaven, HiddenLayer, Mindgard |

## 아키텍처 — 통제 지점(PEP) 유형

같은 기능이라도 통제 지점의 위치가 다릅니다. 이것이 도입 전제(무엇이 필요한가)를 가릅니다.

| 유형 | 어디서 | 대표 벤더 | 도입 전제 |
|---|---|---|---|
| 네트워크 인라인 | 직원과 외부 AI 사이(SASE, 프록시) | Zscaler, WitnessAI, Cisco AI Access, Palo Alto AI Access | SWG/SASE 또는 TLS 가로채기. 핀닝 앱 사각 |
| 앱과 모델 게이트 | 사내 앱과 LLM 사이(런타임 가드레일) | Lakera(Check Point), Prompt Security(SentinelOne), Zscaler AI Guard, Prompt Shields, WitnessAI Firewall | 앱이 게이트를 거치도록 구성 |
| 엔드포인트와 브라우저 | 단말에서 제출 전 | Harmonic, Nightfall, Cyberhaven, Purview Endpoint DLP | 단말에 확장과 에이전트 배포. TLS와 핀닝 무관 |
| 태세 스캔 | 클라우드 구성을 out-of-band 읽기 | Wiz AI-SPM, Defender AI-SPM, CrowdStrike AI-SPM | 클라우드 계정 연결. 인라인 차단은 아님 |
| 모델 아티팩트 스캔 | 빌드타임에 모델 바이너리 정적 분석 | HiddenLayer, Palo Alto AI Model Security | CI/CD와 모델 레지스트리 통합 |
| 공세적 레드티밍 | 타깃 AI를 인터페이스로 공격 | Mindgard, HiddenLayer Attack Sim, Lakera Red | API와 CI/CD 접근. 방어가 아니라 테스트 |

> **핵심.** ② 직원 AI 사용 보호 안에서도 네트워크 인라인(WitnessAI)과 단말 브라우저(Harmonic)는 도입 전제가 다릅니다. ① AI 보호 안에서도 게이트와 태세 스캔과 모델 스캔은 보호 대상이 다릅니다. 캡처 메커니즘의 기술 비교는 [AI 사용 가시화](/ai/ai-usage-visibility/)가 정리합니다.

## 어떻게 고르나

세 질문을 순서로 답합니다.

**1단계: 어느 기능인가.** 사내 AI를 지키나(①), 직원 AI 사용을 보나(②), SOC를 가속하나(③). 위 교차표의 열을 고릅니다. ③은 AI 보안이 아니라 [AI로 보안 강화](/ai/augment-security/)임을 기억합니다.

**2단계: 어느 통제 지점이 가능한가.** 위 아키텍처 표에서 도입 전제를 봅니다. 단말 배포가 가능하면 엔드포인트/브라우저, 기존 SASE가 있으면 네트워크 인라인, 사내 앱을 직접 만들면 앱과 모델 게이트입니다.

**3단계: 무엇을 보호하나.** ①이면 프롬프트 흐름(게이트), 모델 바이너리(스캔), 클라우드 구성(태세), 약점 발견(레드티밍) 중 무엇이 급한지 정합니다.

| 상황 | 권장 진입 |
|---|---|
| 직원 AI 사용을 먼저 보고 싶다 | [AI 사용 가시화](/ai/ai-usage-visibility/) → Zscaler, Harmonic, WitnessAI |
| 사내 LLM 앱 런타임을 막고 싶다 | [LLM 게이트웨이](/ai/llm-gateway/) → Lakera, Prompt Security |
| 모델 공급망이 걱정이다 | [모델 공급망](/ai/model-supply-chain/) → HiddenLayer, Protect AI |
| 배포 전 약점을 찾고 싶다 | [AI 레드티밍](/ai/ai-red-teaming/) → Mindgard, HiddenLayer |
| AI 자산 인벤토리가 없다 | [AI-SPM](/ai/ai-spm/) → Wiz, Prisma AIRS |

## 렌즈 전환

같은 14벤더를 다른 렌즈로 봅니다.

- **기능별**: [AI 보안 허브](/ai/) — ① 지키기 / ② 사용 가시화 / ③ 보안 강화
- **벤더별**: [벤더 프로필](/ai/vendors/) — 대형 8사와 스타트업
- **표준별**: [표준과 규제](/framework/) — OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF

## 면책

본 지도는 각 벤더 공식 자료를 근거로 한 [벤더 프로필](/ai/vendors/)의 요약입니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 상세와 출처는 각 벤더 프로필을 보고, 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-06-07, 최종 확인 2026-06-07, 다음 확인 2026-07-07
