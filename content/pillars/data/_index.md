---
title: "Data"
description: "데이터의 분류, 라벨링, 암호화, 접근 통제, 유출 방지."
pillars: ["Data"]
ShowToc: false
---

> **데이터의 위치와 접근 주체를 먼저 파악하는 것이 출발점입니다.** 자산을 모르면 보호할 수 없습니다. DSPM이 부상한 이유입니다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 작성된 솔루션 리뷰

<div class="card-grid">

<a href="/solutions/varonis/" class="card">
<div class="card-title">Varonis</div>
<div class="card-desc">데이터 접근 거버넌스(DAG). 권한 분석과 방치 권한 자동 제거로 불필요한 접근을 차단. DSPM, DDR 통합.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/rubrik/" class="card">
<div class="card-title">Rubrik</div>
<div class="card-desc">사이버 복원력. 불변 백업으로 랜섬웨어 후 복구, DSPM과 사이버 복구를 단일 플랫폼에 결합.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/harmonic-security/" class="card">
<div class="card-title">Harmonic Security</div>
<div class="card-desc">브라우저 기반 Shadow AI 발견과 GenAI 데이터 유출 방지. DOM 캡처로 TLS, 핀닝과 무관하게 프롬프트 내용 가시화.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/witnessai/" class="card">
<div class="card-title">WitnessAI</div>
<div class="card-desc">단말 설치 없는 에이전트리스 네트워크 인라인 AI 거버넌스. 사람과 에이전트 AI 상호작용 가시화, 의도 분류.</div>
<div class="card-cta">리뷰 보기</div>
</a>

</div>

## 5개 Function

CISA ZTMM v2 Data 영역의 Function입니다.

| Function | 한국어 | 핵심 |
|---|---|---|
| Data Inventory | 데이터 인벤토리 | 어디에 어떤 데이터가 있는지 자동 발견 |
| Data Categorization | 데이터 분류 | 중요도와 민감도 기준 분류, 라벨링 |
| Data Availability | 데이터 가용성 | 백업과 복구, 접근 연속성 |
| Data Access | 데이터 접근 | 최소 권한 기반 동적 접근 통제 |
| Data Encryption | 데이터 암호화 | 저장과 전송 구간 암호화, 키 관리 |

## 4단계 성숙도

| 단계 | 요약 | 대표 도구 |
|---|---|---|
| Traditional | 수동 분류, 경계 기반 보호 | 스프레드시트 대장, 파일 서버 권한 |
| Initial | 일부 자동 분류, 기본 DLP | Microsoft Purview 기본 |
| Advanced | DSPM 도입, 자동 발견과 분류 | Cyera, Varonis, BigID |
| Optimal | 지속 모니터링, 데이터 흐름 추적 | DSPM과 DLP 통합 운영 |

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| DSPM | 데이터 발견, 분류, 위험 평가 | Cyera, Varonis, BigID, Symmetry |
| DLP | 데이터 유출 방지 | Microsoft Purview, Forcepoint, Trellix DLP |
| 분류와 라벨링 | 민감도 라벨 부여 | Microsoft Purview, Titus, Boldon James |
| 암호화와 키 관리 | 암호화와 키 수명주기 | HashiCorp Vault, AWS KMS, Thales |
| AI 사용 가시화 / Shadow AI | 직원 GenAI 사용 발견과 데이터 보호 | [Harmonic Security](/solutions/harmonic-security/), [WitnessAI](/solutions/witnessai/), Nightfall, Cyberhaven |

직원 AI 사용 가시화의 캡처 메커니즘과 솔루션 지형은 [AI 사용 가시화](/ai/ai-usage-visibility/)에서 정리합니다.

## 시장 동향 (2025-2026)

**DSPM의 부상.** Gartner는 2025년 9월 데이터 보안 태세 관리(DSPM) 시장 가이드를 발간했습니다([Cyera 자료](https://www.cyera.com/reports/2025-gartner-market-guide-for-data-security-posture-management)).

**대형 투자.** Cyera는 2025년 6월 11일 **5억 4천만 달러 규모 시리즈 E**를 유치해 기업가치 **60억 달러**에 도달했습니다([SiliconANGLE](https://siliconangle.com/2025/06/11/ai-native-data-security-firm-cyera-raises-540m-6b-valuation/)).

**시장 통합.** 2023년부터 2025년 사이 데이터 보안 역량 인수가 이어졌습니다. Cyera는 2024년 Trail을, Forcepoint는 2025년 GetVisibility를 인수했습니다([Grand View Research](https://www.grandviewresearch.com/industry-analysis/data-security-posture-management-market-report)).

## 도입 의사결정

### 첫 번째 결정: 무엇이 급한가

| 문제 | 권장 카테고리 |
|---|---|
| 데이터 위치를 모름 | DSPM (발견과 분류 먼저) |
| 유출 차단이 시급 | DLP |
| 규제 대응 분류가 필요 | 분류와 라벨링 |

### 두 번째 결정: 환경

| 환경 | 권장 |
|---|---|
| 멀티 클라우드, 비정형 데이터 다수 | DSPM 우선 |
| Microsoft 365 중심 | Purview 통합 |

### 세 번째 결정: 목표 성숙도

| 목표 단계 | 최소 추가 솔루션 |
|---|---|
| Initial에서 Advanced로 | DSPM 도입, 자동 발견과 분류 |
| Advanced에서 Optimal로 | DSPM과 DLP 통합, 데이터 흐름 지속 모니터링 |

## 도입 고려사항

**개인정보보호법.** 개인정보의 분류, 접근 통제, 암호화는 법적 의무와 직결됩니다. DSPM과 분류 도구가 정형, 비정형 데이터에서 개인정보를 자동 식별하는지 검증합니다.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/)의 기밀(C), 민감(S), 공개(O) 데이터 등급 분류는 Data Categorization Function과 직접 맞물립니다. 등급 분류 자동화가 N²SF 대응의 출발점입니다.

**공공과 정부.** 클라우드형 DSPM은 [CSAP 인증](/korea/regulation/csap-n2sf/)과 데이터 처리 리전을 확인합니다.

**금융권.** [전자금융감독규정](/korea/regulation/financial-mangbunri/)과 신용정보법의 데이터 보호 요건에 비추어 접근 통제와 암호화 범위를 검토합니다.

---
최종 검토 2026-05-30
