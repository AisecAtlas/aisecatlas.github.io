---
title: "Wiz"
description: "Security Graph 기반 에이전트리스 CNAPP 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Wiz", "CNAPP", "CSPM", "클라우드 보안", "Applications"]
categories: ["solution-review"]
pillars: ["Applications"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Applications (확장: Data, Visibility) |
| 카테고리 | CNAPP (CSPM, CWPP, CIEM, DSPM, IaC) |
| 본사 | 미국, 2020년 설립. 2026년 3월 Google(Alphabet)에 인수 |
| 차별점 | 에이전트리스 스캔 + Security Graph로 악용 가능한 공격 경로만 선별 |
| 성숙도 | Advanced |
| 종합 점수 | 8.7 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

Wiz는 흩어진 클라우드 보안 도구를 하나로 묶은 **에이전트리스 CNAPP**입니다. CSPM, CWPP, CIEM, DSPM, IaC 스캔을 단일 플랫폼에서 제공합니다([출처](https://em360tech.com/tech-articles/solution-overview-what-wiz)).

핵심은 **Security Graph**입니다. 클라우드 전체를 속성 그래프로 보고, AWS, Azure, GCP, OCI, Kubernetes에 네이티브 API로 연결해 모든 노드와 엣지를 평가합니다. 코드, 클라우드, 런타임의 위험을 상관 분석해 **악용 가능하고 도달 가능한 위험만** 골라내고, 그렇지 않은 경고는 억제해 알림 피로를 줄입니다([출처](https://solideinfo.com/wiz-cloud-security/)).

규모도 근거가 됩니다. Fortune 100의 **45%**가 사용하고, **500만 개 이상 클라우드 워크로드**를 보호하며 하루 **2,300억 개 파일**을 스캔합니다. **ARR 1억 달러를 18개월** 만에 달성했습니다([출처](https://cybersecuritytimes.com/google-completes-32b-acquisition-wiz-cloud-security-deal/)). 2026년 3월 Google이 **320억 달러** 전액 현금으로 인수를 완료했습니다([Google 발표](https://blog.google/inside-google/company-announcements/google-agreement-acquire-wiz/)).

| 모듈 | 역할 |
|---|---|
| CSPM | 구성 오류 점검. 2,300개 이상 룰, 150개 이상 컴플라이언스 프레임워크 |
| CWPP | VM, 컨테이너, 서버리스 워크로드 보호 |
| CIEM | 과도 권한 식별, 최소 권한 정책 권고 |
| DSPM | 버킷과 DB 내용 스캔으로 PII, PCI, PHI 탐지 |
| Wiz Code | IaC, 컨테이너 이미지, 시크릿을 CI/CD와 IDE에서 검사, 위험을 코드 라인까지 추적 |

## 평가

평가 기준은 [정합성 진단 척도](/evaluation/scoring-rubric/)를 따릅니다. 절대 평가이며 공개 자료를 근거로 합니다.

### A축: 일반 기능 (8.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | CSPM, CWPP, CIEM, DSPM, IaC를 단일 플랫폼으로 통합 |
| A-2 | 가용성 | 2/2 | SaaS, 멀티클라우드 API 연결, 에이전트리스 |
| A-3 | 성능 | 2/2 | 에이전트리스로 하루 2,300억 파일 스캔, 분 단위 배포 |
| A-4 | 운영성 | 1/2 | 분 단위 배포는 장점이나 기능 범위가 넓음. 한국어 지원 범위는 확인 제한 |
| A-5 | 비용 투명성 | 1/2 | 엔터프라이즈 구독, 공개 정가 없음 |

### B축: 표준 정합성 (9.3 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-APP-CNAPP-01 | 항상 검증 | 2/2 | 에이전트리스 심층 평가와 지속 모니터링 |
| ZTA-APP-CNAPP-02 | 최소 권한 | 2/2 | CIEM이 과도 권한 식별, 최소 권한 정책 권고 |
| ZTA-APP-CNAPP-03 | 침해 가정 | 2/2 | 공격 경로 분석으로 악용 가능한 경로 선별 |
| ZTA-APP-CNAPP-04 | 지속 검증 | 2/2 | 구성과 자세를 지속 모니터링 |
| ZTA-APP-CNAPP-05 | 컨텍스트 정책 | 2/2 | Security Graph가 코드, 클라우드, 런타임 컨텍스트 상관 분석 |
| ZTA-APP-CNAPP-06 | 전 구간 암호화 | 1/2 | 암호화 미적용을 탐지하나 인라인 암호화 강제는 아님 |
| ZTA-APP-CNAPP-07 | 가시성 | 2/2 | Security Graph로 전 자산 가시성, 알림 피로 감소 |

원점수 13/14를 10점으로 환산해 **9.3**.

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.0 |
| B. 표준 정합성 | 9.3 |
| **종합** | **8.7 (Advanced)** |

## 강점과 한계

**강점**
- 에이전트리스로 빠르게 배포하고 멀티클라우드를 한 번에 커버
- Security Graph로 악용 가능한 위험만 선별, 알림 피로 감소
- CSPM, CWPP, CIEM, DSPM, IaC를 단일 플랫폼으로 통합
- Fortune 100의 45% 사용, 워크로드 500만 개 이상 보호 규모

**한계**
- 탐지와 자세 관리 중심으로, 인라인 차단이나 암호화 강제는 범위 밖
- 공개 정가가 없어 비용 예측이 어려움
- Google 인수 후 멀티클라우드 중립성 유지 여부는 시장 관찰 필요
- 한국 CSAP 등 국내 인증과 망분리 적용 근거가 공개 자료상 부족

## 언제 선택하나

**선택**
- AWS, Azure, GCP 등 멀티클라우드를 한 번에 가시화하려는 조직
- 경고 과다로 우선순위를 못 잡는 클라우드 보안 팀
- 개발 단계(IaC, 컨테이너)부터 런타임까지 위험을 연결하려는 경우
- 클라우드 데이터(PII, PCI, PHI) 노출을 점검해야 하는 환경

**회피**
- 온프레미스 위주이거나 클라우드 자산이 적은 환경
- 탐지를 넘어 인라인 차단과 암호화 강제가 핵심 요구일 때
- 정가 투명성과 단순 과금을 최우선으로 보는 경우

| 상황 | 권장 솔루션 |
|---|---|
| 멀티클라우드 자세 관리와 공격 경로 가시화 | Wiz |
| 네트워크 경계 ZTNA, 인라인 보안 | Zscaler, Palo Alto Prisma Access |
| 엔드포인트 런타임 보호 | CrowdStrike Falcon |

## 한국 시장 노트

**라이선스.** 엔터프라이즈 구독, 공개 정가 없음. 국내 파트너를 통한 도입이 일반적입니다.

**데이터 리전.** 에이전트리스 SaaS로 클라우드 API에 연결합니다. 스캔 데이터의 처리와 보관 위치는 도입 시 벤더에 직접 확인이 필요합니다.

**CSAP.** Wiz의 한국 클라우드 보안인증(CSAP) 획득 여부는 공개 자료에서 확인되지 않았습니다. 모회사가 된 Google Cloud의 인증과는 별개이므로, 공공 도입 검토 시 Wiz 자체의 최신 인증 현황을 확인하세요.

**망분리.** 멀티클라우드 SaaS 형태입니다. 한국 공공과 금융의 망분리 환경 적용 가능성은 별도 검토가 필요하며, 이번 검토에서 국내 적용 사례는 확인하지 못했습니다.

## 출처

- [Wiz 솔루션 개요 (EM360Tech)](https://em360tech.com/tech-articles/solution-overview-what-wiz)
- [Wiz 클라우드 보안 아키텍처 가이드 (Solide Info)](https://solideinfo.com/wiz-cloud-security/)
- [Google의 Wiz 320억 달러 인수 완료 (Cybersecurity Times)](https://cybersecuritytimes.com/google-completes-32b-acquisition-wiz-cloud-security-deal/)
- [Google의 Wiz 인수 발표 (Google 공식 블로그)](https://blog.google/inside-google/company-announcements/google-agreement-acquire-wiz/)
- [Alphabet 보도자료 (SEC, 2025-03-18)](https://www.sec.gov/Archives/edgar/data/1652044/000165204425000027/googexhibit99131825.htm)

비교 솔루션: [Zscaler](/solutions/zscaler/), [Palo Alto Prisma Access](/solutions/prisma-access/), [CrowdStrike Falcon](/solutions/crowdstrike-falcon/)

## 면책

본 평가는 공개 자료를 근거로 합니다. 실제 운영 환경의 가용성과 성능은 다를 수 있습니다. 절대 평가이지 상대 평가가 아닙니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
