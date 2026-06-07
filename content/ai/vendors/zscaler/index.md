---
title: "Zscaler"
description: "AI Access Security가 직원 AI 사용을 인라인에서 통제(②, 핵심 강점)합니다. AI Guard와 AI-SPM이 AI를 보호(①)하고, Data Fabric이 SOC를 가속(③)합니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Zscaler", "AI Access Security", "AI Guard", "DSPM", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

Zscaler의 핵심 강점은 **AI Access Security**(②)입니다. Zero Trust Exchange 인라인 클라우드 프록시 위에서 직원의 GenAI 사용을 프롬프트 단위로 가시화하고 DLP로 통제합니다. 같은 회사가 **AI Guard와 AI 자산 관리(AI-SPM)**로 AI를 보호(①)하고, **Data Fabric**으로 SOC를 가속(③)합니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Zscaler (NASDAQ: ZS), 미국 캘리포니아 산호세 |
| ② AI 사용행위 보호 | **AI Access Security**(핵심), **DSPM** |
| ① AI 보호 | **AI Guard**(런타임 가드레일), **AI 자산 관리/AI-SPM**(AI BOM), **AI Red Teaming** |
| ③ AI로 보안 강화 | **Data Fabric for Security**(Red Canary 인수) |
| 캡처 기반 | Zero Trust Exchange 인라인 클라우드 프록시, SSL/TLS 검사 |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 Zscaler의 ①② 제품이 AI 공격표면을 덮습니다. ③ Data Fabric은 공격표면이 아니라 SOC 운영을 가속하므로 아래 표시에서 제외합니다.

{{< ai-pipeline title="Zscaler ①② 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**AI 자산 관리/AI-SPM**이 모델과 배포 태세(①), **AI Guard**가 런타임과 에이전트(①), **AI Access Security**가 사용자 사용행위(②)를 인라인에서 덮습니다. **Data Fabric(③)은 AI를 보호하지 않으므로 이 표시에 없습니다.**" >}}

| 표준 기능 | 분류 | Zscaler 제품 |
|---|---|---|
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | AI Access Security(핵심), DSPM |
| AI 거버넌스와 자산 가시성(AI-SPM) | ① AI 보호 | AI 자산 관리(AI BOM, 모델 계보) |
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | AI Guard(18종 이상 탐지기) |
| AI 모델 검증 | ① AI 보호 | AI Red Teaming |
| SOC 운영 가속(AI 증강) | ③ AI로 보안 강화 | Data Fabric for Security |

## 제품군 (공식문서 기반)

### ② AI Access Security — AI 사용행위 보호 (핵심)

Zero Trust Exchange 인라인 프록시로 직원의 GenAI 사용을 통제합니다([AI Access Security](https://www.zscaler.com/products-and-solutions/ai-access-security)).

| 항목 | 내용 |
|---|---|
| 발견 | SaaS에 내장된 AI를 포함해 수천 개 AI 앱을 탐지하고 분류 |
| 프롬프트 가시성 | 사용자별 입력 프롬프트 전문을 로그로 추출하고 분류. "각 사용자 입력 프롬프트의 완전한 로그" |
| DLP | 소스 코드, PII, PCI, PHI 등 100개 이상 DLP 사전으로 인라인 검사 |
| 통제 | 사용자와 그룹별 허용, 차단, 코칭. 브라우저 격리로 복사 붙여넣기 통제 |

ThreatLabz 2025 데이터는 규모를 보여줍니다. 기업 AI 활동 전년 대비 **83.3% 증가**, AI 도구로 전송된 데이터 약 **18,000TB**, AI 사용에 연결된 DLP 위반 **4억 1천만 건**, 섀도 AI에 연결된 침해를 겪은 조직 **20%**입니다([Shadow AI 블로그](https://www.zscaler.com/blogs/product-insights/shadow-ai-shadow-agents-visibility-control)).

### ① AI 보호 — AI Guard, AI-SPM, Red Teaming

| 제품 | 무엇을 하나 |
|---|---|
| AI Guard | 사내 AI 앱과 에이전트의 런타임 보호. 프롬프트 인젝션, 탈옥, 개인정보 유출을 차단. 18종 이상 탐지기, 다국어, 프록시 또는 사이드카 배포([AI Guard](https://help.zscaler.com/ai-guard/what-ai-guard)) |
| AI 자산 관리(AI-SPM) | 섀도 AI부터 위험 앱, 모델, 파이프라인까지 AI 생태계를 발견하고 매핑. AI BOM, 모델 계보(발행자, 원산지, 라이선스). Azure AI Foundry, Bedrock, Vertex AI, Hugging Face 커버([AI 자산 관리](https://www.zscaler.com/products-and-solutions/ai-asset-management)) |
| AI Red Teaming | AI 시스템에 취약점 평가와 공격 시뮬레이션, 결과를 가드레일에 연결 |

### ③ Data Fabric for Security — AI로 보안 강화

AI 에이전트가 고신뢰 위협 데이터와 SecOps 워크플로로 알림 피로를 줄이고 조사를 가속합니다. 150개 사전 통합. Red Canary 인수로 AI 기반 SecOps를 강화했습니다([Data Fabric](https://www.zscaler.com/products-and-solutions/data-fabric)). AI를 보호하는 것이 아니라 SOC를 증강합니다.

## 보안 아키텍처

②와 ①은 PEP 위치가 다릅니다. AI Access Security는 **직원과 외부 GenAI 사이**, AI Guard는 **사내 앱과 모델 사이**에 끼웁니다.

<div class="zta">
<div class="zta-title">② AI Access Security — 직원의 외부 GenAI 사용 통제 (핵심)</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>Zero Trust Exchange 정책</b><span>사용자와 그룹, GenAI 앱, 데이터 분류로 허용, 차단, 코칭 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Zscaler 콘솔</b><span>정책 배포와 세션 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 엔드포인트</b><span>관리 단말 트래픽 포워딩, 사용자 그룹</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>Zero Trust Exchange 인라인 프록시</b><span>SSL/TLS 검사, GenAI 앱 식별, 프롬프트 가시화, 100개 이상 DLP 사전, 차단과 격리</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>외부 GenAI 앱</b><span>ChatGPT, Gemini, Copilot. 보호 대상은 반출되는 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">DLP 사전 100종 이상</span><span class="zta-chip">브라우저 격리</span><span class="zta-chip">DSPM 데이터 분류</span><span class="zta-chip">ThreatLabz 위협 인텔</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 직원이 미신뢰 상태로 PEP에 요청하면 ② Zero Trust Exchange가 검사 후 전달합니다. 보호 대상은 외부 GenAI로 반출되는 데이터입니다.</div>
</div>

<div class="zta">
<div class="zta-title">① AI Guard — 사내 AI 앱 보호 (PEP 위치가 다름)</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>AI Guard 정책</b><span>프롬프트 인젝션, 탈옥, 개인정보 유출, 유해 콘텐츠 판단(18종 이상 탐지기)</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Zscaler 콘솔</b><span>가드레일 정책 배포</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사내 AI 앱 / 에이전트</b><span>앱 신원, 도구 권한</span></div>
<div class="zta-harrow" data-label="① 호출"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>AI Guard (프록시 또는 사이드카)</b><span>앱과 모델 사이에서 프롬프트와 응답 검사</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>LLM / 모델</b><span>보호 대상은 사내 앱과 모델</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">AI Red Teaming</span><span class="zta-chip">AI 자산 관리(AI-SPM, AI BOM)</span><span class="zta-chip">위협 인텔</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> AI Access Security와 달리 PEP가 사내 앱과 모델 사이에 위치합니다. 보호 대상이 외부로 나가는 데이터가 아니라 사내 AI 앱입니다.</div>
</div>

## 강점과 한계

**강점**
- AI Access Security(②)가 기존 인라인 클라우드 프록시 데이터 경로 위에서 동작해 프롬프트 단위 가시성과 DLP를 즉시 제공
- 100개 이상 DLP 사전과 브라우저 격리로 GenAI 데이터 유출을 세밀하게 통제
- AI Guard(①)로 사내 AI 런타임까지 커버, PEP 위치가 ②와 명확히 구분
- AI 자산 관리로 AI BOM과 모델 계보 가시화

**한계**
- AI Access Security(②, 인라인 프록시)와 AI Guard(①, 앱-모델 사이)의 PEP 위치가 달라 혼동하기 쉬움
- 인라인 검사는 인증서 핀닝 앱에서 사각이 생길 수 있음(일반 SSL 검사 한계)
- GenAI 앱 수는 고정 수치를 공개하지 않고 "수천 개"로 표기
- 한국 데이터센터와 AI 데이터 레지던시는 공식 정적 자료에서 확인되지 않음

## 한국 시장 노트

**데이터 리전.** Zscaler는 강남구에 한국 사무소가 있으나, 서울 데이터센터와 AI 데이터 레지던시는 공식 정적 자료에서 확인되지 않습니다. [Zscaler 데이터센터 맵](https://trust.zscaler.com/data-center-map)에서 직접 확인합니다.

**CSAP와 망분리.** 인라인 클라우드 경유 구조는 [CSAP](/korea/regulation/csap-n2sf/)와 데이터 처리 리전 검토 대상입니다. 일반 ZTNA/SASE 도입 노트는 [Zscaler 솔루션 리뷰](/solutions/zscaler/)를 참고합니다.

## 관련 페이지

- [AI를 지키는 일](/ai/defend-ai/)
- [AI 사용 가시화](/ai/ai-usage-visibility/)
- [AI로 보안 강화](/ai/augment-security/)
- [AI 보안 지도](/ai/map/)
- [벤더 프로필](/ai/vendors/)
- [Zscaler](/solutions/zscaler/)
- [Netskope](/solutions/netskope/)

## 출처

- [AI Access Security](https://www.zscaler.com/products-and-solutions/ai-access-security)
- [GenAI Security At A Glance 데이터시트](https://www.zscaler.com/resources/data-sheets/zscaler-gen-ai-security-at-a-glance.pdf)
- [Zscaler AI 허브](https://www.zscaler.com/products-and-solutions/zscaler-ai)
- [DSPM](https://www.zscaler.com/products-and-solutions/data-security-posture-management-dspm)
- [AI 자산 관리(AI-SPM)](https://www.zscaler.com/products-and-solutions/ai-asset-management)
- [AI Guardrails](https://www.zscaler.com/products-and-solutions/ai-guardrails)
- [AI Guard 문서](https://help.zscaler.com/ai-guard/what-ai-guard)
- [Shadow AI 가시성과 통제 (ThreatLabz)](https://www.zscaler.com/blogs/product-insights/shadow-ai-shadow-agents-visibility-control)
- [엔터프라이즈 AI 보안 혁신 발표 (2026-01-27)](https://www.zscaler.com/press/zscaler-unveils-new-innovations-secure-enterprise-ai-adoption)
- 비교 솔루션: [Palo Alto Networks](/ai/vendors/palo-alto/), [Netskope는 AI 사용 가시화](/ai/ai-usage-visibility/), [Zscaler 일반 리뷰](/solutions/zscaler/)

## 면책

본 정리는 Zscaler 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. GenAI 앱 수와 한국 데이터센터는 고정 수치를 공개하지 않거나 미확인이므로 직접 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
