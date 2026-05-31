---
title: "LLM 게이트웨이와 런타임 가드레일 비교"
description: "Lakera, Prompt Security, 오픈소스 가드레일을 같은 기준으로 비교한다."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "LLM Guardrail", "Lakera", "Prompt Injection", "OWASP"]
ShowToc: true
---

> **이 페이지의 결론**: LLM 게이트웨이는 LLM 호출의 입출력을 실행 중에 검사해 [OWASP LLM Top 10](/ai/defend-ai/)의 Prompt Injection(LLM01)과 부적절한 출력 처리(LLM05)를 막는 계층이다. 2025년에 상용 도구가 대형 보안 벤더로 빠르게 흡수됐다. Lakera는 Check Point로, Prompt Security는 SentinelOne으로 들어갔다. 자체 호스팅이 필요하면 오픈소스가 대안이다.

## 무엇을 하는 계층인가

LLM 게이트웨이, 또는 런타임 가드레일은 애플리케이션과 LLM 사이에 위치한다. 사용자 입력과 모델 출력을 양방향으로 검사해 위험을 차단한다. [AI를 지키는 일](/ai/defend-ai/)의 4개 방어 카테고리 중 첫 번째인 게이트웨이를 깊이 비교한다.

전통적 정규표현식과 시그니처로는 자연어 공격을 막을 수 없다. 게이트웨이는 분류 모델로 입출력의 의도를 평가한다.

## OWASP LLM Top 10과의 매핑

| OWASP 코드 | 위협 | 게이트웨이의 역할 |
|---|---|---|
| LLM01 | Prompt Injection | 입력에서 주입과 탈옥 시도 탐지 |
| LLM02 | Sensitive Information Disclosure | 입출력에서 민감정보, PII 마스킹 |
| LLM05 | Improper Output Handling | 출력을 후속 시스템에 넘기기 전 검증 |
| LLM07 | System Prompt Leakage | 시스템 프롬프트 노출 차단 |

출처: [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

## 솔루션 비교

| 솔루션 | 형태 | 탐지 방식 | 배포 | 소속 |
|---|---|---|---|---|
| **Lakera Guard** | 상용 | 분류기 API, OWASP LLM 카테고리별 분류 | SaaS, 자체 호스팅 | Check Point (2025년 인수) |
| **Prompt Security** | 상용 | 관리형 런타임 가드레일, 사용 가시성 | SaaS | SentinelOne (2025년 5월 인수) |
| **Protect AI Guardian** | 상용 | MLOps 가시성과 런타임 보호 통합 | SaaS | Palo Alto Networks (Prisma AIRS에 통합) |
| **NeMo Guardrails** | 오픈소스 | Colang으로 대화 흐름과 행동 제어 | 자체 호스팅 | NVIDIA |
| **Guardrails AI** | 오픈소스 | 출력 검증 중심, 구조화 데이터 | 자체 호스팅 | 커뮤니티 |
| **LLM Guard** | 오픈소스 | 광범위 기본 스캐너 | 자체 호스팅 | 커뮤니티 |

출처: [appsecsanta Lakera 분석](https://appsecsanta.com/lakera), [appsecsanta Lakera 대안](https://appsecsanta.com/ai-security-tools/lakera-alternatives), [is4.ai 오픈소스 비교](https://is4.ai/blog/our-blog-1/guardrails-ai-vs-nemo-guardrails-comparison-2026-352)

개별 리뷰: [Lakera](/solutions/lakera/), [Protect AI](/solutions/protect-ai/), [NVIDIA NeMo Guardrails](/solutions/nemo-guardrails/).

### Lakera Guard

분류기 API 방식이다. 단일 REST 호출로 카테고리별 분류 결과를 반환한다. **98% 이상의 prompt injection 탐지율, sub-50ms 지연, 100개 이상 언어**를 표방한다([Lakera Guard](https://www.lakera.ai/lakera-guard)). 호출당 과금이라 트래픽이 늘면 비용도 비례한다. 2025년 Check Point가 **3억 달러** 규모로 인수했고, Lakera는 Check Point의 AI 보안 거점(Global Center of Excellence for AI Security)의 토대가 된다([Check Point 보도자료](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/)).

### Prompt Security

엔터프라이즈 LLM 사용 가시성과 정책 적용에 강점이 있는 관리형 런타임 가드레일이다. 2025년 5월 SentinelOne에 인수되어 Singularity 플랫폼에 통합됐다. SentinelOne으로 엔드포인트를 표준화한 조직이 같은 스택에서 AI 가드레일을 쓰려 할 때 적합하다([appsecsanta Lakera 대안](https://appsecsanta.com/ai-security-tools/lakera-alternatives)).

### 오픈소스 가드레일

| 도구 | 언제 쓰나 |
|---|---|
| NeMo Guardrails | 복잡한 대화 정책과 주제 경계가 필요한 에이전트 |
| Guardrails AI | LLM이 폼, API 페이로드 같은 구조화 데이터를 반환해야 할 때 |
| LLM Guard | 실사용자 대상 프로덕션 앱에 기본 커버리지가 필요할 때 |

NeMo Guardrails는 가장 아키텍처가 완성된 오픈소스 프레임워크지만, NVIDIA가 README에서 기본 설정 그대로는 프로덕션에 권장하지 않는다고 명시한다. 추가 하드닝이 필요하다([is4.ai 비교](https://is4.ai/blog/our-blog-1/guardrails-ai-vs-nemo-guardrails-comparison-2026-352)). prompt injection이 특정 위협이면 Vigil이나 Rebuff를 위에 얹는 패턴이 쓰인다.

## 상용과 오픈소스 선택

| 기준 | 상용 (Lakera, Prompt Security) | 오픈소스 (NeMo, Guardrails AI) |
|---|---|---|
| 도입 속도 | 빠름, API 호출 | 느림, 직접 구성 |
| 탐지 품질 | 학습된 분류기, 벤더 갱신 | 구성과 추가 모델에 의존 |
| 데이터 위치 | SaaS는 외부 경유 | 자체 호스팅으로 내부 유지 |
| 비용 | 호출량 기반 과금 | 라이선스 무료, 운영 비용 |

## 의사결정 트리

**Q1. 트래픽이 외부로 나가도 되는가?**

- No (망분리, 데이터 통제) → 자체 호스팅 (오픈소스 또는 상용 self-host)
- Yes → Q2로

**Q2. 기존 보안 스택이 있는가?**

- Check Point 스택 → Lakera (Guard, Red)
- SentinelOne 스택 → Prompt Security
- 없음 → Q3로

**Q3. 무엇이 우선인가?**

- 다국어와 빠른 응답 → Lakera Guard
- 대화 정책 제어 → NeMo Guardrails
- 구조화 출력 검증 → Guardrails AI

## 도입 고려사항

**개인정보 마스킹.** Prompt에 PII가 섞이는 흐름은 개인정보보호법 위반 소지가 있다. 게이트웨이의 입출력 PII 마스킹 기능이 핵심이다.

**망분리와 자체 호스팅.** 외부 API 호출이 불가능한 [망분리, N²SF](/korea/regulation/n2sf-mangbunri/) 환경은 자체 호스팅 가능한 도구만 후보다. 오픈소스 가드레일과 사내 정책 엔진의 결합이 현실적이다.

**공공 부문.** SaaS형 게이트웨이는 [CSAP 인증](/korea/regulation/csap-n2sf/)과 데이터 처리 리전을 확인한다.

**한국어 탐지 검증.** 다국어 표방과 실제 한국어 탐지 정확도는 다를 수 있다. PoC에서 자체 데이터로 검증한다.

## 출처

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [Lakera Guard 공식](https://www.lakera.ai/lakera-guard)
- [Check Point — Lakera 인수 보도자료](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/)
- [SecurityWeek — Check Point to Acquire Lakera](https://www.securityweek.com/check-point-to-acquire-ai-security-firm-lakera/)
- [appsecsanta — Prompt Security SentinelOne 통합](https://appsecsanta.com/ai-security-tools/lakera-alternatives)
- [is4.ai — Guardrails AI vs NeMo Guardrails 비교](https://is4.ai/blog/our-blog-1/guardrails-ai-vs-nemo-guardrails-comparison-2026-352)
- [Palo Alto Networks — AI Runtime Security와 NeMo Guardrails](https://www.paloaltonetworks.com/blog/network-security/securing-genai-with-ai-runtime-security-and-nvidia-nemo-guardrails/)

## 면책

본 평가는 공개 자료를 근거로 한다. 시장 변동이 빠른 영역이다. 탐지율과 지연 수치는 벤더 표방값이며 환경에 따라 다르다. 도입 전에 최신 공식 발표를 확인한다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-06-30
