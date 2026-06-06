---
title: "SentinelOne Singularity"
description: "Purple AI 기반 자율형 EDR/XDR 시장 정리"
date: 2026-05-30
lastmod: 2026-05-31
tags: ["SentinelOne", "Singularity", "EDR", "XDR", "Devices"]
categories: ["solution-review"]
pillars: ["Devices"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | EDR, XDR, AI SIEM |
| 본사 | 미국 캘리포니아 마운틴뷰 (NYSE: S) |
| 핵심 모듈 | Singularity Endpoint, XDR, Storyline, Purple AI, Cloud, Identity |
| 시장 위치 | 자율 대응과 Purple AI 중심 EDR/XDR, NYSE 상장, FY2025 ARR 9억 달러+ |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

SentinelOne Singularity는 **자율형 EDR/XDR 플랫폼**입니다. 엔드포인트, 클라우드, 신원에 걸쳐 위협을 예방, 탐지, 대응합니다([출처](https://www.sentinelone.com/platform/)).

핵심은 두 가지입니다. 첫째, 엔드포인트가 **스스로 방어**합니다. 비인가 프로세스와 파일을 실시간으로 종료, 격리하고, 자동 교정과 롤백으로 스스로 복구해 평균 복구 시간(MTTR)을 줄입니다([출처](https://www.sentinelone.com/platform/singularity-xdr-protection/)). 둘째, AI 보안 분석가 **Purple AI**가 자연어 질문을 위협 헌팅 쿼리로 바꾸고(다국어 지원), 이벤트 요약과 보고서를 생성합니다([출처](https://www.sentinelone.com/platform/)).

> **왜 중요한가.** 머신 속도의 자율 종료, 격리, 롤백은 SOC 인력이 개입하기 전 위협을 차단하고, Purple AI의 자연어 헌팅은 분석가 학습 곡선을 낮춰 운영 부담을 줄입니다.

| 모듈 | 역할 |
|---|---|
| Singularity Endpoint | EDR. 자율 탐지, 차단, 롤백 |
| Singularity XDR | 엔드포인트, 클라우드, 신원 통합 탐지와 대응 |
| Storyline | 공격 흐름을 자동 상관해 맥락 제공 |
| Purple AI | 자연어 위협 헌팅, 요약, 보고 자동화 |
| Singularity Cloud, Identity | 클라우드 워크로드와 신원 위협 보호 |

## 시장 위치

SentinelOne은 자율 대응과 Purple AI를 앞세운 EDR/XDR 상장 벤더입니다. FY2025(2025년 1월 종료) 매출 **8억 2,150만 달러**(전년 대비 **32% 증가**), ARR **9억 2,010만 달러**(**27% 증가**), 10만 달러 이상 고객 **1,411곳**입니다([SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001583708/000158370825000031/sentineloneq425exhibit991.htm)).

엔드포인트의 자율 종료, 격리, 롤백과 Storyline의 공격 흐름 상관, Purple AI의 자연어 헌팅이 차별점입니다. 경쟁 구도에서 위협 인텔리전스와 MDR 결합 EDR을 원하면 CrowdStrike Falcon을, 네트워크 경계 제로 트러스트가 우선이면 Zscaler, Netskope를 함께 검토하는 경우가 많습니다. 벤더 측정 수치(탐지 63% 단축, MTTR 55% 감소)는 자체 발표 기준입니다.

## 강점과 한계

**강점**
- 엔드포인트가 스스로 차단, 격리, 롤백하는 자율 대응
- Purple AI의 자연어 위협 헌팅과 다국어 지원으로 운영 부담 완화
- Storyline으로 공격 흐름을 맥락 있게 추적
- Singularity 단일 콘솔에 EDR, XDR, 클라우드, 신원 통합
- FY2025 매출 32% 증가, ARR 9억 달러 돌파 규모

**한계**
- 최소 권한과 암호화 강제는 EDR 영역 밖이라 커버리지 제한
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

## 도입 고려사항

**라이선스.** 에디션별 구독. 국내 파트너를 통한 도입이 일반적입니다.

**데이터 리전.** SaaS 클라우드 전달. 한국 데이터 보관과 처리 위치는 도입 시 벤더에 직접 확인이 필요합니다.

**CSAP.** SentinelOne의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않습니다. 공공 도입 검토 시 최신 인증 현황을 직접 확인합니다.

**망분리.** 클라우드 관리형 EDR. 한국 공공과 금융의 망분리 환경에서는 관리 서버 위치와 통신 방식 검토가 필요하며, 이번 검토에서 국내 적용 사례는 확인하지 못했습니다.

## 출처

- [SentinelOne Singularity 플랫폼](https://www.sentinelone.com/platform/)
- [Singularity XDR 동작 방식](https://www.sentinelone.com/platform/singularity-xdr-protection/)
- [Singularity Complete](https://www.sentinelone.com/platform/singularity-complete/)
- [SentinelOne FY2025 Q4 실적 (SEC 8-K)](https://www.sec.gov/Archives/edgar/data/0001583708/000158370825000031/sentineloneq425exhibit991.htm)
- 비교 솔루션: [CrowdStrike Falcon](/solutions/crowdstrike-falcon/), [Wiz](/solutions/wiz/), [Zscaler](/solutions/zscaler/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 확인 2026-05-31, 다음 확인 2026-08-30
