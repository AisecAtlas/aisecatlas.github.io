---
title: "OWASP Top 10 for LLM Applications 2025"
description: "LLM 애플리케이션 보안 위험 10대 분류 (v2.0) 한국어 요약"
date: 2026-05-31
lastmod: 2026-05-31
tags: ["OWASP", "LLM 보안", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)
>
> 이 페이지는 원문을 한국어로 요약한 것입니다. 권위 있는 해석이 필요하면 원문을 봅니다.

## 한 줄 요약

OWASP GenAI Security Project가 정리한 **LLM 애플리케이션의 10대 보안 위험**입니다. 2025년 v2.0에서 RAG와 에이전트 확산을 반영해 항목을 개정했습니다.

## 어떤 문서인가

| 항목 | 내용 |
|---|---|
| 발표 기관 | OWASP GenAI Security Project |
| 발표 시점 | 2025 (v2.0), 최초 2023 (v1) |
| 대상 | LLM을 쓰는 애플리케이션의 설계, 개발, 운영 |
| 구조 | 위험 10개(LLM01~LLM10), 각 설명과 완화책 |

## 10대 위험

| ID | 위험 | 핵심 |
|---|---|---|
| LLM01 | Prompt Injection | 입력으로 모델 지시를 변조 |
| LLM02 | Sensitive Information Disclosure | 학습 데이터나 컨텍스트의 민감 정보 노출 |
| LLM03 | Supply Chain | 모델, 데이터셋, 플러그인 공급망 취약점 |
| LLM04 | Data and Model Poisoning | 학습, 미세조정 데이터와 모델 오염 |
| LLM05 | Improper Output Handling | 모델 출력을 검증 없이 신뢰해 2차 공격 유발 |
| LLM06 | Excessive Agency | 과도한 권한, 도구, 자율성 부여 |
| LLM07 | System Prompt Leakage | 시스템 프롬프트의 비밀이 유출 |
| LLM08 | Vector and Embedding Weaknesses | RAG의 벡터, 임베딩 주입과 오염 |
| LLM09 | Misinformation | 환각과 잘못된 정보의 과신 |
| LLM10 | Unbounded Consumption | 무제한 호출로 비용과 가용성 침해 |

## 2023에서 2025로 무엇이 바뀌었나

| 변화 | 내용 |
|---|---|
| 신규 | System Prompt Leakage, Vector and Embedding Weaknesses 추가. RAG, 임베딩이 핵심 관행이 되며 고유 위협이 부각([IronCore Labs](https://ironcorelabs.com/blog/2025/owasp-llm-top10-2025-update/)) |
| 범위 확장 | Training Data Poisoning → Data and Model Poisoning, Model Denial of Service → Unbounded Consumption, Overreliance → Misinformation([Lasso](https://www.lasso.security/blog/owasp-top-10-for-llm-applications-generative-ai-key-updates-for-2025)) |
| 통합 | Insecure Plugin Design은 Excessive Agency로 흡수, Model Theft는 Supply Chain 등으로 재배치 |

## 유사 표준과의 관계

| 표준 | 답하는 질문 | 본 사이트에서의 위치 |
|---|---|---|
| OWASP LLM Top 10 | 단일 호출, RAG 앱의 위험은 무엇인가 | 본 페이지 |
| OWASP Agentic Top 10 (2026) | 자율 에이전트의 위험은 무엇인가 | [Agentic AI 보안](/ai/agentic-security/) |
| MITRE ATLAS | AI 시스템 공격 전술과 기법은 무엇인가 | [AI 동향](/ai/) |
| NIST AI RMF | AI 위험을 어떻게 거버넌스하나 | 표준 요약 예정 |

## 규제 적용

**개인정보보호법.** LLM02(민감 정보 노출)와 LLM04(데이터 포이즈닝)는 PII 처리와 직결됩니다. 입출력 마스킹과 학습 데이터 출처 통제를 함께 봅니다.

**RAG 도입.** 사내 문서를 RAG로 붙이는 사례가 늘면서 LLM08(벡터, 임베딩 취약점)의 적용 범위가 커집니다.

**망분리.** 외부 LLM API를 직접 호출할 수 없는 환경은 사내 LLM과 자체 가드레일에서 같은 10대 위험을 점검합니다.

## 본 사이트는 이 표준을 어떻게 사용하나

- [AI를 지키는 일](/ai/defend-ai/)과 [LLM 게이트웨이 비교](/ai/llm-gateway/)의 위협 모델 기준
- 런타임 가드레일, AI 레드티밍 솔루션의 커버리지 매핑 축
- LLM 도입 보안 점검의 출발 체크리스트

## 출처

- [OWASP Top 10 for LLM Applications 2025 (genai.owasp.org)](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)
- [OWASP 프로젝트 페이지 (OWASP Foundation)](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Top 10 for LLMs 2025 공식 PDF](https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf)
- [2025 변화 분석 (IronCore Labs)](https://ironcorelabs.com/blog/2025/owasp-llm-top10-2025-update/)
- [2023에서 2025 변화 (Lasso Security)](https://www.lasso.security/blog/owasp-top-10-for-llm-applications-generative-ai-key-updates-for-2025)

---
최초 발행 2026-05-31, 최종 검토 2026-05-31, 다음 검토 2026-08-31
