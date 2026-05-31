---
title: "Agentic AI 보안과 MCP"
description: "에이전트 신원, 도구 남용, MCP 위협을 통제하는 방어 관점."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "Agentic AI", "MCP", "Non-Human Identity", "OWASP"]
ShowToc: true
---

> **이 페이지의 결론**: AI 에이전트는 도구를 호출하고 다단계로 추론하기 때문에 단일 호출 LLM과 다른 방어가 필요합니다. 두 축이 핵심입니다. 첫째, 에이전트에 사람과 같은 수준의 신원과 최소 권한을 부여하는 것(Non-Human Identity). 둘째, 에이전트가 도구를 연결하는 통로인 MCP의 위협을 통제하는 것입니다. 위협 분류는 [AI를 지키는 일](/ai/defend-ai/)의 OWASP Agentic Top 10에서 다루고, 이 페이지는 대응을 다룹니다.

## 에이전트는 왜 다른가

에이전트는 추론, 메모리, 도구 호출, 다단계 실행이 결합됩니다. 프롬프트 단계 방어만으로는 막을 수 없는 공격면이 생깁니다. OWASP Agentic Top 10은 Tool Misuse, Delegated Trust, Persistent Memory 오염 같은 위협을 별도로 분류합니다. 위협 상세는 [defend-ai](/ai/defend-ai/)를 참고하세요.

## MCP 보안

**MCP(Model Context Protocol)**는 에이전트가 외부 도구와 데이터에 연결되는 표준 통로입니다. 그만큼 새로운 공격면이 됩니다. 전통적 경계 보안은 MCP 공격을 막지 못합니다. 공격이 자연어의 의미 수준에서 일어나기 때문입니다([SentinelOne MCP Security](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)).

### Tool Poisoning

가장 빈번하고 영향이 큰 클라이언트 측 취약점입니다. 도구 메타데이터에 악의적 명령을 심으면, 클라이언트가 검증 없이 그 메타데이터를 LLM 컨텍스트에 넣어 행동을 조작합니다. 데이터 유출이나 의도하지 않은 명령 실행으로 이어집니다([SentinelOne MCP Security](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)).

### 실제 사고 (2025)

- **Asana AI 사고(2025년 5월).** 테넌트 격리 결함으로 조직 간 데이터 오염이 최대 1,000개 기업에 영향을 줄 수 있었습니다([SentinelOne MCP Security](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)).
- **WordPress AI Engine 플러그인.** MCP를 통한 권한 상승 취약점이 10만 개 이상 사이트에 영향을 미쳤습니다([SentinelOne MCP Security](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)).

### 완화

다층 방어가 권장됩니다. 정적 메타데이터 분석, 모델 의사결정 경로 추적, 행동 이상 탐지, 사용자 투명성입니다. MCP 클라이언트는 도구 설명을 사용자에게 보여주고, 설명이 바뀌면 알려야 합니다([SentinelOne MCP Security](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)). prompt injection 문제는 일찍부터 지적됐습니다([Simon Willison](https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/)).

## 에이전트 신원과 최소 권한

에이전트는 사람이 아니지만 자원에 접근합니다. **Non-Human Identity(NHI)**로 다뤄야 합니다. 서비스 계정, API 키, 액세스 토큰과 같은 비인간 신원에 사람과 같은 수준의 가시성, 통제, 거버넌스를 적용하는 접근입니다([Okta 보도자료](https://investor.okta.com/news-and-events/news-releases/news-details/2025/New-Okta-Platform-Innovations-Extend-Identity-Security-Fabric-to-Non-Human-Identities-in-an-Agentic-AI-Future/default.aspx)).

| 대응 | 내용 |
|---|---|
| 에이전트 신원 부여 | 에이전트와 MCP 서버를 중앙 디렉터리에 등록하고 사람 책임자 지정 |
| 최소 권한 | 정적 자격(서비스 계정, API 키)에 정책 기반 접근 제한 |
| 표준 연결 | Cross App Access(XAA) 같은 개방형 프로토콜로 에이전트 연결 표준화 |
| 섀도 에이전트 발견 | 승인되지 않은 AI 도구와 에이전트 탐지 |

Okta는 2025년 4월 Identity Security Fabric을 비인간 신원으로 확장했고, Cross App Access(XAA) 프로토콜과 Privileged Access로 에이전트 자격을 통제합니다([Okta 보도자료](https://investor.okta.com/news-and-events/news-releases/news-details/2025/New-Okta-Platform-Innovations-Extend-Identity-Security-Fabric-to-Non-Human-Identities-in-an-Agentic-AI-Future/default.aspx)). Astrix는 Okta, Entra ID 등 신원 공급자 전반에서 MCP 서버와 시크릿을 발견하고, 승인되지 않은 AI 에이전트를 핑거프린팅으로 탐지합니다([Astrix Security](https://astrix.security/)).

에이전트 신원은 [Identity 영역](/pillars/identity/)의 ITDR, IGA와 직접 연결됩니다.

## 대응 표준

| 표준 | 다루는 것 |
|---|---|
| OWASP Agentic Top 10 | 에이전트 시스템 위협 분류 |
| OWASP MCP Top 10 | MCP 위험 분류의 첫 산업 표준 |
| MITRE ATLAS | 에이전트 기법 14개 추가(2025년 10월) |
| CISA 공동 지침(2025-05-22) | AI 시스템 신뢰성을 위한 데이터 보안 강조 |

출처: [SentinelOne MCP Security](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/), [AI 레드티밍](/ai/ai-red-teaming/)의 MITRE ATLAS 정리

## 도입 가이드

에이전트 보안은 계층으로 쌓습니다.

1. **신원 부여.** 에이전트와 MCP 서버를 등록하고 책임자를 지정합니다.
2. **최소 권한.** 도구와 자원 접근을 필요한 만큼만 허용합니다.
3. **MCP 통제.** 도구 메타데이터를 검증하고 변경을 감지합니다. 신뢰하는 MCP 서버만 화이트리스트로 허용합니다.
4. **배포 전 테스트.** [AI 레드티밍](/ai/ai-red-teaming/)으로 Tool Misuse와 권한 남용을 점검합니다.
5. **런타임 가드레일.** [LLM 게이트웨이](/ai/llm-gateway/)로 실행 중 입출력을 검사합니다.
6. **태세 가시성.** [AI-SPM](/ai/ai-spm/)으로 에이전트 자산과 권한 위험을 지속 점검합니다.

## 도입 고려사항

**비인간 신원과 망분리.** 에이전트가 사용하는 API 키와 서비스 계정은 [N²SF](/korea/regulation/n2sf-mangbunri/) 환경에서도 통제 대상입니다. 자체 호스팅 MCP 서버 구성이 현실적인 경우가 많습니다.

**개인정보.** 에이전트가 도구를 통해 개인정보에 접근하면 [개인정보보호법](/korea/regulation/pipa-zero-trust-data/)의 접근 통제와 안전조치 의무가 적용됩니다.

**금융권.** 자율 행동하는 에이전트의 권한 범위는 [전자금융감독규정](/korea/regulation/financial-mangbunri/) 보안성 검토에서 면밀히 다뤄집니다. 인간 승인 흐름과 감사 추적을 설계해야 합니다.

## 출처

- [SentinelOne — Model Context Protocol (MCP) Security 가이드](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)
- [Simon Willison — MCP has prompt injection security problems](https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/)
- [Okta — Identity Security Fabric의 비인간 신원 확장 보도자료](https://investor.okta.com/news-and-events/news-releases/news-details/2025/New-Okta-Platform-Innovations-Extend-Identity-Security-Fabric-to-Non-Human-Identities-in-an-Agentic-AI-Future/default.aspx)
- [Astrix Security — AI 에이전트와 NHI 신원 보안](https://astrix.security/)
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)

## 면책

본 평가는 공개 자료를 근거로 합니다. 에이전트 보안은 표준과 제품이 빠르게 형성되는 영역입니다. 도입 전에 최신 공식 발표를 확인하세요.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-06-30
