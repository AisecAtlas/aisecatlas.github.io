---
title: "SentinelOne Singularity"
description: "Purple AI 기반 자율형 EDR/XDR 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["SentinelOne", "Singularity", "EDR", "XDR", "Devices"]
categories: ["solution-review"]
pillars: ["Devices"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Devices (확장: Cloud, Identity, Visibility) |
| 카테고리 | EDR, XDR, AI SIEM |
| 본사 | 미국 캘리포니아 마운틴뷰 (NYSE: S) |
| 차별점 | 엔드포인트가 스스로 차단, 격리, 롤백하는 자율 대응과 Purple AI |
| 성숙도 | Advanced |
| 종합 점수 | 8.8 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

SentinelOne Singularity는 **자율형 EDR/XDR 플랫폼**입니다. 엔드포인트, 클라우드, 신원에 걸쳐 위협을 예방, 탐지, 대응합니다([출처](https://www.sentinelone.com/platform/)).

핵심은 두 가지입니다. 첫째, 엔드포인트가 **스스로 방어**합니다. 비인가 프로세스와 파일을 실시간으로 종료, 격리하고, 자동 교정과 롤백으로 스스로 복구해 평균 복구 시간(MTTR)을 줄입니다([출처](https://www.sentinelone.com/platform/singularity-xdr-protection/)). 둘째, AI 보안 분석가 **Purple AI**가 자연어 질문을 위협 헌팅 쿼리로 바꾸고(다국어 지원), 이벤트 요약과 보고서를 생성합니다([출처](https://www.sentinelone.com/platform/)).

규모도 근거가 됩니다. FY2025(2025년 1월 종료) 매출 **8억 2,150만 달러**(전년 대비 **32% 증가**), ARR **9억 2,010만 달러**(**27% 증가**), 10만 달러 이상 고객 **1,411곳**입니다([SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001583708/000158370825000031/sentineloneq425exhibit991.htm)).

| 모듈 | 역할 |
|---|---|
| Singularity Endpoint | EDR. 자율 탐지, 차단, 롤백 |
| Singularity XDR | 엔드포인트, 클라우드, 신원 통합 탐지와 대응 |
| Storyline | 공격 흐름을 자동 상관해 맥락 제공 |
| Purple AI | 자연어 위협 헌팅, 요약, 보고 자동화 |
| Singularity Cloud, Identity | 클라우드 워크로드와 신원 위협 보호 |

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따릅니다. 절대 평가이며 공개 자료를 근거로 합니다.

### A축: 일반 기능 (9.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Singularity 단일 콘솔에 EDR, XDR, 클라우드, 신원 통합 |
| A-2 | 가용성 | 2/2 | SaaS 클라우드 전달, 다중 도메인 커버 |
| A-3 | 성능 | 2/2 | 머신 속도의 실시간 자율 차단과 롤백 |
| A-4 | 운영성 | 2/2 | Purple AI 자연어 질의(다국어)로 학습 곡선 완화 |
| A-5 | 비용 투명성 | 1/2 | 에디션별 구독, 공개 정가 제한 |

### B축: 표준 정합성 (8.6 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-DEV-EDR-01 | 항상 검증 | 2/2 | 엔드포인트 지속 모니터링과 행위 분석 |
| ZTA-DEV-EDR-02 | 최소 권한 | 1/2 | 기기, 앱 통제는 있으나 최소 권한은 EDR 핵심 영역이 아님 |
| ZTA-DEV-EDR-03 | 침해 가정 | 2/2 | 자율 종료, 격리, 롤백으로 침해 가정 대응이 핵심 강점 |
| ZTA-DEV-EDR-04 | 지속 검증 | 2/2 | Storyline 기반 지속 행위 추적 |
| ZTA-DEV-EDR-05 | 컨텍스트 정책 | 2/2 | Storyline이 공격 흐름을 맥락으로 상관 |
| ZTA-DEV-EDR-06 | 전 구간 암호화 | 1/2 | 암호화 강제는 EDR 영역 밖, 탐지 보조에 그침 |
| ZTA-DEV-EDR-07 | 가시성 | 2/2 | 엔드포인트, 클라우드, 신원의 통합 가시성 |

원점수 12/14를 10점으로 환산해 **8.6**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 9.0 |
| B. 표준 정합성 | 8.6 |
| **종합** | **8.8 (Advanced)** |

## 강점과 한계

**강점**
- 엔드포인트가 스스로 차단, 격리, 롤백하는 자율 대응
- Purple AI의 자연어 위협 헌팅과 다국어 지원으로 운영 부담 완화
- Storyline으로 공격 흐름을 맥락 있게 추적
- FY2025 매출 32% 증가, ARR 9억 달러 돌파 규모

**한계**
- 최소 권한과 암호화 강제는 EDR 영역 밖이라 표준 정합성에서 제한
- 공개 정가가 제한적이라 비용 예측이 어려움
- 벤더 측정 수치(탐지 63% 단축, MTTR 55% 감소)는 자체 발표 기준
- 한국 CSAP 등 국내 인증 근거는 공개 자료상 부족

## 언제 선택하나

**선택**
- 자율 대응과 롤백으로 랜섬웨어 복구 시간을 줄이려는 조직
- SOC 인력이 부족해 AI 보조 위협 헌팅이 필요한 환경
- 엔드포인트에서 클라우드, 신원까지 XDR로 묶으려는 경우
- 자연어 기반 조사로 분석가 학습 곡선을 낮추려는 팀

**회피**
- EDR보다 신원이나 네트워크 제로 트러스트가 우선인 경우
- 단순 백신 수준만 필요한 소규모 환경 (오버스펙)
- 정가 투명성과 단순 과금을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| 자율 대응과 AI 위협 헌팅 중심 EDR/XDR | SentinelOne Singularity |
| 위협 인텔리전스와 MDR 결합 EDR | CrowdStrike Falcon |
| 네트워크 경계 제로 트러스트 | Zscaler, Netskope |

## 한국 시장 노트

**라이선스.** 에디션별 구독. 국내 파트너를 통한 도입이 일반적입니다.

**데이터 리전.** SaaS 클라우드 전달입니다. 한국 데이터 보관과 처리 위치는 도입 시 벤더에 직접 확인이 필요합니다.

**CSAP.** SentinelOne의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았습니다. 공공 도입 검토 시 최신 인증 현황을 직접 확인하세요.

**망분리.** 클라우드 관리형 EDR입니다. 한국 공공과 금융의 망분리 환경에서는 관리 서버 위치와 통신 방식 검토가 필요하며, 이번 검토에서 국내 적용 사례는 확인하지 못했습니다.

## 출처

- [SentinelOne Singularity 플랫폼](https://www.sentinelone.com/platform/)
- [Singularity XDR 동작 방식](https://www.sentinelone.com/platform/singularity-xdr-protection/)
- [Singularity Complete](https://www.sentinelone.com/platform/singularity-complete/)
- [SentinelOne FY2025 Q4 실적 (SEC 8-K)](https://www.sec.gov/Archives/edgar/data/0001583708/000158370825000031/sentineloneq425exhibit991.htm)

비교 솔루션: [CrowdStrike Falcon](/solutions/crowdstrike-falcon/), [Wiz](/solutions/wiz/), [Zscaler](/solutions/zscaler/)

## 면책

본 평가는 공개 자료를 근거로 합니다. 실제 운영 환경의 가용성과 성능은 다를 수 있습니다. 절대 평가이지 상대 평가가 아닙니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
