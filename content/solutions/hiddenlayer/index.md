---
title: "HiddenLayer"
description: "런타임부터 공급망까지 통합한 AI 보안 플랫폼 표준 정합성 진단"
date: 2026-05-31
lastmod: 2026-05-31
tags: ["HiddenLayer", "AI 보안", "AIDR", "AIBOM", "Applications"]
categories: ["solution-review"]
pillars: ["Applications"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Applications (AI 보안) |
| 카테고리 | AI 보안, 런타임 방어(AIDR), 공급망, 자세 관리, 레드티밍 |
| 본사 | 미국. 2022년 설립, 독립 운영 |
| 차별점 | 런타임, 공급망, 자세, 레드티밍을 한 플랫폼으로 통합 |
| 성숙도 | Advanced |
| 종합 점수 | 8.3 / 10 |
| 최종 검토 | 2026-05-31 |

## 어떤 제품인가

HiddenLayer는 AI 보안만 전담하는 플랫폼이다. AISec Platform이 **공급망 보안, 런타임 방어, 자세 관리, 자동 레드티밍**을 한데 묶는다([HiddenLayer](https://www.hiddenlayer.com/)).

2022년 설립한 독립 업체로, 총 **5,600만 달러**를 유치했다. 투자자에 M12(Microsoft), IBM Ventures, Capital One Ventures가 있다([HiddenLayer](https://www.hiddenlayer.com/news/hiddenlayer-raises-50m-in-series-a-funding-to-safeguard-ai)). 2025년 4월 22일 가시성과 관측성을 강화한 AISec Platform 2.0을 발표했다([PR Newswire](https://www.prnewswire.com/news-releases/hiddenlayer-unveils-aisec-platform-2-0-to-deliver-unmatched-context-visibility-and-observability-for-enterprise-ai-security-302434498.html)).

| 모듈 | 역할 |
|---|---|
| AIDR | 앱과 모델 사이 런타임 모듈. 프롬프트, 응답 실시간 검사 |
| Model Scanner | 모델 검사로 공급망 위험 점검 |
| AIBOM, Model Genealogy | AI 자산 인벤토리와 출처 추적 |
| 자동 레드티밍 | 배포 전후 공격 시뮬레이션 |

AIDR의 **결정적 분류기가 모델 추론 경로 밖에 위치**해, 프롬프트 인젝션, 탈옥, 간접 공격을 탐지하고 데이터 유출과 악성 출력을 차단한다([HiddenLayer AIDR](https://hiddenlayer.com/aidr/)).

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따른다. AI 방어 맥락으로 해석한 절대 평가이며 공개 자료를 근거로 한다.

### A축: 일반 기능 (8.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | 런타임, 공급망, 자세, 레드티밍을 단일 플랫폼으로 |
| A-2 | 가용성 | 2/2 | AISec Platform 2.0, 주요 마켓플레이스 제공 |
| A-3 | 성능 | 2/2 | 결정적 분류기가 추론 경로 밖이라 모델 지연에 영향 적음 |
| A-4 | 운영성 | 1/2 | 기능 범위가 넓어 학습 비용. 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 1/2 | 엔터프라이즈, 공개 정가와 무료 버전 없음 |

### B축: 표준 정합성 (8.6 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-APP-AISEC-01 | 항상 검증 | 2/2 | AIDR가 모든 프롬프트와 응답을 실시간 검사 |
| ZTA-APP-AISEC-02 | 최소 권한 | 1/2 | 모델, 도구 권한 관리는 핵심 범위가 아님 |
| ZTA-APP-AISEC-03 | 침해 가정 | 2/2 | 자동 레드티밍과 모델 탈취, 공급망 위협 대응 |
| ZTA-APP-AISEC-04 | 지속 검증 | 2/2 | AIDR 런타임 지속 탐지 |
| ZTA-APP-AISEC-05 | 컨텍스트 정책 | 2/2 | 정책 기반 위협 관리와 결정적 분류 |
| ZTA-APP-AISEC-06 | 전 구간 암호화 | 1/2 | 무결성, 탐지 중심으로 암호화 강제는 영역 밖 |
| ZTA-APP-AISEC-07 | 가시성 | 2/2 | AIBOM, Model Genealogy로 AI 자산 가시성 강점 |

원점수 12/14를 10점으로 환산해 **8.6**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.0 |
| B. 표준 정합성 | 8.6 |
| **종합** | **8.3 (Advanced)** |

## 강점과 한계

**강점**
- 런타임(AIDR), 공급망, 자세 관리, 레드티밍을 한 플랫폼으로 통합
- AIBOM과 Model Genealogy로 AI 자산 가시성에 강점
- 결정적 분류기가 추론 경로 밖이라 모델 지연 영향이 적음
- AI 보안 전담 독립 업체로 영역 집중도가 높음

**한계**
- 모델, 도구 권한 관리와 암호화 강제는 범위 밖
- 무료 버전이 없어 진입과 비용 예측이 부담
- 통합 폭이 넓어 초기 학습 비용
- 한국어 지원과 CSAP는 공개 자료상 미확인

## 언제 선택하나

**선택**
- 런타임과 공급망을 한 플랫폼으로 묶어 AI 보안을 통합하려는 조직
- AI 자산 인벤토리(AIBOM)와 출처 추적이 필요한 환경
- 모델 추론 지연에 민감해 경로 밖 검사가 필요한 경우
- 자동 레드티밍을 상시 운영하려는 팀

**회피**
- 런타임 가드레일만 빠르게 붙이면 되는 경우 (Lakera 등 고려)
- 무료 오픈소스로 시작하려는 경우 (Protect AI ModelScan 고려)
- 정가 투명성을 최우선으로 보는 경우

| 상황 | 권장 |
|---|---|
| 런타임과 공급망 통합 AI 보안 | HiddenLayer |
| 런타임 가드레일 깊이 | [Lakera](/solutions/lakera/) |
| 모델 스캐닝과 오픈소스 | [Protect AI](/solutions/protect-ai/) |

## 한국 시장 노트

**라이선스.** 엔터프라이즈 구독, 공개 정가 없음. 독립 업체로 국내 파트너 현황은 확인이 필요하다.

**데이터 리전.** 런타임 검사와 자세 관리 SaaS다. 데이터 처리와 보관 위치는 도입 시 벤더에 직접 확인한다.

**CSAP.** HiddenLayer의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았다. 공공 도입 검토 시 최신 인증 현황을 확인한다.

**언어.** 한국어 프롬프트 공격과 우회 패턴의 탐지 정확도는 PoC에서 자체 데이터로 검증한다.

## 출처

- [HiddenLayer 플랫폼](https://www.hiddenlayer.com/)
- [HiddenLayer AIDR](https://hiddenlayer.com/aidr/)
- [AISec Platform 2.0 발표 (PR Newswire)](https://www.prnewswire.com/news-releases/hiddenlayer-unveils-aisec-platform-2-0-to-deliver-unmatched-context-visibility-and-observability-for-enterprise-ai-security-302434498.html)
- [HiddenLayer Series A 5천만 달러 유치](https://www.hiddenlayer.com/news/hiddenlayer-raises-50m-in-series-a-funding-to-safeguard-ai)

비교 솔루션: [Lakera](/solutions/lakera/), [Protect AI](/solutions/protect-ai/), [AI 모델 공급망 보안](/ai/model-supply-chain/)

## 면책

본 평가는 공개 자료를 근거로 한다. 실제 운영 환경의 탐지 정확도와 성능은 다를 수 있다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-31, 최종 검토 2026-05-31, 다음 검토 2026-08-31
