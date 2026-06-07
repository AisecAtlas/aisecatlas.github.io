---
title: "WitnessAI"
description: "에이전트리스 네트워크 인라인 클라우드 프록시로 직원과 에이전트의 AI 사용을 통제(②)합니다. AI Firewall로 런타임 보호(①)도 더합니다. 단말 설치가 없습니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["WitnessAI", "AI Governance", "Shadow AI", "AI Firewall", "스타트업"]
categories: ["vendor-profile"]
ShowToc: true
---

WitnessAI는 직원 AI 사용행위 보호(②) 전문 스타트업입니다. **단말에 아무것도 설치하지 않는 에이전트리스 네트워크 인라인** 방식이 핵심으로, 기존 SWG/SASE가 AI 트래픽을 WitnessAI 클라우드 프록시로 포워딩하면 거기서 통제합니다. PEP가 **네트워크 인라인 클라우드 프록시**에 있어 Harmonic의 브라우저 PEP와 다릅니다. AI Firewall(Protect)로 런타임 보호(①)도 더합니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | WitnessAI (비상장), 미국 캘리포니아 마운틴뷰. 2023년 Ballistic Ventures 인큐베이션. 창업자 Rick Caccia(Exabeam, Palo Alto 출신) |
| ② AI 사용행위 보호 | **Observe**(가시성, Shadow AI 발견), **Control**(정책, 의도 분류) |
| ① AI 보호 | **Protect (AI Firewall)** — 프롬프트 인젝션과 탈옥 차단, 데이터 토큰화, 에이전트 보호 |
| 캡처 기반 | 에이전트리스 네트워크 인라인 클라우드 프록시(SWG/SASE 포워딩), 밀리초 지연 |
| 투자 | 시리즈 A $27.5M(2024-05, GV와 Ballistic), 전략 $58M(2026-01, Sound Ventures 주도). 공식 누적 약 $85.5M |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10) 기준으로 WitnessAI는 사용자 사용행위(②)를 인라인에서 덮고, AI Firewall로 런타임과 에이전트(①)를 더합니다.

{{< ai-pipeline title="WitnessAI 통제 지점 (AI 공격표면)" highlight="runtime,agent,usage" note="**Observe와 Control**이 사용자 사용행위(②), **Protect(AI Firewall)**가 프롬프트와 응답을 양방향으로 검사해 런타임과 에이전트(①)를 통제합니다. PEP가 네트워크 인라인 클라우드 프록시라 단말 설치가 없습니다." >}}

| 표준 기능 | 분류 | WitnessAI 모듈 |
|---|---|---|
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | Observe(인벤토리, 발견), Control(정책, 의도 분류) |
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | Protect(AI Firewall, 양방향, 토큰화) |
| AI 에이전트 보안 | ① AI 보호 | 에이전트 활동과 MCP 도구 관측, 에이전트 보호 |

## 캡처 메커니즘과 아키텍처

핵심은 **PEP가 에이전트리스 네트워크 인라인 클라우드 프록시**라는 것입니다. 단말에 아무것도 설치하지 않고, 기존 SWG/SASE가 AI 트래픽을 WitnessAI 프록시로 포워딩합니다. Harmonic의 단말 브라우저 PEP, AI Guard의 앱과 모델 사이 PEP와 다른 위치입니다.

<div class="zta">
<div class="zta-title">WitnessAI — 에이전트리스 네트워크 인라인 PEP</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>의도 기반 정책</b><span>프롬프트의 의미와 의도를 ML로 분석해 사람과 에이전트에 일관 적용</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>WitnessAI 콘솔</b><span>단일 테넌트 클라우드, 고객 관리 암호화 키</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 사용자 / AI 에이전트</b><span>SWG가 X-Authenticated-User 헤더로 신원 주입</span></div>
<div class="zta-harrow" data-label="① 포워딩"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>WitnessAI 클라우드 프록시</b><span>Observe로 가시화, Control로 정책, Protect로 프롬프트와 응답 양방향 검사와 토큰화</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>LLM / 외부 GenAI / 에이전트 / MCP 서버</b><span>보호 대상은 반출 데이터와 에이전트 행동</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">SWG/SASE 포워딩(Netskope 등)</span><span class="zta-chip">신원 헤더</span><span class="zta-chip">AI 인벤토리(MCP, 에이전트)</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> 단말 설치 없이 기존 SWG/SASE가 AI 트래픽을 WitnessAI 프록시로 포워딩하면 PEP가 검사합니다. 확인된 토폴로지는 SWG forward-to-proxy(Netskope 문서)이고, 다른 배포 모드와 TLS 처리 소유는 공식 자료로 미확인입니다.</div>
</div>

## 강점과 한계

**강점**
- 단말 설치 없는 에이전트리스 인라인, 배포 단순, 밀리초 지연
- 의도 기반 정책으로 키워드/정규식 DLP를 넘어 사람과 에이전트의 행동을 일관 통제
- Protect AI Firewall이 프롬프트와 응답을 양방향 검사하고 PII와 시크릿을 토큰화
- 2026-01 에이전트 거버넌스 확장, 단일 테넌트 클라우드와 고객 관리 키

**한계**
- 기존 SWG/SASE가 AI 트래픽을 포워딩하도록 구성해야 함, 그 인프라가 없으면 도입 전제가 늘어남
- 공식 마케팅이 단일 토폴로지를 명명하지 않아 확인된 방식은 SWG forward-to-proxy뿐, 다른 모드는 미확인
- 비상장 단계, 한국 운영 거점은 공식 자료에서 확인되지 않음(투자자 연결만 존재)
- 의도 분류의 한국어 정확도는 별도 검증 필요

## 한국 시장 노트

**투자자 연결.** 2026-01 전략 라운드에 Samsung Ventures와 Qualcomm Ventures가 참여했고, 라운드는 "글로벌 확장"과 cloud-to-edge AI 보안을 강조했습니다([$58M 발표](https://www.prnewswire.com/news-releases/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents-302659319.html)). 다만 한국 사무소와 데이터 레지던시는 공식 자료에서 확인되지 않습니다. 투자자 연결을 운영 거점으로 해석하지 않습니다.

**CSAP와 망분리.** 클라우드 인라인 프록시 구조는 [CSAP](/korea/regulation/csap-n2sf/)와 처리 리전 검토 대상입니다.

## 관련 페이지

- [AI를 지키는 일](/ai/defend-ai/)
- [AI 사용 가시화](/ai/ai-usage-visibility/)
- [WitnessAI 솔루션 리뷰](/solutions/witnessai/)
- [AI 보안 지도](/ai/map/)
- [벤더 프로필](/ai/vendors/)

## 출처

- [WitnessAI 제품(Observe, Control, Protect)](https://witness.ai/product/)
- [AI Firewall (Protect)](https://witness.ai/protect/)
- [회사 소개와 창업자](https://witness.ai/about-us/)
- [시리즈 A $27.5M (2024-05-21)](https://www.prnewswire.com/news-releases/witnessai-raises-27-5-million-to-enable-safe-use-of-ai-302151702.html)
- [전략 투자 $58M과 에이전트 거버넌스 (2026-01-13)](https://www.prnewswire.com/news-releases/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents-302659319.html)
- [배포 토폴로지 (Netskope SWG forward-to-proxy)](https://docs.witness.ai/v2-0/network/netskope/)
- 비교 솔루션: [WitnessAI 솔루션 리뷰](/solutions/witnessai/), [Harmonic Security](/ai/vendors/harmonic/)

## 면책

본 정리는 WitnessAI와 PR Newswire 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 배포 토폴로지의 일부와 한국 자료는 공식 직접 확인이 필요하므로 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
