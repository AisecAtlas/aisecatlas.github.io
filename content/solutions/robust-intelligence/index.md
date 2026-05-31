---
title: "Robust Intelligence"
description: "AI Firewall과 알고리즘 레드티밍 중심 AI 방어 표준 정합성 진단"
date: 2026-05-31
lastmod: 2026-05-31
tags: ["Robust Intelligence", "Cisco AI Defense", "AI Firewall", "AI 보안", "Applications"]
categories: ["solution-review"]
pillars: ["Applications"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Applications (AI 보안) |
| 카테고리 | AI 보안, AI Firewall, 알고리즘 레드티밍 |
| 본사 | 미국. 2024년 10월 Cisco에 인수, Cisco AI Defense 기반 |
| 차별점 | AI Firewall과 알고리즘 레드티밍을 초기 상용화 (업계 첫은 벤더 자체 표현) |
| 성숙도 | Advanced |
| 종합 점수 | 7.7 / 10 |
| 최종 검토 | 2026-05-31 |

## 어떤 제품인가

Robust Intelligence는 AI 보안 카테고리를 초기 상용화한 업체다. **알고리즘 레드티밍**과 **AI Firewall**로 알려졌고, 2024년 10월 Cisco에 인수돼 **Cisco AI Defense**의 기반이 됐다([Cisco](https://www.cisco.com/site/us/en/products/security/ai-defense/robust-intelligence-is-part-of-cisco/index.html)). 인수액은 공개되지 않았다. "업계 첫 AI Firewall"은 Cisco, Robust Intelligence 자체 표현이며 독립 검증된 사실이 아니다.

> **알고리즘 레드티밍.** 사람이 수동으로 프롬프트를 만드는 대신 자동으로 적대적 입력을 생성해 모델, 애플리케이션의 취약점을 탐색하고, 그 결과로 모델별 가드레일을 자동 생성하는 기법이다.

[OWASP LLM Top 10 2025](/framework/owasp-llm-top-10/)의 다음 항목에 대응한다.

| OWASP 항목 | 대응 |
|---|---|
| LLM01 프롬프트 인젝션 | AI Firewall 입력 검사 |
| LLM02 민감정보 노출 | AI Firewall 출력 차단(PII) |
| LLM05 부적절한 출력 처리 | AI Firewall 출력 검사 |
| LLM03 공급망 | 모델 파일 스캐닝 |
| LLM04 데이터, 모델 포이즈닝 | AI Validation 사전 검증 |

OWASP 매핑은 RI 모듈의 기능 범위에 근거한 본 사이트 해석이며, 항목별 커버리지 깊이는 제품 문서 확인이 필요하다.

| 모듈 | 역할 |
|---|---|
| AI Validation | 개발 단계 안전, 보안 테스트 자동화. 알고리즘 레드티밍이 자동 적대적 입력으로 취약점 탐색 |
| AI Firewall | 실시간, 모델 비종속 가드레일. 입력(프롬프트 인젝션, jailbreak)과 출력(PII, 유해 콘텐츠) 양방향 검사 |
| 모델 파일 스캐닝 | 오픈소스 구성요소 등 AI 공급망 취약점 식별 |

AI Firewall의 탐지 메커니즘(분류기 기반 대 정책 기반), 우회 내성(jailbreak, 난독화, 다국어 입력)의 구체 범위는 공개 자료상 확인 제한이다.

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따른다. AI 방어 맥락으로 해석한 절대 평가이며 공개 자료를 근거로 한다.

### A축: 일반 기능 (7.5 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Validation, Firewall, 스캐닝 3요소 + Cisco AI Defense 통합. 인수 후 콘솔, API 통합 수준은 과도기로 확인 제한 |
| A-2 | 가용성 | 1.5/2 | Cisco AI Defense SaaS 기반. 인수 후 통합 SLA, 리전 정보 공개 제한 |
| A-3 | 성능 | 2/2 | 실시간, 모델 비종속 AI Firewall |
| A-4 | 운영성 | 1/2 | Cisco 생태계 연계는 강점이나 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 1/2 | 엔터프라이즈, 공개 정가와 무료 버전 없음 |

### B축: 표준 정합성 (7.9 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-APP-AISEC-01 | 항상 검증 | 2/2 | AI Firewall이 입력과 출력을 실시간 검사 |
| ZTA-APP-AISEC-02 | 최소 권한 | 1/2 | 툴 호출, 과도한 에이전시(OWASP LLM06) 대응은 핵심 범위 밖 |
| ZTA-APP-AISEC-03 | 침해 가정 | 2/2 | 알고리즘 레드티밍으로 다수 공격 기법을 자동 시험(구체 기법 수는 공개 자료 미확인) |
| ZTA-APP-AISEC-04 | 지속 검증 | 2/2 | 런타임 Firewall과 개발 단계 Validation |
| ZTA-APP-AISEC-05 | 컨텍스트 정책 | 2/2 | 모델 비종속 가드레일 정책으로 차단 |
| ZTA-APP-AISEC-06 | 전 구간 암호화 | 1/2 | 입출력 차단 중심, 암호화 강제는 영역 밖 |
| ZTA-APP-AISEC-07 | 가시성 | 1/2 | 모델 스캐닝은 있으나 자산 인벤토리는 전면 기능이 아님 |

원점수 11/14를 10점으로 환산해 **7.9**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 7.5 |
| B. 표준 정합성 | 7.9 |
| **종합** | **7.7 (Advanced)** |

(7.5+7.9)/2 = 7.7 (Advanced, 7.0~8.9). A-2를 가용성 실증 부족으로 1.5로 하향한 결과다.

## 강점과 한계

**강점**
- AI Firewall과 알고리즘 레드티밍의 기술 깊이 (업계 첫은 Cisco, RI 자체 표현)
- 개발(Validation)과 런타임(Firewall)을 함께 다룸
- 모델 비종속 가드레일로 여러 모델에 적용
- Cisco AI Defense 통합으로 기존 Cisco 보안과 연계

**한계**
- 자산 인벤토리와 가시성은 전면 기능이 아니라 상대적으로 약함
- 툴 호출, 과도한 에이전시(OWASP LLM06) 등 에이전틱 위협은 핵심 범위 밖 (B-2 최소권한 1점 근거)
- 모델, 도구 권한 관리와 암호화 강제는 범위 밖
- 무료 버전이 없어 진입과 비용 예측이 부담
- 한국어 지원과 CSAP는 공개 자료상 미확인
- AI Firewall, 알고리즘 레드티밍의 세부 성능 수치는 인수 기사 외 1차 제품 문서 근거가 제한적

## 언제 선택하나

**선택**
- AI Firewall로 입출력을 실시간 차단해야 하는 조직
- 개발 단계 알고리즘 레드티밍으로 모델을 사전 검증하려는 경우
- 이미 Cisco 보안 스택을 쓰는 환경
- 모델 비종속 가드레일이 필요한 멀티 모델 환경

**회피**
- AI 자산 인벤토리와 가시성이 1차 과제인 경우 (HiddenLayer 고려)
- 무료 오픈소스로 시작하려는 경우 (Protect AI ModelScan 고려)
- 정가 투명성을 최우선으로 보는 경우

| 상황 | 권장 |
|---|---|
| AI Firewall과 레드티밍, Cisco 연계 | Robust Intelligence |
| 런타임 가드레일 깊이 | [Lakera](/solutions/lakera/) |
| 통합 가시성과 AIBOM | [HiddenLayer](/solutions/hiddenlayer/) |

## 도입 고려사항

**제품 편입.** Robust Intelligence는 현재 Cisco AI Defense로 편입됐다. 독립 SKU로 별도 구매 가능한지, AI Defense 번들로만 제공되는지 도입 시 확인한다.

**라이선스.** 엔터프라이즈 구독, 공개 정가 없음. Cisco의 국내 영업과 파트너를 통한 도입이 가능하다.

**데이터 리전.** 실시간 Firewall과 Validation SaaS다. 데이터 처리와 보관 위치는 도입 시 확인한다.

**CSAP.** Robust Intelligence(Cisco AI Defense 편입)의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았다. 공공 도입 검토 시 최신 인증 현황을 확인한다.

**언어.** 한국어 프롬프트 공격과 우회 패턴의 탐지 정확도는 PoC에서 자체 데이터로 검증한다.

## 출처

- [Robust Intelligence is now part of Cisco](https://www.cisco.com/site/us/en/products/security/ai-defense/robust-intelligence-is-part-of-cisco/index.html)
- [Cisco AI Defense 제품 페이지](https://www.cisco.com/site/us/en/products/security/ai-defense/index.html)
- [Cisco의 Robust Intelligence 인수 (CX Today)](https://www.cxtoday.com/customer-analytics-intelligence/cisco-to-acquire-robust-intelligence-the-ai-focused-security-startup/)

비교 솔루션: [Lakera](/solutions/lakera/), [HiddenLayer](/solutions/hiddenlayer/), [Protect AI](/solutions/protect-ai/)

## 면책

본 평가는 공개 자료를 근거로 한다. 실제 운영 환경의 탐지 정확도와 성능은 다를 수 있다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-31, 최종 검토 2026-05-31, 다음 검토 2026-08-31
