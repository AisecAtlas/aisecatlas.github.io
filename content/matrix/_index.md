---
title: "ZTA 매트릭스"
description: "CISA ZTMM v2 5 Pillar × 4 성숙도 단계 매트릭스"
ShowToc: false
---

CISA Zero Trust Maturity Model v2 의 5 Pillar 와 4 단계 성숙도를 매트릭스로 시각화한 페이지입니다.

각 셀은 해당 Pillar 의 해당 성숙도 단계를 대표하는 솔루션 카테고리·제품을 의미합니다.
클릭하면 관련 Pillar 핸드북 또는 솔루션 리뷰로 이동합니다.

## 매트릭스

| Pillar | Traditional | Initial | Advanced | Optimal |
|---|---|---|---|---|
| **Identity** | AD / LDAP | IDaaS (Okta, Entra ID) | + 조건부 접근, MFA | + ITDR, 지속 검증 |
| **Devices** | AV | EPP / EDR | XDR / 통합 정책 | + 디바이스 신뢰 점수 |
| **Networks** | VPN | ZTNA 1.0 | SASE / SSE | + 마이크로세그멘테이션 |
| **Applications & Workloads** | WAF | CSPM | CNAPP / CWPP | + Runtime 보호 |
| **Data** | DLP | 분류·라벨링 | DSPM | + DTAR / 동적 마스킹 |

> 🚧 각 셀의 상세 매핑·솔루션 리뷰는 [Pillars](/pillars/) 섹션에서 단계적으로 채워집니다.

## Cross-cutting (횡단 기능)

- [Visibility & Analytics](/cross-cutting/visibility/) — SIEM, XDR, UEBA
- [Automation & Orchestration](/cross-cutting/automation/) — SOAR, IaC 보안
- [Governance](/cross-cutting/governance/) — GRC, 정책 관리

## 참고

- 평가 척도: [/evaluation/](/evaluation/)
- 출처 표준: [/framework/](/framework/)
