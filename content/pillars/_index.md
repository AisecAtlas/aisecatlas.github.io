---
title: "솔루션 가이드"
description: "CISA Zero Trust Maturity Model의 5개 영역으로 분류한 보안 솔루션 카탈로그."
ShowToc: false
---

> **5개 영역으로 솔루션을 분류한다.** 각 영역 카드는 카테고리 설명과 개별 솔루션 리뷰로 연결된다. CISA Zero Trust Maturity Model 기준이다.

<div class="card-grid">

<a href="identity/" class="card">
<div class="card-title">Identity</div>
<div class="card-desc">사용자와 서비스의 신원을 확립하고 지속적으로 검증한다. IDaaS, PAM, IGA, ITDR.</div>
<div class="card-cta">신원 영역 보기</div>
</a>

<a href="devices/" class="card">
<div class="card-title">Devices</div>
<div class="card-desc">엔드포인트, 서버, 모바일, IoT 자산을 관리한다. EPP, EDR, XDR, MDM, UEM.</div>
<div class="card-cta">기기 영역 보기</div>
</a>

<a href="networks/" class="card">
<div class="card-title">Networks</div>
<div class="card-desc">네트워크 경계 의존을 줄이고 암호화와 세그멘테이션을 강화한다. ZTNA, SASE, SSE.</div>
<div class="card-cta">네트워크 영역 보기</div>
</a>

<a href="applications/" class="card">
<div class="card-title">Applications & Workloads</div>
<div class="card-desc">개발부터 런타임까지 애플리케이션의 보안을 다룬다. CSPM, CNAPP, CWPP, WAF.</div>
<div class="card-cta">애플리케이션 영역 보기</div>
</a>

<a href="data/" class="card">
<div class="card-title">Data</div>
<div class="card-desc">데이터의 분류, 라벨링, 암호화, 접근 통제, 유출 방지를 다룬다. DSPM, DLP.</div>
<div class="card-cta">데이터 영역 보기</div>
</a>

<a href="/cross-cutting/visibility/" class="card">
<div class="card-title">횡단 기능</div>
<div class="card-desc">5개 영역에 걸쳐 작동한다. Visibility (SIEM/XDR), Automation, Governance.</div>
<div class="card-cta">횡단 기능 보기</div>
</a>

</div>

## 영역별 성숙도 한눈에 보기

가로축은 CISA ZTMM 성숙도 단계, 세로축은 보안 영역이다. 단계는 일직선이 아니다. 영역마다 단계가 달라도 된다.

| 영역 | Traditional | Initial | Advanced | Optimal |
|---|---|---|---|---|
| **Identity** | AD, LDAP | IDaaS (Okta, Entra ID) | 조건부 접근, MFA 강화 | ITDR, 지속 검증 |
| **Devices** | AV | EPP, EDR | XDR, 통합 정책 | 디바이스 신뢰 점수 |
| **Networks** | VPN | ZTNA 1.0 | SASE, SSE | 마이크로세그멘테이션 |
| **Applications** | WAF | CSPM | CNAPP, CWPP | Runtime 보호 |
| **Data** | DLP | 분류와 라벨링 | DSPM | DTAR, 동적 마스킹 |

## 리뷰 구조

모든 솔루션 리뷰는 같은 구조를 따른다. 한눈에 보기, 어떤 제품인가, 시장 위치, 강점과 한계, 언제 선택하나, 도입 고려사항으로 정리한다.

각 리뷰는 CISA ZTMM 영역과 NIST SP 800-207 7원칙을 기준으로 솔루션의 위치를 짚는다.

## 현재 작성된 리뷰

| 영역 | 솔루션 | 카테고리 |
|---|---|---|
| Identity | [Microsoft Entra ID](/solutions/entra-id/) | IDaaS, 조건부 접근 |
| Identity | [Okta](/solutions/okta/) | IDaaS, CIAM |
| Devices | [CrowdStrike Falcon](/solutions/crowdstrike-falcon/) | EDR, XDR |
| Devices | [SentinelOne Singularity](/solutions/sentinelone/) | EDR, XDR |
| Networks | [Zscaler](/solutions/zscaler/) | ZTNA, SASE |
| Networks | [Palo Alto Prisma Access](/solutions/prisma-access/) | SASE, SSE |
| Networks | [Netskope](/solutions/netskope/) | SSE, SASE |
| Applications | [HashiCorp Vault](/solutions/hashicorp-vault/) | 시크릿 관리 |
| Applications | [Wiz](/solutions/wiz/) | CNAPP, 클라우드 보안 |
| Data | [Varonis](/solutions/varonis/) | 데이터 거버넌스, DSPM |
| Data | [Rubrik](/solutions/rubrik/) | 데이터 보안, 복원력 |
| Data | [Harmonic Security](/solutions/harmonic-security/) | Shadow AI 발견, GenAI DLP |
| Data | [WitnessAI](/solutions/witnessai/) | AI 사용 가시화, 거버넌스 |
