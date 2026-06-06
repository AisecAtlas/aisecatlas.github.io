---
title: "벤더별 AI 보안"
description: "대형 보안회사와 스타트업을 공식문서 기반으로 정리합니다. 각 벤더가 어느 기능(① AI 보호 / ② AI 사용 보호 / ③ AI로 보안 강화)을 커버하는지로 분해합니다."
ShowToc: false
---

> **벤더는 "AI 붙었다"로 묶지 않습니다.** 한 벤더가 여러 기능에 걸쳐 있으므로, 제품을 보안표준 기능(① AI 보호 / ② AI 사용행위 보호 / ③ AI로 보안 강화)으로 분해해 정리합니다. 기능별로 보려면 [AI 보안 허브](/ai/)로 갑니다.

## 대형 보안회사

<div class="card-grid">

<a href="palo-alto/" class="card">
<div class="card-title">Palo Alto Networks</div>
<div class="card-desc">Prisma AIRS로 사내 AI를 보호(①), AI Access Security로 직원 GenAI 사용을 통제(②). Protect AI 인수.</div>
<div class="card-cta">① 보호, ② 사용</div>
</a>

<a href="crowdstrike/" class="card">
<div class="card-title">CrowdStrike</div>
<div class="card-desc">Charlotte AI는 SOC 운영 가속(③). 별도로 Falcon AIDR와 AI-SPM이 AI 보호(①), Data Protection이 사용 통제(②).</div>
<div class="card-cta">① ② ③ 전 스펙트럼</div>
</a>

<a href="microsoft/" class="card">
<div class="card-title">Microsoft</div>
<div class="card-desc">Security Copilot은 SOC 가속(③). Prompt Shields와 Defender for Cloud가 AI 보호(①), Purview DSPM for AI와 Defender for Cloud Apps가 사용 통제(②).</div>
<div class="card-cta">① ② ③ 전 스펙트럼</div>
</a>

<a href="cisco/" class="card">
<div class="card-title">Cisco</div>
<div class="card-desc">AI Defense가 AI 보호(①, Robust Intelligence 인수), Secure Access AI Access가 사용 통제(②), Splunk가 SOC 가속(③).</div>
<div class="card-cta">① 중심 + ② ③</div>
</a>

<a href="zscaler/" class="card">
<div class="card-title">Zscaler</div>
<div class="card-desc">AI Access Security가 인라인 프록시로 직원 AI 사용을 통제(②, 핵심). AI Guard와 AI-SPM이 AI 보호(①), Data Fabric이 SOC 가속(③).</div>
<div class="card-cta">② 중심 + ① ③</div>
</a>

<a href="check-point/" class="card">
<div class="card-title">Check Point</div>
<div class="card-desc">인수한 Lakera로 AI 보호(①, AI Agent Security와 Red Teaming). GenAI Protect가 사용 통제(②), Infinity AI Copilot이 SOC 가속(③). AI Defense Plane 통합.</div>
<div class="card-cta">① 중심 + ② ③</div>
</a>

<a href="sentinelone/" class="card">
<div class="card-title">SentinelOne</div>
<div class="card-desc">Purple AI가 SOC 가속(③, 역사적 핵심). 인수한 Prompt Security가 AI 보호(①)와 사용 통제(②), AI-SPM이 자산 태세.</div>
<div class="card-cta">③ 중심 + ① ②</div>
</a>

<a href="wiz/" class="card">
<div class="card-title">Wiz</div>
<div class="card-desc">AI-SPM으로 클라우드 AI 자산을 에이전트리스로 발견(①). 인라인 PEP가 아니라 Security Graph 기반 태세. Wiz Defend가 런타임 탐지(③). 2026년 Google 인수.</div>
<div class="card-cta">① 태세 중심</div>
</a>

</div>

## 스타트업

대형 벤더가 ①②③ 전 스펙트럼이라면, 스타트업은 단일 기능에 특화해 대형이 비운 PEP 위치를 메웁니다.

<div class="card-grid">

<a href="harmonic/" class="card">
<div class="card-title">Harmonic Security</div>
<div class="card-desc">브라우저 확장으로 직원 AI 사용을 단말에서 통제(②). MCP Gateway로 에이전트 보안(①). PEP가 엔드포인트와 브라우저.</div>
<div class="card-cta">② 중심 + ① MCP</div>
</a>

<a href="witnessai/" class="card">
<div class="card-title">WitnessAI</div>
<div class="card-desc">에이전트리스 네트워크 인라인 클라우드 프록시로 AI 사용 통제(②). AI Firewall로 런타임 보호(①). 단말 설치 없음, SWG가 트래픽 포워딩.</div>
<div class="card-cta">② 중심 + ① Firewall</div>
</a>

<a href="nightfall/" class="card">
<div class="card-title">Nightfall AI</div>
<div class="card-desc">AI 네이티브 DLP(②). 브라우저 확장과 엔드포인트로 미승인 AI를 인라인 차단하고, API로 승인 SaaS를 out-of-band 스캔하는 하이브리드.</div>
<div class="card-cta">② DLP 하이브리드</div>
</a>

<a href="cyberhaven/" class="card">
<div class="card-title">Cyberhaven</div>
<div class="card-desc">데이터 리니지로 "어떤 데이터가 AI로 갔나"를 추적(②). 내용 패턴이 아니라 출처와 맥락으로 분류. 엔드포인트 에이전트, Linea AI.</div>
<div class="card-cta">② 데이터 리니지</div>
</a>

<a href="hiddenlayer/" class="card">
<div class="card-title">HiddenLayer</div>
<div class="card-desc">AI 모델과 공급망 보호(①). Model Scanner가 모델 바이너리를 정적 스캔, AIDR이 추론 경로 밖에서 런타임 탐지. AIBOM 생성.</div>
<div class="card-cta">① 모델 보안</div>
</a>

<a href="mindgard/" class="card">
<div class="card-title">Mindgard</div>
<div class="card-desc">AI를 공격해 취약점을 찾는 공세적 레드티밍(①). 타깃 AI를 인터페이스로 자동 공격, OWASP와 MITRE ATLAS 매핑. Lancaster 스핀아웃.</div>
<div class="card-cta">① 레드티밍</div>
</a>

</div>

## 어떻게 읽나

각 벤더 프로필은 같은 구조입니다. 한눈에 보기 → 표준 기능과 공격표면 통제 → 제품군(공식문서) → 보안 아키텍처(ZTA) → 강점과 한계 → 한국 시장 노트 순으로 정리합니다.

기능 × 벤더 교차표로 전체를 보려면 [AI 보안 지도](/ai/map/)가 출발점입니다. 인수된 스타트업(Lakera, Protect AI 등)은 인수사 프로필 안에서 다룹니다.
