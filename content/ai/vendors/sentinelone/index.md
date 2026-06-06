---
title: "SentinelOne"
description: "Purple AI는 SOC를 가속하는 일(③)입니다. 인수한 Prompt Security가 AI를 보호(①)하고 직원 AI 사용을 통제(②)하며, AI-SPM이 AI 자산 태세를 봅니다."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["SentinelOne", "Prompt Security", "Purple AI", "AI-SPM", "벤더"]
categories: ["vendor-profile"]
ShowToc: true
---

> **이 페이지의 결론**: SentinelOne의 역사적 핵심은 **Purple AI**(③, agentic SOC 분석가)로 AI 보안이 아니라 AI로 보안을 강화하는 일입니다. *AI를 보호*(①)와 *직원 AI 사용행위 보호*(②)는 인수한 **Prompt Security**(2025-08-05 인수 발표)가 더했습니다. 여기에 2024-11 출시한 **AI-SPM**(자산 태세)을 합쳐 "Securing AI" 기둥으로 묶습니다. Prompt Security는 인수 후에도 이름을 유지합니다("Prompt Security, a SentinelOne company").

## 한눈에 보기

| 항목 | 값 |
|---|---|
| 회사 | SentinelOne (NYSE: S), 미국 캘리포니아 마운틴뷰 |
| ③ AI로 보안 강화 | **Purple AI**(agentic SOC 분석가) |
| ① AI 보호 | **Prompt Security**(런타임 가드레일, MCP 게이트웨이), **AI-SPM**, AI Red Teaming |
| ② AI 사용행위 보호 | **Prompt Security**(직원 GenAI 사용, Shadow AI, DLP) |
| 인수한 AI 스타트업 | **Prompt Security**(2025-08-05 발표, Singularity로 통합) |
| 제어판 | Singularity Platform, Singularity Data Lake |
| 최종 확인일 | 2026-06-06 |

## 표준 기능과 공격표면 통제

보안표준(OWASP LLM Top 10, MITRE ATLAS) 기준으로 SentinelOne의 ①② 제품이 AI 공격표면을 덮습니다. ③ Purple AI는 공격표면이 아니라 SOC 운영을 가속하므로 아래 표시에서 제외합니다.

{{< ai-pipeline title="SentinelOne ①② 통제 지점 (AI 공격표면)" highlight="model,deploy,runtime,agent,usage" note="**AI-SPM**이 모델과 배포 태세(①), **Prompt Security 런타임과 MCP 게이트웨이**가 런타임과 에이전트(①), **Prompt Security 직원 보호**가 사용자 사용행위(②)를 덮습니다. **Purple AI(③)는 AI를 보호하지 않으므로 이 표시에 없습니다.**" >}}

| 표준 기능 | 분류 | SentinelOne 제품 |
|---|---|---|
| AI 거버넌스와 자산 가시성(AI-SPM) | ① AI 보호 | AI-SPM(클라우드 AI 서비스 발견, 공격 경로 그래프) |
| AI 런타임 보호(인젝션과 출력) | ① AI 보호 | Prompt Security 런타임 가드레일 |
| AI 에이전트 보안 | ① AI 보호 | Prompt Security MCP 게이트웨이 |
| AI 모델 검증 | ① AI 보호 | AI Red Teaming |
| AI 사용 통제와 Shadow AI | ② AI 사용행위 보호 | Prompt Security 직원 GenAI 보호 |
| SOC 운영 가속(AI 증강) | ③ AI로 보안 강화 | Purple AI |

## 제품군 (공식문서 기반)

### ③ Purple AI — AI로 보안 강화 (역사적 핵심)

Singularity Data Lake 위의 agentic SOC 분석가입니다. 자연어를 쿼리로 변환하고, 원클릭 자율 조사(RSAC 2026 GA)로 설명 가능한 "AI Verdict"를 내려 자동 대응을 트리거합니다([Purple AI](https://www.sentinelone.com/platform/purple/)). AI 모델을 보호하는 것이 아니라 SOC를 증강합니다.

### ① AI 보호 — Prompt Security, AI-SPM

| 제품 | 무엇을 하나 |
|---|---|
| Prompt Security 런타임 | 사내 AI 앱과 에이전트의 모든 상호작용을 실시간 검사. 프롬프트 인젝션, 탈옥, 악성 출력 조작, 프롬프트 유출 차단. 모델 무관([Prompt Security for Agentic AI](https://www.sentinelone.com/blog/prompt-security-for-agentic-ai/)) |
| Prompt Security MCP 게이트웨이 | 승인과 섀도 MCP 서버를 발견하고 거버넌스. 도구 호출과 에이전트 상호작용을 실행 시점에 검사 |
| AI-SPM | AWS SageMaker와 Bedrock, Vertex AI, Azure AI 서비스를 발견. 그래프로 공격 경로 시각화. EU AI Act와 NIST AI RMF 매핑(2024-11 출시) |
| AI Red Teaming | 적대적 프롬프트로 사내 AI 앱의 인젝션과 포이즈닝 위험을 지속 테스트 |

### ② Prompt Security — 직원 AI 사용행위 보호

직원이 쓰는 승인과 미승인(Shadow AI) GenAI 도구를 발견하고 통제합니다([Securing AI](https://www.sentinelone.com/platform/securing-ai/)).

| 항목 | 내용 |
|---|---|
| 발견 | 수천 개 AI 도구의 사용을 발견, 검색 가능 로그 |
| DLP | 민감 데이터를 즉석에서 편집하거나 토큰화, 고위험 프롬프트 차단, 사용자 코칭 |
| 코드 어시스턴트 | GitHub Copilot 등에서 시크릿과 지식재산이 프롬프트로 새는 것을 차단 |

## 보안 아키텍처

①과 ②는 PEP 위치가 다르고, ③은 보호가 아니라 운영 가속입니다.

<div class="zta">
<div class="zta-title">① Prompt Security 런타임 — 사내 AI 보호</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>Prompt 정책</b><span>프롬프트 인젝션, 탈옥, 악성 출력, 프롬프트 유출을 입력과 출력에서 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Singularity Platform</b><span>정책 배포와 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>사내 AI 앱 / 에이전트</b><span>앱 신원, 도구 권한</span></div>
<div class="zta-harrow" data-label="① 호출"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>Prompt 런타임 가드레일 / MCP 게이트웨이</b><span>앱과 모델 사이에서 프롬프트와 응답, 도구 호출을 실시간 검사</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>LLM / MCP 도구</b><span>보호 대상은 사내 AI와 에이전트</span></div>
</div>
<div class="zta-vconn up" data-label="신뢰 신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">AI-SPM(자산 태세, 공격 경로)</span><span class="zta-chip">AI Red Teaming</span><span class="zta-chip">Singularity 위협 인텔</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> ① 주체가 PEP에 요청하면 ② Prompt 가드레일이 실시간 검사 후 전달합니다. MCP 게이트웨이가 도구 호출을 실행 시점에 검사합니다.</div>
</div>

<div class="zta">
<div class="zta-title">② Prompt Security — 직원의 외부 GenAI 사용 통제 (PEP 위치가 다름)</div>
<div class="zta-control">
<div class="zta-band-label">제어판 — 정책 결정 (PDP)</div>
<div class="zta-pdp">
<div class="zta-node"><div class="zta-node-role">Policy Engine</div><b>Prompt 사용 정책</b><span>역할, 콘텐츠 민감도, 사용자 행동으로 판단</span></div>
<div class="zta-node"><div class="zta-node-role">Policy Administrator</div><b>Singularity Platform</b><span>정책 배포와 통제</span></div>
</div>
</div>
<div class="zta-vconn" data-label="정책 질의와 결정"></div>
<div class="zta-plane">
<div class="zta-node zta-subject"><div class="zta-node-role">주체 — 신원 확인</div><b>직원 / 엔드포인트</b><span>사용자 역할, 단말</span></div>
<div class="zta-harrow" data-label="① 요청"></div>
<div class="zta-node zta-pep is-pep"><div class="zta-node-role">통제 지점 (PEP)</div><b>Prompt 사용 거버넌스</b><span>Shadow AI 발견, DLP 편집과 토큰화, 고위험 프롬프트 차단</span></div>
<div class="zta-harrow" data-label="② 전달"></div>
<div class="zta-node zta-resource"><div class="zta-node-role">통제 대상 (자원)</div><b>외부 GenAI 앱</b><span>ChatGPT, Copilot. 보호 대상은 반출 데이터</span></div>
</div>
<div class="zta-vconn up" data-label="신호 공급"></div>
<div class="zta-support">
<div class="zta-band-label">상호작용 시스템</div>
<div class="zta-chips"><span class="zta-chip">검색 가능 사용 로그</span><span class="zta-chip">코드 어시스턴트 보호</span><span class="zta-chip">사용자 코칭</span></div>
</div>
<div class="zta-legend"><span class="dot"></span> Prompt 런타임과 달리 PEP가 직원과 외부 GenAI 사이에 위치합니다. 보호 대상이 사내 AI가 아니라 외부로 나가는 데이터입니다.</div>
</div>

## 강점과 한계

**강점**
- 역사적 ③(Purple AI)에 인수한 Prompt Security로 ①②를 더해 "data to runtime" 전 범위 확보
- Prompt Security가 런타임 가드레일(①)과 직원 사용 통제(②)를 같은 제품으로 커버, MCP 게이트웨이로 에이전트까지
- AI-SPM이 클라우드 AI 자산을 발견하고 공격 경로를 그래프로 시각화
- 한국어 제품 페이지 제공(프롬프트 보안)

**한계**
- Prompt 런타임(①, 앱-모델 사이)과 직원 사용 통제(②, 직원-외부 사이)의 PEP 위치가 달라 혼동하기 쉬움
- Prompt Security 인수의 종결일과 금액(약 1억 8천만 달러)은 8-K와 재무 보도 기준이라 공식 발표로 직접 확인 필요
- 단일 제품명 "Singularity AI Security"는 공식 확인되지 않음(기둥명 "Securing AI" + 유지된 "Prompt Security")
- 한국 인증과 컴플라이언스 특화는 공식 자료에서 확인되지 않음

## 한국 시장 노트

**한국어 페이지.** SentinelOne은 한국어 제품 페이지(프롬프트 보안)를 제공하며 Shadow AI, 프롬프트 인젝션과 탈옥 보호, 민감 데이터 DLP, 직원 AI 사용 발견을 다룹니다([한국어 Securing AI](https://www.sentinelone.com/ko/platform/securing-ai-prompt/)).

**인증과 리전.** 한국 특화 인증과 데이터 레지던시는 공식 자료에서 확인되지 않습니다. [CSAP](/korea/regulation/csap-n2sf/)와 처리 리전을 직접 확인합니다. EDR/XDR 일반 도입 노트는 [SentinelOne 솔루션 리뷰](/solutions/sentinelone/)를 참고합니다.

## 출처

- [SentinelOne의 Prompt Security 인수 (2025-08-05)](https://www.sentinelone.com/press/sentinelone-to-acquire-prompt-security-to-advance-genai-security/)
- [Securing AI 플랫폼](https://www.sentinelone.com/platform/securing-ai/)
- [Prompt Security for Agentic AI](https://www.sentinelone.com/blog/prompt-security-for-agentic-ai/)
- [AI-SPM 출시 (2024-11-21)](https://www.sentinelone.com/press/sentinelone-secures-both-known-and-shadow-ai-services-in-the-workplace-with-new-ai-security-posture-management/)
- [End-to-end AI security from data to runtime (2026-02-06)](https://www.sentinelone.com/press/sentinelone-delivers-end-to-end-ai-security-from-data-to-runtime/)
- [Purple AI](https://www.sentinelone.com/platform/purple/)
- [한국어 Securing AI (프롬프트 보안)](https://www.sentinelone.com/ko/platform/securing-ai-prompt/)
- 비교 솔루션: [Palo Alto Networks](/ai/vendors/palo-alto/), [SentinelOne 일반 리뷰](/solutions/sentinelone/)

## 면책

본 정리는 SentinelOne과 Prompt Security 공식 자료를 근거로 합니다. 제품 사양과 시장 상황은 빠르게 바뀝니다. 도입 전 최신 공식 발표를 확인합니다. Prompt Security 인수 종결일과 금액, 제품명, 한국 인증은 공식 자료로 확인되지 않으므로 직접 검증합니다.

---
최초 발행 2026-06-06, 최종 확인 2026-06-06, 다음 확인 2026-07-06
