---
title: "평가 척도 (Scoring Rubric)"
description: "A 일반기능 / B ZT 정합성 — 2축 평가 + ID 체계"
ShowToc: true
---

## 평가 ID 체계

모든 평가 항목은 다음 형식의 **고유 ID** 를 가집니다.

```
ZTA-{Pillar}-{Function}-{NN}
```

| 구성 | 값 |
|---|---|
| Pillar 코드 | `ID` (Identity), `DEV` (Devices), `NET` (Networks), `APP` (Applications), `DATA` (Data), `VIS` (Visibility), `AUTO` (Automation), `GOV` (Governance) |
| Function | 각 Pillar 내 세부 기능 코드 (예: AUTH, STORE, RISK) |
| NN | 2자리 순번 |

**예시**: `ZTA-ID-AUTH-03` = Identity Pillar / Authentication Function / 3번 항목

이 ID 는 외부 인용·검색·교차 참조에 사용됩니다.

## 평가 2축

각 솔루션은 두 축에서 평가되며, 각 축은 10점 만점입니다.

### A. 일반 솔루션 기능 (10점)

| 항목 | 내용 |
|---|---|
| A-1. 통합 관리 | 단일 콘솔, API, 멀티 테넌트 |
| A-2. 가용성 | SLA, 다중 리전, BC/DR |
| A-3. 성능 | 처리 용량, 지연, 확장성 |
| A-4. 운영성 | 학습 곡선, 문서, 한국어 지원 |
| A-5. 비용·라이선스 투명성 | 가격 공개도, 모듈화, 한국 파트너 |

### B. ZT 정합성 (10점) — NIST 7원칙 + CISA ZTMM

| 항목 | 내용 |
|---|---|
| B-1. Never Trust, Always Verify | 모든 접근에 대한 검증 |
| B-2. Least Privilege | 최소 권한 부여·동적 권한 |
| B-3. Assume Breach | 침해 가정 설계 |
| B-4. Continuous Verification | 지속 검증·재인증 |
| B-5. Context-aware Policy | 상황(기기·위치·위험) 기반 정책 |
| B-6. Encryption End-to-End | 전 구간 암호화 |
| B-7. Visibility & Analytics | 가시성·이상 탐지 |
| B-8. CISA ZTMM 단계 | Traditional / Initial / Advanced / Optimal |
| B-9. 자동화 정합 | 정책 자동화·IaC |
| B-10. 거버넌스 정합 | 정책·감사 트레일·증적 |

## 점수 산정 절차

1. 각 항목당 0-2점 (커버 안 함 / 부분 / 완전)
2. A·B 별 합산 → 10점 만점
3. 종합 = (A + B) / 2

## 단계 표기

| 종합 점수 | 표기 |
|---|---|
| 9.0+ | 🟢 Optimal |
| 7.0-8.9 | 🔵 Advanced |
| 5.0-6.9 | 🟡 Initial |
| < 5.0 | ⚪ Traditional |

## 면책

- 점수는 **공개 자료** 기반이며, 실제 도입 환경의 성능·운영은 다를 수 있습니다.
- 점수는 **상대 평가가 아니라 절대 평가**입니다 (벤더 간 1:1 비교에 단독 사용 금지).
- 페이지의 "최종 검토일" 이후 사실관계가 바뀌었을 수 있습니다.

---
*최초 발행: 2026-05-30 · 최종 검토일: 2026-05-30*
