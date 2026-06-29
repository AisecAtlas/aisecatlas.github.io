---
title: "Microsoft Entra ID"
description: "Microsoft 365와 통합되는 IDaaS 시장 정리"
date: 2026-05-30
lastmod: 2026-05-31
tags: ["Microsoft", "Entra ID", "Azure AD", "IDaaS", "Identity"]
categories: ["solution-review"]
pillars: ["Identity"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | IDaaS, Workforce와 Customer 통합 |
| 본사 | 미국 레드먼드 (NASDAQ: MSFT) |
| 핵심 모듈 | Entra ID 코어에 Governance, PIM, ID Protection, Internet/Private Access, Permissions Management 등 결합 |
| 시장 위치 | Microsoft 365, Azure 환경의 사실상 표준 IDaaS, M365 라이선스 동봉 |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

Microsoft가 제공하는 클라우드 신원 플랫폼입니다. 구 명칭은 Azure Active Directory로, 2023년 7월 11일 Entra ID 개명이 발표되고 8월 15일부터 전환이 시작됐습니다.

Microsoft 365와 Azure 환경에서 사실상 표준 위치를 점합니다(제3자 시장 점유율 수치는 본 페이지 출처상 미검증). M365 라이선스에 기본 신원 기능이 포함돼 추가 비용 없이 시작합니다.

> **Conditional Access = Entra의 정책 결정점(PDP).** 사용자, 기기 컴플라이언스, 위험 점수, 위치, 앱 신호를 입력받아 grant control(MFA, 규정 준수 기기 요구)과 session control(앱 강제, 토큰 수명)로 집행합니다.

| 모듈 | 역할 |
|---|---|
| Entra ID | 핵심 IDaaS, SSO와 MFA, 디렉토리 |
| Entra ID Governance | 신원 거버넌스, 접근 검토와 인증 |
| Privileged Identity Management (PIM) | 권한 상승의 시간 제한 |
| Entra ID Protection | 위험 분석과 이상 탐지 |
| Entra Internet/Private Access | ZTNA와 SSE |
| Entra Permissions Management | 클라우드 권한 관리 (CIEM) |
| Entra Verified ID | 분산 신원 |
| Workload Identities | Managed Identity, Service Principal, Workload ID Premium으로 NPE 거버넌스 |

라이선스 구조는 다음과 같습니다.

| 에디션 | 차이점 |
|---|---|
| Free | Microsoft 클라우드에 기본 포함 |
| P1 | 조건부 접근, 셀프 서비스 비밀번호 재설정 |
| P2 | Risk Engine, PIM, 접근 검토 |
| Suite | Private Access, CIEM 등 묶음 |

위험 기반 조건부 접근, PIM 등 핵심 보안 기능을 본격적으로 쓰려면 P2나 Suite가 필요합니다.

## 시장 위치

Entra ID는 Microsoft 365와 Azure를 사용하는 조직에서 사실상 표준 신원 플랫폼입니다. M365 라이선스에 기본 신원 기능이 동봉돼 추가 비용 없이 시작할 수 있고, P1, P2, Suite로 올라가며 조건부 접근, Risk Engine, PIM, Private Access, CIEM이 단계적으로 추가되는 구조입니다(제3자 시장 점유율 수치는 본 페이지 출처상 미검증).

99.99% SLA는 Premium P1/P2 한정(인증 가용성 기준)이며 Free 에디션은 SLA가 없습니다. 구체 인증 처리량 공개 수치는 확인이 제한됩니다. 경쟁 구도에서 SaaS 카탈로그 통합 위주는 Okta를, 통제와 커스터마이징 우선은 Ping Identity를, 외부 고객 인증 위주는 Okta Auth0를 함께 검토하는 경우가 많습니다. 강점은 Microsoft 환경 통합이고, macOS/Linux/GCP/AWS 중심 환경에서는 그 우위가 줄어듭니다.

## 강점과 한계

**강점**
- Microsoft 365와 거의 무료에 가까운 통합, M365 라이선스 동봉으로 실질 비용 효율
- 조건부 접근을 정책 결정점으로 하는 위험 기반 접근 통제
- P2의 PIM(시간제한 권한 상승, 접근 검토)과 ID Protection(위험 기반 조건부 접근)
- AD 하이브리드 흐름이 자연스러움 (Entra Connect)
- Defender, Sentinel, Purview와 단일 스택 보안
- Passkey, Windows Hello, FIPS 인증, TLS/OIDC 표준

위협-통제 매핑:

| 위협 | Entra 통제 |
|---|---|
| AiTM, 토큰 탈취 | phishing-resistant MFA, Token Protection, CAE |
| OAuth 동의 피싱 | 앱 동의 정책, ID Protection |
| 레거시 인증 남용 | 레거시 인증 차단 조건부 접근 정책 |

**한계**
- Microsoft 외 환경(macOS, Linux, GCP, AWS)에선 일부 기능이 제한적
- P2나 Suite 라이선스가 있어야 Zero Trust에 의미가 있음
- 벤더 종속 심화 가능성
- 정책 모델이 직관적이지 않을 수 있음
- Continuous Access Evaluation(CAE)은 위험 이벤트 시 토큰을 실시간 무효화하나 지원 워크로드가 일부(주요 M365, Graph)로 한정

## 언제 선택하나

**선택**
- Microsoft 365를 이미 사용하는 조직 (통합 효율과 비용 효율이 가장 큼)
- 하이브리드 AD 환경 (Entra Connect로 자연스럽게 전환)
- Windows 워크스테이션 중심 (Hello와 Autopilot 통합)
- 보안 스택을 Microsoft로 통일하려는 경우 (Defender, Sentinel, Purview)

**회피**
- Microsoft 종속을 피하려는 전략 (벤더 lock-in 심화)
- macOS나 Linux 중심 환경 (통합은 되지만 우위가 사라짐)
- 고도의 커스터마이징이 필요한 경우 (정책 모델이 Microsoft 가정에 강하게 묶임)
- 완전 망분리 환경 (정부 클라우드 옵션은 별도 검토 필요)

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

## 관련 페이지

- [Identity 영역](/pillars/identity/) — 신원 통제 지점과 솔루션 분포
- [Microsoft 벤더 프로필](/ai/vendors/microsoft/) — 회사별 AI 보안 상세

## 출처

- [Microsoft Entra 공식 페이지](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id)
- [Entra ID 문서](https://learn.microsoft.com/en-us/entra/identity/)
- [Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center)
- 비교 솔루션: [Okta](/solutions/okta/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 확인 2026-05-31, 다음 확인 2026-08-30
