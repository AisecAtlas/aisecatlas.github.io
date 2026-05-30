---
title: "자동화 (with AI)"
description: "SOAR에서 Agentic SOC로. AI가 보안 자동화를 어떻게 다시 설계하나."
ShowToc: true
---

본 섹션은 보안 운영의 **자동화 도구**를 다룹니다. 전통 SOAR부터 Hyperautomation, Agentic SOC까지 진화 단계를 추적하고 주요 솔루션을 비교합니다.

| 하위 페이지 | 다루는 것 |
|---|---|
| [SOAR와 Hyperautomation 진화](soar-evolution/) | 진화 단계, 차이의 본질, 어디서 한계가 오는가 |
| [Security Copilots 비교](security-copilots/) | Microsoft Security Copilot vs Charlotte AI vs Torq vs Tines |

## 왜 자동화가 다시 화두인가

자동화 자체는 10년 가까운 역사가 있습니다. 다시 화두가 된 이유는 세 가지입니다.

**위협 속도가 자동화 속도를 추월했습니다.** 침투 시간이 분 단위로 줄어드는데 분석가 1명의 수동 대응 속도는 그대로입니다.

**SOAR의 한계가 드러났습니다.** 하드코딩된 playbook은 **매 새 위협마다 엔지니어 손이 필요**합니다. 변화에 대응하지 못합니다.

**LLM 기반 추론**이 가용해졌습니다. 단순 반복뿐 아니라 **다단계 조사와 가설 생성**까지 위임할 수 있게 됐습니다.

> **핵심**: SOAR가 손이 빠른 직원이라면, Agentic SOC는 **판단할 줄 아는 주니어 분석가**입니다. 가드레일 안에서 자율적으로 일합니다.

## 진화 단계

| 세대 | 대표 도구 | 핵심 특징 |
|---|---|---|
| 1세대 SOAR | Palo Alto XSOAR, Splunk SOAR | 하드코딩 playbook |
| Hyperautomation | Torq, Tines | AI 생성 no-code 워크플로 |
| Agentic SOC | Charlotte AI, Security Copilot, Torq | 자율 추론과 다단계 행동 |

자세한 차이는 [SOAR와 Hyperautomation 진화](soar-evolution/)를 참고하세요.

## 시장 동향 (2025-2026)

**Torq Series D $140M.** 2026년 초 평가액 $1.2B 도달. KuppingerCole **AI SOC 부문 Leader 등재**.

**Charlotte AgentWorks.** CrowdStrike가 RSA 2026에서 발표. 파트너에 Anthropic, OpenAI, AWS 포함.

**Microsoft Security Store.** 70개 이상의 파트너 에이전트 등록. Security Copilot이 단일 도구에서 생태계로 확장.

**Tines Smart Mode.** AI Action Creator로 자연어 워크플로 생성. 익명화된 수백만 실행 데이터 기반.

## 어떤 도구를 선택할까

선택 기준 요약입니다. 자세한 비교는 [Security Copilots 비교](security-copilots/)에서 다룹니다.

| 상황 | 권장 도구 |
|---|---|
| Microsoft 365 중심 SOC | Microsoft Security Copilot |
| CrowdStrike Falcon 중심 SOC | Charlotte AI |
| 멀티 벤더 + 워크플로 유연성 | Torq 또는 Tines |
| 컴플라이언스와 감사 추적 강조 | Torq |
| 빠른 PoC와 학습 곡선 | Tines |

## 자동화 도입 시 주의할 점

기술 도입 자체보다 **거버넌스 설계**가 더 어렵습니다. 다음 다섯 가지를 미리 답하지 못하면 도입 후 문제가 됩니다.

1. **어떤 행동을 자율로 허용하나** (격리는 OK, 자격 무효화는 승인 등)
2. **가드레일을 어떻게 정의하나** (정책 코드, OPA, 자체 평가)
3. **감사 추적을 어디에 남기나** (SIEM, 별도 감사 로그)
4. **실패 시 누가 책임지나** (자동 행동의 책임 소재)
5. **인간이 개입할 명확한 시점은 언제인가** (escalation 기준)

## 한국 시장 노트

**금융권.** 자율 대응은 금감원 보안성 심의에서 면밀히 검토됩니다. **감사 추적과 인간 승인 흐름**을 처음부터 명확히 설계해야 합니다.

**공공 부문.** CSAP 인증과 망분리가 적용 범위를 좁힙니다. 사내 호스팅 SOAR(예: XSOAR 온프레미스)와 자체 가드레일 조합이 현실적입니다.

**대기업 SOC.** 멀티 클라우드와 멀티 벤더 환경이 일반적입니다. 단일 벤더 종속을 피하기 위해 Torq나 Tines의 중립 SOAR를 선호하는 경향이 있습니다.

## 출처

- [Torq Agentic AI and Hyperautomation in the SOC](https://torq.io/blog/agentic-ai-hyperautomation-soc/)
- [Torq SOAR vs AI SOC 비교](https://torq.io/blog/soar-vs-ai-soc/)
- [Dark Reading: Torq Moves SOCs Beyond SOAR](https://www.darkreading.com/remote-workforce/torq-moves-socs-soar-ai-powered-hyper-automation)
- [Microsoft Security Copilot Blog](https://techcommunity.microsoft.com/blog/securitycopilotblog/from-alert-overload-to-decisive-action-how-security-copilot-agents-are-transform/4504213)
- [CrowdStrike Charlotte AI AgentWorks](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)

---
최초 발행 2026-05-30, 최종 검토 2026-05-30
