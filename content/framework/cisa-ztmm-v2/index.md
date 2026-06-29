---
title: "CISA Zero Trust Maturity Model v2"
description: "800-207의 추상 원칙을 5기둥과 3교차역량, 4단계 성숙도 격자로 운영화한 연방 제로 트러스트 로드맵. 기둥별 기능과 단계별 진화를 영문 원제와 함께 정리합니다."
date: 2026-05-30
lastmod: 2026-06-07
tags: ["CISA", "ZTMM", "Zero Trust", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [CISA Zero Trust Maturity Model v2.0 (2023.4)](https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model)
>
> 원문을 한국어로 요약한 자료입니다. 권위 있는 해석이 필요하면 원문을 확인합니다.

CISA Zero Trust Maturity Model(ZTMM) v2.0(2023년 4월)은 [NIST SP 800-207](/framework/nist-800-207/)이 정의한 추상적 제로 트러스트 원칙을 연방기관이 단계적으로 구현하도록 운영화한 성숙도 모델입니다. 800-207이 신뢰를 요청 단위로 재평가하라는 원칙과 PE, PA, PEP 논리 컴포넌트를 정의하는 데 그친다면, ZTMM은 그 원칙을 다섯 기둥(Identity, Devices, Networks, Applications and Workloads, Data)과 세 교차역량으로 가르고, 각 기능이 Traditional에서 Optimal까지 어떻게 진화하는지를 격자로 보여줍니다. 추상 원칙을 어디서부터 어디까지 올려야 하는지의 점진 로드맵입니다.

## 대상과 범위

대상은 미국 연방 시민기관(FCEB)입니다. 다만 기둥과 성숙도 격자 자체는 조직 일반의 제로 트러스트 자가진단 도구로 널리 쓰입니다.

- 적용. 연방기관에는 [EO 14028](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity)과 [OMB M-22-09](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf)를 근거로 사실상 의무. 두 행정 근거가 ZTMM의 기둥과 일정을 강제
- 비적용. 연방 외 조직에는 법적 의무가 아닌 참조 모델. 성숙도 단계는 인증이나 점수가 아니라 자가평가 기준
- 성격. 단일 솔루션 처방이 아니라 기관이 현 역량과 목표 격차를 식별하는 로드맵. 기둥마다 성숙도가 달라도 됨(비대칭 성숙 허용)

## 분류 원칙

분류 축은 두 방향입니다. 세로축은 무엇을 보호하는가(기둥), 가로축은 얼마나 자동화되고 동적인가(성숙도)입니다. 800-207의 원칙은 이 격자의 각 칸에서 어떤 통제로 구현되는지로 위치합니다.

- 5기둥. 보호 대상으로 가른 축. 신원, 기기, 네트워크, 앱과 워크로드, 데이터
- 3교차역량. 다섯 기둥 모두에 반복 적용되는 횡단 축. 가시성과 분석, 자동화와 오케스트레이션, 거버넌스
- 4성숙도. 각 기둥의 기능이 정적이고 수동인 상태에서 자동, 동적, 연속 검증으로 진화하는 단계

800-207의 위치 무관 통신은 Networks 기둥의 트래픽 암호화로, 세션 단위 접근과 동적 정책은 Identity의 접근 관리와 인증으로, 자산 태세 지속 측정은 Devices의 위협 방어로 내려옵니다. 즉 ZTMM은 800-207 7원칙을 기둥과 기능에 분배한 구현 지도입니다.

## 전체 구성 (5기둥과 3교차역량)

다섯 기둥과 세 교차역량 전부입니다. 교차역량은 별도 기둥이 아니라 각 기둥 안에서 가시성, 자동화, 거버넌스 기능으로 반복 등장합니다.

| 기둥과 역량 (영문 원제) | 무엇을 다루나 | 대표 기능 (영문 원제) |
|---|---|---|
| 신원 (Identity) | 사용자와 비인격 개체의 신원 확립, 인증, 위험 평가, 최소권한 접근 | 인증(Authentication), 신원 저장소(Identity Stores), 위험 평가(Risk Assessments), 접근 관리(Access Management, 신설) |
| 기기 (Devices) | 자산 인벤토리와 공급망 위험, 자원 접근 시 기기 신뢰, 위협 방어 | 정책 집행 및 준수 모니터링(Policy Enforcement & Compliance Monitoring), 자산 및 공급망 위험관리(Asset & Supply Chain Risk Management, 신설), 자원 접근(Resource Access), 기기 위협 방어(Device Threat Protection) |
| 네트워크 (Networks) | 경계 의존을 줄이고 세분화와 전 구간 암호화로 측면 이동 차단 | 네트워크 세분화(Network Segmentation), 네트워크 트래픽 관리(Network Traffic Management, 신설), 트래픽 암호화(Traffic Encryption), 네트워크 복원력(Network Resilience) |
| 앱과 워크로드 (Applications and Workloads) | 개발부터 배포와 런타임까지 앱 접근 통제와 위협 방어, 보안 테스트 | 애플리케이션 접근(Application Access), 애플리케이션 위협 방어(Application Threat Protections), 접근 가능 애플리케이션(Accessible Applications), 보안 개발 배포 워크플로(Secure Application Development and Deployment Workflow, 신설), 애플리케이션 보안 테스트(Application Security Testing) |
| 데이터 (Data) | 인벤토리와 분류, 가용성, 접근 통제, 암호화로 유출 통제 | 데이터 인벤토리(Data Inventory), 데이터 분류(Data Categorization, 신설), 데이터 가용성(Data Availability, 신설), 데이터 접근(Data Access), 데이터 암호화(Data Encryption) |
| 가시성과 분석 (Visibility and Analytics) | 로그와 텔레메트리 수집, 상관 분석, 행위 기반 분석으로 상황 인식 | 다섯 기둥 각각의 가시성 역량으로 반복 적용 |
| 자동화와 오케스트레이션 (Automation and Orchestration) | 정책 자동화, 응답 오케스트레이션, 워크플로 통합 | 다섯 기둥 각각의 자동화 역량으로 반복 적용 |
| 거버넌스 (Governance) | 정책 정의와 집행, 준거성, 감사 | 다섯 기둥 각각의 거버넌스 역량으로 반복 적용 |

기능 명칭은 v2.0 원문 표 2~6의 표기를 따릅니다. "신설"은 v1.0에 없다가 v2.0에서 추가되거나 분리된 기능입니다.

## 4단계 성숙도

원문은 Traditional을 출발점으로 두고 Initial, Advanced, Optimal로 올라가는 4단계를 정의합니다. 단계 구분의 기준은 수명주기와 속성 부여가 얼마나 자동화되고 동적인가입니다.

- Traditional. 수동으로 구성한 수명주기, 정적 보안 정책, 수동으로 부여한 속성. 기둥 간 통합이 거의 없고 경계 의존
- Initial. 속성 부여와 정책 집행의 자동화 시작, 기둥 간 초기 통합. v2.0이 Traditional과 Advanced 사이에 신설한 단계
- Advanced. 적용 가능한 영역에서 수명주기와 속성 부여를 자동 제어, 중앙 집중 가시성, 기둥 간 정책 조율
- Optimal. 완전 자동의 적시(just-in-time) 수명주기, 동적 속성 부여, 연속 검증, 전 기둥에 걸친 자가 보고와 통합

Identity 기둥의 인증(Authentication) 기능으로 단계별 진화를 보면 다음과 같습니다.

- Traditional. 비밀번호 또는 정적 MFA로 인증
- Initial. MFA 적용, 다중 속성 검증 요구(예: 위치, 활동)
- Advanced. 피싱 저항 MFA로 전환 시작, 속성 기반 인증
- Optimal. 최초 접근 시점만이 아니라 피싱 저항 MFA로 신원을 연속 검증

조직 전체가 같은 단계일 필요는 없습니다. 기둥마다 다른 단계에 있어도 되며, 원문은 기둥 사이와 기둥 내부의 비대칭 성숙을 전제합니다.

## v1.0에서 v2.0으로

v1.0(2021년 9월) 이후 공개 의견을 반영해 v2.0(2023년 4월)에서 세 가지가 바뀌었습니다.

- Initial 단계 신설. 기존 3단계(Traditional, Advanced, Optimal)에 Initial을 추가해 4단계로 확장. 다수 기관의 레거시 보안이 Traditional과 Advanced 사이에 걸쳐 자가평가가 어렵던 문제를 해소
- 기능 단위 세분화. 기둥별 기능을 추가하고 재정의. 예로 Identity에 접근 관리(Access Management)를 신설해 인가를 인증에서 분리했고, Devices의 자산 및 공급망 위험관리, Networks의 트래픽 관리, Data의 분류와 가용성도 신설
- 교차역량 강조. 가시성과 분석, 자동화와 오케스트레이션, 거버넌스를 Initial 단계부터 다섯 기둥에 명시해 기둥 간 통합을 전면에 둠

## 다른 표준 및 본 사이트와의 관계

| 표준 | 답하는 질문 | ZTMM과의 관계 |
|---|---|---|
| [NIST SP 800-207](/framework/nist-800-207/) | 제로 트러스트란 무엇인가 | 추상 원칙과 PE, PA, PEP 아키텍처의 원전. ZTMM이 이를 운영화 |
| CISA ZTMM v2.0 | 어떻게 단계적으로 달성하나 | 본 페이지(5기둥과 4단계 성숙도 격자) |
| [NIST AI RMF](/framework/nist-ai-rmf/) | AI 위험을 어떻게 거버넌스하나 | 상위 거버넌스 프레임. ZTMM의 Governance 교차역량과 접점 |

**800-207과의 연속성.** 800-207이 7원칙과 논리 컴포넌트를 추상적으로 정의하면, ZTMM은 이를 다섯 기둥과 기능으로 분배하고 성숙도 단계를 입힙니다. 800-207의 PEP 위치, 동적 정책, 자산 태세 측정은 ZTMM의 Networks, Identity, Devices 기능 안에서 단계별 통제로 구현됩니다.

**이 사이트의 5영역과 같은 축.** [ZTA 기반 솔루션 분류](/pillars/)의 다섯 영역(Identity, Devices, Networks, Applications, Data)은 ZTMM 다섯 기둥과 같은 분류 축입니다. 솔루션을 이 격자에 배치하고, 정책 결정과 공급원은 [AI 보안 통합 지도](/ai/map/)에서 기능 축으로 다룹니다.

## 한국 적용

규제 의무가 아니라 참조 모델입니다. 과기정통부와 KISA의 한국형 제로트러스트 가이드라인(1.0, 2.0)은 800-207과 ZTMM을 국내 맥락에 맞춰 인용하며, 다섯 기둥과 성숙도 격자를 자가진단 참조 틀로 씁니다.

- 자가진단. ZTMM 기둥별 성숙도 격자는 한국 조직의 제로 트러스트 현 수준 점검에 그대로 활용. 단계 달성은 의무가 아니라 목표 격차 식별용
- 망분리 정합. ZTMM의 전 구간 암호화와 통합 가시성 가정은 한국 망분리 정책과 충돌 지점이 있음. N²SF의 정보 중요도 기반 차등 보안 전환 논의와 함께 검토. 자세한 맥락은 [한국 규제 노트](/korea/regulation/)에서 다룸
- 인증 체계. CSAP, KISA 인증과 ZTMM 성숙도는 일대일로 매핑되지 않음

## 관련 페이지

- [NIST SP 800-207](/framework/nist-800-207/)
- [ZTA 기반 솔루션 분류](/pillars/)
- [NIST AI RMF](/framework/nist-ai-rmf/)

## 출처

- [CISA Zero Trust Maturity Model 공식 페이지](https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model)
- [CISA ZTMM v2.0 PDF](https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf)
- [CISA ZTMM v2 릴리스 공지 (2023.4.11)](https://www.cisa.gov/news-events/alerts/2023/04/11/cisa-releases-zero-trust-maturity-model-version-2)
- [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final)

5기둥, 3교차역량, 4단계, 기둥별 기능 명칭은 위 CISA 공식 PDF 본문(표 2~6, §4 성숙도 단계)을 직접 확인했습니다. 영문 원문이 권위이며 위 표는 한국어 풀이입니다.

---
최초 발행 2026-05-30, 최종 검토 2026-06-07, 다음 검토 2026-09-07
