---
title: "CISA Zero Trust Maturity Model v2"
description: "미국 CISA의 Zero Trust 성숙도 모델을 한국어로 빠르게 읽기"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["CISA", "ZTMM", "Zero Trust", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [CISA Zero Trust Maturity Model v2.0](https://www.cisa.gov/zero-trust-maturity-model)
>
> 이 페이지는 원문을 한국어로 요약한 것이다. 권위 있는 해석이 필요하면 원문을 본다.

## 한 줄 요약

NIST가 정한 추상적인 Zero Trust 원칙을 단계별로 어떻게 실행할지 보여주는 모델이다.

## 어떤 문서인가

| 항목 | 내용 |
|---|---|
| 발표 | 미국 CISA (사이버보안 및 인프라보안청) |
| 버전 | v2.0 (2023년 4월, [CISA 공식 페이지](https://www.cisa.gov/zero-trust-maturity-model)) |
| 대상 | 원칙적으로 미국 연방기관, 민간은 자율 적용 |
| 구조 | 5개 Pillar + 3개 횡단 기능, 각 4단계 성숙도 |

ZTMM은 행정명령 [EO 14028](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity)과 [OMB M-22-09](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf)를 근거로 미국 연방기관에 사실상 의무화돼 있다.

## 5개 Pillar

| Pillar | 의미 | 주요 관심사 |
|---|---|---|
| Identity | 신원 | 사용자와 서비스의 신원을 어떻게 확립하고 검증하나 |
| Devices | 기기 | 자산 인벤토리, 신뢰 점수, 정책 적용 |
| Networks | 네트워크 | 경계 의존을 줄이고 마이크로세그멘테이션과 암호화 적용 |
| Applications & Workloads | 앱과 워크로드 | 개발부터 런타임까지 전 주기 보안 |
| Data | 데이터 | 분류, 라벨링, 암호화, 접근 통제, 유출 방지 |

## 3개 횡단 기능

5개 Pillar에 모두 걸쳐 작동하는 기능이다.

| 영역 | 핵심 |
|---|---|
| Visibility & Analytics | 로그와 텔레메트리 수집, 상관 분석, 위협 헌팅 |
| Automation & Orchestration | 정책 자동화, SOAR, IaC 보안 |
| Governance | 정책, 준거성, 감사 |

## 4단계 성숙도

> **v1 → v2 변경.** v2.0(2023.4)은 v1의 3단계에 **Initial** 단계를 추가해 4단계가 됐고, Identity에 **Access Management** function을 분리 신설했으며 세 횡단 기능을 전 Pillar에 명시했다. ([CISA v2 릴리스 공지](https://www.cisa.gov/news-events/news/cisa-releases-updated-zero-trust-maturity-model))

| 단계 | 영문 | 특징 |
|---|---|---|
| 1 | Traditional | 정적 정책, 수동 운영, 경계 의존 |
| 2 | Initial | 일부 자동화, 통합 시작 |
| 3 | Advanced | 정책이 자동으로 집행되고 컨텍스트를 사용한다 |
| 4 | Optimal | 자동, 동적, 자가 학습 |

조직 전체가 같은 단계일 필요는 없다. 영역마다 다른 단계여도 된다(Pillar별 비대칭 성숙 허용, [CISA ZTMM v2 PDF](https://www.cisa.gov/sites/default/files/2023-04/CISA_Zero_Trust_Maturity_Model_Version_2_508c.pdf)).

## Pillar별 단계 요약

아래 기술 키워드(ITDR, SASE/SSE, DSPM 등)는 CISA 단계 서술을 현행 시장 기술로 의역한 것이며 CISA 원문 문구가 아니다.

### Identity

주요 위협: 자격증명 탈취, 세션 하이재킹 → 지속 검증과 신뢰 점수로 탈취 자격의 재사용 차단.

| 단계 | 핵심 |
|---|---|
| Traditional | 비밀번호와 AD/LDAP 중심 |
| Initial | IDaaS 도입, MFA 부분 적용 |
| Advanced | 조건부 접근, 적응형 MFA |
| Optimal | ITDR, 지속 검증, 신뢰 점수 기반 정책 |

### Devices

| 단계 | 핵심 |
|---|---|
| Traditional | AV 기반, 정적 인벤토리 |
| Initial | EPP, EDR, MDM 부분 적용 |
| Advanced | XDR, 통합 정책 집행 |
| Optimal | 디바이스 신뢰 점수 기반 동적 정책 |

### Networks

주요 위협: 측면 이동(lateral movement) → 마이크로세그멘테이션으로 침해 확산 범위 축소.

| 단계 | 핵심 |
|---|---|
| Traditional | VPN, 정적 경계 |
| Initial | ZTNA 1.0, 일부 암호화 |
| Advanced | SASE, SSE, 통합 정책 |
| Optimal | 마이크로세그멘테이션, 전 구간 암호화 |

### Applications & Workloads

| 단계 | 핵심 |
|---|---|
| Traditional | WAF, 정적 코드 검사 |
| Initial | CSPM, 인증 통합 |
| Advanced | CNAPP, 정책 자동화 |
| Optimal | Runtime 보호, 자가 치유 |

### Data

주요 위협: 대량 유출 → 사용 기반 동적 정책으로 비정상 접근 즉시 차단.

| 단계 | 핵심 |
|---|---|
| Traditional | DLP, 정적 분류 |
| Initial | 분류와 라벨링 자동화 시작 |
| Advanced | DSPM, 동적 접근 통제 |
| Optimal | DTAR, 동적 마스킹, 사용 기반 정책 |

## 본 사이트가 재구성한 Function 격자

CISA 원문은 Pillar마다 function 개수가 다르고 "function 25개"라는 용어를 쓰지 않는다. 세 횡단 기능(Visibility & Analytics, Automation & Orchestration, Governance)은 각 Pillar 안에서 function으로 반복 등장한다. 본 사이트는 평가 ID 체계 `ZTA-{Pillar}-{Function}-{NN}`을 위해 Pillar당 대표 function 5개를 선정해 25개 격자로 재구성했다. 아래 명칭은 본 사이트 기준이며 CISA 원문 명칭과 1:1로 일치하지 않을 수 있다.

| Pillar | 대표 Function (본 사이트 재구성) |
|---|---|
| Identity | Authentication, Identity Stores, Risk Assessment, Access Management, Visibility (횡단 기능과 중복) |
| Devices | Policy Enforcement, Asset Management, Resource Access, Device Threat Protection, Visibility (횡단 기능과 중복) |
| Networks | Network Segmentation, Network Traffic Management, Traffic Encryption, Network Resilience, Visibility (횡단 기능과 중복) |
| Applications | Application Access, Application Threat Protection, Accessible Applications, Application Security Testing, Visibility (횡단 기능과 중복) |
| Data | Data Inventory, Data Categorization, Data Availability, Data Access, Data Encryption |

## NIST 및 DoD 표준과의 관계

| 표준 | 성격 | 본 사이트에서의 위치 |
|---|---|---|
| NIST SP 800-207 | 무엇이 Zero Trust인가 (원칙) | 이론적 토대 |
| CISA ZTMM v2 | 어떻게 달성하나 (단계) | 사이트 백본 |
| DoD Zero Trust RA | 군 특화 + 152 Activity | 보조 참조 |

DoD RA의 152 Activity는 7 Pillar 기반의 별도 세부 분류이며, CISA ZTMM의 function 구조와 직접 1:1로 대응하지 않는다.

## 규제 적용

CISA ZTMM은 미국 연방기관 환경을 가정한다. 한국 조직에 적용할 때는 다음을 함께 본다.

**망분리 환경.** ZTMM의 전 구간 암호화와 통합 가시성 가정이 한국 망분리 정책과 충돌할 수 있다. [한국 노트의 망분리 페이지](/korea/regulation/)를 참고한다.

**공공 인증 체계.** CSAP나 KISA 인증과 ZTMM 성숙도는 일대일로 매칭되지 않는다.

**금융 규제.** 전자금융감독규정의 보안성 심의 요건이 별도로 작용한다.

## 본 사이트는 어떻게 활용하나

- 모든 솔루션 리뷰는 ZTMM Pillar와 단계로 분류된다.
- 평가 항목 ID는 ZTMM Function을 참조한다.
- [매트릭스 페이지](/matrix/)는 ZTMM의 5 Pillar × 4 단계 구조 그대로다.

## 출처

- [CISA Zero Trust Maturity Model 공식 페이지](https://www.cisa.gov/zero-trust-maturity-model)
- [CISA ZTMM v2 PDF](https://www.cisa.gov/sites/default/files/2023-04/CISA_Zero_Trust_Maturity_Model_Version_2_508c.pdf)

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
