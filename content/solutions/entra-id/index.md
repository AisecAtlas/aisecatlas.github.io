---
title: "Microsoft Entra ID"
description: "Microsoft 365와 통합되는 IDaaS의 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Microsoft", "Entra ID", "Azure AD", "IDaaS", "Identity"]
categories: ["solution-review"]
pillars: ["Identity"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Identity |
| 카테고리 | IDaaS, Workforce와 Customer 통합 |
| 본사 | 미국 레드먼드 (NASDAQ: MSFT) |
| 구 명칭 | Azure Active Directory (2023년 7월에 Entra ID로 개명) |
| 성숙도 | Advanced (Microsoft 환경에서 Optimal) |
| 종합 점수 | 8.9 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

Microsoft가 제공하는 클라우드 신원 플랫폼입니다.

Microsoft 365와 Azure 환경에서 사실상 표준입니다. 시장 점유율도 가장 높습니다. M365 라이선스에 기본 신원 기능이 포함돼 있어서 추가 비용 없이 시작할 수 있는 점이 큰 장점입니다.

## 주요 모듈

| 모듈 | 역할 |
|---|---|
| Entra ID | 핵심 IDaaS, SSO와 MFA, 디렉토리 |
| Entra ID Governance | 신원 거버넌스, 접근 검토와 인증 |
| Privileged Identity Management (PIM) | 권한 상승의 시간 제한 |
| Entra ID Protection | 위험 분석과 이상 탐지 |
| Entra Internet/Private Access | ZTNA와 SSE |
| Entra Permissions Management | 클라우드 권한 관리 (CIEM) |
| Entra Verified ID | 분산 신원 |

## 라이선스 구조

| 에디션 | 차이점 |
|---|---|
| Free | Microsoft 클라우드에 기본 포함 |
| P1 | 조건부 접근, 셀프 서비스 비밀번호 재설정 |
| P2 | Risk Engine, PIM, 접근 검토 |
| Suite | Private Access, CIEM 등 묶음 |

Zero Trust 기능을 본격적으로 쓰려면 P2나 Suite가 필요합니다.

## 평가

평가 척도 정의는 [평가 척도 페이지](/evaluation/scoring-rubric/)를 참고하세요.

### A축: 일반 기능 (9.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Microsoft 365 Admin Center, Graph API, Terraform |
| A-2 | 가용성 | 2/2 | 99.99% SLA, 글로벌 리전 |
| A-3 | 성능 | 2/2 | 대규모 운영 입증 |
| A-4 | 운영성 | 1.5/2 | Microsoft 환경에서 친숙, 외부 환경에선 학습 곡선 |
| A-5 | 비용 투명성 | 1.5/2 | 가격 공개, M365 라이선스 동봉으로 실질 비용 효율 |

### B축: 표준 정합성 (8.9 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-ID-AUTH-01 | 항상 검증 | 2/2 | 조건부 접근, Passkey 지원 |
| ZTA-ID-AUTH-02 | 최소 권한 | 2/2 | PIM으로 시간 제한 권한, 접근 검토 |
| ZTA-ID-AUTH-03 | 침해 가정 | 1.5/2 | ID Protection과 Defender 통합 (P2 필요) |
| ZTA-ID-AUTH-04 | 지속 검증 | 1.5/2 | 세션 위험 평가, 일부 흐름 한정 |
| ZTA-ID-AUTH-05 | 컨텍스트 정책 | 2/2 | 디바이스 컴플라이언스, 위험, 위치 통합 |
| ZTA-ID-AUTH-06 | 전 구간 암호화 | 2/2 | TLS, OIDC, FIPS 인증 |
| ZTA-ID-AUTH-07 | 가시성 | 1.5/2 | Microsoft Sentinel과 Defender 통합 시 강력 |

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 9.0 |
| B. 표준 정합성 | 8.9 |
| **종합** | **8.9 (Advanced, Optimal에 근접)** |

### CISA ZTMM Identity Function 매핑

| Function | 단계 | 근거 |
|---|---|---|
| Authentication | Optimal | Passkey, Windows Hello, 조건부 접근 |
| Identity Stores | Optimal | Entra ID와 AD 통합 |
| Risk Assessment | Optimal | ID Protection과 Defender 통합 |
| Access Management | Advanced | PIM, IGA, 동적 그룹 |
| Visibility & Analytics | Advanced | Microsoft Sentinel 연동 시 우수 |

## 언제 선택하나

- Microsoft 365를 이미 사용하는 조직 (통합 효율과 비용 효율이 가장 큼)
- 하이브리드 AD 환경 (Entra Connect로 자연스럽게 전환됩니다)
- Windows 워크스테이션 중심 (Hello와 Autopilot 통합)
- 보안 스택을 Microsoft로 통일하려는 경우 (Defender, Sentinel, Purview)

## 언제 피하나

- Microsoft 종속을 피하려는 전략 (벤더 lock-in이 심해집니다)
- macOS나 Linux 중심 환경 (통합은 되지만 우위가 사라집니다)
- 고도의 커스터마이징이 필요한 경우 (정책 모델이 Microsoft 가정에 강하게 묶입니다)
- 완전 망분리 환경 (정부 클라우드 옵션은 별도 검토 필요)

## 대안 비교

| 상황 | 권장 솔루션 |
|---|---|
| SaaS 카탈로그 위주 | [Okta](/solutions/okta/) |
| 통제와 커스터마이징 우선 | Ping Identity |
| 외부 고객 인증 위주 | Okta Auth0 |
| 망분리 환경 | 국내 EAM 또는 AD와 ADFS |

## 도입 고려사항

**라이선스.** Microsoft 한국 파트너가 다수입니다. M365 묶음으로 도입하는 사례가 흔합니다.

**데이터 리전.** 한국 리전이 존재합니다. Microsoft Cloud for Sovereignty 옵션은 별도 검토가 필요합니다.

**공공 클라우드.** Azure Korea와 정부용 M365 옵션이 일부 인증을 보유합니다.

**공동인증서.** 직접 통합은 없습니다. 별도 OIDC 브로커가 필요합니다.

## 강점

- Microsoft 365와 거의 무료에 가까운 통합
- P2 라이선스에서 PIM(Privileged Identity Management, 시간제한 권한 상승, 접근 검토)과 ID Protection(위험 기반 조건부 접근) 제공 (작가 반영: 마케팅 최상급 제거, 2026-05-31)
- AD 하이브리드 흐름이 자연스러움
- Defender, Sentinel, Purview와 단일 스택 보안

## 한계

- Microsoft 외 환경에선 일부 기능이 제한적 (macOS, Linux, GCP, AWS)
- P2나 Suite 라이선스가 있어야 Zero Trust에 의미가 있음
- 벤더 종속 심화 가능성
- 정책 모델이 직관적이지 않을 수 있음

## 출처

- [Microsoft Entra 공식 페이지](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id)
- [Entra ID 문서](https://learn.microsoft.com/en-us/entra/identity/)
- [Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center)

## 비교 솔루션

- [Okta 정합성 진단](/solutions/okta/)

## 면책

본 평가는 공개 자료를 근거로 합니다. 실제 운영 환경의 가용성과 성능은 다를 수 있습니다. 절대 평가이지 상대 평가가 아닙니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
