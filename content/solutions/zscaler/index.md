---
title: "Zscaler"
description: "Zero Trust Exchange 기반 ZTNA/SASE 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Zscaler", "ZTNA", "SASE", "Networks"]
categories: ["solution-review"]
pillars: ["Networks"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Networks (확장: Applications, Visibility) |
| 카테고리 | ZTNA, SASE, 인라인 클라우드 보안 플랫폼 |
| 본사 | 미국 캘리포니아 산호세 (NASDAQ: ZS) |
| 차별점 | 네트워크를 확장하지 않고 사용자와 앱을 직접 연결하는 인사이드아웃 구조 |
| 성숙도 | Advanced |
| 종합 점수 | 8.7 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

Zscaler는 클라우드에서 동작하는 인라인 보안 플랫폼입니다. 핵심은 **Zero Trust Exchange**로, 전 세계 **150개 이상 데이터센터**([출처](https://www.zscaler.com/blogs/cxo-insights/putting-zero-trust-practice-overview-zscalers-platform-offerings-solution-elements-and))에 분산된 SASE 아키텍처 기반입니다.

규모도 근거가 됩니다. FY2025 4분기에 연간반복매출(ARR)이 **30억 달러**를 넘었고 매출은 전년 대비 **21% 증가**했습니다([SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000138/zs-07312025_991.htm)). FY2026 1분기 매출은 **26% 증가**했습니다([SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000203/zs-10312025_991.htm)).

기존 VPN은 사용자를 사내 네트워크에 들여보냅니다. Zscaler는 네트워크를 사용자에게 확장하지 않고, 개별 디바이스와 개별 앱 사이에만 일대일 연결(**segment of one**)을 만듭니다. 앱은 외부에 노출되지 않고 안에서 밖으로 연결을 맺습니다.

> **왜 중요한가.** 네트워크 중심 경계 모델에서 ID 우선, 앱 중심 모델로의 전환이 제로 트러스트의 핵심입니다. Zscaler는 이 전환을 제품 구조로 강제합니다.

| 모듈 | 역할 |
|---|---|
| ZIA (Internet Access) | 인터넷 접근 보안. Cloud Firewall, Sandbox, URL 필터링, DLP, CASB, 브라우저 격리 |
| ZPA (Private Access) | 주력 ZTNA. 사설 앱 원격 접근, VPN 대체 |
| ZB2B | 파트너 연결. 앱 비노출 서비스 개시형 ZTNA |
| ZCP (Cloud Protection) | 워크로드 보안. Posture, Private Access, Communications, Segmentation |
| ZDX (Digital Experience) | 사용자와 앱 성능의 종단 간 가시성 |
| ZDT (Deception) | 디코이로 능동 위협 탐지, lateral movement 차단 |

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따릅니다. 절대 평가이며 공개 자료를 근거로 합니다.

### A축: 일반 기능 (8.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Zero Trust Exchange 단일 플랫폼에 ZIA, ZPA, ZDX 통합 |
| A-2 | 가용성 | 2/2 | 150개 이상 글로벌 데이터센터 분산 |
| A-3 | 성능 | 2/2 | 사용자 인근 데이터센터에서 인라인 검사 |
| A-4 | 운영성 | 1/2 | 모듈이 많아 초기 설계 학습 곡선. 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 1/2 | 모듈별 라이선스, 공개 정가 없음 |

### B축: 표준 정합성 (9.3 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-NET-ZTNA-01 | 항상 검증 | 2/2 | 인증된 사용자만 접근, 인사이드아웃 연결로 암묵적 신뢰 제거 |
| ZTA-NET-ZTNA-02 | 최소 권한 | 2/2 | segment of one으로 디바이스와 앱 사이만 연결 |
| ZTA-NET-ZTNA-03 | 침해 가정 | 2/2 | 앱 비노출, Segmentation과 Deception으로 lateral movement 차단 |
| ZTA-NET-ZTNA-04 | 지속 검증 | 1/2 | 컨텍스트 정책과 ZDX 모니터링은 있으나 지속 재검증 세부 근거는 제한 |
| ZTA-NET-ZTNA-05 | 컨텍스트 정책 | 2/2 | 사용자, 디바이스, 앱 컨텍스트 기반 접근 |
| ZTA-NET-ZTNA-06 | 전 구간 암호화 | 2/2 | TLS/SSL 검사와 암호화 트래픽 처리 |
| ZTA-NET-ZTNA-07 | 가시성 | 2/2 | ZDX로 종단 간 가시성 |

원점수 13/14를 10점으로 환산해 **9.3**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.0 |
| B. 표준 정합성 | 9.3 |
| **종합** | **8.7 (Advanced)** |

## 강점과 한계

**강점**
- 네트워크를 확장하지 않는 인사이드아웃 ZTNA 구조가 제로 트러스트 원칙과 정합
- 인터넷 접근(ZIA)과 사설 앱 접근(ZPA)을 단일 플랫폼으로 통합
- 150개 이상 데이터센터 기반 글로벌 가용성
- 2025년 Zero Trust Segmentation, SAP RISE 네이티브 통합 등 확장 지속

**한계**
- 모듈이 많아 초기 설계와 정책 튜닝에 학습 비용
- 공개 정가가 없어 비용 예측이 어려움
- 한국 CSAP 등 국내 인증과 망분리 적용 근거가 공개 자료상 부족

## 언제 선택하나

**선택**
- VPN을 ZTNA로 대체하려는 조직
- 다수 지점과 원격 사용자가 클라우드와 사내 앱에 동시 접근하는 환경
- 인터넷 접근(ZIA)과 사설 앱 접근(ZPA)을 한 플랫폼으로 묶고 싶을 때
- 랜섬웨어 lateral movement 차단을 위해 세그멘테이션이 필요할 때

**회피**
- 인라인 클라우드 경유가 규제상 어려운 폐쇄망 위주 환경
- 소수 사용자만 단일 앱에 접근하는 단순 구성 (오버스펙)
- 정가 투명성과 단순 과금을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| SASE 통합, 글로벌 인라인 보안 | Zscaler |
| 방화벽 자산과 SASE를 함께 쓰는 환경 | Palo Alto Prisma Access |
| 데이터 보호와 SSE 중심 | Netskope |

## 한국 시장 노트

**라이선스.** 모듈별 구독, 공개 정가 없음. 국내 파트너를 통한 도입이 일반적입니다.

**데이터 리전.** 글로벌 150개 이상 데이터센터를 운영합니다. 한국(서울) 데이터센터의 정확한 운영과 인증 상태는 [Zscaler 데이터센터 맵](https://trust.zscaler.com/data-center-map)에서 별도 확인이 필요합니다.

**CSAP.** Zscaler의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았습니다. 참고로 CSAP는 KISA가 운영하며, AWS 서울 리전, Azure, Google Cloud는 CSAP Low(Group C)를 획득했습니다. 공공 도입 검토 시 최신 인증 현황을 직접 확인하세요.

**망분리.** 클라우드 SaaS형 인라인 보안 플랫폼입니다. 한국 공공과 금융의 망분리 환경 적용 가능성은 별도 검토가 필요하며, 이번 검토에서 국내 적용 사례는 확인하지 못했습니다.

## 출처

- [Zscaler 플랫폼 개요 (CXO Insights)](https://www.zscaler.com/blogs/cxo-insights/putting-zero-trust-practice-overview-zscalers-platform-offerings-solution-elements-and)
- [Zscaler ZTNA 아키텍처 가이드 (The Network DNA)](https://www.thenetworkdna.com/2026/03/zscaler-zero-trust-network-access-ztna.html)
- [Zscaler FY2025 10-K (SEC)](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000158/zs-20250731.htm)
- [Zscaler FY2025 Q4 실적 (SEC 8-K)](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000138/zs-07312025_991.htm)
- [Zscaler FY2026 Q1 실적 (SEC 8-K)](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000203/zs-10312025_991.htm)
- [Zscaler-SAP RISE 통합 발표](https://ir.zscaler.com/news-releases/news-release-details/zscaler-now-offers-natively-integrated-zero-trust-solution-rise)
- [Zscaler 데이터센터 맵](https://trust.zscaler.com/data-center-map)

비교 솔루션: [CrowdStrike Falcon](/solutions/crowdstrike-falcon/), [Okta](/solutions/okta/), [Microsoft Entra ID](/solutions/entra-id/)

## 면책

본 평가는 공개 자료를 근거로 합니다. 실제 운영 환경의 가용성과 성능은 다를 수 있습니다. 절대 평가이지 상대 평가가 아닙니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
