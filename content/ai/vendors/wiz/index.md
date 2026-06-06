---
title: "Wiz"
description: "AI-SPM으로 클라우드 AI 자산을 에이전트리스로 발견하고 태세를 봅니다(①). 인라인 가드레일이 아니라 Security Graph 기반 out-of-band 태세입니다. 2026년 Google이 인수했습니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Wiz", "AI-SPM", "AI-BOM", "Security Graph", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

> **이 페이지의 결론**: Wiz의 AI 보안은 **AI-SPM**(①)이 핵심입니다. CNAPP의 Security Graph 위에서 클라우드 AI 서비스, 모델, 파이프라인을 **에이전트리스로 발견**하고 AI-BOM과 공격 경로를 만듭니다. 다른 대형 벤더와 결정적으로 다른 점은 **인라인 가드레일(PEP)이 아니라 out-of-band 태세**라는 것입니다. 프롬프트 경로에 끼지 않고 트래픽을 차단하지 않습니다. 직원 GenAI 사용의 인라인 DLP(②)는 Wiz 영역이 아니며, 런타임 위협은 **Wiz Defend**(③/탐지)가 봅니다. 2026-03-11 Google이 인수했습니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Wiz (Google Cloud 소속, 2026-03-11 인수 완료), 이스라엘 텔아비브 |
| ① AI 보호 | **AI-SPM**(AI-BOM, 오구성, 공격 경로), **DSPM for AI**(학습 데이터) |
| ② AI 사용행위 보호 | **섀도 AI 발견**(클라우드와 코드 맥락 한정, 인라인 직원 DLP 아님) |
| ③ AI로 보안 강화 | **Wiz Defend**(AI 런타임 위협 탐지, eBPF), Blue Agent |
| 캡처 기반 | 에이전트리스 클라우드 스캔, Security Graph |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 Wiz는 데이터와 모델과 배포 단계의 **태세와 가시성**을 덮습니다. 인라인 통제가 아니라 out-of-band 태세이므로 다른 벤더의 "통제 지점"과 성격이 다릅니다.

{{< ai-pipeline title="Wiz 가시성 범위 (AI 공격표면)" highlight="data,model,deploy" note="**AI-SPM과 DSPM for AI**가 데이터, 모델, 배포 단계의 자산과 태세를 에이전트리스로 가시화합니다. Wiz는 인라인 가드레일이 아니므로 런타임과 사용행위 단계를 직접 차단하지 않습니다. **Wiz Defend(③)는 런타임 탐지이지 인라인 PEP가 아닙니다.**" >}}

| 표준 기능 | 분류 | Wiz 제품 |
|---|---|---|
| AI 거버넌스와 자산 가시성(AI-SPM) | ① AI 보호 | AI-SPM, AI-BOM, Security Graph 공격 경로 |
| AI 데이터 보안 | ① AI 보호 | DSPM for AI(학습 데이터 노출과 포이즈닝 경로) |
| AI 모델과 공급망 가시성 | ① AI 보호 | AI-BOM(모델, SDK, 라이브러리, 프레임워크) |
| AI 사용 발견(Shadow AI) | ② 부분 | 클라우드와 개발 도구 맥락의 섀도 AI 발견 |
| AI 런타임 위협 탐지 | ③ 탐지 | Wiz Defend(eBPF, 입력에서 영향까지 상관) |

## 제품군 (공식문서 기반)

### ① AI-SPM — 클라우드 AI 태세 (핵심)

CNAPP에 네이티브 통합된 첫 AI 보안 기능입니다. 에이전트리스로 동작합니다([AI-SPM](https://www.wiz.io/solutions/ai-spm)).

| 기능 | 무엇을 하나 |
|---|---|
| AI-BOM | 환경의 모든 AI 서비스, 기술, 라이브러리, SDK를 에이전트 없이 식별. 모델, 프레임워크, 의존성 인벤토리 |
| 오구성 탐지 | OpenAI, Amazon Bedrock 등 AI 서비스의 잘못된 구성을 내장 규칙으로 탐지, IaC 스캔으로 파이프라인까지 확장 |
| 공격 경로 분석 | Security Graph로 인프라, 신원, 모델, 데이터, 앱을 연결해 악용 가능한 AI 공격 경로를 드러냄([Security Graph](https://www.wiz.io/blog/ai-security-posture-management)) |
| DSPM for AI | 민감 학습 데이터를 탐지하고 데이터 유출과 포이즈닝으로 이어지는 경로를 식별 |

커버 대상은 AWS SageMaker와 Bedrock, GCP Vertex AI, Azure AI, OpenAI와 Hugging Face SDK 등입니다.

### ② 섀도 AI 발견 (부분, 정직한 한계)

Wiz의 섀도 AI 발견은 **클라우드에 프로비저닝된 AI 서비스**와 **개발 도구 맥락**(IDE 코파일럿, CLI, 앱 통합)에서 옵니다([AI 가시성](https://www.wiz.io/blog/complete-ai-application-visibility-wiz)). 직원이 브라우저로 외부 GenAI에 붙여넣는 트래픽을 인라인으로 검사하고 차단하는 DLP는 **Wiz의 공식 기능이 아닙니다**. 그 영역은 CASB/SSE/엔드포인트 DLP 벤더의 몫입니다. 캡처 메커니즘 비교는 [AI 사용 가시화](/ai/ai-usage-visibility/)가 정리합니다.

### ③ Wiz Defend — AI 런타임 위협 탐지

모델 입력에서 에이전트 행동, 영향받은 시스템까지 상관해 프롬프트 인젝션, 데이터 반출, 악성 에이전트 행동을 탐지합니다([AI 런타임 탐지](https://www.wiz.io/blog/ai-runtime-threat-detection-from-input-to-real-world-impact)). eBPF 센서와 클라우드/SaaS 로그를 씁니다. Blue Agent가 AI 조사로 MTTR을 줄입니다. 인라인 차단 가드레일이 아니라 탐지와 대응입니다.

## 보안 아키텍처

Wiz는 인라인 PEP가 아니라 **에이전트리스 태세 레이어**입니다. 다른 벤더와의 핵심 차이입니다.

<div class="arch">
<div class="arch-title">① Wiz AI-SPM — 에이전트리스 태세 스캔 (인라인 PEP 아님)</div>
<div class="arch-stack">
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">클라우드 AI 자원</div><div class="arch-layer-sub">관리형 모델 서비스, 학습 파이프라인, 데이터셋, 워크로드의 SDK</div></div><div class="arch-tag">스캔 대상</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">AI-BOM (발견)</div><div class="arch-layer-sub">모든 AI 서비스, 모델, SDK, 라이브러리를 에이전트리스로 인벤토리</div></div><div class="arch-tag">발견</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">Security Graph (상관)</div><div class="arch-layer-sub">인프라, 신원, 모델, 데이터, 앱을 연결</div></div><div class="arch-tag">상관</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">공격 경로 (위험)</div><div class="arch-layer-sub">노출과 신원과 시크릿과 민감 데이터가 모델로 이어지는 독성 조합</div></div><div class="arch-tag">위험</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> Wiz는 클라우드 AI 자원을 에이전트리스로 읽어 그래프에 올립니다. 인라인 가드레일(PEP)과 달리 프롬프트 경로에 끼지 않고 트래픽을 차단하지 않는 out-of-band 태세입니다.</div>
</div>

<div class="arch">
<div class="arch-title">③ Wiz Defend — AI 런타임 위협 탐지 (탐지, 인라인 차단 아님)</div>
<div class="arch-stack">
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">모델 입력</div><div class="arch-layer-sub">프롬프트와 요청</div></div><div class="arch-tag">신호</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">에이전트 행동</div><div class="arch-layer-sub">도구 호출과 시스템 접근, eBPF 센서와 로그</div></div><div class="arch-tag">신호</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">상관과 탐지</div><div class="arch-layer-sub">입력에서 영향까지 연결해 프롬프트 인젝션, 데이터 반출, 악성 에이전트 행동 탐지</div></div><div class="arch-tag">Wiz Defend</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">조사와 대응</div><div class="arch-layer-sub">Blue Agent가 AI 조사로 MTTR 단축</div></div><div class="arch-tag">Blue Agent</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> Defend는 입력에서 실제 영향까지 상관해 탐지합니다. 프롬프트 경로의 인라인 차단 가드레일이 아니라 탐지와 대응입니다.</div>
</div>

## 강점과 한계

**강점**
- CNAPP에 네이티브 통합된 AI-SPM, Security Graph로 멀티클라우드 공격 경로를 한 그래프에서 분석
- 에이전트리스 AI-BOM으로 모델과 SDK와 파이프라인을 빠르게 가시화
- DSPM for AI로 학습 데이터 노출과 포이즈닝 경로 식별
- Google 인수 후에도 멀티클라우드 지원과 Wiz 브랜드 유지 공식 약속

**한계**
- 인라인 PEP가 아니라 out-of-band 태세라 런타임에서 프롬프트를 직접 차단하지 않음
- 직원 GenAI 사용의 인라인 DLP(②)는 Wiz 영역이 아님, 섀도 AI 발견은 클라우드와 코드 맥락 한정
- 효과가 클라우드 환경에 집중, 온프렘 자체 호스팅 AI 가시성은 별도 확인 필요
- 한국 특화 자료가 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국 자료 부재.** Wiz AI-SPM의 한국 특화 가용성과 데이터 레지던시는 공식 자료에서 확인되지 않습니다. 에이전트리스 클라우드 스캔이라 데이터 처리 위치를 [CSAP](/korea/regulation/csap-n2sf/) 관점에서 확인합니다.

**CNAPP 일반.** 클라우드 보안 일반 도입 노트는 [Wiz 솔루션 리뷰](/solutions/wiz/)를 참고합니다.

## 출처

- [Wiz AI-SPM 솔루션](https://www.wiz.io/solutions/ai-spm)
- [First CNAPP to provide AI-SPM (블로그)](https://www.wiz.io/blog/ai-security-posture-management)
- [Complete AI Application Visibility](https://www.wiz.io/blog/complete-ai-application-visibility-wiz)
- [AI Runtime Threat Detection](https://www.wiz.io/blog/ai-runtime-threat-detection-from-input-to-real-world-impact)
- [Wiz Defend 플랫폼](https://www.wiz.io/platform/wiz-defend)
- [DSPM for AI (Academy)](https://www.wiz.io/academy/ai-security/dspm-for-ai)
- [Google의 Wiz 인수 완료 (2026-03-11)](https://www.googlecloudpresscorner.com/2026-03-11-Google-Completes-Acquisition-of-Wiz)
- [Welcoming Wiz to Google Cloud](https://cloud.google.com/blog/products/identity-security/google-completes-acquisition-of-wiz)
- 비교 솔루션: [Palo Alto Networks](/ai/vendors/palo-alto/), [Wiz 일반 리뷰](/solutions/wiz/)

## 면책

본 정리는 Wiz와 Google 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 일부 커버 서비스명과 한국 자료는 공식 페이지로 직접 확인이 필요하므로 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
