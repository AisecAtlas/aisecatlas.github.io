---
title: "Harmonic Security"
description: "브라우저 기반 Shadow AI 발견과 GenAI 데이터 유출 방지 솔루션 정리"
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Harmonic Security", "Shadow AI", "GenAI DLP", "Data"]
categories: ["solution-review"]
pillars: ["Data"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | Shadow AI 발견, GenAI 데이터 보호 |
| 본사 | 비상장 스타트업 (2023 설립, 미국, 영국) |
| 핵심 모듈 | Harmonic Protect — 브라우저 확장 + 엔드포인트 에이전트 + 인라인 SLM |
| 시장 위치 | Shadow AI 발견 순수 특화(pure-play). Series A $17.5M(2024-10) |
| 최종 확인일 | 2026-06-06 |

## 어떤 제품인가

Harmonic Security는 직원의 생성형 AI 사용을 발견하고, 민감 데이터가 AI 도구로 새는 것을 막는 데이터 보호 플랫폼입니다. 제품명은 **Harmonic Protect**. 설계의 중심은 **브라우저 확장**입니다.

다른 Shadow AI 통제가 네트워크 프록시에 의존하는 것과 달리, Harmonic은 **브라우저 확장(Chrome, Edge, Firefox, Safari)을 주 센서**로 쓰고, 워크스테이션의 데스크톱 AI 앱과 에이전트를 위해 **엔드포인트 에이전트**를 더합니다. 프롬프트는 DOM에서 직접 읽히므로 TLS 암호화나 인증서 핀닝과 무관하게 내용을 봅니다. 캡처 메커니즘의 일반 비교는 [AI 사용 가시화](/ai/ai-usage-visibility/)가 정리합니다.

> **왜 브라우저인가.** 직원의 미승인 AI 사용은 대부분 웹 브라우저에서 일어납니다. 프록시는 인증서 핀닝 앱과 SaaS 내장 AI에서 사각이 생기지만, DOM 계층 캡처는 렌더된 화면을 읽어 개인 계정 사용까지 포착합니다.

| 모듈 | 역할 |
|---|---|
| 브라우저 확장 | 프롬프트, 붙여넣기, 업로드를 DOM에서 실시간 감시, 인라인 차단과 코칭 |
| 엔드포인트 에이전트 | 데스크톱 AI 앱과 워크스테이션 AI 에이전트 커버 |
| 인라인 SLM | 목적 특화 소형 언어 모델로 민감 데이터 탐지, 편집(redact) |
| 발견과 인벤토리 | 사용 중인 AI 도구를 지속 발견과 분류, 위험 프로파일링 |

## 시장 위치

Harmonic Security는 Shadow AI 발견에 특화한 순수 플레이입니다. 2023년 설립됐고 창업자는 Digital Shadows를 만든 Alastair Paterson과 Bryan Woolgar-O'Neil입니다.

투자는 2023년 10월 시드 **$7M**(Ten Eleven Ventures), 2024년 10월 2일 시리즈 A **$17.5M**(Next47 주도)로 누적 **$24.5M 이상**입니다([Business Wire](https://www.businesswire.com/news/home/20241002920021/en/)).

경쟁 구도에서 Harmonic은 단말 기반(브라우저, 엔드포인트) 진영입니다. 네트워크 인라인 진영의 [WitnessAI](/solutions/witnessai/), 발견과 강한 DLP를 묶은 Nightfall AI, 데이터 리니지 기반의 Cyberhaven과 함께 검토되는 경우가 많습니다. 이미 SASE/SSE(Zscaler, Netskope)를 쓰는 조직은 플랫폼 네이티브 GenAI 모듈과 중복 여부를 따집니다.

## 강점과 한계

**강점**
- 브라우저 DOM 캡처로 TLS, 핀닝과 무관하게 프롬프트 내용 가시화, 프록시 사각(SaaS 내장 AI, 개인 계정) 포착
- 사용 중 AI 도구를 지속 발견과 분류, 도구별 위험 프로파일(데이터 정책, 학습 사용, 지리적 위치)
- 인라인 SLM으로 제출 전 민감 데이터 탐지, 편집, 실시간 차단과 직원 코칭
- 개인, 무료 계정의 업무 사용 탐지

**한계**
- 브라우저 밖(데스크톱 AI 앱, IDE 플러그인)은 엔드포인트 에이전트 설치 범위에 의존
- 확장과 에이전트가 단말에 배포, 유지돼야 함, 미설치 단말은 사각
- 공개 정가 없음, 비상장 초기 단계로 한국 레퍼런스, 총판 공개 자료 미확인

## 언제 선택하나

**선택**
- Shadow AI 발견이 1차 목표이고 단말에 확장과 에이전트 배포가 가능한 조직
- 인증서 핀닝 앱과 SaaS 내장 AI까지 프롬프트 내용을 봐야 하는 경우
- 개인 계정 AI 사용을 식별, 차단하려는 조직

**회피**
- 단말 소프트웨어 배포가 불가능한 환경(브라우저 확장 통제 불가)
- 이미 SASE/SSE의 GenAI 모듈로 발견이 충분한 경우(중복)
- 비브라우저 AI 트래픽 비중이 큰 환경

| 상황 | 권장 솔루션 |
|---|---|
| 브라우저 기반 Shadow AI 발견 | Harmonic Security |
| 단말 설치 없이 네트워크 인라인 | [WitnessAI](/solutions/witnessai/) |
| 이미 SASE/SSE 운영 | Zscaler, Netskope의 GenAI 모듈 |

## 도입 고려사항

**라이선스.** 공개 정가 없음. 비상장 초기 단계로 국내 도입 경로는 직접 문의가 필요합니다.

**데이터 리전.** 브라우저, 엔드포인트 텔레메트리의 처리, 보관 위치를 확인합니다. 한국 데이터 리전 보장은 공개 자료에서 확인되지 않습니다.

**CSAP.** 한국 클라우드 보안인증 획득 여부는 공개 자료에서 확인되지 않습니다. 단말 기반 캡처는 클라우드 경유 없이 적용 가능하나, 백엔드 분석의 처리 위치를 확인합니다.

**개인정보보호법.** 프롬프트, 붙여넣기 내용을 단말에서 읽으므로, 직원 모니터링 범위와 동의, 처리 데이터 최소화를 사전 검토합니다.

**망분리.** 단말 기반이라 인라인 클라우드 경유 없이 적용 가능하나, 백엔드 SLM 분석의 위치와 통신 경로를 확인합니다.

## 출처

- [Harmonic Security — Shadow AI Detection](https://www.harmonic.security/solutions/shadow-ai-detection)
- [Harmonic Security — Harmonic Protect](https://www.harmonic.security/products/harmonic-protect)
- [Harmonic Security 시리즈 A $17.5M (Business Wire)](https://www.businesswire.com/news/home/20241002920021/en/)
- 비교 솔루션: [WitnessAI](/solutions/witnessai/), [AI 사용 가시화](/ai/ai-usage-visibility/)

## 면책

본 정리는 공개 자료를 근거로 한다. 제품 사양과 시장 상황은 빠르게 바뀐다. 도입 전 최신 공식 발표를 확인한다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
