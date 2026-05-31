---
title: "Lakera"
description: "LLM 런타임 가드레일과 레드티밍 중심 AI 방어 표준 정합성 진단"
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
| 영역 | Applications (AI 보안) |
| 카테고리 | AI 보안, LLM 런타임 가드레일, AI 레드티밍 |
| 본사 | 스위스 취리히. 2025년 4분기 Check Point에 인수(예정) |
| 차별점 | Gandalf 레드티밍 데이터로 학습한 런타임 가드레일 |
| 성숙도 | Advanced |
| 종합 점수 | 8.3 / 10 |
| 최종 검토 | 2026-05-31 |

## 어떤 제품인가

Lakera는 LLM 애플리케이션을 보호하는 **AI 네이티브 보안 플랫폼**이다. [OWASP LLM Top 10](/framework/owasp-llm-top-10/)의 LLM01 프롬프트 인젝션 대응이 핵심이다.

Check Point가 2025년 4분기 마감 예정으로 인수를 발표했다. 금액은 비공개이나 약 **3억 달러**로 추정된다([Calcalist](https://www.calcalistech.com/ctechnews/article/rj5bc1vige)). 취리히 본사는 Check Point의 AI 보안 센터 기반이 된다([Check Point](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/)).

| 모듈 | 역할 |
|---|---|
| Lakera Guard | 실시간 런타임 보호. LLM 입력, 출력, RAG, MCP 흐름을 검사하고 프롬프트 공격, 데이터 유출, 콘텐츠 위반을 차단 |
| Lakera Red | 배포 전 레드티밍 평가 |
| Gandalf | AI 보안 테스트 플랫폼. 8천만 개 이상 공격 데이터 포인트 |

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따른다. AI 방어 맥락으로 해석한 절대 평가이며 공개 자료를 근거로 한다.

### A축: 일반 기능 (8.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Guard와 Red를 단일 플랫폼으로, Check Point 스택에 통합 진행 |
| A-2 | 가용성 | 2/2 | 실시간 런타임 서비스, 인라인 검사 |
| A-3 | 성능 | 2/2 | 벤더 측정 기준 지연 50ms 미만 |
| A-4 | 운영성 | 1/2 | API 연동과 Gandalf 테스트는 강점이나 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 1/2 | 엔터프라이즈, 공개 정가 없음 |

### B축: 표준 정합성 (8.6 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-APP-AISEC-01 | 항상 검증 | 2/2 | 모든 입력, 출력, RAG, MCP 흐름을 검사 |
| ZTA-APP-AISEC-02 | 최소 권한 | 1/2 | 가드레일 중심이라 모델, 도구 권한 관리는 범위 밖 |
| ZTA-APP-AISEC-03 | 침해 가정 | 2/2 | Lakera Red와 Gandalf로 가드레일 우회를 능동 시험 |
| ZTA-APP-AISEC-04 | 지속 검증 | 2/2 | 런타임에서 실시간 강제 |
| ZTA-APP-AISEC-05 | 컨텍스트 정책 | 2/2 | 프롬프트 공격, 데이터 유출, 콘텐츠 위반 정책 기반 차단 |
| ZTA-APP-AISEC-06 | 전 구간 암호화 | 1/2 | 데이터 유출 탐지는 하나 암호화 강제는 영역 밖 |
| ZTA-APP-AISEC-07 | 가시성 | 2/2 | Gandalf 데이터와 탐지로 AI 위협 가시성 |

원점수 12/14를 10점으로 환산해 **8.6**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.0 |
| B. 표준 정합성 | 8.6 |
| **종합** | **8.3 (Advanced)** |

## 강점과 한계

**강점**
- 입력, 출력, RAG, MCP 흐름을 모두 검사하는 런타임 가드레일
- Gandalf 레드티밍 데이터(8천만 개 이상)로 공격 패턴 학습
- 배포 전(Red)과 런타임(Guard)을 한 플랫폼으로
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

| 상황 | 권장 |
|---|---|
| 런타임 가드레일과 레드티밍 결합 | Lakera |
| 모델 공급망과 스캐닝 중심 | [Protect AI](/solutions/protect-ai/) |
| 런타임 가드레일 제품 비교 | [LLM 게이트웨이 비교](/ai/llm-gateway/) |

## 한국 시장 노트

**라이선스.** 엔터프라이즈 구독, 공개 정가 없음. Check Point의 국내 파트너를 통한 도입이 가능하다.

**데이터 리전.** 실시간 검사 SaaS다. 프롬프트와 출력 데이터의 처리, 보관 위치는 도입 시 벤더에 직접 확인한다.

**CSAP.** Lakera의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았다. 공공 도입 검토 시 최신 인증 현황을 확인한다.

**언어.** 한국어 프롬프트 공격과 우회 패턴의 탐지 정확도는 PoC에서 자체 데이터로 검증한다.

## 출처

- [Check Point의 Lakera 인수 발표](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/)
- [Check Point Lakera 인수 배경 (Check Point Blog)](https://blog.checkpoint.com/security/check-point-to-acquire-lakera-redefining-security-for-the-ai-era/)
- [Check Point acquires Lakera (CSO Online)](https://www.csoonline.com/article/4058653/check-point-acquires-lakera-to-build-a-unified-ai-security-stack.html)
- [인수 추정액 3억 달러 (Calcalist)](https://www.calcalistech.com/ctechnews/article/rj5bc1vige)

비교 솔루션: [Wiz](/solutions/wiz/), [LLM 게이트웨이 비교](/ai/llm-gateway/), [프롬프트 인젝션 방어 시장](/ai/prompt-injection-defense/)

## 면책

본 평가는 공개 자료를 근거로 한다. 실제 운영 환경의 탐지 정확도와 성능은 다를 수 있다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-31, 최종 검토 2026-05-31, 다음 검토 2026-08-31
