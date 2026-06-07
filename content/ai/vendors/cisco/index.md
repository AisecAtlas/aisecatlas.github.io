---
title: "Cisco"
description: "AI Defense가 AI를 보호(①)하고, Secure Access의 AI Access가 직원 AI 사용을 통제(②)하며, Splunk가 SOC를 가속(③)합니다. AI Defense는 인수한 Robust Intelligence 기반입니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Cisco", "AI Defense", "Robust Intelligence", "Secure Access", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

Cisco의 AI 보안 핵심은 **AI Defense**(①)입니다. 인수한 **Robust Intelligence**(2024년) 기술로 모델 검증(알고리즘 레드티밍)과 런타임 가드레일을 제공하고, Cisco 네트워크 패브릭의 enforcement 지점에서 강제합니다. 직원 AI 사용행위 보호(②)는 **Secure Access의 AI Access**가, SOC 운영 가속(③)은 **Splunk**가 맡습니다. Splunk는 AI로 보안을 강화하는 일이지 AI 보안이 아닙니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Cisco (NASDAQ: CSCO), 미국 캘리포니아 산호세 |
| ① AI 보호 | **AI Defense** — AI 발견, 모델 검증, 런타임 가드레일, AI 공급망 위험 관리(AI-SPM) |
| ② AI 사용행위 보호 | **Cisco Secure Access — AI Access**(Shadow AI 발견과 GenAI 통제) |
| ③ AI로 보안 강화 | **Splunk**(AI Assistant, agentic SOC) |
| 인수한 AI 스타트업 | **Robust Intelligence**(2024년 인수, AI Defense의 기반) |
| 제어판 | Cisco Security Cloud, Secure Access |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 Cisco의 ①② 제품이 AI 공격표면을 덮습니다. ③ Splunk는 공격표면이 아니라 SOC 운영을 가속하므로 아래 표시에서 제외합니다.

{{< ai-pipeline title="Cisco ①② 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**AI Defense**가 모델 검증과 공급망(①), 런타임 가드레일(①), 에이전트 가드레일(①)을 덮고, **AI Access**가 사용자 사용행위(②)를 SSE 인라인에서 통제합니다. **Splunk(③)는 AI를 보호하지 않으므로 이 표시에 없습니다.**" >}}

| 표준 기능 | 분류 | Cisco 제품 |
|---|---|---|
| AI 거버넌스와 자산 가시성(AI-SPM) | ① AI 보호 | AI Defense — AI 공급망 위험 관리(AI BOM, MCP 카탈로그) |
| AI 모델과 공급망 보안 | ① AI 보호 | AI Defense — 모델 검증(알고리즘 레드티밍), 모델과 MCP 스캐닝 |
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | AI Defense — 런타임 가드레일 |
| AI 에이전트 보안 | ① AI 보호 | AI Defense — 양방향 에이전트 가드레일 |
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | Secure Access — AI Access |
| SOC 운영 가속(AI 증강) | ③ AI로 보안 강화 | Splunk |

## 제품군 (공식문서 기반)

### ① AI Defense — AI 보호 (Robust Intelligence 기반)

AI 애플리케이션을 개발, 배포, 보호하는 솔루션입니다. 인수한 Robust Intelligence의 AI Validation과 AI Protection이 각각 모델 검증과 런타임 보호의 기반입니다([AI Defense 발표](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m01/cisco-unveils-ai-defense-to-secure-the-ai-transformation-of-enterprises.html)). 2025년 1월 발표, 3월 GA입니다.

| 기능 | 무엇을 하나 |
|---|---|
| AI Discovery | 퍼블릭과 프라이빗 클라우드의 섀도 AI와 승인 AI 앱을 발견 |
| 모델 검증 | AI 기반 알고리즘 레드티밍으로 배포 전 수백 가지 안전과 보안 이슈를 자동 테스트 |
| 런타임 보안 | 프롬프트 인젝션, 서비스 거부, 민감 데이터 유출을 모든 요청과 응답에서 가드레일로 차단 |
| AI 공급망 위험 관리 | 레지스트리의 모델 파일과 MCP 서버를 스캔, AI BOM과 MCP 카탈로그로 자산 가시화([공급망 보안](https://blogs.cisco.com/ai/securing-agents-ai-supply-chain-with-cisco-ai-defense)) |

차별점은 **네트워크 레벨 강제**입니다. Cisco Security Cloud의 기존 네트워크 가시성과 enforcement 지점에 AI 보안을 내장하고, Secure Access와 통합해 강제합니다.

### ② AI Access (Cisco Secure Access) — AI 사용행위 보호

SSE 인라인으로 웹 트래픽을 검사해 섀도 AI 사용을 식별하고 통제합니다([AI-Aware SASE](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m02/cisco-redefines-security-for-the-agentic-era.html)).

| 항목 | 내용 |
|---|---|
| 발견 | 1,200개 이상 GenAI 앱 사용을 트래픽 검사로 식별(공식 페이지 요약 기준 수치) |
| 통제 | 상위 GenAI 앱에 AI 가드레일과 정책 강제, 차단과 리다이렉트, DLP |
| 2026 확장 | AI-Aware SASE로 MCP 가시성과 정책, 의도 인식 검사 추가 |

### ③ Splunk — AI로 보안 강화

Cisco 소유 Splunk가 AI로 위협 탐지와 조사와 대응(TDIR)을 가속합니다. AI Assistant가 조사 보고서를 생성하고 SPL을 작성하며, agentic SOC 에이전트(Triage, Malware Reversal 등)가 탐지에 작동합니다(2025-09-09 발표). AI 모델을 보호하는 것이 아니라 SOC를 증강합니다([Splunk agentic SOC](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m09/cisco-elevates-the-soc-with-agentic-ai-for-faster-threat-response-and-reduced-complexity.html)).

## 보안 아키텍처

①은 AI 앱을 보호하는 ZTA 통제, ③은 SOC 운영을 가속하는 워크플로입니다.

<div class="zta">
<div class="zta-title">① AI Defense — 네트워크 레벨 AI 보호</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>AI Defense 정책</b><span>프롬프트 인젝션, 서비스 거부, 데이터 유출, 도구 오용 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Cisco Security Cloud</b><span>네트워크 enforcement 지점에 정책 배포</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사용자 / 앱 / AI 에이전트</b><span>요청자 신원, 도구 권한</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>AI Defense 런타임 가드레일</b><span>네트워크 인라인으로 모든 요청과 응답을 검사, 코드 수정 없이 강제</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>AI 앱 / 모델 / 에이전트</b><span>보호 대상은 모델과 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">모델 검증(알고리즘 레드티밍)</span><span class="zta-chip">AI 공급망(모델, MCP 스캔, AI BOM)</span><span class="zta-chip">Secure Access enforcement 메시</span><span class="zta-chip">위협 인텔</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 PEP에 요청하면 ② AI Defense가 인라인 검사 후 전달합니다. 배포 전 모델 검증과 공급망 스캔이 PDP에 신뢰 신호를 공급합니다.</div>
</div>

<div class="arch">
<div class="arch-title">③ Splunk — SOC 운영 워크플로 (AI 보안 아님)</div>
<div class="arch-stack">
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">데이터 계층</div><div class="arch-layer-sub">Splunk Enterprise Security(SIEM), SOAR, UEBA 텔레메트리</div></div><div class="arch-tag">입력</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">AI 분류</div><div class="arch-layer-sub">Triage Agent가 탐지를 분류, AI Assistant가 알림 요약</div></div><div class="arch-tag">Splunk AI</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">조사</div><div class="arch-layer-sub">AI Assistant가 조사 보고서 생성, SPL 작성</div></div><div class="arch-tag">Splunk AI</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">분석가 결정</div><div class="arch-layer-sub">사람이 통제 유지</div></div><div class="arch-tag">사람</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">대응</div><div class="arch-layer-sub">AI Playbook과 Response Importer로 대응 가속</div></div><div class="arch-tag">Splunk AI</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> 강조 = Splunk AI가 작동하는 단계. 이 구조는 AI를 보호하는 것이 아니라 SOC를 증강합니다(③). PEP나 자원 보호가 아닙니다.</div>
</div>

## 강점과 한계

**강점**
- AI Defense가 모델 검증(배포 전)과 런타임 가드레일(실행 중)과 공급망 스캔을 한 제품에 통합
- Cisco 네트워크 패브릭의 enforcement 지점에서 강제, Secure Access와 통합
- 인수한 Robust Intelligence의 탐지가 OWASP와 MITRE ATLAS에 매핑
- Splunk(③)와 Secure Access(②)로 ①②③를 Cisco Security Cloud에서 연결

**한계**
- AI Defense(①)와 AI Access(②)와 Splunk(③)가 별개 제품으로 통합 그림 파악에 학습 비용
- GenAI 앱 수(1,200개 이상)와 일부 수치는 공식 페이지 요약 기준이라 도입 시 현행 확인 필요
- Robust Intelligence 인수의 정확한 종결일은 직접 읽히는 공식 페이지에서 확인되지 않음(2024년 말 "now part of Cisco" 확인)
- 한국 시장 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** AI Defense, AI Access, Splunk의 한국 특화 가용성과 데이터 레지던시는 공식 자료에서 확인되지 않습니다. 도입 전 Cisco Korea에 직접 확인합니다.

**CSAP와 망분리.** 네트워크 레벨 클라우드 강제 구조는 [CSAP](/korea/regulation/csap-n2sf/)와 데이터 처리 리전 검토 대상입니다.

## 관련 페이지

- AI를 지키는 일(①): [AI를 지키는 일](/ai/defend-ai/) — AI Defense의 모델 검증, 런타임 가드레일 맥락
- AI 사용행위 가시화(②): [AI 사용 가시화](/ai/ai-usage-visibility/) — Secure Access AI Access의 Shadow AI 통제 맥락
- AI로 보안 강화(③): [AI로 보안 강화](/ai/augment-security/) — Splunk agentic SOC의 맥락
- 솔루션 리뷰: [Robust Intelligence](/solutions/robust-intelligence/) — AI Defense의 기반 기술
- 전체 조망: [AI 보안 지도](/ai/map/), [벤더 프로필](/ai/vendors/)

## 출처

- [AI Defense 발표 (2025-01-15)](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m01/cisco-unveils-ai-defense-to-secure-the-ai-transformation-of-enterprises.html)
- [Robust Intelligence 인수 의향 (2024-08-26)](https://blogs.cisco.com/news/fortifying-the-future-of-security-for-ai-cisco-announces-intent-to-acquire-robust-intelligence)
- [Robust Intelligence now part of Cisco (2024-11-11)](https://blogs.cisco.com/ai/robust-intelligence-now-part-of-cisco-recognized-as-a-2024-gartner-cool-vendor-for-ai-security)
- [AI Defense 공급망 보안 (2025-12-02)](https://blogs.cisco.com/ai/securing-agents-ai-supply-chain-with-cisco-ai-defense)
- [에이전틱 시대 보안과 AI-Aware SASE (2026-02-10)](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m02/cisco-redefines-security-for-the-agentic-era.html)
- [Splunk agentic SOC (2025-09-09)](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m09/cisco-elevates-the-soc-with-agentic-ai-for-faster-threat-response-and-reduced-complexity.html)
- 비교 솔루션: [Palo Alto Networks](/ai/vendors/palo-alto/), [CrowdStrike](/ai/vendors/crowdstrike/), [Microsoft](/ai/vendors/microsoft/)

## 면책

본 정리는 Cisco 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 일부 수치는 공식 페이지 요약 기준이고 Robust Intelligence 종결일과 한국 자료는 미확인이므로 직접 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
