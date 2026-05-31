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
> 이 페이지는 원문을 한국어로 요약한 것이다. 권위 있는 해석이 필요하면 원문을 본다.

## 한 줄 요약

Zero Trust Architecture가 무엇인지 정의한 가장 권위 있는 문서다. 추상적인 원칙과 컴포넌트를 설명한다.

## 어떤 문서인가

| 항목 | 내용 |
|---|---|
| 발표 | 미국 NIST |
| 발표 시점 | 2020년 8월 |
| 위치 | CISA ZTMM, DoD ZT RA의 이론적 토대 |

2023년 NIST는 클라우드 네이티브 환경의 신원 기반 세그멘테이션을 다루는 후속 [SP 800-207A](https://csrc.nist.gov/pubs/sp/800/207/a/final)를 별도 발간했다.

## 핵심 원칙 7가지

NIST가 정의한 ZTA의 7가지 기본 원칙이다.

| 번호 | 원칙 | 의미 | 겨냥 위협 |
|---|---|---|---|
| 1 | 모든 데이터와 서비스는 자원 | 보호 대상으로 본다 | 비관리 자산을 통한 우회 접근 |
| 2 | 모든 통신은 위치 무관 암호화 | 내부망이라도 신뢰하지 않는다 | 내부망 도청, 측면 이동 |
| 3 | 자원 접근은 세션 단위 | 한 번의 인증으로 무제한 통과 불가 | 세션 탈취 후 광범위 접근 |
| 4 | 접근 결정은 동적 정책 | 사용자, 기기, 앱, 환경을 모두 본다 | 정적 규칙 우회 |
| 5 | 모든 자산의 상태를 지속 측정 | 무결성과 보안 상태 추적 | 손상된 기기의 신뢰 유지 |
| 6 | 인증과 인가는 동적이고 엄격 | 한 번 통과로 끝나지 않는다 | 자격증명 재사용, 세션 탈취 |
| 7 | 최대한 많은 정보를 수집해 활용 | 의사결정 자료로 사용한다 | 가시성 사각으로 인한 탐지 실패 |

본 사이트는 솔루션 리뷰에서 이 7원칙을 표준 정합성 기준으로 사용한다.

## 핵심 컴포넌트

Zero Trust는 다음 세 컴포넌트의 협업으로 작동한다. 800-207은 의사결정을 담당하는 control plane(PE/PA)과 실제 트래픽이 흐르는 data plane(Subject↔PEP↔Resource)을 분리한다.

```
[Control Plane]  PE (Policy Engine) ── PA (Policy Administrator)
                                  │ (세션 허용/구성 명령)
───────────────────────────────────────────────────────────
[Data Plane]  Subject ──→ PEP ──→ 보호 대상 자원
```

| 컴포넌트 | 평면 | 역할 |
|---|---|---|
| PE (Policy Engine) | Control | 신뢰 점수를 계산하고 허용/거부를 결정 |
| PA (Policy Administrator) | Control | 결정을 PEP에 전달하고 세션을 관리 |
| PEP (Policy Enforcement Point) | Data | PA의 지시를 받아 실제로 접근을 차단하거나 허용 |

## 신뢰 알고리즘 입력값

NIST는 신뢰 알고리즘을 criteria-based 대 score-based, singular 대 contextual 두 축으로 분류한다(원문 §3.3). 실무에서는 contextual + score-based 조합이 권장된다.

원문 §3.3은 입력으로 Access Request, Subject Database(주체 속성), Asset Database, Resource Policy Requirements, Threat Intelligence를 든다. 아래는 이를 실무 용어로 의역한 것이다.

- Subject (사용자 또는 서비스의 식별 정보, Subject Database에 대응)
- Device (자산 신뢰 상태, Asset Database에 대응)
- Application (요청한 자원과 Resource Policy)
- Environment (시간, 위치, 네트워크)
- Threat Intelligence (외부 위협 정보)
- Activity Logs (이력)

## 4가지 배포 변형

NIST는 원문 §3.1에서 네 가지 배포 패턴을 제시한다.

| 변형 | 설명 | 적용 예시 |
|---|---|---|
| Device Agent / Gateway | 디바이스 에이전트가 게이트웨이와 통신 | EDR과 ZTNA 통합 |
| Enclave Gateway | 자원 그룹 단위 게이트웨이 | 레거시 앱 보호 |
| Resource Portal | 포털을 통해 자원 접근 | SaaS 통합 SSO |
| Device Application Sandboxing | 신뢰된 애플리케이션을 기기 내 격리 샌드박스, 세그먼트에서 실행해 손상된 호스트로부터 보호 | 컨테이너화 앱, 가상화 격리 |

## ZTA가 해결하지 못하는 위협

NIST는 원문 3.2장에서 ZTA의 한계도 명시한다.

- 내부자 위협 (정당한 자격으로 악용)
- 가시성 사각지대 (암호화 때문에 분석이 어려운 부분)
- 정책 자체의 결함
- 신뢰 점수 알고리즘의 오류
- 가용성 (PEP가 단일 실패점이 될 수 있음)
- 독점 솔루션 의존과 상호운용성 부족 (벤더 lock-in이 ZTA 자체의 위협)
- 비인격 개체(NPE), 자동화 에이전트의 ZTA 관리 난이도
- PE/PA에 대한 DoS, 네트워크 교란

ZTA는 만능이 아니다. 다른 통제와 함께 사용해야 한다고 명시한다.

## CISA ZTMM과의 차이

| 표준 | 답하는 질문 |
|---|---|
| NIST SP 800-207 | Zero Trust란 무엇인가 |
| CISA ZTMM v2 | 어떻게 단계적으로 달성하나 |

본 사이트는 두 표준을 함께 사용한다. CISA의 5 Pillar 구조 위에서 NIST 7원칙으로 솔루션을 평가한다.

## 도입 고려사항

과기정통부와 KISA의 한국형 제로트러스트 가이드라인(1.0/2.0)은 NIST 표준을 그대로 채택하지 않는다. 망분리, 전자금융 규제와의 정합성을 함께 짚어야 한다. 자세한 내용은 [한국 노트의 규제 페이지](/korea/regulation/)와 연결한다.

## 출처

- [NIST SP 800-207 공식 페이지](https://csrc.nist.gov/publications/detail/sp/800-207/final)
- [NIST SP 800-207 PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf)
- [NIST SP 800-207A (2023)](https://csrc.nist.gov/pubs/sp/800/207/a/final)

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
