---
title: "MITRE ATLAS"
description: "AI/ML 시스템 공격을 전술(목표)과 기법(수단)으로 해체한 적대적 위협 지식베이스. 16개 전술 전체와 ATT&CK, OWASP, NIST 대응을 한국어로 정리합니다."
date: 2026-05-31
lastmod: 2026-06-07
tags: ["MITRE", "ATLAS", "AI 위협", "표준"]
categories: ["framework"]
ShowToc: true
---

> 원문: [MITRE ATLAS](https://atlas.mitre.org)
>
> 이 페이지는 원문을 한국어로 요약한 것입니다. 권위 있는 해석이 필요하면 원문을 봅니다.

MITRE ATLAS(Adversarial Threat Landscape for AI Systems)는 AI/ML 시스템을 노리는 공격을 **전술(공격자의 목표)과 기법(목표를 이루는 수단)의 매트릭스**로 해체한 지식베이스입니다. ATT&CK과 같은 구조를 AI 수명주기에 맞춰 옮긴 것으로, 데이터 수집과 모델 학습부터 배포, 추론, 에이전트 운영까지의 공격을 전술별로 분류합니다.

## 대상과 범위

대상은 AI/ML을 구성요소로 쓰는 시스템 전반입니다. 분류 모델, 학습 파이프라인, 추론 API, LLM 애플리케이션, 그리고 도구를 호출하는 AI 에이전트까지 포함합니다.

| 구분 | 내용 |
|---|---|
| 발표 기관 | MITRE |
| 콘텐츠 버전 | 2026.05 (2026-05-27 갱신, 포맷 버전 6.0.0) |
| 형식 | 전술×기법 매트릭스 + 완화책 + 실사례(Case Studies) |
| 적용 | AI 모델, 파이프라인, 추론 API, LLM 앱, AI 에이전트에 대한 위협 모델링과 레드티밍 |
| 비적용 | 조직 차원 거버넌스 통제 설계(이는 NIST AI RMF의 영역), 모델 자체 위험 분류표가 아님 |

ATT&CK과의 관계는 "AI판 ATT&CK"입니다. ATT&CK이 일반 IT 시스템 공격을 다룬다면, ATLAS는 같은 전술 축에 AI 고유 전술과 기법을 더합니다. 일부 전술(Reconnaissance, Initial Access, Impact 등)은 ATT&CK에서 그대로 가져왔고, AI Model Access와 AI Attack Staging은 ATLAS가 추가한 전술입니다.

## 분류 원칙

분류 축은 두 개입니다. 가로축은 **전술**(공격자가 단계별로 달성하려는 목표), 세로축은 각 전술 아래의 **기법**(그 목표를 이루는 구체적 수단)입니다. 전술은 공격 진행 순서를 따르되 선형 절차가 아니라 목표의 집합이며, 하나의 기법이 둘 이상의 전술에 속하기도 합니다.

ATT&CK과 다른 지점은 AI 고유 전술입니다.

- AI Model Access. 추론 API, 모델 산출물, AI 탑재 제품 등 **모델에 어떤 형태로든 접근**하는 단계. 일반 시스템 공격에는 없는 AI 전용 전술입니다.
- AI Attack Staging. 표적 모델에 대한 지식과 접근을 활용해 **공격을 사전 준비하고 검증**하는 단계(대리 모델 생성, 적대적 데이터 제작, 공격 사전 검증 등).

과거 명칭인 ML Model Access, ML Attack Staging은 현재 AI Model Access, AI Attack Staging으로 변경됐습니다. ID(AML.TA0000, AML.TA0001)는 유지됩니다.

## 전체 구성 (전술)

16개 전술을 매트릭스 순서대로 펼칩니다. 기법 수는 콘텐츠 버전 2026.05 기준 **상위 기법(하위 기법 제외)** 개수이며, 하나의 기법이 여러 전술에 걸쳐 합계는 전술별 합과 다릅니다. 전체 기법은 상위 101개, 하위 69개입니다.

| ID | 전술 (영문 원제) | 공격자 목표 | 상위 기법 수 |
|---|---|---|---|
| AML.TA0002 | 정찰(Reconnaissance) | AI 시스템 정보를 수집해 후속 작전을 계획 | 8 |
| AML.TA0003 | 자원 개발(Resource Development) | 공격을 뒷받침할 자원을 확보 | 13 |
| AML.TA0004 | 초기 접근(Initial Access) | AI 시스템에 최초 진입 | 7 |
| AML.TA0000 | AI 모델 접근(AI Model Access) | 추론 API, 산출물, 제품을 통해 모델에 접근 | 4 |
| AML.TA0005 | 실행(Execution) | AI 산출물이나 소프트웨어에 심은 악성 코드를 실행 | 6 |
| AML.TA0006 | 지속(Persistence) | AI 산출물이나 소프트웨어로 거점을 유지 | 9 |
| AML.TA0012 | 권한 상승(Privilege Escalation) | 더 높은 권한을 획득 | 4 |
| AML.TA0007 | 방어 회피(Defense Evasion) | AI 기반 탐지를 우회 | 15 |
| AML.TA0013 | 자격 증명 접근(Credential Access) | 계정과 비밀번호 등 자격 증명을 탈취 | 6 |
| AML.TA0008 | 탐색(Discovery) | 표적 AI 환경의 구성을 파악 | 9 |
| AML.TA0015 | 측면 이동(Lateral Movement) | AI 환경 내부로 이동 | 2 |
| AML.TA0009 | 수집(Collection) | 목표에 필요한 AI 산출물과 정보를 수집 | 4 |
| AML.TA0001 | AI 공격 준비(AI Attack Staging) | 표적 지식을 활용해 공격을 사전 준비하고 검증 | 6 |
| AML.TA0014 | 명령 제어(Command and Control) | 침해된 AI 시스템과 통신해 제어 | 3 |
| AML.TA0010 | 유출(Exfiltration) | AI 산출물과 시스템 정보를 외부로 유출 | 6 |
| AML.TA0011 | 영향(Impact) | AI 시스템과 데이터를 조작, 중단, 신뢰 훼손, 파괴 | 9 |

## 전술별 풀이

- **정찰.** 표적의 AI 역량, 모델, 데이터를 사전 수집합니다. 대표 기법으로 RAG 색인 표적 수집(Gather RAG-Indexed Targets)이 있습니다.
- **자원 개발.** 공격 인프라와 산출물을 준비합니다. 학습 데이터 포이즈닝용 데이터셋 게시(Publish Poisoned Datasets), 포이즈닝된 모델 게시(Publish Poisoned Models)가 포함됩니다.
- **초기 접근.** AI 시스템에 처음 들어갑니다. AI 공급망 침해(AI Supply Chain Compromise), 유효 계정(Valid Accounts), 프롬프트 인젝션을 통한 진입이 대표적입니다.
- **AI 모델 접근.** AI 고유 전술입니다. 추론 API 접근(AI Model Inference API Access), AI 탑재 제품 및 서비스(AI-Enabled Product or Service)를 통해 모델 동작을 관찰하거나 호출합니다.
- **실행.** AI 산출물이나 소프트웨어에 내장된 코드를 실행합니다. LLM 프롬프트 인젝션(LLM Prompt Injection, AML.T0051)이 여기서 모델 제어 흐름을 탈취합니다.
- **지속.** 거점을 유지합니다. 모델 포이즈닝(Poison AI Model)으로 백도어를 남기거나 AI 에이전트 구성을 변경(Modify AI Agent Configuration)합니다.
- **권한 상승.** 더 높은 권한을 확보합니다. 에이전트의 도구 권한을 악용하는 경로가 포함됩니다.
- **방어 회피.** AI 기반 탐지를 우회합니다. 상위 기법 15개로 전 전술 중 가장 많습니다. 적대적 데이터 제작(Craft Adversarial Data)이 대표적입니다.
- **자격 증명 접근.** 자격 증명을 탈취합니다. RAG 자격 증명 수집(RAG Credential Harvesting), 에이전트 구성에서의 자격 증명 획득(Credentials from AI Agent Configuration)이 에이전트 신규 기법입니다.
- **탐색.** 표적 AI 환경을 파악합니다. AI 에이전트 구성 탐색(Discover AI Agent Configuration)이 포함됩니다.
- **측면 이동.** AI 환경 내부로 확산합니다.
- **수집.** 목표에 필요한 산출물을 모읍니다. RAG 데이터베이스, AI 에이전트 도구가 수집 대상입니다.
- **AI 공격 준비.** AI 고유 전술입니다. 대리 모델 생성(Create Proxy AI Model)으로 표적을 모사하고, 공격 사전 검증(Verify Attack, AML.T0042)으로 배포 전 효과를 확인합니다.
- **명령 제어.** 침해된 AI 시스템과 통신합니다. 간접 프롬프트 인젝션으로 모델을 자동화된 명령 제어 통로로 전환하는 경로가 보고됩니다.
- **유출.** 산출물과 정보를 외부로 빼냅니다. AI 에이전트 도구 호출을 통한 유출(Exfiltration via AI Agent Tool Invocation)이 에이전트 신규 기법입니다.
- **영향.** 시스템과 데이터를 조작, 중단, 파괴합니다. AI 에이전트 도구 호출을 통한 데이터 파괴(Data Destruction via AI Agent Tool Invocation), 에이전트 자원 소진(Agentic Resource Consumption)이 포함됩니다.

2025년 갱신에서 생성형 AI와 에이전트 공격면이 크게 확장됐습니다. 2025년 봄 RAG 포이즈닝(RAG Poisoning, AML.T0070), 거짓 RAG 항목 주입(False RAG Entry Injection, AML.T0071) 등이 추가됐고, 2025년 10월 Zenity Labs 협업으로 14개 에이전트 기법이 더해졌습니다. 그중 AI 에이전트 컨텍스트 포이즈닝(AI Agent Context Poisoning, AML.T0080)은 하위 기법으로 **메모리(Memory, AML.T0080.000)** 와 **스레드(Thread, AML.T0080.001)** 를 둡니다. 메모리 조작은 LLM의 장기 메모리를 변조해 악성 변경을 이후 세션까지 지속시키고, 스레드는 단일 대화 스레드 안에서 지속시킵니다.

## 다른 표준과의 관계

| 표준 | 답하는 질문 | ATLAS와의 관계 |
|---|---|---|
| MITRE ATLAS | AI 시스템을 어떻게 공격하나 | 본 페이지 |
| MITRE ATT&CK | 일반 시스템을 어떻게 공격하나 | ATLAS의 원형(전술 축을 공유) |
| [OWASP LLM Top 10](/framework/owasp-llm-top-10/) | LLM 앱의 위험 우선순위는 | LLM01(프롬프트 인젝션) ↔ ATLAS LLM Prompt Injection(AML.T0051) 등 위험과 기법이 대응 |
| [NIST AI RMF](/framework/nist-ai-rmf/) | AI 위험을 어떻게 거버넌스하나 | 상위 거버넌스 프레임(ATLAS는 그 아래 위협 분류 근거) |

OWASP LLM Top 10이 LLM 앱 위험을 순위로 추린 목록이라면, ATLAS는 그 위험을 일으키는 구체적 공격 기법을 전술별로 펼친 매트릭스입니다. 둘을 함께 쓰면 위험 우선순위(OWASP)와 공격 경로(ATLAS)가 연결됩니다.

## 한국 적용

ATLAS는 국제 공통 지식베이스로, 한국 AI 도입의 위협 모델링과 레드티밍 참조 기준으로 활용합니다. 규제 의무가 아니라 자발적 참조입니다.

- 위협 모델링. 시스템의 공격면을 16개 전술 축에 매핑해 점검 범위의 공백을 드러냅니다.
- 레드티밍. 배포 전 공격 시나리오를 전술과 기법 ID(AML.Txxxx)로 인용하면 커버리지가 명확해집니다.

본 사이트 내 연결: [AI 레드티밍 비교](/ai/ai-red-teaming/)의 공격 커버리지 매핑 기준, [AI를 지키는 일](/ai/defend-ai/)의 위협 분류 보조 축으로 씁니다.

## 출처

- [MITRE ATLAS 공식](https://atlas.mitre.org) — 매트릭스, 전술, 기법 원문
- [ATLAS 팩트시트 (PDF)](https://atlas.mitre.org/pdf-files/MITRE_ATLAS_Fact_Sheet.pdf)
- [ATLAS 데이터 (GitHub, atlas-data)](https://github.com/mitre-atlas/atlas-data) — 콘텐츠 버전 2026.05, `dist/v6/ATLAS-2026.05.yaml`

전술 명칭과 ID, 기법 수는 위 atlas-data 배포본을 직접 파싱해 확인했습니다(16개 전술, 상위 기법 101개, 하위 기법 69개, 실사례 57건). 영문 원제가 권위이며, 위 표는 한국어 풀이입니다.

---
최초 발행 2026-05-31, 최종 검토 2026-06-07, 다음 검토 2026-09-07
