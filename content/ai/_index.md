---
title: "AI 보안"
description: "AI를 지키는 일, 직원 AI 사용을 가시화하는 일, AI로 보안을 강화하는 일. 세 축으로 정리한 2026년 AI 보안."
ShowToc: false
---

AI 보안은 성격이 다른 세 가지 일로 나뉩니다. 사내 LLM과 에이전트를 공격에서 **지키는 일**, 직원이 외부 AI에 무엇을 넣는지 **가시화하고 통제하는 일**, AI로 SOC 운영을 **강화하는 일**입니다. 위협도 솔루션 시장도 셋이 따로 움직입니다.

## ① AI를 지키는 일

사내에 도입한 LLM 앱과 AI 에이전트를 공격으로부터 보호합니다. 공격면이 자연어라 시그니처로 막을 수 없습니다. 기준은 OWASP LLM Top 10과 Agentic Top 10.

<div class="card-grid">

<a href="/ai/defend-ai/" class="card">
<div class="card-title">AI를 지키는 일 (개요)</div>
<div class="card-desc">LLM 앱과 에이전트 방어의 전체 그림. Prompt Injection이 1순위인 이유, 방어 4카테고리.</div>
<div class="card-cta">방어 카테고리 4종</div>
</a>

<a href="/ai/prompt-injection-defense/" class="card">
<div class="card-title">Prompt Injection 방어</div>
<div class="card-desc">직접과 간접 프롬프트 인젝션, 멀티턴 jailbreak, 멀티모달 인젝션. 입출력 필터와 가드레일.</div>
<div class="card-cta">LLM01 1순위 위협</div>
</a>

<a href="/ai/llm-gateway/" class="card">
<div class="card-title">LLM 게이트웨이 비교</div>
<div class="card-desc">런타임 가드레일 심층 비교. Lakera(Check Point), Prompt Security(SentinelOne), 오픈소스.</div>
<div class="card-cta">OWASP LLM Top 10 매핑</div>
</a>

<a href="/ai/ai-red-teaming/" class="card">
<div class="card-title">AI 레드티밍 비교</div>
<div class="card-desc">배포 전 능동 공격으로 취약점 발견. Lakera Red, HiddenLayer, Mindgard.</div>
<div class="card-cta">MITRE ATLAS 매핑</div>
</a>

<a href="/ai/agentic-security/" class="card">
<div class="card-title">Agentic AI 보안과 MCP</div>
<div class="card-desc">에이전트 신원(NHI)과 최소 권한, MCP Tool Poisoning 통제.</div>
<div class="card-cta">OWASP Agentic, MCP Top 10</div>
</a>

<a href="/ai/model-supply-chain/" class="card">
<div class="card-title">AI 모델 공급망 보안</div>
<div class="card-desc">악성 모델과 pickle 공격, 모델 스캐닝과 서명, ML-BOM. Protect AI, HiddenLayer, JFrog.</div>
<div class="card-cta">공급망 위협 정리</div>
</a>

<a href="/ai/deepfake-defense/" class="card">
<div class="card-title">딥페이크와 AI 사기 방어</div>
<div class="card-desc">AI를 악용한 사칭. 딥페이크 영상, 음성 복제, KYC 우회. Reality Defender, Sensity, Pindrop.</div>
<div class="card-cta">사칭 방어 솔루션</div>
</a>

</div>

## ② 직원 AI 사용 가시화와 통제

직원이 어떤 AI를 어떻게 쓰는지 봅니다. TLS 암호화 너머 프롬프트를 잡는 기술과, 승인 자산 인벤토리, 거버넌스 계층.

<div class="card-grid">

<a href="/ai/ai-usage-visibility/" class="card">
<div class="card-title">AI 사용 가시화와 Shadow AI 통제</div>
<div class="card-desc">TLS 너머 프롬프트를 잡는 8가지 캡처 메커니즘. 인라인 프록시, AI 게이트웨이, 엔드포인트, 브라우저, DNS. Harmonic, WitnessAI, Zscaler, Netskope.</div>
<div class="card-cta">캡처 메커니즘 8종</div>
</a>

<a href="/ai/ai-spm/" class="card">
<div class="card-title">AI-SPM: AI 자산 인벤토리</div>
<div class="card-desc">승인된 AI 자산의 발견, 인벤토리, 태세 평가. 섀도 AI 에이전트 발견. Wiz, Prisma AIRS.</div>
<div class="card-cta">런타임 가드레일과의 차이</div>
</a>

<a href="/ai/ai-governance/" class="card">
<div class="card-title">AI 거버넌스와 TRiSM</div>
<div class="card-desc">AI 인벤토리, 정책, 컴플라이언스 계층. Credo AI, Holistic AI. EU AI Act, NIST AI RMF, ISO 42001.</div>
<div class="card-cta">규제 프레임워크 매핑</div>
</a>

</div>

## ③ AI로 보안을 강화하는 일

AI 에이전트가 SOC의 분류, 조사, 일부 대응을 자율 수행합니다. 27초 침투 시대에 자동화는 생존의 문제입니다. SOAR에서 Agentic SOC로의 진화.

<div class="card-grid">

<a href="/ai/augment-security/" class="card">
<div class="card-title">AI로 보안 강화 (개요)</div>
<div class="card-desc">Security Copilot, Agentic SOC가 SOC 운영을 어떻게 가속하나. 에이전트가 실제로 하는 일.</div>
<div class="card-cta">자율 대응 4단계</div>
</a>

<a href="/automation/security-copilots/" class="card">
<div class="card-title">Security Copilots 비교</div>
<div class="card-desc">Microsoft Security Copilot, Charlotte AI, Torq, Tines를 같은 척도로 비교합니다.</div>
<div class="card-cta">도구 4종 비교</div>
</a>

<a href="/automation/soar-evolution/" class="card">
<div class="card-title">SOAR와 Hyperautomation</div>
<div class="card-desc">1세대 SOAR, Hyperautomation, Agentic SOC의 진화 단계와 차이의 본질. 어디서 한계가 오는가.</div>
<div class="card-cta">진화 3단계</div>
</a>

</div>

## 2025–2026 분기점: 세 변화의 수렴

2025년에서 2026년 사이 세 가지 변화가 겹쳤습니다.

**공격이 빨라졌습니다.** CrowdStrike 2025 Global Threat Report에 따르면 eCrime 침투 시간이 **최단 27초**까지 줄었습니다. AI 활용 공격은 전년 대비 **89% 증가**했습니다.

**Shadow AI가 폭증했습니다.** Cyberhaven 분석으로 기업 데이터가 AI 도구로 흘러간 양이 전년 대비 **485% 증가**했습니다. 직원의 미승인 AI 사용을 보지 못하는 조직이 다수입니다.

**상용 도구가 보강됐습니다.** CrowdStrike는 RSA 2026에서 **Charlotte AI AgentWorks**를 공개했고, Microsoft Security Copilot은 파트너 에이전트 **70개 이상**의 Security Store를 운영합니다. Torq는 2026년 초 **Series D $140M**을 유치했습니다.

## 세 축의 빠른 비교

| 항목 | ① 지키는 일 | ② 사용 가시화 | ③ 보안 강화 |
|---|---|---|---|
| 관측 대상 | LLM 앱과 에이전트 입출력 | 직원 AI 사용과 프롬프트 | SOC 운영과 알림 |
| 핵심 과제 | LLM 입출력 위협 차단 | 직원 AI 사용과 데이터 반출 가시화 | 분석가 업무 가속과 SOC 자동화 |
| 표준 | OWASP LLM/Agentic Top 10 | (해당 없음, 캡처 기술) | NIST CSF, 자체 가드레일 |
| 대표 솔루션 | Lakera, Prompt Security | Harmonic, WitnessAI, Zscaler | Charlotte AI, Security Copilot, Torq |
| 의사결정 시점 | LLM/에이전트 도입 직전 | 직원 AI 사용 통제 필요 시 | SOC 확장이나 인력 부족 시 |

## 도입 고려사항

**개인정보 처리.** Prompt에 PII가 섞이면 개인정보보호법 위반 소지가 있습니다. 입출력 마스킹과 토큰화가 필수입니다.

**클라우드 LLM 사용.** 금감원 클라우드 보안성 심의는 LLM API 호출 흐름도 검토 대상이 될 수 있습니다. 데이터 리전과 학습 사용 동의를 확인합니다.

**망분리 환경.** 외부 LLM API를 직접 호출할 수 없는 조직은 사내 LLM과 자체 가드레일을 구성합니다.

## 관련 페이지

- 벤더별 제품군과 아키텍처(ZTA): [벤더 프로필](/ai/vendors/)
- 기능×벤더 한 장 비교: [AI 보안 지도](/ai/map/)
- 적용 기준 표준과 한국 규제: [표준과 규제](/framework/)

## 출처

- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [Cyberhaven — AI 데이터 흐름 분석](https://www.cyberhaven.com/product/linea)
- [CrowdStrike Charlotte AI AgentWorks (RSA 2026)](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)
- [Microsoft Security Copilot Blog](https://techcommunity.microsoft.com/blog/securitycopilotblog/from-alert-overload-to-decisive-action-how-security-copilot-agents-are-transform/4504213)

---
최초 발행 2026-05-30, 최종 검토 2026-06-06
