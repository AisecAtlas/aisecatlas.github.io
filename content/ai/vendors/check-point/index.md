---
title: "Check Point"
description: "인수한 Lakera로 AI를 보호(①)합니다. GenAI Protect가 직원 AI 사용을 통제(②)하고, Infinity AI Copilot이 SOC를 가속(③)합니다. AI Defense Plane으로 통합합니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Check Point", "Lakera", "GenAI Protect", "AI Defense Plane", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

> **이 페이지의 결론**: Check Point의 AI 보호(①) 핵심은 인수한 **Lakera**입니다. Lakera Guard는 **Check Point AI Agent Security**로, Lakera Red는 **Check Point AI Red Teaming**으로 편입돼 LLM과 에이전트의 런타임 가드레일과 배포 전 레드티밍을 제공합니다. 직원 AI 사용행위 보호(②)는 **GenAI Protect**, SOC 운영 가속(③)은 **Infinity AI Copilot**이 맡고, 2026-03-23 발표한 **AI Defense Plane**이 셋을 단일 제어판으로 묶습니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Check Point Software (NASDAQ: CHKP), 이스라엘 텔아비브 |
| ① AI 보호 | **Check Point AI Agent Security**(Lakera Guard), **AI Red Teaming**(Lakera Red), Gandalf |
| ② AI 사용행위 보호 | **GenAI Protect / Workforce AI Security**, Harmony Endpoint DLP |
| ③ AI로 보안 강화 | **Infinity AI Copilot** |
| 인수한 AI 스타트업 | **Lakera**(2025-09-16 인수 발표, AI 보안 Center of Excellence) |
| 통합 제어판 | AI Defense Plane(2026-03-23 발표), Infinity Platform |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 Check Point의 ①② 제품이 AI 공격표면을 덮습니다. ③ Infinity AI Copilot은 공격표면이 아니라 운영을 가속하므로 아래 표시에서 제외합니다.

{{< ai-pipeline title="Check Point ①② 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**AI Red Teaming**이 배포 전 태세(①), **AI Agent Security(Lakera Guard)**가 런타임과 에이전트(①), **GenAI Protect**가 사용자 사용행위(②)를 덮습니다. **Infinity AI Copilot(③)은 AI를 보호하지 않으므로 이 표시에 없습니다.**" >}}

| 표준 기능 | 분류 | Check Point 제품 |
|---|---|---|
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | AI Agent Security(Lakera Guard) |
| AI 에이전트 보안 | ① AI 보호 | AI Agent Security(RAG와 MCP 데이터 포함) |
| AI 모델 검증(배포 전 태세) | ① AI 보호 | AI Red Teaming(Lakera Red) |
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | GenAI Protect, Harmony Endpoint DLP |
| SOC 운영 가속(AI 증강) | ③ AI로 보안 강화 | Infinity AI Copilot |

## 제품군 (공식문서 기반)

### ① AI 보호 — Lakera 기반

| 제품 | 무엇을 하나 |
|---|---|
| AI Agent Security (Lakera Guard) | AI 앱과 에이전트의 인라인 런타임 가드레일. 프롬프트 공격, 데이터 유출, 콘텐츠 위반을 실시간 차단. LLM 입출력과 RAG, MCP 데이터까지 검사. 50ms 미만 지연, 100개 이상 언어([Lakera](https://www.lakera.ai/)) |
| AI Red Teaming (Lakera Red) | 위험 기반 GenAI 레드티밍. 직접과 간접 공격 시뮬레이션으로 배포 전 태세 평가 |
| Gandalf | 적대적 AI 데이터셋과 커뮤니티. 가드레일에 위협 인텔 공급 |

AI-SPM이라는 공식 용어는 쓰지 않습니다. 모델 태세는 AI Red Teaming의 배포 전 평가가 담당합니다.

### ② GenAI Protect — AI 사용행위 보호

직원의 GenAI 사용을 발견하고 통제합니다([GenAI Security](https://www.checkpoint.com/solutions/genai-security/)).

| 항목 | 내용 |
|---|---|
| 발견 | ChatGPT, Gemini 등 섀도 AI 도구의 사용 위치와 방식을 가시화 |
| 통제 | 역할 기반 권한, 접근 통제, 프롬프트 내 대화 데이터 분류, 데이터 유출 방지 |
| 캡처 | 가벼운 브라우저 확장과 Harmony 게이트웨이로 인라인 검사(관리자 가이드 기준) |

### ③ Infinity AI Copilot — AI로 보안 강화

관리자와 SOC 분석가를 돕는 생성형 AI 어시스턴트입니다. 정책, 접근 규칙, 로그, 제품 문서를 알고 일반 관리 작업 시간을 최대 90% 줄입니다([AI Copilot](https://www.checkpoint.com/ai/copilot/)). AI를 보호하는 것이 아니라 운영을 증강합니다.

## 보안 아키텍처

①과 ②는 PEP 위치가 다릅니다. AI Agent Security는 **사내 앱과 모델 사이**, GenAI Protect는 **직원과 외부 GenAI 사이**에 끼웁니다.

<div class="zta">
<div class="zta-title">① AI Agent Security (Lakera Guard) — 사내 AI 런타임 보호</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>Lakera 가드레일 정책</b><span>프롬프트 공격, 데이터 유출, 콘텐츠 위반을 입력과 출력 양방향으로 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>AI Defense Plane</b><span>정책 배포와 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사용자 / 앱 / AI 에이전트</b><span>프롬프트 요청자, 도구 권한</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>AI Agent Security 런타임</b><span>앱과 모델 사이에서 프롬프트와 응답을 50ms 미만으로 양방향 검사</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>LLM / AI 앱 / 에이전트</b><span>RAG와 MCP 데이터 포함, 보호 대상은 사내 AI</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">AI Red Teaming(배포 전 태세)</span><span class="zta-chip">Gandalf 적대적 데이터셋</span><span class="zta-chip">ThreatCloud AI</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 PEP에 요청하면 ② AI Agent Security가 양방향 검사 후 전달합니다. 모델은 검사 없이 도달하지 않고, 응답도 검사 없이 나가지 않습니다.</div>
</div>

<div class="zta">
<div class="zta-title">② GenAI Protect — 직원의 외부 GenAI 사용 통제 (PEP 위치가 다름)</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>GenAI Protect 정책</b><span>역할 기반 권한, 콘텐츠 민감도, 사용자 행동으로 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Infinity Portal</b><span>정책 배포와 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 엔드포인트</b><span>브라우저 확장, 사용자 역할</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>브라우저 확장 / Harmony 게이트웨이</b><span>프롬프트 내 대화 데이터 분류, DLP, 위험 세션 차단</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>외부 GenAI 앱</b><span>ChatGPT, Gemini. 보호 대상은 반출 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">Harmony Endpoint DLP</span><span class="zta-chip">대화 데이터 분류</span><span class="zta-chip">ThreatCloud AI</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> AI Agent Security와 달리 PEP가 직원과 외부 GenAI 사이에 위치합니다. 보호 대상이 사내 AI가 아니라 외부로 나가는 데이터입니다.</div>
</div>

## 강점과 한계

**강점**
- 인수한 Lakera로 런타임 가드레일(50ms 미만, 100개 이상 언어)과 레드티밍을 ① 핵심으로 확보
- AI Defense Plane으로 ①②③를 단일 제어판에 통합(2026-03)
- AI Agent Security가 RAG와 MCP 데이터까지 검사, 입출력 양방향 가드레일
- Gandalf 적대적 데이터셋으로 위협 인텔 공급

**한계**
- AI Agent Security(①, 앱-모델 사이)와 GenAI Protect(②, 직원-외부 사이)의 PEP 위치가 달라 혼동하기 쉬움
- Lakera 인수의 정확한 종결일과 금액은 공식 6-K로 직접 확인되지 않음(2025-09-16 발표, Q4 2025 종결 예정은 공식)
- 제품명이 Lakera와 Check Point 이름으로 혼재(Lakera Guard와 AI Agent Security)
- 한국 특화 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** Lakera, GenAI Protect, AI Defense Plane의 한국 특화 가용성과 데이터 레지던시는 공식 자료에서 확인되지 않습니다. 도입 전 Check Point Korea에 직접 확인합니다.

**CSAP와 망분리.** 클라우드 제어판 구조는 [CSAP](/korea/regulation/csap-n2sf/)와 데이터 처리 리전 검토 대상입니다. 인수 전 Lakera 단독 솔루션 리뷰는 [Lakera](/solutions/lakera/)를 참고합니다.

## 출처

- [Check Point의 Lakera 인수 (2025-09-16)](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/)
- [AI Defense Plane 발표 (2026-03-23)](https://www.checkpoint.com/press-releases/check-point-launches-ai-defense-plane-to-secure-the-agentic-enterprise-at-scale/)
- [GenAI Security / Workforce AI Security](https://www.checkpoint.com/solutions/genai-security/)
- [GenAI Protect 관리자 가이드](https://sc1.checkpoint.com/documents/Infinity_Portal/WebAdminGuides/EN/SaaS-Admin-Guide/Content/Topics-SaaS-AG/GenAI-Protect-Dashboard.htm)
- [Infinity AI Copilot](https://www.checkpoint.com/ai/copilot/)
- [Harmony Endpoint DLP](https://blog.checkpoint.com/securing-user-and-access/securing-data-in-the-ai-era-introducing-check-point-harmony-dlp/)
- [Lakera 공식 사이트](https://www.lakera.ai/)
- 비교 솔루션: [Palo Alto Networks](/ai/vendors/palo-alto/), [Lakera 인수 전 리뷰](/solutions/lakera/)

## 면책

본 정리는 Check Point와 Lakera 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. Lakera 인수 종결일과 금액, 한국 자료는 공식 자료로 확인되지 않으므로 직접 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
