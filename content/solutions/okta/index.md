---
title: "Okta"
description: "글로벌 IDaaS 시장 리더의 표준 정합성 진단"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["Okta", "IDaaS", "Identity"]
categories: ["solution-review"]
pillars: ["Identity"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 영역 | Identity |
| 카테고리 | IDaaS, Workforce Identity Cloud |
| 본사 | 미국 샌프란시스코 (NASDAQ: OKTA) |
| 성숙도 | Advanced (일부 Function은 Optimal) |
| 종합 점수 | 8.4 / 10 |
| 최종 검토 | 2026-05-30 |

## 어떤 제품인가

Okta는 클라우드 기반 신원 서비스(IDaaS)의 시장 리더 중 하나다.

2009년 설립됐고, 7000개 이상의 SaaS와 사전 통합돼 있어 통합 작업 시간을 줄인다. 2021년 Auth0를 인수하면서 직원 인증(Workforce)과 외부 고객 인증(Customer) 양쪽을 모두 다룬다.

본 리뷰는 Workforce Identity Cloud를 대상으로 하며, Auth0 기반 고객 인증(CIAM)은 별도로 다룬다.

## 주요 모듈

| 모듈 | 역할 |
|---|---|
| Universal Directory | 여러 신원 저장소를 하나의 디렉토리로 통합 |
| Single Sign-On | SaaS와 온프레미스 통합 인증 |
| Adaptive MFA | 컨텍스트 기반 MFA |
| Lifecycle Management | 입사, 전배, 퇴사 자동화 |
| Identity Governance | 접근 검토와 인증 |
| Privileged Access | PAM 모듈 (2024년 GA) |
| FastPass / Passkey | 비밀번호 없는 인증 |

## 평가

평가 척도 정의는 [평가 척도 페이지](/evaluation/scoring-rubric/)를 참고한다.

### A축: 일반 기능 (8.5 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| A-1 | 통합 관리 | 2/2 | 단일 콘솔, REST API, SCIM, Terraform Provider |
| A-2 | 가용성 | 2/2 | 99.99% SLA, 멀티 리전 |
| A-3 | 성능 | 2/2 | 대규모 운영 사례 다수 |
| A-4 | 운영성 | 1.5/2 | 문서 풍부, 한국어 UI 일부 |
| A-5 | 비용 투명성 | 1/2 | 가격 미공개, 모듈 분리 과금 |

### B축: 표준 정합성 (8.2 / 10)

| ID | 항목 | 점수 | 근거 |
|---|---|:-:|---|
| ZTA-ID-AUTH-01 | 항상 검증 | 2/2 | FastPass, Passkey, Adaptive MFA |
| ZTA-ID-AUTH-02 | 최소 권한 | 1.5/2 | IGA 별도 라이선스, 동적 권한 부분 지원 |
| ZTA-ID-AUTH-03 | 침해 가정 | 1.5/2 | ITDR은 별도 라이선스나 외부 솔루션 필요 |
| ZTA-ID-AUTH-04 | 지속 검증 | 1.5/2 | 세션 위험 기반 재인증 지원, 일부 흐름 한정 |
| ZTA-ID-AUTH-05 | 컨텍스트 정책 | 2/2 | 디바이스, 위치, 시간, 위험 점수 활용 |
| ZTA-ID-AUTH-06 | 전 구간 암호화 | 2/2 | TLS, OAuth 2.0, OIDC 표준 |
| ZTA-ID-AUTH-07 | 가시성 | 1/2 | 기본 로그 90일, 장기 보관은 별도 |

### 종합

| 축 | 점수 |
|---|---|
| A. 일반 기능 | 8.5 |
| B. 표준 정합성 | 8.2 |
| **종합** | **8.4 (Advanced)** |

### CISA ZTMM Identity Function 매핑

| Function | 단계 | 근거 |
|---|---|---|
| Authentication | Optimal | FastPass, Passkey, 무비번 흐름 |
| Identity Stores | Advanced | Universal Directory, 다중 소스 통합 |
| Risk Assessment | Advanced | Risk Engine, ThreatInsight |
| Access Management | Advanced | 정책 기반 조건부 접근 |
| Visibility & Analytics | Initial | 기본 로그 한정, SIEM 연동 권장 |

## 언제 선택하나

다음 조건에 해당하면 강점이 살아난다.

- SaaS 통합이 가장 중요한 경우 (7000개 이상 카탈로그)
- 직원 인증과 고객 인증을 한 벤더로 통합하려는 경우
- 클라우드 우선 전략을 따르는 경우
- 비밀번호 없는 인증으로 전환하려는 경우

## 언제 피하나

다음 조건이면 다른 선택지를 본다.

- 망분리 환경 (퍼블릭 SaaS 의존으로 적용이 어려움)
- 온프레미스 디렉토리 중심 환경 (AD 통합은 되지만 클라우드 우위가 사라짐)
- 예산이 빠듯한 경우 (모듈 분리 과금이라 풀 스택은 고비용)
- 데이터 주권이 핵심 요건인 경우 (리전 제어가 제한적)

## 대안 비교

| 상황 | 권장 솔루션 |
|---|---|
| Microsoft 365 중심 | [Microsoft Entra ID](/solutions/entra-id/) |
| 직접 운영 가능 | Ping Identity, ForgeRock |
| 비용에 민감 | Auth0 (저용량) |
| 망분리 환경 | 국내 EAM 또는 AD와 ADFS |

## 도입 고려사항

**라이선스.** 한국 파트너를 통한 영업 협상이 필요하다. 공식 가격은 공개되지 않는다.

**데이터 리전.** 미국, EU, 아시아, 호주 리전 중 선택. 한국 리전은 없다.

**공동인증서.** 공동인증(공인인증서)은 직접 지원하지 않는다. 별도 SDK나 OIDC 브로커가 필요하다.

**개인정보보호법.** 클라우드 제공 사업자 약관과 DPA를 사전에 검토한다.

## 강점

- 7000개 이상의 SaaS 사전 통합 카탈로그
- Adaptive MFA와 Risk Engine 성숙도
- 비밀번호 없는 인증의 사용자 경험
- Auth0 흡수로 직원과 고객 인증 통합

## 한계

- 가격 불투명, 모듈 분리 과금
- 망분리나 온프레미스 강제 환경에는 부적합
- 한국어 UI와 문서가 일부 한정적
- 종합 보안 운영을 위해 SIEM, ITDR 등 별도 보완 필요

## 출처

- [Okta 공식 사이트](https://www.okta.com/)
- [Okta Trust Center](https://trust.okta.com/)
- [Okta 문서](https://help.okta.com/)
- [Okta + Auth0 통합 안내](https://www.okta.com/auth0/)

## 비교 솔루션

- [Microsoft Entra ID 정합성 진단](/solutions/entra-id/)

## 면책

2023년 10월 Okta 지원 케이스 관리 시스템 침해로 고객 HAR 파일이 노출된 사건이 있었다. Okta는 이후 관리자 세션과 관리형 디바이스 정책을 강화했다. IdP 선정 시 벤더 보안 사고 이력과 대응을 함께 검토한다.

본 평가는 공개 자료를 근거로 한다. 실제 운영 환경의 가용성과 성능은 다를 수 있다. 절대 평가이지 상대 평가가 아니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
