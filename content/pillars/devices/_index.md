---
title: "Devices"
description: "엔드포인트, 서버, 모바일, IoT 자산을 관리한다."
pillars: ["Devices"]
ShowToc: false
---

> **자산 인벤토리, 신뢰 평가, 정책 적용이 핵심입니다.** 모든 자산을 알지 못하면 접근 결정을 내릴 수 없습니다. EDR과 XDR이 가장 큰 카테고리입니다.

참고 표준: [CISA ZTMM v2](/framework/cisa-ztmm-v2/), [NIST SP 800-207](/framework/nist-800-207/)

## 작성된 솔루션 리뷰

<div class="card-grid">

<a href="/solutions/crowdstrike-falcon/" class="card">
<div class="card-title">CrowdStrike Falcon</div>
<div class="card-desc">단일 경량 에이전트 위에 모듈을 더하는 EDR/XDR 리더. RSA 2026에서 Charlotte AgentWorks 발표.</div>
<div class="card-cta">정합성 진단 보기 (8.9)</div>
</a>

</div>

## 5개 Function

CISA ZTMM v2 Devices 영역의 Function입니다.

| Function | 한국어 | 핵심 |
|---|---|---|
| Policy Enforcement | 정책 적용 | 기기 상태 기반 접근 정책 강제 |
| Asset Management | 자산 관리 | 모든 기기의 발견과 인벤토리 |
| Resource Access | 자원 접근 | 기기 신뢰도에 따른 자원 접근 통제 |
| Device Threat Protection | 위협 보호 | EDR, XDR 기반 탐지와 대응 |
| Visibility & Analytics | 가시성과 분석 | 기기 텔레메트리 수집과 분석 |

## 4단계 성숙도

| 단계 | 요약 | 대표 도구 |
|---|---|---|
| Traditional | 수기 자산 대장, 안티바이러스 | 백신, 엑셀 대장 |
| Initial | EPP 도입, 기본 패치 관리 | EPP, MDM 기본 |
| Advanced | EDR 전면, 자산 인벤토리 자동화 | CrowdStrike Falcon, SentinelOne |
| Optimal | XDR 통합, 지속 신뢰 평가와 자동 대응 | XDR 플랫폼, 자율 대응 |

## 솔루션 카테고리

| 카테고리 | 정의 | 대표 솔루션 |
|---|---|---|
| EPP / EDR | 엔드포인트 보호와 탐지 대응 | CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint |
| XDR | 엔드포인트 너머로 탐지 범위 확장 | Palo Alto Cortex XDR, Trellix, Trend Vision One |
| MDM / UEM | 모바일과 통합 단말 관리 | Intune, Jamf, VMware Workspace ONE |

## 시장 동향 (2025-2026)

**Microsoft의 점유율.** Microsoft는 IDC 2025 데이터 기준 모던 엔드포인트 보안 시장 점유율에서 **3년 연속 1위**를 차지했습니다([Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2025/08/27/microsoft-ranked-number-one-in-modern-endpoint-security-market-share-third-year-in-a-row/)).

**리더 구도.** SentinelOne은 2025년 Gartner Endpoint Protection Platforms 평가에서 **5년 연속 리더**로 선정됐습니다([netguardia 정리](https://netguardia.com/security-operations/software-tools/comparing-2026s-leading-edr-platforms-crowdstrike-sentinelone-microsoft-defender-huntress/)).

**AI 자율 대응으로 이동.** EDR이 XDR로 확장되고, 분석가 개입 없이 행동하는 자율 대응이 차별 요소가 됐습니다. CrowdStrike는 RSA 2026에서 Charlotte AgentWorks 생태계를 공개했습니다([CrowdStrike 보도자료](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-launches-charlotte-ai-agentworks-ecosystem-for-building-secure-agents/)).

## 작성 예정

- SentinelOne Singularity
- Microsoft Defender for Endpoint
- Palo Alto Cortex XDR

## 도입 의사결정

### 첫 번째 결정: 환경

| 환경 | 권장 |
|---|---|
| Windows와 Microsoft 365 중심 | Microsoft Defender for Endpoint |
| 멀티 OS, 클라우드 워크로드 포함 | CrowdStrike Falcon |
| 자율 대응을 우선시 | SentinelOne Singularity |

### 두 번째 결정: 탐지 범위

| 목표 | 권장 |
|---|---|
| 엔드포인트 탐지 대응 | EDR |
| 엔드포인트, 네트워크, 클라우드 통합 탐지 | XDR |

### 세 번째 결정: 목표 성숙도

| 목표 단계 | 최소 추가 솔루션 |
|---|---|
| Initial에서 Advanced로 | EDR 전면 적용, 자산 인벤토리 자동화 |
| Advanced에서 Optimal로 | XDR 통합, 자율 대응과 지속 신뢰 평가 |

## 한국 시장 적용 노트

**개인정보보호법.** EDR은 엔드포인트의 행위 텔레메트리를 광범위하게 수집합니다. 수집 범위와 보존 기간이 개인정보 처리 원칙에 맞는지 검토하세요.

**망분리와 N²SF.** [국가망보안체계(N²SF)](/korea/regulation/n2sf-mangbunri/) 환경에서 클라우드 기반 EDR의 텔레메트리 전송 경로를 확인해야 합니다. 자체 호스팅 관리 서버 옵션 유무가 변수입니다.

**공공과 정부.** 클라우드형 EDR, XDR은 [CSAP 인증](/korea/regulation/csap-n2sf/)과 데이터 처리 리전을 확인해야 합니다.

**금융권.** [전자금융감독규정](/korea/regulation/financial-mangbunri/)에 따라 엔드포인트 로그 수집과 자율 대응 범위가 보안성 검토 대상이 됩니다. 자세한 사례는 [CrowdStrike Falcon 리뷰](/solutions/crowdstrike-falcon/)의 한국 노트를 참고하세요.

---
최종 검토 2026-05-30
