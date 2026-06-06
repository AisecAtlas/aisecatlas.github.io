---
title: "Palo Alto Networks"
description: "Prisma AIRS와 AI Access Security. AI를 보호하는 일과 AI 사용행위를 보호하는 일을 한 벤더에서 어떻게 나누는가."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Palo Alto Networks", "Prisma AIRS", "AI Access Security", "AI Security", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

> **이 페이지의 결론**: Palo Alto는 AI 보안을 **두 제품으로 분리**한다. **Prisma AIRS**는 조직이 *직접 만든 AI*(모델, 앱, 에이전트)를 빌드부터 런타임까지 보호하고(Ⅰ. AI를 보호), **AI Access Security**는 *직원이 쓰는 외부 GenAI*를 SASE 인라인에서 통제한다(Ⅱ. AI 사용행위 보호). 인수한 **Protect AI**(2025-07-22 완료)가 Prisma AIRS의 모델 스캐닝과 레드티밍의 기반이다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Palo Alto Networks (NASDAQ: PANW), 미국 캘리포니아 산타클라라 |
| AI 보호(Ⅰ) | **Prisma AIRS** — 모델 보안, AI-SPM 태세, 런타임, 에이전트 보안, 레드티밍 |
| AI 사용행위 보호(Ⅱ) | **AI Access Security** — Prisma SASE 기반 Shadow AI 통제 |
| 인수한 AI 스타트업 | **Protect AI** (2025-07-22 인수 완료, Prisma AIRS의 cornerstone) |
| 제어판 | Strata Cloud Manager / Panorama |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF) 기준으로, Palo Alto는 AI 공격표면의 **모델부터 사용행위까지** 통제 지점을 갖는다.

{{< ai-pipeline title="Palo Alto 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**Prisma AIRS**가 모델, 배포, 추론과 런타임, 에이전트 단계를 보호하고(데이터 단계는 AI-SPM 태세로 가시화), **AI Access Security**가 사용자 사용행위 단계를 SASE 인라인에서 통제한다." >}}

| 표준 기능 | 분류 | Palo Alto 제품 |
|---|---|---|
| AI 거버넌스와 자산 가시성(AI-SPM) | Ⅰ AI 보호 | Prisma AIRS — AI Posture Management |
| AI 런타임 보호(인젝션과 출력) | Ⅰ AI 보호 | Prisma AIRS — AI Runtime Security |
| AI 모델과 공급망 보안 | Ⅰ AI 보호 | Prisma AIRS — AI Model Security (Protect AI 기반) |
| AI 에이전트 보안 | Ⅰ AI 보호 | Prisma AIRS — AI Agent Security (AIRS 3.0) |
| AI 사용 통제와 Shadow AI | Ⅱ AI 사용행위 보호 | AI Access Security |

## 제품군 (공식문서 기반)

### Prisma AIRS (AI Runtime Security)

조직이 빌드한 AI를 보호하는 플랫폼. 공식 제품 페이지 기준 다섯 기능으로 구성된다([Prisma AIRS](https://www.paloaltonetworks.com/prisma/prisma-ai-runtime-security)).

| 기능 | 무엇을 하나 |
|---|---|
| AI Model Security | 서드파티 모델의 변조, 악성 스크립트, 역직렬화 백도어를 배포 전 스캔 |
| AI Posture Management (AI-SPM) | AI 데이터, 앱과 에이전트 무결성, 모델 접근의 태세 가시화와 통제 |
| AI Runtime Security | 프롬프트 조작, 데이터 노출, 안전하지 않은 행동을 실시간 차단 |
| AI Agent Security | 에이전트 신원 검증, 무단 행동 차단 (AIRS 3.0의 중심) |
| AI Red Teaming | 실제 공격 시나리오로 배포 전 자동 시뮬레이션 |

런타임 통합은 두 방식이다. **API Intercept**는 앱 코드에 내장된 Security-as-Code가 지역 Scan API로 프롬프트와 응답을 보내 검사하고(동기 2MB, 비동기 5MB 한도), **Network Intercept**는 퍼블릭/프라이빗 클라우드에 배치된 인라인 방화벽이다([API Intercept 개요](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview)).

버전 흐름: **AIRS 2.0**(2025-10-28)이 인수한 Protect AI의 네이티브 통합을 완료했고, **AIRS 3.0**(2026-03-23)이 에이전트 보안 플랫폼으로 확장하며 발견, 위험 평가, 실시간 보호(AI Agent Gateway)를 더했다([AIRS 2.0](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-secures-the-ai-agent-revolution-with-the-launch-of-prisma-airs-2-0), [AIRS 3.0](https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-secures-agentic-ai-with-prisma-airs-3-0)).

### AI Access Security

직원의 외부 GenAI 사용을 Prisma SASE 데이터 경로에서 통제한다([AI Access Security](https://www.paloaltonetworks.com/sase/ai-access-security)).

| 항목 | 내용 |
|---|---|
| 캡처 방식 | Prisma Access PoP 또는 NGFW 인라인 검사, TLS 복호화 |
| 앱 식별 | GenAI 앱 사전. 공식 제품 페이지 4,000개 이상(문서 포털은 500개 이상, 2026-03 블로그는 6,000개 이상으로 출처별 상이) |
| 데이터 분류 | Enterprise DLP + 300개 이상 ML 분류기, 컨텍스트 기반 LLM 분류 |
| 통제 | Internet Access 정책으로 사용자 그룹별 허용, 차단, 기능 제한. 프롬프트 이력 감사 |

## 보안 아키텍처

두 제품은 끼는 위치가 다르다. AI Access Security는 **나가는 트래픽**(직원 → 외부 AI)을, Prisma AIRS는 **사내 AI 주변**(빌드, 런타임, 태세)을 본다.

<div class="arch">
<div class="arch-title">AI Access Security — SASE 인라인 (직원 → 외부 GenAI)</div>
<div class="arch-stack">
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">사용자 / 엔드포인트</div><div class="arch-layer-sub">프롬프트 입력, 파일 업로드</div></div><div class="arch-tag">출발</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">Prisma Access PoP / NGFW</div><div class="arch-layer-sub">App-ID로 GenAI 앱 식별, TLS 복호화, Enterprise DLP와 300개 분류기로 프롬프트와 파일 검사, 정책 차단</div></div><div class="arch-tag">통제 지점</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">외부 GenAI 앱</div><div class="arch-layer-sub">ChatGPT, Gemini, Copilot 등</div></div><div class="arch-tag">목적지</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> 통제 지점 = Palo Alto가 트래픽을 가로채 검사하고 차단하는 지점. 제어판은 Strata Cloud Manager 또는 Panorama.</div>
</div>

<div class="arch">
<div class="arch-title">Prisma AIRS — 사내 구축 AI 보호 (빌드, 런타임, 태세)</div>
<div class="arch-stack">
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">빌드 — AI Model Security</div><div class="arch-layer-sub">모델 레지스트리와 배포 전, 변조와 악성 스크립트와 역직렬화 스캔. AI Red Teaming으로 공격 시뮬레이션</div></div><div class="arch-tag">통제</div></div>
  <div class="arch-flow"></div>
  <div class="arch-boundary"><span class="arch-boundary-label">사내 AI 앱과 에이전트</span>
    <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">사용자 / 에이전트</div><div class="arch-layer-sub">프롬프트 요청</div></div></div>
    <div class="arch-flow"></div>
    <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">런타임 — API Intercept 또는 Network Intercept</div><div class="arch-layer-sub">Scan API(코드 내장) 또는 인라인 클라우드 방화벽이 프롬프트와 응답을 검사. 인젝션, 데이터 노출, 안전하지 않은 출력 차단</div></div><div class="arch-tag">통제</div></div>
    <div class="arch-flow"></div>
    <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">LLM / 모델</div><div class="arch-layer-sub">model-agnostic</div></div></div>
  </div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">태세 — AI Posture Management (AI-SPM)</div><div class="arch-layer-sub">전 구간에 걸쳐 클라우드 AI 자산, 학습과 추론 데이터, 모델 접근을 지속 점검</div></div><div class="arch-tag">통제</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> 점선 박스 = 보호 대상인 사내 AI 앱과 에이전트. 통제 = Prisma AIRS가 작동하는 지점.</div>
</div>

## 강점과 한계

**강점**
- AI를 보호(AIRS)와 AI 사용행위 보호(AI Access Security)를 한 벤더의 단일 제어판(Strata Cloud Manager)에서 운영
- 인수한 Protect AI로 모델 스캐닝과 레드티밍을 네이티브 통합, AIRS 3.0에서 에이전트 보안까지 확장
- 런타임을 API Intercept와 Network Intercept 두 방식으로 제공해 코드 내장과 인라인 중 선택
- 기존 Prisma SASE 자산이 있으면 AI Access Security를 정책으로 활성화

**한계**
- 두 제품의 경계가 혼동되기 쉽다. AI Access Security(외부 AI 사용 통제)와 Prisma AIRS(사내 AI 보호)는 다른 문제를 푼다
- GenAI 앱 사전 규모가 공식 출처마다 다르다(500에서 6,000개 이상). 도입 시 현행 수치를 직접 확인
- Prisma AIRS의 한국 데이터 리전은 공식 자료에서 확인되지 않음(2026-03 싱가포르 랜딩만 발표)

## 한국 시장 노트

**데이터 리전.** Prisma Access는 서울(Seoul) PoP를 운영하며 Explicit Proxy와 Colo-Connect를 지원한다([Prisma Access 위치 목록](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-overview/list-of-prisma-access-locations)). AI Access Security는 Prisma Access 위에서 동작하므로 국내 PoP 적용이 가능하다.

**Prisma AIRS 리전.** AIRS의 한국 리전 보장은 공식 자료에서 확인되지 않는다. 2026-03 싱가포르 랜딩이 발표됐다. 공공과 금융 도입 전 직접 확인한다.

**CSAP와 망분리.** 클라우드 인라인 경유 구조는 [CSAP](/korea/regulation/csap-n2sf/)와 데이터 처리 리전 검토 대상이다.

## 출처

- [Prisma AIRS 제품 페이지](https://www.paloaltonetworks.com/prisma/prisma-ai-runtime-security)
- [Prisma AIRS 문서 포털](https://docs.paloaltonetworks.com/ai-runtime-security)
- [AI Runtime Security — API Intercept 개요](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview)
- [AI Access Security 제품 페이지](https://www.paloaltonetworks.com/sase/ai-access-security)
- [Introducing AI Access Security (문서)](https://docs.paloaltonetworks.com/ai-access-security/getting-started/introducing-ai-access-security)
- [Protect AI 인수 완료 (2025-07-22)](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-completes-acquisition-of-protect-ai)
- [Prisma AIRS 2.0 (2025-10-28)](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-secures-the-ai-agent-revolution-with-the-launch-of-prisma-airs-2-0)
- [Prisma AIRS 3.0 (2026-03-23)](https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-secures-agentic-ai-with-prisma-airs-3-0)
- [Prisma Access 위치 목록 (서울 PoP)](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-overview/list-of-prisma-access-locations)

## 면책

본 정리는 Palo Alto Networks 공식 자료를 근거로 한다. 제품 사양과 시장 상황은 빠르게 바뀐다. 도입 전 최신 공식 발표를 확인한다. GenAI 앱 수와 한국 리전은 출처별로 다르거나 미확인이므로 직접 검증한다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
