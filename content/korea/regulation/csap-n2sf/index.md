---
title: "공공 클라우드 인증(CSAP)과 N²SF 통합"
description: "CSAP 등급제에서 국정원 단일 검증체계로의 재편과 Zero Trust 정합성"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["korea", "regulation", "csap", "n2sf", "cloud"]
categories: ["korea-note"]
ShowToc: true
---

공공 클라우드 도입의 관문이던 CSAP(클라우드 서비스 보안인증)가 국정원의 [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/)와 통합되는 방향으로 재편되고 있습니다. CSAP 인증과 국정원 보안검증으로 나뉘던 이중 구조를 국정원 단일 검증으로 일원화하고, CSAP의 상, 중, 하 등급은 N²SF의 기밀(C), 민감(S), 공개(O) 등급과 정합됩니다. 가이드라인 개정과 유예기간을 거쳐 2027년 하반기 본격 시행 예정입니다.

## CSAP 정의

**CSAP(Cloud Security Assurance Program)**는 국가, 공공기관에 클라우드 서비스를 공급하려면 통과해야 하는 보안인증입니다. KISA(한국인터넷진흥원)가 주관합니다([ISMS-P 누리집](https://isms.kisa.or.kr/main/csap/intro/)).

| 항목 | 내용 |
|---|---|
| 주관 | KISA |
| 인증 유형 | IaaS, SaaS, DaaS |
| 유효기간 | 5년 |
| 등급 | 상, 중, 하 (2023년 1월 시스템 중요도 분류 기준에 따라 도입) |

출처: [ISMS-P 누리집](https://isms.kisa.or.kr/main/csap/intro/), [SK쉴더스 CSAP 소개](https://www.skshieldus.com/blog-security/security-trend-idx-15)

## 등급별 통제항목

SaaS 인증은 관리적, 기술적, 공공기관용 추가 보호조치로 나뉩니다.

| 인증 구분 | 분야 | 통제항목 수 |
|---|---|:-:|
| SaaS 표준등급 | 13개 | 79개 |
| SaaS 간편등급 | 11개 | 31개 |
| SaaS 하등급 | 11개 | 30개 |

출처: [ISMS-P 누리집](https://isms.kisa.or.kr/main/csap/intro/)

상, 중 등급의 평가기준은 2024년 2월 6일 고시 개정안 행정예고로 마련되었습니다. 상등급은 중등급 평가항목에 더해 **보안감사 로그관리, 외부 네트워크 차단, 계정 및 접근권한 자동화, 보안패치 주기 확인** 4가지를 추가로 요구합니다([김장 법률사무소](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=29017)).

## 통합 재편: 이중 규제에서 단일 검증으로

기존에는 기업이 CSAP 인증을 취득한 뒤에도 별도의 국정원 보안 절차를 거쳐야 했습니다. 이 이중 구조를 하나로 합칩니다.

- **국정원 단일 검증 일원화.** 향후 국정원 기준 중심의 단일 검증으로 공공 시장 진입이 가능해집니다([ZDNet Korea](https://zdnet.co.kr/view/?no=20260420135412)).
- **민간 영역 CSAP의 ISMS 통합.** 민간 영역에서 CSAP는 정보보호 관리체계(ISMS)로 통합 운영됩니다([ZDNet Korea](https://zdnet.co.kr/view/?no=20260420135412)).
- **CSAP 등급과 N²SF 등급 정합.** CSAP의 상, 중, 하 등급은 N²SF의 기밀(C), 민감(S), 공개(O) 등급 체계와 맞춥니다([센트럴뉴스](https://www.sentv.co.kr/article/view/sentv202604230180)).

> **핵심.** CSAP는 "클라우드 서비스가 안전한가"를, N²SF는 "이 정보 등급에 이 통제가 맞는가"를 봅니다. 둘을 하나의 등급 축(C/S/O)으로 묶어 공공 클라우드 진입 문턱을 낮추려는 것입니다.

## 추진 일정

| 시점 | 내용 | 출처 |
|---|---|---|
| 2023-01 | CSAP 상중하 등급제 도입 | [김장 법률사무소](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=29017) |
| 2024-02 | 상, 중 등급 평가기준 행정예고 | [김장 법률사무소](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=29017) |
| 2026 상반기 | 보안 가이드라인 개정 예고 | [ZDNet Korea](https://zdnet.co.kr/view/?no=20260420135412) |
| 2027 하반기 | 통합 체계 본격 시행 (1년 유예 후) | [ZDNet Korea](https://zdnet.co.kr/view/?no=20260420135412) |

## 전환기의 우려

세부 기준이 아직 정해지지 않아, 정책 불확실성이 오히려 단기 시장 위축을 초래할 수 있다는 분석이 있습니다([ZDNet Korea](https://zdnet.co.kr/view/?no=20260420135412), [센트럴뉴스](https://www.sentv.co.kr/article/view/sentv202604230180)). 행정안전부의 별도 등급 체계(국가 핵심 A1에서 일반 A4)와 N²SF 데이터 등급 체계가 결합되면서 현장 부담 우려도 제기됩니다([ZDNet Korea](https://zdnet.co.kr/view/?no=20260420135412)).

## 도입 검토 시 적용

- 솔루션 리뷰의 한국 시장 노트 공공/정부 항목에서 해당 클라우드 솔루션의 CSAP 보유 여부와 N²SF 등급 정합성을 판단하는 근거가 됩니다.
- 공공 클라우드 도입 검토에서는 CSAP 인증과 N²SF 등급(C/S/O)을 함께 맞춰야 합니다.

## 관련 페이지

- [N²SF와 망분리](/korea/regulation/n2sf-mangbunri/)
- [NIST SP 800-207](/framework/nist-800-207/)
- [한국 규제 노트](/korea/regulation/)

## 출처

- [ISMS-P 누리집 — 클라우드 서비스 보안인증 CSAP 소개](https://isms.kisa.or.kr/main/csap/intro/)
- [ZDNet Korea — 공공 클라우드 보안인증 통합, 혼선과 시장 위축 우려](https://zdnet.co.kr/view/?no=20260420135412)
- [센트럴뉴스 — 공공 클라우드 인증 손질, N²SF 연계 혼선 우려](https://www.sentv.co.kr/article/view/sentv202604230180)
- [김장 법률사무소 — 클라우드 보안인증 등급제 본격 시행](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=29017)
- [전자신문 — 내년부터 CSAP 없어도 공공 진출 가능](https://www.etnews.com/20251212000235)
- [SK쉴더스 — CSAP란 무엇인가](https://www.skshieldus.com/blog-security/security-trend-idx-15)

## 면책

본 페이지는 공개 자료를 근거로 합니다. 인증 통합이 진행 중인 영역이며, 세부 평가기준과 시행 일정은 후속 고시로 바뀔 수 있습니다. 권위 있는 해석이 필요하면 KISA와 국정원의 원문 고시를 확인합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
