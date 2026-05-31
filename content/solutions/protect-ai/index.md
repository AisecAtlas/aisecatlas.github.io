---
title: "Protect AI"
description: "모델 스캐닝과 AI 공급망 보안 중심 AI 방어 표준 정합성 진단"
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
| 영역 | Applications (AI 보안) |
| 카테고리 | AI 보안, 모델 스캐닝, AI 공급망, 레드티밍 |
| 본사 | 미국. 2025년 7월 22일 Palo Alto Networks에 인수 완료 |
| 차별점 | 오픈소스 ModelScan부터 모델 보안, 레드티밍, 런타임까지 |
| 성숙도 | Advanced |
| 종합 점수 | 8.5 / 10 |
| 최종 검토 | 2026-05-31 |

## 어떤 제품인가

Protect AI는 AI 모델과 애플리케이션을 보호하는 **AI 보안 플랫폼**이다. 모델 공급망과 스캐닝이 핵심으로, [OWASP LLM Top 10](/framework/owasp-llm-top-10/)의 LLM03 공급망과 LLM04 데이터, 모델 포이즈닝에 대응한다.

Palo Alto Networks가 2025년 7월 22일 인수를 완료했고 Prisma 계열로 통합 중이다([Palo Alto Networks](https://www.prnewswire.com/news-releases/palo-alto-networks-completes-acquisition-of-protect-ai-302510757.html)). 인수액은 공개되지 않았다.

| 모듈 | 역할 |
|---|---|
| Guardian | AI 모델 보안. 모델 검사와 차단 |
| Recon | AI용 확장형 레드티밍 |
| Layer | 런타임 보안 |
| ModelScan | 오픈소스 ML 모델 스캐너. 다중 포맷에서 안전하지 않은 코드 검사 |

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따른다. AI 방어 맥락으로 해석한 절대 평가이며 공개 자료를 근거로 한다.

### A축: 일반 기능 (9.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Guardian, Recon, Layer, ModelScan을 단일 스위트로, Prisma 통합 |
| A-2 | 가용성 | 2/2 | 플랫폼형, 클라우드와 사내 모델 모두 대상 |
| A-3 | 성능 | 2/2 | 다중 포맷 모델 스캐닝을 대규모로 수행 |
| A-4 | 운영성 | 1/2 | 오픈소스 ModelScan으로 진입은 쉬우나 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 2/2 | ModelScan이 무료 오픈소스, 엔터프라이즈와 분리 |

### B축: 표준 정합성 (7.9 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-APP-AISEC-01 | 항상 검증 | 2/2 | 배포 전 모든 모델을 스캔하고 검사 |
| ZTA-APP-AISEC-02 | 최소 권한 | 1/2 | 모델, 도구 권한 관리는 핵심 범위가 아님 |
| ZTA-APP-AISEC-03 | 침해 가정 | 2/2 | Recon 레드티밍과 악성 코드 모델 스캐닝으로 침해 가정 대응 |
| ZTA-APP-AISEC-04 | 지속 검증 | 2/2 | Layer 런타임 보안과 지속 스캐닝 |
| ZTA-APP-AISEC-05 | 컨텍스트 정책 | 1/2 | 런타임 정책은 있으나 가드레일 특화 솔루션보다 제한 |
| ZTA-APP-AISEC-06 | 전 구간 암호화 | 1/2 | 모델 무결성 검사 중심, 암호화 강제는 영역 밖 |
| ZTA-APP-AISEC-07 | 가시성 | 2/2 | 모델 인벤토리와 스캐닝으로 AI 자산 가시성 |

원점수 11/14를 10점으로 환산해 **7.9**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 9.0 |
| B. 표준 정합성 | 7.9 |
| **종합** | **8.5 (Advanced)** |

## 강점과 한계

**강점**
- 오픈소스 ModelScan으로 진입 장벽이 낮고 비용 투명성이 높음
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

| 상황 | 권장 |
|---|---|
| 모델 공급망, 스캐닝 중심 | Protect AI |
| 런타임 프롬프트 가드레일 중심 | [Lakera](/solutions/lakera/) |
| 모델 공급망 카테고리 비교 | [AI 모델 공급망 보안](/ai/model-supply-chain/) |

## 한국 시장 노트

**라이선스.** ModelScan은 무료 오픈소스, 나머지는 엔터프라이즈 구독이다. Palo Alto의 국내 파트너를 통한 도입이 가능하다.

**데이터 리전.** 클라우드와 사내 모델을 모두 대상으로 한다. SaaS 처리 위치는 도입 시 확인한다.

**CSAP.** Protect AI(Prisma 편입)의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았다. 공공 도입 검토 시 최신 인증 현황을 확인한다.

**망분리.** 오픈소스 ModelScan은 사내 도입과 자체 호스팅 여지가 있어 망분리 환경에서 검토할 수 있다.

## 출처

- [Palo Alto Networks의 Protect AI 인수 완료 (2025-07-22)](https://www.prnewswire.com/news-releases/palo-alto-networks-completes-acquisition-of-protect-ai-302510757.html)
- [Protect AI 플랫폼](https://protectai.com/)
- [ModelScan (오픈소스)](https://protectai.com/modelscan)

비교 솔루션: [Lakera](/solutions/lakera/), [Wiz](/solutions/wiz/), [AI 모델 공급망 보안](/ai/model-supply-chain/)

## 면책

본 평가는 공개 자료를 근거로 한다. 실제 운영 환경의 탐지 정확도와 성능은 다를 수 있다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-31, 최종 검토 2026-05-31, 다음 검토 2026-08-31
