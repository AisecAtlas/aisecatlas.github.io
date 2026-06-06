---
title: "Nightfall AI"
description: "AI 네이티브 DLP 스타트업(②). 브라우저 확장과 엔드포인트로 미승인 AI를 인라인 차단하고, API로 승인 SaaS를 out-of-band 스캔하는 하이브리드입니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Nightfall AI", "GenAI DLP", "Shadow AI", "Data Exfiltration", "스타트업"]
categories: ["vendor-profile"]
ShowToc: true
---

> **이 페이지의 결론**: Nightfall AI는 AI 네이티브 DLP로 직원 AI 사용행위 보호(②)에 특화한 스타트업입니다. 캡처가 **하이브리드**입니다. 미승인 AI와 반출 경로는 **브라우저 확장과 엔드포인트 에이전트**가 제출 전에 인라인 차단하고, 승인 SaaS는 **API(OAuth)로 out-of-band 스캔**합니다. 같은 ②라도 WitnessAI(네트워크 인라인)나 Harmonic(브라우저 단일)과 달리 **엔드포인트 인라인과 API 스캔을 함께** 씁니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Nightfall AI (비상장), 미국 샌프란시스코. 창업자 Isaac Madan, Rohan Sathe |
| ② AI 사용행위 보호 | **GenAI DLP**, **Data Exfiltration Prevention(DEX)**, 승인 SaaS DLP |
| 캡처 기반 | 브라우저 확장(Chrome, Edge, Safari, Firefox) + 엔드포인트 에이전트(macOS, Windows) + API/SaaS |
| 탐지 | ML 탐지기, 텍스트와 이미지와 파일과 소스코드, 90에서 95% 정밀도(공식) |
| 투자 | 시리즈 A $20.3M(2019-11, Bain Capital Ventures와 Venrock), 시리즈 B $40M(2022-08, WestBridge 주도). 두 라운드 합 약 $60.3M |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10) 기준으로 Nightfall은 사용자 사용행위(②)를 미승인과 승인 양쪽에서 덮습니다.

{{< ai-pipeline title="Nightfall 통제 지점 (AI 공격표면)" highlight="usage" note="브라우저 확장과 엔드포인트가 미승인 AI로 가는 프롬프트와 업로드를 제출 전에 인라인 차단하고, API 커넥터가 승인 SaaS의 정지 데이터를 out-of-band 스캔합니다. 둘 다 사용자 사용행위(②) 단계입니다." >}}

| 표준 기능 | 분류 | Nightfall 제품 |
|---|---|---|
| AI 사용 통제와 Shadow AI(미승인) | ② AI 사용행위 보호 | 브라우저 확장, 엔드포인트 에이전트(제출 전 인라인) |
| 승인 SaaS 데이터 보호 | ② AI 사용행위 보호 | API/OAuth 커넥터(Slack, Drive, M365 등, out-of-band) |
| 데이터 반출 방지 | ② AI 사용행위 보호 | DEX(클립보드, 업로드 차단, 데이터 계보) |

## 캡처 메커니즘과 아키텍처

미승인 경로는 **엔드포인트 인라인 PEP**, 승인 SaaS는 **API out-of-band 스캐너**입니다. 둘을 함께 쓰는 하이브리드입니다. 캡처 메커니즘 비교는 [AI 사용 가시화](/ai/ai-usage-visibility/)가 정리합니다.

<div class="zta">
<div class="zta-title">② 미승인 AI 경로 — 엔드포인트 인라인 PEP</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>AI 네이티브 탐지</b><span>ML 탐지기로 텍스트와 이미지와 파일의 민감 데이터를 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Nightfall 콘솔</b><span>정책 배포, MDM(Jamf, Intune 등)로 확장 배포</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 브라우저 / 엔드포인트</b><span>입력과 붙여넣기와 파일 업로드</span></div>
<div class="zta-harrow" data-label="① 입력"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>브라우저 확장 + 엔드포인트 에이전트</b><span>제출 전에 검사, 문제 부분만 편집하거나 차단</span></div>
<div class="zta-harrow" data-label="② 제출"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>외부 GenAI 앱</b><span>ChatGPT, Copilot, Gemini, Claude. 보호 대상은 반출 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">데이터 계보(origin tracking)</span><span class="zta-chip">클립보드와 USB 통제</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> PEP가 단말에 있어 제출 전 검사합니다. 네트워크 구성과 무관하게 동작합니다. 문제 부분만 편집하고 전체 프롬프트를 막지 않습니다.</div>
</div>

<div class="arch">
<div class="arch-title">② 승인 SaaS 경로 — API out-of-band 스캐너 (인라인 아님)</div>
<div class="arch-stack">
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">Nightfall 플랫폼</div><div class="arch-layer-sub">OAuth로 SaaS 테넌트에 연결, 네트워크 변경 없음</div></div><div class="arch-tag">스캐너</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">승인 SaaS</div><div class="arch-layer-sub">Slack, Google Drive, GitHub, M365, Salesforce 등</div></div><div class="arch-tag">스캔 대상</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">탐지와 대응</div><div class="arch-layer-sub">정지 데이터와 공유 콘텐츠를 스캔, 경보와 편집과 격리</div></div><div class="arch-tag">정책</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> 승인 SaaS는 인라인이 아니라 API로 out-of-band 스캔합니다. 미승인 경로의 엔드포인트 인라인과 다른 위치입니다. (OAuth와 out-of-band 성격은 커넥터 문서에서 추론한 것이고 단일 페이지 직접 인용은 아닙니다.)</div>
</div>

## 강점과 한계

**강점**
- 미승인(엔드포인트 인라인)과 승인 SaaS(API)를 함께 덮는 하이브리드 커버리지
- 제출 전 인라인 검사로 문제 부분만 편집, 데이터 계보로 반출 추적
- ML 탐지기가 텍스트와 이미지와 파일과 소스코드를 90에서 95% 정밀도로 탐지(공식)
- 브라우저 확장 빠른 배포, MDM 연동

**한계**
- 미승인 경로는 브라우저 확장과 단말 에이전트 설치가 전제, 미설치 단말은 사각
- 100개 이상 탐지기와 LLM/컴퓨터 비전 표현은 마케팅 문구 기준이고, 탐지 문서는 ML 기반과 정밀도로 서술
- 2022-08 시리즈 B 이후 신규 투자 라운드는 공식 자료에서 확인되지 않음
- 한국 특화 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** Nightfall의 한국 사무소, 한국어 사이트, 파트너, 컴플라이언스는 공식 자료에서 확인되지 않습니다. 단말 기반 캡처는 클라우드 경유 없이 적용 가능하나, 백엔드 탐지의 처리 위치를 [CSAP](/korea/regulation/csap-n2sf/) 관점에서 확인합니다.

## 출처

- [Nightfall 플랫폼](https://www.nightfall.ai/)
- [Data Exfiltration Prevention (DEX)](https://www.nightfall.ai/products/data-exfiltration-prevention)
- [ChatGPT/GenAI DLP](https://www.nightfall.ai/integrations/chatgpt-dlp-genai-dlp)
- [Prevent Data Leakage to Shadow AI](https://www.nightfall.ai/solutions/prevent-data-leakage-to-shadow-ai)
- [Spring 2025 제품 출시(엔드포인트, 브라우저)](https://www.nightfall.ai/blog/nightfalls-spring-2025-product-launch-brings-dlp-to-the-ai-era)
- [ML 탐지기 문서](https://help.nightfall.ai/detection_platform/detectors.md)
- [시리즈 A $20.3M (2019-11-07)](https://www.nightfall.ai/blog/nightfall-emerges-from-stealth-with-series-a)
- [시리즈 B $40M (2022-08-10)](https://www.nightfall.ai/blog/nightfall-ai-raises-40-million-series-b-to-expand-cloud-data-protection-platform)
- 비교 솔루션: [Harmonic Security](/ai/vendors/harmonic/), [WitnessAI](/ai/vendors/witnessai/)

## 면책

본 정리는 Nightfall AI 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 탐지 엔진 일부 표현과 API 성격, 한국 자료는 공식 직접 확인이 필요하므로 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
