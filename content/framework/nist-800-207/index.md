---
title: "NIST SP 800-207 — Zero Trust Architecture 한국어 요약"
description: "Zero Trust Architecture 의 원전(原典). 7가지 원칙과 핵심 컴포넌트를 한국어로 정리"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["NIST", "Zero Trust", "표준"]
categories: ["framework"]
ShowToc: true
---

> **원문**: [NIST SP 800-207 — Zero Trust Architecture (2020)](https://csrc.nist.gov/publications/detail/sp/800-207/final)
> 본 페이지는 원문을 한국어로 **요약·정리**한 것이며, 권위 있는 해석으로 사용하려면 원문을 참조하십시오.

## 1. 개요

NIST 가 2020년에 발표한 **Zero Trust Architecture(ZTA) 의 원전(原典)** 격 표준.
"신뢰하지 않고 항상 검증한다" 라는 추상 원칙을 **컴포넌트와 의사결정 흐름**으로 정의.

| 항목 | 내용 |
|---|---|
| 발표 기관 | NIST (US Department of Commerce) |
| 발표 시점 | 2020년 8월 |
| 후속 표준 | CISA ZTMM v2(2023), DoD ZT RA(2022) 등이 본 표준에 기반 |

## 2. 핵심 원칙 7가지

NIST 가 정의한 ZTA 의 7가지 기본 원칙(Tenets).

| # | 원칙 (영문) | 한국어 요약 |
|---|---|---|
| 1 | All data sources and computing services are considered resources | 모든 데이터·서비스는 보호 대상 자원 |
| 2 | All communication is secured regardless of network location | 모든 통신은 위치 무관 암호화·인증 |
| 3 | Access to individual enterprise resources is granted on a per-session basis | 자원 접근은 **세션 단위**로 부여 |
| 4 | Access is determined by dynamic policy | 접근 결정은 **동적 정책** (사용자·디바이스·앱·환경 컨텍스트) |
| 5 | The enterprise monitors and measures the integrity and security posture of all owned and associated assets | 모든 자산의 무결성·보안 상태를 지속 측정 |
| 6 | All resource authentication and authorization are dynamic and strictly enforced | 모든 인증·인가는 **동적·엄격** |
| 7 | The enterprise collects as much information as possible about the current state of assets, network infrastructure and communications | 가능한 한 많은 정보를 수집·활용 |

본 사이트의 평가 척도 B 축(ZT 정합성)은 이 7원칙을 기반으로 한다.

## 3. 핵심 컴포넌트 (Logical Architecture)

### Policy 의사결정 흐름

```
[Subject (사용자/서비스)]
        ↓
[PEP (Policy Enforcement Point)]  ← 접근 시도
        ↓ 위탁
[PDP (Policy Decision Point)]
        ├─ PE (Policy Engine): 신뢰 점수 계산
        └─ PA (Policy Administrator): 정책 집행
        ↓ 결정 (허용/거부/추가 검증)
[Enterprise Resource (자원)]
```

| 컴포넌트 | 역할 |
|---|---|
| **PE** (Policy Engine) | 신뢰 점수 계산, 허용/거부 결정 |
| **PA** (Policy Administrator) | 결정을 PEP 에 전달, 세션 관리 |
| **PEP** (Policy Enforcement Point) | 접근 차단·허용을 실제 집행 |

### 정책 입력 (Trust Algorithm 입력)

- Subject (사용자·서비스 식별·속성)
- Device (자산 신뢰 상태)
- Application (요청 자원)
- Environment (시간·위치·네트워크)
- Threat Intelligence (외부 위협 정보)
- Activity Logs (이력)

## 4. ZTA 배포 변형 3종

| 변형 | 설명 | 적용 사례 |
|---|---|---|
| **Device Agent / Gateway** | 디바이스 에이전트가 게이트웨이와 통신해 접근 | EDR + ZTNA 통합 |
| **Enclave Gateway** | 자원 군집(enclave) 단위 게이트웨이 | 레거시 앱 보호 |
| **Resource Portal** | 사용자가 포털을 통해 자원 접근 | SaaS 통합 SSO |

## 5. NIST 가 명시한 위협 모델

ZTA 가 **반드시 해결하지는 못하는** 위협 (원문 §3.2 가 명시):

- 내부자 위협 (정당한 자격으로 악용)
- 가시성 사각지대 (암호화로 인한 분석 한계)
- 정책 자체의 결함
- 신뢰 점수 알고리즘의 오류·편향
- 가용성 (PEP 자체가 단일 실패점이 될 수 있음)

→ ZTA 는 만능이 아니며, 다른 통제와 함께 사용해야 한다는 점을 명시.

## 6. CISA ZTMM 과의 관계

| 표준 | 성격 |
|---|---|
| **NIST SP 800-207** | "**무엇**(What)" — ZTA 가 무엇인가, 원칙·컴포넌트 |
| **CISA ZTMM v2** | "**어떻게**(How)" — 단계별로 어떻게 도달하나 |

→ 본 사이트는 두 표준을 함께 활용. CISA 의 5 Pillar 구조 위에서 NIST 의 7원칙으로 솔루션을 평가.

## 7. 한국 적용 노트

- 한국의 **K-ZTA(가칭)** 등 공식 가이드는 아직 NIST 표준을 직접 채택하는 형태가 아님.
- 망분리·전자금융 규제와의 정합 검토 필요.
- 자세한 내용은 [한국 노트 — 규제](/korea/regulation/) 참조.

## 출처

- [NIST SP 800-207 공식 페이지](https://csrc.nist.gov/publications/detail/sp/800-207/final)
- [NIST SP 800-207 PDF 직접 링크](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf)

---
*최초 발행: 2026-05-30 · 최종 검토일: 2026-05-30 · 다음 검토 예정: 2026-08-30*
