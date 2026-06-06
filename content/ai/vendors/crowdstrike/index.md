---
title: "CrowdStrike"
description: "Charlotte AI는 AI로 보안을 강화하는 일(③)입니다. AI를 보호(①)하는 Falcon AIDR, AI-SPM과 구분합니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["CrowdStrike", "Charlotte AI", "Falcon AIDR", "AI-SPM", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

> **이 페이지의 결론**: **Charlotte AI는 AI 보안이 아닙니다.** Falcon 플랫폼에 AI를 붙여 SOC 운영을 가속하는 ③ "AI로 보안 강화"입니다. CrowdStrike가 *AI를 보호*하는 일은 별도 제품인 **Falcon AIDR**(런타임)과 **Falcon Cloud Security AI-SPM**(태세)이 맡고(①), *직원 AI 사용행위 보호*는 **Falcon Data Protection**과 **Shadow AI 가시성 서비스**가 맡습니다(②). 한 벤더가 ①②③에 모두 걸쳐 있어, 제품을 기능으로 분해해야 분류가 섭니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | CrowdStrike (NASDAQ: CRWD), 미국 텍사스 오스틴 |
| ① AI 보호 | **Falcon AIDR**(런타임 탐지), **Falcon Cloud Security AI-SPM**(태세), **Falcon Shield**(에이전트 신원) |
| ② AI 사용행위 보호 | **Falcon Data Protection**(GenAI DLP), **Shadow AI 가시성 서비스**(전문 서비스) |
| ③ AI로 보안 강화 | **Charlotte AI**(agentic SOC 분석가, Agentic SOAR, AgentWorks) |
| 제어판 | Falcon 플랫폼, Next-Gen SIEM(LogScale) |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 CrowdStrike의 ①② 제품이 AI 공격표면을 덮습니다. ③ Charlotte AI는 공격표면이 아니라 SOC 운영을 가속하므로 아래 표시에서 제외합니다.

{{< ai-pipeline title="CrowdStrike ①② 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**Falcon AIDR**가 런타임과 에이전트 단계(①), **AI-SPM**이 모델과 배포 태세(①), **Falcon Data Protection**이 사용자 사용행위(②)를 덮습니다. **Charlotte AI(③)는 AI를 보호하지 않으므로 이 표시에 없습니다.**" >}}

| 표준 기능 | 분류 | CrowdStrike 제품 |
|---|---|---|
| AI 거버넌스와 자산 가시성(AI-SPM) | ① AI 보호 | Falcon Cloud Security AI-SPM |
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | Falcon AIDR |
| AI 에이전트 보안 | ① AI 보호 | Falcon AIDR, Falcon Shield |
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | Falcon Data Protection, Shadow AI 가시성 서비스 |
| SOC 운영 가속(AI 증강) | ③ AI로 보안 강화 | Charlotte AI |

## 제품군 (공식문서 기반)

### ③ Charlotte AI — AI로 보안 강화

Falcon 플랫폼의 **agentic 분석가**입니다. AI 추론과 사람의 판단을 결합해 SOC 결과를 가속합니다. AI 모델을 보호하는 것이 아니라 분석가를 증강합니다([Charlotte AI](https://www.crowdstrike.com/en-us/platform/charlotte-ai/)).

| 구성 | 무엇을 하나 |
|---|---|
| Charlotte AI Agentic Response | 노련한 분석가처럼 조사를 주도하고 질문에 답합니다 |
| Charlotte Agentic SOAR | 결정론적 자동화와 agentic 추론을 결합해 머신 속도로 대응, 사례 관리 |
| Charlotte AI AgentWorks | 자연어로 커스텀 보안 에이전트를 빌드하는 노코드 플랫폼(2026-03-25 발표) |

AgentWorks 출시 파트너는 Accenture, AWS, Anthropic, Deloitte, Kroll, NVIDIA, OpenAI, Salesforce, Telefónica Tech입니다. 모델 통합은 Anthropic Claude, NVIDIA Nemotron, OpenAI GPT입니다([AgentWorks 보도자료](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)).

### ① AI 보호 — AIDR, AI-SPM, Shield

| 제품 | 무엇을 하나 |
|---|---|
| Falcon AIDR | 사내 AI의 런타임 위협 탐지. 프롬프트 인젝션, 탈옥, 유해 콘텐츠, 무단 MCP 상호작용을 엔드포인트와 앱과 에이전트와 MCP 서버와 AI/API 게이트웨이에서 탐지([AIDR](https://www.crowdstrike.com/en-us/solutions/secure-your-ai/)) |
| Falcon Cloud Security AI-SPM | 클라우드 AI 서비스와 모델의 에이전트리스 태세 관리. 오구성, 취약점, 무결성 위험 탐지(2024-09-18 공개) |
| Falcon Shield | SaaS 전반의 AI 에이전트 신원과 거버넌스. 구성, 도구 접근, 데이터 소스, 소유권 가시화 |

### ② AI 사용행위 보호 — Data Protection, Shadow AI

| 제품 | 무엇을 하나 |
|---|---|
| Falcon Data Protection | GenAI로 나가는 데이터 유출 방지. 브라우저, 로컬 앱, 섀도 AI, 클라우드 흐름을 실시간 가시화하고 무단 GenAI 클라이언트의 분류 데이터 접근 차단 |
| Shadow AI 가시성 서비스 | 엔드포인트와 클라우드와 SaaS 전반의 승인 또는 미승인 AI 도구와 에이전트와 확장을 발견. 전문 서비스 형태(셀프서비스 제품 아님) |

## 보안 아키텍처

①은 AI를 보호하는 ZTA 통제, ③은 SOC 운영을 가속하는 워크플로입니다. 둘은 보호 대상이 다릅니다.

<div class="zta">
<div class="zta-title">① Falcon AIDR — 사내 AI 런타임 보호</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>AIDR 런타임 정책</b><span>프롬프트 인젝션, 탈옥, 유해 콘텐츠, 무단 MCP 상호작용 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Falcon 플랫폼</b><span>정책 배포와 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사용자 / AI 에이전트</b><span>에이전트 신원(Falcon Shield), 도구 권한</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>Falcon AIDR 런타임 탐지</b><span>엔드포인트, 앱, 에이전트, MCP 서버, AI/API 게이트웨이에서 탐지와 차단</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>사내 AI 앱 / 모델 / 에이전트</b><span>보호 대상은 모델과 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">AI-SPM 태세 (CDM 역할)</span><span class="zta-chip">위협 인텔</span><span class="zta-chip">런타임 감사 로그</span><span class="zta-chip">Falcon Shield 에이전트 신원</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 PEP에 요청하면 ② AIDR가 탐지 후 전달합니다. AI-SPM 태세가 PDP에 신뢰 신호를 공급합니다.</div>
</div>

<div class="arch">
<div class="arch-title">③ Charlotte AI — SOC 운영 워크플로 (AI 보안 아님)</div>
<div class="arch-stack">
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">데이터 계층</div><div class="arch-layer-sub">Falcon 텔레메트리, Next-Gen SIEM(LogScale), 서드파티 데이터</div></div><div class="arch-tag">입력</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">AI 분류 (Triage)</div><div class="arch-layer-sub">Charlotte가 탐지를 분류하고 거짓 양성을 걸러 중요한 것을 표면화</div></div><div class="arch-tag">Charlotte</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">AI 조사 (Investigation)</div><div class="arch-layer-sub">Agentic Response가 동적 캔버스에서 조사를 주도하고 자율 추론</div></div><div class="arch-tag">Charlotte</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">분석가 결정</div><div class="arch-layer-sub">인간이 의도와 가드레일을 설정(human-in-the-loop)</div></div><div class="arch-tag">사람</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">대응 오케스트레이션</div><div class="arch-layer-sub">Charlotte Agentic SOAR가 에이전트와 사람 협업으로 머신 속도 대응</div></div><div class="arch-tag">Charlotte</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> 강조 = Charlotte AI가 작동하는 단계. 이 구조는 AI를 보호하는 것이 아니라 SOC 분석가를 증강합니다(③). PEP나 자원 보호가 아닙니다.</div>
</div>

## 강점과 한계

**강점**
- ①②③를 Falcon 단일 플랫폼과 Next-Gen SIEM 위에서 통합 운영
- Charlotte AI가 Falcon Complete MDR 팀의 인사이트로 학습한 agentic 분석가, AgentWorks로 노코드 커스텀 에이전트 확장
- Falcon AIDR가 런타임을 엔드포인트와 MCP 서버와 AI/API 게이트웨이까지 폭넓게 덮음
- AI-SPM과 Data Protection이 Charlotte AI 인사이트로 강화

**한계**
- Charlotte AI(③)와 AI 보호 제품(①②)을 혼동하기 쉬움. 셋은 보호 대상이 다름
- Falcon AIDR의 커버 앱 목록은 공식 데이터시트에 열거되지 않고 블로그 기준이라 도입 시 확인 필요
- Shadow AI 가시성은 셀프서비스 제품이 아니라 전문 서비스 engagement
- 한국 Falcon 클라우드 리전은 공식 자료에서 확인되지 않음(2026-01 신규 리전은 사우디, 인도, UAE만 발표)

## 한국 시장 노트

**데이터 리전.** 2026-01-20 신규 리전 발표는 사우디아라비아, 인도, UAE만 명시했고 한국과 일본과 APAC은 포함되지 않았습니다([신규 리전 보도자료](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-announces-new-regional-clouds-to-expand-secure-data-sovereignty/)). 한국 데이터 레지던시는 공식 자료에서 확인되지 않으므로 직접 확인합니다.

**CSAP와 망분리.** 클라우드 SaaS 플랫폼 구조는 [CSAP](/korea/regulation/csap-n2sf/)와 데이터 처리 리전 검토 대상입니다. Charlotte AI의 한국어 지원도 공식 확인이 필요합니다.

## 출처

- [Charlotte AI — Agentic Analyst](https://www.crowdstrike.com/en-us/platform/charlotte-ai/)
- [Charlotte Agentic SOAR](https://www.crowdstrike.com/en-us/platform/charlotte-ai/agentic-soar/)
- [Charlotte AI AgentWorks 보도자료 (2026-03-25)](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)
- [Secure Your AI (AI 앱, 모델, 에이전트 보안)](https://www.crowdstrike.com/en-us/solutions/secure-your-ai/)
- [Falcon Cloud Security — AI-SPM](https://www.crowdstrike.com/en-us/platform/cloud-security/ai-spm/)
- [Falcon Cloud Security 혁신 발표 (2024-09-18)](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-unveils-falcon-cloud-security-innovations/)
- [Falcon AIDR 데이터시트](https://www.crowdstrike.com/en-us/resources/data-sheets/crowdstrike-falcon-ai-detection-and-response-aidr/)
- [Shadow AI 가시성 서비스 데이터시트](https://www.crowdstrike.com/en-us/resources/data-sheets/shadow-ai-visibility-service/)
- [신규 리전과 데이터 주권 (2026-01-20)](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-announces-new-regional-clouds-to-expand-secure-data-sovereignty/)
- 비교 솔루션: [Palo Alto Networks](/ai/vendors/palo-alto/), [AI 사용 가시화](/ai/ai-usage-visibility/)

## 면책

본 정리는 CrowdStrike 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. AIDR 커버 앱과 한국 리전은 공식 데이터시트로 확인되지 않으므로 직접 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
