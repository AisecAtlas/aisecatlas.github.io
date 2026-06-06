---
title: "Palo Alto Prisma Access"
description: "Prisma SASE 기반 ZTNA/SASE 솔루션 시장 정리"
date: 2026-05-30
lastmod: 2026-05-31
tags: ["Palo Alto Networks", "Prisma Access", "SASE", "ZTNA", "Networks"]
categories: ["solution-review"]
pillars: ["Networks"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | SASE, ZTNA, SWG, CASB, FWaaS |
| 본사 | 미국 캘리포니아 산타클라라 (NASDAQ: PANW) |
| 핵심 모듈 | Prisma SASE 단일 콘솔(Strata Cloud Manager)에 Prisma Access, Prisma Access Browser, Prisma SD-WAN 통합 |
| 시장 위치 | SASE 시장 주요 사업자, NASDAQ 상장, FY2025 SASE 고객 약 6,300곳 |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

Prisma Access는 Palo Alto Networks의 클라우드 전달 보안 서비스입니다. 방화벽(FWaaS), Secure Web Gateway(SWG), CASB, **ZTNA**를 하나로 묶어 제공합니다.

상위 플랫폼은 **Prisma SASE**로, 세 축으로 구성됩니다. 보안의 Prisma Access, 연결의 Prisma SD-WAN, 그리고 둘을 통합 관리하는 **Strata Cloud Manager**입니다([출처](https://www.tufin.com/blog/palo-alto-sase)). 보안과 네트워크 연결을 한 콘솔에서 다루는 점이 ZTNA 단독 제품과의 차이입니다.

> **왜 중요한가.** 방화벽 자산을 보유한 조직이 기존 보안 정책과 SD-WAN 연결을 단일 콘솔로 묶어 SASE로 전환할 수 있다는 점이 핵심 차별점입니다.

| 모듈 | 역할 |
|---|---|
| Prisma Access | 클라우드 전달 보안. FWaaS, SWG, CASB, ZTNA |
| Prisma Access Browser | 비관리 기기용 보안 브라우저. 최소 권한 접근, 상시 보안 검사 |
| Prisma SD-WAN | 지점, IoT, SaaS, 멀티클라우드 연결 최적화 |
| Strata Cloud Manager | 전 플랫폼 중앙 관리와 통합 가시성 |

## 시장 위치

Prisma Access는 SASE 시장의 주요 상장 사업자입니다. FY2025 SASE ARR은 전년 대비 **35% 증가**했고, SASE 고객은 약 **6,300곳**, Prisma Access Browser는 **600만 시트**를 넘었습니다([PANW FY2025 Q4](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-reports-fiscal-fourth-quarter-and-fiscal-year-2025-financial-results)).

App Acceleration으로 클라우드 앱 연결을 직접 인터넷 대비 최대 5배 가속하는 등 성능 측면 기능을 강화해 왔습니다. 2025년에는 App Acceleration, Agentic AI 대응 등 플랫폼 확장이 이어졌습니다([Network World](https://www.networkworld.com/article/2097575/palo-alto-extends-sase-security-performance-features.html)).

경쟁 구도에서 Prisma Access는 방화벽 자산과 SD-WAN을 한 벤더로 묶으려는 조직에 강점을 가집니다. 순수 클라우드 인라인 보안으로 빠른 ZTNA 전환을 원하면 Zscaler를, 데이터 보호 중심 SSE는 Netskope를 함께 검토하는 경우가 많습니다.

## 강점과 한계

**강점**
- 보안(Prisma Access)과 네트워크 연결(SD-WAN)을 단일 콘솔로 통합
- 비관리 기기를 Prisma Access Browser로 제로 트러스트 범위에 포함
- 사용자, 기기, 앱 컨텍스트 기반 접근 정책, 암호화 트래픽 검사
- App Acceleration으로 클라우드 앱 연결 가속
- 2025년 App Acceleration, Agentic AI 대응 등 플랫폼 확장 지속
- SASE ARR 35% 성장, 고객 약 6,300곳 규모

**한계**
- 플랫폼 범위가 넓어 초기 설계와 정책 튜닝에 학습 비용
- 공개 정가가 없어 비용 예측이 어려움
- 한국어 지원 범위 공개 자료상 확인 제한
- 한국 CSAP 등 국내 인증과 망분리 적용 근거가 공개 자료상 부족

## 언제 선택하나

**선택**
- 보안과 SD-WAN을 한 벤더, 한 콘솔로 묶으려는 조직
- 본사, 지점, 원격 사용자가 혼재한 분산 환경
- 비관리 기기와 협력사 접근까지 제로 트러스트로 통제하려는 경우
- 기존 Palo Alto 방화벽 자산과 정책을 연계하려는 환경

**회피**
- 인라인 클라우드 경유가 규제상 어려운 폐쇄망 위주 환경
- ZTNA 단일 기능만 필요한 소규모 구성 (오버스펙)
- 정가 투명성과 단순 과금을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| 보안과 SD-WAN 통합, 방화벽 자산 연계 | Palo Alto Prisma Access |
| 순수 클라우드 인라인 보안, 빠른 ZTNA 전환 | Zscaler |
| 데이터 보호와 SSE 중심 | Netskope |

## 도입 고려사항

**라이선스.** 모듈별 구독, 공개 정가 없음. 국내 파트너를 통한 도입이 일반적입니다.

**데이터 리전.** 클라우드 전달 서비스. 한국 사용자 트래픽 처리 위치와 국내 접속 지점은 도입 시 벤더에 직접 확인이 필요합니다.

**CSAP.** Prisma Access의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않습니다. 공공 도입 검토 시 최신 인증 현황을 직접 확인합니다.

**망분리.** 클라우드 SaaS형 인라인 보안 플랫폼. 한국 공공과 금융의 망분리 환경 적용 가능성은 별도 검토가 필요하며, 국내 적용 사례는 공개 자료상 확인되지 않습니다.

## 출처

- [Prisma SASE 아키텍처 (Tufin)](https://www.tufin.com/blog/palo-alto-sase)
- [Prisma SASE 3.0 주요 기능 (ITSUS Consulting)](https://www.itsusconsulting.com/palo-alto-networks-prisma-sase-3-0/)
- [Palo Alto extends SASE security features (Network World)](https://www.networkworld.com/article/2097575/palo-alto-extends-sase-security-performance-features.html)
- [Palo Alto Networks FY2025 Q4 실적 발표](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-reports-fiscal-fourth-quarter-and-fiscal-year-2025-financial-results)
- [Prisma SASE 제품 페이지](https://www.paloaltonetworks.com/sase)
- 비교 솔루션: [Zscaler](/solutions/zscaler/), [CrowdStrike Falcon](/solutions/crowdstrike-falcon/), [Okta](/solutions/okta/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 확인 2026-05-31, 다음 확인 2026-08-30
