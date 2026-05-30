---
title: "보안 시나리오"
description: "구체적 보안 질문을 솔루션 조합으로 답한다. MITRE D3FEND와 Defense in Depth 기반."
ShowToc: false
---

> **솔루션이 아니라 질문에서 출발한다.** "X를 어떻게 막을 것인가" 같은 보안 운영 질문에 솔루션 조합으로 답한다. 위협-방어 매핑은 MITRE D3FEND, 계층 방어는 Defense in Depth 원칙을 따른다.

## 시나리오 페이지가 답하는 것

| 묻는 것 | 답하는 것 |
|---|---|
| 어떤 위협이 어디서 시작되어 어떻게 진행되나 | 위협 모델 (행위자, 진입 경로, 보호 대상, 공격 단계) |
| 어디서 막을 것인가 | 통제 계층 (DNS, 네트워크, 엔드포인트, 데이터, 신원) |
| 무엇으로 막을 것인가 | 카테고리별 솔루션 옵션과 역할 분담 |
| 어떤 조합이 합리적인가 | 최소 / 권장 / 최적 3단계 조합과 트레이드오프 |
| 한국 환경에서 무엇이 달라지나 | 망분리, 개인정보보호법, 금감원, CSAP 적용 변수 |

시나리오 추가 제안은 [GitHub Issues](https://github.com/AisecAtlas/aisecatlas.github.io/issues)로 받는다.

## 표기 원칙

- 시나리오 제목은 **질문형**으로 시작한다 ("X를 어떻게 막을 것인가")
- 통제 계층은 **Defense in Depth**를 따른다 (CISA 가이드 기준)
- 위협 매핑은 **MITRE ATT&CK** ID로 인용한다
- 방어 기법은 **MITRE D3FEND** ID로 인용한다
- 솔루션은 본 사이트의 [솔루션 가이드](/pillars/) 풀 리뷰로 링크한다

## 참고

- [MITRE D3FEND](https://d3fend.mitre.org/)
- [CISA Defense in Depth 가이드 (PDF)](https://www.cisa.gov/sites/default/files/recommended_practices/NCCIC_ICS-CERT_Defense_in_Depth_2016_S508C.pdf)
- [OWASP Secure Product Design Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Product_Design_Cheat_Sheet.html)
