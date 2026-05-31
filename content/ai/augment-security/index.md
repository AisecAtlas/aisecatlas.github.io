---
title: "AI로 보안을 강화하는 일"
description: "Security Copilot과 Agentic SOC. AI가 SOC 운영을 어떻게 가속하나."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Security Copilot", "Agentic SOC", "AI SOC", "Charlotte AI", "Microsoft Security Copilot"]
ShowToc: true
---

> **이 페이지의 결론**: SOC는 **알림 과부하**와 **인력 부족**이라는 만성 문제 위에 **27초 침투**라는 새 압박을 받는다. 2026년의 답은 **Agentic SOC**다. AI 에이전트가 분류, 조사, 일부 대응을 자율 수행하고 분석가는 의사결정과 가드레일 설정에 집중한다.

## SOC가 직면한 압박

세 가지 수치가 현재 상황을 요약한다.

- **27초**: eCrime 침투 시간(breakout time) 최단 사례 (CrowdStrike 2025 Global Threat Report)
- **89%**: AI 활용 공격의 전년 대비 증가율
- **수백~수천 건**: 분석가 1명이 하루에 분류해야 하는 알림 수

분석가의 수동 분류 속도로는 침투 속도를 따라잡을 수 없다. **자동화는 선택이 아니라 생존의 문제**가 됐다.

## SOAR에서 Agentic SOC로

자동화 자체는 새롭지 않다. 진화 단계가 있다.

| 단계 | 방식 | 한계 |
|---|---|---|
| 1세대 SOAR | 하드코딩된 playbook 자동화 | 매 새 위협마다 엔지니어가 워크플로 수정 |
| Hyperautomation | AI 생성 no-code 워크플로 | 동적 변화 대응 가능, 추론 제한적 |
| **Agentic SOC** | 에이전트가 **추론, 다단계 조사, 자율 대응** | 가드레일과 거버넌스가 핵심 과제 |

> **차이의 본질**: SOAR는 정해진 일을 빠르게 한다. Agentic SOC는 **정해지지 않은 일도 가능한 한 안전하게 수행**한다.

자세한 진화 비교는 [SOAR와 Hyperautomation 진화](/automation/soar-evolution/)에서 다룬다.

## 시장 주도 솔루션

### Microsoft Security Copilot

| 항목 | 내용 |
|---|---|
| 출시 | 2024년 GA |
| 확장 | **70개 이상**의 파트너 에이전트가 등록된 Security Store 운영 |
| 2026 업데이트 | RSA 2026에서 신호 분석, 사고 조사, 워크플로 실행을 수행하는 새 에이전트 발표 |
| 강점 | Microsoft 365, Defender, Sentinel, Purview와 단일 스택 통합 |
| 한계 | Microsoft 생태계 외부에선 우위 축소 |

### CrowdStrike Charlotte AI

| 항목 | 내용 |
|---|---|
| 정체성 | Falcon 플랫폼의 **agentic analyst** |
| Charlotte Agentic SOAR | 보안 수명주기 전반에서 AI 에이전트를 오케스트레이션 |
| 2026 업데이트 | **Charlotte AI AgentWorks** 생태계 발표 (RSA 2026, 2026년 3월) |
| 파트너 | Accenture, AWS, Anthropic, Deloitte, Kroll, NVIDIA, OpenAI, Salesforce, Telefónica Tech |
| 강점 | Falcon 단일 에이전트와 LogScale 데이터 레이크 위에 자연스럽게 결합 |

### Torq AI SOC Platform

| 항목 | 내용 |
|---|---|
| 정체성 | **Hyperautomation 우선** 접근의 AI SOC |
| 자금 조달 | **2026년 초 Series D $140M 유치**, 평가액 $1.2B, 누적 $332M |
| 강점 | SOAR 한계를 명시적으로 비판하며 정책 코드 기반 AI 가드레일과 사례 관리 통합 |

### Tines

| 항목 | 내용 |
|---|---|
| 강점 | 유연한 워크플로와 직관적 UI |
| 2026 차별점 | **Smart Mode**가 수백만 건의 익명화된 성공 실행을 기반으로 다음 단계를 제안 |
| AI Action Creator | 자연어로 워크플로 설명 → 로직과 API 호출, 데이터 변환을 즉시 생성 |
| 한계 | 가드레일 깊이는 Torq에 비해 상대적으로 짧은 역사 |

> 본 카테고리의 풀 비교는 [Security Copilots 비교](/automation/security-copilots/)에서 다룬다.

## 에이전트가 SOC에서 실제로 하는 일

추상이 아니라 구체적인 작업으로 본다.

### Alert Triage 자동화

- 알림 수신 즉시 신호 보강 (자산, 사용자, 위협 인텔리전스 조회)
- 거짓 양성 패턴 매칭으로 **자동 종결 후보 식별**
- 분석가 검토용으로 **압축된 1줄 요약** 생성

### 위협 헌팅과 조사

- 알림에서 출발해 **관련 자산, 사용자, 네트워크 흐름**을 자동으로 탐색
- 가설을 생성하고 SIEM, EDR, IAM 로그를 교차 조회
- 조사 결과를 timeline 형태로 정리

### 자율 대응 (가드레일 안에서)

- 사전 정의된 신뢰 수준 안에서 **격리, 차단, 자격 무효화** 자동 실행
- 신뢰 수준을 넘는 결정은 **분석가에게 승인 요청**
- 모든 행동의 감사 추적 자동 생성

### 보고서 자동 작성

- 사고 후 보고서, 임원 요약, 컴플라이언스 증적 생성
- 자연어 질의에 데이터 기반 답변 ("지난 분기 IAM 위협 추세는?")

## 도입 의사결정 가이드

### 어디서부터 시작하나

**1단계: Alert Triage만 자동화**
- 분석가의 반복 작업을 줄이는 것이 첫 목표
- 자율 대응은 비활성화, 분류와 요약만 자동화
- **권장**: Charlotte AI 또는 Security Copilot의 triage 모드

**2단계: 조사 보조로 확장**
- 분석가가 조사를 시작할 때 에이전트가 보강 정보를 자동 수집
- 의사결정은 인간이 함
- **권장**: 동일 도구의 investigation 모드 + 가드레일 정의

**3단계: 제한적 자율 대응**
- 격리, 차단 같은 가역적 행동만 자율화
- 자격 무효화, 시스템 종료 같은 비가역적 행동은 승인 요청
- **권장**: Torq 또는 Tines의 가드레일 + 승인 흐름 설계

**4단계: 다중 에이전트 협업**
- 도메인별 전문 에이전트(IAM, EDR, 클라우드) 협업
- 인간은 가드레일 정의와 예외 처리에 집중
- **권장**: Charlotte AgentWorks 또는 Security Copilot 파트너 에이전트 생태계 활용

### 비교 선택 기준

| 상황 | 권장 |
|---|---|
| Microsoft 365 중심 SOC | Microsoft Security Copilot |
| CrowdStrike Falcon 중심 SOC | Charlotte AI |
| 멀티 벤더 SOC, 워크플로 유연성 우선 | Torq 또는 Tines |
| 컴플라이언스와 감사 추적 강조 | Torq |
| 빠른 PoC와 학습 곡선 | Tines |

## 도입 고려사항

**언어 정확도.** 한국어 알림과 로그 정확도는 벤더마다 다르다. PoC 단계에서 자체 데이터로 검증한다.

**데이터 리전.** Security Copilot은 한국 리전이 있다. CrowdStrike와 Torq는 글로벌 리전이라 데이터 위치를 사전 확인한다.

**금융권 적용.** 자율 대응은 금감원 보안성 심의에서 면밀히 검토된다. 감사 추적과 인간 승인 흐름을 명확히 설계한다.

**공공 부문.** CSAP 인증과 망분리 정책이 적용 범위를 좁힌다. 사내 호스팅과 자체 가드레일 조합이 현실적인 출발점이다.

## 출처

- [Microsoft Security Copilot Blog](https://techcommunity.microsoft.com/blog/securitycopilotblog/from-alert-overload-to-decisive-action-how-security-copilot-agents-are-transform/4504213)
- [CrowdStrike Charlotte AI](https://www.crowdstrike.com/en-us/platform/charlotte-ai/)
- [CrowdStrike Charlotte AgentWorks (RSA 2026)](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)
- [Torq Agentic AI and Hyperautomation in the SOC](https://torq.io/blog/agentic-ai-hyperautomation-soc/)
- [Torq SOAR vs AI SOC 비교](https://torq.io/blog/soar-vs-ai-soc/)
- [Tines와 Torq를 포함한 AI-Native SOAR 비교](https://codebrewtools.com/blogs/best-ai-native-soar-platforms-2026)

## 면책

본 평가는 공개 자료를 근거로 합니다. 실제 SOC 환경에서 효과는 벤더 클레임과 다를 수 있습니다. PoC로 자체 검증을 권장합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
