---
title: "망분리에서 N²SF로 — 공공 보안정책의 제로트러스트 전환"
description: "획일적 망분리를 대체하는 국가망보안체계(N²SF)와 제로트러스트 정합성"
date: 2026-05-30
lastmod: 2026-05-30
tags: ["korea", "regulation", "n2sf", "zero-trust", "망분리"]
categories: ["korea-note"]
ShowToc: true
---

한국 공공 부문은 19년간 유지한 획일적 물리 망분리를 폐기하고, 정보 중요도에 따라 보안을 차등 적용하는 국가망보안체계(N²SF)로 전환 중입니다. N²SF 정식 가이드라인에 제로트러스트 원칙이 명시적으로 반영되면서, 망분리라서 클라우드와 AI를 못 쓴다는 제약이 풀리는 방향으로 정책이 움직이고 있습니다.

## 정책 전환 방향

한국의 공공 보안정책은 두 갈래로 동시에 바뀌고 있습니다. 하나는 공공 부문을 겨냥한 국정원의 **N²SF**, 다른 하나는 민간기업을 겨냥한 과기정통부와 KISA의 **제로트러스트 가이드라인**입니다. 둘 다 같은 방향을 가리킵니다. 경계 기반 일괄 통제에서 정보와 접근의 중요도에 따른 차등 통제로 가는 것입니다.

**물리 망분리의 폐기.** 정부가 약 19년간 유지해 온 획일적 망분리 정책을 정보 중요도 기반 차등 보안으로 대체합니다. 국정원은 2024년 9월 11일 'CSK 2024'에서 전환 로드맵을 처음 공개했습니다([소만사 정리](https://www.somansa.com/security-report/privacy-report/20240911_mls/)).

**정책명 변경.** 초기 명칭이던 다층보안체계(MLS, Multi Level Security)는 2024년 12월 **국가망보안체계(N²SF, National Network Security Framework)**로 확정되었습니다([전자신문](https://www.etnews.com/20241211000205)).

**제로트러스트의 공식 반영.** 2025년 9월 9일 'CSK 2025'에서 공개된 N²SF 가이드라인 정식판 1.0에는 **제로트러스트 원칙, 오버레이(Overlay) 개념, 크로스 도메인 솔루션(CDS, 망 간 안전 통신 기술)**이 새로 반영되었습니다([ZDNet Korea](https://zdnet.co.kr/view/?no=20250909182304)).

망분리는 안과 밖을 물리적으로 끊는 경계 모델입니다. N²SF는 정보 등급에 따라 신뢰를 차등 검증하는 제로트러스트 모델로 옮겨가는 첫 국가 단위 정책입니다.

## N²SF의 구조

N²SF는 공공 업무 정보를 세 등급으로 나누고 등급별로 다른 보안통제를 적용합니다.

| 등급 | 영문 | 대상 | 통제 방향 |
|---|---|---|---|
| 기밀 | C (Classified) | 국방, 안보 등 국가 핵심 정보 | 물리 망분리 유지, 강한 통제 |
| 민감 | S (Sensitive) | 내부 업무 정보 | 논리 분리 허용, SW 기반 통제 |
| 공개 | O (Open) | 대외 공개 가능 정보 | 논리 분리 허용, 인터넷 활용 |

출처: [ZDNet Korea](https://zdnet.co.kr/view/?no=20250909182304)

가장 높은 기밀(C) 등급에만 물리 망분리가 남고, 민감(S)과 공개(O) 등급에는 논리 분리와 소프트웨어 기반 보안 기술이 허용됩니다. 보안통제 항목은 초안의 약 **170여 개에서 정식판 약 260여 개로 확대**되었습니다([ZDNet Korea](https://zdnet.co.kr/view/?no=20250909182304)).

## 추진 일정

| 시점 | 사건 | 출처 |
|---|---|---|
| 2023-07 | 제로트러스트 가이드라인 1.0 (과기정통부) | [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=161767) |
| 2024-09-11 | 국정원 MLS 전환 로드맵 발표 (CSK 2024) | [소만사](https://www.somansa.com/security-report/privacy-report/20240911_mls/) |
| 2024-12-03 | 제로트러스트 가이드라인 2.0 발표 | [디지털타임스](https://www.dt.co.kr/contents.html?article_no=2024120302109931092007) |
| 2024-12 | 정책명 MLS에서 N²SF로 확정 | [전자신문](https://www.etnews.com/20241211000205) |
| 2025-01-23 | N²SF 가이드라인 초안 공개 | [SEK 2025 N²SF](https://www.sek.co.kr/2025/n2sf) |
| 2025-09-09 | N²SF 가이드라인 1.0 정식판 공개 (CSK 2025) | [ZDNet Korea](https://zdnet.co.kr/view/?no=20250909182304) |

## 망분리 완화로 가능해지는 업무

N²SF 전환 과제에는 망분리 때문에 막혀 있던 업무 방식이 포함됩니다.

- **업무망 생성형 AI 활용**: 업무 단말에서 ChatGPT 등 생성형 AI 접속 허용
- **인터넷 단말 업무 SW 설치**: 문서편집기, 협업 SW, 클라우드 도구 설치
- **범정부 초거대 AI와 공공데이터 융합**

출처: [소만사 정리](https://www.somansa.com/security-report/privacy-report/20240911_mls/)

망분리 환경이라 LLM과 AI 코파일럿을 도입하지 못한다는 제약이 정책 수준에서 완화됩니다. 이는 [AI를 지키는 일](/ai/defend-ai/) 영역의 도입 전제가 바뀌는 변화입니다.

## 민간 트랙: 제로트러스트 가이드라인 2.0

공공의 N²SF와 별개로, 과기정통부와 KISA는 민간기업을 위한 **제로트러스트 가이드라인 2.0**을 2024년 12월 3일 발표했습니다([데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=161767)).

| 항목 | 1.0 | 2.0 |
|---|---|---|
| 성숙도 단계 | 3단계 | **4단계** (초기 추가) |
| 기업망 핵심 기능 | 20개 | **27개** |
| 세부 보안역량 | — | **52개** (6대 핵심요소 + 2대 교차기능) |
| 도입 절차 | — | **5단계** (준비, 계획, 구현, 운영, 피드백 및 개선) |

이 4단계 성숙도 모델은 [CISA ZTMM v2](/framework/cisa-ztmm-v2/)의 4단계(Traditional, Initial, Advanced, Optimal)와 같은 구조를 따릅니다.

## 전환기의 우려

정책 전환을 두고 업계에서 제기된 우려도 공개되어 있습니다.

- **공공 클라우드 시장 혼선**: MLS 적용 발표 직후 공공 클라우드(CSAP) 시장 위축 우려가 제기되었습니다([컴월드](https://www.comworld.co.kr/news/articleView.html?idxno=51283), [아이티데일리](http://www.itdaily.kr/news/articleView.html?idxno=226904)).
- **적용 현실성**: 공공기관의 망분리 적용률이 11% 수준이라는 지적과 함께 현실성 있는 N²SF 적용이 필요하다는 논의가 있습니다([데이터넷](https://www.datanet.co.kr/news/articleView.html?idxno=201437)).

## 도입 검토 시 적용

- 솔루션 리뷰의 한국 시장 노트 망분리 항목에서 해당 솔루션이 N²SF의 어느 등급(C/S/O)에 적용 가능한지 판단하는 근거가 됩니다.
- [Networks 영역](/pillars/networks/)의 ZTNA, SASE 솔루션은 N²SF의 논리 분리 요건과 맞물립니다.
- 망분리 완화는 [AI를 지키는 일](/ai/defend-ai/) 영역의 AI 도입 전제를 바꿉니다.

## 관련 페이지

- [CSAP와 N²SF](/korea/regulation/csap-n2sf/)
- [NIST SP 800-207](/framework/nist-800-207/)
- [AI 보안 표준 지형](/framework/ai-security-standards/)

## 출처

- [KISA 제로트러스트 가이드라인 2.0 (원문 무료 다운로드)](https://www.kisa.or.kr/2060204/form?postSeq=18&page=1)
- [ZDNet Korea — N²SF 정식 지침, 통제항목 170에서 260여 개로](https://zdnet.co.kr/view/?no=20250909182304)
- [전자신문 — 망분리 개선 정책, MLS에서 N²SF로](https://www.etnews.com/20241211000205)
- [데일리시큐 — 제로트러스트 가이드라인 2.0 발표](https://www.dailysecu.com/news/articleView.html?idxno=161767)
- [소만사 — 국정원 공공분야 다층보안체계 전환 로드맵](https://www.somansa.com/security-report/privacy-report/20240911_mls/)
- [바이라인네트워크 — N²SF 1.0 정식판, 제로트러스트와 오버레이, CDS 반영](https://byline.network/2025/09/30-445/)
- [데이터넷 — 공공기관 11%만 망분리, 현실성 있는 N²SF 적용](https://www.datanet.co.kr/news/articleView.html?idxno=201437)

## 면책

본 페이지는 공개 자료를 근거로 합니다. 정책 전환이 진행 중인 영역이며, 가이드라인 세부 내용은 후속 개정으로 바뀔 수 있습니다. 권위 있는 해석이 필요하면 KISA와 국정원의 원문 가이드라인을 확인합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-08-30
