---
title: "Lakera"
description: "LLM 런타임 가드레일과 레드티밍 중심 AI 방어 솔루션 시장 정리"
date: 2026-05-31
lastmod: 2026-05-31
tags: ["Lakera", "AI 보안", "LLM 가드레일", "프롬프트 인젝션", "Applications"]
categories: ["solution-review"]
pillars: ["Applications"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | AI 보안, LLM 런타임 가드레일, AI 레드티밍 |
| 본사 | 스위스 취리히 (비상장, 2025년 4분기 Check Point에 인수) |
| 핵심 모듈 | Lakera Guard 런타임 보호, Lakera Red 레드티밍, Gandalf 테스트 플랫폼 |
| 시장 위치 | LLM 가드레일 전문 업체, Check Point에 인수돼 AI 보안 센터 기반으로 편입 |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

Lakera는 LLM 애플리케이션을 보호하는 **AI 네이티브 보안 플랫폼**입니다. [OWASP LLM Top 10](/framework/owasp-llm-top-10/)의 LLM01 프롬프트 인젝션 대응이 핵심입니다.

핵심 개념은 **런타임 가드레일**입니다. LLM의 입력, 출력, RAG, MCP 흐름을 실시간으로 검사해 프롬프트 공격, 데이터 유출, 콘텐츠 위반을 차단합니다. 배포 전 단계에서는 **AI 레드티밍**(Lakera Red)으로 가드레일 우회를 능동 시험합니다. 차별점은 무료 AI 보안 테스트 게임 **Gandalf**에서 수집한 8천만 개 이상 공격 데이터 포인트로 공격 패턴을 학습한다는 점입니다.

> **왜 중요한가.** 프롬프트 인젝션은 LLM 앱의 1순위 위협입니다. Lakera는 배포 전 레드티밍과 런타임 가드레일을 한 벤더로 묶어 입력부터 출력까지 단일 흐름으로 방어합니다.

| 모듈 | 역할 |
|---|---|
| Lakera Guard | 실시간 런타임 보호. LLM 입력, 출력, RAG, MCP 흐름을 검사하고 프롬프트 공격, 데이터 유출, 콘텐츠 위반을 차단 |
| Lakera Red | 배포 전 레드티밍 평가 |
| Gandalf | AI 보안 테스트 플랫폼. 8천만 개 이상 공격 데이터 포인트 |

## 시장 위치

Lakera는 LLM 런타임 가드레일 전문 업체로, 2025년 4분기 마감 예정으로 Check Point가 인수를 발표했습니다([Check Point](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/)). 인수 금액은 비공개이나 약 **3억 달러**로 추정됩니다([Calcalist](https://www.calcalistech.com/ctechnews/article/rj5bc1vige)). 취리히 본사는 Check Point의 AI 보안 센터 기반이 됩니다.

경쟁 구도에서 Lakera는 런타임 프롬프트 가드레일 진영의 전문 주자입니다. 모델 공급망과 스캐닝 중심은 [Protect AI](/solutions/protect-ai/), 런타임과 공급망을 한 플랫폼으로 묶는 통합형은 [HiddenLayer](/solutions/hiddenlayer/)를 함께 검토하는 경우가 많습니다. 오픈소스로 직접 구성하려는 팀은 [NVIDIA NeMo Guardrails](/solutions/nemo-guardrails/)를 대안으로 봅니다. 최근 동향으로 Check Point 인수에 따라 기존 Check Point 보안 스택과의 통합이 진행 중입니다([Check Point Blog](https://blog.checkpoint.com/security/check-point-to-acquire-lakera-redefining-security-for-the-ai-era/)).

## 강점과 한계

**강점**
- 입력, 출력, RAG, MCP 흐름을 모두 검사하는 런타임 가드레일
- Gandalf 레드티밍 데이터(8천만 개 이상)로 공격 패턴 학습
- 배포 전(Red)과 런타임(Guard)을 한 플랫폼으로 결합
- Check Point 스택 통합으로 기존 보안 운영과 연계 가능

**한계**
- 가드레일 중심이라 모델, 도구 권한 관리나 암호화 강제는 범위 밖
- 공개 정가가 없어 비용 예측이 어려움
- 탐지율 98%, 오탐 0.5% 미만은 벤더 측정 기준이라 PoC 검증 필요
- 한국어 공격 패턴 탐지 정확도와 CSAP는 공개 자료상 미확인

## 언제 선택하나

**선택**
- LLM 앱의 프롬프트 인젝션과 데이터 유출을 런타임에서 막아야 하는 조직
- 배포 전 레드티밍과 런타임 가드레일을 한 벤더로 묶으려는 경우
- 이미 Check Point 보안 스택을 쓰는 환경
- RAG와 MCP 흐름까지 검사 범위를 넓히려는 경우

**회피**
- 가드레일을 넘어 모델, 도구 권한과 에이전트 행위 통제가 1차 과제인 경우
- 단순 콘텐츠 필터만 필요한 소규모 구성
- 정가 투명성을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| 런타임 가드레일과 레드티밍 결합 | Lakera |
| 모델 공급망과 스캐닝 중심 | [Protect AI](/solutions/protect-ai/) |
| 런타임과 공급망 통합 AI 보안 | [HiddenLayer](/solutions/hiddenlayer/) |
| 오픈소스로 직접 구성 | [NVIDIA NeMo Guardrails](/solutions/nemo-guardrails/) |

## 도입 고려사항

**라이선스.** 엔터프라이즈 구독, 공개 정가 없음. Check Point의 국내 파트너를 통한 도입이 가능합니다.

**데이터 리전.** 실시간 검사 SaaS입니다. 프롬프트와 출력 데이터의 처리, 보관 위치는 도입 시 벤더에 직접 확인합니다.

**CSAP.** Lakera의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았습니다. 공공 도입 검토 시 최신 인증 현황을 확인합니다.

**망분리.** 실시간 검사 SaaS형입니다. 한국 공공과 금융의 망분리 환경 적용 가능성은 별도 검토가 필요하며, 한국어 프롬프트 공격과 우회 패턴의 탐지 정확도는 PoC에서 자체 데이터로 검증합니다.

## 출처

- [Check Point의 Lakera 인수 발표](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/)
- [Check Point Lakera 인수 배경 (Check Point Blog)](https://blog.checkpoint.com/security/check-point-to-acquire-lakera-redefining-security-for-the-ai-era/)
- [Check Point acquires Lakera (CSO Online)](https://www.csoonline.com/article/4058653/check-point-acquires-lakera-to-build-a-unified-ai-security-stack.html)
- [인수 추정액 3억 달러 (Calcalist)](https://www.calcalistech.com/ctechnews/article/rj5bc1vige)
- 비교 솔루션: [Protect AI](/solutions/protect-ai/), [HiddenLayer](/solutions/hiddenlayer/), [NVIDIA NeMo Guardrails](/solutions/nemo-guardrails/), [LLM 게이트웨이 비교](/ai/llm-gateway/), [프롬프트 인젝션 방어 시장](/ai/prompt-injection-defense/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-31, 최종 확인 2026-05-31, 다음 확인 2026-08-31
