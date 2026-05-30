---
title: "Data"
description: "데이터의 분류, 라벨링, 암호화, 접근 통제, 유출 방지."
pillars: ["Data"]
ShowToc: false
---

> **데이터가 어디에 있고 누가 접근하는가를 먼저 파악하는 것이 출발점입니다.** 자산을 모르면 보호할 수 없습니다. DSPM이 부상한 이유입니다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

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

## 시장 동향 (2025-2026)

**DSPM의 부상.** Gartner는 2025년 9월 데이터 보안 태세 관리(DSPM) 시장 가이드를 발간했습니다([Cyera 자료](https://www.cyera.com/reports/2025-gartner-market-guide-for-data-security-posture-management)).

**대형 투자.** Cyera는 2025년 6월 11일 **5억 4천만 달러 규모 시리즈 E**를 유치하며 기업가치 **60억 달러**에 도달했습니다([SiliconANGLE](https://siliconangle.com/2025/06/11/ai-native-data-security-firm-cyera-raises-540m-6b-valuation/)).

**시장 통합.** 2023년부터 2025년 사이 데이터 보안 역량 인수가 이어졌습니다. Cyera는 Trail을 2024년에, Forcepoint는 GetVisibility를 2025년에 인수했습니다([Grand View Research](https://www.grandviewresearch.com/industry-analysis/data-security-posture-management-market-report)).

**사용자 평가.** Varonis는 2025년 Gartner Peer Insights Voice of the Customer에서 2년 연속 Customers' Choice로 선정되었습니다([Varonis 블로그](https://www.varonis.com/blog/gartner-dspm)).

## 작성 예정

- Microsoft Purview (DLP와 분류)
- Cyera DSPM
- Varonis

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

## 한국 시장 적용 노트

**개인정보보호법.** 개인정보의 분류, 접근 통제, 암호화는 법적 의무와 직결됩니다. DSPM과 분류 도구가 정형, 비정형 데이터에서 개인정보를 자동 식별하는지 검증하세요.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/)의 기밀(C), 민감(S), 공개(O) 데이터 등급 분류는 Data Categorization Function과 직접 맞물립니다. 등급 분류 자동화가 N²SF 대응의 출발점입니다.

**공공과 정부.** 클라우드형 DSPM은 [CSAP 인증](/korea/regulation/csap-n2sf/)과 데이터 처리 리전을 확인해야 합니다.

**금융권.** [전자금융감독규정](/korea/regulation/financial-mangbunri/)과 신용정보법의 데이터 보호 요건에 비추어 접근 통제와 암호화 범위를 검토하세요.

---
최종 검토 2026-05-30
