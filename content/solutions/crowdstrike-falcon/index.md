---
title: "CrowdStrike Falcon"
description: "단일 경량 에이전트 기반 EDR/XDR 플랫폼 시장 정리"
date: 2026-05-30
lastmod: 2026-05-31
tags: ["CrowdStrike", "Falcon", "EDR", "XDR", "Devices"]
categories: ["solution-review"]
pillars: ["Devices"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | EDR, XDR, 통합 보안 플랫폼 |
| 본사 | 미국 텍사스 오스틴 (NASDAQ: CRWD) |
| 핵심 모듈 | 단일 경량 에이전트 위에 Prevent, Insight, OverWatch, Identity Protection, Cloud Security, NG-SIEM 등 확장 |
| 시장 위치 | 클라우드 네이티브 EDR 시장 리더, NASDAQ 상장 |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

CrowdStrike는 클라우드 네이티브 EDR 시장의 리더입니다.

2011년 설립됐고, 단일 경량 에이전트 위에 기능을 모듈처럼 얹어가는 구조가 핵심 차별점입니다. 새 기능을 추가할 때마다 에이전트를 새로 설치할 필요가 없습니다.

> **왜 중요한가.** 단일 에이전트, 단일 콘솔 구조는 엔드포인트에서 신원, 클라우드, 로그까지 한 플랫폼으로 확장하면서 운영 복잡도를 낮춥니다. 침해 가정 모델에서 실시간 텔레메트리와 사후 헌팅이 동시에 작동합니다.

| 모듈 | 카테고리 |
|---|---|
| Falcon Prevent | 차세대 백신 (NGAV) |
| Falcon Insight | EDR |
| Falcon OverWatch | 24/7 관리형 위협 헌팅 |
| Falcon Complete | 관리형 탐지, 대응 (MDR) |
| Falcon Adversary Intelligence | 위협 인텔리전스 (구 Falcon X) |
| Falcon Discover | 자산과 앱 인벤토리 |
| Falcon Spotlight | 취약점 관리 |
| Falcon Identity Protection | ITDR |
| Falcon Cloud Security | CNAPP |
| Falcon LogScale | 보안 데이터 레이크 (구 Humio) |
| Falcon Next-Gen SIEM | SIEM |
| Charlotte AI | AI 기반 보안 보조 |

## 시장 위치

CrowdStrike는 클라우드 네이티브 EDR/XDR 시장의 상장 리더입니다. 단일 에이전트 위에 NGAV(Prevent), EDR(Insight), 관리형 헌팅(OverWatch), MDR(Complete), ITDR(Identity Protection), CNAPP(Cloud Security)을 얹어 엔드포인트 보안에서 통합 보안 플랫폼으로 확장해 왔습니다.

데이터 측면에서는 LogScale(구 Humio)과 Next-Gen SIEM으로 보안 데이터 레이크 시장까지 진입했고, Charlotte AI로 생성형 보안 보조를 더했습니다. 경쟁 구도에서 Microsoft 365 통합을 우선하는 조직은 Microsoft Defender for Endpoint를, 단일 에이전트와 가격을 함께 보는 조직은 SentinelOne을, 풀 XDR 통합은 Palo Alto Cortex XDR을 함께 검토하는 경우가 많습니다.

2024년 7월 콘텐츠 업데이트 결함으로 글로벌 규모의 시스템 장애가 발생한 이후, 운영과 배포 정책 변화 여부는 도입 검토 시 별도로 확인할 사항입니다.

## 강점과 한계

**강점**
- 단일 경량 에이전트로 모듈을 더해가는 확장 구조, 신규 기능 추가 시 재설치 불필요
- OverWatch 24/7 관리형 위협 헌팅, MDR은 Falcon Complete로 제공
- LogScale와 NG-SIEM의 보안 데이터 통합
- Identity Protection으로 ITDR까지 확장
- 글로벌 위협 인텔리전스 네트워크
- 단일 콘솔, API, Terraform 기반 통합 관리

**한계**
- 가격 불투명, 모듈 분리 과금으로 풀 스택 도입은 고비용
- 정책 관리에 학습 곡선
- 일부 기능이 SaaS 의존이라 망분리 환경에 제한적
- 한국 데이터 리전과 CSAP 인증 현황은 별도 확인 필요

## 언제 선택하나

**선택**
- 글로벌과 한국을 동시에 운영해야 하는 경우
- 단일 에이전트로 여러 기능을 통합하고 싶은 경우
- 24/7 위협 헌팅을 외부에 위탁하려는 경우 (OverWatch)
- 보안 데이터 레이크를 구축하려는 경우 (LogScale와 NG-SIEM)

**회피**
- 예산이 빠듯한 경우 (풀 스택 도입은 고비용)
- 온프레미스 콘솔이 강제되는 경우 (SaaS가 기본)
- 의도적으로 여러 벤더를 섞으려는 전략

| 상황 | 권장 솔루션 |
|---|---|
| Microsoft 365 통합 우선 | Microsoft Defender for Endpoint |
| 한국 컴플라이언스 우선 | 국내 EDR (예: 안랩) |
| 단일 에이전트, 가격 민감 | SentinelOne |
| 풀 XDR 통합 | Palo Alto Cortex XDR |

## 도입 고려사항

**라이선스.** 한국 파트너가 다수 있습니다. 가격 협상이 필요합니다.

**데이터 리전.** 글로벌. 한국 데이터 리전은 별도로 확인합니다.

**정부 클라우드 인증.** CSAP 인증 현황은 정기적으로 확인합니다.

**망분리.** 내부망 분리 환경에선 일부 기능이 제한됩니다.

**도입 사례.** 대기업, 금융권, 공공 부문에 도입 사례가 다수입니다.

## 출처

- [CrowdStrike 공식 페이지](https://www.crowdstrike.com/)
- [Falcon 플랫폼 문서](https://www.crowdstrike.com/falcon-platform/)
- [CrowdStrike Trust Center](https://www.crowdstrike.com/en-us/trust/)
- [Falcon Identity Protection](https://www.crowdstrike.com/en-us/platform/identity-protection/)
- 비교 솔루션: [SentinelOne Singularity](/solutions/sentinelone/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 확인 2026-05-31, 다음 확인 2026-08-30
