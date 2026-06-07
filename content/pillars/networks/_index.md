---
title: "Networks"
description: "네트워크 경계 의존을 줄이고 암호화와 세그멘테이션을 강화합니다."
pillars: ["Networks"]
ShowToc: false
---

> **경계 의존을 줄이는 것이 핵심입니다.** "네트워크 안에 있으니 믿는다"는 가정을 버립니다. ZTNA에서 SASE, 마이크로세그멘테이션으로 진화합니다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 작성된 솔루션 리뷰

<div class="card-grid">

<a href="/solutions/zscaler/" class="card">
<div class="card-title">Zscaler</div>
<div class="card-desc">Zero Trust Exchange 기반 ZTNA, SASE. 네트워크를 확장하지 않고 사용자와 앱을 직접 연결하는 인사이드아웃 구조.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/prisma-access/" class="card">
<div class="card-title">Palo Alto Prisma Access</div>
<div class="card-desc">Prisma SASE 기반. 보안(Prisma Access)과 SD-WAN을 단일 콘솔(Strata Cloud Manager)로 통합.</div>
<div class="card-cta">리뷰 보기</div>
</a>

<a href="/solutions/netskope/" class="card">
<div class="card-title">Netskope</div>
<div class="card-desc">자체 소유 사설 보안 클라우드(NewEdge)와 단일 Zero Trust Engine. 서울 데이터센터 운영.</div>
<div class="card-cta">리뷰 보기</div>
</a>

</div>

## 5개 Function

CISA ZTMM v2 Networks 영역의 Function입니다.

| Function | 한국어 | 핵심 |
|---|---|---|
| Network Segmentation | 네트워크 세그멘테이션 | 평면 네트워크에서 마이크로세그멘테이션으로 |
| Network Traffic Management | 트래픽 관리 | 애플리케이션 인지 기반 정책 적용 |
| Traffic Encryption | 트래픽 암호화 | 전 구간 암호화와 복호화 검사 |
| Network Resilience | 네트워크 복원력 | 분산 구조로 단일 장애점 제거 |
| Visibility & Analytics | 가시성과 분석 | 트래픽 가시화와 이상 탐지 |

## 4단계 성숙도

| 단계 | 요약 | 대표 도구 |
|---|---|---|
| Traditional | 경계 방화벽과 VPN | 사내 방화벽, IPSec VPN |
| Initial | 기본 세그멘테이션, 일부 ZTNA | 차세대 방화벽, ZTNA 파일럿 |
| Advanced | ZTNA 전면 적용, SASE 통합 | Zscaler, Palo Alto Prisma, Netskope |
| Optimal | 마이크로세그멘테이션, 지속 검증 | Illumio, Akamai Guardicore |

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| ZTNA | 애플리케이션 단위 원격 접근, VPN 대체 | Zscaler Private Access, Cloudflare Access, Netskope Private Access |
| SASE / SSE | 네트워크와 보안 기능의 클라우드 통합 | Zscaler, Palo Alto Prisma, Netskope, Cato Networks |
| 마이크로세그멘테이션 | 내부 횡적 이동 차단 | Illumio, Zero Networks, Akamai Guardicore, VMware NSX |

## 시장 동향 (2025-2026)

**VPN에서 ZTNA로.** Gartner는 2025년까지 신규 원격 접근 도입의 **70% 이상이 VPN이 아닌 ZTNA** 기반이 될 것으로 전망했습니다([Data Center Knowledge](https://www.datacenterknowledge.com/cybersecurity/gartner-zero-trust-will-replace-your-vpn-by-2025)).

**SASE 번들 확산.** Gartner는 SD-WAN 구매의 SASE 번들 비율이 2024년 20%에서 **2027년 65%**로 늘 것으로 전망했습니다([Reemo 블로그](https://blog.reemo.io/vpn-zero-trust-ztna-transition-2025/)).

**단일 벤더 수렴.** SSE 벤더와 SASE 플랫폼 벤더 간 기능 격차가 좁혀집니다. 단일 벤더 SASE 채택이 늡니다([Network World](https://www.networkworld.com/article/3997260/genai-controls-and-ztna-architecture-set-sse-vendors-apart.html)).

**정책 자동화와 신원 결합.** 마이크로세그멘테이션이 정적 IP 기반에서 정책 자동 학습과 신원 결합 방향으로 이동합니다. Zero Networks는 수동 정책 작성 없이 트래픽을 학습해 민감 연결에 MFA를 게이트로 적용합니다([principlezero](https://principlezero.net/2025/10/06/top-microsegmentation-vendors/)). Palo Alto Networks는 2025년 7월 [신원 보안](/pillars/identity/) 기업 CyberArk를 약 **250억 달러**에 인수하기로 합의해(FY2026 하반기 종결 예정, [Palo Alto Networks](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-announces-agreement-to-acquire-cyberark--the-identity-security-leader)) 네트워크 통제와 신원의 수렴을 보여줍니다.

## 도입 의사결정

### 첫 번째 결정: 우선순위

| 우선순위 | 권장 카테고리 |
|---|---|
| 원격 접근과 VPN 대체 | ZTNA |
| 지점과 클라우드 트래픽 통합 보안 | SASE / SSE |
| 내부 횡적 이동 차단 | 마이크로세그멘테이션 |

### 두 번째 결정: 벤더 전략

| 환경 | 권장 |
|---|---|
| 단순 운영과 단일 콘솔 우선 | 단일 벤더 SASE (Zscaler, Prisma) |
| 기존 자산 활용과 유연성 우선 | 멀티 벤더 SSE 조합 |

### 세 번째 결정: 목표 성숙도

| 목표 단계 | 최소 추가 솔루션 |
|---|---|
| Initial에서 Advanced로 | ZTNA 전면 적용, SASE 통합 |
| Advanced에서 Optimal로 | 마이크로세그멘테이션, 전 구간 암호화 |

## 도입 고려사항

**망분리.** 클라우드 경유 SASE 구조는 전통적 물리 망분리와 충돌할 수 있습니다. [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 전환으로 민감(S), 공개(O) 등급에 논리 분리가 허용되면 ZTNA 적용 여지가 넓어집니다.

**공공과 정부.** 클라우드형 ZTNA, SASE는 [CSAP 인증](/korea/regulation/csap-n2sf/) 보유 여부와 트래픽 경유 리전을 확인합니다.

**금융권.** 인라인 클라우드 프록시 구조가 [전자금융감독규정](/korea/regulation/financial-mangbunri/)의 망 통제 요건과 정합하는지 사전 검토가 필요합니다.

**데이터 리전.** 글로벌 SASE는 트래픽이 해외 PoP를 경유할 수 있습니다. 개인정보 국외 이전 관점에서 한국 리전 사용 가능 여부를 확인합니다.

## 관련 페이지

- [AI 사용 가시화](/ai/ai-usage-visibility/) — 네트워크 통제 지점에서 직원 AI 사용을 캡처
- [CISA ZTMM v2](/framework/cisa-ztmm-v2/) — Networks 영역의 Function과 성숙도 정의
- [ZTA 기반 솔루션 분류](/pillars/) — 5개 영역 전체의 솔루션 카탈로그

---
최종 검토 2026-05-30
