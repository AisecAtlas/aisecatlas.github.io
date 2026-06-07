---
title: "보안 데이터 파이프라인"
description: "SIEM 앞단에서 텔레메트리를 수집, 정제, 라우팅하는 SOC 데이터 제어 평면. 비용 절감과 2025~2026년 대형 벤더 인수 동향."
date: 2026-06-07
lastmod: 2026-06-07
tags: ["Security Data Pipeline", "Telemetry", "SIEM", "Visibility", "동향"]
categories: ["ai-trend"]
ShowToc: true
---

보안 데이터 파이프라인(Security Data Pipeline)은 SIEM 앞단에서 텔레메트리를 수집, 정제, 라우팅해 저장 계층의 비용과 노이즈를 줄이는 계층입니다. 수집(collection)과 저장(SIEM, 데이터레이크)을 분리하는 구조입니다. 2025~2026년 CrowdStrike와 SentinelOne이 파이프라인 스타트업을 인수하며, 독립 카테고리에서 SOC 플랫폼의 기본 계층으로 통합되고 있습니다.

## 계층의 역할

SIEM으로 모든 로그를 그대로 보내면 저장과 질의 비용이 급증합니다. 파이프라인은 그 사이에서 데이터를 거릅니다.

- 수집(collection). 엔드포인트, 네트워크, 클라우드, 앱 텔레메트리를 에이전트나 게이트웨이로 모음
- 정제와 라우팅. 중복과 노이즈를 줄이고, 필요한 목적지(SIEM, 데이터레이크, 오브젝트 스토리지)로 분기
- 저장 분리. 고비용 SIEM에는 탐지에 쓰는 데이터만, 나머지는 저비용 레이크로

> **핵심.** 파이프라인은 SIEM을 대체하지 않습니다. SIEM이 받는 데이터의 양과 비용을 통제하는 제어 평면입니다.

Cribl은 고비용 도구로 보내는 데이터 양을 **36~50%** 줄이고 저장 용량을 최대 **88%** 압축한다고 밝힙니다([Cribl](https://cribl.io/solutions/initiatives/cost-control/)). 벤더에 따라 SIEM 지출 **30~90%** 절감을 표방합니다([Cribl](https://cribl.io/about-us/)).

## 주요 솔루션

| 솔루션 | 위치 | 특징 |
|---|---|---|
| **Cribl** | 독립 선두 | Stream(라우팅), Edge(수집), Lake(저장), Search(질의) 제품군. ARR **3억 달러** 돌파 |
| **Onum** | CrowdStrike 인수 | 실시간 텔레메트리 파이프라인. Falcon Next-Gen SIEM의 데이터 기반 |
| **Observo AI** | SentinelOne 인수(보도 기준) | AI 기반 파이프라인. 노이즈 텔레메트리 **70% 절감** 표방(벤더 주장) |
| **DataBahn** | 독립 | 보안, 옵저버빌리티, AI용 파이프라인. 비용 **50%+ 절감** 표방(벤더 주장) |

Cribl은 2018년 설립, ARR **3억 달러**를 2026년 2월 넘겼습니다. 직전 2억 달러는 2025년 1월에 발표했고, 클라우드 ARR은 **1억 3천만 달러** 이상입니다([Cribl](https://cribl.io/news/cribl-surpasses-usd300-million-in-arr-powering-the-essential-infrastructure/)). 2024년 8월 Series E로 **3억 1,900만 달러**를 조달해 밸류에이션 **35억 달러**를 기록했습니다([Cribl](https://cribl.io/news/cribl-announces-319m-series-e/)).

## 벤더 인수 동향

대형 SIEM, XDR 벤더가 파이프라인 스타트업을 흡수하는 흐름입니다. 파이프라인이 SOC 플랫폼의 데이터 기반으로 통합되는 신호입니다.

- **CrowdStrike → Onum.** 2025년 8월 27일 발표, 약 **2억 9천만 달러**. Falcon Next-Gen SIEM의 실시간 데이터 처리를 강화([CrowdStrike IR](https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-agrees-acquire-onum-supercharge-falcon-next-gen-siem/)).
- **SentinelOne → Observo AI.** 약 **2억 2,500만 달러**(현금과 주식, 보도 기준). SentinelOne FY2026 3분기 종결 예정([Security Review](https://securityreviewmag.com/?p=28685)). SentinelOne 공식 보도자료로 재확인이 필요한 단계입니다.

신규 자금 조달도 이어집니다. DataBahn은 2025년 6월 Series A로 **1,700만 달러**(누적 1,900만 달러, 리드 Forgepoint Capital)를 조달했습니다([PR Newswire](https://www.prnewswire.com/news-releases/databahnai-raises-17m-series-a-to-redefine-enterprise-data-pipelines-for-security-observability-and-ai-302491142.html)). Observo AI는 Felicis와 Lightspeed가 투자했습니다([VentureBeat](https://venturebeat.com/ai/observos-ai-native-data-pipelines-cut-noisy-telemetry-by-70-strengthening-enterprise-security)).

## 도입 의사결정

| 상황 | 권장 |
|---|---|
| SIEM 데이터 양이 많고 비용이 부담 | 수집 단계에 파이프라인을 두고 저비용 레이크로 분리 |
| 이미 CrowdStrike, SentinelOne 플랫폼 사용 | 인수된 파이프라인(Onum, Observo)이 기본 계층으로 통합되는지 확인 |
| 멀티 벤더 SIEM, 데이터레이크 운영 | 독립 파이프라인(Cribl, DataBahn)으로 목적지 중립 라우팅 |

[Agentic SOC](/automation/)에서 에이전트가 쓰는 데이터의 품질과 비용도 파이프라인이 좌우합니다. 벤더 프로필은 [CrowdStrike](/ai/vendors/crowdstrike/), [SentinelOne](/ai/vendors/sentinelone/)을 참고합니다.

## 도입 고려사항

**벤더 주장 구분.** 노이즈 70% 절감, 비용 50%+ 절감 같은 수치는 벤더 자체 주장입니다. 자사 데이터로 PoC 검증이 필요합니다.

**로그 보관 의무.** 파이프라인으로 데이터를 거를 때 KISA, 금융보안원의 로그 보관 의무와 상충하지 않는지 확인합니다. 절감과 규제 보관은 별개입니다.

**망분리 환경.** 폐쇄망에서 수집과 전송 비용, 외부 클라우드 라우팅 제약을 검토합니다.

**국내 연계.** 이글루시큐리티, 안랩 등 국내 SIEM과의 연계는 공개 자료에서 확인되지 않았습니다. 도입 전 직접 확인합니다.

## 관련 페이지

- [AI 사용 가시화](/ai/ai-usage-visibility/) — 직원 AI 사용 캡처 메커니즘
- [AI 사용 헌팅](/ai/shadow-ai-hunting/) — EDR 텔레메트리 기반 Shadow AI 탐지
- [AI로 보안 강화](/ai/augment-security/) — SOC 운영 가속

## 출처

- [The Rise of Security Data Pipeline (SACR)](https://softwareanalyst.substack.com/p/the-rise-of-security-data-pipeline)
- [Cribl surpasses $300M ARR](https://cribl.io/news/cribl-surpasses-usd300-million-in-arr-powering-the-essential-infrastructure/)
- [CrowdStrike to acquire Onum (IR)](https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-agrees-acquire-onum-supercharge-falcon-next-gen-siem/)
- [DataBahn Series A (PR Newswire)](https://www.prnewswire.com/news-releases/databahnai-raises-17m-series-a-to-redefine-enterprise-data-pipelines-for-security-observability-and-ai-302491142.html)
- [Observo AI (VentureBeat)](https://venturebeat.com/ai/observos-ai-native-data-pipelines-cut-noisy-telemetry-by-70-strengthening-enterprise-security)

## 면책

본 정리는 공개 자료를 근거로 합니다. 시장 변동이 빠른 영역입니다. 도입 전에 최신 공식 발표를 확인합니다.

---
최초 발행 2026-06-07, 최종 확인 2026-06-07, 다음 검토 2026-09-07
