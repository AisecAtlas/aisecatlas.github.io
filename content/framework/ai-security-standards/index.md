---
title: "AI 보안 표준 지형"
description: "OWASP, MITRE ATLAS, NIST, ISO, EU AI Act, KISA 가이드라인을 한 장으로."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "표준", "OWASP", "MITRE ATLAS", "NIST AI RMF"]
categories: ["framework"]
ShowToc: true
---

## 한 줄 요약

AI 보안 표준은 하나가 아니라 층위가 다른 여러 문서의 묶음입니다. 위협을 분류하는 것, 위험을 관리하는 것, 인증하는 것, 법으로 강제하는 것이 따로 있습니다.

## 표준이 여러 개인 이유

각 표준은 다른 질문에 답합니다. 위협 분류 표준은 "무엇을 막아야 하나"를, 위험 관리 프레임워크는 "어떻게 관리하나"를, 인증은 "증명할 수 있나"를, 법은 "지키지 않으면 어떻게 되나"를 답합니다. 대부분의 조직은 이들을 동시에 적용받습니다.

## 표준 종합

| 표준 | 발행 | 성격 | 본 사이트 연결 |
|---|---|---|---|
| OWASP LLM Top 10 | OWASP | 위협 분류 | [LLM 게이트웨이](/ai/llm-gateway/), [모델 공급망](/ai/model-supply-chain/) |
| OWASP Agentic Top 10 | OWASP | 위협 분류 | [Agentic 보안](/ai/agentic-security/) |
| OWASP MCP Top 10 | OWASP | 위협 분류 | [Agentic 보안](/ai/agentic-security/) |
| MITRE ATLAS | MITRE | 적대 TTP 지식베이스 | [AI 레드티밍](/ai/ai-red-teaming/) |
| NIST AI RMF | NIST(미국) | 위험 관리 방법론 | [AI 거버넌스](/ai/ai-governance/) |
| ISO/IEC 42001 | ISO | 인증 관리 체계 | [AI 거버넌스](/ai/ai-governance/) |
| EU AI Act | EU | 법, 벌칙 | [AI 거버넌스](/ai/ai-governance/) |
| 한국형 제로트러스트 가이드라인 2.0 | 과기정통부, KISA | 국내 지침 | [망분리와 N²SF](/korea/regulation/n2sf-mangbunri/) |

## 층위별 정리

### 위협 분류

OWASP는 세 가지 Top 10을 운영합니다. 단일 호출 LLM은 **LLM Top 10**, 자율 에이전트는 **Agentic Top 10**, 에이전트의 도구 연결 통로는 **MCP Top 10**입니다. MITRE ATLAS는 MITRE ATT&CK을 AI로 확장한 적대 기법 지식베이스로, 콘텐츠 버전 2026.05 기준 **16개 전술과 상위 기법 101개(하위 69개)** 를 담습니다([MITRE ATLAS](/framework/mitre-atlas/)).

### 위험 관리

**NIST AI RMF**는 미국의 자발적 위험 관리 방법론입니다. 규제 기관이 참조하지만 직접 강제하지는 않습니다([EC-Council 비교](https://www.eccouncil.org/cybersecurity-exchange/responsible-ai-governance/eu-ai-act-nist-ai-rmf-and-iso-iec-42001-a-plain-english-comparison/)).

### 인증

**ISO/IEC 42001**은 감사 가능한 AI 관리 체계 표준입니다. 인증을 잃으면 계약을 잃을 수 있지만 법적 벌칙은 없습니다([Cloud Security Alliance](https://cloudsecurityalliance.org/blog/2025/01/29/how-can-iso-iec-42001-nist-ai-rmf-help-comply-with-the-eu-ai-act)).

### 법적 구속

**EU AI Act**는 법적 구속력과 벌칙이 있습니다. 2025년 2월 금지 시스템 사용 금지, 2025년 8월 범용 AI 의무가 시행됐고, 고위험 시스템 요구사항이 뒤따릅니다([Cloud Security Alliance](https://cloudsecurityalliance.org/blog/2025/01/29/how-can-iso-iec-42001-nist-ai-rmf-help-comply-with-the-eu-ai-act)).

### 한국 (국내 지침)

과기정통부와 KISA는 2024년 12월 3일 **제로트러스트 가이드라인 2.0**을 발표했습니다. 성숙도 모델을 3단계에서 **4단계**로 확대하고, 기업망 핵심 기능을 20개에서 **27개**로, 세부 보안 역량을 **52개**로 정비했습니다([데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=161767), [KISA 가이드라인](https://www.kisa.or.kr/2060204/form?postSeq=18&page=1)). 이 4단계 성숙도는 CISA ZTMM과 같은 구조입니다.

## 표준 조합

세 가지를 함께 쓰는 것이 일반적입니다. NIST AI RMF로 위험 관리 방법을 잡고, ISO 42001로 감사 가능한 체계를 만들고, EU AI Act로 법적 요구를 충족합니다([Cloud Security Alliance](https://cloudsecurityalliance.org/blog/2025/01/29/how-can-iso-iec-42001-nist-ai-rmf-help-comply-with-the-eu-ai-act)). 여기에 OWASP와 MITRE ATLAS로 구체적 위협을 매핑합니다.

## 규제 적용

**국내외 동시 적용.** EU 사업이 있는 한국 기업은 EU AI Act와 국내 개인정보보호법, 한국형 제로트러스트 가이드라인을 함께 봅니다.

**가이드라인은 자발.** 한국형 제로트러스트 가이드라인은 강제가 아닌 지침입니다. 다만 공공의 [N²SF](/korea/regulation/n2sf-mangbunri/)와 금융의 [전자금융감독규정](/korea/regulation/financial-mangbunri/)은 별도의 구속력을 갖습니다.

## 본 사이트의 사용 방식

- OWASP와 MITRE ATLAS는 [AI를 지키는 일](/ai/defend-ai/)과 하위 솔루션 페이지의 위협 모델 근거로 사용합니다.
- NIST AI RMF, ISO 42001, EU AI Act는 [AI 거버넌스](/ai/ai-governance/)의 컴플라이언스 축으로 사용합니다.
- 한국형 가이드라인은 [한국 규제 노트](/korea/regulation/)와 연결합니다.

## 출처

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [MITRE ATLAS 해체 (본 사이트, atlas-data 2026.05 직접 파싱)](/framework/mitre-atlas/)
- [EC-Council — EU AI Act, NIST AI RMF, ISO 42001 비교](https://www.eccouncil.org/cybersecurity-exchange/responsible-ai-governance/eu-ai-act-nist-ai-rmf-and-iso-iec-42001-a-plain-english-comparison/)
- [Cloud Security Alliance — ISO 42001과 NIST AI RMF로 EU AI Act 대응](https://cloudsecurityalliance.org/blog/2025/01/29/how-can-iso-iec-42001-nist-ai-rmf-help-comply-with-the-eu-ai-act)
- [데일리시큐 — 제로트러스트 가이드라인 2.0](https://www.dailysecu.com/news/articleView.html?idxno=161767)
- [KISA 제로트러스트 가이드라인 2.0 원문](https://www.kisa.or.kr/2060204/form?postSeq=18&page=1)

## 면책

이 페이지는 여러 원문을 한국어로 요약한 것입니다. 표준은 개정되며 일정은 바뀔 수 있습니다. 권위 있는 해석이 필요하면 각 표준의 원문을 확인합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
