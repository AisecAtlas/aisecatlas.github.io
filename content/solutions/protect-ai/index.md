---
title: "Protect AI"
description: "모델 스캐닝과 AI 공급망 보안 중심 AI 방어 솔루션 시장 정리"
date: 2026-05-31
lastmod: 2026-05-31
tags: ["Protect AI", "AI 보안", "모델 스캐닝", "AI 공급망", "Applications"]
categories: ["solution-review"]
pillars: ["Applications"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | AI 보안, 모델 스캐닝, AI 공급망, 레드티밍 |
| 본사 | 미국 (비상장, 2025년 7월 22일 Palo Alto Networks에 인수 완료) |
| 핵심 모듈 | Guardian 모델 보안, Recon 레드티밍, Layer 런타임, 오픈소스 ModelScan, LLM Guard |
| 시장 위치 | 모델 스캐닝, AI 공급망 보안 대표 주자, Palo Alto Prisma 계열로 통합 중 |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

Protect AI는 AI 모델과 애플리케이션을 보호하는 **AI 보안 플랫폼**입니다. 모델 공급망과 스캐닝이 핵심으로, [OWASP LLM Top 10](/framework/owasp-llm-top-10/)의 LLM03 공급망과 LLM04 데이터, 모델 포이즈닝에 대응합니다.

핵심 개념은 **모델 스캐닝**입니다. 오픈소스 ML 모델 스캐너 ModelScan은 PyTorch, TensorFlow, ONNX, Keras, Pickle, GGUF, Safetensors 등 **35종 이상 모델 포맷**에서 안전하지 않은 코드와 직렬화 공격을 검사합니다. 여기에 모델 보안(Guardian), 확장형 레드티밍(Recon), 런타임 보안(Layer)을 더해 배포 전부터 런타임까지 AI 공급망 전 구간을 다룹니다. 오픈소스 자산으로 진입한 뒤 엔터프라이즈로 확장하는 구조가 차별점입니다.

> **왜 중요한가.** 공개 모델 허브에서 내려받은 모델은 직렬화 공격이나 백도어를 품을 수 있습니다. Protect AI는 배포 전 모델 스캐닝을 CI/CD에 넣어 공급망 위험을 차단합니다.

| 모듈 | 역할 |
|---|---|
| Guardian | AI 모델 보안. 모델 검사와 차단 |
| Recon | AI용 확장형 레드티밍 |
| Layer | 런타임 보안 |
| LLM Guard | 오픈소스 LLM 입출력 보안(프롬프트, 출력 스캐너). Layer의 기반 |
| ModelScan | 오픈소스 ML 모델 스캐너. 다중 포맷에서 안전하지 않은 코드 검사 |

위협별 대응 모듈은 다음과 같습니다.

| 위협 (공격 기법) | 대응 모듈 |
|---|---|
| 모델 직렬화 공격(Pickle, PyTorch deserialization) | ModelScan, Guardian |
| 모델 내 아키텍처 백도어 | Guardian |
| 공개 모델 허브發 공급망 위험(LLM03) | Guardian, ModelScan |
| LLM 앱 프롬프트 인젝션, 유해 출력 | Layer, LLM Guard |

## 시장 위치

Protect AI는 모델 스캐닝과 AI 공급망 보안 카테고리의 대표 주자입니다. Palo Alto Networks가 **2025년 7월 22일 인수를 완료**했고 Prisma 계열로 통합 중입니다([Palo Alto Networks](https://www.prnewswire.com/news-releases/palo-alto-networks-completes-acquisition-of-protect-ai-302510757.html)). 인수액은 공개되지 않았습니다.

경쟁 구도에서 Protect AI는 오픈소스 스캐너를 진입점으로 삼는 모델 공급망 진영의 주자입니다. 같은 모델 스캐닝과 공급망 영역에서 [HiddenLayer](/solutions/hiddenlayer/)와 경합하고, 런타임 프롬프트 가드레일 특화는 [Lakera](/solutions/lakera/)가 더 깊습니다. 최근 동향으로 Palo Alto Prisma 통합이 진행 중입니다.

## 강점과 한계

**강점**
- 오픈소스 ModelScan, LLM Guard로 진입 장벽이 낮고 비용 투명성이 높음
- 모델 보안(Guardian), 레드티밍(Recon), 런타임(Layer)을 한 스위트로
- 모델 공급망과 포이즈닝(LLM03, LLM04) 대응에 강점
- Palo Alto Prisma 통합으로 기존 플랫폼과 연계

**한계**
- 모델, 도구 권한 관리와 암호화 강제는 범위 밖
- 런타임 가드레일 특화는 Lakera 같은 전용 솔루션이 더 깊음
- 정량 탐지 지표가 공개 자료상 제한
- 한국어 지원과 CSAP는 공개 자료상 미확인

## 언제 선택하나

**선택**
- 외부 모델과 오픈소스 모델의 공급망 위험을 검사해야 하는 조직
- 배포 전 모델 스캐닝을 CI/CD에 넣으려는 경우
- 오픈소스 도구로 먼저 시작해 엔터프라이즈로 확장하려는 경우
- 이미 Palo Alto Prisma 계열을 쓰는 환경

**회피**
- 런타임 프롬프트 가드레일이 1차 과제인 경우 (Lakera 등 고려)
- 모델 도입이 적어 공급망 위험이 작은 환경
- 정가 투명성과 단순 과금을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| 모델 공급망, 스캐닝 중심 | Protect AI |
| 런타임 프롬프트 가드레일 중심 | [Lakera](/solutions/lakera/) |
| 모델 스캐닝, 공급망 경쟁 비교 | [HiddenLayer](/solutions/hiddenlayer/) |
| 모델 공급망 카테고리 비교 | [AI 모델 공급망 보안](/ai/model-supply-chain/) |

## 도입 고려사항

**라이선스.** ModelScan은 무료 오픈소스, 나머지는 엔터프라이즈 구독입니다. Palo Alto의 국내 파트너를 통한 도입이 가능합니다.

**데이터 리전.** 클라우드와 사내 모델을 모두 대상으로 합니다. SaaS 처리 위치는 도입 시 확인합니다.

**CSAP.** Protect AI(Prisma 편입)의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았습니다. 공공 도입 검토 시 최신 인증 현황을 확인합니다.

**망분리.** 오픈소스 ModelScan은 사내 도입과 자체 호스팅 여지가 있어 망분리 환경에서 검토할 수 있습니다.

## 관련 페이지

- [Applications 영역](/pillars/applications/) — AI 애플리케이션 보안 솔루션 분류
- [Palo Alto 벤더 프로필](/ai/vendors/palo-alto/) — Protect AI를 인수한 벤더 상세
- [모델 공급망 보안](/ai/model-supply-chain/) — 모델 스캐닝과 공급망 위험 카테고리

## 출처

- [Palo Alto Networks의 Protect AI 인수 완료 (2025-07-22)](https://www.prnewswire.com/news-releases/palo-alto-networks-completes-acquisition-of-protect-ai-302510757.html)
- [Protect AI 플랫폼](https://protectai.com/)
- [ModelScan (오픈소스)](https://protectai.com/modelscan)
- 비교 솔루션: [Lakera](/solutions/lakera/), [HiddenLayer](/solutions/hiddenlayer/), [AI 모델 공급망 보안](/ai/model-supply-chain/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-31, 최종 확인 2026-05-31, 다음 확인 2026-08-31
