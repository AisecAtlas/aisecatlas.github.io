---
title: "Identity"
description: "사용자와 서비스의 신원을 확립하고 지속적으로 검증합니다."
pillars: ["Identity"]
ShowToc: false
---

> **Zero Trust 의사결정은 모두 이 영역에서 출발합니다.** "누가 무엇에 접근하는가"의 첫 번째 변수가 신원입니다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 작성된 솔루션 리뷰

<div class="card-grid">

<a href="/solutions/entra-id/" class="card">
<div class="card-title">Microsoft Entra ID</div>
<div class="card-desc">Microsoft 365와 통합되는 IDaaS. P2 라이선스에서 PIM과 ID Protection 제공.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/okta/" class="card">
<div class="card-title">Okta</div>
<div class="card-desc">7000개 이상 SaaS 카탈로그와 무비밀번호 인증. Auth0 흡수로 직원과 고객 인증 통합.</div>
<div class="card-cta">리뷰 보기</div>
</a>

</div>

## 5개 Function

| Function | 한국어 | 핵심 |
|---|---|---|
| Authentication | 인증 | 비밀번호에서 MFA, 무비번으로 진화 |
| Identity Stores | 신원 저장소 | AD, LDAP에서 IDaaS로 통합 |
| Risk Assessment | 위험 평가 | 컨텍스트와 이상 행동 분석 |
| Access Management | 접근 관리 | 정책 기반 동적 권한 |
| Visibility & Analytics | 가시성과 분석 | 로그, UEBA, 이상 탐지 |

## 4단계 성숙도

| 단계 | 요약 | 대표 도구 |
|---|---|---|
| Traditional | 비밀번호와 AD, LDAP | 사내 AD |
| Initial | IDaaS와 MFA | Okta, Entra ID 기본 |
| Advanced | 조건부 접근, 적응형 MFA | Entra P2, Okta Risk Engine |
| Optimal | ITDR, 지속 검증 | Silverfort, Semperis |

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| IDaaS / SSO | 클라우드 신원과 SSO 통합 | Okta, Entra ID, Ping Identity |
| PAM | 권한 계정 접근 통제 | CyberArk, BeyondTrust, Delinea |
| IGA | 신원 거버넌스 | SailPoint, Saviynt, Omada |
| ITDR | 신원 위협 탐지와 대응 | Silverfort, Semperis, Authomize |
| CIAM | 외부 고객용 인증 | Okta Auth0, Frontegg, Stytch |
| 비인간 신원(NHI) | API 키, 서비스 계정, 토큰 등 기계와 AI 에이전트 신원 관리 | CyberArk, Token Security, Entro Security |

## 도입 의사결정

### 첫 번째 결정: 대상이 누구인가

| 대상 | 권장 카테고리 |
|---|---|
| 직원과 계약자 | IDaaS, 사내 시스템과 SaaS 통합 |
| 외부 고객 | CIAM, 회원가입과 로그인, MFA |

### 두 번째 결정: 클라우드 의존도

| 환경 | 권장 |
|---|---|
| 클라우드 우선, SaaS 다수 | Okta, Entra ID |
| 하이브리드 (AD 중심에 SaaS 일부) | Entra ID와 Connect 또는 Cloud Sync |
| 망분리 강제 환경 | 국내 EAM 또는 AD와 ADFS |

### 세 번째 결정: 목표 성숙도

| 목표 단계 | 최소 추가 솔루션 |
|---|---|
| Initial에서 Advanced로 | IDaaS, 조건부 접근, Adaptive MFA |
| Advanced에서 Optimal로 | ITDR, IGA, 지속 검증 추가 |

### 네 번째 결정: 기계와 AI 에이전트 신원

Agentic AI 확산으로 API 키와 서비스 계정 같은 비인간 신원이 사람 신원을 크게 앞지르면서, 신원 통제가 사람에서 기계와 에이전트로 확장됩니다.

| 상황 | 권장 |
|---|---|
| API 키와 서비스 계정 폭증 | 시크릿 관리([HashiCorp Vault](/solutions/hashicorp-vault/))와 NHI 거버넌스 |
| AI 에이전트가 자율 행동 | 에이전트별 신원, 권한, 감사 추적([Agentic AI 보안](/ai/agentic-security/)) |

## 도입 고려사항

**공동인증서 통합.** 글로벌 IDaaS는 공동인증서를 직접 지원하지 않습니다. 별도 SDK나 OIDC 브로커가 필요합니다.

**개인정보보호법.** 클라우드 IDaaS 도입 시 DPA와 데이터 리전을 검토합니다.

**금융권.** 전자금융감독규정과 보안성 심의를 사전에 확인합니다.

**공공과 정부.** CSAP 인증 보유 여부를 확인합니다.

## 관련 페이지

- [CISA ZTMM v2](/framework/cisa-ztmm-v2/) — Identity 영역의 Function과 성숙도 정의
- [ZTA 기반 솔루션 분류](/pillars/) — 5개 영역 전체의 솔루션 카탈로그
- [AI 거버넌스](/ai/ai-governance/) — AI 에이전트 신원과 권한 통제의 거버넌스 축

---
최종 검토 2026-05-30
