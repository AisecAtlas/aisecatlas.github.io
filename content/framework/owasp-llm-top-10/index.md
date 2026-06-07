---
title: "OWASP Top 10 for LLM Applications 2025"
description: "LLM을 쓰는 애플리케이션이 받는 10가지 공격. v2.0(2025) 10개 항목을 영문 원제와 함께 빠짐없이 한국어로 푼다."
date: 2026-05-31
lastmod: 2026-06-07
tags: ["OWASP", "LLM 보안", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)
>
> 한국어 풀이입니다. 번역이 의미를 비트는 항목은 그 자리에서 짚지만, 권위 있는 해석이 필요하면 원문을 봅니다.

LLM을 쓰는 애플리케이션이 실제로 받는 공격을 10가지로 추린 목록입니다. 대상은 모델 연구가 아니라 **모델을 부르는 앱**입니다. 챗봇, RAG, 코파일럿, 에이전트를 만드는 개발자와 운영자가 무엇을 먼저 막아야 하는지 보여줍니다.

## 적용 대상

대상은 **LLM을 통합한 애플리케이션**입니다. 모델 자체의 학습 알고리즘이나 조직 거버넌스가 아니라, LLM을 호출해 동작하는 앱의 입력, 출력, 데이터, 권한, 자원입니다.

- 포함: 프롬프트와 응답 처리, RAG의 검색과 임베딩, 플러그인과 도구 호출, 시스템 프롬프트, 추론 비용
- 제외: 모델 가중치 자체의 학술적 견고성, 조직의 AI 경영시스템(그쪽은 ISO 42001, NIST AI RMF)

## 분류 기준

100명 이상의 전문가가 **실제 발생 빈도와 영향**을 근거로 10가지를 골랐습니다. 번호(LLM01~LLM10)는 식별자이고 엄격한 순위는 아니지만, LLM01 프롬프트 인젝션이 가장 흔하고 중대한 위협으로 꼽힙니다. 분류 축은 공격이 **어디를 노리는가**입니다. 입력(LLM01), 출력(LLM05), 데이터와 공급망(LLM03, LLM04, LLM08), 권한과 행동(LLM06), 노출(LLM02, LLM07), 신뢰성(LLM09), 자원(LLM10)으로 흩어집니다.

## 전체 구성

10개 항목 전부입니다. 영문 원제를 함께 둔 이유는 한국어 번역만으로는 의미가 좁아지기 때문입니다.

| 코드 | 항목 (영문 원제) | 무엇을 노리나 |
|---|---|---|
| LLM01 | 프롬프트 인젝션 (Prompt Injection) | 직접 또는 간접 입력으로 모델의 의도를 탈취 |
| LLM02 | 민감정보 노출 (Sensitive Information Disclosure) | 학습 데이터, 시스템 프롬프트, 사용자 데이터 누출 |
| LLM03 | 공급망 (Supply Chain) | 외부 모델, 데이터셋, 플러그인 의존성 침해 |
| LLM04 | 데이터와 모델 오염 (Data and Model Poisoning) | 학습, 파인튜닝, 임베딩 데이터를 오염해 백도어나 편향 주입 |
| LLM05 | 부적절한 출력 처리 (Improper Output Handling) | 검증 없이 전달된 LLM 출력이 후속 시스템을 공격 |
| LLM06 | 과도한 권한 (Excessive Agency) | 필요 이상의 기능, 권한, 자율성으로 의도치 않은 행동 |
| LLM07 | 시스템 프롬프트 유출 (System Prompt Leakage) | 시스템 프롬프트의 지시와 비밀이 사용자에게 노출 |
| LLM08 | 벡터와 임베딩 약점 (Vector and Embedding Weaknesses) | RAG의 검색과 임베딩 단계를 노린 누출과 오염 |
| LLM09 | 잘못된 정보 (Misinformation) | 환각 등으로 틀린 정보를 신뢰성 있게 생성하고 전파 |
| LLM10 | 무제한 소비 (Unbounded Consumption) | 무제한 추론 요청으로 비용과 자원을 고갈하거나 모델을 추출 |

## 항목별 풀이

**LLM01 프롬프트 인젝션.** 공격자가 입력으로 모델의 행동을 바꿔 시스템 프롬프트나 가드레일을 우회합니다. 사용자가 직접 넣는 직접(direct) 방식과, 모델이 읽는 웹페이지나 문서에 명령을 숨기는 간접(indirect) 방식이 있습니다. 간접이 에이전트 시대의 핵심 공격면입니다.

**LLM02 민감정보 노출.** 모델이 학습 데이터의 개인정보, 시스템 프롬프트, 다른 사용자의 입력을 응답으로 흘립니다.

**LLM03 공급망.** 외부에서 받은 모델, 데이터셋, 어댑터, 플러그인이 침해됐을 때 그 위험이 앱으로 들어옵니다. 모델 레지스트리와 오픈소스 모델의 출처가 약점입니다.

**LLM04 데이터와 모델 오염.** 학습이나 파인튜닝, 임베딩 단계에서 데이터를 오염해 백도어나 편향을 심습니다. 특정 트리거에만 반응하는 백도어가 대표적입니다.

**LLM05 부적절한 출력 처리.** LLM의 출력을 검증 없이 브라우저, 데이터베이스, 셸로 넘기면 XSS, SQL 인젝션, 원격 코드 실행으로 이어집니다. 모델을 신뢰 경계로 다뤄 출력을 항상 검증해야 합니다.

**LLM06 과도한 권한.** Excessive Agency는 "과도한 대리권"으로 옮기지만, 에이전트에게 필요 이상의 도구, 권한, 자율성을 준 상태를 뜻합니다. 사람의 대리가 아니라 시스템 권한 범위의 문제입니다. 최소 권한으로 도구와 행동을 제한해야 합니다.

**LLM07 시스템 프롬프트 유출.** 시스템 프롬프트에 담은 지시나 자격 정보가 사용자에게 드러납니다. 근본 대책은 누출을 막는 것이 아니라 시스템 프롬프트에 비밀을 두지 않는 것입니다.

**LLM08 벡터와 임베딩 약점.** RAG에서 외부 문서를 임베딩해 검색할 때, 임베딩 역전으로 원문을 복원하거나 악성 문서로 검색 결과를 오염합니다. 다중 테넌트 환경의 데이터 격리가 핵심입니다.

**LLM09 잘못된 정보.** Misinformation은 환각을 포함해 모델이 틀린 정보를 그럴듯하게 만들어 내고, 사용자가 그것을 과신할 때 피해가 됩니다. 출력 검증과 근거 제시로 줄입니다.

**LLM10 무제한 소비.** 추론 요청에 제한이 없으면 비용과 자원이 고갈됩니다(Denial of Wallet). 반복 질의로 모델 동작을 복제하는 모델 추출도 여기 포함됩니다.

## v1→v2 변경점

v2.0(2025)은 RAG와 에이전트 확산을 반영했습니다.

- 신규: LLM07 시스템 프롬프트 유출, LLM08 벡터와 임베딩 약점
- 확장: LLM10 무제한 소비 — 기존 Model Denial of Service를 비용 고갈과 모델 추출까지 넓힘
- 이름 변경: Insecure Output Handling → Improper Output Handling, Training Data Poisoning → Data and Model Poisoning, Overreliance → Misinformation
- 흡수: Insecure Plugin Design은 별도 항목에서 빠지고 공급망과 과도한 권한으로 나뉘어 들어감

## 다른 표준과 우리 사이트에서

- MITRE ATLAS와의 관계: ATLAS는 공격자의 전술과 기법을 담은 지식 베이스이고, LLM Top 10은 앱이 받는 위험의 분류입니다. LLM01은 ATLAS의 프롬프트 인젝션 기법에 대응합니다. [MITRE ATLAS](/framework/mitre-atlas/) 참고.
- 에이전트는 별도 목록인 OWASP Agentic Top 10이 다룹니다. [Agentic AI 보안과 MCP](/ai/agentic-security/) 참고.
- LLM Top 10은 [AI를 지키는 일](/ai/defend-ai/)과 [LLM 게이트웨이](/ai/llm-gateway/)의 솔루션이 각 항목을 어떻게 막는지의 기준입니다.

## 관련 페이지

- [MITRE ATLAS](/framework/mitre-atlas/) — 위험을 일으키는 공격 전술과 기법 매트릭스
- [Prompt Injection 방어](/ai/prompt-injection-defense/) — LLM01 방어 기법 비교
- [LLM 게이트웨이](/ai/llm-gateway/) — 입력과 출력을 통제하는 런타임 게이트
- [AI를 지키는 일](/ai/defend-ai/) — 항목별 방어 솔루션 정리

## 출처

- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)
- [OWASP GenAI Security Project](https://genai.owasp.org/llm-top-10/)

---
최초 발행 2026-05-31, 최종 확인 2026-06-07, 다음 검토 2026-09-07
