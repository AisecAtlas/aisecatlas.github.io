---
title: "Mindgard"
description: "AI를 공격해 취약점을 찾는 공세적 AI 레드티밍 스타트업(①). 타깃 AI를 인터페이스로 자동 공격하고 결과를 OWASP LLM Top 10과 MITRE ATLAS에 매핑합니다."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["Mindgard", "AI Red Teaming", "Offensive AI Security", "MITRE ATLAS", "스타트업"]
categories: ["vendor-profile"]
ShowToc: true
---

Mindgard는 "공세적 AI 보안"을 표방하는 스타트업입니다. AI를 **방어**하는 인라인 가드레일이나 모델 바이너리 스캐너와 달리, 타깃 AI를 **공격**해 약점을 먼저 찾습니다(①). Mindgard 플랫폼이 고객의 LLM과 GenAI 앱과 에이전트를 인터페이스(API, CLI, Burp, CI/CD)로 자동 공격하고, 발견한 취약점을 OWASP LLM Top 10과 MITRE ATLAS에 매핑합니다. Lancaster University 10년 이상 연구에서 나온 스핀아웃입니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Mindgard (비상장), 영국 런던과 미국 보스턴. 2022년 Lancaster University 스핀아웃, 창업자 Peter Garraghan 교수 |
| ① AI 보호 | **자동 AI 레드티밍**, AI Discovery와 Recon, AI Assessment, Attack Library |
| 표준 매핑 | OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF, EU AI Act |
| 캡처 기반 | 타깃 AI를 인터페이스로 공격(API, CLI, Python SDK, Burp, CI/CD) |
| 투자 | 시드 £3M(2023-09, IQ Capital와 Lakestar), $8M 라운드(2024-12, .406 Ventures 주도) |
| 최종 확인일 | 2026-06-07 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 Mindgard는 모델과 런타임과 에이전트 단계를 **테스트**합니다. 인라인으로 방어하는 것이 아니라 공격해 약점을 찾습니다(①).

{{< ai-pipeline title="Mindgard 테스트 범위 (AI 공격표면)" highlight="model,runtime,agent" note="Mindgard는 모델과 런타임과 에이전트 단계를 적대적 공격으로 테스트해 약점을 찾습니다. 인라인 방어 PEP가 아니라 배포 전과 지속 테스트입니다. 결과는 가드레일 튜닝과 리미디에이션으로 이어집니다." >}}

| 표준 기능 | 분류 | Mindgard 모듈 |
|---|---|---|
| AI 자산 발견 | ① AI 보호 | AI Discovery와 Recon(섀도 AI와 공격표면) |
| AI 모델 검증(레드티밍) | ① AI 보호 | 자동 AI 레드티밍, Attack Library |
| AI 보안 평가 | ① AI 보호 | AI Assessment(취약점 발견과 수정) |
| AI 에이전트 보안 테스트 | ① AI 보호 | 시스템 단위 테스트(에이전트, 도구, API, 워크플로) |

## 제품군 (공식문서 기반)

### 자동 AI 레드티밍 — 공세적 테스트

Mindgard는 모델 단독이 아니라 **AI 시스템 전체**를 테스트합니다. 에이전트와 도구와 API와 데이터 소스와 워크플로가 어떻게 상호작용하는지까지 포착합니다([Mindgard](https://mindgard.ai/)). 자율 레드티머처럼 정찰, 익스플로잇 계획, 실행을 거쳐 실제 공격자 행동을 모사합니다.

| 항목 | 내용 |
|---|---|
| Attack Library | Lancaster University 10년 이상 연구에서 나온 LLM과 ML 공격 기법 목록(탈옥, 프롬프트 인젝션 등) |
| 시스템 단위 테스트 | 모델뿐 아니라 에이전트, 도구, API, 워크플로의 상호작용을 테스트 |
| 배포 | CI/CD, Burp Suite, 원클릭. CLI, Python SDK, 웹 UI, REST API |
| 표준 매핑 | 발견 위험을 OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF, EU AI Act에 매핑 |

## 보안 아키텍처

Mindgard는 방어하는 PEP가 아니라 **타깃 AI를 공격하는 레드팀 엔진**입니다. AI 앱 밖에서 인터페이스로 공격합니다.

<div class="arch">
<div class="arch-title">① Mindgard — 공세적 레드팀 엔진 (방어 PEP 아님)</div>
<div class="arch-stack">
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">Mindgard 플랫폼 (공격자)</div><div class="arch-layer-sub">레드팀 엔진과 Attack Library. 정찰, 익스플로잇 계획, 실행을 자율 수행</div></div><div class="arch-tag">공격</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">타깃 AI 시스템</div><div class="arch-layer-sub">고객의 LLM, GenAI 앱, 챗봇, 에이전트와 도구. API, CLI, Burp, CI/CD로 접근</div></div><div class="arch-tag">대상</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">취약점 발견</div><div class="arch-layer-sub">응답을 관찰해 약점 식별, OWASP와 ATLAS와 NIST와 EU AI Act에 매핑</div></div><div class="arch-tag">결과</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">리미디에이션</div><div class="arch-layer-sub">가드레일 튜닝, 티켓팅, CI/CD 게이트로 전달. 배포 전과 지속 테스트</div></div><div class="arch-tag">후속</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> Mindgard는 AI를 방어하지 않고 공격해 약점을 먼저 찾습니다. 인라인 가드레일(Lakera)이 런타임을 막고, 모델 스캐너(HiddenLayer)가 바이너리를 보는 것과 달리, 타깃 AI를 인터페이스로 적대적으로 테스트합니다. (모델 내부 없이 인터페이스로 테스트하는 black-box 성격은 동작에서 추론한 것이고 공식 직접 인용은 아닙니다.)</div>
</div>

## 강점과 한계

**강점**
- 모델 단독이 아니라 AI 시스템 전체(에이전트, 도구, API, 워크플로)를 테스트
- Lancaster University 10년 이상 연구 기반 Attack Library
- 발견을 OWASP, MITRE ATLAS, NIST AI RMF, EU AI Act에 매핑해 거버넌스로 연결
- CI/CD와 Burp와 CLI와 SDK로 개발 워크플로에 통합

**한계**
- 테스트와 평가 도구라 런타임 방어는 별도 애드온(AI Runtime Protection)에 의존
- "Series A" 라운드 명칭과 통합 누적 투자액은 공식 자료에서 확인되지 않음(시드 £3M과 $8M 라운드만 확인)
- black-box 테스트 성격과 일부 토폴로지는 공식 직접 인용이 아니라 추론
- 한국 특화 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** Mindgard의 한국 사무소, 한국어 자료, 국내 파트너는 공식 자료에서 확인되지 않습니다. 공식 확장은 런던과 보스턴 중심입니다. 도입 시 CI/CD 파이프라인 통합 위치에서 적용하고, 처리 위치를 [CSAP](/korea/regulation/csap-n2sf/) 관점에서 확인합니다.

## 관련 페이지

- [AI를 지키는 일](/ai/defend-ai/)
- [AI 레드티밍](/ai/ai-red-teaming/)
- [AI 보안 지도](/ai/map/)
- [벤더 프로필](/ai/vendors/)

## 출처

- [Mindgard 홈](https://mindgard.ai/)
- [Automated AI Red Teaming](https://mindgard.ai/automated-ai-red-teaming)
- [AI Security Platform](https://mindgard.ai/ai-security-platform)
- [회사 소개와 창업자](https://mindgard.ai/about)
- [문서(CLI, SDK, Attack Library)](https://docs.mindgard.ai/)
- [$8M 라운드 (2024-12, .406 Ventures)](https://mindgard.ai/blog/mindgard-raises-8m-industry-first-ai-security-solution)
- [시드 £3M (Lancaster University, 2023-09)](https://www.lancaster.ac.uk/news/lancaster-university-spinout-mindgard-ltd-raises-3m-in-seed-funding)
- 비교 솔루션: [HiddenLayer](/ai/vendors/hiddenlayer/), [AI 레드티밍 비교](/ai/ai-red-teaming/)

## 면책

본 정리는 Mindgard와 Lancaster University 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 라운드 명칭과 누적 투자액, black-box 성격, 한국 자료는 공식 직접 확인이 필요하므로 검증합니다.

---
최초 발행 2026-06-07, 최종 확인 2026-06-07, 다음 확인 2026-07-07
