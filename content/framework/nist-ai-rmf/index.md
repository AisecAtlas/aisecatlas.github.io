---
title: "NIST AI RMF"
description: "AI 위험을 GOVERN/MAP/MEASURE/MANAGE 4대 기능으로 다스리는 자발적 프레임워크. 19개 카테고리와 72개 하위카테고리를 영문 원제, 대응 표준과 함께 정리합니다."
date: 2026-05-31
lastmod: 2026-06-07
tags: ["NIST", "AI RMF", "AI 거버넌스", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [NIST AI Risk Management Framework (AI RMF 1.0)](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf)
>
> 한국어 풀이입니다. 카테고리 명칭과 수치는 NIST AI 100-1 본문(Tables 1~4)을 직접 확인했습니다. 권위 있는 해석이 필요하면 원문을 봅니다.

NIST AI RMF(AI Risk Management Framework, NIST AI 100-1)는 AI를 만들거나 운영하는 조직이 AI 위험을 어떤 절차로 다스릴지 GOVERN, MAP, MEASURE, MANAGE 네 기능으로 해체한 자발적 프레임워크입니다. 대상은 특정 모델이나 앱이 아니라 조직의 위험관리 체계입니다. 각 기능을 카테고리와 하위카테고리로 쪼개 권장 행동을 답니다. 인증이 아니라 자발적 가이드입니다.

## 대상과 범위

대상은 AI 위험을 관리하는 조직과 그 수명주기 전반입니다. 설계, 개발, 배포, 운영, 폐기에 걸쳐 누가 책임지고 무엇을 점검하는지를 다룹니다.

- 포함. 위험 거버넌스, 컨텍스트 식별, 신뢰성 측정, 위험 대응과 모니터링, 제3자와 공급망 위험
- 제외. 특정 LLM 앱의 기술 취약점 목록(OWASP LLM Top 10), 공격 전술 지식 베이스(MITRE ATLAS), 법적 의무 자체(EU AI Act)
- 성격. 자발적, 인증 아님. 기술 중립이라 전통 머신러닝부터 생성형 AI까지 적용

## 분류 원칙

분류 축은 위험관리의 단계가 아니라 기능입니다. GOVERN이 나머지 셋을 떠받치는 교차 기능이고, MAP, MEASURE, MANAGE는 식별, 측정, 대응의 순환을 이룹니다.

| 기능 | 한국어 | 카테고리 | 하위카테고리 | 핵심 |
|---|---|:-:|:-:|---|
| GOVERN | 거버넌스 | 6 | 19 | 교차 기능. 위험관리 문화, 책임, 정책을 수명주기 전반에 확립 |
| MAP | 매핑 | 5 | 18 | 컨텍스트와 용도를 정하고 위험과 영향을 식별 |
| MEASURE | 측정 | 4 | 22 | 식별한 위험을 신뢰성 특성 기준으로 정량, 정성 평가 |
| MANAGE | 관리 | 4 | 13 | 위험을 우선순위화하고 대응, 모니터링 |
| **합계** | | **19** | **72** | |

GOVERN이 중심입니다. 책임 구조와 정책이 없으면 MAP, MEASURE, MANAGE는 일회성 점검에 그칩니다. 거버넌스가 나머지 셋을 반복 가능한 절차로 만듭니다.

## 전체 구성

19개 카테고리 전부입니다. 하위카테고리(예: GOVERN 1.1~1.7)는 [AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/)이 권장 행동과 함께 다루며, 본 표는 카테고리 수준까지 펼칩니다.

| 코드 | 카테고리 (영문 키워드) | 하위 수 |
|---|---|:-:|
| GOVERN 1 | 위험관리 정책과 절차 (Policies & processes) | 7 |
| GOVERN 2 | 책임 구조와 역할 (Accountability structures) | 3 |
| GOVERN 3 | 인력 다양성과 포용 (Workforce diversity) | 2 |
| GOVERN 4 | 위험 인식과 소통 문화 (Risk culture) | 3 |
| GOVERN 5 | AI 액터와의 참여 (Engagement) | 2 |
| GOVERN 6 | 제3자와 공급망 위험 (Third-party & supply chain) | 2 |
| MAP 1 | 컨텍스트 확립 (Context) | 6 |
| MAP 2 | AI 시스템 분류 (Categorization) | 3 |
| MAP 3 | 역량, 용도, 편익과 비용 (Capabilities & usage) | 5 |
| MAP 4 | 구성요소별 위험과 편익 매핑 (Risks & benefits) | 2 |
| MAP 5 | 개인과 사회에 대한 영향 특성화 (Impacts) | 2 |
| MEASURE 1 | 측정 방법과 지표 (Methods & metrics) | 3 |
| MEASURE 2 | 신뢰성 특성 평가 (Trustworthy characteristics) | 13 |
| MEASURE 3 | 위험의 시계열 추적 (Tracking over time) | 3 |
| MEASURE 4 | 측정 유효성 피드백 (Feedback) | 3 |
| MANAGE 1 | 위험 우선순위와 대응 (Prioritize & respond) | 4 |
| MANAGE 2 | 편익 최대화, 영향 최소화 전략 (Maximize benefits) | 4 |
| MANAGE 3 | 제3자 위험과 편익 관리 (Third-party risks) | 2 |
| MANAGE 4 | 위험 처리와 모니터링 (Treatment & monitoring) | 3 |

## 기능별 풀이

**GOVERN (거버넌스).** 다른 세 기능을 떠받치는 교차 기능입니다. GOVERN 1은 위험관리 정책과 절차를 조직 전반에 투명하게 두고, GOVERN 2는 누가 책임지고 권한과 교육을 받는지 정합니다. GOVERN 3은 인력 다양성, GOVERN 4는 위험을 고려하고 소통하는 문화, GOVERN 5는 외부 AI 액터와의 참여, GOVERN 6은 제3자 소프트웨어와 데이터에서 오는 공급망 위험을 다룹니다.

**MAP (매핑).** 위험을 다루기 전에 맥락을 먼저 세웁니다. MAP 1은 AI를 쓰는 컨텍스트를 확립하고, MAP 2는 시스템을 분류하며, MAP 3은 역량과 목표한 용도, 기대 편익과 비용을 벤치마크와 비교해 이해합니다. MAP 4는 제3자 구성요소를 포함한 모든 요소의 위험과 편익을 매핑하고, MAP 5는 개인, 집단, 사회에 미치는 영향을 특성화합니다.

**MEASURE (측정).** 매핑한 위험을 정량, 정성으로 평가합니다. MEASURE 1은 방법과 지표를 정하고, MEASURE 2는 신뢰성 특성 기준으로 시스템을 평가합니다(하위카테고리 13개로 가장 큽니다). MEASURE 3은 시간에 따른 위험 추적 장치를 두고, MEASURE 4는 측정 자체가 유효한지 피드백을 모읍니다.

**MANAGE (관리).** 측정 결과를 행동으로 옮깁니다. MANAGE 1은 MAP, MEASURE의 산출을 근거로 위험을 우선순위화해 대응하고, MANAGE 2는 편익을 키우고 부정적 영향을 줄이는 전략을 실행합니다. MANAGE 3은 제3자 위험을 관리하고, MANAGE 4는 대응과 복구, 소통 계획을 문서화해 정기적으로 모니터링합니다.

## Trustworthy AI 7대 특성

MEASURE 2가 시스템을 평가하는 기준이 신뢰할 수 있는 AI의 7대 특성입니다. 원문은 1번 유효성과 신뢰성을 나머지의 **기반 특성**으로 두고 그 위에 안전, 보안, 책임을 쌓는 위계로 봅니다.

| # | 특성 (영문 원제) |
|---|---|
| 1 | 유효성과 신뢰성 (Valid and Reliable) — 기반 특성 |
| 2 | 안전성 (Safe) |
| 3 | 보안과 복원력 (Secure and Resilient) |
| 4 | 책임성과 투명성 (Accountable and Transparent) |
| 5 | 설명 가능성과 해석 가능성 (Explainable and Interpretable) |
| 6 | 프라이버시 강화 (Privacy-Enhanced) |
| 7 | 공정성과 유해 편향 관리 (Fair with Harmful Bias Managed) |

## Generative AI Profile (AI 600-1)

NIST는 2024년 7월 **Generative AI Profile**(AI 600-1)을 발표했습니다. AI RMF 1.0의 첫 분야 횡단 프로파일이자 동반 문서입니다.

- 생성형 AI에 고유하거나 악화되는 **위험 12개 범주**를 정의. 환각(confabulation), 정보 무결성, CBRN 정보, 데이터 프라이버시, 인간과 AI 구성 등
- 각 위험을 4대 기능에 매핑한 권장 행동 제시
- AI RMF의 구조(기능, 카테고리, 하위카테고리)는 그대로 두고 생성형 AI 위험을 입힌 적용 사례

## 다른 표준과의 관계, 한국 적용

| 표준 | 답하는 질문 | 성격 |
|---|---|---|
| NIST AI RMF | AI 위험을 어떻게 거버넌스하나 | 자발적 가이드 |
| ISO/IEC 42001 | AI 경영시스템을 어떻게 인증받나 | 인증 표준(감사 가능) |
| EU AI Act | 법적으로 무엇을 지켜야 하나 | 규제 |
| [OWASP LLM Top 10](/framework/owasp-llm-top-10/) | LLM 앱의 기술 위험은 무엇인가 | 위험 목록 |
| [MITRE ATLAS](/framework/mitre-atlas/) | 공격자는 AI를 어떻게 노리나 | 전술과 기법 지식 베이스 |

**규제와의 관계.** 자발적 가이드라 한국의 법적 의무와는 별개입니다. AI 기본법(인공지능 발전과 신뢰 기반 조성 등에 관한 기본법)과 국내 AI 신뢰성 정책에 매핑해 참고합니다. 국내 법령 원문과 시행 일정은 별도 1차 출처로 확인합니다.

**개인정보보호법.** 7대 특성의 프라이버시 강화와 보안, 복원력은 개인정보보호법과 정보보호 체계에 직접 연결됩니다. MEASURE 2의 평가 항목이 점검 근거가 됩니다.

**본 사이트에서.** [AI 거버넌스와 TRiSM](/ai/ai-governance/)의 거버넌스 계층 기준이자, 생성형 AI 위험을 [OWASP LLM Top 10](/framework/owasp-llm-top-10/)의 기술 위험과 연결하는 상위 프레임입니다. [AI를 지키는 일](/ai/defend-ai/)의 통제가 어느 기능에 대응하는지의 좌표입니다.

## 출처

- [NIST AI 100-1 (AI RMF 1.0) PDF](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf)
- [NIST AI RMF 공식 허브](https://www.nist.gov/itl/ai-risk-management-framework)
- [AI RMF Playbook (AIRC)](https://airc.nist.gov/airmf-resources/playbook/)
- [NIST AI 600-1 Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.600-1.pdf)

---
최초 발행 2026-05-31, 최종 확인 2026-06-07, 다음 검토 2026-09-07
