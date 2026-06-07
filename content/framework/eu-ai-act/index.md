---
title: "EU AI Act"
description: "AI를 위험에 따라 4등급으로 나눠 의무를 차등 부과하는 세계 첫 포괄 AI 법. 4등급과 시행 일정을 한국어로 푼다."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["EU AI Act", "AI 규제", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [EU AI Act (artificialintelligenceact.eu)](https://artificialintelligenceact.eu/high-level-summary/), [EU 집행위 규제 프레임워크](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
>
> 한국어 풀이입니다. 일정과 벌칙은 정식 법문이 기준입니다. 권위 있는 해석이 필요하면 EUR-Lex 원문을 봅니다.

AI 시스템을 위험에 따라 네 등급으로 나눠 의무를 차등 부과하는 세계 첫 포괄 AI 법입니다. 대상은 특정 기술이 아니라 **EU 시장에 AI를 제공하거나 배포하는 행위**입니다. 위험이 클수록 의무가 무겁고, 최소 위험에는 규제가 없습니다. 2025년 금지 조항부터 단계적으로 시행됩니다([EU 집행위](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)).

## 적용 대상

대상은 **EU 안에서 AI 시스템을 시장에 내놓거나 쓰는 제공자와 배포자**입니다. EU에 본사가 없어도 EU 시장에 AI를 제공하면 적용됩니다.

- 포함: AI 시스템 제공자(provider), 배포자(deployer), 수입자, 유통자, 범용 AI(GPAI) 모델 제공자
- 제외: 최소 위험 AI(자율 규제), 순수 군사와 국가안보 목적, 출시 전 연구개발

## 위험 4등급

분류 축은 시스템이 사람과 사회에 주는 **위험의 크기**입니다. 등급마다 의무가 다릅니다.

| 등급 | 영문 | 무엇인가 | 의무 |
|---|---|---|---|
| 허용 불가 | unacceptable | 사회적 점수화, 잠재의식 조작 등 금지 관행 | 제5조로 전면 금지 |
| 고위험 | high | 채용, 신용, 의료, 핵심 인프라 등 부속서 영역 | 위험관리, 데이터 거버넌스, 문서화, 인적 감독, 적합성 평가 |
| 제한적 | limited | 챗봇, 딥페이크 등 사람과 상호작용 | 투명성 의무(AI임을 고지, 생성물 표시) |
| 최소 | minimal | 스팸 필터, 게임 등 대다수 AI | 규제 없음(자율) |

## 항목별 풀이

**허용 불가 위험.** 제5조가 정한 금지 관행입니다. 정부의 사회적 점수화, 잠재의식을 이용한 조작, 취약점을 악용하는 시스템 등이 해당합니다. 2025년 2월 2일 발효했습니다. AI 리터러시 의무(제4조)도 같은 날 시작했습니다([EU 집행위](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)).

**고위험.** 부속서가 지정한 영역(채용, 신용 평가, 의료기기, 핵심 인프라 등)에 쓰이는 AI입니다. 위험관리 체계, 데이터 품질, 기술 문서, 로그 기록, 인적 감독, 적합성 평가 의무가 부과됩니다. 부담이 가장 큰 등급입니다.

**제한적 위험.** 사람과 상호작용하는 챗봇이나 딥페이크 생성물이 해당합니다. 의무는 투명성입니다. 이용자에게 AI와 상호작용 중임을 알리고, 생성물에 AI 생성임을 표시해야 합니다.

**최소 위험.** 스팸 필터, 추천, 게임처럼 대다수 AI가 여기 속합니다. 법적 의무는 없고 자율 행동강령을 권장합니다.

## GPAI 모델 의무

범용 AI(GPAI) 모델 제공자는 별도 의무를 받습니다. 기술 문서와 사용 설명을 갖추고, 저작권을 준수하며, 학습 데이터 요약을 공개해야 합니다. **시스템 위험**으로 분류된 GPAI는 모델 평가, 적대적 테스트, 중대 사고 보고, 사이버보안을 추가로 요구받습니다([artificialintelligenceact.eu](https://artificialintelligenceact.eu/high-level-summary/)). 시스템 위험을 가르는 연산량 임계값 등 세부는 원문을 참고합니다.

## 시행 일정

원 일정과, 2026년 5월 잠정 합의된 연기안이 함께 있습니다.

| 시점 | 적용 대상 (원 일정) |
|---|---|
| 2025-02-02 | 금지 관행(제5조), AI 리터러시(제4조) |
| 2025-08-02 | 거버넌스 규칙, GPAI 모델 의무 |
| 2026-08-02 | 고위험 AI 시스템(원 기한) |
| 2027-08-02 | 전면 적용(규제 제품 내장 AI 포함) |

2026년 5월 7일 EU가 Digital Omnibus에 **잠정 정치 합의**해 고위험 의무 시점을 연기하고 제5조에 신규 금지를 더하는 방향을 논의했습니다. 부속서 III 독립형 고위험 의무는 2027년 12월 2일로, 부속서 I 규제 제품 내장 고위험 의무는 2028년 8월 2일로 미뤄지고, AI 생성 비동의 이미지와 아동 성착취물 금지가 2026년 12월 2일 준수로 추가되는 안입니다([Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/), [White & Case](https://www.whitecase.com/insight-alert/eu-agrees-digital-omnibus-deal-simplify-ai-rules)). 이 연기안은 EU 관보(OJ) 게재와 정식 채택 전까지 법적 효력이 없습니다. 확정 일정은 EUR-Lex 정식본으로 확인합니다.

## 벌칙과 한국 비교

금지 관행 위반은 최대 **3,500만 유로** 또는 전 세계 매출의 **7%** 중 큰 금액이 부과됩니다([EU 집행위](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)).

[한국 AI 기본법](/korea/regulation/ai-basic-act/)과 직접 비교됩니다. 한국의 고영향 AI가 EU의 고위험에 대응하고, 양쪽 모두 투명성과 생성물 표시 의무를 둡니다. 한국은 진흥과 규제를 섞은 반면 EU는 규제 중심입니다. EU 시장에 AI를 제공하는 한국 기업은 두 법을 동시에 충족해야 합니다.

## 관련 페이지

- [AI 거버넌스와 TRiSM](/ai/ai-governance/) — EU AI Act 의무를 운영으로 옮기는 도구
- [NIST AI RMF](/framework/nist-ai-rmf/) — 자율 위험관리 방법론과의 대비
- [AI 보안 표준 지형](/framework/ai-security-standards/) — 규제와 표준 전체 지형

## 출처

- [EU 집행위 — AI 규제 프레임워크](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- [EU AI Act 고수준 요약](https://artificialintelligenceact.eu/high-level-summary/)
- [Gibson Dunn — Omnibus 고위험 기한 연기](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)

---
최초 발행 2026-06-07, 최종 검토 2026-06-07, 다음 검토 2026-09-07
