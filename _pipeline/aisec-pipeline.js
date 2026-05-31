export const meta = {
  name: 'aisec-intel-pipeline',
  description: 'AI 보안 동향 수집 → Hugo 콘텐츠 초안 → POC 설계 → 검토·PR (main 직접 push 없음)',
  whenToUse: '주 1회 스케줄 또는 온디맨드로 AISec Atlas 인텔리전스 수집·발행준비를 자동화할 때',
  phases: [
    { title: 'Collect', detail: 'sources.yaml 순회 · dedup · 출처검증' },
    { title: 'Write', detail: '항목별 Hugo 초안(drafts/)' },
    { title: 'POC', detail: 'POC후보별 설계 5종 세트' },
    { title: 'Review & PR', detail: 'loop-until-dry 검토 → content/ → intel 브랜치 PR' },
  ],
}

// 날짜는 워크플로 샌드박스에서 생성 불가(Date.now 금지) → 트리거가 args 로 주입한다.
//   Workflow({ scriptPath: '.../aisec-pipeline.js', args: { date: 'YYYY-MM-DD', week: 'YYYY-WW' } })
const today = (args && args.date) || null
const week = (args && args.week) || null
if (!today || !week) {
  log('⚠ args.date / args.week 미지정. 트리거에서 오늘 날짜(YYYY-MM-DD)와 주차(YYYY-WW)를 넘겨야 정확한 날짜·브랜치가 찍힌다.')
}

const COLLECT_SCHEMA = {
  type: 'object',
  properties: {
    collected_date: { type: 'string' },
    skipped_duplicates: { type: 'number' },
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' }, title: { type: 'string' }, url: { type: 'string' },
          source: { type: 'string' }, axis: { type: 'string', enum: ['augment', 'defend'] },
          type: { type: 'string' }, poc_candidate: { type: 'boolean' },
          dest_path: { type: 'string' }, primary_source: { type: 'boolean' },
          key_points: { type: 'array', items: { type: 'string' } },
          citations: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' },
        },
        required: ['id', 'title', 'url', 'axis', 'type', 'poc_candidate', 'dest_path'],
      },
    },
  },
  required: ['items'],
}

const DRAFT_SCHEMA = {
  type: 'object',
  properties: {
    draft_path: { type: 'string' }, final_dest: { type: 'string' }, title: { type: 'string' },
    axis: { type: 'string' }, is_update: { type: 'boolean' }, summary: { type: 'string' },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['draft_path', 'final_dest', 'title'],
}

const POC_SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' }, poc_dir: { type: 'string' },
    files: { type: 'array', items: { type: 'string' } },
    item_count: { type: 'number' }, domains: { type: 'array', items: { type: 'string' } },
    xlsx_built: { type: 'boolean' }, notes: { type: 'string' },
  },
  required: ['slug', 'poc_dir', 'xlsx_built'],
}

const PR_SCHEMA = {
  type: 'object',
  properties: {
    branch: { type: 'string' }, pr_url: { type: 'string' },
    published_files: { type: 'array', items: { type: 'string' } },
    poc_packages: { type: 'array', items: { type: 'string' } },
    review_cycles: { type: 'number' },
    open_questions: { type: 'array', items: { type: 'string' } },
    hugo_built: { type: 'boolean' },
  },
  required: ['branch'],
}

// ── 1. 수집 ──
phase('Collect')
const collected = await agent(
  `오늘 날짜는 ${today || '(미지정 — sources.yaml meta 기준 최근만)'}.\n` +
  `_pipeline/sources.yaml 를 순회해 신규 AI 보안 항목(augment/defend)을 수집하고, ledger.csv·content/ 와 대조해 dedup 한 뒤, ` +
  `1차출처·링크 생존을 검증하라. 신규 항목을 ledger.csv 에 append(status=new)하고 구조화 JSON 으로 반환하라.`,
  { agentType: 'aisec-collector', label: 'collect', phase: 'Collect', schema: COLLECT_SCHEMA }
)
const items = (collected && collected.items) || []
log(`신규 ${items.length}건 · 중복제외 ${(collected && collected.skipped_duplicates) || 0}건`)
if (!items.length) {
  log('신규 항목 없음 → 종료')
  return { status: 'no-new-items', date: today }
}

// ── 2. 작성 (항목별 독립) ──
phase('Write')
const drafts = (await parallel(items.map(it => () =>
  agent(
    `오늘 ${today}. 다음 수집 항목을 aisec-atlas 사이트 문체로 Hugo 초안화해 _pipeline/drafts/ 에 저장하라.\n` +
    `항목: ${JSON.stringify(it)}`,
    { agentType: 'aisec-writer', label: `write:${it.id}`, phase: 'Write', schema: DRAFT_SCHEMA }
  )
))).filter(Boolean)
log(`초안 ${drafts.length}건 작성`)

// ── 3. POC 설계 (POC후보만) ──
phase('POC')
const pocCandidates = items.filter(i => i.poc_candidate)
const pocs = (await parallel(pocCandidates.map(it => () =>
  agent(
    `다음 AI 보안 솔루션의 POC 설계 5종 세트를 _pipeline/poc/<slug>/ 에 생성하고 build_eval_xlsx.py 로 xlsx 빌드까지 하라. ` +
    `점수 칸은 공란.\n솔루션: ${JSON.stringify(it)}`,
    { agentType: 'aisec-poc-designer', label: `poc:${it.id}`, phase: 'POC', schema: POC_SCHEMA }
  )
))).filter(Boolean)
log(`POC 패키지 ${pocs.length}건 (후보 ${pocCandidates.length})`)

// ── 4. 검토 + PR (발행 아님, 사람 merge) ──
phase('Review & PR')
const pr = await agent(
  `오늘 ${today}, 주차 ${week}. _pipeline/self-review.md 기준으로 drafts/ 와 poc/ 산출물을 loop-until-dry 검토(2회 연속 결함 0건)한 뒤, ` +
  `통과분을 content/ 로 옮기고 intel/${week} 브랜치에 커밋, gh 로 PR 을 생성하라. main 에 직접 push 절대 금지. ` +
  `PR 본문에 변경요약·검토결과·사람 사인오프 포인트를 포함하라.\n` +
  `drafts=${JSON.stringify(drafts.map(d => d.draft_path))}\npocs=${JSON.stringify(pocs.map(p => p.poc_dir))}`,
  { agentType: 'aisec-reviewer', label: 'review+pr', phase: 'Review & PR', schema: PR_SCHEMA }
)

log(`완료 — 브랜치 ${pr && pr.branch}, PR ${(pr && pr.pr_url) || '(생성 결과 확인 필요)'}`)
return { date: today, week, new_items: items.length, drafts: drafts.length, pocs: pocs.length, pr }
