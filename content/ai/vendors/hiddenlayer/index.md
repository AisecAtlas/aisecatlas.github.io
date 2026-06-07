---
title: "HiddenLayer"
description: "AI 모델과 공급망을 보호하는 스타트업(①). 모델 바이너리를 정적 스캔하는 빌드타임 게이트와 추론 경로 밖에서 탐지하는 런타임 AIDR을 갖습니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["HiddenLayer", "AI Model Security", "AIBOM", "AIDR", "스타트업"]
categories: ["vendor-profile"]
ShowToc: true
---

HiddenLayer는 AI를 보호하는 일(①), 그중에서도 **모델 자체와 공급망 보안**에 특화한 스타트업입니다. 보호 대상이 프롬프트나 직원 사용이 아니라 **모델 아티팩트**입니다. **Model Scanner**가 배포 전에 모델 바이너리를 정적 스캔하고(실행하지 않음), **AIDR**이 배포된 모델을 추론 경로 밖에서 탐지합니다. 인라인 프롬프트 가드레일(Lakera)이나 클라우드 태세 스캔(Wiz)과 다른 위치입니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | HiddenLayer (비상장), 미국. 2022년 설립, 창업자 Chris "Tito" Sestito(Cylance 출신) 등 |
| ① AI 보호 | **AISec Platform 2.0**(2025-04) — AI Discovery, AI Supply Chain Security, AI Attack Simulation, AI Runtime Security |
| 핵심 | Model Scanner(정적 스캔), AIBOM, AIDR(추론 경로 밖 탐지) |
| 캡처 기반 | 빌드타임 정적 스캔(CI/CD, 모델 레지스트리) + 런타임 탐지 |
| 투자 | 시리즈 A $50M(2023-09, M12와 Moore Strategic 주도). 이후 신규 라운드는 공식 미확인 |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 HiddenLayer는 모델과 배포와 런타임 단계(①)를 덮습니다. 직원 AI 사용(②)이나 SOC 가속(③)은 다루지 않습니다.

{{< ai-pipeline title="HiddenLayer 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent" note="**Model Scanner**가 모델과 배포 단계(①)를 빌드타임에, **AIDR**이 런타임과 에이전트 단계(①)를 추론 경로 밖에서 덮습니다. 보호 대상은 모델 아티팩트입니다. 사용자 사용행위(②)는 다루지 않습니다." >}}

| 표준 기능 | 분류 | HiddenLayer 모듈 |
|---|---|---|
| AI 자산 가시성과 AIBOM | ① AI 보호 | AI Discovery(모델 인벤토리, Model Genealogy) |
| AI 모델과 공급망 보안 | ① AI 보호 | AI Supply Chain Security(Model Scanner, AIBOM) |
| AI 모델 검증 | ① AI 보호 | AI Attack Simulation(자동 레드티밍) |
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | AI Runtime Security(AIDR) |

## 제품군 (공식문서 기반)

### Model Scanner — 공급망 정적 스캔

모델을 배포 전에 정적 분석합니다. 모델을 실행하지 않습니다([Model Scanning](https://www.hiddenlayer.com/solutions/model-scanning)).

| 항목 | 내용 |
|---|---|
| 포맷 | 35종 이상(PyTorch, TensorFlow, ONNX, Keras, GGUF, Pickle, Safetensors) |
| 통합 | Hugging Face, MLflow, AWS SageMaker, Databricks, CI/CD |
| 탐지 | ShadowLogic 백도어(가중치 내장), 악성 코드, pickle 직렬화 익스플로잇, 컨트롤 벡터 주입, 학습 포이즈닝 |
| 산출 | 스캔마다 AIBOM(모델 구성요소, 데이터셋, 의존성의 감사 가능 인벤토리) 자동 생성 |

### AIDR — 런타임 탐지 (추론 경로 밖)

배포된 모델을 추론 시점에 실시간 탐지합니다([AI Runtime Security](https://www.hiddenlayer.com/platform/ai-runtime-security)). 핵심은 **탐지 로직이 모델의 추론 경로 밖에 있다**는 것입니다. 결정론적 분류기를 써서, 보호 대상 모델을 뚫는 적대적 입력이 탐지기까지 뚫지 못하게 합니다.

## 보안 아키텍처

HiddenLayer는 **모델 아티팩트**를 두 지점에서 보호합니다. 빌드타임 정적 스캔 게이트와 런타임 탐지입니다.

<div class="arch">
<div class="arch-title">① 빌드타임 — 공급망 정적 스캔 게이트 (Model Scanner)</div>
<div class="arch-stack">
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">모델 소스</div><div class="arch-layer-sub">Hugging Face, MLflow, SageMaker, Databricks에서 CI/CD로 유입</div></div><div class="arch-tag">입력</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">Model Scanner (정적, 실행 안 함)</div><div class="arch-layer-sub">35종 이상 포맷, ShadowLogic 백도어와 pickle 익스플로잇과 포이즈닝 탐지. 파이프라인에 경량 컨테이너로 통합</div></div><div class="arch-tag">스캔 게이트</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">AIBOM과 판정</div><div class="arch-layer-sub">AI 자재명세서 생성, 배포 차단 또는 허용</div></div><div class="arch-tag">판정</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> 모델 바이너리를 배포 전에 실행 없이 정적 스캔하는 게이트입니다. 클라우드 태세 스캔(Wiz)이 구성을 보는 것과 달리 모델 가중치와 직렬화를 봅니다.</div>
</div>

<div class="zta">
<div class="zta-title">① AIDR — 런타임 탐지 (추론 경로 밖)</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>결정론적 분류기</b><span>인젝션, 탈옥, 데이터 유출, 악성 출력을 추론 경로 밖에서 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>AISec Platform</b><span>정책 배포</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사용자 / 앱</b><span>프롬프트 요청</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>AIDR</b><span>프롬프트와 응답을 검사, 탐지 로직은 모델 추론 경로 밖. 탐지와 차단</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>배포된 모델 / 에이전트</b><span>보호 대상은 모델</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">Model Scanner 빌드타임 판정</span><span class="zta-chip">AI Attack Simulation(레드티밍)</span><span class="zta-chip">AIBOM</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> 탐지 로직이 모델 추론 경로 밖에 있어, 모델을 뚫는 적대적 입력이 탐지기까지 뚫지 못합니다. 인라인 프롬프트 가드레일(Lakera)과 달리 결정론적 탐지를 추론과 분리합니다. (정확한 배포 토폴로지는 공식 페이지마다 표현이 달라 별도 확인이 필요합니다.)</div>
</div>

## 강점과 한계

**강점**
- 모델 바이너리를 실행 없이 정적 스캔, 35종 이상 포맷과 ShadowLogic 백도어와 pickle 익스플로잇 탐지
- 스캔마다 AIBOM 자동 생성으로 공급망 추적과 라이선스 거버넌스
- AIDR의 결정론적 탐지를 추론 경로 밖에 둬 적대적 입력에 견고
- 자동 레드티밍으로 배포 전 검증

**한계**
- 보호 대상이 모델 아티팩트라 직원 AI 사용(②)이나 SOC 가속(③)은 범위 밖
- 시리즈 A(2023-09) 이후 신규 투자 라운드는 공식 자료에서 확인되지 않음
- AIDR의 정확한 배포 토폴로지(순수 관찰 vs 인라인 프록시)는 공식 페이지마다 표현이 달라 확인 필요
- 한국 특화 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** HiddenLayer의 한국 사무소, 한국어 자료, 국내 파트너는 공식 자료에서 확인되지 않습니다. 빌드타임 스캔은 CI/CD 통합이라 파이프라인 위치에서 적용하고, 처리 위치를 [CSAP](/korea/regulation/csap-n2sf/) 관점에서 확인합니다.

## 관련 페이지

- [AI를 지키는 일](/ai/defend-ai/)
- [모델 공급망 보안](/ai/model-supply-chain/)
- [AI 보안 지도](/ai/map/)
- [벤더 프로필](/ai/vendors/)
- [HiddenLayer 솔루션 리뷰](/solutions/hiddenlayer/)

## 출처

- [AISec Platform 2.0 발표 (2025-04-22)](https://www.hiddenlayer.com/news/hiddenlayer-unveils-aisec-platform-2-0-to-deliver-unmatched-context-visibility-and-observability-for-enterprise-ai-security)
- [플랫폼 개요](https://www.hiddenlayer.com/platform)
- [AI Discovery와 AIBOM](https://www.hiddenlayer.com/platform/ai-discovery)
- [AI Runtime Security (AIDR)](https://www.hiddenlayer.com/platform/ai-runtime-security)
- [Model Scanning](https://www.hiddenlayer.com/solutions/model-scanning)
- [시리즈 A $50M (2023-09-19)](https://www.hiddenlayer.com/news/hiddenlayer-raises-50m-in-series-a-funding-to-safeguard-ai)
- 비교 솔루션: [HiddenLayer 솔루션 리뷰](/solutions/hiddenlayer/), [AI 모델 공급망 보안](/ai/model-supply-chain/)

## 면책

본 정리는 HiddenLayer 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. AIDR 배포 토폴로지와 시드 투자, 한국 자료는 공식 직접 확인이 필요하므로 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
