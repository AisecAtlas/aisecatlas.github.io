---
title: "Visibility & Analytics"
description: "5개 영역을 횡단하는 가시성과 분석 기능."
ShowToc: false
---

> **로그와 텔레메트리 수집, 상관 분석, UEBA, 위협 헌팅이 핵심이다.** 모든 Pillar 위에서 작동하는 횡단 기능이다. 자산을 보지 못하면 신뢰를 검증할 수 없다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| SIEM | 로그 수집과 상관 분석 | Splunk, Microsoft Sentinel, Google SecOps, Elastic Security |
| XDR | 도메인 간 통합 탐지 대응 | Palo Alto Cortex, CrowdStrike Falcon, SentinelOne |
| UEBA | 사용자, 개체 행동 분석 | Exabeam, Securonix |
| 보안 데이터 레이크 | 저비용 대용량 보안 데이터 저장 | Snowflake, Databricks, Microsoft Sentinel data lake |
| 보안 데이터 파이프라인 | 수집과 저장 분리, 비용 최적화 | Cribl, Tenzir, DataBahn, Observo AI |

## 시장 동향 (2025-2026)

**SIEM 리더 구도.** Microsoft와 Splunk가 2025년 Gartner SIEM 평가에서 리더로 선정됐다. Splunk는 11년 연속 리더이며, 2024년 Cisco에 **280억 달러**에 인수되어 자회사로 운영된다([Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2025/10/16/microsoft-named-a-leader-in-the-2025-gartner-magic-quadrant-for-siem/), [Splunk](https://www.splunk.com/en_us/blog/security/splunk-named-leader-in-2025-gartner-siem-report.html)).

**데이터 레이크로의 이동.** Microsoft Sentinel data lake가 정식 출시되어 **350개 이상 소스**의 보안 데이터를 모은다. Google SecOps는 2025년 Gartner 평가에서 비전 완성도 최고점을 받았고, 페타바이트급 인프라와 Gemini AI를 결합한다([Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2025/10/16/microsoft-named-a-leader-in-the-2025-gartner-magic-quadrant-for-siem/)).

**데이터 파이프라인의 부상.** 수집을 저장과 분리해 비용을 낮추는 보안 데이터 파이프라인이 부상했다. Cribl은 출시 6년 만에 **연간 반복 매출 2억 달러**를 넘겼다([SACR 시장 가이드](https://softwareanalyst.substack.com/p/market-guide-2025-the-rise-of-security)). Cribl Stream은 고비용 도구로 보내는 데이터 양을 **36에서 50%** 줄이고, 저장 용량을 최대 **88%** 압축한다고 밝힌다([Cribl](https://cribl.io/solutions/initiatives/cost-control/)).

> **핵심.** 순수 로그 집계는 commodity가 됐다. 경쟁은 AI 기반 분석과 비용 구조로 옮겨갔다. SIEM 마이그레이션의 1차 동기는 대개 비용이다.

## 도입 의사결정

### 첫 번째 결정: 아키텍처

| 상황 | 권장 |
|---|---|
| 단일 플랫폼에 수집과 분석 통합 | 통합 SIEM (Sentinel, Splunk, SecOps) |
| 데이터 양이 많고 비용이 부담 | 데이터 레이크 + 파이프라인으로 분리 |

### 두 번째 결정: 생태계

| 환경 | 권장 |
|---|---|
| Microsoft 365 중심 | Microsoft Sentinel |
| 기존 Splunk 자산 | Splunk (Cisco) |
| Google Cloud, AI 우선 | Google SecOps |

### 세 번째 결정: 비용 통제

데이터 양이 빠르게 늘면 수집 단계에서 [Cribl 같은 파이프라인](https://softwareanalyst.substack.com/p/market-guide-2025-the-rise-of-security)으로 필터링과 라우팅을 적용해 SIEM 비용을 통제한다.

## 도입 고려사항

**로그 보존과 개인정보보호법.** SIEM과 데이터 레이크는 개인정보가 포함된 로그를 수집한다. 수집 범위와 보존 기간이 [개인정보보호법](/korea/regulation/pipa-zero-trust-data/)의 처리 원칙에 맞는지 검토한다.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 환경은 클라우드 SIEM 사용에 제약이 있다. 온프레미스 SIEM이나 자체 데이터 레이크 구성이 현실적인 경우가 있다.

**공공과 정부.** 클라우드형 SIEM과 데이터 레이크는 [CSAP 인증](/korea/regulation/csap-n2sf/)과 데이터 처리 리전을 확인한다.

---
최종 검토 2026-05-30
