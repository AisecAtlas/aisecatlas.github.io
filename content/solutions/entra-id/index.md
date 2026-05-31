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
| 구 명칭 | Azure Active Directory (2023년 7월 11일 Entra ID 개명 발표, 8월 15일 전환 개시) |
| 성숙도 | Advanced 상단 (Microsoft 환경에서 Optimal 도달 가능) |
| 종합 점수 | 8.95 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

Microsoft가 제공하는 클라우드 신원 플랫폼이다.

Microsoft 365와 Azure 환경에서 사실상 표준이다. M365 동봉으로 사실상 표준 위치를 점한다(제3자 시장 점유율 수치는 본 페이지 출처상 미검증). M365 라이선스에 기본 신원 기능이 포함돼 추가 비용 없이 시작 가능하다.

> **Conditional Access = Entra의 정책 결정점(PDP).** 사용자, 기기 컴플라이언스, 위험 점수, 위치, 앱 신호를 입력받아 grant control(MFA, 규정 준수 기기 요구)과 session control(앱 강제, 토큰 수명)로 집행한다. NIST 800-207의 PE/PA에 대응한다.

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
| Workload Identities | Managed Identity, Service Principal, Workload ID Premium으로 NPE 거버넌스 |

## 라이선스 구조

| 에디션 | 차이점 |
|---|---|
| Free | Microsoft 클라우드에 기본 포함 |
| P1 | 조건부 접근, 셀프 서비스 비밀번호 재설정 |
| P2 | Risk Engine, PIM, 접근 검토 |
| Suite | Private Access, CIEM 등 묶음 |

Zero Trust 기능을 본격적으로 쓰려면 P2나 Suite가 필요하다.

## 평가

평가 척도 정의는 [평가 척도 페이지](/evaluation/scoring-rubric/)를 참고한다.

### A축: 일반 기능 (9.0 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | Microsoft 365 Admin Center, Graph API, Terraform |
| A-2 | 가용성 | 2/2 | 99.99% SLA (Premium P1/P2 한정, 인증 가용성 기준), 글로벌 리전. Free 에디션은 SLA 없음 |
| A-3 | 성능 | 2/2 | 글로벌 대규모 운영. 구체 인증 처리량 공개 수치는 확인 제한 |
| A-4 | 운영성 | 1.5/2 | Microsoft 환경에서 친숙, 외부 환경에선 학습 곡선 |
| A-5 | 비용 투명성 | 1.5/2 | 가격 공개, M365 라이선스 동봉으로 실질 비용 효율 |

### B축: 표준 정합성 (8.9 / 10)

B축 7항목은 NIST 7원칙(rubric B-1~B-7)이며 각기 다른 Identity Function에 대응한다. ID는 `ZTA-ID-{Function}-{NN}`으로 Function별로 분산 표기한다.

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-ID-AUTH-01 | 항상 검증 | 2/2 | 조건부 접근, Passkey 지원 |
| ZTA-ID-ACCESS-01 | 최소 권한 | 2/2 | PIM으로 시간 제한 권한, 접근 검토 |
| ZTA-ID-RISK-01 | 침해 가정 | 1.5/2 | ID Protection과 Defender 통합 (P2 필요) |
| ZTA-ID-AUTH-02 | 지속 검증 | 1.5/2 | Continuous Access Evaluation(CAE)로 위험 이벤트 시 액세스 토큰을 실시간 무효화하나, 지원 워크로드가 일부(주요 M365, Graph)로 한정 |
| ZTA-ID-RISK-02 | 컨텍스트 정책 | 2/2 | 디바이스 컴플라이언스, 위험, 위치 통합 |
| ZTA-ID-AUTH-03 | 전 구간 암호화 | 2/2 | TLS, OIDC, FIPS 인증 |
| ZTA-ID-VIS-01 | 가시성 | 1.5/2 | Microsoft Sentinel과 Defender 통합 시 우수 |

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 9.0 |
| B. 표준 정합성 | 8.9 |
| **종합** | **8.95 (Advanced 상단, Optimal에 근접)** |

(9.0+8.9)/2 = 8.95. 반올림 시 9.0이나, Free 에디션 SLA 미적용과 일부 지속 검증 흐름 한정을 고려해 보수적으로 Advanced 상단(Optimal 근접)으로 판정한다. CISA ZTMM Function 매핑상 Microsoft 환경에서는 Optimal 도달이 가능하다.

### CISA ZTMM Identity Function 매핑

| Function | 단계 | 근거 |
|---|---|---|
| Authentication | Optimal | Passkey, Windows Hello, 조건부 접근 |
| Identity Stores | Optimal | Entra ID와 AD 통합 |
| Risk Assessment | Optimal | ID Protection과 Defender 통합 |
| Access Management | Advanced | PIM, IGA, 동적 그룹. 권한의 완전 자동 최소화는 운영 구성에 의존해 Optimal로 단정하지 않음 |
| Visibility & Analytics | Advanced | Microsoft Sentinel 연동 시 우수 |

## 언제 선택하나

- Microsoft 365를 이미 사용하는 조직 (통합 효율과 비용 효율이 가장 큼)
- 하이브리드 AD 환경 (Entra Connect로 자연스럽게 전환)
- Windows 워크스테이션 중심 (Hello와 Autopilot 통합)
- 보안 스택을 Microsoft로 통일하려는 경우 (Defender, Sentinel, Purview)

## 언제 피하나

- Microsoft 종속을 피하려는 전략 (벤더 lock-in 심화)
- macOS나 Linux 중심 환경 (통합은 되지만 우위가 사라짐)
- 고도의 커스터마이징이 필요한 경우 (정책 모델이 Microsoft 가정에 강하게 묶임)
- 완전 망분리 환경 (정부 클라우드 옵션은 별도 검토 필요)

## 대안 비교

| 상황 | 권장 솔루션 |
|---|---|
| SaaS 카탈로그 위주 | [Okta](/solutions/okta/) |
| 통제와 커스터마이징 우선 | Ping Identity |
| 외부 고객 인증 위주 | Okta Auth0 |
| 망분리 환경 | 국내 EAM 또는 AD와 ADFS |

## 도입 고려사항

**라이선스.** Microsoft 한국 파트너가 다수다. M365 묶음으로 도입하는 사례가 흔하다.

**데이터 리전.** 한국 리전이 존재한다. Microsoft Cloud for Sovereignty 옵션은 별도 검토가 필요하다.

**공공 클라우드.** Azure Korea와 정부용 M365 옵션이 일부 인증을 보유한다.

**공동인증서.** 직접 통합은 없다. 별도 OIDC 브로커가 필요하다.

## 강점

- Microsoft 365와 거의 무료에 가까운 통합
- P2 라이선스에서 PIM(Privileged Identity Management, 시간제한 권한 상승, 접근 검토)과 ID Protection(위험 기반 조건부 접근) 제공
- AD 하이브리드 흐름이 자연스러움
- Defender, Sentinel, Purview와 단일 스택 보안

위협-통제 매핑:

| 위협 | Entra 통제 |
|---|---|
| AiTM, 토큰 탈취 | phishing-resistant MFA, Token Protection, CAE |
| OAuth 동의 피싱 | 앱 동의 정책, ID Protection |
| 레거시 인증 남용 | 레거시 인증 차단 조건부 접근 정책 |

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

본 평가는 공개 자료를 근거로 한다. 실제 운영 환경의 가용성과 성능은 다를 수 있다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
