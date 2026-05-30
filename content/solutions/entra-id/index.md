---
title: "Microsoft Entra ID — 정합성 진단"
description: "Microsoft 365 통합 IDaaS Entra ID(구 Azure AD)의 CISA ZTMM Identity Pillar 정합성 평가"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Microsoft", "Entra ID", "Azure AD", "IDaaS", "Identity"]
categories: ["solution-review"]
pillars: ["Identity"]
ShowToc: true
---

## 🏷 Quick Facts

| 항목 | 값 |
|---|---|
| **Pillar** | Identity |
| **카테고리** | IDaaS / Workforce + Customer Identity |
| **본사** | 미국 레드먼드 (NASDAQ: MSFT) |
| **구 명칭** | Azure Active Directory (2023년 7월 Entra ID 로 개명) |
| **CISA 성숙도** | 🔵 Advanced (Microsoft 환경에서 Optimal) |
| **종합 점수** | 8.6 / 10 |
| **최종 검토일** | 2026-05-30 |

## 1. Overview (개요)

Microsoft 가 제공하는 클라우드 ID 플랫폼.
Microsoft 365 / Azure 와의 **수직 통합**이 압도적 우위이며, 시장 점유율은 사실상 #1.

### 주요 모듈 (Entra 제품군)

| 모듈 | 역할 |
|---|---|
| Entra ID (구 Azure AD) | 코어 IDaaS — SSO, MFA, 디렉토리 |
| Entra ID Governance | IGA — 접근 검토·인증 |
| Entra Privileged Identity Management (PIM) | 권한 상승의 시간 한정 |
| Entra ID Protection | Risk Engine, 이상 탐지 |
| Entra Internet Access / Private Access | ZTNA·SSE (Microsoft 의 SSE 진출) |
| Entra Permissions Management | CIEM |
| Entra Verified ID | 분산 ID (DID) |

### 라이선스 구조

| 에디션 | 핵심 차이 |
|---|---|
| Free | Microsoft 클라우드 서비스 무료 동봉 |
| P1 | 조건부 접근, 셀프 서비스 비밀번호 재설정 |
| P2 | Risk Engine, PIM, 접근 검토 |
| Suite | Internet/Private Access, CIEM 등 묶음 |

> 💡 대부분의 ZT 기능은 **P2** 또는 Suite 라이선스 필요.

## 2. Evaluation (정합성 평가)

### A. 일반 솔루션 기능 (10점)

| ID | 항목 | 점수 | 비고 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Microsoft 365 Admin Center, Graph API, Terraform |
| A-2 | 가용성 | 2/2 | 99.99% SLA, 글로벌 리전 |
| A-3 | 성능 | 2/2 | 대규모 운영 입증 (수십억 인증/일) |
| A-4 | 운영성 | 1.5/2 | Microsoft 환경에서 매우 친숙, 외부 환경에선 학습 곡선 |
| A-5 | 비용·투명성 | 1.5/2 | 가격 공개, M365 라이선스 동봉으로 실질 비용 효율 |
| **A 합계** | | **9/10** | |

### B. ZT 정합성 (10점)

| ID | 항목 | 점수 | 비고 |
|---|---|:-:|---|
| ZTA-ID-AUTH-01 | Never Trust, Always Verify | 2/2 | 조건부 접근, Passkey 지원 |
| ZTA-ID-AUTH-02 | Least Privilege | 2/2 | PIM 으로 시간 한정 권한, 접근 검토 |
| ZTA-ID-AUTH-03 | Assume Breach | 1.5/2 | Entra ID Protection + Defender 통합 (P2 필요) |
| ZTA-ID-AUTH-04 | Continuous Verification | 1.5/2 | 세션 위험 평가, 일부 흐름 한정 |
| ZTA-ID-AUTH-05 | Context-aware Policy | 2/2 | 디바이스 컴플라이언스·위험·위치 통합 |
| ZTA-ID-AUTH-06 | Encryption End-to-End | 2/2 | TLS, OIDC, FIPS 인증 |
| ZTA-ID-AUTH-07 | Visibility & Analytics | 1.5/2 | Microsoft Sentinel·Defender 와 통합 시 강력 |
| **B 합계** | | **12.5/14 → 8.9/10** | |

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 9.0 |
| B. ZT 정합성 | 8.9 |
| **종합** | **8.9 → 🔵 Advanced (Optimal 근접)** |

### CISA ZTMM Identity Function 매핑

| Function | 단계 | 근거 |
|---|---|---|
| Authentication | 🟢 Optimal | Passkey, Windows Hello, 조건부 접근 |
| Identity Stores | 🟢 Optimal | Entra ID + AD 통합 (Connect/Cloud Sync) |
| Risk Assessment | 🟢 Optimal | ID Protection + Defender 통합 |
| Access Management | 🔵 Advanced | PIM, IGA, 동적 그룹 |
| Visibility & Analytics | 🔵 Advanced | Microsoft Sentinel 연동 시 우수 |

## 3. Design Decisions (도입 가이드)

### 언제 선택하나

- ✅ **Microsoft 365 사용 조직**: 통합 효율·비용 효율 압도적
- ✅ **하이브리드 AD 환경**: Entra Connect 로 자연스러운 전환
- ✅ **Windows 워크스테이션 중심**: Hello/Autopilot 통합
- ✅ **End-to-end 보안 스택 통합**: Defender, Sentinel, Purview 와 동일 콘솔

### 언제 피하나

- ❌ **Microsoft 비종속 전략**: 벤더 종속 심화
- ❌ **macOS / Linux 우세 환경**: Microsoft 외 OS 통합은 가능하나 우위 사라짐
- ❌ **고도 커스터마이징 필요**: 정책 모델이 Microsoft 가정에 강하게 종속
- ❌ **망분리 100%**: 클라우드 의존 (정부 클라우드 일부 옵션 별도)

### 대안 비교

| 상황 | 권장 |
|---|---|
| SaaS 카탈로그 위주 | [Okta](/solutions/okta/) |
| 통제·커스터마이징 우선 | Ping Identity |
| 외부 고객 인증 위주 | Okta Auth0 |
| 망분리 환경 | 국내 EAM 또는 온프레 AD + ADFS |

## 4. 한국 시장 노트

- **라이선스**: Microsoft 한국 파트너 다수, M365 묶음으로 도입 흔함.
- **데이터 리전**: 한국 리전 존재 (Microsoft Cloud for Sovereignty 옵션 별도)
- **공공 클라우드**: Azure Korea + Microsoft 365 정부용 옵션이 일부 인증 보유.
- **공동인증 통합**: 직접 통합은 없음, 별도 OIDC 브로커 필요.
- **개인정보보호법**: DPA·표준약관 공개. 검토 후 도입 가능.

## 5. 강점 / 한계

### 강점
- Microsoft 365 와 거의 무료 통합
- P2 라이선스의 PIM·ID Protection 은 시장 최고 수준
- AD 하이브리드 흐름 자연스러움
- Defender·Sentinel·Purview 와 단일 스택 보안

### 한계
- Microsoft 외 환경(macOS, Linux, GCP, AWS)에선 일부 기능 한정
- P2/Suite 필요 — Free/P1 만으론 ZT 부족
- 벤더 종속(lock-in) 심화 가능성
- 정책 모델이 직관적이지 않을 수 있음 (수십 개 조건)

## 6. 출처

- [Microsoft Entra 공식 페이지](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id)
- [Entra ID 문서](https://learn.microsoft.com/en-us/entra/identity/)
- [Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center)
- [Entra Privileged Identity Management](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure)

## 7. 면책

- 본 평가는 **공개 자료** 기반이며, 실제 운영 환경의 가용성·성능은 다를 수 있습니다.
- 점수는 **상대 비교가 아닌 절대 평가** 입니다.

## 8. 비교 솔루션

- [Okta — 정합성 진단](/solutions/okta/)
- 🚧 Ping Identity — 작성 예정
- 🚧 ForgeRock — 작성 예정

---
*최초 발행: 2026-05-30 · 최종 검토일: 2026-05-30 · 다음 검토 예정: 2026-08-30*
