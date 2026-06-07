---
title: "딥페이크와 AI 사기 방어"
description: "AI를 악용한 사칭과 사기. 딥페이크 영상, 음성 복제, KYC 우회 대응."
date: 2026-05-30
lastmod: 2026-05-30
tags: ["AI Security", "Deepfake", "Voice Clone", "Fraud", "KYC"]
ShowToc: true
---

딥페이크 영상과 음성 복제는 공격자가 AI를 무기로 쓰는 사칭 사기입니다. 임원 화상회의 사칭으로 2,500만 달러를 송금시킨 Arup 사례처럼, 사람의 눈과 귀로 진위를 판별하기 어려워졌습니다. 기술 탐지와 프로세스 통제를 함께 써야 막습니다.

## 위협의 부상

생성형 AI로 사람의 얼굴과 목소리를 실시간 위조하는 비용이 급락했습니다. 유럽의회 조사처는 2025년에 공유되는 딥페이크가 **800만 건**에 이를 것으로 전망했습니다. 2023년의 **50만 건**에서 급증한 수치입니다([SOCRadar](https://socradar.io/blog/top-10-ai-deepfake-detection-tools-2025/)).

AI 사기로 인한 손실은 2027년까지 **400억 달러**에 이를 것으로 전망됩니다([SOCRadar](https://socradar.io/blog/top-10-ai-deepfake-detection-tools-2025/)).

## 대표 사례: Arup 2,500만 달러 사기

영국 엔지니어링 기업 Arup의 홍콩 사무소 직원이 화상회의에서 **2,500만 달러**를 송금하는 사기를 당했습니다. 회의 참석자 중 본인을 제외한 CFO와 동료 전원이 AI로 생성된 딥페이크였습니다. 직원은 처음 이메일을 받았을 때 피싱을 의심했지만, 화상회의에서 진짜처럼 보이고 들리는 임원들을 보고 믿었습니다. 결국 5개 계좌로 15차례에 걸쳐 송금했습니다([CNN](https://www.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk), [Trend Micro](https://www.trendmicro.com/en_us/research/24/b/deepfake-video-calls.html)).

> **핵심.** 사람의 눈과 귀로 진위를 판별하는 시대는 끝났습니다. 화상과 음성은 더 이상 신뢰의 근거가 아닙니다.

## 공격 유형

| 유형 | 방식 | 표적 |
|---|---|---|
| 영상 딥페이크 | 화상회의에서 임원 사칭 | 재무, 송금 승인 |
| 음성 복제 | 전화로 경영진, 가족 사칭 | 보이스피싱, 긴급 송금 |
| KYC, 얼굴인식 우회 | 합성 얼굴로 신원 확인 통과 | 비대면 계좌 개설, 대출 |
| 비즈니스 이메일 침해(BEC) | 딥페이크로 이메일 사기 보강 | 기업 송금 |

홍콩 경찰 수사에서는 도난 신분증으로 90건의 대출 신청과 54건의 계좌 개설이 이뤄졌고, 최소 20회 AI 딥페이크로 얼굴인식을 통과한 정황이 확인됐습니다([Trend Micro](https://www.trendmicro.com/en_us/research/24/b/deepfake-video-calls.html)).

## 탐지 솔루션

| 솔루션 | 강점 |
|---|---|
| **Reality Defender** | API, SDK 기반 실시간 탐지. 영상, 이미지, 음성, 텍스트를 단일 점수 API로 처리 |
| **Sensity AI** | 98% 정확도 표방, 지난해 3만 5천 건 이상 악성 딥페이크 탐지. KYC 라이브니스와 얼굴 매칭 |
| **Pindrop** | 음성 딥페이크 전문. Pindrop Pulse가 통화의 합성, 복제 음성 탐지 |

출처: [Reality Defender](https://www.realitydefender.com/), [Sensity AI](https://sensity.ai/), [Pindrop 딥페이크 탐지](https://www.pindrop.com/solution/deepfake-detection/)

전통적 라이브니스 탐지만으로는 부족하며, 미세 움직임과 피부 질감, 메타데이터 불일치를 분석하는 2차 딥페이크 탐지 계층이 필요하다는 분석이 있습니다([Sensity AI](https://sensity.ai/)).

## 기술 탐지와 프로세스 통제

탐지 기술만으로는 부족합니다. 프로세스 통제를 함께 설계합니다.

1. **탐지 도입.** 화상회의와 고객센터, KYC 흐름에 딥페이크 탐지를 넣습니다.
2. **다중 채널 검증.** 송금 같은 고위험 요청은 별도 채널로 콜백 확인합니다.
3. **거래 승인 절차.** 단일 지시로 대규모 송금이 가능하지 않도록 분리 승인을 둡니다.
4. **교육.** 화상과 음성이 위조될 수 있음을 직원이 인지하게 합니다.

## 도입 고려사항

**보이스피싱.** 음성 복제 기술이 기존 보이스피싱을 고도화합니다. 가족과 경영진 사칭 전화에 대한 콜백 검증 절차가 중요합니다.

**금융권 비대면 실명확인.** 딥페이크 얼굴인식 우회는 비대면 계좌 개설과 대출의 KYC를 위협합니다. 라이브니스 위에 딥페이크 탐지 계층을 추가하는 방안을 검토합니다.

**자동화된 결정.** [개인정보보호법](/korea/regulation/pipa-zero-trust-data/)의 자동화된 결정 관점에서, 얼굴인식 기반 신원확인의 오탐과 대응 절차를 설계해야 합니다.

**송금 통제.** 금융권은 [전자금융감독규정](/korea/regulation/financial-mangbunri/)에 따라 고위험 거래의 다중 승인과 이상거래탐지(FDS)를 운영합니다. 딥페이크 사기 시나리오를 FDS 규칙에 반영하는 것이 권장됩니다.

## 관련 페이지

- [AI 사용 가시화](/ai/ai-usage-visibility/) — 직원의 AI 사용과 데이터 흐름 통제
- [금융 망분리](/korea/regulation/financial-mangbunri/) — 전자금융감독규정의 고위험 거래 통제와 FDS
- [AI 보안 지도](/ai/map/) — AI 보안 솔루션 전체 분포

## 출처

- [CNN — Finance worker pays out $25 million after deepfake CFO call](https://www.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk)
- [Trend Micro — Deepfake Video Calls Result in $25MM in Damages](https://www.trendmicro.com/en_us/research/24/b/deepfake-video-calls.html)
- [SOCRadar — Top AI Deepfake Detection Tools 2025](https://socradar.io/blog/top-10-ai-deepfake-detection-tools-2025/)
- [Reality Defender](https://www.realitydefender.com/)
- [Sensity AI](https://sensity.ai/)
- [Pindrop — Deepfake Detection](https://www.pindrop.com/solution/deepfake-detection/)

## 면책

본 정리는 공개 자료를 근거로 합니다. 피해 통계는 보도와 분석 기관 추정치이며 출처에 따라 다릅니다. 도입 전에 최신 공식 발표를 확인합니다.

---
최초 발행 2026-05-30, 최종 검토 2026-05-30, 다음 검토 2026-06-30
