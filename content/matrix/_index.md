---
title: "보안 영역 매트릭스"
description: "5개 Pillar와 4단계 성숙도를 한눈에 본다"
ShowToc: false
---

CISA Zero Trust Maturity Model v2를 따른 매트릭스입니다.

가로축은 성숙도 단계, 세로축은 보안 영역(Pillar)입니다. 각 셀은 해당 영역과 단계를 대표하는 솔루션 카테고리입니다.

## 5개 영역과 4단계

| 영역 | 1단계 Traditional | 2단계 Initial | 3단계 Advanced | 4단계 Optimal |
|---|---|---|---|---|
| **Identity** (신원) | AD, LDAP | IDaaS (Okta, Entra ID) | 조건부 접근, MFA 강화 | ITDR, 지속 검증 |
| **Devices** (기기) | AV | EPP, EDR | XDR, 통합 정책 | 디바이스 신뢰 점수 |
| **Networks** (네트워크) | VPN | ZTNA 1.0 | SASE, SSE | 마이크로세그멘테이션 |
| **Applications** (앱) | WAF | CSPM | CNAPP, CWPP | Runtime 보호 |
| **Data** (데이터) | DLP | 분류와 라벨링 | DSPM | DTAR, 동적 마스킹 |

> 단계는 1에서 4로 가는 일직선이 아닙니다. 영역마다 다른 단계에 있을 수 있고, 조직 전체가 균등할 필요도 없습니다.

## 횡단 기능

특정 영역이 아니라 전 영역에 걸쳐 작동하는 기능입니다.

- [Visibility & Analytics](/cross-cutting/visibility/) — SIEM, XDR, UEBA
- [Automation & Orchestration](/cross-cutting/automation/) — SOAR, IaC 보안
- [Governance](/cross-cutting/governance/) — GRC, 정책 관리

## 더 깊이 보려면

- 영역별 깊이 있는 가이드는 [영역별 가이드](/pillars/)에서 볼 수 있습니다.
- 점수가 어떻게 매겨지는지는 [평가 방법](/evaluation/scoring-rubric/)에서 확인하세요.
- 영역 정의의 출처는 [CISA ZTMM v2 요약](/framework/cisa-ztmm-v2/)에서 볼 수 있습니다.
