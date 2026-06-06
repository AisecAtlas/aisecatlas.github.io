---
title: "AI 사용 가시화와 Shadow AI 통제"
description: "직원이 어떤 AI를 어떻게 쓰는지 기술로 잡는 법. TLS 암호화 너머 프롬프트를 보는 8가지 캡처 메커니즘과 솔루션 지형."
date: 2026-06-06
lastmod: 2026-06-06
tags: ["Shadow AI", "AI Security", "CASB", "SASE", "DLP", "AI 사용 가시화"]
categories: ["ai-trend"]
ShowToc: true
---

> **이 페이지의 결론**: 직원이 ChatGPT, Claude, Gemini, Copilot에 무엇을 입력하는지는 전부 **TLS로 암호화**된다. 네트워크 중간에서 그냥 보는 것으로는 **어떤 AI 서비스를 썼는지(도메인)**까지만 알 수 있고 **프롬프트 내용은 못 본다**. 내용을 보려면 셋 중 하나다. ① TLS를 끊고 재서명하는 **인라인 프록시**(루트 CA 설치 필요, 인증서 핀닝 앱은 우회=사각지대), ② 앱이 평문을 직접 보내도록 만든 **AI 게이트웨이**(우리가 통제하는 사내 앱만), ③ 암호화 전에 읽는 **엔드포인트/브라우저 캡처**(핀닝과 무관, 직원 브라우저 사용까지 포착). 미승인 Shadow AI 발견은 ②가 닿지 않으므로 ①과 ③의 조합이 현실적이다.

## 왜 네트워크만으로는 안 보이나

문제는 단순하다. 생성형 AI 앱은 전부 **TLS 1.2/1.3**으로 암호화한다. 회선 중간의 수동 캡처는 암호문과 메타데이터(목적지 IP, SNI 호스트명, DNS 질의, 패킷 크기)만 본다. **사용자가 입력한 프롬프트 텍스트**를 읽으려면 암호화를 끊거나, 암호화 전을 읽거나, 평문을 받는 정당한 종단이 되어야 한다.

여기에 사용량 압박이 겹쳤다. Cyberhaven은 기업 데이터가 AI 도구로 흘러간 양이 전년 대비 **485% 증가**했다고 분석했다([Cyberhaven](https://www.cyberhaven.com/product/linea)). 직원은 개인 계정으로 무단 AI에 사내 자료를 붙여넣고, 보안팀은 그 사실 자체를 모른다. 이것이 **Shadow AI**다.

가시화는 두 질문으로 갈린다.

- **무엇을 보려는가.** "어떤 AI를 쓰나"(메타데이터)면 DNS, SNI로 충분하다. "무엇을 입력했나"(콘텐츠)면 복호화 또는 엔드포인트가 필요하다.
- **어디를 보려는가.** 우리가 만든 **승인 AI**(사내 LLM 앱, Copilot, Bedrock)는 클라우드 API나 게이트웨이로 본다. 직원이 쓰는 **미승인 AI**(웹 ChatGPT, DeepSeek)는 네트워크나 엔드포인트로 잡는다. 승인 자산 인벤토리는 [AI-SPM](/ai/ai-spm/)이 담당한다. 이 페이지는 **미승인 Shadow AI**가 주제다.

## 8가지 캡처 메커니즘

같은 "AI 가시화" 솔루션도 **어디서 무엇을 캡처하느냐**가 전혀 다르다. 이 차이가 시장을 가르는 핵심 필터다.

### 1. 인라인 프록시 / TLS 가로채기 (SSL 인스펙션, break-and-inspect)

프록시가 트래픽 경로에 끼어 TLS 세션을 **둘로 쪼갠다**(클라이언트↔프록시, 프록시↔서버). 원 서버 인증서를 검사한 뒤, 같은 호스트명으로 **프록시 자체 CA가 서명한 인증서를 즉석에서 발급**해 클라이언트에 제시한다([Zscaler — SSL/TLS Inspection](https://help.zscaler.com/zia/understanding-ssltls-inspection)).

- **본다.** 복호화된 평문 전체 — URL, 헤더, 요청 본문(프롬프트 JSON), 응답. 프롬프트에 인라인 DLP 적용 가능.
- **전제.** 프록시 **루트 CA를 모든 엔드포인트에 신뢰 설치**(MDM/GPO 배포)해야 한다. 없으면 인증서 오류가 난다([Zscaler — CA Certificate](https://help.zscaler.com/zia/choosing-ca-certificate-ssl-inspection)).
- **못 본다(핀닝).** 인증서를 **핀닝**한 앱은 프록시의 대체 인증서를 거부하고 **연결을 끊는다**. 프록시는 핀닝을 감지하지도 못한다 — "클라이언트가 핀닝을 알리는 메시지가 없어 연결이 그냥 실패한다"([Zscaler — Certificate Pinning](https://help.zscaler.com/zia/certificate-pinning-and-ssltls-inspection)). 대응은 핀닝 앱을 **검사 우회 목록**에 넣는 것인데, 우회된 트래픽은 복호화되지 않아 **사각지대**가 된다.
- **위치.** 네트워크(온프렘 어플라이언스 또는 SASE/SSE 클라우드 PoP).
- **벤더.** Zscaler ZIA, Broadcom/Symantec Cloud SWG, Palo Alto Prisma Access, Netskope.

### 2. AI 게이트웨이 (egress 리버스 프록시)

앱이 LLM 제공자 대신 **게이트웨이를 호출하도록 명시적으로 설정**한다(앱의 base URL을 게이트웨이로 변경). 게이트웨이가 API 키를 쥐고 OpenAI/Anthropic로 대신 전달한다. 클라이언트가 **게이트웨이와 직접 TLS를 맺으므로** MITM도 인증서 위조도 핀닝 문제도 없다. Cloudflare AI Gateway는 "사용자 프롬프트, 모델 응답, 제공자, 토큰 사용량, 비용, 지연"을 기본 기록한다([Cloudflare AI Gateway — Logging](https://developers.cloudflare.com/ai-gateway/observability/logging/)).

- **본다.** 프롬프트와 응답 전문, 토큰/비용, 사용자별 귀속. 가드레일/DLP 인라인 적용.
- **한계(결정적).** **게이트웨이를 거치도록 만든 트래픽만** 본다. 우리가 통제하는 **사내 1st-party 앱**에만 유효하다. 직원이 브라우저로 chat.openai.com을 열어 입력하는 트래픽은 게이트웨이를 거치지 않는다. 인라인 프록시가 모든 egress를 투명하게 가로채는 것과 반대로, AI 게이트웨이는 **앱이 자발적으로 향하는 종단**이다.
- **위치.** 클라우드(Cloudflare) 또는 self-host(LiteLLM, Kong AI Gateway, Portkey).
- **벤더.** Cloudflare AI Gateway, LiteLLM, Kong AI Gateway, Portkey.

### 3. CASB — 인라인(프록시) vs API(out-of-band)

- **인라인 CASB.** 사용자와 SaaS 사이 실시간 경로에서 검사(§1과 같은 TLS 가로채기 원리). 프롬프트를 실시간으로 보고 막는다.
- **API CASB.** SaaS 테넌트에 **제공자 API(OAuth)로 연결**, 경로 밖에서 정지 데이터, 구성, 공유, 권한을 스캔한다. Cloudflare는 ChatGPT, Claude, Gemini를 "에이전트리스 API 통합으로 연결해 내부 데이터와 태세를 스캔"한다고 밝힌다([Cloudflare — CASB AI](https://blog.cloudflare.com/casb-ai-integrations/)).
- **차이.** 인라인은 **실시간 프롬프트 차단**(복호화 의존, 오프네트워크 시 우회됨). API는 **사후/정지 데이터**(실시간 입력은 못 봄). 둘은 보완 관계다([TechTarget](https://www.techtarget.com/searchsecurity/tip/Choosing-between-proxy-vs-API-CASB-deployment-modes)).

### 4. SWG (SASE/SSE의 웹 egress 통제점)

URL/도메인 분류("생성형 AI" 카테고리), 허용/차단, 그리고 **TLS 인스펙션을 켜면** 복호화된 GenAI 트래픽에 인라인 DLP를 건다. Zscaler는 "전송된 실제 입력 프롬프트를 본다"를 "SSL 인스펙션이 있는 인라인 클라우드 프록시"로 제공한다고 명시한다([Zscaler — AI Data Protection](https://www.zscaler.com/blogs/product-insights/new-ai-innovations-supercharge-data-protection)).

- TLS 인스펙션 ON → 실제 프롬프트까지 DLP. OFF → 도메인/카테고리 차단만(페이로드 없음).
- **벤더.** Zscaler ZIA, Cisco Umbrella/Secure Access, Netskope, Palo Alto Prisma Access.

### 5. 엔드포인트 에이전트 / 커널 후킹 (암호화 전)

엔드포인트 에이전트는 데이터가 **암호화되기 전**에 본다. 기법은 유저스페이스 API 후킹, 커널 콜백/미니필터 드라이버, **클립보드/키 입력 감시**, 브라우저 붙여넣기 이벤트 후킹이다. Microsoft Purview Endpoint DLP는 클립보드 복사와 "미승인 앱에서의 민감 데이터 사용"을 차단/경고한다([Microsoft — Endpoint DLP](https://learn.microsoft.com/en-us/purview/endpoint-dlp-learn-about)).

- **본다.** 프로세스/네트워크 연결(어느 프로세스가 어느 AI 도메인과 통신했나), **클립보드 복사, 붙여넣기**, 파일 업로드, 키 입력 — OS/앱 계층에서 **TLS, 핀닝과 무관**하게.
- **약점.** 브라우저 내 프롬프트 의미를 정밀 복원하려면 브라우저 연동이 필요하고, 에이전트는 언후킹/우회될 수 있다.
- **벤더.** Microsoft Purview Endpoint DLP, CrowdStrike/SentinelOne(EDR 텔레메트리), Forcepoint DLP.

### 6. eBPF (커널 관측, 주로 서버)

리눅스 커널에서 샌드박스 프로그램을 훅(kprobe, uprobe)에 붙인다. 암호화 페이로드는 **유저스페이스 TLS 라이브러리 함수에 uprobe**(예: OpenSSL `SSL_read`/`SSL_write`)를 걸어 **암호화 직전/복호화 직후 평문**을 가로챈다 — TLS를 끊지도 키를 공유하지도 않는다([Pixie — eBPF TLS tracing](https://blog.px.dev/ebpf-tls-tracing-past-present-future/)).

- **한계.** **암복호화를 수행하는 그 노드 위**에서만, 동적 링크된 OpenSSL 같은 훅 가능한 심볼이 있을 때만 페이로드를 본다. 네트워크 엣지에서는 복호화 못 하고, 정적 링크(BoringSSL)나 자바 JSSE는 사각이다([Coroot](https://coroot.com/blog/java-tls-instrumentation-with-ebpf/)). 직원 윈도우 노트북의 브라우저 프롬프트 캡처용이 아니라 **리눅스 서버의 AI 에이전트 관측**에 적합하다.
- **벤더/프로젝트.** Pixie, Cilium/Tetragon, Coroot.

### 7. 브라우저 확장 / 엔터프라이즈 브라우저 (DOM 계층)

프롬프트 입력창은 페이지 **DOM**의 일부다. 브라우저 확장이나 DOM 스크립팅 권한을 가진 엔터프라이즈 브라우저는 **입력 요소에서 프롬프트를 직접 읽는다** — 복호화된 뒤, 렌더된 DOM에서. LayerX는 "프롬프트 필드는 보통 페이지 DOM의 일부이고, DOM 스크립팅 권한이 있는 확장은 AI 프롬프트를 직접 읽고 쓸 수 있다"고 설명한다([LayerX — Man-in-the-Prompt](https://layerxsecurity.com/blog/man-in-the-prompt-top-ai-tools-vulnerable-to-injection/)).

- **본다.** 프롬프트와 응답 전문 + 페이지 맥락, 붙여넣기 실시간 차단 — **TLS, 핀닝과 무관**(네트워크 바이트가 아니라 DOM을 읽음). 프록시가 놓치는 SaaS 내장 AI, 개인 계정 사용까지 포착.
- **약점.** 브라우저 밖(데스크톱 AI 앱, IDE 플러그인)은 못 본다. 확장/브라우저가 설치돼 있어야 한다.
- **벤더.** LayerX(확장), Island(엔터프라이즈 브라우저), Harmonic Security, Nightfall(확장 기반).

### 8. DNS 계층 (도메인 식별)

DNS 질의를 검사해 연결 전에 정책을 건다. 어떤 AI 서비스 도메인인지 식별한다. Cisco Umbrella는 DNS 계층 정책으로 "70개 이상 생성형 AI 앱의 사용을 발견/차단/허용"한다([Cisco Umbrella](https://support.umbrella.com/hc/en-us/articles/16221318789396-DLP-and-CASB-support-for-Generative-AI-and-ChatGPT)).

- **본다.** **어떤 AI를 쓰나**(도메인/앱 식별), 도메인 단위 허용/차단을 복호화 없이 대규모로.
- **못 본다.** 페이로드 일체 — 프롬프트도 URL 경로도 없음. 순수 메타데이터.
- **벤더.** Cisco Umbrella, Infoblox, DNSFilter, Palo Alto DNS Security.

### 메커니즘 비교 — 프롬프트 텍스트를 잡는 깊이

| 메커니즘 | 프롬프트 텍스트 | TLS 처리 | 핀닝 내성 | 깊이 | 위치 |
|---|---|---|:-:|---|---|
| AI 게이트웨이 | 전문(네이티브) | 앱이 직접 접속, MITM 없음 | N/A | 페이로드 | 클라우드/사내 |
| 브라우저 확장/엔터프라이즈 브라우저 | 전문(DOM) | 복호화 후 DOM에서 읽음 | 강함 | 페이로드 | 엔드포인트(브라우저) |
| 엔드포인트 에이전트/커널 후킹 | 입력/붙여넣기 전문 | 암호화 전에 읽음 | 강함 | 페이로드 | 엔드포인트 |
| 인라인 프록시/SWG/인라인 CASB | 복호화 시에만 전문 | 끊고 재서명(MITM), 루트 CA 필요 | 약함(핀닝 앱 우회) | 조건부 페이로드 | 네트워크 |
| eBPF(uprobe) | 암복호 노드 한정 | TLS 라이브러리 경계에서 | 그 노드서 강함 | 호스트 한정 | 엔드포인트(리눅스) |
| API CASB | 정지 데이터만(실시간 X) | 경로 밖 SaaS API | N/A | 부분/사후 | 클라우드-클라우드 |
| DNS 계층 | 없음(도메인만) | 없음 | N/A | 메타데이터 | 네트워크 |

> **핵심.** 네트워크의 어느 지점도 TLS 세션을 능동적으로 끊지 않으면 **암호문과 메타데이터만** 본다. 콘텐츠 가시성은 ① 사내 앱을 AI 게이트웨이로 보내거나 ② 엔드포인트/브라우저에서 암호화 전을 읽는 두 전략으로 수렴한다. 직원 브라우저의 미승인 사용까지 잡는 가장 확실한 길은 **②**다.

## 솔루션 지형

캡처 메커니즘으로 분류하면 시장이 깔끔하게 갈린다.

### Shadow AI 전문(미승인 발견 특화)

| 솔루션 | 캡처 방식 | 특징 |
|---|---|---|
| **[Harmonic Security](/solutions/harmonic-security/)** | 브라우저 확장 + 엔드포인트 에이전트 | Shadow AI 발견 순수 특화. 도구 자동 발견, 위험 프로파일링, 개인 계정 사용 탐지. Series A $17.5M(2024-10, Next47) |
| **[WitnessAI](/solutions/witnessai/)** | 네트워크 인라인(에이전트리스) | 단말 설치 없이 인라인. 사람과 에이전트의 AI 상호작용 가시화. 전략 투자 $58M(2026-01, Samsung, Qualcomm Ventures 참여) |
| **Nightfall AI** | 브라우저 플러그인 + 엔드포인트 + SaaS API | Shadow AI 발견 + 엔터프라이즈 DLP(PII/PHI/시크릿) 결합. 광범위 GenAI 앱 차단 |
| **Cyberhaven** | 엔드포인트 데이터 리니지 | "어떤 데이터가 AI로 갔나"를 추적. Linea AI. Series D $100M, 기업가치 $1B(2025-04) |

### SASE/SSE/CASB 플랫폼(인라인 프록시 기반)

| 솔루션 | 캡처 방식 | 특징 |
|---|---|---|
| **Zscaler AI Access Security** | 인라인 프록시 + DSPM | Shadow AI 대시보드, 프롬프트 단위 가시성. DSPM으로 정지 데이터 인벤토리 |
| **Netskope** | 인라인 프록시 + SkopeAI 분류 | Cloud Confidence Index에 **GenAI 도구 1,800종+** 등재. MCP 호출까지 검사 |
| **Palo Alto AI Access Security** | 인라인 SASE | **GenAI 앱 사전 6,000종+**로 발견, 분류. 프롬프트 이력 보존 |
| **Microsoft Defender for Cloud Apps** | 프록시/방화벽/엔드포인트 **로그 수집** | Cloud Discovery로 미승인 AI 앱 발견. 카탈로그를 "생성형 AI" 카테고리로 필터 |

> Palo Alto의 **AI Access Security**(직원의 외부 AI 사용 통제, SASE)와 **Prisma AIRS**(사내 구축 AI 보호, 런타임)는 다른 제품이다. Microsoft도 **Defender for Cloud Apps**(미승인 발견)와 **Purview DSPM for AI**(승인 Copilot 데이터 태세)로 갈린다. 후자(승인 자산)는 [AI-SPM](/ai/ai-spm/)이 다룬다.

## 도입 의사결정 가이드

### 어디서부터 시작하나

**1단계: 발견(미승인).** "직원이 어떤 AI를 쓰나"를 먼저 본다. 기존 SASE/SSE가 있으면 그 GenAI 카테고리(Zscaler, Netskope)로 즉시 시작. 없으면 DNS 계층(Umbrella)이 가장 싸고 빠른 출발점.

**2단계: 콘텐츠 가시성.** "무엇을 입력하나"가 필요하면 인라인 TLS 인스펙션을 켜되 **핀닝 앱 사각지대**를 인지한다. 브라우저까지 확실히 잡으려면 브라우저 확장(Harmonic, LayerX)을 더한다.

**3단계: 통제와 통합.** 발견 위에 DLP/정책(개인 계정 차단, PII 마스킹)을 건다. 승인 자산 인벤토리는 [AI-SPM](/ai/ai-spm/)으로, 사내 LLM 앱 런타임 방어는 [AI를 지키는 일](/ai/defend-ai/)로 잇는다.

### 비교 선택 기준

| 상황 | 권장 |
|---|---|
| 이미 SASE/SSE 운영(Zscaler, Netskope) | 플랫폼 네이티브 GenAI 모듈로 시작, 별도 도구 불필요할 수 있음 |
| Shadow AI 발견이 1차 목표, 단말 설치 가능 | Harmonic Security(브라우저 우선) |
| 단말 설치 없이 인라인만 | WitnessAI(에이전트리스) |
| 발견 + 강한 DLP 동시 | Nightfall AI |
| "어떤 데이터가 갔나"가 핵심 질문 | Cyberhaven |
| 승인 AI 자산 인벤토리 | [AI-SPM](/ai/ai-spm/)(Wiz, Prisma AIRS) |

## 도입 고려사항

**망분리와 N²SF.** 업무망에서 외부 AI 자체가 차단된 환경이면 발견의 무게가 "DNS/프록시 차단 검증"으로 옮겨간다. [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 전환으로 등급별 AI 허용이 생기면, 어느 등급 데이터가 어느 AI로 가는지 가시화가 핵심이 된다.

**개인정보보호법.** 미승인 AI에 PII가 붙여넣어지는 흐름은 위반 소지가 크다. 프롬프트 단위 DLP와 클립보드/붙여넣기 통제가 직접 통제점이다.

**TLS 인스펙션의 법적, 운영 리스크.** 루트 CA 설치형 복호화는 직원 사생활 트래픽까지 본다. 검사 범위를 업무 AI 도메인으로 한정하고, 핀닝 앱 우회 목록을 사각지대로 문서화한다.

**공공과 정부.** 클라우드 인라인 경유 자체가 [CSAP](/korea/regulation/csap-n2sf/)와 데이터 리전 검토 대상이다. 단말 기반(브라우저 확장/엔드포인트) 캡처는 클라우드 경유 없이 적용 가능하나, 단말 텔레메트리의 처리, 보관 위치를 확인한다.

**한국 시장 노트.** WitnessAI는 2026-01 라운드에 Samsung Ventures, Qualcomm Ventures가 참여했다(국내 진출 신호로 볼 여지, 공식 리전, 총판은 미발표). Zscaler, Netskope, Palo Alto, Microsoft는 국내 영업 거점이 있으나, **각 GenAI 모듈의 한국 데이터 리전 보장**은 공개 자료로 확인되지 않으니 직접 확인한다.

## 출처

- [Zscaler — SSL/TLS Inspection](https://help.zscaler.com/zia/understanding-ssltls-inspection)
- [Zscaler — Certificate Pinning and SSL/TLS Inspection](https://help.zscaler.com/zia/certificate-pinning-and-ssltls-inspection)
- [Zscaler — AI 데이터 보호 혁신](https://www.zscaler.com/blogs/product-insights/new-ai-innovations-supercharge-data-protection)
- [Zscaler — AI Access Security](https://www.zscaler.com/products-and-solutions/ai-access-security)
- [Cloudflare AI Gateway — Logging](https://developers.cloudflare.com/ai-gateway/observability/logging/)
- [Cloudflare — CASB AI Integrations](https://blog.cloudflare.com/casb-ai-integrations/)
- [Microsoft — Endpoint DLP](https://learn.microsoft.com/en-us/purview/endpoint-dlp-learn-about)
- [Microsoft — Shadow AI 발견(Defender for Cloud Apps)](https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-data-leak-shadow-ai-step1)
- [Pixie — eBPF TLS Tracing](https://blog.px.dev/ebpf-tls-tracing-past-present-future/)
- [LayerX — Man-in-the-Prompt](https://layerxsecurity.com/blog/man-in-the-prompt-top-ai-tools-vulnerable-to-injection/)
- [Cisco Umbrella — GenAI/ChatGPT DLP와 CASB](https://support.umbrella.com/hc/en-us/articles/16221318789396-DLP-and-CASB-support-for-Generative-AI-and-ChatGPT)
- [Netskope — Securing AI](https://www.netskope.com/solutions/securing-ai)
- [Palo Alto — AI Access Security](https://www.paloaltonetworks.com/sase/ai-access-security)
- [Harmonic Security — Shadow AI Detection](https://www.harmonic.security/solutions/shadow-ai-detection)
- [WitnessAI — $58M 투자 발표](https://www.prnewswire.com/news-releases/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents-302659319.html)
- [Cyberhaven — Linea AI](https://www.cyberhaven.com/product/linea)

## 면책

본 정리는 공개 자료를 근거로 한다. 시장 변동이 빠른 영역이다. 도입 전에 최신 공식 발표를 확인한다. 벤더별 한국 데이터 리전과 핀닝 우회 범위는 직접 검증이 필요하다.

---
최초 발행 2026-06-06, 최종 검토 2026-06-06, 다음 검토 2026-07-06
