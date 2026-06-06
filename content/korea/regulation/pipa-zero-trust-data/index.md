---
title: "개인정보보호법 개정과 Zero Trust Data"
description: "자동화된 결정 대응권, 전송요구권, 생성형 AI 안내서가 데이터 보안에 주는 영향."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["korea", "regulation", "pipa", "zero-trust", "data", "privacy"]
categories: ["korea-note"]
ShowToc: true
---

> **이 페이지의 결론**: 개인정보보호법(PIPA)이 AI 시대에 맞춰 개정되면서 정보주체 권리와 사업자 안전조치 의무가 함께 강화됐습니다. 자동화된 결정 대응권(2024년 3월 시행), 개인정보 전송요구권(2025년 3월 시행), 생성형 AI 개인정보 처리 안내서(2025년 8월)가 핵심입니다. 이 의무들은 [Data 영역](/pillars/data/)의 분류, 접근 통제, 암호화와 직접 맞물립니다.

## 왜 지금 중요한가

개인정보보호법은 데이터 보안 솔루션 선택의 법적 출발점입니다. 최근 개정은 두 방향으로 진행됐습니다. 정보주체 권리를 강화하고, AI 활용에 맞춘 처리 기준을 제시하는 것입니다.

**자동화된 결정 대응권.** AI 기반 채용이나 복지수급자 선정처럼 국민 생활에 중요한 영향을 미치는 자동화된 결정에 대해 정보주체의 권리가 보장됩니다. 사전 공개, 설명 요구권, 거부권으로 구성되며, 개인정보보호법 제37조의2 신설로 **2024년 3월 15일 시행**됐습니다([개인정보위 안내서](https://www.privacy.go.kr/front/bbs/bbsView.do?bbsNo=BBSMSTR_000000000049&bbscttNo=20762)).

**개인정보 전송요구권(마이데이터).** 한 서비스의 데이터를 다른 서비스로 옮길 수 있는 권리로, 제35조의2 신설로 **2025년 3월 13일 시행**됐습니다. 의료, 통신, 에너지 분야부터 우선 시행됩니다([SK쉴더스 정리](https://www.skshieldus.com/blog-security/security-trend-idx-48)).

**생성형 AI 처리 안내서.** 개인정보보호위원회는 2025년 8월 「생성형 인공지능(AI) 개발, 활용을 위한 개인정보 처리 안내서」를 공개했습니다([개인정보위 보도](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&mCode=C020010000&nttId=11410)).

> **핵심.** "동의받고 수집한다"는 기존 틀을 넘어, AI가 데이터를 어떻게 처리하고 결정하는지 투명하게 보이고 통제하라는 방향입니다. 이는 데이터 자산을 발견하고 분류하고 접근을 통제하는 Zero Trust Data 원칙과 같습니다.

## 주요 개정 사항

| 개정 | 조항 | 시행 | 내용 |
|---|---|---|---|
| 자동화된 결정 대응권 | 제37조의2 | 2024-03-15 | 사전 공개, 설명 요구, 거부권 |
| 개인정보 전송요구권 | 제35조의2 | 2025-03-13 | 마이데이터, 의료, 통신, 에너지 우선 |
| 생성형 AI 처리 안내서 | 고시, 안내서 | 2025-08 | AI 수명주기 단계별 처리 기준 |

출처: [개인정보위 안내서](https://www.privacy.go.kr/front/bbs/bbsView.do?bbsNo=BBSMSTR_000000000049&bbscttNo=20762), [김장 법률사무소 자동화된 결정 고시](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=29787)

## 생성형 AI 처리 안내서의 4단계

안내서는 생성형 AI 수명주기를 네 단계로 나누고 단계별 개인정보 보호 고려사항과 안전조치를 제시합니다. 모델 개발자와 모델 이용자의 역할을 구분합니다([김장 법률사무소](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=32696)).

| 단계 | 핵심 고려사항 |
|---|---|
| 목적 설정 | 처리 목적의 적법성과 필요성 |
| 전략 수립 | 데이터 확보 방식과 가명처리 |
| AI 학습과 개발 | 학습 데이터의 개인정보 보호 |
| 시스템 적용과 관리 | 운영 단계의 안전조치와 모니터링 |

## Zero Trust Data 영역과의 매핑

법적 의무를 Data 영역의 Function으로 옮기면 다음과 같습니다.

| 법적 의무 | Zero Trust Data Function | 필요한 도구 |
|---|---|---|
| 최소 수집, 목적 제한 | Data Inventory, Categorization | DSPM, 분류 도구 |
| 접근 통제 | Data Access | DLP, 접근 관리 |
| 안전조치(암호화) | Data Encryption | 암호화, 키 관리 |
| 자동화된 결정 투명성 | 거버넌스 | AI TRiSM, [AI-SPM](/ai/ai-spm/) |

자세한 솔루션 카테고리는 [Data 영역](/pillars/data/)을 참고합니다.

## 다른 규제와의 관계

| 규제 | 주관 | Data 관점 초점 |
|---|---|---|
| 개인정보보호법 | 개인정보보호위원회 | 정보주체 권리, 처리 안전조치 |
| [N²SF](/korea/regulation/n2sf-mangbunri/) | 국가정보원 | 데이터 등급(C/S/O) 분류 |
| [전자금융감독규정](/korea/regulation/financial-mangbunri/) | 금융위원회 | 금융 데이터 보호와 접근 통제 |
| [CSAP](/korea/regulation/csap-n2sf/) | KISA, 국정원 | 클라우드 데이터 처리 인증 |

## 본 사이트는 이 정책을 어떻게 사용하나

- 솔루션 리뷰의 **한국 시장 노트 개인정보보호법 항목**에서 DSPM, DLP, 암호화 솔루션이 법적 안전조치 의무를 어떻게 충족하는지 판단하는 근거로 사용합니다.
- [생성형 AI 보안](/ai/defend-ai/)과 [AI-SPM](/ai/ai-spm/) 도입 시 안내서의 수명주기 단계와 연계합니다.

## 출처

- [개인정보위 — 자동화된 결정에 대한 정보주체의 권리 안내서](https://www.privacy.go.kr/front/bbs/bbsView.do?bbsNo=BBSMSTR_000000000049&bbscttNo=20762)
- [개인정보위 — 생성형 AI 개발, 활용을 위한 개인정보 처리 안내서](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&mCode=C020010000&nttId=11410)
- [SK쉴더스 — 2025 개인정보보호법 3차 개정안 핵심](https://www.skshieldus.com/blog-security/security-trend-idx-48)
- [김장 법률사무소 — 자동화된 결정 고시 제정안](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=29787)
- [김장 법률사무소 — 생성형 AI 개인정보 처리 안내서](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=32696)

## 면책

본 페이지는 공개 자료를 근거로 합니다. 법령과 고시는 후속 개정으로 바뀔 수 있습니다. 권위 있는 해석이 필요하면 개인정보보호위원회의 원문 법령과 안내서를 확인합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
