---
title: "CrowdStrike Falcon — 정합성 진단"
description: "글로벌 EDR/XDR 시장 리더 CrowdStrike Falcon의 CISA ZTMM Devices Pillar 정합성 평가"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["CrowdStrike", "Falcon", "EDR", "XDR", "Devices"]
categories: ["solution-review"]
pillars: ["Devices"]
ShowToc: true
---

## 🏷 Quick Facts

| 항목 | 값 |
|---|---|
| **Pillar** | Devices (확장: Identity, Workloads, Visibility) |
| **카테고리** | EDR / XDR / 통합 보안 플랫폼 |
| **본사** | 미국 텍사스 오스틴 (NASDAQ: CRWD) |
| **단일 에이전트** | 모든 모듈을 단일 lightweight agent 로 제공 |
| **CISA 성숙도** | 🟢 Optimal (Devices), 🔵 Advanced (Identity, Workloads) |
| **종합 점수** | 8.8 / 10 |
| **최종 검토일** | 2026-05-30 |

## 1. Overview (개요)

CrowdStrike 는 클라우드 네이티브 EDR 시장의 리더.
2011년 설립, 단일 lightweight 에이전트 위에 **모듈 형태로 기능 확장**하는 구조가 핵심 차별점.

### 주요 모듈 (Falcon 제품군)

| 모듈 | 카테고리 |
|---|---|
| Falcon Prevent | NGAV (차세대 백신) |
| Falcon Insight | EDR |
| Falcon OverWatch | 24/7 위협 헌팅 (MDR) |
| Falcon X | 위협 인텔리전스 |
| Falcon Discover | 자산·앱 인벤토리 |
| Falcon Spotlight | 취약점 관리 |
| Falcon Identity Protection | ITDR (Identity Pillar 확장) |
| Falcon Cloud Security | CNAPP (Workloads Pillar 확장) |
| Falcon LogScale | 보안 데이터 레이크 (구 Humio) |
| Falcon Next-Gen SIEM | SIEM (2024 출시) |
| Charlotte AI | AI 기반 보안 보조 |

### 한국 시장 위치

- 한국 파트너 다수, 국내 대규모 도입 사례 다수
- 가격은 일반적으로 엔드포인트당/월, 모듈 분리 과금
- 정부 클라우드(한국) 인증 진행 중 — 도입 시 확인 필요

## 2. Evaluation (정합성 평가)

### A. 일반 솔루션 기능 (10점)

| ID | 항목 | 점수 | 비고 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | 단일 콘솔, 단일 에이전트, API/Terraform |
| A-2 | 가용성 | 2/2 | 글로벌 멀티 리전, SLA |
| A-3 | 성능 | 2/2 | 경량 에이전트, 대규모 운영 검증 |
| A-4 | 운영성 | 1.5/2 | UI 직관적, 한국어 일부, 학습 곡선 보통 |
| A-5 | 비용·투명성 | 1/2 | 가격 비공개, 모듈 분리 과금 |
| **A 합계** | | **8.5/10** | |

### B. ZT 정합성 (10점)

| ID | 항목 | 점수 | 비고 |
|---|---|:-:|---|
| ZTA-DEV-EDR-01 | Never Trust, Always Verify | 2/2 | 디바이스 신뢰 점수 → 조건부 접근 (ZTNA 통합) |
| ZTA-DEV-EDR-02 | Least Privilege | 1.5/2 | 응답 자동화 (격리·종료) — 권한 통제는 OS 의존 |
| ZTA-DEV-EDR-03 | Assume Breach | 2/2 | 사후 분석·헌팅·격리 우수 |
| ZTA-DEV-EDR-04 | Continuous Verification | 2/2 | 24/7 실시간 텔레메트리 |
| ZTA-DEV-EDR-05 | Context-aware Policy | 1.5/2 | 정책 자동화 부분 지원, 향후 Charlotte AI 보강 |
| ZTA-DEV-EDR-06 | Encryption End-to-End | 2/2 | TLS, 인증서 기반 통신 |
| ZTA-DEV-EDR-07 | Visibility & Analytics | 2/2 | LogScale·NG-SIEM·OverWatch 통합 |
| **B 합계** | | **13/14 → 9.3/10** | |

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.5 |
| B. ZT 정합성 | 9.3 |
| **종합** | **8.9 → 🟢 Optimal (Devices)** |

### CISA ZTMM Devices Function 매핑

| Function | 단계 | 근거 |
|---|---|---|
| Policy Enforcement & Compliance Monitoring | 🟢 Optimal | Falcon Prevent + Insight |
| Asset & Supply Chain Risk Management | 🔵 Advanced | Falcon Discover, Spotlight |
| Resource Access | 🔵 Advanced | ZTNA 통합 (외부 솔루션과 연계) |
| Device Threat Protection | 🟢 Optimal | OverWatch, Charlotte AI |
| Visibility & Analytics | 🟢 Optimal | LogScale, NG-SIEM |

## 3. Design Decisions (도입 가이드)

### 언제 선택하나

- ✅ **글로벌 + 한국 동시 운영**: 다국적 환경 EDR 통합 운영
- ✅ **단일 에이전트 + 다 기능 통합** 선호
- ✅ **24/7 위협 헌팅 위탁 필요**: OverWatch
- ✅ **보안 데이터 레이크 구축**: LogScale + NG-SIEM 도입

### 언제 피하나

- ❌ **극단적 저예산**: 모듈 풀 스택은 고비용
- ❌ **온프레미스 콘솔 강제**: SaaS 형태가 기본
- ❌ **다중 벤더 의도적 분리** 전략

### 대안 비교

| 상황 | 권장 |
|---|---|
| Microsoft 365 통합 우선 | Microsoft Defender for Endpoint |
| 한국 컴플라이언스 우선 | 국내 EDR (안랩 등) |
| 단일 에이전트 + 가격 민감 | SentinelOne |
| 풀 XDR 통합 | Palo Alto Cortex XDR |

## 4. 한국 시장 노트

- **라이선스**: 한국 파트너 다수, 가격 협상 필요
- **데이터 리전**: 글로벌 — 한국 데이터 리전 별도 확인 필요
- **정부 클라우드 인증**: CSAP 인증 현황은 정기 확인 필요
- **망분리 환경**: 내부망 분리된 환경에선 일부 기능 한정
- **국내 사례**: 대기업·금융권·공공 부문 도입 다수

## 5. 강점 / 한계

### 강점
- 단일 lightweight 에이전트 모듈식 확장
- OverWatch MDR 의 위협 헌팅 수준
- LogScale + NG-SIEM 의 데이터 통합
- Identity Protection 으로 ITDR 확장
- 글로벌 위협 인텔리전스 네트워크

### 한계
- 가격 불투명, 모듈 분리 과금으로 풀 스택 시 고비용
- 정책 관리에 일정 학습 곡선
- 일부 기능은 SaaS 의존, 망분리 환경 한정

## 6. 출처

- [CrowdStrike 공식 페이지](https://www.crowdstrike.com/)
- [Falcon 플랫폼 문서](https://www.crowdstrike.com/falcon-platform/)
- [CrowdStrike Trust Center](https://www.crowdstrike.com/en-us/trust/)
- [Falcon Identity Protection](https://www.crowdstrike.com/en-us/platform/identity-protection/)

## 7. 면책

- 본 평가는 **공개 자료** 기반이며, 실제 운영 환경의 가용성·성능은 다를 수 있습니다.
- 2024년 7월 글로벌 장애 이후 출시·운영 정책 변화 가능 — 도입 전 최신 백서 확인 권장.
- 점수는 **상대 비교가 아닌 절대 평가** 입니다.

## 8. 비교 솔루션

- 🚧 SentinelOne — 작성 예정
- 🚧 Microsoft Defender for Endpoint — 작성 예정
- 🚧 Palo Alto Cortex XDR — 작성 예정

---
*최초 발행: 2026-05-30 · 최종 검토일: 2026-05-30 · 다음 검토 예정: 2026-08-30*
