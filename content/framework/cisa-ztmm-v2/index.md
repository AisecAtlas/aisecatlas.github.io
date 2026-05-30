---
title: "CISA Zero Trust Maturity Model v2 — 한국어 요약"
description: "미국 CISA가 발표한 ZTMM v2 의 5 Pillar 와 4 단계 성숙도를 한국어로 정리"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["CISA", "ZTMM", "Zero Trust", "표준"]
categories: ["framework"]
ShowToc: true
---

> **원문**: [CISA Zero Trust Maturity Model v2.0 (PDF, 2023)](https://www.cisa.gov/zero-trust-maturity-model)
> 본 페이지는 원문을 한국어로 **요약·정리**한 것이며, 권위 있는 해석으로 사용하려면 원문을 참조하십시오.

## 1. 개요

CISA(Cybersecurity and Infrastructure Security Agency, 미국 사이버보안·인프라보안청) 가 미국 연방기관의 Zero Trust 전환을 돕기 위해 발표한 성숙도 모델.
NIST SP 800-207 의 **추상적 원칙**을 **실행 가능한 단계별 가이드**로 구체화한 것이 핵심.

| 항목 | 내용 |
|---|---|
| 발표 기관 | CISA (US DHS 산하) |
| 최신 버전 | v2.0 (2023년 4월) |
| 목적 | 연방기관(원칙적), 민간 자율 적용 |
| 구조 | 5 Pillar + 3 Cross-cutting Capability × 4 Maturity Stage |

## 2. 5 Pillar 와 3 Cross-cutting

### 5 Pillar

| Pillar | 한국어 | 핵심 기능 |
|---|---|---|
| Identity | 신원 | 사용자·서비스 신원 확립, 검증, 권한 관리 |
| Devices | 기기 | 자산 인벤토리, 신뢰 점수, 정책 적용 |
| Networks | 네트워크 | 경계 의존 탈피, 마이크로세그멘테이션, 암호화 |
| Applications & Workloads | 앱·워크로드 | 개발·배포·런타임 보안 |
| Data | 데이터 | 분류·라벨링·암호화·접근 통제·유출 방지 |

### 3 Cross-cutting Capability (전 Pillar 횡단)

| 영역 | 내용 |
|---|---|
| Visibility & Analytics | 로그·텔레메트리, 상관 분석, 위협 헌팅 |
| Automation & Orchestration | 정책 자동화, SOAR, IaC 보안 |
| Governance | 정책·준거성·감사 |

## 3. 4 단계 성숙도

| 단계 | 영문 | 한국어 정의 | 특징 |
|---|---|---|---|
| 1 | Traditional | 전통적 | 정적 정책, 수동 운영, 경계 의존 |
| 2 | Initial | 초기 | 일부 자동화, 통합 시작 |
| 3 | Advanced | 진보 | 정책 자동 집행, 동적 컨텍스트 활용 |
| 4 | Optimal | 최적 | 전 영역 자동·동적·자가 학습 |

> ⚠️ **단계는 1→4 일직선이 아님**. Pillar 마다 다른 단계에 있을 수 있고, 조직 전체가 균등할 필요도 없음.

## 4. Pillar 별 단계 요약

### Identity

| 단계 | 핵심 |
|---|---|
| Traditional | 비밀번호 의존, AD/LDAP 중심 |
| Initial | IDaaS 도입, MFA 부분 적용 |
| Advanced | 조건부 접근, 적응형 MFA, 신원-기기 연계 |
| Optimal | ITDR, 지속 검증, 신뢰 점수 기반 정책 |

### Devices

| 단계 | 핵심 |
|---|---|
| Traditional | AV 기반, 정적 인벤토리 |
| Initial | EPP/EDR, MDM 부분 적용 |
| Advanced | XDR, 통합 정책 집행 |
| Optimal | 디바이스 신뢰 점수 기반 동적 정책 |

### Networks

| 단계 | 핵심 |
|---|---|
| Traditional | VPN, 정적 경계 |
| Initial | ZTNA 1.0, 일부 암호화 |
| Advanced | SASE/SSE, 통합 정책 |
| Optimal | 마이크로세그멘테이션, 전 구간 암호화 |

### Applications & Workloads

| 단계 | 핵심 |
|---|---|
| Traditional | WAF, 정적 코드 검사 |
| Initial | CSPM, 인증 통합 |
| Advanced | CNAPP, 정책 자동화 |
| Optimal | Runtime 보호, 자가 치유 |

### Data

| 단계 | 핵심 |
|---|---|
| Traditional | DLP, 정적 분류 |
| Initial | 분류·라벨링 자동화 시작 |
| Advanced | DSPM, 동적 접근 통제 |
| Optimal | DTAR, 동적 마스킹, 사용 기반 정책 |

## 5. CISA Function 25개 (Pillar 별 세부 기능)

각 Pillar 는 세부 Function 으로 분해된다. 본 사이트의 평가 척도 ID 체계(`ZTA-{Pillar}-{Function}-{NN}`) 는 이 구조를 따른다.

| Pillar | Function 수 | 예시 |
|---|---|---|
| Identity | 5 | Authentication, Identity Stores, Risk Assessment, Access Management, Visibility & Analytics |
| Devices | 5 | Policy Enforcement & Compliance Monitoring, Asset & Supply Chain Risk Management 등 |
| Networks | 5 | Network Segmentation, Network Traffic Management 등 |
| Applications & Workloads | 5 | Application Access, Application Threat Protection 등 |
| Data | 5 | Data Inventory Management, Data Categorization 등 |

> 본 사이트의 매트릭스는 이 25개 Function 을 기반으로 구성된다. 자세한 항목은 [매트릭스](/matrix/) 참조.

## 6. NIST·DoD 와의 관계

| 표준 | 성격 | 본 사이트에서의 위치 |
|---|---|---|
| **NIST SP 800-207** | 추상 원칙 (Zero Trust Architecture 정의) | 이론적 토대 |
| **CISA ZTMM v2** | 단계별 실행 모델 | **사이트 백본** |
| **DoD Zero Trust RA** | 군 특화 + 152 Activity 매핑 | 보조 참조 |

## 7. 한국 적용 시 유의점

CISA ZTMM 은 미국 연방기관 환경을 가정. 한국 조직 적용 시 다음을 고려.

- **망분리 환경**: ZTMM 의 "전 구간 암호화·통합 가시성" 가정과 한국 망분리 정책이 충돌할 수 있음. [한국 노트 — 망분리](/korea/regulation/) 참조.
- **공공 인증 체계**: CSAP/KISA 인증과 ZTMM 성숙도 매핑은 1:1 이 아님.
- **금융 규제**: 전자금융감독규정의 보안성 심의 요건이 별도로 작용.

## 8. 본 사이트에서의 활용

1. 모든 솔루션 리뷰는 ZTMM Pillar 와 단계로 분류
2. 평가 항목 ID 가 ZTMM Function 을 참조
3. 매트릭스 메인 UI 가 ZTMM 5 Pillar × 4 단계 구조

## 출처

- [CISA Zero Trust Maturity Model v2.0 (공식 페이지)](https://www.cisa.gov/zero-trust-maturity-model)
- [CISA ZTMM v2 PDF](https://www.cisa.gov/sites/default/files/2023-04/CISA_Zero_Trust_Maturity_Model_Version_2_508c.pdf)

---
*최초 발행: 2026-05-30 · 최종 검토일: 2026-05-30 · 다음 검토 예정: 2026-08-30*
