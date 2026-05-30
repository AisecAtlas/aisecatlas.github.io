---
title: "보안 시나리오"
description: "구체적 보안 질문을 솔루션 조합으로 답한다. MITRE D3FEND와 Defense in Depth 기반."
ShowToc: false
---

> **솔루션 중심이 아니라 질문 중심.** "X를 어떻게 막을 것인가" 같은 구체적 보안 운영 질문에 대해 어떤 솔루션 조합으로 답하는지 정리합니다. MITRE D3FEND의 위협-방어 매핑과 Defense in Depth 원칙을 따릅니다.

## 시나리오 페이지가 답하는 것

| 묻는 것 | 답하는 것 |
|---|---|
| 어떤 위협이 어디서 시작되어 어떻게 진행되나 | 위협 모델 (행위자, 진입 경로, 보호 대상, 공격 단계) |
| 어디서 막을 것인가 | 통제 계층 (DNS, 네트워크, 엔드포인트, 데이터, 신원) |
| 무엇으로 막을 것인가 | 카테고리별 솔루션 옵션과 역할 분담 |
| 어떤 조합이 합리적인가 | 최소 / 권장 / 최적 3단계 조합과 트레이드오프 |
| 한국 환경에서 무엇이 달라지나 | 망분리, 개인정보보호법, 금감원, CSAP 적용 변수 |

## 작성 예정 시나리오

다음 시나리오 페이지를 단계적으로 추가합니다. 시나리오 제안은 [GitHub Issues](https://github.com/AisecAtlas/aisecatlas.github.io/issues)로 받습니다.

### 사용자 활동 통제
- 사용자 웹 활동으로 인한 악성 사이트 접근과 자료 유출을 어떻게 막을 것인가 (SWG, DLP, ZTNA, DNS 필터, 브라우저 격리, CASB 조합)
- 외부 SaaS 사용 중 자격 정보 유출을 어떻게 막을 것인가 (IDaaS, CASB, ITDR 조합)
- 외부 LLM(ChatGPT, Claude) 사용으로 인한 사내 데이터 유출을 어떻게 막을 것인가 (AI 게이트웨이, DLP, 브라우저 격리 조합)

### 신원과 권한
- 자격 정보 도용 후 횡적 이동을 어떻게 막을 것인가 (ITDR, PAM, 마이크로세그멘테이션 조합)
- 퇴사자 권한 미회수 사고를 어떻게 막을 것인가 (IGA, IdP, 인사 시스템 통합)

### 데이터와 워크로드
- 클라우드 구성 실수로 인한 데이터 노출을 어떻게 막을 것인가 (CSPM, DSPM, IaC 보안 조합)
- 랜섬웨어 침해 후 백업까지 무력화되는 것을 어떻게 막을 것인가 (EDR, 불변 백업, 권한 분리)

### AI 시대 신규 위협
- AI 에이전트의 도구 오용을 어떻게 막을 것인가 (AI 게이트웨이, IAM, OPA 정책)
- Prompt Injection 공격을 어떻게 막을 것인가 (Runtime 가드레일, AI 레드티밍, 출력 검증)

## 표기 원칙

- 시나리오 제목은 **질문형**으로 시작합니다 ("X를 어떻게 막을 것인가")
- 통제 계층은 **Defense in Depth** (CISA 가이드 기준)
- 위협 매핑은 **MITRE ATT&CK** ID 인용
- 방어 기법은 **MITRE D3FEND** ID 인용
- 솔루션은 본 사이트의 [솔루션 가이드](/pillars/) 풀 리뷰로 링크

## 참고

- [MITRE D3FEND](https://d3fend.mitre.org/)
- [CISA Defense in Depth 가이드 (PDF)](https://www.cisa.gov/sites/default/files/recommended_practices/NCCIC_ICS-CERT_Defense_in_Depth_2016_S508C.pdf)
- [OWASP Secure Product Design Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Product_Design_Cheat_Sheet.html)
