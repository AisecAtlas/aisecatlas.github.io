---
title: "Applications & Workloads"
description: "개발부터 런타임까지 애플리케이션의 보안."
pillars: ["Applications"]
ShowToc: false
---

> **개발, 배포, 런타임을 잇는 전 주기 보안이 핵심입니다.** 경계가 아니라 워크로드 단위로 보호합니다. AI/LLM 보안도 이 영역에 포함됩니다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 작성된 솔루션 리뷰

### 클라우드와 시크릿

<div class="card-grid">

<a href="/solutions/wiz/" class="card">
<div class="card-title">Wiz</div>
<div class="card-desc">에이전트리스 CNAPP. Security Graph로 악용 가능한 공격 경로만 선별. CSPM, CWPP, CIEM, DSPM 통합.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/hashicorp-vault/" class="card">
<div class="card-title">HashiCorp Vault</div>
<div class="card-desc">동적 시크릿과 암호화 서비스. 수명이 짧은 자격 증명을 생성하고 자동 회수합니다.</div>
<div class="card-cta">리뷰 보기</div>
</a>

</div>

### AI 보안 (AI를 지키는 일)

<div class="card-grid">

<a href="/solutions/protect-ai/" class="card">
<div class="card-title">Protect AI</div>
<div class="card-desc">모델 스캐닝과 AI 공급망. 오픈소스 ModelScan, Palo Alto Prisma 편입.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/lakera/" class="card">
<div class="card-title">Lakera</div>
<div class="card-desc">LLM 런타임 가드레일과 Gandalf 레드티밍. Check Point 인수.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/hiddenlayer/" class="card">
<div class="card-title">HiddenLayer</div>
<div class="card-desc">런타임(AIDR), 공급망, 자세 관리, 레드티밍 통합. AIBOM 가시성.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/robust-intelligence/" class="card">
<div class="card-title">Robust Intelligence</div>
<div class="card-desc">업계 첫 AI Firewall과 알고리즘 레드티밍. Cisco AI Defense 기반.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/nemo-guardrails/" class="card">
<div class="card-title">NVIDIA NeMo Guardrails</div>
<div class="card-desc">오픈소스 프로그래머블 가드레일 툴킷. Colang으로 정밀 제어.</div>
<div class="card-cta">리뷰 보기</div>
</a>

</div>

## 5개 Function

CISA ZTMM v2 Applications & Workloads 영역의 Function입니다.

| Function | 한국어 | 핵심 |
|---|---|---|
| Application Access | 애플리케이션 접근 | 사용자와 워크로드의 앱 접근 통제 |
| Application Threat Protection | 위협 보호 | 런타임 공격 탐지와 차단 |
| Accessible Applications | 접근성 | 안전한 외부 노출과 게시 |
| Application Security Testing | 보안 테스트 | 개발 단계의 취약점 점검 |
| Visibility & Analytics | 가시성과 분석 | 워크로드와 구성 가시화 |

## 4단계 성숙도

| 단계 | 요약 | 대표 도구 |
|---|---|---|
| Traditional | 경계 방화벽, 수동 코드 리뷰 | 네트워크 방화벽 |
| Initial | WAF, 기본 취약점 스캔 | WAF, SAST 도구 |
| Advanced | CNAPP 도입, CI/CD 통합 보안 | Wiz, Prisma Cloud, Orca |
| Optimal | 런타임 보호, 전 주기 자동화 | CNAPP과 CWPP, AI 보안 통합 |

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| CSPM | 클라우드 구성 위험 관리 | Wiz, Prisma Cloud, Orca Security |
| CNAPP | 클라우드 앱 보호 통합 플랫폼 | Wiz, Prisma Cloud, CrowdStrike Falcon Cloud Security |
| CWPP | 워크로드 런타임 보호 | Aqua, Sysdig, Prisma Cloud |
| WAF, API 보안 | 웹과 API 계층 방어 | Cloudflare WAF, Akamai, F5, Imperva, Wallarm |
| AI, LLM 보안 | AI 앱과 모델 보호 | Lakera, Prompt Security, Protect AI |
| ASPM | SDLC 전반의 취약점 결과 통합과 우선순위화 | Apiiro, Cycode, Snyk, Legit Security, OX Security |

AI, LLM 보안은 [AI를 지키는 일](/ai/defend-ai/)과 [AI-SPM 솔루션](/ai/ai-spm/)에서 별도로 깊이 다룹니다. ASPM은 코드부터 클라우드까지 흩어진 보안 도구 결과를 모아 우선순위화하는 계층으로, 데이터 태세의 [DSPM](/pillars/data/)과 AI 태세의 [AI-SPM](/ai/ai-spm/)과 함께 SPM 3형제로 묶입니다.

## 시장 동향 (2025-2026)

**사상 최대 인수.** Google은 클라우드 보안 기업 Wiz를 **320억 달러** 전액 현금에 인수했습니다. 2025년 3월 18일 발표 후 2026년 3월 11일 완료된 사이버보안 역사상 최대 규모 인수입니다([TechCrunch](https://techcrunch.com/2026/03/11/google-completes-32b-acquisition-of-wiz/)). Wiz는 2025년 연간 반복 매출 **10억 달러**를 넘겼습니다.

**플랫폼 통합 압력.** Gartner는 2029년까지 통합 CNAPP를 도입하지 않은 기업의 **60%**가 클라우드 공격면 가시성을 확보하지 못하고 제로 트러스트 목표 달성에 실패할 것으로 전망했습니다([Orca Security 정리](https://orca.security/resources/blog/gartner-2025-market-guide-for-cnapp/)).

**SOC 통합이 성숙 기준.** 2025년 Gartner CNAPP 시장 가이드는 SIEM, SOAR 등 SOC 도구와의 깊은 통합을 성숙한 CNAPP의 차별 역량으로 처음 제시했습니다([Orca Security 정리](https://orca.security/resources/blog/gartner-2025-market-guide-for-cnapp/)). Palo Alto Networks는 Prisma Cloud를 Cortex Cloud로 재편했습니다([Dell'Oro Group](https://www.delloro.com/palo-alto-networks-reboots-cnapp-the-shift-from-prisma-cloud-to-cortex-cloud/)).

## 도입 의사결정

### 첫 번째 결정: 우선순위

| 문제 | 권장 카테고리 |
|---|---|
| 클라우드 구성 위험 점검 | CSPM |
| 여러 도구를 하나로 통합 | CNAPP |
| 컨테이너, 워크로드 런타임 보호 | CWPP |
| 웹과 API 노출 방어 | WAF, API 보안 |
| LLM, AI 앱 보호 | AI, LLM 보안 |
| SDLC 전반 취약점 통합과 우선순위화 | ASPM |

### 두 번째 결정: 환경

| 환경 | 권장 |
|---|---|
| 멀티 클라우드 통합 가시성 우선 | CNAPP (Wiz, Prisma Cloud) |
| 기존 CrowdStrike 사용 | Falcon Cloud Security |

### 세 번째 결정: 목표 성숙도

| 목표 단계 | 최소 추가 솔루션 |
|---|---|
| Initial에서 Advanced로 | CNAPP 도입, CI/CD 보안 통합 |
| Advanced에서 Optimal로 | 런타임 보호(CWPP), AI 보안 결합 |

## 도입 고려사항

**개인정보보호법.** 클라우드 구성 오류로 인한 데이터 노출은 개인정보 유출 사고로 직결됩니다. CSPM의 민감 데이터 노출 탐지 범위를 확인합니다.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 전환으로 공공 클라우드 활용이 늘면, 워크로드 단위 보호와 가시성을 제공하는 CNAPP의 역할이 커집니다.

**공공과 정부.** 클라우드형 CNAPP은 [CSAP 인증](/korea/regulation/csap-n2sf/)과 데이터 처리 리전을 확인합니다.

**금융권.** [전자금융감독규정](/korea/regulation/financial-mangbunri/) 완화로 금융권 클라우드 도입이 늘면서 워크로드 보안과 접근 통제 요건이 보안성 검토 대상이 됩니다.

## 관련 페이지

- [AI를 지키는 일](/ai/defend-ai/) — 모델, 프롬프트, AI 공급망을 보호하는 솔루션 정리
- [CISA ZTMM v2](/framework/cisa-ztmm-v2/) — Applications & Workloads 영역의 Function과 성숙도 기준
- [ZTA 기반 솔루션 분류](/pillars/) — 5개 영역별 솔루션 카탈로그

---
최종 검토 2026-05-30
