---
title: "Palo Alto Networks"
description: "Prisma AIRS와 AI Access Security. AI를 보호하는 일과 AI 사용행위를 보호하는 일을 한 벤더에서 어떻게 나누는가."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Palo Alto Networks", "Prisma AIRS", "AI Access Security", "AI Security", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

Palo Alto는 AI 보안을 **두 제품으로 분리**합니다. **Prisma AIRS**는 조직이 직접 만든 AI(모델, 앱, 에이전트)를 빌드부터 런타임까지 보호하고(Ⅰ. AI를 보호), **AI Access Security**는 직원이 쓰는 외부 GenAI를 SASE 인라인에서 통제합니다(Ⅱ. AI 사용행위 보호). 인수한 **Protect AI**(2025-07-22 완료)가 Prisma AIRS의 모델 스캐닝과 레드티밍의 기반입니다.

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

보안표준(OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF) 기준으로, Palo Alto는 AI 공격표면의 **모델부터 사용행위까지** 통제 지점을 갖습니다.

{{< ai-pipeline title="Palo Alto 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**Prisma AIRS**가 모델, 배포, 추론과 런타임, 에이전트 단계를 보호하고(데이터 단계는 AI-SPM 태세로 가시화), **AI Access Security**가 사용자 사용행위 단계를 SASE 인라인에서 통제합니다." >}}

| 표준 기능 | 분류 | Palo Alto 제품 |
|---|---|---|
| AI 거버넌스와 자산 가시성(AI-SPM) | Ⅰ AI 보호 | Prisma AIRS — AI Posture Management |
| AI 런타임 보호(인젝션과 출력) | Ⅰ AI 보호 | Prisma AIRS — AI Runtime Security |
| AI 모델과 공급망 보안 | Ⅰ AI 보호 | Prisma AIRS — AI Model Security (Protect AI 기반) |
| AI 에이전트 보안 | Ⅰ AI 보호 | Prisma AIRS — AI Agent Security (AIRS 3.0) |
| AI 사용 통제와 Shadow AI | Ⅱ AI 사용행위 보호 | AI Access Security |

## 제품군 (공식문서 기반)

### Prisma AIRS (AI Runtime Security)

조직이 빌드한 AI를 보호하는 플랫폼. 공식 제품 페이지 기준 다섯 기능으로 구성됩니다([Prisma AIRS](https://www.paloaltonetworks.com/prisma/prisma-ai-runtime-security)).

| 기능 | 무엇을 하나 |
|---|---|
| AI Model Security | 서드파티 모델의 변조, 악성 스크립트, 역직렬화 백도어를 배포 전 스캔 |
| AI Posture Management (AI-SPM) | AI 데이터, 앱과 에이전트 무결성, 모델 접근의 태세 가시화와 통제 |
| AI Runtime Security | 프롬프트 조작, 데이터 노출, 안전하지 않은 행동을 실시간 차단 |
| AI Agent Security | 에이전트 신원 검증, 무단 행동 차단 (AIRS 3.0의 중심) |
| AI Red Teaming | 실제 공격 시나리오로 배포 전 자동 시뮬레이션 |

런타임 통합은 두 방식입니다. **API Intercept**는 앱 코드에 내장된 Security-as-Code가 지역 Scan API로 프롬프트와 응답을 보내 검사하고(동기 2MB, 비동기 5MB 한도), **Network Intercept**는 퍼블릭/프라이빗 클라우드에 배치된 인라인 방화벽입니다([API Intercept 개요](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview)).

버전 흐름: **AIRS 2.0**(2025-10-28)이 인수한 Protect AI의 네이티브 통합을 완료했고, **AIRS 3.0**(2026-03-23)이 에이전트 보안 플랫폼으로 확장하며 발견, 위험 평가, 실시간 보호(AI Agent Gateway)를 더했습니다([AIRS 2.0](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-secures-the-ai-agent-revolution-with-the-launch-of-prisma-airs-2-0), [AIRS 3.0](https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-secures-agentic-ai-with-prisma-airs-3-0)).

### AI Access Security

직원의 외부 GenAI 사용을 Prisma SASE 데이터 경로에서 통제합니다([AI Access Security](https://www.paloaltonetworks.com/sase/ai-access-security)).

| 항목 | 내용 |
|---|---|
| 캡처 방식 | Prisma Access PoP 또는 NGFW 인라인 검사, TLS 복호화 |
| 앱 식별 | GenAI 앱 사전. 공식 제품 페이지 4,000개 이상(문서 포털은 500개 이상, 2026-03 블로그는 6,000개 이상으로 출처별 상이) |
| 데이터 분류 | Enterprise DLP + 300개 이상 ML 분류기, 컨텍스트 기반 LLM 분류 |
| 통제 | Internet Access 정책으로 사용자 그룹별 허용, 차단, 기능 제한. 프롬프트 이력 감사 |

## 보안 아키텍처 (ZTA 기준)

NIST SP 800-207 제로 트러스트 구조로 보면, 두 제품 모두 **주체의 신원 확인 → 통제 지점(PEP) → 통제 대상(자원)** 흐름에 **정책 결정(PDP)**과 **상호작용 시스템**이 붙습니다. 둘의 차이는 주체와 자원, PEP의 위치입니다.

<div class="zta">
<div class="zta-title">AI Access Security — 직원의 외부 GenAI 사용 통제</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>접근 정책 결정</b><span>사용자와 그룹, GenAI 앱, 데이터 분류로 허용 또는 차단 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Strata Cloud Manager / Panorama</b><span>정책 배포와 세션 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 엔드포인트</b><span>IdP와 SSO 신원, 기기 신뢰, 사용자 그룹</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>Prisma Access PoP / NGFW</b><span>App-ID 앱 식별, TLS 복호화, Enterprise DLP와 300개 분류기 검사, 차단</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>외부 GenAI 앱</b><span>ChatGPT, Gemini, Copilot. 보호 대상은 반출되는 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">IdP / 사용자 신원</span><span class="zta-chip">Enterprise DLP</span><span class="zta-chip">Precision AI 위협 인텔</span><span class="zta-chip">Strata Logging (SIEM)</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 미신뢰 상태로 PEP에 요청하고, ② PEP가 검사 후 허용 시 자원에 전달합니다. 강조한 통제 지점(PEP)이 PDP의 결정에 따라 인라인 차단합니다.</div>
</div>

<div class="zta">
<div class="zta-title">Prisma AIRS — 사내 구축 AI 보호 (런타임 PEP 중심)</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>AIRS 런타임 정책</b><span>프롬프트와 응답의 인젝션, 데이터 노출, 안전하지 않은 출력 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Strata Cloud Manager</b><span>정책 배포와 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사용자 / AI 에이전트</b><span>에이전트와 워크로드 신원(NHI), 도구 권한</span></div>
<div class="zta-harrow" data-label="① 호출"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>런타임 인터셉트</b><span>API Intercept(Scan API) 또는 Network Intercept(인라인 방화벽)가 프롬프트와 응답 검사</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>사내 LLM / 모델 / 에이전트</b><span>model-agnostic. 보호 대상은 모델과 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템 (신뢰 공급)</div>
<div class="zta-chips"><span class="zta-chip">AI-SPM 태세 (CDM 역할)</span><span class="zta-chip">AI Model Security 모델 스캔 (Protect AI)</span><span class="zta-chip">AI Red Teaming</span><span class="zta-chip">활동 로그</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 모델을 호출하면 ② 런타임 인터셉트(PEP)가 검사 후 전달합니다. 배포 전 모델 스캔과 지속 태세(AI-SPM)가 PDP에 신뢰 신호를 공급합니다(NIST 800-207의 CDM과 위협 인텔 입력에 대응).</div>
</div>

## 강점과 한계

**강점**
- AI를 보호(AIRS)와 AI 사용행위 보호(AI Access Security)를 한 벤더의 단일 제어판(Strata Cloud Manager)에서 운영
- 인수한 Protect AI로 모델 스캐닝과 레드티밍을 네이티브 통합, AIRS 3.0에서 에이전트 보안까지 확장
- 런타임을 API Intercept와 Network Intercept 두 방식으로 제공해 코드 내장과 인라인 중 선택
- 기존 Prisma SASE 자산이 있으면 AI Access Security를 정책으로 활성화

**한계**
- 두 제품의 경계가 혼동되기 쉬움. AI Access Security(외부 AI 사용 통제)와 Prisma AIRS(사내 AI 보호)는 다른 문제를 풂
- GenAI 앱 사전 규모가 공식 출처마다 다름(500에서 6,000개 이상). 도입 시 현행 수치를 직접 확인
- Prisma AIRS의 한국 데이터 리전은 공식 자료에서 확인되지 않음(2026-03 싱가포르 랜딩만 발표)

## 한국 시장 노트

**데이터 리전.** Prisma Access는 서울(Seoul) PoP를 운영하며 Explicit Proxy와 Colo-Connect를 지원합니다([Prisma Access 위치 목록](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-overview/list-of-prisma-access-locations)). AI Access Security는 Prisma Access 위에서 동작하므로 국내 PoP 적용이 가능합니다.

**Prisma AIRS 리전.** AIRS의 한국 리전 보장은 공식 자료에서 확인되지 않습니다. 2026-03 싱가포르 랜딩이 발표됐습니다. 공공과 금융 도입 전 직접 확인합니다.

**CSAP와 망분리.** 클라우드 인라인 경유 구조는 [CSAP](/korea/regulation/csap-n2sf/)와 데이터 처리 리전 검토 대상입니다.

## 관련 페이지

- AI를 지키는 일(①): [AI를 지키는 일](/ai/defend-ai/) — Prisma AIRS의 모델, 런타임, 에이전트 보호 맥락
- AI 사용행위 가시화(②): [AI 사용 가시화](/ai/ai-usage-visibility/) — AI Access Security의 Shadow AI 통제 맥락
- 솔루션 리뷰: [Protect AI](/solutions/protect-ai/) — Prisma AIRS 모델 스캐닝의 기반
- 솔루션 리뷰: [Prisma Access](/solutions/prisma-access/) — AI Access Security가 올라타는 SASE 데이터 경로
- 전체 조망: [AI 보안 지도](/ai/map/), [벤더 프로필](/ai/vendors/)

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

본 정리는 Palo Alto Networks 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. GenAI 앱 수와 한국 리전은 출처별로 다르거나 미확인이므로 직접 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
