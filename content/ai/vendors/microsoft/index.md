---
title: "Microsoft"
description: "Security Copilot은 AI로 보안을 강화하는 일(③)입니다. Purview DSPM for AI와 Defender가 AI 사용을 보호(②)하고, Prompt Shields와 Defender for Cloud가 AI를 보호(①)합니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Microsoft", "Security Copilot", "Purview", "Prompt Shields", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

Microsoft는 AI 보안을 제품군으로 흩어 놓습니다. **Security Copilot**은 SOC를 가속하는 ③ "AI로 보안 강화"이지 AI 보안이 아닙니다. AI를 보호(①)는 **Prompt Shields**(런타임 가드레일), **Defender for Cloud AI-SPM과 위협 보호**(Azure AI 워크로드), **Entra Agent ID**(에이전트 신원)가 맡고, 직원 AI 사용행위 보호(②)는 **Purview DSPM for AI**와 **Defender for Cloud Apps**가 맡습니다.

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | Microsoft (NASDAQ: MSFT), 미국 워싱턴 레드먼드 |
| ① AI 보호 | **Prompt Shields**(Azure AI Content Safety), **Defender for Cloud AI-SPM과 AI 위협 보호**, **Entra Agent ID** |
| ② AI 사용행위 보호 | **Purview DSPM for AI**, **Defender for Cloud Apps**(Shadow AI 발견) |
| ③ AI로 보안 강화 | **Security Copilot**(에이전트, Security Store) |
| 제어판 | Microsoft Defender, Sentinel, Purview, Entra, Azure |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 Microsoft의 ①② 제품이 AI 공격표면을 덮습니다. ③ Security Copilot은 공격표면이 아니라 SOC 운영을 가속하므로 아래 표시에서 제외합니다.

{{< ai-pipeline title="Microsoft ①② 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**Defender for Cloud AI-SPM**이 모델과 배포 태세(①), **Prompt Shields와 AI 위협 보호**가 런타임(①), **Entra Agent ID**가 에이전트 신원(①), **Purview DSPM for AI와 Defender for Cloud Apps**가 사용자 사용행위(②)를 덮습니다. **Security Copilot(③)은 AI를 보호하지 않으므로 이 표시에 없습니다.**" >}}

| 표준 기능 | 분류 | Microsoft 제품 |
|---|---|---|
| AI 거버넌스와 자산 가시성(AI-SPM) | ① AI 보호 | Defender for Cloud AI-SPM(AI BOM) |
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | Prompt Shields, Defender for Cloud AI 위협 보호 |
| AI 에이전트 보안 | ① AI 보호 | Entra Agent ID |
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | Purview DSPM for AI, Defender for Cloud Apps |
| SOC 운영 가속(AI 증강) | ③ AI로 보안 강화 | Security Copilot |

## 제품군 (공식문서 기반)

### ③ Security Copilot — AI로 보안 강화

Microsoft 보안 스택 위에 얹는 AI 증강 계층입니다. 에이전트가 클라우드, 데이터 보안, 신원, 네트워크 보안 전반의 반복 작업을 자동화하고 사람이 통제를 유지합니다([Security Copilot 에이전트](https://learn.microsoft.com/en-us/copilot/security/agents-overview)). AI 모델을 보호하는 것이 아니라 분석가를 증강합니다.

- Defender, Sentinel, Entra, Purview, Intune에 임베드되거나 Security Store로 제공됩니다.
- RSA 2026 기준 **70개 이상**의 파트너 에이전트가 Security Store에 있습니다(공식 블로그 기준, 시점 수치)([Security Store at RSAC 2026](https://techcommunity.microsoft.com/blog/microsoft-security-blog/strengthening-your-security-posture-with-microsoft-security-store-innovations-at/4504026)).
- 에이전트는 **Entra Agent ID**로 신원을 받습니다(①과의 연결점).

### ① AI 보호 — Prompt Shields, Defender for Cloud, Entra Agent ID

| 제품 | 역할 |
|---|---|
| Prompt Shields | 생성 전에 프롬프트를 검사해 직접(탈옥)과 간접(문서) 인젝션을 차단하는 런타임 API. 8개 언어로 학습([Prompt Shields](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection)) |
| Defender for Cloud AI-SPM | Azure OpenAI, AI Foundry, Bedrock, Vertex AI의 AI 워크로드를 발견해 **AI BOM**, 공격 경로, 노출 엔드포인트, IaC 오구성 점검([AI-SPM](https://learn.microsoft.com/en-us/azure/defender-for-cloud/ai-security-posture)) |
| Defender for Cloud AI 위협 보호 | Azure OpenAI 앱의 런타임 경보(탈옥, ASCII 스머글링 간접 인젝션, 자격 탈취, 월렛 공격 등)([AI 경보](https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-ai-workloads)) |
| Entra Agent ID | AI 에이전트에 고유 Entra 신원을 부여해 인증, 인가, 거버넌스([Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id)) |

2026-07-01부터 AI 에이전트 발견과 태세는 Microsoft Agent 365 라이선스로 이동합니다(공식 문서 명시).

### ② AI 사용행위 보호 — Purview DSPM for AI, Defender for Cloud Apps

| 제품 | 역할 |
|---|---|
| Purview DSPM for AI | Copilot과 에이전트와 서드파티 LLM 앱의 프롬프트와 응답을 통합 감사 로그로 발견하고 민감 데이터 흐름을 통제. 원클릭 정책, 데이터 위험 평가, 엔드포인트 DLP로 브라우저 GenAI 붙여넣기 차단([Purview for AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)) |
| Defender for Cloud Apps | 프록시 로그 기반 Cloud Discovery로 "생성형 AI" 카테고리 앱을 발견하고 위험 점수화, 승인 또는 차단([Cloud Discovery](https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery)) |

Purview의 "기타 AI 앱" 분류는 Defender for Cloud Apps 카탈로그를 그대로 씁니다. 두 제품은 M365 텔레메트리와 로그라는 다른 경로로 같은 ② 문제를 덮습니다.

## 보안 아키텍처

①은 Azure AI 앱을 보호하는 ZTA 통제, ③은 SOC 운영을 가속하는 워크플로입니다.

<div class="zta">
<div class="zta-title">① Prompt Shields와 Defender for Cloud — Azure AI 앱 보호</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>Content Safety 정책</b><span>직접 탈옥과 간접 문서 인젝션을 생성 전에 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Defender for Cloud</b><span>경보와 태세 통제, Defender XDR로 전달</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사용자 / AI 에이전트</b><span>Entra Agent ID 에이전트 신원, 도구 권한</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>Prompt Shields 런타임</b><span>프롬프트와 그라운딩 문서를 생성 전에 검사하고 차단</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>Azure OpenAI / AI Foundry 앱</b><span>보호 대상은 모델과 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">Defender AI-SPM 태세(AI BOM)</span><span class="zta-chip">AI 위협 보호 경보</span><span class="zta-chip">Microsoft 위협 인텔</span><span class="zta-chip">Entra Agent ID</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 PEP에 요청하면 ② Prompt Shields가 생성 전에 검사 후 전달합니다. Defender AI-SPM 태세가 PDP에 신뢰 신호를 공급합니다.</div>
</div>

<div class="arch">
<div class="arch-title">③ Security Copilot — SOC 운영 워크플로 (AI 보안 아님)</div>
<div class="arch-stack">
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">보안 스택</div><div class="arch-layer-sub">Defender XDR, Sentinel, Intune, Entra, Purview + 70개 이상 파트너 에이전트</div></div><div class="arch-tag">기반</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">신호와 분류</div><div class="arch-layer-sub">에이전트가 신호를 수집하고 분류, 반복 작업 자동화</div></div><div class="arch-tag">Copilot</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">조사</div><div class="arch-layer-sub">에이전트가 조사를 가속, Entra Agent ID로 인증</div></div><div class="arch-tag">Copilot</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer"><div class="arch-layer-main"><div class="arch-layer-title">분석가 결정</div><div class="arch-layer-sub">사람이 통제 유지(human-in-the-loop)</div></div><div class="arch-tag">사람</div></div>
  <div class="arch-flow"></div>
  <div class="arch-layer is-control"><div class="arch-layer-main"><div class="arch-layer-title">대응</div><div class="arch-layer-sub">에이전트가 자동 또는 온디맨드로 대응 실행</div></div><div class="arch-tag">Copilot</div></div>
</div>
<div class="arch-legend"><span class="dot"></span> 강조 = Security Copilot이 작동하는 단계. 이 구조는 AI를 보호하는 것이 아니라 SOC를 증강합니다(③). PEP나 자원 보호가 아닙니다.</div>
</div>

## 강점과 한계

**강점**
- ①②③를 Defender, Sentinel, Purview, Entra, Azure 단일 생태계에서 통합 운영
- Purview DSPM for AI가 M365 Copilot 프롬프트와 응답을 감사 로그로 직접 가시화, Defender for Cloud Apps와 카탈로그 공유
- Prompt Shields가 직접과 간접 인젝션을 생성 전에 차단, Defender for Cloud가 Azure AI 워크로드 태세와 런타임 경보 제공
- Entra Agent ID로 AI 에이전트 신원을 IAM에 편입

**한계**
- 제품이 여러 콘솔(Defender, Purview, Azure, Entra)에 흩어져 통합 그림 파악에 학습 비용
- Prompt Shields는 8개 언어 학습으로 한국어가 학습 집합에 없음, 한국어 효과는 별도 확인 필요
- 강점 대부분이 Microsoft 365와 Azure 생태계 안에 한정, 외부 환경에서는 우위 축소
- AI 에이전트 태세가 2026-07-01부터 Microsoft Agent 365 라이선스로 이동

## 한국 시장 노트

**데이터 리전(저장).** 한국은 M365 고급 데이터 레지던시(ADR) 대상 지역으로, M365 Copilot 상호작용의 저장 콘텐츠가 한국 지역에 저장됩니다([M365 ADR](https://learn.microsoft.com/en-us/microsoft-365/enterprise/advanced-data-residency?view=o365-worldwide)). Purview 다수 서비스도 ADR 대상입니다.

**데이터 처리(추론).** 국가 내 데이터 처리(추론) 15개국 발표에 **한국은 포함되지 않았습니다**([15개국 처리 발표](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/04/microsoft-offers-in-country-data-processing-to-15-countries-to-strengthen-sovereign-controls-for-microsoft-365-copilot/)). 저장 레지던시와 처리 위치를 혼동하지 않고 확인합니다.

**Azure 리전과 CSAP.** Azure 한국 리전(Korea Central, Korea South)이 있으나 Prompt Shields의 한국 리전 제공은 공식 리전 목록에서 별도 확인이 필요합니다. 공공 도입은 [CSAP](/korea/regulation/csap-n2sf/)와 처리 리전을 확인합니다.

## 관련 페이지

- AI를 지키는 일(①): [AI를 지키는 일](/ai/defend-ai/) — Prompt Shields, Defender for Cloud의 AI 보호 맥락
- AI 사용행위 가시화(②): [AI 사용 가시화](/ai/ai-usage-visibility/) — Purview DSPM for AI, Defender for Cloud Apps 통제 맥락
- AI로 보안 강화(③): [AI로 보안 강화](/ai/augment-security/) — Security Copilot의 SOC 가속 맥락
- 솔루션 리뷰: [Microsoft Entra ID](/solutions/entra-id/) — Entra Agent ID가 올라타는 신원 기반
- 전체 조망: [AI 보안 지도](/ai/map/), [벤더 프로필](/ai/vendors/)

## 출처

- [Security Copilot 에이전트 개요](https://learn.microsoft.com/en-us/copilot/security/agents-overview)
- [Purview — M365 Copilot과 GenAI 앱 보호](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Defender for Cloud Apps — Cloud Discovery](https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery)
- [Defender for Cloud — AI 보안 태세 관리](https://learn.microsoft.com/en-us/azure/defender-for-cloud/ai-security-posture)
- [Defender for Cloud — AI 서비스 경보](https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-ai-workloads)
- [Azure AI Content Safety — Prompt Shields](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection)
- [Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id)
- [M365 고급 데이터 레지던시(ADR)](https://learn.microsoft.com/en-us/microsoft-365/enterprise/advanced-data-residency?view=o365-worldwide)
- [국가 내 데이터 처리 15개국 발표](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/04/microsoft-offers-in-country-data-processing-to-15-countries-to-strengthen-sovereign-controls-for-microsoft-365-copilot/)
- 비교 솔루션: [Palo Alto Networks](/ai/vendors/palo-alto/), [CrowdStrike](/ai/vendors/crowdstrike/), [AI 사용 가시화](/ai/ai-usage-visibility/)

## 면책

본 정리는 Microsoft 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. 파트너 에이전트 수와 한국 리전과 Prompt Shields 한국어 효과는 공식 시점 자료이거나 미확인이므로 직접 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
