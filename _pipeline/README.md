# AISec Atlas 인텔리전스 파이프라인

AI 보안 솔루션(augment+defend) 동향을 **주기적으로 자동 수집**하고, **POC 설계 산출물을 자동 생성**하며,
결과를 **aisec-atlas Hugo 사이트 콘텐츠로 발행준비(PR)** 하는 에이전트 파이프라인.

```
aisec-collector → aisec-writer(drafts/) → aisec-poc-designer(poc/) → aisec-reviewer(QA → content/ → intel 브랜치 → PR)
                                                                                            │
                                                                          사람이 PR merge ──┴──► Actions(hugo.yml) ──► Pages 배포
```

## 사람 vs AI 경계 (핵심)
> **에이전트가 초안·설계·QA·PR까지 끝내 두면, 사람은 검증하고 merge 버튼만 누른다.**

| 영역 | 누가 | 내용 |
|---|---|---|
| 수집·dedup·출처검증 | **AI** | sources.yaml 순회, ledger 대조, 1차출처 확인 |
| 콘텐츠 초안 | **AI** | 사이트 문체로 Hugo 마크다운(`drafts/`) |
| POC **설계** 산출물 | **AI** | guide/eval.csv+xlsx/details/checklist/summary 5종 |
| 비교 매트릭스·xlsx | **AI** | `build_eval_xlsx.py` |
| 자가검토(loop-until-dry) | **AI** | `self-review.md` 기준 2회 연속 결함 0건 |
| 브랜치·커밋·PR 생성 | **AI** | `intel/<주차>` 브랜치 + `gh pr create` |
| **PR 검토 → merge(발행)** | **사람** | main merge = 공개 배포 (H1) |
| **POC 실행·채점** | **사람** | 도구 설치·벤더 데모·0~3 점수·2인 교차검증 (H2) |
| 정확성·1차출처 사인오프 | **사람** | 공개 게시물 사실 책임 (H3) |
| 편집·전략·택소노미 | **사람** | 무엇이 중요한지 판단 (H4) |
| sources.yaml 큐레이션 | **사람** | 신뢰 피드 관리 (H5) |

## 구성 파일
| 경로 | 역할 |
|---|---|
| `sources.yaml` | 수집 소스 레지스트리(사람 큐레이션) |
| `ledger.csv` | dedup·상태 원장 |
| `self-review.md` | loop-until-dry QA 체크리스트 |
| `build_eval_xlsx.py` | `poc/<slug>/eval.csv` → `eval.xlsx` |
| `aisec-pipeline.js` | Workflow 오케스트레이터 |
| `drafts/` | AI 초안 스테이징(검토 전) |
| `poc/<slug>/` | POC 설계 5종 세트 |
| `../.claude/agents/aisec-*.md` | 에이전트 4종 정의(프로젝트 스코프, gitignore=로컬 전용) |

> **중요(프로젝트 통합)**: 에이전트 4종은 리포 안 `.claude/agents/` 에 있다(프로젝트 스코프).
> 따라서 이 파이프라인을 쓰려면 **Claude Code 를 `C:\Users\jinyj\Projects\aisec-atlas` 폴더에서 열어야** 에이전트가 인식된다.
> (전역 `~/.claude/agents/` 가 아니라 이 폴더 기준.) `.gitignore` 가 `.claude/` 를 제외하므로 공개 리포에는 올라가지 않는다.

## 실행

### 온디맨드(수동) 1회
Claude Code 에서:
```
Workflow 를 실행해줘: scriptPath = C:\Users\jinyj\Projects\aisec-atlas\_pipeline\aisec-pipeline.js,
args = { "date": "2026-05-30", "week": "2026-22" }
```
> 워크플로 샌드박스는 날짜를 만들 수 없으므로 **트리거가 오늘 날짜와 ISO 주차를 args 로 넘겨야** 한다.

### 개별 에이전트만 호출 (디버깅)
- 수집만: Agent(subagent_type=`aisec-collector`)
- 솔루션 1개 POC 설계: Agent(subagent_type=`aisec-poc-designer`, "솔루션 X POC 패키지 생성")

### 주기적 자동 실행 (권장: 주 1회)
`trigger.md` 의 프롬프트를 스케줄러에 등록한다. 두 가지 방식:
- **로컬(권장)**: Claude Code 스케줄 태스크. PC 가 켜져 있을 때 주 1회 실행, 완료 시 알림. 로컬 리포·myai 템플릿 접근 가능.
- **원격 routine**: 상시 자동이 필요하면. 단, `_pipeline/` 도구와 myai POC 템플릿이 원격에서 접근 가능해야 함(리포에 커밋 권장).

→ 스케줄 등록 명령은 `trigger.md` 참조. **수집 주기는 사람이 확정**(기본 권장: 매주 월 09:00).

## 발행 (사람)
1. 생성된 PR(`intel/<주차>`)을 GitHub 에서 검토 — 정확성·1차출처·문체.
2. 필요 시 수정 커밋.
3. **merge → main** → `.github/workflows/hugo.yml` 가 자동 빌드·Pages 배포.

## 안전장치
- 에이전트는 `main` 에 직접 push 하지 않는다. 항상 `intel/<주차>` 브랜치 + PR.
- POC 점수 칸은 항상 공란(사람 채점).
- 커밋 전 비밀·토큰 점검. 훅 우회 금지.
