---
title: "Governance"
description: "조직 전반의 정책, 표준, 준거성, 감사."
ShowToc: false
---

> **GRC, 정책 관리, 위험 평가, 감사가 핵심입니다.** 모든 영역을 횡단하는 거버넌스 기능으로, 최근 화두는 컴플라이언스 자동화입니다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| GRC | 거버넌스, 위험, 준거성 통합 관리 | ServiceNow GRC, Archer, Drata, Vanta |
| 정책 관리 | 정책을 코드로 정의하고 집행 | Open Policy Agent (OPA), Styra |
| 위험 정량화 | 위험을 금액과 확률로 환산 | RiskLens, ThreatConnect |

## 시장 동향 (2025-2026)

**컴플라이언스 자동화의 성장.** Vanta는 2026년 4월 연간 반복 매출 **3억 달러**(전년 대비 69% 증가)에 도달했고, 2025년 7월 1억 5천만 달러 시리즈 D를 **41억 5천만 달러** 기업가치에 유치했습니다([Sacra](https://sacra.com/c/vanta/)). Drata는 2025년 매출 약 **1억 달러**, 기업가치 **20억 달러** 수준입니다([Sacra](https://sacra.com/c/drata/)).

**GRC 자동화에 AI 결합.** Vanta는 2025년 GRC 자동화 워크플로를 확장하는 AI 에이전트를 출시해 사람 개입을 줄이는 방향으로 갑니다([Sacra](https://sacra.com/c/vanta/)).

**정책을 코드로.** Open Policy Agent(OPA)는 2021년 CNCF Graduated 프로젝트가 됐고, 2025년 기준 주당 약 **100만 회** 다운로드되며 클라우드 네이티브 정책 집행의 사실상 표준이 됐습니다([Styra](https://www.styra.com/blog/open-policy-agent-graduating-in-the-cncf-proves-need-for-cloud-native-authz/)). 정책을 Rego 언어로 코드화해 인프라와 워크로드에 일관되게 적용합니다.

## AI 거버넌스와의 관계

| 구분 | 조직 거버넌스(GRC) | [AI 거버넌스](/ai/ai-governance/) |
|---|---|---|
| 대상 | 조직 전반의 정책과 준거성 | AI 시스템과 모델 |
| 표준 | ISMS-P, ISO 27001, SOC 2 | EU AI Act, NIST AI RMF, ISO 42001 |
| 도구 | Vanta, Drata, ServiceNow | Credo AI, Holistic AI |

AI 거버넌스는 조직 거버넌스의 하위 집합이 아니라, AI 특유의 위험을 다루는 별도 축입니다. 두 축을 연계해 운영하는 것이 바람직합니다.

## 도입 의사결정

### 첫 번째 결정: 무엇이 목적인가

| 목적 | 권장 카테고리 |
|---|---|
| 인증 취득과 유지 자동화 | GRC (Vanta, Drata) |
| 인프라 정책 일관 집행 | 정책 관리 (OPA, Styra) |
| 위험을 경영 언어로 보고 | 위험 정량화 |

### 두 번째 결정: 규모

| 환경 | 권장 |
|---|---|
| 스타트업, 빠른 인증 취득 | Vanta, Drata |
| 대기업, 복잡한 거버넌스 | ServiceNow GRC, Archer |

## 도입 고려사항

**ISMS-P 인증 자동화.** 글로벌 GRC 도구는 SOC 2, ISO 27001 중심입니다. 국내 ISMS-P 인증 항목과의 매핑은 별도 검토가 필요합니다.

**개인정보보호법.** 컴플라이언스 자동화 도구가 [개인정보보호법](/korea/regulation/pipa-zero-trust-data/)의 안전조치 의무를 어떻게 증빙하는지 확인합니다.

**금융권.** 전자금융감독규정과 금융보안 규제의 준거성 증빙을 자동화 도구가 지원하는지 검토합니다. 국내 규제 매핑은 대개 추가 작업이 필요합니다.

---
최종 검토 2026-05-30
