---
title: "NIST AI RMF"
description: "NIST AI 위험관리 프레임워크 1.0 한국어 요약"
date: 2026-05-31
lastmod: 2026-05-31
tags: ["NIST", "AI RMF", "AI 거버넌스", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [NIST AI Risk Management Framework (AI RMF 1.0)](https://www.nist.gov/itl/ai-risk-management-framework)
>
> 이 페이지는 영문 원문을 한국어로 요약한 것이다. 권위 있는 해석이 필요하면 원문을 본다.

## 한 줄 요약

NIST가 발표한 **AI 위험 관리 거버넌스 프레임워크**다. 자발적 가이드이며, AI 위험을 식별, 평가, 관리하는 4대 기능으로 구성한다.

## 어떤 문서인가

| 항목 | 내용 |
|---|---|
| 발표 기관 | 미국 NIST |
| 문서 번호 | NIST AI 100-1 (AI RMF 1.0) |
| 발표 시점 | 2023년 1월 26일 |
| 성격 | 자발적, 인증 아님 |
| 동반 문서 | Generative AI Profile (AI 600-1, 2024년 7월) |

### Generative AI Profile (2024)

NIST는 2024년 7월 **Generative AI Profile**(AI 600-1)을 발표했다. AI RMF 1.0의 첫 교차분야 동반 문서로, 생성형 AI에 고유하거나 악화되는 **위험 12개 범주**를 정의하고 4대 기능에 매핑된 권고 행동을 제시한다.

## 4대 기능

| 기능 | 한국어 | 핵심 |
|---|---|---|
| GOVERN | 거버넌스 | 교차 기능. 위험관리 문화, 책임, 정책, 감독을 수명주기 전반에 확립 |
| MAP | 매핑 | 컨텍스트와 용도를 정하고 위험을 식별 |
| MEASURE | 측정 | 식별한 위험을 정량, 정성 평가 |
| MANAGE | 관리 | 위험을 우선순위화하고 대응(완화, 이전, 수용, 회피) 선택과 모니터링 |

> **GOVERN이 중심이다.** 나머지 세 기능을 떠받치는 교차 기능으로, 거버넌스 없이는 MAP, MEASURE, MANAGE가 일회성에 그친다.

## Trustworthy AI 7대 특성

AI RMF는 신뢰할 수 있는 AI의 특성 7가지를 기준으로 위험을 본다.

| # | 특성 |
|---|---|
| 1 | 유효성과 신뢰성 |
| 2 | 안전성 |
| 3 | 보안과 복원력 |
| 4 | 책임성과 투명성 |
| 5 | 설명 가능성과 해석 가능성 |
| 6 | 프라이버시 강화 |
| 7 | 공정성과 유해 편향 관리 |

## 유사 표준과의 관계

| 표준 | 답하는 질문 | 성격 |
|---|---|---|
| NIST AI RMF | AI 위험을 어떻게 거버넌스하나 | 자발적 가이드 |
| ISO/IEC 42001 | AI 경영시스템을 어떻게 인증받나 | 인증 표준(감사 가능) |
| EU AI Act | 법적으로 무엇을 지켜야 하나 | 규제 |
| [OWASP LLM Top 10](/framework/owasp-llm-top-10/) | LLM 앱의 기술 위험은 무엇인가 | 위험 목록 |

## 한국 적용 시 고려할 점

**규제와의 관계.** NIST AI RMF는 자발적 가이드라 한국의 법적 의무와는 별개다. 국내 AI 신뢰성 정책과 AI 기본법 흐름에 매핑해 참고한다.

**개인정보보호법.** Trustworthy AI의 프라이버시 강화와 보안 특성은 개인정보보호법, 정보보호 체계와 직접 연결된다.

## 본 사이트는 이 표준을 어떻게 사용하나

- [AI 거버넌스와 TRiSM](/ai/ai-governance/)의 거버넌스 계층 기준
- 생성형 AI 위험을 [OWASP LLM Top 10](/framework/owasp-llm-top-10/)의 기술 위험과 연결하는 상위 프레임

## 출처

- [NIST AI RMF 공식 허브](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST AI 100-1 (AI RMF 1.0) PDF](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf)
- [NIST AI RMF Playbook](https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook)

---
최초 발행 2026-05-31, 최종 검토 2026-05-31, 다음 검토 2026-08-31
