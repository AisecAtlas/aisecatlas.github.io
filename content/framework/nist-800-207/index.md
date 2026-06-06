---
title: "NIST SP 800-207"
description: "경계 방어를 자원 단위 동적 접근통제로 바꾸는 제로 트러스트의 원전. 7대 원칙 전체와 PE, PA, PEP 논리 아키텍처, 세 가지 배치 변형을 한국어로 정리합니다."
date: 2026-05-30
lastmod: 2026-06-07
tags: ["NIST", "Zero Trust", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [NIST SP 800-207 — Zero Trust Architecture (2020)](https://csrc.nist.gov/pubs/sp/800/207/final)
>
> 이 페이지는 원문을 한국어로 요약한 것입니다. 권위 있는 해석이 필요하면 원문을 봅니다.

NIST SP 800-207(Zero Trust Architecture, 2020년 8월 최종본)은 네트워크 경계를 신뢰의 기준으로 삼던 방어를 자원 단위의 동적 접근통제로 바꾸는 제로 트러스트를 정의한 원전입니다. 핵심 명제는 신뢰를 위치로 부여하지 않고 요청마다 다시 평가한다는 것입니다. 내부망에 있다는 사실만으로는 어떤 접근도 허용되지 않으며, 모든 접근은 주체와 기기, 환경을 본 정책 결정을 거쳐 자원 직전에서 시행됩니다. 문서는 이를 7대 기본 원칙과 PE, PA, PEP의 논리 아키텍처로 풀어냅니다.

## 대상과 범위

대상은 엔터프라이즈 네트워크의 자원 접근통제를 설계하는 조직입니다. 사용자와 비인격 개체(서비스, 워크로드)가 데이터, 컴퓨팅, IoT 액추에이터 같은 자원에 접근하는 흐름을 어떻게 인증, 인가, 시행할지 다룹니다.

- 포함. 자원 정의와 식별, 위치 무관 통신 보안, 세션 단위 접근, 동적 정책, 자산 태세 측정, 논리 컴포넌트 설계
- 제외. 익명의 공개, 소비자 대상 업무 흐름. 외부 행위자(일반 인터넷 사용자, 고객)에는 내부 정책을 강제하지 못함. 특정 제품 선택 지침이 아님
- 성격. 단일 아키텍처가 아니라 워크플로와 시스템 설계의 지침 원칙. 대다수 조직은 경계 기반과 제로 트러스트가 혼재한 하이브리드로 운영

용어를 구분하면, **ZT**는 신뢰를 요청 단위로 평가하는 개념이고, **ZTA**는 그 개념으로 컴포넌트와 정책을 엮은 조직의 구현 계획이며, **ZTNA**는 그 구현을 제품으로 묶은 시장 범주입니다.

## 7대 원칙

원문 §2.1의 일곱 기본 원칙 전부입니다. 이상적 목표이며 모든 원칙이 순수한 형태로 구현되지는 않는다고 원문이 명시합니다.

| 번호 | 원칙 (영문 키워드) | 핵심 |
|---|---|---|
| 1 | 모든 데이터와 서비스는 자원 (All data sources and computing services are resources) | 단말, 집계 장치, SaaS, 액추에이터, 개인 소유 기기까지 보호 대상 자원으로 분류 |
| 2 | 위치 무관 통신 보안 (All communication is secured regardless of network location) | 내부망 자산도 외부망과 동일한 보안 요건. 기밀성, 무결성, 출처 인증을 가장 안전한 방식으로 |
| 3 | 자원 접근은 세션 단위 (Per-session access) | 요청자 신뢰를 부여 전 평가하고 최소 권한으로 허가. 한 자원 인가가 다른 자원 접근을 자동 허용하지 않음 |
| 4 | 접근은 동적 정책으로 결정 (Determined by dynamic policy) | 클라이언트 신원, 앱과 서비스, 요청 자산 상태에 행동, 환경 속성을 더해 판단 |
| 5 | 모든 자산의 무결성과 태세를 지속 측정 (Monitor and measure integrity and security posture) | 본질적으로 신뢰되는 자산은 없음. CDM 또는 유사 체계로 기기, 앱 상태를 측정하고 조치 |
| 6 | 인증과 인가는 동적이고 엄격하게 시행 (Dynamic, strictly enforced) | 접근 전 인증과 인가를 강제. ICAM과 자산관리, MFA를 두고 세션 중 재인증과 재인가 |
| 7 | 가능한 한 많은 정보를 수집해 태세 개선 (Collect as much information as possible) | 자산 태세, 트래픽, 접근 요청 데이터를 모아 정책 생성과 시행을 개선하고 접근 컨텍스트로 활용 |

## 논리 아키텍처 (PE, PA, PEP)

원문 §3은 정책 결정점(PDP)을 **정책 엔진(PE)**과 **정책 관리자(PA)** 두 논리 컴포넌트로 나누고, 시행은 **정책 시행점(PEP)**에 둡니다. PDP는 제어판에서, 실제 애플리케이션 데이터는 데이터 평면에서 흐릅니다.

<div class="zta">
<div class="zta-title">NIST 800-207 핵심 논리 아키텍처</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine (PE)</div><b>접근 결정</b><span>엔터프라이즈 정책과 외부 입력을 신뢰 알고리즘에 넣어 허용, 거부, 취소를 판단하고 기록</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator (PA)</div><b>세션 구성과 통제</b><span>PE 결정에 따라 PEP에 명령. 세션 토큰 발급, 통신 경로 개설과 종료</span></div>
</div>
</div>
<div class="zta-vconn" data-label="결정과 명령"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사용자 / 서비스</b><span>사람과 비인격 개체. 신원, 자격증명, 자산 태세</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">시행점 (PEP)</div><b>정책 시행점</b><span>연결을 개시, 감시, 종료하는 유일한 인라인 통제점. 클라이언트와 자원측으로 분리되거나 단일 포털</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>엔터프라이즈 자원</b><span>데이터, 컴퓨팅, 앱, IoT 액추에이터. PEP 너머가 신뢰 구역</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">정책과 데이터 공급원</div>
<div class="zta-chips"><span class="zta-chip">CDM 시스템</span><span class="zta-chip">산업 준거성</span><span class="zta-chip">위협 인텔 피드</span><span class="zta-chip">네트워크와 시스템 활동 로그</span><span class="zta-chip">데이터 접근 정책</span><span class="zta-chip">엔터프라이즈 PKI</span><span class="zta-chip">ID 관리 시스템</span><span class="zta-chip">SIEM</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 미신뢰 상태로 PEP에 요청하면, PE가 공급원 신호로 결정하고 PA가 PEP를 구성해 ② 허용 시 자원에 전달합니다.</div>
</div>

**결정과 시행의 분리.** PE는 신뢰 알고리즘으로 허용, 거부, 취소를 판단하고 그 결정을 기록만 합니다. 결정을 집행하는 쪽은 PA로, PEP에 명령을 보내 통신 경로를 열거나 닫고 세션 토큰을 발급합니다. 일부 제품은 PE와 PA를 단일 서비스로 합치지만 원문은 둘을 논리적으로 나눕니다.

**PEP가 유일한 인라인 통제점.** 데이터 평면에서 주체와 자원 사이에 실제로 끼어드는 컴포넌트는 PEP뿐입니다. PEP는 연결을 개시, 감시, 종료하며 PA의 정책 갱신을 받습니다. PEP는 클라이언트측 에이전트와 자원측 게이트웨이로 나뉘거나 단일 포털로 구현됩니다. PEP 너머가 신뢰 구역이며, 통제를 촘촘히 하려면 이 구역을 최대한 작게 둡니다.

**정책과 데이터 공급원.** PE의 판단은 다음 입력을 받습니다.

- CDM 시스템. 자산의 패치 상태, 승인 소프트웨어 무결성, 알려진 취약점을 PE에 제공
- 산업 준거성. FISMA, 의료, 금융 등 규제 요건에 맞춘 정책 규칙
- 위협 인텔 피드. 신규 공격, 취약점, 악성코드 정보를 내외부에서 수집
- 네트워크와 시스템 활동 로그. 자산 로그, 트래픽, 접근 행위를 실시간에 가깝게 집계
- 데이터 접근 정책. 자원 접근 권한을 정의한 속성과 규칙. 인가의 출발점
- 엔터프라이즈 PKI. 자원, 주체, 서비스에 발급한 인증서 생성과 기록
- ID 관리 시스템. 사용자 계정과 신원 레코드 생성, 저장, 관리(LDAP 등)
- SIEM. 보안 정보를 모아 정책을 정련하고 공격을 경고

## 배치 변형

원문 §3.1은 세 접근법을 제시합니다. 모든 원칙을 구현하되 정책의 주된 동인이 무엇이냐가 다르며, 완전한 솔루션은 셋을 섞습니다.

- **강화된 신원 거버넌스 (Enhanced Identity Governance).** 주체의 신원과 부여 속성을 정책의 핵심 축으로 둡니다. 자원 접근은 우선 신원의 권한으로 갈립니다. 방문자나 비엔터프라이즈 기기가 잦은 개방형 네트워크, SaaS처럼 자체 보안 컴포넌트를 둘 수 없는 환경에 맞습니다.
- **마이크로세분화 (Micro-Segmentation).** 자원이나 자원 그룹을 게이트웨이가 보호하는 개별 세그먼트에 둡니다. NGFW, 지능형 스위치, 전용 게이트웨이가 PEP 역할을 합니다. 호스트 기반 에이전트나 엔드포인트 방화벽으로도 구현됩니다. 다양한 사용례에 적용되지만 신원 거버넌스 프로그램이 전제됩니다.
- **네트워크 인프라와 SDP (Network Infrastructure and Software Defined Perimeters).** 오버레이 네트워크로 ZTA를 구현하며 SDP, SDN, 의도 기반 네트워킹 개념을 씁니다. PA가 네트워크 컨트롤러로서 PE 결정에 따라 경로를 구성합니다. 레이어 7에서는 에이전트와 게이트웨이 모델이 일반적입니다.

## 다른 표준, 우리 사이트와의 관계

| 표준 | 답하는 질문 | 800-207과의 관계 |
|---|---|---|
| NIST SP 800-207 | 제로 트러스트란 무엇인가 | 본 페이지(원칙과 아키텍처의 원전) |
| [CISA ZTMM v2](/framework/cisa-ztmm-v2/) | 어떻게 단계적으로 달성하나 | 800-207을 5기둥과 4단계 성숙도로 운영화 |
| [NIST AI RMF](/framework/nist-ai-rmf/) | AI 위험을 어떻게 거버넌스하나 | 상위 거버넌스 프레임(접근통제는 그 아래 통제 영역) |

**CISA ZTMM.** 800-207이 추상 원칙과 컴포넌트를 정의하면, CISA ZTMM은 이를 Identity, Devices, Networks, Applications, Data 5기둥과 4단계 성숙도로 운영화합니다. 본 사이트는 ZTMM 격자 위에서 솔루션을 분류하고 800-207 7원칙을 정합성 기준으로 씁니다.

**벤더 프로필의 PEP 위치.** 본 사이트 [벤더 프로필](/ai/vendors/)이 표시하는 통제 지점은 모두 800-207 PEP의 구현 변형입니다. SASE 인라인(네트워크), 앱과 모델 런타임 인터셉트(애플리케이션), 엔드포인트 에이전트는 PEP가 데이터 평면 어디에 놓이느냐의 차이입니다. PE와 PA에 해당하는 정책 결정과 공급원(태세, 위협 인텔, 로그)은 [AI 보안 통합 지도](/ai/map/)에서 기능 축으로 다룹니다.

## 한국 적용

규제 의무가 아니라 참조 표준입니다. 과기정통부와 KISA의 한국형 제로트러스트 가이드라인(1.0, 2.0)은 800-207을 그대로 채택하지 않고 국내 맥락에 맞춰 인용합니다.

- N²SF. 획일적 망분리를 정보 중요도 기반 차등 보안으로 전환하는 국가망보안체계가 제로 트러스트 원칙과 같은 방향을 가리킵니다. 800-207의 위치 무관 통신과 동적 정책이 망분리 완화 논의의 참조점입니다.
- 정합성. 망분리, 전자금융 규제와의 충돌 지점은 별도로 검토합니다. 자세한 맥락은 [한국 규제 노트](/korea/regulation/)에서 다룹니다.

## 출처

- [NIST SP 800-207 공식 페이지](https://csrc.nist.gov/pubs/sp/800/207/final)
- [NIST SP 800-207 PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf)
- [CISA Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model)

7원칙, 논리 컴포넌트, 공급원 8종, 세 배치 변형은 위 NIST 공식 PDF 본문(§2.1, §3, §3.1)을 직접 확인했습니다. 영문 원문이 권위이며 위 표는 한국어 풀이입니다.

---
최초 발행 2026-05-30, 최종 검토 2026-06-07, 다음 검토 2026-09-07
