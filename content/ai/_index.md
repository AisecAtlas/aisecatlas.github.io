---
title: "AI 동향"
description: "AI를 지키는 일과 AI로 보안을 강화하는 일. 2026년 시장 동향과 핵심 표준."
ShowToc: false
---

> **두 축으로 분리해 봅니다.** 보안 조직이 AI 시대에 동시에 다뤄야 하는 주제가 두 개입니다. 각 축은 별도의 시장과 별도의 표준을 가집니다.

<div class="card-grid">

<a href="defend-ai/" class="card">
<div class="card-title">AI를 지키는 일</div>
<div class="card-desc">LLM 애플리케이션과 AI 에이전트를 공격으로부터 보호한다. OWASP LLM Top 10과 Agentic Top 10이 기준.</div>
<div class="card-cta">방어 동향 보기</div>
</a>

<a href="augment-security/" class="card">
<div class="card-title">AI로 보안 강화</div>
<div class="card-desc">Security Copilot, Agentic SOC로 SOC 운영과 위협 헌팅을 가속한다. 27초 침투 시대의 답.</div>
<div class="card-cta">활용 동향 보기</div>
</a>

</div>

## 왜 지금이 분기점인가

2025년에서 2026년 사이에 세 가지 변화가 겹쳤습니다.

**공격이 빨라졌습니다.** CrowdStrike 2025 Global Threat Report에 따르면 eCrime 침투 시간이 **최단 27초**까지 줄었습니다. AI 활용 공격은 전년 대비 **89% 증가**했습니다.

**표준이 분리됐습니다.** OWASP는 2025년에 LLM Top 10 v2.0을 정비한 뒤, 2026년에는 자율 행동을 하는 **에이전트 시스템 전용 Top 10**을 별도로 발표했습니다. 단일 호출 LLM과 다단계 추론 에이전트는 서로 다른 위협 모델을 가지기 때문입니다.

**상용 도구가 보강됐습니다.** CrowdStrike는 RSA 2026에서 **Charlotte AI AgentWorks** 생태계를 공개했고, Microsoft Security Copilot은 **70개 이상**의 파트너 에이전트가 등록된 Security Store를 운영합니다. Torq는 2026년 초 **Series D $140M**을 유치해 평가액 $1.2B에 도달했습니다.

## 두 축의 빠른 비교

| 항목 | AI를 지키는 일 | AI로 보안 강화 |
|---|---|---|
| 보호 대상 | LLM 앱, RAG, 에이전트 | SOC 운영, 분석가 |
| 주요 위협 | Prompt Injection, Tool Misuse | (보호 대상이 아니라 보조 도구) |
| 표준 | OWASP LLM/Agentic Top 10 | NIST CSF, 자체 가드레일 |
| 대표 솔루션 | Lakera, Prompt Security, Protect AI | Charlotte AI, Security Copilot, Torq |
| 의사결정 시점 | LLM/에이전트 도입 직전 | SOC 확장이나 인력 부족 시점 |

## 한국 시장 관점

해외 표준과 솔루션이 한국에 적용될 때 함께 봐야 할 변수들입니다.

**개인정보 처리.** Prompt에 PII가 섞이는 흐름은 개인정보보호법 위반 소지가 있습니다. 입출력 마스킹과 토큰화가 필수입니다.

**클라우드 LLM 사용.** 금감원의 클라우드 보안성 심의는 LLM API 호출 흐름도 검토 대상이 될 수 있습니다. 데이터 리전과 학습 사용 동의를 확인해야 합니다.

**망분리 환경.** 외부 LLM API를 직접 호출할 수 없는 조직은 사내 LLM과 자체 가드레일을 구성해야 합니다.

자세한 내용은 [표준과 규제](/framework/)에서 다룹니다.

## 출처

- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [CrowdStrike Charlotte AI AgentWorks (RSA 2026)](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)
- [Microsoft Security Copilot Blog](https://techcommunity.microsoft.com/blog/securitycopilotblog/from-alert-overload-to-decisive-action-how-security-copilot-agents-are-transform/4504213)
- [Torq Agentic AI and Hyperautomation in the SOC](https://torq.io/blog/agentic-ai-hyperautomation-soc/)

---
최초 발행 2026-05-30, 최종 검토 2026-05-30
