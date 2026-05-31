---
title: "Automation & Orchestration"
description: "운영 효율과 즉시 대응을 위한 자동화."
ShowToc: false
---

> **SOAR에서 Agentic SOC로 진화 중이다.** 모든 영역을 횡단하는 자동화 기능으로, 탐지와 대응의 속도를 결정한다. 깊은 동향과 솔루션 비교는 [자동화 (with AI)](/automation/) 섹션에서 다룬다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| SOAR | 플레이북 기반 대응 자동화 | Palo Alto XSOAR, Splunk SOAR, Tines, Torq |
| IaC 보안 | 인프라 코드 단계 보안 검사 | Checkov, Snyk IaC, Wiz IaC |
| AI 보안 보조 | LLM 기반 분석과 대응 보조 | Microsoft Security Copilot, CrowdStrike Charlotte AI |

## 진화 단계

| 세대 | 핵심 | 대표 |
|---|---|---|
| 1세대 SOAR | 하드코딩 플레이북 | XSOAR, Splunk SOAR |
| Hyperautomation | AI 생성 no-code 워크플로 | Torq, Tines |
| Agentic SOC | 자율 추론과 다단계 행동 | Charlotte AI, Security Copilot, Torq |

단계별 차이의 본질은 [SOAR와 Hyperautomation](/automation/soar-evolution/)에서, 도구별 비교는 [Security Copilots 비교](/automation/security-copilots/)에서 다룬다.

## 시장 동향 (2025-2026)

**Agentic SOC로의 투자.** Torq는 2026년 1월 **1억 4천만 달러** 규모 시리즈 D를 유치하며 기업가치 **12억 달러**에 도달했다. 저신뢰 알림의 즉시 분류로 조사 시간을 최대 **90%** 단축한다고 밝힌다([Torq 보도자료](https://torq.io/news/torq-seriesd/), [Business Wire](https://www.businesswire.com/news/home/20260112510774/en/Torq-Secures-140M-Series-D-at-1.2B-Valuation-to-Lead-the-AI-SOC-and-Agentic-AI-Era)).

**벤더 생태계.** Microsoft Security Store에 70개 이상의 파트너 에이전트가 등록됐고, CrowdStrike는 Charlotte AgentWorks를 공개했다. 자세한 내용은 [Security Copilots 비교](/automation/security-copilots/)를 참고한다.

## 자동화 거버넌스

자동화 도입은 기술보다 거버넌스 설계가 어렵다. 어떤 행동을 자율로 허용할지, 가드레일과 인간 승인 시점을 어떻게 정할지 미리 답해야 한다. 다섯 가지 질문은 [자동화 섹션](/automation/)에 정리돼 있다.

## 도입 고려사항

**금융권.** 자율 대응 범위는 금감원 보안성 심의에서 면밀히 검토된다. 감사 추적과 인간 승인 흐름을 처음부터 설계한다.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 환경은 클라우드 SOAR 사용에 제약이 있다. 사내 호스팅과 자체 가드레일 조합이 현실적인 경우가 있다.

**자율 대응 책임.** [개인정보보호법](/korea/regulation/pipa-zero-trust-data/)의 자동화된 결정 대응권 관점에서, 사람에게 영향을 주는 자동 조치는 설명과 책임 소재를 설계한다.

---
최종 검토 2026-05-30
