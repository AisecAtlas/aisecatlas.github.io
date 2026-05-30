---
title: "AI 거버넌스와 TRiSM"
description: "AI 사용 인벤토리, 정책, 위험, 컴플라이언스를 다루는 조직 차원의 계층."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "AI Governance", "TRiSM", "EU AI Act", "NIST AI RMF"]
ShowToc: true
---

> **이 페이지의 결론**: AI 거버넌스, 또는 AI TRiSM은 개별 공격을 막는 기술 도구가 아니라 조직이 AI를 어떻게 쓰고 통제하는지 정하는 정책, 위험, 컴플라이언스 계층입니다. [런타임 가드레일](/ai/llm-gateway/), [레드티밍](/ai/ai-red-teaming/), [AI-SPM](/ai/ai-spm/) 위에서 이들을 묶는 우산입니다. EU AI Act, NIST AI RMF, ISO 42001이 기준입니다.

## AI 거버넌스란

AI 거버넌스는 AI 자산 인벤토리, 정책 집행, 위험 관리, 감사 가능한 증거 생성을 다룹니다([Credo AI](https://www.credo.ai/product)). Gartner는 이 시장을 AI TRiSM(Trust, Risk and Security Management)으로 부르며, 2025년 AI 거버넌스 플랫폼 시장 가이드를 발간했습니다([Credo AI 블로그](https://www.credo.ai/blog/credo-ai-recognized-in-the-gartner-r-market-guide-for-ai-governance-platforms-2025)).

## 기술 계층과의 관계

거버넌스는 기술 방어를 대체하지 않습니다. 그 위에서 조직 정책으로 묶습니다.

| 계층 | 질문 | 본 사이트 페이지 |
|---|---|---|
| 거버넌스 | 우리가 AI를 적법하게 쓰는가 | 이 페이지 |
| 태세(AI-SPM) | 어떤 AI 자산이 어떤 위험을 갖는가 | [AI-SPM](/ai/ai-spm/) |
| 런타임 가드레일 | 실행 중 공격을 막는가 | [LLM 게이트웨이](/ai/llm-gateway/) |
| 레드티밍 | 배포 전 취약점을 찾았는가 | [AI 레드티밍](/ai/ai-red-teaming/) |
| 에이전트 | 에이전트 신원과 권한을 통제하는가 | [Agentic 보안](/ai/agentic-security/) |

## 3대 규제 프레임워크

대부분의 글로벌 기업은 세 가지를 동시에 적용받습니다([EC-Council 비교](https://www.eccouncil.org/cybersecurity-exchange/responsible-ai-governance/eu-ai-act-nist-ai-rmf-and-iso-iec-42001-a-plain-english-comparison/)).

| 프레임워크 | 성격 | 역할 |
|---|---|---|
| EU AI Act | 법, 벌칙 있음 | 법적 컴플라이언스 요구사항 |
| NIST AI RMF | 자발적 지침 | 위험 관리 방법론 |
| ISO/IEC 42001 | 인증 | 감사 가능한 관리 체계 |

### EU AI Act 시행 일정

| 시점 | 내용 |
|---|---|
| 2025-02-02 | 금지된 AI 시스템 사용 금지 시행 |
| 2025-08-02 | 범용 AI(GPAI) 의무 시작 |
| 2026-08-02 | 고위험 AI 시스템 요구사항 적용(원안) |

출처: [Cloud Security Alliance](https://cloudsecurityalliance.org/blog/2025/01/29/how-can-iso-iec-42001-nist-ai-rmf-help-comply-with-the-eu-ai-act)

다만 2026년 5월 7일 EU 이사회와 의회가 Digital Omnibus에 잠정 합의해 고위험 시스템 적용 시점을 뒤로 미루는 방향이 논의되고 있습니다([gaicc 비교](https://gaicc.org/blog/ai-governance-comparison-eu-ai-act-nist-iso-42001/)). 최종 확정 전까지 일정은 유동적입니다.

## 솔루션

| 솔루션 | 특징 |
|---|---|
| **Credo AI** | 인벤토리, 정책 집행, 위험 관리, 런타임 보증을 NIST AI RMF, ISO 42001, EU AI Act에 정렬 |
| **Holistic AI** | 편향 감사에서 전 주기 거버넌스로 확장. 섀도 AI 발견, 자동 위험 테스트 |
| **Modulos** | EU AI Act 대응 기능에 강점 |
| **Trustible** | 프레임워크 매핑과 정책 관리 |

출처: [Credo AI](https://www.credo.ai/product), [Modulos AI 거버넌스 플랫폼 가이드](https://www.modulos.ai/best-ai-governance-platforms/)

Holistic AI는 2026년 Guardian Agents를 출시해 지속 관찰(Sentinel)과 실시간 개입(Operative) 에이전트를 더했습니다([Modulos 정리](https://www.modulos.ai/best-ai-governance-platforms/)).

## 도입 의사결정 가이드

### 어디서부터 시작하나

**1단계: 인벤토리.** 조직이 쓰는 AI 시스템과 모델을 목록화합니다. 섀도 AI 발견은 [AI-SPM](/ai/ai-spm/)과 겹칩니다.

**2단계: 위험 분류.** EU AI Act 기준으로 고위험 여부를 판단하고 NIST AI RMF로 위험을 평가합니다.

**3단계: 정책과 증거.** ISO 42001 관리 체계로 정책을 문서화하고 감사 증거를 생성합니다.

### 프레임워크 조합

| 목적 | 프레임워크 |
|---|---|
| 위험 관리 방법론 | NIST AI RMF |
| 감사 가능한 관리 체계 | ISO/IEC 42001 |
| 법적 컴플라이언스(EU 사업) | EU AI Act |

## 한국 시장 노트

**자동화된 결정 대응권.** [개인정보보호법](/korea/regulation/pipa-zero-trust-data/)의 자동화된 결정 대응권(제37조의2)은 AI 거버넌스의 핵심 요건입니다. 설명 요구와 거부권을 처리 절차에 반영해야 합니다.

**생성형 AI 처리 안내서.** 개인정보보호위원회의 생성형 AI 처리 안내서가 AI 수명주기 단계별 거버넌스 기준을 제시합니다. 거버넌스 도구의 정책 템플릿과 연계하세요.

**글로벌 동시 적용.** EU 사업이 있는 한국 기업은 EU AI Act와 국내 개인정보보호법을 동시에 충족해야 합니다. 프레임워크 매핑 기능이 있는 도구가 부담을 줄입니다.

## 출처

- [Credo AI — 제품과 거버넌스 범위](https://www.credo.ai/product)
- [Credo AI — Gartner AI 거버넌스 플랫폼 시장 가이드 2025](https://www.credo.ai/blog/credo-ai-recognized-in-the-gartner-r-market-guide-for-ai-governance-platforms-2025)
- [Modulos — AI 거버넌스 플랫폼 가이드](https://www.modulos.ai/best-ai-governance-platforms/)
- [EC-Council — EU AI Act, NIST AI RMF, ISO 42001 비교](https://www.eccouncil.org/cybersecurity-exchange/responsible-ai-governance/eu-ai-act-nist-ai-rmf-and-iso-iec-42001-a-plain-english-comparison/)
- [Cloud Security Alliance — ISO 42001과 NIST AI RMF로 EU AI Act 대응](https://cloudsecurityalliance.org/blog/2025/01/29/how-can-iso-iec-42001-nist-ai-rmf-help-comply-with-the-eu-ai-act)

## 면책

본 평가는 공개 자료를 근거로 합니다. 규제 일정은 입법 과정에서 바뀔 수 있습니다. 권위 있는 해석이 필요하면 각 프레임워크의 원문을 확인하세요.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-06-30
