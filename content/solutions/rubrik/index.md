---
title: "Rubrik"
description: "Zero Trust 데이터 보안과 사이버 복원력 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Rubrik", "데이터 보안", "DSPM", "사이버 복원력", "Data"]
categories: ["solution-review"]
pillars: ["Data"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Data (확장: Visibility) |
| 카테고리 | 사이버 복원력, 데이터 보안 자세 관리(DSPM), 백업과 복구 |
| 본사 | 미국 캘리포니아 팔로알토 (NYSE: RBRK) |
| 차별점 | 불변 백업과 DSPM을 단일 사이버 복원력 플랫폼으로 결합 |
| 성숙도 | Advanced |
| 종합 점수 | 8.3 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

Rubrik은 데이터를 지키고 공격 이후 복구하는 **사이버 복원력 플랫폼**입니다. 스스로 "Zero Trust 데이터 보안"을 표방합니다([출처](https://www.rubrik.com/products)).

Rubrik Security Cloud는 **DSPM**(데이터 보안 자세 관리)과 **사이버 복구**를 한 플랫폼에 결합했습니다. Rubrik DSPM은 2025년 초 정식 출시됐고, 민감 데이터를 자동으로 발견, 분류, 모니터링해 위반을 교정하고 접근을 최소화하며 위협을 조기에 탐지합니다([출처](https://www.rubrik.com/products/data-security-posture-management)). 기존 백업의 핵심은 **불변 백업 아키텍처**입니다. 백업 데이터가 랜섬웨어에 훼손되지 않도록 막아, 조직의 마지막 방어선을 지킵니다([출처](https://www.rubrik.com/)).

규모도 근거가 됩니다. FY2025(2025년 1월 종료) 구독 ARR **10억 9,260만 달러**(전년 대비 **39% 증가**), 매출 **2억 5,810만 달러**(**47% 증가**), 10만 달러 이상 구독 고객 **2,246곳**입니다([Rubrik IR](https://ir.rubrik.com/news-events/press-releases/news-details/2025/Rubrik-Reports-Fourth-Quarter-and-Fiscal-Year-2025-Financial-Results/default.aspx)).

| 모듈 | 역할 |
|---|---|
| 사이버 복구 | 불변 백업과 공격 후 데이터 복원 |
| Rubrik DSPM | 민감 데이터 발견, 분류, 위험 교정 |
| 위협 탐지 | 이상 데이터 활동을 준실시간 경보 |
| 데이터 분류 | Microsoft MIP 레이블로 클라우드, SaaS, 온프레미스 분류 |

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따릅니다. 절대 평가이며 공개 자료를 근거로 합니다.

### A축: 일반 기능 (8.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Rubrik Security Cloud 단일 플랫폼에 DSPM과 사이버 복구 결합 |
| A-2 | 가용성 | 2/2 | 클라우드 관리형, 엔터프라이즈, 클라우드, SaaS 커버 |
| A-3 | 성능 | 2/2 | 준실시간 위협 탐지, 기존 환경 내 DSPM 즉시 활성화 |
| A-4 | 운영성 | 1/2 | 기존 고객은 수개월 배포 없이 활성화 가능. 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 1/2 | 구독 기반, 공개 정가 없음 |

### B축: 표준 정합성 (8.6 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-DATA-DSPM-01 | 항상 검증 | 2/2 | 데이터 위험과 위협을 지속 모니터링 |
| ZTA-DATA-DSPM-02 | 최소 권한 | 2/2 | DSPM이 과다 노출 데이터 식별, 접근 최소화 유도 |
| ZTA-DATA-DSPM-03 | 침해 가정 | 2/2 | 불변 백업으로 랜섬웨어 후에도 복구, 마지막 방어선 |
| ZTA-DATA-DSPM-04 | 지속 검증 | 2/2 | 이상 데이터 활동을 준실시간 탐지 |
| ZTA-DATA-DSPM-05 | 컨텍스트 정책 | 1/2 | 분류와 위험 경보는 하나 컨텍스트 기반 접근 강제는 제한 |
| ZTA-DATA-DSPM-06 | 전 구간 암호화 | 1/2 | 백업 불변성과 보호는 강하나 전체 데이터 암호화 강제는 영역 밖 |
| ZTA-DATA-DSPM-07 | 가시성 | 2/2 | 민감 데이터 발견과 분류로 데이터 가시성 강점 |

원점수 12/14를 10점으로 환산해 **8.6**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.0 |
| B. 표준 정합성 | 8.6 |
| **종합** | **8.3 (Advanced)** |

## 강점과 한계

**강점**
- 불변 백업으로 랜섬웨어 후 복구를 보장하는 마지막 방어선
- DSPM과 사이버 복구를 단일 플랫폼으로 결합
- 민감 데이터 발견과 분류로 데이터 가시성 강점
- FY2025 구독 ARR 39% 증가, 10억 달러 돌파 규모

**한계**
- 컨텍스트 기반 접근 강제와 전 구간 암호화는 백업, DSPM 영역 밖
- 네트워크나 신원 접근 통제를 대체하지 않음 (보완재)
- 공개 정가가 없어 비용 예측이 어려움
- 한국 CSAP 등 국내 인증 근거는 공개 자료상 부족

## 언제 선택하나

**선택**
- 랜섬웨어 복구와 데이터 복원력이 최우선인 조직
- 민감 데이터의 위치와 노출을 파악해야 하는 환경(DSPM)
- 백업과 데이터 보안을 한 플랫폼으로 묶으려는 경우
- 규제로 데이터 분류와 보존이 요구되는 산업

**회피**
- 네트워크나 신원 접근 통제가 1차 과제인 경우 (별도 솔루션 필요)
- 백업 인프라를 이미 충분히 갖춘 단순 환경
- 정가 투명성과 단순 과금을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| 데이터 복원력과 DSPM | Rubrik |
| 클라우드 자세 관리와 공격 경로 | Wiz |
| 엔드포인트 위협 대응 | SentinelOne, CrowdStrike Falcon |

## 한국 시장 노트

**라이선스.** 구독 기반, 공개 정가 없음. 국내 파트너를 통한 도입이 일반적입니다.

**데이터 리전.** 클라우드 관리형입니다. 백업 데이터와 분류 메타데이터의 보관 위치는 도입 시 벤더에 직접 확인이 필요합니다. 데이터 주권이 중요한 한국 규제 환경에서 특히 확인할 항목입니다.

**CSAP.** Rubrik의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았습니다. 공공 도입 검토 시 최신 인증 현황을 직접 확인하세요.

**망분리.** 한국 공공과 금융의 망분리 환경에서는 백업 관리 서버 위치와 통신 방식 검토가 필요하며, 이번 검토에서 국내 적용 사례는 확인하지 못했습니다.

## 출처

- [Rubrik 제품 개요](https://www.rubrik.com/products)
- [Rubrik DSPM](https://www.rubrik.com/products/data-security-posture-management)
- [Rubrik DSPM, AI 도입 지원 발표](https://www.rubrik.com/company/newsroom/press-releases/24/rubrik-data-security-posture-management-unblocks-ai-adoption-with-single-platform)
- [Rubrik FY2025 Q4 실적 (Rubrik IR)](https://ir.rubrik.com/news-events/press-releases/news-details/2025/Rubrik-Reports-Fourth-Quarter-and-Fiscal-Year-2025-Financial-Results/default.aspx)

비교 솔루션: [Wiz](/solutions/wiz/), [SentinelOne Singularity](/solutions/sentinelone/), [CrowdStrike Falcon](/solutions/crowdstrike-falcon/)

## 면책

본 평가는 공개 자료를 근거로 합니다. 실제 운영 환경의 가용성과 성능은 다를 수 있습니다. 절대 평가이지 상대 평가가 아닙니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
