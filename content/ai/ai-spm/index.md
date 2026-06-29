---
title: "AI-SPM: AI 보안 태세 관리"
description: "AI 자산의 발견, 인벤토리, 위험 평가. 런타임 가드레일과 무엇이 다른가."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "AI-SPM", "Wiz", "Prisma AIRS", "Shadow AI"]
ShowToc: true
---

AI-SPM(AI Security Posture Management)은 조직이 쓰는 AI 자산을 발견하고, 그 구성과 권한의 위험을 평가하는 태세 관리 도구입니다. [AI를 지키는 일](/ai/defend-ai/)의 런타임 가드레일이 실행 중 입출력을 막는다면, AI-SPM은 배포 전과 구성 단계에서 위험을 본다는 점에서 보완 관계입니다. CNAPP 벤더가 빠르게 이 영역으로 들어옵니다.

## AI-SPM 정의

AI-SPM은 CSPM(클라우드 보안 태세 관리)의 AI 자산 버전입니다. 조직이 학습하거나 추론에 사용하는 AI 생태계 전반의 태세 위험을 가시화합니다. Palo Alto Networks의 정의에 따르면 AI-SPM은 세 가지를 가시화하고 통제합니다([Palo Alto AI-SPM](https://www.paloaltonetworks.com/prisma/cloud/ai-spm)).

| 가시화 대상 | 내용 |
|---|---|
| 데이터 | 학습과 추론에 사용되는 데이터 |
| 모델 무결성 | 배포된 모델의 무결성 |
| 접근 | 배포된 모델에 대한 접근 통제 |

태세 위험으로는 **과도한 권한, 민감 데이터 노출, 플랫폼 구성 오류, 접근 구성 오류**를 점검합니다([Palo Alto AI-SPM](https://www.paloaltonetworks.com/prisma/cloud/ai-spm)).

### 섀도 AI 발견

AI-SPM의 핵심 기능 하나는 IT와 보안팀의 승인 여부와 관계없이 **조직에서 사용 중인 모든 AI 에이전트를 발견하고 인벤토리화**하는 것입니다([Palo Alto Networks Prisma AIRS 2.0 보도자료](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-secures-the-ai-agent-revolution-with-the-launch-of-prisma-airs-2-0)).

## 런타임 가드레일과의 차이

| 구분 | AI-SPM | 런타임 가드레일 / AI 게이트웨이 |
|---|---|---|
| 시점 | 배포 전, 구성 단계 | 실행 중, 호출 시점 |
| 관측 대상 | 자산 인벤토리, 권한, 구성 위험 | 입출력 프롬프트, 응답 |
| 차단 대상 | 잘못된 구성과 과도한 권한 | Prompt Injection, 데이터 유출 |
| 대표 | Wiz, Prisma AIRS | Lakera Guard, Prompt Security |

두 가지는 경쟁이 아니라 계층입니다. [AI를 지키는 일](/ai/defend-ai/)의 4개 방어 카테고리 중 게이트웨이와 레드티밍이 런타임과 배포 전 테스트를 담당한다면, AI-SPM은 그 위에서 전체 자산의 태세를 봅니다.

## 주요 솔루션

| 솔루션 | 접근 방식 |
|---|---|
| **Wiz AI Security** | Security Graph에 AI 자산을 연결해 공격 경로를 지속 평가. CNAPP 통합 |
| **Palo Alto Prisma AIRS** | Posture Management, Runtime Security, AI Agent Security, AI Model Security 통합 |
| **Protect AI** | 모델 스캐닝과 MLOps 보안. 2025년 Palo Alto Networks에 인수되어 Prisma AIRS에 통합 |

출처: [Wiz AI Security Tools](https://www.wiz.io/academy/ai-security/ai-security-tools), [Help Net Security](https://www.helpnetsecurity.com/2025/10/29/palo-alto-networks-launches-prisma-airs-2-0-to-deliver-end-to-end-security-across-the-ai-lifecycle/)

## 시장 동향 (2025-2026)

Prisma AIRS의 빠른 버전업이 이 카테고리의 성장 속도를 보여줍니다.

| 시점 | 내용 |
|---|---|
| 2025-04-28 | Prisma AIRS 발표. AI 앱, 에이전트, 모델, 데이터 보호 |
| 2025-10-28 | Prisma AIRS 2.0. 인수한 Protect AI 통합, 섀도 AI 에이전트 발견 |
| 2026 초 | Prisma AIRS 3.0. 사전 발견부터 런타임 방어까지 에이전트 전 주기 |

출처: [Palo Alto Networks Prisma AIRS 발표](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-introduces-prisma-airs--the-foundation-on-which-ai-security-thrives), [Prisma AIRS 2.0 보도자료](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-secures-the-ai-agent-revolution-with-the-launch-of-prisma-airs-2-0), [Prisma AIRS 3.0 블로그](https://www.paloaltonetworks.com/blog/2026/03/prisma-airs-3-0-autonomous-ai/)

## 도입 의사결정 가이드

### 도입 단계

**1단계: AI 자산 파악.** 조직이 어떤 LLM, 에이전트, 모델을 쓰는지 모른다면 섀도 AI 발견이 먼저입니다.

**2단계: 태세 점검.** 발견한 자산의 권한, 데이터 노출, 구성 오류를 평가합니다.

**3단계: 런타임 결합.** 태세 관리 위에 [AI 게이트웨이와 가드레일](/ai/defend-ai/)을 더해 실행 중 위협을 막습니다.

### 비교 선택 기준

| 상황 | 권장 |
|---|---|
| 이미 Wiz CNAPP 사용 | Wiz AI Security로 통합 |
| 통합 AI 보안 플랫폼이 필요 | Palo Alto Prisma AIRS |
| 모델 공급망과 MLOps 보안 우선 | Protect AI 계열 기능 |

## 도입 고려사항

**섀도 AI와 개인정보.** 승인되지 않은 생성형 AI 사용은 개인정보보호법 위반 위험을 키웁니다. AI-SPM의 발견 기능이 섀도 AI를 드러내는 첫 단계입니다.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 전환으로 업무망 생성형 AI가 허용되면, 어떤 AI 자산이 어느 등급(C/S/O) 데이터를 다루는지 가시화하는 AI-SPM의 역할이 커집니다.

**공공과 정부.** 클라우드형 AI-SPM은 [CSAP 인증](/korea/regulation/csap-n2sf/)과 데이터 처리 리전을 확인합니다.

**금융권.** [전자금융감독규정](/korea/regulation/financial-mangbunri/) 완화로 금융권 AI 도입이 늘면서, AI 자산 인벤토리와 접근 통제가 보안성 검토의 사전 요건이 됩니다.

## 관련 페이지

- [AI를 지키는 일](/ai/defend-ai/)
- [AI 모델 공급망 보안](/ai/model-supply-chain/)
- [Agentic AI 보안과 MCP](/ai/agentic-security/)
- [AI 보안 지도](/ai/map/)
- [벤더 프로필](/ai/vendors/)

## 출처

- [Palo Alto Networks AI-SPM](https://www.paloaltonetworks.com/prisma/cloud/ai-spm)
- [Palo Alto Networks Prisma AIRS 발표 (2025-04-28)](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-introduces-prisma-airs--the-foundation-on-which-ai-security-thrives)
- [Palo Alto Networks Prisma AIRS 2.0 보도자료 (2025-10-28)](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-secures-the-ai-agent-revolution-with-the-launch-of-prisma-airs-2-0)
- [Help Net Security — Prisma AIRS 2.0](https://www.helpnetsecurity.com/2025/10/29/palo-alto-networks-launches-prisma-airs-2-0-to-deliver-end-to-end-security-across-the-ai-lifecycle/)
- [Wiz AI Security Tools](https://www.wiz.io/academy/ai-security/ai-security-tools)

## 면책

본 정리는 공개 자료를 근거로 합니다. 시장 변동이 빠른 영역입니다. 도입 전에 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-06-30
