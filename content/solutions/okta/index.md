---
title: "Okta — 정합성 진단"
description: "IDaaS 시장 리더 Okta의 CISA ZTMM Identity Pillar 정합성 평가"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Okta", "IDaaS", "Identity", "SSO", "MFA"]
categories: ["solution-review"]
pillars: ["Identity"]
ShowToc: true
---

## 🏷 Quick Facts

| 항목 | 값 |
|---|---|
| **Pillar** | Identity |
| **카테고리** | IDaaS / Workforce Identity Cloud |
| **본사** | 미국 샌프란시스코 (NASDAQ: OKTA) |
| **주요 제품** | Workforce Identity, Customer Identity (Auth0), Identity Governance |
| **CISA 성숙도** | 🔵 Advanced (일부 Optimal) |
| **종합 점수** | 8.2 / 10 |
| **최종 검토일** | 2026-05-30 |

## 1. Overview (개요)

Okta 는 클라우드 기반 Identity-as-a-Service(IDaaS) 시장의 리더 중 하나.
2009년 설립, 7,000개 이상의 SaaS 와 사전 통합된 카탈로그를 보유한 것이 핵심 강점.
2022년 Auth0 인수로 **Workforce Identity(직원용)** 와 **Customer Identity(외부 사용자용)** 양쪽 모두 커버.

### 주요 모듈

| 모듈 | 역할 |
|---|---|
| Universal Directory | 다양한 ID 소스 통합 디렉토리 |
| Single Sign-On (SSO) | SaaS·온프레미스 통합 인증 |
| Adaptive MFA | 컨텍스트 기반 MFA |
| Lifecycle Management | 입·전·퇴사 자동화 |
| Identity Governance | 접근 검토·인증 (Okta IGA) |
| Privileged Access | PAM 신규 모듈 (2024 GA) |
| FastPass / Passkey | 비밀번호 없는 인증 |

### 한국 시장 위치

- 글로벌 본사 직접 진출 + 다수 파트너 (디지털 솔루션사 등)
- 가격은 일반적으로 사용자당/월 과금, 모듈별 분리 — 상세는 영업 협의
- 망분리 환경에서는 적용 어려움 (퍼블릭 클라우드 의존)

## 2. Evaluation (정합성 평가)

### 평가 척도 적용 결과

자세한 척도 정의는 [평가 척도](/evaluation/scoring-rubric/) 참조.

#### A. 일반 솔루션 기능 (10점)

| ID | 항목 | 점수 | 비고 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | 단일 콘솔, REST API, SCIM, Terraform Provider |
| A-2 | 가용성 | 2/2 | 99.99% SLA, 멀티 리전 |
| A-3 | 성능 | 2/2 | 대규모 사용자 운영 사례 다수 |
| A-4 | 운영성 | 1.5/2 | 문서 풍부, 한국어 UI 일부 지원, 학습 곡선 보통 |
| A-5 | 비용·투명성 | 1/2 | 가격 미공개, 모듈 분리 과금, 한국 직접 라이선스 협상 필요 |
| **A 합계** | | **8.5/10** | |

#### B. ZT 정합성 (10점)

| ID | 항목 | 점수 | 비고 |
|---|---|:-:|---|
| ZTA-ID-AUTH-01 | Never Trust, Always Verify | 2/2 | FastPass, Passkey, Adaptive MFA |
| ZTA-ID-AUTH-02 | Least Privilege | 1.5/2 | Okta IGA 별도 라이선스, 동적 권한 부분 지원 |
| ZTA-ID-AUTH-03 | Assume Breach | 1.5/2 | ITDR 는 별도 라이선스 또는 통합 솔루션 필요 |
| ZTA-ID-AUTH-04 | Continuous Verification | 1.5/2 | Session Risk 기반 재인증 지원, 일부 모듈 한정 |
| ZTA-ID-AUTH-05 | Context-aware Policy | 2/2 | 디바이스·위치·시간·위험 점수 기반 |
| ZTA-ID-AUTH-06 | Encryption End-to-End | 2/2 | TLS, OAuth 2.0 / OIDC 표준 준수 |
| ZTA-ID-AUTH-07 | Visibility & Analytics | 1/2 | System Log 기본 90일, 장기 보관·고급 분석은 별도 |
| **B 합계** | | **11.5/14 → 8.2/10** | (가중 환산) |

#### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.5 |
| B. ZT 정합성 | 8.2 |
| **종합** | **8.4 → 🔵 Advanced** |

### CISA ZTMM Identity Function 매핑

| Function | 단계 | 근거 |
|---|---|---|
| Authentication | 🟢 Optimal | FastPass, Passkey, 무비번 흐름 |
| Identity Stores | 🔵 Advanced | Universal Directory, 다중 소스 통합 |
| Risk Assessment | 🔵 Advanced | Risk Engine, ThreatInsight |
| Access Management | 🔵 Advanced | 정책 기반, 조건부 접근 |
| Visibility & Analytics | 🟡 Initial | 기본 로그 한정, SIEM 연동 권장 |

## 3. Design Decisions (도입 가이드)

### 언제 선택하나

- ✅ **SaaS 통합이 핵심**: 7000+ 카탈로그 = 통합 시간 단축
- ✅ **워크포스 + 고객 ID 통합 필요**: Auth0 흡수로 단일 벤더 가능
- ✅ **클라우드 우선 전략**: 퍼블릭 SaaS 신뢰 가능한 환경
- ✅ **무비번 전환 목표**: FastPass/Passkey 가 상대적 우위

### 언제 피하나

- ❌ **망분리 환경**: 퍼블릭 SaaS 의존 → 적용 곤란
- ❌ **온프레미스 디렉토리 중심**: AD 통합은 가능하나 클라우드 측면이 약화
- ❌ **저예산 조직**: 모듈 분리 과금 → 풀 스택 도입 시 비용 증가
- ❌ **데이터 주권이 극단적으로 중요**: 데이터 리전 제어가 제한적

### 대안 비교

| 상황 | 권장 |
|---|---|
| Microsoft 365 중심 | [Microsoft Entra ID](/solutions/entra-id/) |
| 직접 운영 가능 | Ping Identity, ForgeRock |
| 비용 민감 | Auth0 (저용량) |
| 망분리 환경 | 국내 EAM 또는 AD + ADFS |

## 4. 한국 시장 노트

- **라이선스**: 한국 파트너를 통한 영업 협상 필요. 공식 가격 미공개.
- **데이터 리전**: 미국·EU·아시아·호주 리전 선택 가능. 한국 리전은 없음.
- **인증서 통합**: 공동인증(공인인증서) 같은 한국 특화 인증은 별도 SDK·맞춤 구현 필요.
- **개인정보보호법**: 클라우드 제공 사업자 약관·DPA 검토 필수.

## 5. 강점 / 한계

### 강점
- 7000+ SaaS 사전 통합 카탈로그
- Adaptive MFA·Risk Engine 성숙도
- 무비번(FastPass·Passkey) 흐름의 사용자 경험
- 워크포스·고객 ID 통합 (Auth0 흡수)

### 한계
- 가격 불투명, 모듈 분리 과금
- 망분리·온프레미스 강제 환경에 부적합
- 한국어 UI·문서 일부 한정
- 종합 보안 운영 위해 SIEM·ITDR 등 보완 필요

## 6. 출처

- [Okta 공식 사이트](https://www.okta.com/)
- [Okta Trust Center (보안·컴플라이언스)](https://trust.okta.com/)
- [Okta Documentation](https://help.okta.com/)
- [Okta + Auth0 통합 안내](https://www.okta.com/auth0/)

## 7. 면책

- 본 평가는 **공개 자료** 기반이며, 실제 운영 환경의 가용성·성능은 다를 수 있습니다.
- 점수는 **상대 비교가 아닌 절대 평가** 입니다.
- 본 페이지의 "최종 검토일" 이후 사실관계가 바뀌었을 수 있습니다.

## 8. 비교 솔루션

- [Microsoft Entra ID — 정합성 진단](/solutions/entra-id/) — Microsoft 365 환경 대안
- 🚧 Ping Identity — 작성 예정
- 🚧 OneLogin — 작성 예정

---
*최초 발행: 2026-05-30 · 최종 검토일: 2026-05-30 · 다음 검토 예정: 2026-08-30*
