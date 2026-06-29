---
title: "Okta"
description: "글로벌 IDaaS 시장 리더 시장 정리"
date: 2026-05-30
lastmod: 2026-05-31
tags: ["Okta", "IDaaS", "Identity"]
categories: ["solution-review"]
pillars: ["Identity"]
ShowToc: true
---

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 카테고리 | IDaaS, Workforce Identity Cloud |
| 본사 | 미국 샌프란시스코 (NASDAQ: OKTA) |
| 핵심 모듈 | Universal Directory, SSO, Adaptive MFA, Lifecycle Management, Identity Governance, Privileged Access |
| 시장 위치 | 글로벌 IDaaS 시장 리더 중 하나, 7000개 이상 SaaS 사전 통합, Auth0 보유 |
| 최종 확인일 | 2026-05-31 |

## 어떤 제품인가

Okta는 클라우드 기반 신원 서비스(IDaaS)의 대표 업체입니다.

2009년 설립됐고, 7000개 이상의 SaaS와 사전 통합돼 있어 연동 작업 시간을 줄입니다. 2021년 Auth0를 인수하면서 직원 인증(Workforce)과 외부 고객 인증(Customer)을 함께 다룹니다.

본 리뷰는 Workforce Identity Cloud를 대상으로 하며, Auth0 기반 고객 인증(CIAM)은 별도로 다룹니다.

> **왜 중요한가.** 특정 클라우드 생태계에 묶이지 않은 중립 IDaaS로, 다양한 SaaS와 온프레미스 앱을 한 디렉토리로 통합하는 카탈로그 폭이 핵심 가치입니다.

| 모듈 | 역할 |
|---|---|
| Universal Directory | 여러 신원 저장소를 하나의 디렉토리로 통합 |
| Single Sign-On | SaaS와 온프레미스 통합 인증 |
| Adaptive MFA | 컨텍스트 기반 MFA |
| Lifecycle Management | 입사, 전배, 퇴사 자동화 |
| Identity Governance | 접근 검토와 인증 |
| Privileged Access | PAM 모듈 (2024년 GA) |
| FastPass / Passkey | 비밀번호 없는 인증 |

## 시장 위치

Okta는 클라우드 기반 IDaaS 시장의 리더 중 하나입니다. 7000개 이상 SaaS 사전 통합 카탈로그가 차별점이고, 2021년 Auth0 인수로 직원 인증(Workforce)과 외부 고객 인증(Customer)을 한 벤더로 묶었습니다. 99.99% SLA와 멀티 리전, 대규모 운영 사례를 보유합니다.

특정 클라우드에 종속되지 않은 중립 포지션이 강점이며, Microsoft 365 중심 환경에서는 Microsoft Entra ID와 경쟁합니다. 직접 운영과 깊은 커스터마이징이 필요하면 Ping Identity, ForgeRock을, 저용량 고객 인증은 Auth0를 함께 검토하는 경우가 많습니다. 기본 로그 보관이 90일로 제한돼 장기 보관과 가시성은 SIEM 연동이 권장됩니다.

## 강점과 한계

**강점**
- 7000개 이상의 SaaS 사전 통합 카탈로그
- Adaptive MFA와 Risk Engine의 검증된 운영 이력
- FastPass, Passkey 기반 비밀번호 없는 인증의 사용자 경험
- Auth0 흡수로 직원과 고객 인증 통합
- 단일 콘솔, REST API, SCIM, Terraform Provider 기반 통합 관리

**한계**
- 가격 불투명, 모듈 분리 과금
- 망분리나 온프레미스 강제 환경에는 부적합
- 한국어 UI와 문서가 일부 한정적, 한국 리전 없음
- 기본 로그 90일 한정, 장기 보관과 종합 보안 운영을 위해 SIEM, ITDR 등 별도 보완 필요

## 언제 선택하나

**선택**
- SaaS 통합이 가장 중요한 경우 (7000개 이상 카탈로그)
- 직원 인증과 고객 인증을 한 벤더로 통합하려는 경우
- 클라우드 우선 전략을 따르는 경우
- 비밀번호 없는 인증으로 전환하려는 경우

**회피**
- 망분리 환경 (퍼블릭 SaaS 의존으로 적용이 어려움)
- 온프레미스 디렉토리 중심 환경 (AD 통합은 되지만 클라우드 우위가 사라짐)
- 예산이 빠듯한 경우 (모듈 분리 과금이라 풀 스택은 고비용)
- 데이터 주권이 핵심 요건인 경우 (리전 제어가 제한적)

| 상황 | 권장 솔루션 |
|---|---|
| Microsoft 365 중심 | [Microsoft Entra ID](/solutions/entra-id/) |
| 직접 운영 가능 | Ping Identity, ForgeRock |
| 비용에 민감 | Auth0 (저용량) |
| 망분리 환경 | 국내 EAM 또는 AD와 ADFS |

## 도입 고려사항

**라이선스.** 한국 파트너를 통한 영업 협상이 필요합니다. 공식 가격은 공개되지 않습니다.

**데이터 리전.** 미국, EU, 아시아, 호주 리전 중 선택. 한국 리전은 없습니다.

**공동인증서.** 공동인증(공인인증서)은 직접 지원하지 않습니다. 별도 SDK나 OIDC 브로커가 필요합니다.

**개인정보보호법.** 클라우드 제공 사업자 약관과 DPA를 사전에 검토합니다.

**보안 사고 이력.** 2023년 10월 Okta 지원 케이스 관리 시스템 침해로 고객 HAR 파일이 노출된 사건이 있었습니다. Okta는 이후 관리자 세션과 관리형 디바이스 정책을 강화했습니다. IdP 선정 시 벤더 보안 사고 이력과 대응을 함께 검토합니다.

## 관련 페이지

- [Identity 영역](/pillars/identity/) — Okta가 속한 솔루션 카탈로그 영역

## 출처

- [Okta 공식 사이트](https://www.okta.com/)
- [Okta Trust Center](https://trust.okta.com/)
- [Okta 문서](https://help.okta.com/)
- [Okta + Auth0 통합 안내](https://www.okta.com/auth0/)
- 비교 솔루션: [Microsoft Entra ID](/solutions/entra-id/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 확인 2026-05-31, 다음 확인 2026-08-30
