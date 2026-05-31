---
title: "CrowdStrike Falcon"
description: "글로벌 EDR/XDR 시장 리더의 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["CrowdStrike", "Falcon", "EDR", "XDR", "Devices"]
categories: ["solution-review"]
pillars: ["Devices"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Devices (확장: Identity, Workloads, Visibility) |
| 카테고리 | EDR, XDR, 통합 보안 플랫폼 |
| 본사 | 미국 텍사스 오스틴 (NASDAQ: CRWD) |
| 차별점 | 단일 경량 에이전트 위에 모듈을 더해 확장 |
| 성숙도 | Advanced (8.9) |
| 종합 점수 | 8.9 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

CrowdStrike는 클라우드 네이티브 EDR 시장의 리더다.

2011년 설립됐고, 단일 경량 에이전트 위에 기능을 모듈처럼 얹어가는 구조가 핵심 차별점이다. 새 기능을 추가할 때마다 에이전트를 새로 설치할 필요가 없다.

## 주요 모듈

| 모듈 | 카테고리 |
|---|---|
| Falcon Prevent | 차세대 백신 (NGAV) |
| Falcon Insight | EDR |
| Falcon OverWatch | 24/7 관리형 위협 헌팅 |
| Falcon Complete | 관리형 탐지, 대응 (MDR) |
| Falcon Adversary Intelligence | 위협 인텔리전스 (구 Falcon X) |
| Falcon Discover | 자산과 앱 인벤토리 |
| Falcon Spotlight | 취약점 관리 |
| Falcon Identity Protection | ITDR |
| Falcon Cloud Security | CNAPP |
| Falcon LogScale | 보안 데이터 레이크 (구 Humio) |
| Falcon Next-Gen SIEM | SIEM |
| Charlotte AI | AI 기반 보안 보조 |

## 평가

평가 척도 정의는 [평가 척도 페이지](/evaluation/scoring-rubric/)를 참고한다.

### A축: 일반 기능 (8.5 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | 단일 콘솔, 단일 에이전트, API, Terraform |
| A-2 | 가용성 | 2/2 | 글로벌 멀티 리전, SLA |
| A-3 | 성능 | 2/2 | 경량 에이전트, 대규모 운영 검증 |
| A-4 | 운영성 | 1.5/2 | UI 직관적, 한국어 일부 |
| A-5 | 비용 투명성 | 1/2 | 가격 비공개, 모듈 분리 과금 |

### B축: 표준 정합성 (9.3 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-DEV-EDR-01 | 항상 검증 | 2/2 | 디바이스 신뢰 점수 기반 조건부 접근 |
| ZTA-DEV-EDR-02 | 최소 권한 | 1.5/2 | 자동 격리와 종료, 권한 통제는 OS에 의존 |
| ZTA-DEV-EDR-03 | 침해 가정 | 2/2 | 사후 분석과 헌팅, 격리가 우수 |
| ZTA-DEV-EDR-04 | 지속 검증 | 2/2 | 24/7 실시간 텔레메트리 |
| ZTA-DEV-EDR-05 | 컨텍스트 정책 | 1.5/2 | 정책 자동화 부분 지원 |
| ZTA-DEV-EDR-06 | 전 구간 암호화 | 2/2 | TLS, 인증서 기반 통신 |
| ZTA-DEV-EDR-07 | 가시성 | 2/2 | LogScale, NG-SIEM, OverWatch 통합 |

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.5 |
| B. 표준 정합성 | 9.3 |
| **종합** | **8.9 (Advanced)** |

### CISA ZTMM Devices Function 매핑

| Function | 단계 | 근거 |
|---|---|---|
| Policy Enforcement & Compliance | Optimal | Prevent와 Insight |
| Asset & Supply Chain Risk | Advanced | Discover, Spotlight |
| Resource Access | Advanced | ZTNA와 외부 솔루션 연계 |
| Device Threat Protection | Optimal | OverWatch, Charlotte AI |
| Visibility & Analytics | Optimal | LogScale, NG-SIEM |

## 언제 선택하나

- 글로벌과 한국을 동시에 운영해야 하는 경우
- 단일 에이전트로 여러 기능을 통합하고 싶은 경우
- 24/7 위협 헌팅을 외부에 위탁하려는 경우 (OverWatch)
- 보안 데이터 레이크를 구축하려는 경우 (LogScale과 NG-SIEM)

## 언제 피하나

- 예산이 빠듯한 경우 (풀 스택 도입은 고비용)
- 온프레미스 콘솔이 강제되는 경우 (SaaS가 기본)
- 의도적으로 여러 벤더를 섞으려는 전략

## 대안 비교

| 상황 | 권장 솔루션 |
|---|---|
| Microsoft 365 통합 우선 | Microsoft Defender for Endpoint |
| 한국 컴플라이언스 우선 | 국내 EDR (예: 안랩) |
| 단일 에이전트, 가격 민감 | SentinelOne |
| 풀 XDR 통합 | Palo Alto Cortex XDR |

## 도입 고려사항

**라이선스.** 한국 파트너가 다수 있다. 가격 협상이 필요하다.

**데이터 리전.** 글로벌. 한국 데이터 리전은 별도로 확인한다.

**정부 클라우드 인증.** CSAP 인증 현황은 정기적으로 확인한다.

**망분리 환경.** 내부망 분리 환경에선 일부 기능이 제한된다.

**도입 사례.** 대기업, 금융권, 공공 부문에 도입 사례가 다수다.

## 강점

- 단일 경량 에이전트로 모듈을 더해갈 수 있음
- OverWatch 관리형 위협 헌팅 수준이 높음 (MDR은 Falcon Complete)
- LogScale과 NG-SIEM의 데이터 통합
- Identity Protection으로 ITDR까지 확장
- 글로벌 위협 인텔리전스 네트워크

## 한계

- 가격 불투명, 모듈 분리 과금
- 정책 관리에 학습 곡선이 있음
- 일부 기능은 SaaS 의존이라 망분리 환경에 제한적

## 출처

- [CrowdStrike 공식 페이지](https://www.crowdstrike.com/)
- [Falcon 플랫폼 문서](https://www.crowdstrike.com/falcon-platform/)
- [CrowdStrike Trust Center](https://www.crowdstrike.com/en-us/trust/)
- [Falcon Identity Protection](https://www.crowdstrike.com/en-us/platform/identity-protection/)

## 비교 솔루션

- [SentinelOne Singularity 정합성 진단](/solutions/sentinelone/)

## 면책

본 평가는 공개 자료를 근거로 한다. 2024년 7월 글로벌 장애 이후 운영 정책이 변할 수 있으니 도입 전에 최신 백서를 확인한다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
