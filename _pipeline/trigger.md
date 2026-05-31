# 스케줄 트리거 — AISec Atlas 주간 인텔리전스

스케줄러가 주기적으로 아래 **프롬프트**를 Claude Code 에 발사한다. Claude(메인 루프)는 오늘 날짜를
알고 있으므로 `date`/`week` 를 채워 Workflow 를 호출한다.

## 발사 프롬프트 (스케줄에 등록할 내용)
```
오늘 날짜(YYYY-MM-DD)와 ISO 주차(YYYY-WW)를 계산해서, 아래 워크플로를 실행해줘.
  Workflow scriptPath = C:\Users\jinyj\Projects\aisec-atlas\_pipeline\aisec-pipeline.js
  args = { "date": "<오늘>", "week": "<주차>" }
완료되면 생성된 PR 링크와 사람 검토가 필요한 open_questions 를 요약해서 알려줘.
신규 항목이 0건이면 그대로 보고하고 종료해.
```

## 등록 방법

### A. 로컬 스케줄 (권장) — PC 켜져 있을 때 주 1회
Claude Code 에서 `/schedule` 스킬로 위 프롬프트를 등록하거나, 다음처럼 요청:
```
매주 월요일 오전 9시에 _pipeline/trigger.md 의 발사 프롬프트를 실행하는 스케줄을 만들어줘.
```
> 수집 주기(매주/격주/매일)는 **사람이 확정**. 기본 권장: 매주 월 09:00.

### B. 온디맨드 — 지금 1회만
```
지금 _pipeline/trigger.md 의 발사 프롬프트를 한 번 실행해줘.
```

### C. 원격 routine — 상시 자동(PC 무관)
리포가 GitHub 에 있으므로 원격 에이전트가 clone→실행→PR 가능. `_pipeline/` 와 POC 템플릿이
원격에서 접근되도록 리포에 커밋되어 있어야 한다. `/schedule` 로 원격 routine 등록.

## 주의
- 워크플로 샌드박스는 날짜를 생성할 수 없다 → 트리거(메인 루프)가 반드시 `date`/`week` 를 args 로 주입.
- 파이프라인은 **PR 까지만**. 발행(merge)은 사람.
