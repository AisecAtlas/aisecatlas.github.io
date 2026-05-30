---
title: "Identity Pillar"
description: "CISA ZTMM v2 — Identity Pillar 핸드북"
pillars: ["Identity"]
ShowToc: true
---

## 개념

Identity Pillar 는 사용자·서비스·기기의 **신원 확립과 지속적 검증**을 다룹니다.
ZTA 의 모든 결정(Access Decision)의 출발점이며, "**누가 무엇에 접근하는가**"의 첫 변수입니다.

> 참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## CISA ZTMM v2 — Identity Function 5개

| Function | 한국어 | 핵심 |
|---|---|---|
| Authentication | 인증 | 비밀번호→MFA→무비번 진화 |
| Identity Stores | 신원 저장소 | AD/LDAP→IDaaS 통합 |
| Risk Assessment | 위험 평가 | 컨텍스트·이상 행동 분석 |
| Access Management | 접근 관리 | 정책 기반 동적 권한 |
| Visibility & Analytics | 가시성 | 로그·UEBA·이상 탐지 |

## 4 단계 성숙도

| 단계 | 요약 | 대표 도구 |
|---|---|---|
| Traditional | 비밀번호, AD/LDAP | 사내 AD |
| Initial | IDaaS, MFA | Okta/Entra ID 기본 |
| Advanced | 조건부 접근, 적응형 MFA | Entra P2, Okta + Risk Engine |
| Optimal | ITDR, 지속 검증 | Silverfort, Semperis 등 |

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| **IDaaS / SSO** | 클라우드 ID + SSO 통합 | [Okta](/solutions/okta/), [Microsoft Entra ID](/solutions/entra-id/), Ping Identity |
| **PAM** | 권한 계정 접근 통제 | CyberArk, BeyondTrust, Delinea |
| **IGA** | 신원 거버넌스 (접근 검토·인증) | SailPoint, Saviynt, Omada |
| **ITDR** | 신원 위협 탐지·대응 | Silverfort, Semperis, Authomize |
| **CIAM** | 외부 고객 인증 | Okta Auth0, Frontegg, Stytch |

## 풀 리뷰

### 작성 완료
- ✅ [Okta — 정합성 진단](/solutions/okta/)
- ✅ [Microsoft Entra ID — 정합성 진단](/solutions/entra-id/)

### 작성 예정
- 🚧 Ping Identity
- 🚧 CyberArk Privileged Access Manager
- 🚧 SailPoint IdentityNow
- 🚧 Silverfort ITDR

## Top 리스트

- ✅ [IDaaS Top 5 (2026)](/top/identity-idaas-top-5/)
- 🚧 PAM Top 5
- 🚧 IGA Top 5
- 🚧 ITDR Top 5

## Design Guide (도입 의사결정)

### 첫 번째 결정: 워크포스 vs 고객

| 대상 | 권장 카테고리 |
|---|---|
| 직원·계약자 (Workforce) | IDaaS — 사내 시스템·SaaS 통합 |
| 외부 고객 (Consumer) | CIAM — 회원가입·로그인·MFA |

### 두 번째 결정: 클라우드 의존도

| 환경 | 권장 |
|---|---|
| 클라우드 우선·SaaS 다수 | Okta, Entra ID |
| 하이브리드 (AD 중심 + SaaS 일부) | Entra ID (Connect/Cloud Sync) |
| 망분리·온프레미스 강제 | 국내 EAM 또는 AD + ADFS |

### 세 번째 결정: 성숙도 목표

| 목표 단계 | 최소 추가 솔루션 |
|---|---|
| Initial → Advanced | IDaaS + 조건부 접근 + Adaptive MFA |
| Advanced → Optimal | + ITDR + IGA + 지속 검증 |

## 한국 시장 적용 노트

- **공동인증서 통합**: 글로벌 IDaaS 는 직접 지원 없음 → 별도 SDK·OIDC 브로커 필요
- **개인정보보호법**: 클라우드 IDaaS 도입 시 DPA, 데이터 리전 검토 필수
- **금융권**: 전자금융감독규정·보안성 심의 사전 확인
- **공공·정부**: CSAP 인증 유무 확인

## 참고

- 평가 척도: [/evaluation/scoring-rubric/](/evaluation/scoring-rubric/)
- 매트릭스: [/matrix/](/matrix/)
- 월간 동향: [/weekly/](/weekly/)

---
*최종 검토일: 2026-05-30*
