---
title: "AI 동향"
description: "AI를 지키는 일과 AI로 보안을 강화하는 일. 두 방향의 시장 동향과 핵심 표준."
ShowToc: true
---

AI 시대에 보안 조직이 동시에 다뤄야 하는 두 가지 주제가 있습니다. 본 섹션은 두 축을 분리해 정리합니다.

| 축 | 무엇을 다루나 |
|---|---|
| [AI를 지키는 일](defend-ai/) | LLM 애플리케이션과 AI 에이전트를 공격으로부터 보호한다. OWASP LLM Top 10과 Agentic Top 10이 기준. |
| [AI로 보안 강화](augment-security/) | Security Copilot, Agentic SOC로 SOC 운영과 위협 헌팅을 가속한다. |

## 왜 지금이 분기점인가

2025년에서 2026년 사이에 세 가지 변화가 겹쳤습니다.

**공격이 빨라졌습니다.** CrowdStrike 2025 Global Threat Report는 eCrime 침투 시간(breakout time)이 **최단 27초**까지 줄어든 사례를 보고합니다. AI 활용 공격은 전년 대비 **89% 증가**했다고 같은 보고서가 명시합니다.

**표준이 분리됐습니다.** OWASP는 2025년에 LLM Top 10 v2.0을 정비한 뒤, 2026년에는 자율 행동을 하는 **에이전트 시스템 전용 Top 10**을 별도로 발표했습니다. 단일 호출 LLM과 다단계 추론을 하는 에이전트는 서로 다른 위협 모델을 가지기 때문입니다.

**상용 도구가 보강됐습니다.** CrowdStrike는 RSA 2026에서 **Charlotte AI AgentWorks** 생태계를 공개했고, Microsoft Security Copilot은 70개 이상의 파트너 에이전트가 등록된 Security Store를 운영합니다. Torq는 2026년 초 **$140M Series D**를 유치해 평가액 $1.2B에 도달했습니다.

> **핵심**: AI를 지키는 일과 AI를 활용하는 일이 별개의 시장이지만, 도입을 검토하는 조직은 두 축을 함께 보아야 일관된 의사결정을 할 수 있습니다.

## 두 축의 빠른 비교

| 항목 | AI를 지키는 일 | AI로 보안 강화 |
|---|---|---|
| 보호 대상 | LLM 앱, RAG, 에이전트 | SOC 운영, 분석가 |
| 주요 위협 | Prompt Injection, Tool Misuse, 데이터 유출 | (보호 대상이 아니라 보조 도구) |
| 표준 | OWASP LLM Top 10, Agentic Top 10 | NIST CSF, 자체 가드레일 |
| 대표 솔루션 | Lakera, Prompt Security, Protect AI, Cisco AI Defense | Charlotte AI, Microsoft Security Copilot, Torq |
| 의사결정 시점 | LLM/에이전트 도입 직전 | SOC 확장이나 인력 부족 시점 |

## 본 사이트가 다루는 범위

본 섹션은 **시장 동향**과 **솔루션 카테고리** 중심입니다. 개별 솔루션 풀 리뷰는 [솔루션 가이드](/pillars/)의 해당 영역에 두며, 본 섹션에서 링크합니다.

- LLM 보안 솔루션 풀 리뷰 → [Applications & Workloads 영역](/pillars/applications/)
- Security Copilot 풀 리뷰 → [자동화 섹션](/automation/security-copilots/)

## 한국 시장 관점

해외 표준과 솔루션이 한국에 적용될 때 함께 봐야 할 변수들이 있습니다.

**개인정보 처리.** Prompt에 PII가 섞이는 흐름은 개인정보보호법 위반 소지가 있습니다. 입출력 마스킹과 토큰화가 필수입니다.

**클라우드 LLM 사용.** 금감원의 클라우드 보안성 심의는 LLM API 호출 흐름도 검토 대상이 될 수 있습니다. 데이터 리전과 학습 사용 동의를 확인해야 합니다.

**망분리 환경.** 외부 LLM API를 직접 호출할 수 없는 조직은 사내 LLM(예: 자체 호스팅)과 자체 가드레일을 구성해야 합니다.

자세한 내용은 [표준과 규제](/framework/)에서 다룹니다.

## 출처

- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [CrowdStrike Charlotte AI AgentWorks (RSA 2026)](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)
- [Microsoft Security Copilot Blog](https://techcommunity.microsoft.com/blog/securitycopilotblog/from-alert-overload-to-decisive-action-how-security-copilot-agents-are-transform/4504213)
- [Torq Agentic AI and Hyperautomation in the SOC](https://torq.io/blog/agentic-ai-hyperautomation-soc/)

---
최초 발행 2026-05-30, 최종 검토 2026-05-30
