---
title: "Cyberhaven"
description: "데이터 리니지로 '어떤 데이터가 AI로 갔나'를 추적하는 스타트업(②). 내용 패턴이 아니라 데이터의 출처와 맥락으로 분류합니다. 엔드포인트 에이전트 기반입니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Cyberhaven", "Data Lineage", "Shadow AI", "DDR", "스타트업"]
categories: ["vendor-profile"]
ShowToc: true
---

> **이 페이지의 결론**: Cyberhaven은 직원 AI 사용행위 보호(②)를 **데이터 리니지** 각도로 푸는 스타트업입니다. 질문이 다릅니다. "프롬프트에 무엇을 넣었나"(내용 검사)가 아니라 **"어떤 데이터가 어디서 와서 AI로 갔나"**(출처와 맥락)입니다. 엔드포인트 에이전트가 데이터의 생성부터 모든 이동을 기록하고, 출처로 분류해 AI로 가는 흐름을 통제합니다. Linea AI가 리니지 모델로 위험을 탐지하고 조사합니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Cyberhaven (비상장, 기업가치 $1B), 미국. 2016년 설립, 공동창업자 겸 CTO Volodymyr Kuznetsov |
| ② AI 사용행위 보호 | **DDR(Data Detection and Response)**, 데이터 리니지, Shadow AI 발견, AI Data Flow Control |
| AI 분석 | **Linea AI** — Large Lineage Model(LLiM), Detection Agent, Analyst Agent |
| 캡처 기반 | 엔드포인트 에이전트(Windows, macOS, Linux) + 브라우저 확장 + 클라우드 API 커넥터 |
| 투자 | 시리즈 C $88M(2024-06), 시리즈 D $100M(2025-04, StepStone 주도). 공식 누적 $250M |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10) 기준으로 Cyberhaven은 사용자 사용행위(②)를 데이터 흐름 관점에서 덮습니다. 통제 판단이 내용 패턴이 아니라 데이터의 출처와 리니지에 근거합니다.

{{< ai-pipeline title="Cyberhaven 통제 지점 (AI 공격표면)" highlight="usage" note="엔드포인트 에이전트가 데이터의 리니지(출처와 모든 이동)를 기록하고, AI로 가는 데이터 흐름을 출처 기준으로 통제합니다. 내용 검사 DLP나 네트워크 인라인과 달리 '어떤 데이터가 갔나'를 답합니다." >}}

| 표준 기능 | 분류 | Cyberhaven 제품 |
|---|---|---|
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | Shadow AI 발견(AI 도구 레지스트리), AI Data Flow Control |
| 데이터 흐름 추적 | ② AI 사용행위 보호 | 데이터 리니지(생성부터 모든 이동, 변형, 분할) |
| 인사이더 위험 | ② AI 사용행위 보호 | Linea AI(Detection Agent, Analyst Agent) |

## 제품군 (공식문서 기반)

### 데이터 리니지 — 차별점

플랫폼을 "데이터의 비행 기록 장치"로 부릅니다. 모든 데이터의 모든 이벤트(이동, 복사, 편집, 공유)를 기록해 데이터가 회사 안에서 어떻게 움직이는지 이해합니다([How it works](https://www.cyberhaven.com/product/how-it-works)). 데이터를 **출처에서부터 추적**해 그 맥락으로 더 정확히 분류합니다. 패턴 매칭만으로 분류하지 않습니다.

### Shadow AI 발견과 AI Data Flow Control

조직의 모든 AI 도구를 발견해 레지스트리를 만듭니다. 전용 AI 앱, SaaS 내장 AI, 회사와 개인 이메일로 접근하는 AI를 포함합니다. AI Data Flow Control이 AI로 오가는 데이터에 위험 기반 정책을 강제합니다([AI 보안 갭](https://www.cyberhaven.com/press-releases/cyberhaven-addresses-critical-ai-security-gap)). Cyberhaven Labs는 기업 데이터가 AI로 흘러간 양이 전년 대비 **485% 증가**했다고 분석했습니다.

### Linea AI

리니지를 위한 LLM 격 모델입니다([Linea AI](https://www.cyberhaven.com/product/linea)).

| 구성 | 무엇을 하나 |
|---|---|
| Large Lineage Model | 기업 워크플로 그래프로 학습, 다음 행동을 예측하고 이탈을 규칙 없이 탐지 |
| Detection Agent | 클라우드와 엔드포인트와 브라우저에서 신호를 수집해 위험 활동을 즉시 탐지 |
| Analyst Agent | 심층 조사, 증거 수집, 평문 설명과 다음 단계가 담긴 보고서 생성 |

## 보안 아키텍처

PEP가 **엔드포인트 에이전트**에 있고, 차별점은 **데이터 리니지**입니다. 통제 판단이 데이터의 출처에 근거합니다.

<div class="zta">
<div class="zta-title">② Cyberhaven — 엔드포인트 데이터 리니지 PEP</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>리니지 기반 정책</b><span>데이터의 출처와 맥락으로 위험을 판단(내용 패턴이 아님). Linea AI가 이탈 예측</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Cyberhaven 콘솔</b><span>정책 배포와 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 엔드포인트</b><span>데이터를 생성, 이동, 복사, 편집, 공유</span></div>
<div class="zta-harrow" data-label="① 데이터 이동"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>엔드포인트 에이전트 (+ 브라우저, 클라우드)</b><span>리니지를 기록하고 출처로 분류, AI로 가는 흐름을 차단하거나 경고하거나 정당화 요구</span></div>
<div class="zta-harrow" data-label="② 흐름"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>외부 GenAI / 섀도 AI</b><span>보호 대상은 출처가 민감한 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">데이터 리니지 그래프</span><span class="zta-chip">Linea AI(LLiM, Detection, Analyst)</span><span class="zta-chip">AI 도구 레지스트리</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> PEP가 엔드포인트에 있고, 판단이 데이터의 출처와 리니지에 근거합니다. 내용 검사 DLP(Nightfall)나 네트워크 인라인(WitnessAI)과 달리 "어떤 데이터가 AI로 갔나"를 답합니다. 리니지는 이동과 변형과 이름 변경과 분할을 통해 유지됩니다.</div>
</div>

## 강점과 한계

**강점**
- 데이터 리니지로 출처와 맥락 기반 분류, 내용 패턴 매칭의 한계를 보완
- AI로 가는 데이터 흐름을 출처 기준으로 통제, Shadow AI 발견이 흐름 가시성의 부산물
- Linea AI의 LLiM이 규칙 없이 워크플로 이탈을 예측, Analyst Agent가 조사 부담 경감
- 엔드포인트와 브라우저와 클라우드 3계층 수집

**한계**
- 엔드포인트 에이전트 배포가 전제, 미설치 단말은 사각
- 리니지가 이동과 변형과 이름 변경과 분할을 통해 유지되나, 암호화를 통한 유지는 공식 페이지에서 직접 확인되지 않음
- 485% 수치의 정확한 보고서 판본은 Cyberhaven Labs에서 별도 확인이 필요
- 한국 특화 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** Cyberhaven의 한국 사무소, 한국어 자료, 명시된 국내 총판은 공식 자료에서 확인되지 않습니다. 글로벌 파트너 프로그램만 운영합니다. 단말 기반 캡처라 클라우드 경유 없이 적용 가능하나, 클라우드 처리 위치를 [CSAP](/korea/regulation/csap-n2sf/) 관점에서 확인합니다.

## 출처

- [Cyberhaven 플랫폼](https://www.cyberhaven.com/product)
- [How it works (엔드포인트 에이전트, 리니지)](https://www.cyberhaven.com/product/how-it-works)
- [Linea AI](https://www.cyberhaven.com/product/linea)
- [AI 보안 갭과 AI Data Flow Control](https://www.cyberhaven.com/press-releases/cyberhaven-addresses-critical-ai-security-gap)
- [시리즈 C $88M (2024-06, 485% 수치)](https://www.cyberhaven.com/press-releases/cyberhaven-raises-88-million-to-protect-enterprise-data-in-the-ai-economy)
- [시리즈 D $100M, 기업가치 $1B, 누적 $250M (2025-04)](https://www.cyberhaven.com/press-releases/cyberhaven-raises-100-million-series-d-at-1-billion-valuation)
- [Cyberhaven Labs](https://www.cyberhaven.com/labs)
- 비교 솔루션: [Nightfall AI](/ai/vendors/nightfall/), [Harmonic Security](/ai/vendors/harmonic/), [AI 사용 가시화](/ai/ai-usage-visibility/)

## 면책

본 정리는 Cyberhaven 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 리니지의 암호화 유지와 485% 보고서 판본, 한국 자료는 공식 직접 확인이 필요하므로 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
