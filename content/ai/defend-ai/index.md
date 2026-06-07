---
title: "AI를 지키는 일"
description: "LLM 애플리케이션과 AI 에이전트를 공격으로부터 보호합니다. OWASP 기준과 주요 카테고리 정리."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "LLM", "Prompt Injection", "OWASP", "Agentic AI"]
ShowToc: true
---

2026년 현재 AI 보안의 1순위 위협은 여전히 **Prompt Injection**이며, 특히 **간접(Indirect) Injection**이 에이전트 시스템에서 핵심 공격면이 되었습니다. OWASP는 LLM과 Agentic 시스템을 위해 **별도의 Top 10**을 유지하고, 시장에는 4가지 카테고리의 방어 도구가 형성됐습니다.

## 무엇을 보호하는가

조직이 LLM이나 AI 에이전트를 도입하면 새로운 자산이 생깁니다.

- **LLM 애플리케이션**: 사내 챗봇, RAG, 코파일럿 같은 단일 호출 시스템
- **AI 에이전트**: 도구를 호출하고 여러 단계를 추론해 자율 행동하는 시스템
- **모델 자체**: 학습 데이터, 가중치, 파인튜닝 결과
- **공급망**: 모델 레지스트리, 벡터 DB, MCP 서버, 외부 데이터 소스

기존 보안 영역과 겹치는 부분도 있지만, **공격면이 자연어**라는 점이 결정적으로 다릅니다. 정규표현식과 시그니처로 막을 수 없습니다.

## OWASP 표준 두 가지

### OWASP LLM Top 10 v2.0 (2025)

단일 호출 LLM 애플리케이션을 위한 표준입니다. **2025년에 v2.0으로 개정**되면서 RAG 파이프라인과 멀티 모델 아키텍처의 위협을 반영했습니다.

| 코드 | 위협 | 핵심 |
|---|---|---|
| LLM01 | Prompt Injection | **1순위 위협**. 직접/간접 모두 포함 |
| LLM02 | Sensitive Information Disclosure | 학습 데이터나 시스템 프롬프트 누출 |
| LLM03 | Supply Chain | 모델, 데이터셋, 외부 의존성 침해 |
| LLM04 | Data and Model Poisoning | 학습 단계에서의 오염 |
| LLM05 | Improper Output Handling | LLM 출력을 검증 없이 후속 시스템에 전달 |
| LLM06 | Excessive Agency | LLM에 과도한 권한을 부여 |
| LLM07 | System Prompt Leakage | 시스템 프롬프트가 사용자에게 노출 |
| LLM08 | Vector and Embedding Weaknesses | RAG의 임베딩 단계 공격 |
| LLM09 | Misinformation | 환각으로 인한 잘못된 정보 전파 |
| LLM10 | Unbounded Consumption | 비용과 자원 고갈 공격 |

### OWASP Agentic Top 10 (2026)

자율 행동을 하는 에이전트 시스템 전용입니다. **100명 이상의 산업 전문가가 검토**한 별도 프레임워크로, 2026년에 발표됐습니다.

| 위협 영역 | 의미 |
|---|---|
| Goal Misalignment | 에이전트가 의도와 다른 목표를 추구 |
| Tool Misuse | 도구를 잘못 사용하거나 악용 |
| Delegated Trust | 위임된 권한이 의도보다 넓게 적용 |
| Inter-agent Communication | 에이전트 간 통신이 변조되거나 신뢰 오용 |
| Persistent Memory | 영속 메모리가 오염돼 장기 영향 |
| Emergent Autonomous Behavior | 예측되지 않은 자율 행동 발생 |

> **왜 별도 표준이 필요한가**: 에이전트는 단일 호출 LLM과 달리 **추론, 메모리, 도구, 다단계 실행**이 결합됩니다. 프롬프트 단계 방어만으로 막을 수 없는 새로운 취약점 분류가 생깁니다.

## Prompt Injection이 여전히 1순위인 이유

2025-2026년의 변화 세 가지가 결합됐습니다.

**Multi-turn jailbreak**가 frontier model의 주된 공격 패턴이 되었습니다. 한 번의 프롬프트가 아니라 여러 턴에 걸쳐 점진적으로 가드레일을 무너뜨립니다.

**Multimodal injection**이 성숙했습니다. 이미지, QR 코드, 스테가노그래픽 페이로드에 명령을 숨겨 전달합니다. 텍스트 필터만으로는 잡히지 않습니다.

**MCP 서버 악용**이 새 공격면으로 떠올랐습니다. **Tool Poisoning, Credential Theft**가 에이전트 도입과 함께 등장했습니다. Lakera의 분석에 따르면 **간접 공격이 직접 공격보다 적은 시도로 성공**합니다. 외부 콘텐츠를 가져오는 흐름 자체가 1차 위험 벡터입니다.

## 시장 카테고리

2026년 현재 AI 방어 도구는 네 가지 카테고리로 나뉩니다. 대표 벤더로 [Palo Alto](/ai/vendors/palo-alto/), [Check Point](/ai/vendors/check-point/), [HiddenLayer](/ai/vendors/hiddenlayer/), [Mindgard](/ai/vendors/mindgard/)가 있습니다.

### 1. AI 게이트웨이 / Runtime 가드레일

LLM 호출 앞단에서 입출력을 검사하고 차단합니다. 같은 척도의 심층 비교는 [LLM 게이트웨이와 런타임 가드레일 비교](/ai/llm-gateway/)에 있습니다.

| 솔루션 | 특징 |
|---|---|
| **Lakera Guard** | **98% 이상 탐지율**, sub-50ms 지연, 100개 이상 언어 지원. Gandalf 게임에서 수집한 **8000만 건 이상의 적대적 프롬프트**로 학습. 2025년 Check Point에 인수 |
| **Prompt Security** | 엔터프라이즈 LLM 사용 가시성과 정책 적용에 강점. 2025년 SentinelOne에 인수 |
| **Cisco AI Defense** | Robust Intelligence(2024년 인수) 기술 기반의 AI 방화벽 |
| **Protect AI Guardian** | MLOps 파이프라인 가시성 + Runtime 보호 통합 |

### 2. AI 레드티밍

배포 전에 LLM 앱과 에이전트를 자동 공격해 취약점을 찾습니다. 같은 척도의 심층 비교와 MITRE ATLAS 매핑은 [AI 레드티밍 비교](/ai/ai-red-teaming/)에 있습니다.

| 솔루션 | 특징 |
|---|---|
| **Lakera Red** | 자동화된 공격 시뮬레이션, CI/CD 통합 |
| **HiddenLayer** | 모델 자체와 추론 흐름의 적대적 공격 |
| **Mindgard** | 모델 평가와 LLM 앱 테스트 |

### 3. AI TRiSM (Trust, Risk, and Security Management)

거버넌스 차원에서 AI 사용 인벤토리, 데이터 흐름, 정책 적합성을 관리합니다. 규제 프레임워크(EU AI Act, NIST AI RMF, ISO 42001) 매핑과 솔루션 비교는 [AI 거버넌스와 TRiSM](/ai/ai-governance/)에 있습니다.

| 솔루션 | 특징 |
|---|---|
| **Credo AI** | AI 정책 거버넌스와 컴플라이언스 보고 |
| **Holistic AI** | AI 위험 평가와 영향도 분석 |

### 4. 모델 공급망 보안

학습 단계와 모델 레지스트리 보안입니다. 악성 모델, pickle 공격, 모델 서명과 ML-BOM 심층 내용은 [AI 모델 공급망 보안](/ai/model-supply-chain/)에 있습니다.

| 솔루션 | 특징 |
|---|---|
| **Protect AI** | 모델 스캐닝, 학습 데이터 검증 |
| **Wiz AI-SPM** | CNAPP에 통합된 AI 자산 가시성 |

자산 발견과 태세 관리(AI-SPM)는 [AI-SPM 솔루션](/ai/ai-spm/)에 있습니다.

## 도입 의사결정 가이드

### 어디서부터 시작하나

조직의 AI 도입 단계별로 우선순위가 다릅니다.

**1단계: 사내 챗봇 PoC 단계**
- 시스템 프롬프트 누출 방지 (LLM07)
- 출력 검증 (LLM05)
- **권장**: 사내 가드레일 코드 + Lakera Guard 같은 Runtime 보호

**2단계: 외부 노출 LLM 앱 운영**
- Prompt Injection 차단 (LLM01)
- 비용 통제 (LLM10)
- **권장**: AI 게이트웨이 + 레드티밍을 CI/CD에 통합

**3단계: 에이전트 시스템 도입**
- Tool Misuse 통제
- 권한 최소화 (Excessive Agency)
- **권장**: Agentic Top 10 기반 위협 모델링 + MCP 서버 화이트리스트

**4단계: 다수 에이전트 운영**
- 에이전트 간 통신 무결성
- 영속 메모리 오염 방지
- **권장**: AI TRiSM으로 거버넌스 + 행동 감사 추적

### 비교 선택 기준

| 상황 | 권장 |
|---|---|
| LLM 호출이 적고 사내 한정 | 오픈소스 가드레일 (NeMo Guardrails, Guardrails AI) |
| 다국어 + 빠른 응답 필요 | Lakera Guard |
| 엔터프라이즈 가시성 우선 | Prompt Security |
| 기존 Cisco 보안 스택 사용 | Cisco AI Defense |
| 모델 공급망과 MLOps 통합 | Protect AI |

## 도입 고려사항

**데이터 처리.** Prompt에 개인정보가 섞이는 흐름은 **개인정보보호법 위반 소지**가 있습니다. 입출력 필터에 PII 마스킹이 필수입니다.

**클라우드 LLM 호출.** 금감원의 클라우드 보안성 심의가 LLM 흐름까지 검토 범위에 들어갑니다. **데이터 리전, 학습 사용 동의, 로그 보존 정책**을 확인합니다.

**망분리 환경.** 외부 LLM API를 직접 호출할 수 없는 조직은 자체 호스팅 LLM과 자체 가드레일 조합이 현실적입니다. 오픈소스 도구(NeMo Guardrails 등)와 사내 OPA 정책의 결합 패턴이 자주 쓰입니다.

**공공 부문.** CSAP 인증을 보유한 클라우드에서 운영되는 LLM 서비스만 사용 가능한 경우가 많습니다. Microsoft Azure OpenAI Service의 한국 리전 활용 사례가 늡니다.

## 관련 페이지

- [Prompt Injection 방어](/ai/prompt-injection-defense/)
- [LLM 게이트웨이와 런타임 가드레일 비교](/ai/llm-gateway/)
- [AI 모델 공급망 보안](/ai/model-supply-chain/)
- [AI 레드티밍 비교](/ai/ai-red-teaming/)
- [Agentic AI 보안과 MCP](/ai/agentic-security/)
- [AI 보안 지도](/ai/map/)
- [표준: OWASP LLM Top 10](/framework/owasp-llm-top-10/)

## 출처

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Lakera Guide to Prompt Injection](https://www.lakera.ai/blog/guide-to-prompt-injection)
- [Lakera Year of the Agent (Q4 2025 분석)](https://www.lakera.ai/blog/the-year-of-the-agent-what-recent-attacks-revealed-in-q4-2025-and-what-it-means-for-2026)
- [General Analysis: Best AI Security Platforms 2026](https://generalanalysis.com/guides/best-ai-security-platforms)

## 면책

본 정리는 공개 자료를 근거로 합니다. 시장 변동이 빠른 영역입니다. 도입 전에 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
