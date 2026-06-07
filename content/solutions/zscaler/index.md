---
title: "Zscaler"
description: "Zero Trust Exchange 기반 ZTNA/SASE 솔루션 시장 정리"
date: 2026-05-30
lastmod: 2026-05-31
tags: ["Zscaler", "ZTNA", "SASE", "Networks"]
categories: ["solution-review"]
pillars: ["Networks"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | ZTNA, SASE, 인라인 클라우드 보안 플랫폼 |
| 본사 | 미국 캘리포니아 산호세 (NASDAQ: ZS) |
| 핵심 모듈 | Zero Trust Exchange 단일 플랫폼에 ZIA, ZPA, ZDX 통합 |
| 시장 위치 | ZTNA, SASE 시장 리더, NASDAQ 상장, FY2025 ARR 30억 달러+ |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

Zscaler는 클라우드에서 동작하는 인라인 보안 플랫폼입니다. 핵심은 **Zero Trust Exchange**로, 전 세계 **150개 이상 데이터센터**([출처](https://www.zscaler.com/blogs/cxo-insights/putting-zero-trust-practice-overview-zscalers-platform-offerings-solution-elements-and))에 분산된 SASE 아키텍처 기반입니다.

기존 VPN은 사용자를 사내 네트워크에 들여보냅니다. Zscaler는 네트워크를 사용자에게 확장하지 않고, 개별 디바이스와 개별 앱 사이에만 일대일 연결(**segment of one**)을 만듭니다. 앱은 외부에 노출되지 않고 안에서 밖으로 연결을 맺습니다(**inside-out**).

> **왜 중요한가.** 네트워크 중심 경계 모델에서 ID 우선, 앱 중심 모델로의 전환이 제로 트러스트의 핵심입니다. Zscaler는 이 전환을 제품 구조로 강제합니다.

| 모듈 | 역할 |
|---|---|
| ZIA (Internet Access) | 인터넷 접근 보안. Cloud Firewall, Sandbox, URL 필터링, DLP, CASB, 브라우저 격리 |
| ZPA (Private Access) | 주력 ZTNA. 사설 앱 원격 접근, VPN 대체 |
| ZB2B | 파트너 연결. 앱 비노출 서비스 개시형 ZTNA |
| ZCP (Cloud Protection) | 워크로드 보안. Posture, Private Access, Communications, Segmentation |
| ZDX (Digital Experience) | 사용자와 앱 성능의 종단 간 가시성 |
| ZDT (Deception) | 디코이로 능동 위협 탐지, lateral movement 차단 |

## 시장 위치

Zscaler는 ZTNA, SASE 시장의 상장 리더입니다. FY2025 4분기에 연간반복매출(ARR)이 **30억 달러**를 넘었고 매출은 전년 대비 **21% 증가**했습니다([SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000138/zs-07312025_991.htm)). FY2026 1분기 매출은 **26% 증가**했습니다([SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000203/zs-10312025_991.htm)).

플랫폼 규모는 **150개 이상 글로벌 데이터센터**입니다([출처](https://www.zscaler.com/blogs/cxo-insights/putting-zero-trust-practice-overview-zscalers-platform-offerings-solution-elements-and)). 사용자 인근 데이터센터에서 인라인 검사를 수행하는 구조입니다.

경쟁 구도에서 Zscaler는 클라우드 네이티브 SSE/SASE 진영의 대표 주자입니다. 방화벽 자산을 보유한 조직은 Palo Alto Prisma Access를, 데이터 보호 중심 SSE는 Netskope를 함께 검토하는 경우가 많습니다. 최근 동향으로 2025년 Zero Trust Segmentation, SAP RISE 네이티브 통합 등 확장이 이어졌습니다([SAP RISE 통합 발표](https://ir.zscaler.com/news-releases/news-release-details/zscaler-now-offers-natively-integrated-zero-trust-solution-rise)).

## 강점과 한계

**강점**
- 네트워크를 확장하지 않는 inside-out ZTNA 구조, 인증된 사용자만 접근, 암묵적 신뢰 제거
- segment of one으로 디바이스와 앱 사이만 연결, 앱 비노출
- Segmentation과 Deception으로 lateral movement 차단
- 인터넷 접근(ZIA)과 사설 앱 접근(ZPA)을 단일 플랫폼으로 통합
- 150개 이상 데이터센터 기반 글로벌 가용성, TLS/SSL 검사
- ZDX로 종단 간 가시성

**한계**
- 모듈이 많아 초기 설계와 정책 튜닝에 학습 비용
- 공개 정가 없음, 모듈별 라이선스로 비용 예측 어려움
- 한국어 지원 범위 공개 자료상 확인 제한
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

## 도입 고려사항

**라이선스.** 모듈별 구독, 공개 정가 없음. 국내 파트너를 통한 도입이 일반적입니다.

**데이터 리전.** 글로벌 150개 이상 데이터센터 운영. 한국(서울) 데이터센터의 정확한 운영과 인증 상태는 [Zscaler 데이터센터 맵](https://trust.zscaler.com/data-center-map)에서 별도 확인이 필요합니다.

**CSAP.** Zscaler의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않습니다. 참고로 CSAP는 KISA가 운영하며, AWS 서울 리전, Azure, Google Cloud는 CSAP Low(Group C)를 획득했습니다. 공공 도입 검토 시 최신 인증 현황을 직접 확인합니다.

**망분리.** 클라우드 SaaS형 인라인 보안 플랫폼. 한국 공공과 금융의 망분리 환경 적용 가능성은 별도 검토가 필요하며, 국내 적용 사례는 공개 자료상 확인되지 않습니다.

## 관련 페이지

- [Networks 영역](/pillars/networks/) — 네트워크 통제 지점과 솔루션 분포
- [Zscaler 벤더 프로필](/ai/vendors/zscaler/) — 회사별 AI 보안 상세
- [AI 사용 가시화](/ai/ai-usage-visibility/) — 직원 AI 사용 캡처 방식

## 출처

- [Zscaler 플랫폼 개요 (CXO Insights)](https://www.zscaler.com/blogs/cxo-insights/putting-zero-trust-practice-overview-zscalers-platform-offerings-solution-elements-and)
- [Zscaler ZTNA 아키텍처 가이드 (The Network DNA)](https://www.thenetworkdna.com/2026/03/zscaler-zero-trust-network-access-ztna.html)
- [Zscaler FY2025 10-K (SEC)](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000158/zs-20250731.htm)
- [Zscaler FY2025 Q4 실적 (SEC 8-K)](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000138/zs-07312025_991.htm)
- [Zscaler FY2026 Q1 실적 (SEC 8-K)](https://www.sec.gov/Archives/edgar/data/0001713683/000171368325000203/zs-10312025_991.htm)
- [Zscaler-SAP RISE 통합 발표](https://ir.zscaler.com/news-releases/news-release-details/zscaler-now-offers-natively-integrated-zero-trust-solution-rise)
- [Zscaler 데이터센터 맵](https://trust.zscaler.com/data-center-map)
- 비교 솔루션: [Palo Alto Networks](https://www.paloaltonetworks.com/sase/access), [Netskope](https://www.netskope.com/products/private-access)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 확인 2026-05-31, 다음 확인 2026-08-30
