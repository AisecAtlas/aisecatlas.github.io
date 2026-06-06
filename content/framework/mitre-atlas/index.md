---
title: "MITRE ATLAS"
description: "AI 시스템 공격 전술과 기법 지식베이스 한국어 요약"
date: 2026-05-31
lastmod: 2026-05-31
tags: ["MITRE", "ATLAS", "AI 위협", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [MITRE ATLAS](https://atlas.mitre.org)
>
> 이 페이지는 원문을 한국어로 요약한 것입니다. 권위 있는 해석이 필요하면 원문을 봅니다.

## 한 줄 요약

AI와 ML 시스템을 노리는 공격을 정리한 **적대적 위협 지식베이스**입니다. MITRE ATT&CK의 AI판으로, 전술과 기법을 매트릭스로 분류합니다.

## 어떤 문서인가

| 항목 | 내용 |
|---|---|
| 이름 | Adversarial Threat Landscape for AI Systems |
| 발표 기관 | MITRE |
| 버전 | v5.1.0 (2025년 11월) |
| 형식 | ATT&CK형 전술, 기법 매트릭스 |
| 범위 | 데이터 수집, 모델 학습부터 배포, 운영까지 AI 수명주기 전반 |

## 무엇으로 구성되나

ATLAS는 다음 규모의 지식베이스입니다([Vectra 정리](https://www.vectra.ai/topics/mitre-atlas)).

| 구성 | 수 |
|---|---|
| 전술 (Tactics) | 16 |
| 기법 (Techniques) | 84 |
| 하위 기법 (Sub-techniques) | 56 |
| 완화 (Mitigations) | 32 |
| 실사례 (Case Studies) | 42 |

전술은 공격자의 상위 목표(모델 회피, 모델 탈취, 데이터 포이즈닝 등)이고, 기법은 그 목표를 이루는 수단입니다. 2025년에는 AI 에이전트를 겨냥한 **14개 기법**이 추가됐습니다. 프롬프트 인젝션과 메모리 조작 공격을 포함합니다.

## 유사 표준과의 관계

| 표준 | 답하는 질문 | 본 사이트에서의 위치 |
|---|---|---|
| MITRE ATLAS | AI 시스템을 어떻게 공격하나 | 본 페이지 |
| MITRE ATT&CK | 일반 시스템을 어떻게 공격하나 | ATLAS의 원형 |
| [OWASP LLM Top 10](/framework/owasp-llm-top-10/) | LLM 앱의 위험 우선순위는 | 위험 목록 |
| [NIST AI RMF](/framework/nist-ai-rmf/) | AI 위험을 어떻게 거버넌스하나 | 상위 프레임 |

## 규제 적용

**위협 모델링.** ATLAS는 국제 공통 지식베이스라 한국 AI 도입의 위협 모델링과 레드티밍 기준으로 쓸 수 있습니다. 규제 의무가 아니라 자발적 참조입니다.

**AI 레드티밍.** 배포 전 공격 시나리오를 ATLAS 전술과 기법에 매핑하면 점검 범위가 명확해집니다.

## 본 사이트는 이 표준을 어떻게 사용하나

- [AI 레드티밍 비교](/ai/ai-red-teaming/)의 공격 커버리지 매핑 기준
- [AI를 지키는 일](/ai/defend-ai/)의 위협 분류 보조 축
- OWASP LLM Top 10의 위험을 구체 공격 기법으로 연결

## 출처

- [MITRE ATLAS 공식](https://atlas.mitre.org)
- [MITRE ATLAS 팩트시트 (PDF)](https://atlas.mitre.org/pdf-files/MITRE_ATLAS_Fact_Sheet.pdf)
- [ATLAS 데이터 (GitHub)](https://github.com/mitre-atlas/atlas-data)
- [ATLAS 16전술 84기법 정리 (Vectra)](https://www.vectra.ai/topics/mitre-atlas)

---
최초 발행 2026-05-31, 최종 검토 2026-05-31, 다음 검토 2026-08-31
