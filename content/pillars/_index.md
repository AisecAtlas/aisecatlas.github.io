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

## 매트릭스로 한눈에 보기

가로축은 성숙도 단계, 세로축은 보안 영역이다. 단계는 일직선이 아니다. 영역마다 단계가 달라도 된다.

| 영역 | Traditional | Initial | Advanced | Optimal |
|---|---|---|---|---|
| **Identity** | AD, LDAP | IDaaS (Okta, Entra ID) | 조건부 접근, MFA 강화 | ITDR, 지속 검증 |
| **Devices** | AV | EPP, EDR | XDR, 통합 정책 | 디바이스 신뢰 점수 |
| **Networks** | VPN | ZTNA 1.0 | SASE, SSE | 마이크로세그멘테이션 |
| **Applications** | WAF | CSPM | CNAPP, CWPP | Runtime 보호 |
| **Data** | DLP | 분류와 라벨링 | DSPM | DTAR, 동적 마스킹 |

## 평가 방식

모든 솔루션 리뷰는 같은 척도를 쓴다.

- **A축 일반 기능** 10점: 통합 관리, 가용성, 성능, 운영성, 비용 투명성
- **B축 표준 정합성** 10점: NIST 7원칙 + CISA ZTMM 단계
- **종합** = 두 축의 평균

평가 항목마다 `ZTA-{영역}-{기능}-{번호}` 형식의 고유 ID를 붙여 외부에서 정확히 인용한다.

<div class="cta-group">
<a href="/evaluation/scoring-rubric/" class="btn-secondary">평가 방식 자세히 보기</a>
</div>

## 현재 작성된 리뷰

| 영역 | 솔루션 | 종합 점수 |
|---|---|---|
| Identity | [Microsoft Entra ID](/solutions/entra-id/) | 8.9 |
| Identity | [Okta](/solutions/okta/) | 8.4 |
| Devices | [CrowdStrike Falcon](/solutions/crowdstrike-falcon/) | 8.9 |
| Devices | [SentinelOne Singularity](/solutions/sentinelone/) | 8.8 |
| Networks | [Zscaler](/solutions/zscaler/) | 8.7 |
| Networks | [Palo Alto Prisma Access](/solutions/prisma-access/) | 8.7 |
| Networks | [Netskope](/solutions/netskope/) | 8.7 |
| Applications | [HashiCorp Vault](/solutions/hashicorp-vault/) | 9.2 |
| Applications | [Wiz](/solutions/wiz/) | 8.7 |
| Data | [Varonis](/solutions/varonis/) | 8.7 |
| Data | [Rubrik](/solutions/rubrik/) | 8.3 |
