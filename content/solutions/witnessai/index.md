---
title: "WitnessAI"
description: "에이전트리스 네트워크 인라인 기반 AI 사용 가시화와 거버넌스 솔루션 정리"
date: 2026-06-06
lastmod: 2026-06-06
tags: ["WitnessAI", "Shadow AI", "AI Governance", "Data"]
categories: ["solution-review"]
pillars: ["Data"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | AI 사용 가시화, AI 거버넌스, 에이전트 통제 |
| 본사 | 비상장 스타트업 (미국 캘리포니아, 2023 설립) |
| 핵심 모듈 | 관측(observability) + 정책 거버넌스 + 데이터와 사용자 보호 |
| 시장 위치 | 에이전트리스 네트워크 인라인 진영. 전략 투자 $58M(2026-01) |
| 최종 확인일 | 2026-06-06 |

## 어떤 제품인가

WitnessAI는 직원과 AI(사람과 에이전트)의 상호작용을 가시화하고 정책을 거는 "Secure AI Enablement" 플랫폼입니다. 단말에 아무것도 설치하지 않는 **에이전트리스 네트워크 인라인** 방식이 특징입니다.

사용자와 LLM 사이의 인프라 계층에 인라인으로 끼어 밀리초 지연으로 모든 AI 상호작용을 봅니다. 단말 설치가 없어 배포가 단순하고, 데스크톱 AI 앱처럼 엔드포인트 도구가 약한 영역도 커버합니다. 단, 네트워크 인라인이므로 콘텐츠 가시성은 TLS 처리 구조에 의존합니다 — 캡처 메커니즘 일반 비교는 [AI 사용 가시화](/ai/ai-usage-visibility/)가 정리합니다.

> **차별점: 의도 분류.** WitnessAI는 에이전트의 행동이 프롬프트의 의도와 일치하는지 검사하는 의도 분류(intention classification) 모델을 둡니다. 단순 입출력 차단을 넘어 에이전트의 일탈 행동을 봅니다.

| 모듈 | 역할 |
|---|---|
| 관측(observability) | 사람과 에이전트의 모든 AI 상호작용을 네트워크 인라인으로 가시화, Shadow AI 발견 |
| 정책 거버넌스 | 프롬프트와 응답에 인라인 정책 적용 |
| 데이터와 사용자 보호 | 민감 데이터 유출 방지, 사용자별 통제 |
| 에이전트 거버넌스 | 의도 분류로 에이전트 행동이 프롬프트 의도와 맞는지 검증(2026-01 추가) |

## 시장 위치

WitnessAI는 단말 설치 없는 네트워크 인라인 AI 거버넌스 진영의 대표 주자입니다. 2023년 설립됐습니다.

투자는 2024년 5월 시리즈 A **$27.5M**(GV와 Ballistic Ventures 공동 주도), 2026년 1월 13일 전략 투자 **$58M**(Sound Ventures 주도, Fin Capital, Qualcomm Ventures, Samsung Ventures, Forgepoint 참여)로 누적 약 **$85.5M**입니다([PR Newswire](https://www.prnewswire.com/news-releases/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents-302659319.html)).

경쟁 구도에서 WitnessAI는 단말 기반의 [Harmonic Security](/solutions/harmonic-security/), Nightfall AI와 대비됩니다. 단말 설치 제약이 있는 환경에서 인라인 방식의 장점이 큽니다. 이미 SASE/SSE(Zscaler AI Access Security, Netskope, Palo Alto AI Access Security)를 쓰는 조직은 플랫폼 네이티브 GenAI 모듈과 역할이 겹치는지 따집니다.

## 강점과 한계

**강점**
- 단말 설치 없는 에이전트리스 인라인, 배포 단순, 밀리초 지연
- 사람과 에이전트 AI 상호작용을 단일 계층에서 가시화
- 의도 분류로 에이전트 일탈 행동 탐지, 에이전트 거버넌스로 확장
- 2026년 1월 $58M 전략 투자로 자본 충분, 글로벌 확장 단계

**한계**
- 네트워크 인라인이라 콘텐츠 가시성이 TLS 처리 구조에 의존, 핀닝 앱 처리 방식은 별도 확인 필요
- 단말 로컬 캡처(브라우저 DOM)가 아니므로 일부 SaaS 내장 AI, 오프네트워크 사용은 인라인 경로를 벗어나면 사각
- 비상장 단계로 공개 정가 없음, 한국 레퍼런스 공개 자료 제한

## 언제 선택하나

**선택**
- 단말 소프트웨어 배포가 어려워 인라인 방식이 필요한 조직
- 사람뿐 아니라 AI 에이전트의 행동까지 거버넌스 대상에 넣으려는 경우
- 배포 단순성과 광범위 커버리지를 우선하는 엔터프라이즈

**회피**
- 인라인 클라우드 경유가 규제상 어려운 폐쇄망 위주 환경
- 브라우저 DOM 단위의 프롬프트 내용 캡처가 1차 요건인 경우(단말 기반이 적합)
- 이미 SASE/SSE GenAI 모듈로 가시화가 충분한 경우

| 상황 | 권장 솔루션 |
|---|---|
| 단말 설치 없는 인라인 AI 거버넌스 | WitnessAI |
| 브라우저 기반 Shadow AI 발견 | [Harmonic Security](/solutions/harmonic-security/) |
| 이미 SASE/SSE 운영 | Zscaler, Netskope, Palo Alto의 AI Access |

## 도입 고려사항

**라이선스.** 공개 정가 없음. 비상장 단계로 국내 도입 경로는 직접 문의가 필요합니다.

**데이터 리전.** 인라인 처리 위치와 텔레메트리 보관 리전을 확인합니다. 2026-01 투자에 Samsung Ventures, Qualcomm Ventures가 참여해 국내 진출 가능성은 있으나 공식 한국 리전, 총판은 미발표입니다.

**CSAP.** 한국 클라우드 보안인증 획득 여부는 공개 자료에서 확인되지 않습니다. 클라우드 인라인 경유는 공공 도입 시 인증과 리전 확인이 선행됩니다.

**개인정보보호법.** 인라인으로 프롬프트와 응답을 처리하므로, 직원 AI 사용 모니터링 범위와 동의, 처리 최소화를 사전 검토합니다.

**망분리.** 클라우드 인라인 방식이라 망분리 환경 적용 가능성은 별도 검토가 필요하며, 국내 적용 사례는 공개 자료상 확인되지 않습니다.

## 출처

- [WitnessAI](https://witness.ai/)
- [WitnessAI 전략 투자 $58M (PR Newswire, 2026-01)](https://www.prnewswire.com/news-releases/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents-302659319.html)
- [WitnessAI 시리즈 A $27.5M (PR Newswire, 2024-05)](https://www.prnewswire.com/news-releases/witnessai-raises-27-5-million-to-enable-safe-use-of-ai-302151702.html)
- 비교 솔루션: [Harmonic Security](/solutions/harmonic-security/), [AI 사용 가시화](/ai/ai-usage-visibility/)

## 면책

본 정리는 공개 자료를 근거로 한다. 제품 사양과 시장 상황은 빠르게 바뀐다. 도입 전 최신 공식 발표를 확인한다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
