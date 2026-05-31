---
title: "AI 모델 공급망 보안"
description: "악성 모델, pickle 직렬화 공격, 모델 출처와 서명, ML-BOM."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "Supply Chain", "Hugging Face", "Model Scanning", "OWASP"]
ShowToc: true
---

> **이 페이지의 결론**: 조직은 모델을 직접 만들기보다 Hugging Face 같은 레지스트리에서 받아온다. 그 모델 자체가 악성일 수 있다. 특히 **pickle 직렬화 포맷은 로드 시 코드를 실행**해 위험하다. 방어는 모델 스캐닝, 안전한 포맷 사용, 출처와 서명 검증, ML-BOM이다. OWASP LLM03(공급망)과 LLM04(모델 포이즈닝)에 해당한다.

## 왜 모델 공급망인가

LLM 보안은 프롬프트에만 있지 않다. 모델 파일 자체가 공격 벡터다. 외부 레지스트리에서 받은 모델에 악성 코드가 심겨 있을 수 있다.

Protect AI는 Hugging Face와 협력해 플랫폼 모델을 스캔했고, **400만 개 이상**의 모델을 검사해 **약 35만 2천 건**의 안전하지 않거나 의심스러운 이슈를 **5만 1,700개 모델**에서 식별했다([Security Boulevard](https://securityboulevard.com/2025/04/the-race-to-secure-the-ai-ml-supply-chain-is-on-get-out-front/)).

## 주요 위협

### pickle 직렬화 공격

Python의 pickle 포맷은 모델 직렬화에 널리 쓰이지만, **로드 시 내장 코드가 실행**되기 때문에 본질적으로 안전하지 않다. 2025년 2월 ReversingLabs 연구진은 Hugging Face에서 플랫폼 스캐닝을 우회한 악성 모델 두 개를 발견했다([Security Boulevard](https://securityboulevard.com/2025/04/the-race-to-secure-the-ai-ml-supply-chain-is-on-get-out-front/)).

### NullifAI 우회

악성 코드를 pickle 바이트 스트림 앞부분에 심고 기본 ZIP 대신 7z로 압축하면, Hugging Face의 PickleScan 탐지가 깨진다. ReversingLabs가 이 기법을 NullifAI로 명명했다([AgenticWork 정리](https://agenticwork.io/blog/nullifai-hugging-face-malicious-models)).

### 사칭 모델

OpenAI 릴리스를 사칭한 악성 Hugging Face 모델이 **24만 4천 회** 다운로드되기도 했다([CSO Online](https://www.csoonline.com/article/4169407/malicious-hugging-face-model-masquerading-as-openai-release-hits-244k-downloads.html)).

### JFrog의 발견

JFrog은 조용한 백도어를 심은 악성 Hugging Face 모델이 데이터 과학자를 노린 사례를 보고했다([JFrog](https://jfrog.com/blog/data-scientists-targeted-by-malicious-hugging-face-ml-models-with-silent-backdoor/)).

## OWASP LLM Top 10 매핑

| 코드 | 위협 | 모델 공급망에서의 의미 |
|---|---|---|
| LLM03 | Supply Chain | 모델, 데이터셋, 외부 의존성 침해 |
| LLM04 | Data and Model Poisoning | 학습 단계나 모델 파일 오염 |

출처: [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

## 방어 방법

| 방어 | 내용 |
|---|---|
| 모델 스캐닝 | 레지스트리에서 받은 모델을 로드 전 스캔 |
| 안전한 포맷 | pickle 대신 safetensors 같은 안전한 직렬화 사용 |
| 출처와 서명 | 모델 출처 기록, 서명 검증으로 변조 확인 |
| ML-BOM | 모델과 학습 데이터의 구성 명세 작성 |

모델 출처(provenance)는 모델이 어디서 왔고 어떻게 바뀌었는지 기록하는 것이고, 서명 검증은 학습과 배포 사이의 변조를 막는다. JFrog은 전통적 SBOM에 대응하는 **ML-BOM(AI-BOM)**을 제시했는데, 모델 자체와 학습 데이터셋 두 계층의 출처를 모두 다룬다([JFrog AI-BOM](https://jfrog.com/learn/ai-security/ai-bom/)).

## 솔루션

| 솔루션 | 접근 |
|---|---|
| [Protect AI](/solutions/protect-ai/) | Hugging Face 파트너 모델 스캐닝, Palo Alto Prisma AIRS에 통합 (정합성 8.5) |
| [HiddenLayer](/solutions/hiddenlayer/) | 모델 스캐닝과 적대적 분석. 침해 시 재이미징 권고 (정합성 8.3) |
| **JFrog** | Xray 모델 스캐닝, ML-BOM, 서명된 추적성 |
| [Wiz](/solutions/wiz/) | AI 모델 보안 스캐닝, CNAPP 통합 (정합성 8.7) |

출처: [JFrog 악성 AI 모델 탐지](https://docs.jfrog.com/security/docs/detect-malicious-ai-models), [Wiz AI Model Security Scanning](https://www.wiz.io/academy/ai-security/ai-model-security-scanning)

## 도입 가이드

1. **레지스트리 정책.** 신뢰하는 모델 출처만 허용하고 나머지는 차단한다.
2. **로드 전 스캔.** 모델을 환경에 올리기 전 스캐닝을 의무화한다.
3. **안전한 포맷 강제.** pickle 대신 safetensors를 표준으로 정한다.
4. **출처와 서명 검증.** 모델 서명을 확인하고 ML-BOM을 생성한다.
5. **거버넌스 연계.** [AI 거버넌스](/ai/ai-governance/)와 [AI-SPM](/ai/ai-spm/)으로 모델 자산을 인벤토리화한다.

## 도입 고려사항

**오픈소스 모델 사용.** 공공과 금융권의 자체 호스팅 LLM은 대개 오픈소스 모델을 받아 쓴다. 다운로드 모델의 스캐닝과 출처 검증이 도입 전 필수 절차가 된다.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 환경에서 외부 모델 반입은 통제 대상이다. 내부 모델 레지스트리와 스캐닝 게이트를 구성하는 것이 현실적이다.

**개인정보.** 학습 데이터에 개인정보가 포함됐는지는 [개인정보보호법](/korea/regulation/pipa-zero-trust-data/) 관점에서 ML-BOM의 데이터 계층으로 추적한다.

## 출처

- [Security Boulevard — AI/ML 공급망 보안 경쟁과 Protect AI 스캔 통계](https://securityboulevard.com/2025/04/the-race-to-secure-the-ai-ml-supply-chain-is-on-get-out-front/)
- [AgenticWork — NullifAI Hugging Face 악성 모델](https://agenticwork.io/blog/nullifai-hugging-face-malicious-models)
- [CSO Online — OpenAI 사칭 악성 모델 24만 4천 다운로드](https://www.csoonline.com/article/4169407/malicious-hugging-face-model-masquerading-as-openai-release-hits-244k-downloads.html)
- [JFrog — 악성 Hugging Face 모델 백도어](https://jfrog.com/blog/data-scientists-targeted-by-malicious-hugging-face-ml-models-with-silent-backdoor/)
- [JFrog — AI-BOM 가이드](https://jfrog.com/learn/ai-security/ai-bom/)
- [Wiz — AI Model Security Scanning](https://www.wiz.io/academy/ai-security/ai-model-security-scanning)

## 면책

본 평가는 공개 자료를 근거로 한다. 시장 변동이 빠른 영역이다. 도입 전에 최신 공식 발표를 확인한다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-06-30
