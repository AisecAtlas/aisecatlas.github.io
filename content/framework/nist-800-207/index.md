---
title: "NIST SP 800-207"
description: "Zero Trust Architecture의 원전을 한국어로 요약"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["NIST", "Zero Trust", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [NIST SP 800-207 — Zero Trust Architecture (2020)](https://csrc.nist.gov/publications/detail/sp/800-207/final)
>
> 이 페이지는 원문을 한국어로 요약한 것입니다. 권위 있는 해석이 필요하면 원문을 보세요.

## 한 줄 요약

Zero Trust Architecture가 무엇인지 정의한 가장 권위 있는 문서입니다. 추상적인 원칙과 컴포넌트를 설명합니다.

## 어떤 문서인가

| 항목 | 내용 |
|---|---|
| 발표 | 미국 NIST |
| 발표 시점 | 2020년 8월 |
| 위치 | CISA ZTMM, DoD ZT RA의 이론적 토대 |

## 핵심 원칙 7가지

NIST가 정의한 ZTA의 7가지 기본 원칙입니다.

| 번호 | 원칙 | 의미 |
|---|---|---|
| 1 | 모든 데이터와 서비스는 자원 | 보호 대상으로 본다 |
| 2 | 모든 통신은 위치 무관 암호화 | 내부망이라도 신뢰하지 않는다 |
| 3 | 자원 접근은 세션 단위 | 한 번의 인증으로 무제한 통과 불가 |
| 4 | 접근 결정은 동적 정책 | 사용자, 기기, 앱, 환경을 모두 본다 |
| 5 | 모든 자산의 상태를 지속 측정 | 무결성과 보안 상태 추적 |
| 6 | 인증과 인가는 동적이고 엄격 | 한 번 통과로 끝나지 않는다 |
| 7 | 최대한 많은 정보를 수집해 활용 | 의사결정 자료로 사용한다 |

본 사이트의 [평가 척도 B축](/evaluation/scoring-rubric/)은 이 7원칙을 기반으로 합니다.

## 핵심 컴포넌트

Zero Trust는 다음 세 컴포넌트의 협업으로 작동합니다.

```
[사용자/서비스]
      |
      v
[PEP - 정책 집행 지점]  ← 실제 접근 차단/허용
      |
      v
[PDP - 정책 결정 지점]
      ├ PE (Policy Engine): 신뢰 점수 계산
      └ PA (Policy Administrator): 결정을 PEP에 전달
      |
      v
[보호 대상 자원]
```

| 컴포넌트 | 역할 |
|---|---|
| PE (Policy Engine) | 신뢰 점수를 계산하고 허용/거부를 결정 |
| PA (Policy Administrator) | 결정을 PEP에 전달하고 세션을 관리 |
| PEP (Policy Enforcement Point) | 실제로 접근을 차단하거나 허용 |

## 신뢰 알고리즘 입력값

PE가 결정할 때 다음을 입력으로 봅니다.

- Subject (사용자 또는 서비스의 식별 정보)
- Device (자산 신뢰 상태)
- Application (요청한 자원)
- Environment (시간, 위치, 네트워크)
- Threat Intelligence (외부 위협 정보)
- Activity Logs (이력)

## 3가지 배포 변형

NIST는 세 가지 배포 패턴을 제시합니다.

| 변형 | 설명 | 적용 예시 |
|---|---|---|
| Device Agent / Gateway | 디바이스 에이전트가 게이트웨이와 통신 | EDR과 ZTNA 통합 |
| Enclave Gateway | 자원 그룹 단위 게이트웨이 | 레거시 앱 보호 |
| Resource Portal | 포털을 통해 자원 접근 | SaaS 통합 SSO |

## ZTA가 해결하지 못하는 위협

NIST는 원문 3.2장에서 ZTA의 한계도 명시합니다.

- 내부자 위협 (정당한 자격으로 악용)
- 가시성 사각지대 (암호화 때문에 분석이 어려운 부분)
- 정책 자체의 결함
- 신뢰 점수 알고리즘의 오류
- 가용성 (PEP가 단일 실패점이 될 수 있음)

ZTA는 만능이 아닙니다. 다른 통제와 함께 사용해야 한다고 명시합니다.

## CISA ZTMM과의 차이

| 표준 | 답하는 질문 |
|---|---|
| NIST SP 800-207 | Zero Trust란 무엇인가 |
| CISA ZTMM v2 | 어떻게 단계적으로 달성하나 |

본 사이트는 두 표준을 함께 사용합니다. CISA의 5 Pillar 구조 위에서 NIST 7원칙으로 솔루션을 평가합니다.

## 한국에서 참고할 점

K-ZTA 같은 공식 가이드는 아직 NIST 표준을 그대로 채택하는 형태가 아닙니다. 망분리, 전자금융 규제와의 정합성을 함께 짚어야 합니다. 자세한 내용은 [한국 노트의 규제 페이지](/korea/regulation/)에서 정리합니다.

## 출처

- [NIST SP 800-207 공식 페이지](https://csrc.nist.gov/publications/detail/sp/800-207/final)
- [NIST SP 800-207 PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf)

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
