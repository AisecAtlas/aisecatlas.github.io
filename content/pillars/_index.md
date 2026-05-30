---
title: "솔루션 가이드"
description: "보안 영역별로 정리한 솔루션 카탈로그와 표준 정합성 진단"
ShowToc: true
---

CISA Zero Trust Maturity Model을 따라 보안 솔루션을 5개 영역으로 분류했습니다. 영역을 골라 들어가면 카테고리 설명과 개별 솔루션 리뷰를 볼 수 있습니다.

## 영역별 솔루션 한눈에 보기

가로축은 성숙도 단계, 세로축은 보안 영역입니다.

| 영역 | 1단계 Traditional | 2단계 Initial | 3단계 Advanced | 4단계 Optimal |
|---|---|---|---|---|
| **Identity** | AD, LDAP | IDaaS (Okta, Entra ID) | 조건부 접근, MFA 강화 | ITDR, 지속 검증 |
| **Devices** | AV | EPP, EDR | XDR, 통합 정책 | 디바이스 신뢰 점수 |
| **Networks** | VPN | ZTNA 1.0 | SASE, SSE | 마이크로세그멘테이션 |
| **Applications** | WAF | CSPM | CNAPP, CWPP | Runtime 보호 |
| **Data** | DLP | 분류와 라벨링 | DSPM | DTAR, 동적 마스킹 |

> 단계는 일직선이 아닙니다. 영역마다 다른 단계여도 됩니다.

## 영역을 선택해 들어가기

### [Identity](identity/) — 신원과 접근

사용자와 서비스의 신원을 확립하고 지속적으로 검증하는 영역입니다.

대표 카테고리: IDaaS, PAM, IGA, ITDR

작성된 리뷰: [Microsoft Entra ID](/solutions/entra-id/), [Okta](/solutions/okta/)

### [Devices](devices/) — 기기와 엔드포인트

엔드포인트, 서버, 모바일, IoT 자산을 관리합니다.

대표 카테고리: EPP, EDR, XDR, MDM, UEM

작성된 리뷰: [CrowdStrike Falcon](/solutions/crowdstrike-falcon/)

### [Networks](networks/) — 네트워크와 접속

네트워크 경계 의존을 줄이고 암호화와 세그멘테이션을 강화합니다.

대표 카테고리: ZTNA, SASE, SSE, 마이크로세그멘테이션

### [Applications & Workloads](applications/) — 애플리케이션과 워크로드

개발부터 런타임까지 애플리케이션의 보안을 다룹니다.

대표 카테고리: CSPM, CNAPP, CWPP, WAF, AI/LLM 보안

### [Data](data/) — 데이터

데이터의 분류, 라벨링, 암호화, 접근 통제, 유출 방지를 다룹니다.

대표 카테고리: DSPM, DLP, 분류와 라벨링, 암호화

## 횡단 기능

5개 영역에 모두 걸쳐 작동하는 기능입니다.

- [Visibility & Analytics](/cross-cutting/visibility/) — SIEM, XDR, UEBA
- [Automation & Orchestration](/cross-cutting/automation/) — SOAR, IaC 보안
- [Governance](/cross-cutting/governance/) — GRC, 정책 관리

## 평가 방식

모든 솔루션 리뷰는 같은 척도를 사용합니다.

- A축: 일반 기능 (10점)
- B축: 표준 정합성 (10점)
- 종합 = 두 축의 평균

평가 항목마다 `ZTA-{영역}-{기능}-{번호}` 형식의 고유 ID가 있습니다. [평가 척도 상세](/evaluation/scoring-rubric/)에서 확인할 수 있습니다.
