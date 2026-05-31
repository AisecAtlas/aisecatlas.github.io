---
title: "Netskope"
description: "NewEdge 사설 클라우드 기반 SSE/SASE 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Netskope", "SSE", "SASE", "CASB", "Networks"]
categories: ["solution-review"]
pillars: ["Networks"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Networks (확장: Data, Visibility) |
| 카테고리 | SSE, SASE (SWG, CASB, ZTNA, FWaaS) |
| 본사 | 미국 캘리포니아 산타클라라 (NASDAQ: NTSK) |
| 차별점 | 자체 소유 사설 보안 클라우드(NewEdge)와 단일 Zero Trust Engine |
| 성숙도 | Advanced |
| 종합 점수 | 8.7 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

Netskope One은 클라우드에서 보안을 전달하는 **SSE/SASE 플랫폼**이다. SWG, CASB, ZTNA, FWaaS를 묶고 SD-WAN, RBI, DLP, DEM까지 통합한다([출처](https://www.netskope.com/products/secure-access-service-edge)).

기반은 **NewEdge**다. Netskope가 데이터센터와 피어링, 라우팅을 직접 소유하고 운영하는 사설 보안 클라우드로, 전 세계 **75개 이상 리전**이 모두 풀 컴퓨트 데이터센터다([출처](https://www.sdxcentral.com/news/netskope-unveils-ai-fast-path-to-boost-newedge-cloud-performance-and-security/)). 모든 서비스의 접근 결정을 하나로 통제하는 **Zero Trust Engine**이 단일 정책 두뇌 역할을 하고, Cloud Confidence Index가 **8만 5천 개 이상 앱**의 위험도를 평가해 위험 기반 통제를 적용한다([출처](https://www.netskope.com/products/security-service-edge)).

규모도 근거가 된다. 2025년 7월 기준 ARR **7억 700만 달러**, 고객 **4,300곳 이상**, Fortune 100의 **30% 이상**이다. 2025년 9월 NASDAQ에 상장(NTSK)해 약 9억 800만 달러를 조달했다([CNBC](https://www.cnbc.com/2025/09/18/netskope-ipo-stock-nasdaq-ntsk.html)).

| 모듈 | 역할 |
|---|---|
| Next-Gen SWG | 웹과 클라우드 트래픽 인라인 검사 |
| CASB | SaaS 앱 가시성과 통제 |
| ZTNA | 사설 앱 제로 트러스트 접근 |
| FWaaS | 클라우드 방화벽 |
| DLP, RBI | 데이터 유출 방지, 원격 브라우저 격리 |
| SD-WAN, DEM | 지점 연결, 디지털 경험 모니터링 |

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따른다. 절대 평가이며 공개 자료를 근거로 한다.

### A축: 일반 기능 (8.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Netskope One 단일 플랫폼, Zero Trust Engine 단일 정책 |
| A-2 | 가용성 | 2/2 | NewEdge 75개 이상 리전, 자체 소유 풀 컴퓨트 데이터센터 |
| A-3 | 성능 | 2/2 | 사설 클라우드 직접 운영, AI Fast Path로 AI 앱 경로 최적화 |
| A-4 | 운영성 | 1/2 | 서울 데이터센터로 한국 지연은 양호하나 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 1/2 | 모듈별 구독, 공개 정가 없음 |

### B축: 표준 정합성 (9.3 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-NET-SSE-01 | 항상 검증 | 2/2 | Zero Trust Engine이 모든 접근 결정을 통제 |
| ZTA-NET-SSE-02 | 최소 권한 | 2/2 | ZTNA 기반 사설 앱 최소 권한 접근 |
| ZTA-NET-SSE-03 | 침해 가정 | 1/2 | 위험 기반 통제는 있으나 lateral movement 차단 세부 근거는 제한 |
| ZTA-NET-SSE-04 | 지속 검증 | 2/2 | 단일 정책 두뇌의 지속 평가, Cloud Confidence Index 위험 평가 |
| ZTA-NET-SSE-05 | 컨텍스트 정책 | 2/2 | 앱 위험도(8만 5천 개 이상)와 기기 위험 기반 정책 |
| ZTA-NET-SSE-06 | 전 구간 암호화 | 2/2 | 인라인 클라우드에서 암호화 트래픽 검사 |
| ZTA-NET-SSE-07 | 가시성 | 2/2 | CASB와 DEM으로 앱과 경험 가시성 |

원점수 13/14를 10점으로 환산해 **9.3**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.0 |
| B. 표준 정합성 | 9.3 |
| **종합** | **8.7 (Advanced)** |

## 강점과 한계

**강점**
- 데이터센터를 직접 소유한 NewEdge로 성능과 경로를 통제
- 단일 Zero Trust Engine이 전 서비스의 접근 결정을 일관 통제
- CASB와 SaaS 가시성에 강점, 앱 위험도 8만 5천 개 이상 평가
- 서울 데이터센터로 한국 사용자 지연이 양호

**한계**
- 위험 기반 통제 중심으로 lateral movement 차단 세부 근거는 제한
- 공개 정가가 없어 비용 예측이 어려움
- 2025년 7월 기준 순손실 상태로 수익성은 아직 과제
- 한국 CSAP 등 국내 인증 근거는 공개 자료상 부족

## 언제 선택하나

**선택**
- SaaS와 웹 트래픽 가시성, CASB가 핵심 요구인 조직
- 데이터센터 직접 소유 기반의 일관된 성능을 중시하는 환경
- 한국과 북아시아 사용자 지연을 줄이려는 다국적 기업
- SWG, CASB, ZTNA를 단일 정책 엔진으로 묶으려는 경우

**회피**
- 인라인 클라우드 경유가 규제상 어려운 폐쇄망 위주 환경
- 방화벽 자산과의 깊은 연계가 최우선인 경우 (Palo Alto 계열 고려)
- 정가 투명성과 단순 과금을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| SaaS 가시성과 CASB 중심 SSE | Netskope |
| 순수 ZTNA 전환과 글로벌 인라인 보안 | Zscaler |
| 보안과 SD-WAN, 방화벽 자산 통합 | Palo Alto Prisma Access |

## 도입 고려사항

**라이선스.** 모듈별 구독, 공개 정가 없음. 국내 파트너를 통한 도입이 일반적이다.

**데이터 리전.** Netskope는 NewEdge 네트워크에 **서울 데이터센터**를 운영한다. 한국과 북아시아 사용자에게 낮은 지연과 높은 성능을 제공한다고 밝혔다([출처](https://www.netskope.com/press-releases/netskope-launches-newedge-data-center-expanding-coverage-across-north-asia)). 국내 리전이 공개 확인되는 점은 다른 인라인 SASE 대비 장점이다.

**CSAP.** Netskope의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않는다. 공공 도입 검토 시 최신 인증 현황을 직접 확인한다.

**망분리.** 클라우드 전달 인라인 보안 플랫폼. 한국 공공과 금융의 망분리 환경 적용 가능성은 별도 검토가 필요하며, 이번 검토에서 국내 적용 사례는 확인하지 못했다.

## 출처

- [Netskope One SASE 제품 페이지](https://www.netskope.com/products/secure-access-service-edge)
- [Netskope One SSE 제품 페이지](https://www.netskope.com/products/security-service-edge)
- [Netskope AI Fast Path와 NewEdge (SDxCentral)](https://www.sdxcentral.com/news/netskope-unveils-ai-fast-path-to-boost-newedge-cloud-performance-and-security/)
- [Netskope IPO와 재무 (CNBC)](https://www.cnbc.com/2025/09/18/netskope-ipo-stock-nasdaq-ntsk.html)
- [Netskope 서울 NewEdge 데이터센터 (Netskope 보도자료)](https://www.netskope.com/press-releases/netskope-launches-newedge-data-center-expanding-coverage-across-north-asia)

비교 솔루션: [Zscaler](/solutions/zscaler/), [Palo Alto Prisma Access](/solutions/prisma-access/), [Wiz](/solutions/wiz/)

## 면책

본 평가는 공개 자료를 근거로 한다. 실제 운영 환경의 가용성과 성능은 다를 수 있다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
