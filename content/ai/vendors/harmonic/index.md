---
title: "Harmonic Security"
description: "브라우저 확장으로 직원 AI 사용을 단말에서 통제하는 Shadow AI 전문 스타트업(②). MCP Gateway로 에이전트 보안(①)까지 확장합니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Harmonic Security", "Shadow AI", "GenAI DLP", "MCP Gateway", "스타트업"]
categories: ["vendor-profile"]
ShowToc: true
---

Harmonic Security는 직원 AI 사용행위 보호(②) 전문 스타트업입니다. **브라우저 확장**이 단말에서 프롬프트를 읽어 제출 전에 민감 데이터를 편집하고 차단합니다. PEP가 **엔드포인트와 브라우저**에 있어 네트워크 로그를 우회하는 AI 브라우저까지 포착하고 TLS 가로채기에 의존하지 않습니다. 2025-10 **MCP Gateway**로 에이전트 보안(①)까지 넓혔습니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Harmonic Security (비상장), 2023년 설립(미국, 영국). 창업자는 Digital Shadows 출신 Alastair Paterson, Bryan Woolgar-O'Neil |
| ② AI 사용행위 보호 | **Harmonic Protect / Guide** — Shadow AI 발견, 단말 SLM DLP, 코칭 |
| ① AI 보호 | **MCP Gateway**(2025-10) — 에이전트와 MCP 트래픽 통제 |
| 캡처 기반 | 브라우저 확장(Chrome, Edge, Firefox, Safari), 단말 상주 SLM |
| 투자 | 시드 $7M(2023-10, Ten Eleven), 시리즈 A $17.5M(2024-10, Next47). 공식 누적 $26M 이상 |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10) 기준으로 Harmonic은 사용자 사용행위 단계(②)를 단말에서 덮고, MCP Gateway로 에이전트 단계(①)를 더합니다.

{{< ai-pipeline title="Harmonic 통제 지점 (AI 공격표면)" highlight="agent,usage" note="**브라우저 확장**이 사용자 사용행위 단계(②)를 단말에서 통제하고, **MCP Gateway**가 에이전트와 도구 단계(①)를 로컬에서 통제합니다. 둘 다 PEP가 단말에 있어 네트워크 인라인과 다릅니다." >}}

| 표준 기능 | 분류 | Harmonic 제품 |
|---|---|---|
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | Harmonic Protect(브라우저 확장, 단말 SLM DLP) |
| AI 에이전트 보안 | ① AI 보호 | MCP Gateway(MCP 발견과 정책, 도구 호출 검사) |

## 캡처 메커니즘과 아키텍처

핵심은 **PEP가 단말과 브라우저에 있다**는 것입니다. 네트워크 인라인 프록시(Zscaler)나 앱과 모델 사이(AI Guard)와 다른 위치입니다.

<div class="zta">
<div class="zta-title">② Harmonic Protect — 단말 브라우저 PEP</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>목적 특화 SLM</b><span>사용자 의도와 민감 데이터를 밀리초로 분류(IP, 소스코드, PII)</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Harmonic 콘솔</b><span>정책 배포, MDM(Intune, Jamf, Kandji)로 확장 배포</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 브라우저</b><span>입력창의 프롬프트(단말에서 평문), 사용자</span></div>
<div class="zta-harrow" data-label="① 입력"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>브라우저 확장 (단말 상주)</b><span>제출 전에 프롬프트 검사, 편집과 Nudge와 Justify와 Redirect로 통제</span></div>
<div class="zta-harrow" data-label="② 제출"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>외부 GenAI 앱</b><span>ChatGPT, Gemini, SaaS 내장 AI. 보호 대상은 프롬프트 속 민감 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">AI 도구 위험 프로파일</span><span class="zta-chip">개인 계정 사용 탐지</span><span class="zta-chip">검색 가능 인벤토리</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> PEP가 단말에 있어 제출 전 검사합니다. 네트워크 로그를 우회하는 AI 브라우저까지 포착하고, 네트워크 TLS 가로채기에 의존하지 않습니다. (DOM 계층 분석은 동작에서 추론한 설명이고 공식 직접 인용은 아닙니다.)</div>
</div>

<div class="zta">
<div class="zta-title">① MCP Gateway — 에이전트와 MCP 통제 (로컬 PEP)</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>MCP 정책</b><span>고위험 서버와 도구, 민감 데이터를 사전 학습 모델로 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Harmonic 콘솔</b><span>정책 배포</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>MCP 클라이언트</b><span>Cursor, Claude Code 등 에이전트</span></div>
<div class="zta-harrow" data-label="① 호출"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>MCP Gateway (로컬 설치)</b><span>MCP 트래픽을 투명하게 가로채 서버 발견, 정책 차단, 민감 데이터 검사</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>MCP 서버 / 도구</b><span>보호 대상은 에이전트가 접근하는 도구와 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">MCP 클라이언트와 서버 발견</span><span class="zta-chip">탐지별 컨텍스트 피드백</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> 브라우저 확장과 별개로 로컬 설치되는 두 번째 PEP입니다. 사람의 브라우저 GenAI 사용(②)과 에이전트의 MCP 사용(①)을 각각 단말에서 통제합니다.</div>
</div>

## 강점과 한계

**강점**
- PEP가 단말 브라우저에 있어 제출 전 통제, 네트워크 로그를 우회하는 AI 브라우저와 SaaS 내장 AI까지 포착
- 목적 특화 SLM이 의도와 민감 데이터를 밀리초로 분류, 수동 라벨링 없는 zero-touch
- Coach 방식(Nudge, Justify, Redirect)으로 차단 일변도가 아닌 통제, 개인 계정 사용 탐지
- MCP Gateway(2025-10)로 에이전트 보안(①)까지 확장

**한계**
- 브라우저 확장과 단말 배포가 전제, 미설치 단말은 사각
- 비상장 초기 단계, 2024-10 시리즈 A 이후 신규 라운드는 공식 자료에서 확인되지 않음
- 공식 누적 투자 $26M 이상이나 두 공개 라운드 합($24.5M)과 차이가 있어 추가 자본의 출처는 공개되지 않음
- 한국 특화 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** Harmonic의 한국 사무소, 파트너, 현지화, 컴플라이언스는 공식 자료에서 확인되지 않습니다. 단말 기반 캡처라 클라우드 경유 없이 적용 가능하나, 백엔드 SLM 분석의 처리 위치를 [CSAP](/korea/regulation/csap-n2sf/) 관점에서 확인합니다.

## 관련 페이지

- [AI를 지키는 일](/ai/defend-ai/)
- [AI 사용 가시화](/ai/ai-usage-visibility/)
- [Harmonic Security 솔루션 리뷰](/solutions/harmonic-security/)
- [AI 보안 지도](/ai/map/)
- [벤더 프로필](/ai/vendors/)

## 출처

- [Browser-based GenAI Security](https://www.harmonic.security/solutions/browser-based-genai-security)
- [Shadow AI Detection](https://www.harmonic.security/solutions/shadow-ai-detection)
- [AI Usage Governance](https://www.harmonic.security/solutions/ai-usage-governance)
- [MCP Gateway 출시 (2025-10)](https://www.harmonic.security/resources/harmonic-security-launches-mcp-gateway-providing-complete-visibility-and-control-over-an-organizations-agentic-ai-ecosystem)
- [회사 소개와 연혁](https://www.harmonic.security/about)
- [시리즈 A $17.5M (Business Wire, 2024-10-02)](https://www.businesswire.com/news/home/20241002920021/en/)
- [시드 출범 $7M (Business Wire, 2023-10-19)](https://www.businesswire.com/news/home/20231019881768/en/Harmonic-Security-launches-to-help-organizations-use-generative-AI-safely)
- 비교 솔루션: [Harmonic Security 솔루션 리뷰](/solutions/harmonic-security/), [WitnessAI](/solutions/witnessai/)

## 면책

본 정리는 Harmonic Security와 Business Wire 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. DOM 계층 분석과 누적 투자 구성, 한국 자료는 공식 직접 확인이 필요하므로 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
