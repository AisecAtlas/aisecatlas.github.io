---
title: "OWASP Top 10 for Agentic Applications 2026"
description: "자율 AI 에이전트가 받는 10가지 위험. ASI01~ASI10을 영문 원제와 함께 빠짐없이 한국어로 푼다."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["OWASP", "Agentic AI", "AI 에이전트 보안", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [OWASP Top 10 for Agentic Applications for 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
>
> 한국어 풀이입니다. 번역이 의미를 비트는 항목은 그 자리에서 짚지만, 권위 있는 해석이 필요하면 원문을 봅니다.

계획과 행동과 결정을 스스로 하는 자율 AI 에이전트가 실제로 받는 위험을 10가지로 추린 목록입니다. 대상은 단일 LLM 호출이 아니라 **도구를 부르고 다른 에이전트와 협업하며 자율로 행동하는 시스템**입니다. [OWASP Top 10 for LLM Applications](/framework/owasp-llm-top-10/)가 다루지 못한 에이전트 고유 위협, 곧 목표 탈취와 도구 오용과 에이전트 간 통신을 다룹니다. 2025년 12월 9일 100명 이상의 전문가가 동료 검토해 발행했습니다([OWASP](https://genai.owasp.org/2025/12/09/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security/)).

## 적용 대상

대상은 **자율 에이전트를 통합한 애플리케이션**입니다. 모델 한 번을 호출하고 끝나는 앱이 아니라, 목표를 받아 스스로 계획을 세우고 도구를 호출하며 메모리를 유지하고 다른 에이전트와 통신하는 시스템입니다.

- 포함: 에이전트의 목표와 계획, 도구와 함수 호출, 에이전트 신원과 권한, 메모리와 컨텍스트, 에이전트 간 통신, MCP 같은 연결 표준
- 제외: 단일 LLM 앱의 입출력 위험(그쪽은 [LLM Top 10](/framework/owasp-llm-top-10/)), 조직의 AI 경영시스템(ISO 42001, NIST AI RMF)

## 분류 기준

100명 이상의 전문가가 자율 에이전트의 **고유 공격면**을 기준으로 10가지를 골랐습니다. 코드 체계는 ASI(Agentic Security)01~ASI10입니다([OWASP Agentic Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/)). 분류 축은 에이전트가 무엇을 통해 어디서 공격받는가입니다. 목표와 행동(ASI01, ASI02, ASI05, ASI10), 신원과 권한(ASI03), 공급망(ASI04), 메모리(ASI06), 에이전트 간 통신과 협업(ASI07, ASI08), 사람과의 신뢰(ASI09)로 나뉩니다.

## 전체 구성

10개 항목 전부입니다. 영문 원제를 함께 둔 이유는 한국어 번역만으로는 의미가 좁아지기 때문입니다.

| 코드 | 항목 (영문 원제) | 무엇을 노리나 | 대표 사례 |
|---|---|---|---|
| ASI01 | 에이전트 목표 탈취 (Agent Goal Hijack) | 에이전트의 목표를 탈취하거나 왜곡 | EchoLeak |
| ASI02 | 도구 오용 (Tool Misuse) | 에이전트가 연결된 도구를 오용 | Amazon Q |
| ASI03 | 신원과 권한 남용 (Identity & Privilege Abuse) | 에이전트 신원과 권한을 남용 | — |
| ASI04 | 에이전트 공급망 취약점 (Agentic Supply Chain Vulnerabilities) | 도구와 MCP 등 에이전트 공급망 침해 | GitHub MCP exploit |
| ASI05 | 의도치 않은 코드 실행 (Unexpected Code Execution) | 에이전트가 의도치 않은 코드를 실행 | AutoGPT RCE |
| ASI06 | 메모리와 컨텍스트 오염 (Memory & Context Poisoning) | 에이전트의 메모리와 컨텍스트를 오염 | Gemini Memory Attack |
| ASI07 | 안전하지 않은 에이전트 간 통신 (Insecure Inter-Agent Communication) | 에이전트 사이 통신을 가로채거나 변조 | — |
| ASI08 | 연쇄 실패 (Cascading Failures) | 한 에이전트의 실패가 연쇄로 전파 | — |
| ASI09 | 사람과 에이전트의 신뢰 악용 (Human-Agent Trust Exploitation) | 사람이 에이전트를 과신하는 점을 악용 | — |
| ASI10 | 이탈 에이전트 (Rogue Agents) | 통제를 벗어난 악성 또는 이탈 에이전트 | Replit meltdown |

## 항목별 풀이

**ASI01 에이전트 목표 탈취.** 공격자가 입력이나 외부 데이터로 에이전트의 목표 자체를 바꿔 다른 행동을 하게 만듭니다. 단일 응답을 조작하는 프롬프트 인젝션을 넘어, 에이전트가 자율로 수행할 작업의 방향을 통째로 빼앗는 것이 핵심입니다.

**ASI02 도구 오용.** 에이전트가 연결된 도구나 API를 공격자의 의도대로 호출합니다. 정상 권한 안의 도구라도 호출 순서와 인자를 조작하면 데이터 유출이나 부정 작업으로 이어집니다.

**ASI03 신원과 권한 남용.** 에이전트가 위임받은 신원과 권한을 넘어선 작업을 수행합니다. 사람을 대신해 행동하는 에이전트의 권한 범위와 위임 경계가 모호하면, 한 에이전트 탈취가 곧 그 권한 전체의 탈취가 됩니다. 기계와 에이전트 신원 통제는 [Identity 영역](/pillars/identity/)에서 다룹니다.

**ASI04 에이전트 공급망 취약점.** 에이전트가 쓰는 도구, 플러그인, MCP 서버, 외부 에이전트가 침해됐을 때 그 위험이 에이전트로 들어옵니다. 연결 표준이 늘수록 신뢰해야 할 외부 구성요소가 늘어납니다. AI 모델과 도구 공급망은 [모델 공급망 보안](/ai/model-supply-chain/)에서 다룹니다.

**ASI05 의도치 않은 코드 실행.** 에이전트가 코드 실행 도구를 갖추면, 조작된 입력이 의도치 않은 코드 실행으로 이어집니다. 샌드박스와 실행 권한 제한이 핵심입니다.

**ASI06 메모리와 컨텍스트 오염.** 에이전트가 유지하는 장기 메모리나 컨텍스트에 거짓 정보를 심어, 이후 판단을 지속해서 왜곡합니다. 한 번의 오염이 여러 세션에 걸쳐 영향을 주는 점이 단발 공격과 다릅니다.

**ASI07 안전하지 않은 에이전트 간 통신.** 여러 에이전트가 협업할 때 그 사이 통신을 가로채거나 변조합니다. 통신 인증과 무결성이 없으면 한 에이전트가 다른 에이전트를 속일 수 있습니다.

**ASI08 연쇄 실패.** 한 에이전트의 오류나 악성 출력이 그것을 신뢰하는 다른 에이전트로 전파되어 시스템 전체로 번집니다. 다중 에이전트 구조에서 실패 격리가 없을 때 커집니다.

**ASI09 사람과 에이전트의 신뢰 악용.** 사람이 에이전트의 출력을 과신하거나 에이전트의 승인 요청을 무비판적으로 수락하는 점을 노립니다. 자동화에 대한 신뢰가 곧 공격면이 됩니다.

**ASI10 이탈 에이전트.** 통제를 벗어나 악의적으로 행동하거나, 침해되어 공격자의 도구가 된 에이전트입니다. 자율성이 높을수록 탐지와 차단이 어렵습니다.

## 함께 발행된 산출물

OWASP GenAI Security Project는 Top 10과 함께 에이전트 보안 자료를 묶어 냈습니다.

- Securing Agentic Applications Guide 1.0 (2025-07-27)
- Agentic AI Threats and Mitigations
- State of Agentic AI Security and Governance 2.0 (2026-06-01)
- AIUC-1 등 다른 프레임워크와의 크로스워크([OWASP](https://genai.owasp.org/resource/aiuc-1-crosswalks-owasp-top-10-for-agentic-applications/))

각 항목의 완화책 세부는 원문 가이드를 참고합니다.

## 다른 표준과 우리 사이트에서

- [LLM Top 10](/framework/owasp-llm-top-10/)과의 관계: LLM Top 10은 단일 LLM 앱의 입출력 위험을, Agentic Top 10은 자율 에이전트 고유 위험을 다룹니다. 두 목록은 보완 관계입니다.
- [MITRE ATLAS](/framework/mitre-atlas/)와의 관계: ATLAS가 공격 전술과 기법의 지식 베이스라면, Agentic Top 10은 에이전트가 받는 위험의 분류입니다.
- 구현과 방어는 [Agentic AI 보안과 MCP](/ai/agentic-security/)에서, 표준 묶음 색인은 [AI 보안 표준](/framework/ai-security-standards/)에서 다룹니다.

## 관련 페이지

- [OWASP LLM Top 10](/framework/owasp-llm-top-10/) — 단일 LLM 앱이 받는 10가지 위험
- [Agentic AI 보안과 MCP](/ai/agentic-security/) — 에이전트 위험의 구현과 방어
- [Identity 영역](/pillars/identity/) — ASI03 에이전트 신원과 권한
- [모델 공급망 보안](/ai/model-supply-chain/) — ASI04 공급망 위험

## 출처

- [OWASP Top 10 for Agentic Applications for 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OWASP GenAI Security Project 발표 (2025-12-09)](https://genai.owasp.org/2025/12/09/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security/)
- [OWASP Agentic Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/)

---
최초 발행 2026-06-07, 최종 검토 2026-06-07, 다음 검토 2026-09-07
