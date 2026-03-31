# Portfolio 수정 작업 계획서

> research.md 주석 기반 | 작성일: 2026-03-20

---

## 작업 목록 요약

| # | 항목 | 파일 | 작업 유형 |
|---|---|---|---|
| 1 | `src/sections/` 5개 파일 삭제 | 파일 삭제 | ✅ 완료 |
| 2 | `tailwind.config.js` 삭제 | — | ✅ 이미 없음 |
| 3 | `index.html` 미완성 사항 보고 | `index.html` | ✅ 완료 |
| 4 | Hero 타이틀 줄바꿈 수정 | `src/components/Hero.tsx` | ✅ 완료 |
| 5 | About 전공 과목 + 타임라인 추가 | `src/components/About.tsx` | ✅ 완료 |
| 6 | Skills 누락 스킬 검토 및 추가 | `src/data/skillGroups.ts` | ✅ 완료 |

---

## 작업 1 — `src/sections/` 폴더 삭제

### 현황
`src/sections/` 폴더에 5개 파일이 존재하지만 `App.tsx`에서 단 한 번도 import되지 않는 **완전한 데드코드**.

```
src/sections/
├── About.tsx
├── Contact.tsx
├── Hero.tsx       ← 11줄 플레이스홀더 수준
├── Projects.tsx
└── Skills.tsx
```

### 삭제 명령
```bash
rm -rf /Users/hwani/Portfolio/src/sections
```

---

## 작업 2 — `tailwind.config.js` 삭제

### 현황
✅ **이미 존재하지 않음.** Tailwind v4 설정이 이미 올바르게 구성되어 있음.
- `vite.config.ts`에 `tailwindcss()` 플러그인 추가
- `src/index.css`에 `@import "tailwindcss"` 한 줄

**추가 조치 없음.**

---

## 작업 3 — `index.html` 미완성 사항 상세 보고

### 현재 코드 (`index.html` 전체)
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 미완성 항목 4가지

#### ① `lang="en"` — 언어 설정 오류
```html
<!-- 현재 -->
<html lang="en">

<!-- 수정 필요 -->
<html lang="ko">
```
한국어 포트폴리오임에도 `lang="en"` 으로 설정되어 있음.
스크린 리더, 검색엔진, 브라우저 번역 제안 기능이 잘못 동작함.

#### ② `<title>portfolio</title>` — 탭/북마크 제목 미완성
```html
<!-- 현재 -->
<title>portfolio</title>

<!-- 수정 예시 -->
<title>오승환 | Frontend Developer</title>
```
브라우저 탭에 "portfolio" 소문자만 표시됨. 이름과 직군을 명시해야 함.

#### ③ `href="/vite.svg"` — Vite 기본 favicon 사용 중
```html
<!-- 현재 -->
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```
Vite 초기 생성 기본값 그대로 사용 중. 개인 브랜드 아이콘(이니셜 'OH' 또는 커스텀 SVG)으로 교체 필요.
`public/` 폴더에 `favicon.svg` 또는 `favicon.ico` 파일 추가 후 경로 변경.

#### ④ SEO/SNS 메타태그 전무
```html
<!-- 추가 권장 -->
<meta name="description" content="오승환의 프론트엔드 개발자 포트폴리오입니다." />
<meta property="og:title" content="오승환 | Frontend Developer" />
<meta property="og:description" content="React, TypeScript 기반 프론트엔드 개발자입니다." />
<meta property="og:type" content="website" />
```
SNS 공유 시 미리보기, 검색엔진 인덱싱에 영향. 현재 아무 메타 정보도 없음.

### 수정할 최종 코드
```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="오승환의 프론트엔드 개발자 포트폴리오입니다. React, TypeScript 기반으로 사용자 경험을 고민하는 개발자입니다." />
    <title>오승환 | Frontend Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
> **note**: favicon은 `/public/favicon.svg` 파일 별도 제작 필요. 준비 안 됐으면 title/lang만 먼저 수정 가능.

---

## 작업 4 — Hero 타이틀 줄바꿈 수정

### 현황 분석

**현재 코드** (`Hero.tsx` 19~23줄):
```tsx
<h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 transition duration-500 sm:text-5xl md:text-6xl">
    사용자의 경험을
    <br />
    더 자연스럽게 만드는 개발자 오승환입니다.
</h1>
```

**문제 — 근본 원인 분석**:

단순히 `<br />`을 추가해도 "더 자연스럽게 만드는 개발자" 자체가 컨테이너 너비를 초과하면 그 안에서 또 자동 줄바꿈이 발생함.

| 브레이크포인트 | font-size | 좌측 컬럼 실제 너비 | "더 자연스럽게 만드는 개발자" 너비(13자) |
|---|---|---|---|
| 모바일 (기본) | text-3xl (30px) | ~320~390px | ~390px (초과 가능) |
| sm (640px~) | text-5xl (48px) | ~600px | ~624px (초과 가능) |
| md (768px~) | text-6xl (60px) | ~662px | ~780px (초과) |

→ `md:text-6xl`에서 "더 자연스럽게 만드는 개발자"가 662px 컬럼에 들어가려면 60px × 13자 ≈ 780px가 필요해 **반드시 줄바꿈 발생**.

**원하는 결과**: 어느 화면에서나 "더 자연스럽게 만드는 개발자" 뒤에서만 줄바꿈

### 수정 방법

**폰트 사이즈 단계 조정 + `<br />` 병행 사용**

`md:text-6xl` → `md:text-5xl`로 낮추고, `lg:text-6xl`에서만 6xl 적용.
"오승환입니다." 앞에는 `<br />`로 의도적 줄바꿈 유지.

```
브레이크포인트별 font-size 변경:
text-3xl → sm:text-4xl → md:text-5xl → lg:text-6xl
```

| 브레이크포인트 | 변경 후 font-size | 컬럼 너비 | 13자 너비 | 결과 |
|---|---|---|---|---|
| 모바일 | text-3xl (30px) | ~350px | ~390px | ⚠️ 여전히 빠듯 |
| sm (640px~) | text-4xl (36px) | ~600px | ~468px | ✅ 여유 있음 |
| md (768px~) | text-5xl (48px) | ~662px | ~624px | ✅ 한 줄 가능 |
| lg (1024px~) | text-6xl (60px) | ~850px | ~780px | ✅ 한 줄 가능 |

> 모바일 text-3xl은 여전히 빠듯하므로 `<br />` + `whitespace-nowrap`으로 보완:

```tsx
<h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 transition duration-500 sm:text-4xl md:text-5xl lg:text-6xl">
    사용자의 경험을
    <br />
    <span className="whitespace-nowrap">더 자연스럽게 만드는 개발자</span>
    <br />
    오승환입니다.
</h1>
```

- `whitespace-nowrap`으로 "더 자연스럽게 만드는 개발자"를 강제로 한 줄 처리 → 컨테이너를 넘어도 줄바꿈 안 함
- `<br />`로 "오승환입니다."는 항상 새 줄 시작
- 폰트 사이즈 조정으로 모바일 이상에서 컨테이너 overflow 최소화

### 수정 대상
- **파일**: `src/components/Hero.tsx`
- **위치**: 19~23줄 `<h1>` className 및 내부 텍스트

---

## 작업 5 — About 전공 과목 + 타임라인 추가

### 현황

**Major 항목** (현재, `About.tsx` 57~60줄):
```tsx
<div className="border-b border-zinc-200 pb-3">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Major</p>
    <p className="mt-2 text-sm font-medium text-zinc-900">인공지능융합학과</p>
</div>
```

**Double Major 항목** (현재, `About.tsx` 62~65줄):
```tsx
<div className="border-b border-zinc-200 pb-3 sm:col-span-2">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Double Major</p>
    <p className="mt-2 text-sm font-medium text-zinc-900">스마트금융SW융합전공</p>
</div>
```

**타임라인** (현재, `About.tsx` 79~115줄): 4개 항목 존재
1. 2020.04~10: Java 스터디 & 안드로이드 앱 개발
2. 2021.10.30: Start-App 캠프 수상
3. 2021.11.13: Ticket to the Dream 아이디어톤
4. 2022.09.03: SW실무아카데미 수상

### 수정 내용

#### 5-1. Major 항목에 수강 과목 추가
```tsx
<div className="border-b border-zinc-200 pb-3">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Major</p>
    <p className="mt-2 text-sm font-medium text-zinc-900">인공지능융합학과</p>
    <p className="mt-1.5 text-xs text-zinc-400 leading-5">
        인공지능 기초 · Java · 자료구조 · 운영체제 · 데이터베이스 시스템 이론 · 임베디드소프트웨어
    </p>
</div>
```

#### 5-2. Double Major 항목에 수강 과목 추가
```tsx
<div className="border-b border-zinc-200 pb-3 sm:col-span-2">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Double Major</p>
    <p className="mt-2 text-sm font-medium text-zinc-900">스마트금융SW융합전공</p>
    <p className="mt-1.5 text-xs text-zinc-400 leading-5">
        미시 경제학 · 금융기관론 · 주택금융론
    </p>
</div>
```

#### 5-3. 타임라인 항목 2개 추가

기존 마지막 항목(2022.09.03) 뒤에 시간 순서대로 추가.
dot 값은 5-4에서 수정한 `sm:-left-[37px]` 적용:

**추가 항목 1** — 2025.06~12 멀티캠퍼스 아카데미:
```tsx
<div className="relative">
    <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2025.06 — 2025.12</p>
    <div className="mt-1.5 flex flex-wrap items-center gap-2">
        <h4 className="text-sm font-semibold text-zinc-900">[현대이지웰] Java 풀스택 개발자 아카데미 6회차</h4>
        <span className="rounded-full border border-zinc-300 px-2.5 py-0.5 text-xs font-medium text-zinc-500">참여</span>
    </div>
    <p className="mt-1 text-sm text-zinc-500">멀티캠퍼스 주관 Java 기반 풀스택 개발 교육 과정 수료</p>
</div>
```

**추가 항목 2** — 2025.10~12 Re:view 프로젝트:
```tsx
<div className="relative">
    <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2025.10 — 2025.12</p>
    <div className="mt-1.5 flex flex-wrap items-center gap-2">
        <h4 className="text-sm font-semibold text-zinc-900">화장품 쇼핑몰 Re:View 개발 프로젝트</h4>
        <span className="rounded-full border border-zinc-300 px-2.5 py-0.5 text-xs font-medium text-zinc-500">팀 프로젝트</span>
    </div>
    <p className="mt-1 text-sm text-zinc-500">피부 타입 기반 맞춤 화장품 추천 리뷰 쇼핑몰 6인 팀 개발</p>
</div>
```

#### 5-4. 타임라인 dot 위치 버그 수정 (데스크탑)

**버그**: 데스크탑(sm+ 이상)에서 타임라인 좌측 border 라인과 dot(원)이 겹치지 않고 dot이 우측으로 밀려남. 모바일에서는 정상.

**원인 분석**:

타임라인 컨테이너: `border-l border-zinc-200 pl-5 sm:pl-8`
- 모바일: `pl-5` = 20px → 내용 시작 x=20px, border 위치 x=0px
- sm+: `sm:pl-8` = 32px → 내용 시작 x=32px, border 위치 x=0px

dot: `w-2.5` = 10px (반지름 5px). border에 중심을 맞추려면 dot 왼쪽 엣지 = **-5px**

```
모바일:  padding(20) - left(25) = -5px ✅  중심 = 0px (border 위치와 일치)
sm+ :   padding(32) - left(33) = -1px ❌  중심 = 4px (border에서 4px 우측 이탈)
수정후:  padding(32) - left(37) = -5px ✅  중심 = 0px (border 위치와 일치)
```

**수정 내용**: 기존 4개 항목 모두 `sm:-left-[33px]` → `sm:-left-[37px]` 로 변경

```tsx
// 변경 전 (4개 항목 모두)
<span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[33px]"></span>

// 변경 후 (4개 항목 모두)
<span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
```

**수정 대상 줄**: `About.tsx` 81, 88, 98, 108줄 (기존 4개 항목), 신규 추가 2개 항목도 처음부터 `sm:-left-[37px]` 적용

### 수정 대상
- **파일**: `src/components/About.tsx`
- **위치 1**: 57~65줄 (Major / Double Major 항목)
- **위치 2**: 81, 88, 98, 108줄 (dot `sm:-left-[33px]` → `sm:-left-[37px]` 수정)
- **위치 3**: 115줄 닫는 `</div>` 직전 (타임라인 마지막에 2개 append)

---

## 작업 6 — Skills 스킬 추가 + 로고 이미지 도입 (Simple Icons CDN)

### 추가할 스킬 (확정)

- **Frontend**: `Axios`, `CSS Modules` 추가
- **Tools**: `Vite` 추가

### 로고 이미지 도입 방향: Simple Icons CDN (확정)

- URL 패턴: `https://cdn.simpleicons.org/{slug}`
- 로컬 파일 불필요, 추가 패키지 불필요
- `CSS Modules`, `REST API`는 Simple Icons에 없음 → icon 없이 텍스트만 표시

포트폴리오 특성상 항상 온라인 접근 환경이므로 CDN 의존도 문제 없음.

**데이터 구조 변경**

`skillGroups.ts`의 `items: string[]` → `items: { name: string; icon?: string }[]`

```ts
// 변경 전
items: ['React', 'TypeScript', ...]

// 변경 후
items: [
  { name: 'React',      icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'CSS Modules' },           // icon 없음 → 텍스트만
  { name: 'REST API' },              // icon 없음 → 텍스트만
]
```

**`SkillGroupSection.tsx` 변경 방향**

`group.items`의 타입이 바뀌므로 props 타입과 렌더링 변경:

```tsx
// 변경 전
{ group: { title: string; items: string[] } }

// 변경 후
{ group: { title: string; items: { name: string; icon?: string }[] } }
```

뱃지 내부 렌더링:
```tsx
{item.icon && (
  <img
    src={`https://cdn.simpleicons.org/${item.icon}`}
    alt={item.name}
    className="h-4 w-4"
  />
)}
<span>{item.name}</span>
```

**영향 범위 (수정 파일 3개)**

| 파일 | 변경 내용 |
|---|---|
| `src/data/skillGroups.ts` | items 타입을 `{ name, icon? }[]`로 변경, 아이콘 슬러그 추가 |
| `src/components/SkillGroupSection.tsx` | props 타입 및 렌더링 변경 |
| `src/components/Skills.tsx` | 변경 없음 (skillGroups 타입만 따라감) |

**Simple Icons 슬러그 매핑표**

| 스킬명 | 슬러그 | 제공 여부 |
|---|---|---|
| React | `react` | ✅ |
| TypeScript | `typescript` | ✅ |
| JavaScript | `javascript` | ✅ |
| HTML | `html5` | ✅ |
| CSS | `css3` | ✅ |
| Tailwind CSS | `tailwindcss` | ✅ |
| Axios | `axios` | ✅ |
| CSS Modules | — | ❌ 텍스트만 |
| Java | `java` | ✅ |
| Spring Boot | `springboot` | ✅ |
| Python | `python` | ✅ |
| REST API | — | ❌ 텍스트만 |
| Git | `git` | ✅ |
| GitHub | `github` | ✅ |
| Figma | `figma` | ✅ |
| Notion | `notion` | ✅ |
| Vite | `vite` | ✅ |

---

## 실행 순서

```
✅ 1. src/sections/ 삭제
   → rm -rf src/sections/

✅ 2. index.html 수정
   → lang="ko", title "오승환 | Frontend Developer", description 메타태그 추가

✅ 3. Hero.tsx 줄바꿈 수정
   → className: sm:text-4xl md:text-5xl lg:text-6xl 로 조정
   → "더 자연스럽게 만드는 개발자"를 <span className="whitespace-nowrap">로 감싸기
   → "오승환입니다." 앞에 <br /> 추가

✅ 4. About.tsx 전공 과목 추가
   → Major 아래 과목 6개 텍스트 추가
   → Double Major 아래 과목 3개 텍스트 추가

✅ 5. About.tsx 타임라인 dot 버그 수정
   → 기존 4개 항목 sm:-left-[33px] → sm:-left-[37px] 일괄 변경

✅ 6. About.tsx 타임라인 추가
   → 2025.06~12 멀티캠퍼스 아카데미 항목 추가 (sm:-left-[37px] 적용)
   → 2025.10~12 Re:view 프로젝트 항목 추가 (sm:-left-[37px] 적용)

✅ 7. skillGroups.ts + SkillGroupSection.tsx 수정
   7-a. skillGroups.ts: items 구조를 { name, icon? }[] 로 변경, Axios/CSS Modules/Vite 추가
   7-b. SkillGroupSection.tsx: props 타입 변경, 아이콘 img 렌더링 추가
```

---

*이 계획서는 research.md 주석 분석 및 실제 소스코드 기반으로 작성되었습니다.*

---

## 소개글 개선 작업 (coverletter.md 기반)

> coverletter.md 분석 및 주석 확정 사항 기반 | 추가일: 2026-03-20

### 수정 파일 요약

| # | 파일 | 수정 위치 | 내용 |
|---|---|---|---|
| A | `src/components/Hero.tsx` | 27~31줄 (본문 `<p>`) | 본문 1·2단락 전면 교체 |
| B | `src/components/About.tsx` | 12~16줄 (H2 타이틀) | 타이틀 변경 |
| C | `src/components/About.tsx` | 74~81줄 (자기소개 `<p>`) | 본문 1·2단락 전면 교체 |

---

### 작업 A — `Hero.tsx` 본문 교체

**수정 위치**: `src/components/Hero.tsx` 26~31줄

**현재 코드**:
```tsx
<p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-lg sm:leading-8">
    프론트엔드 개발자로서 작은 디테일이 사용자 경험을 만든다고 믿습니다. 화면의 섬세한 요소와 직관적인 상호작용을 통해 사람들이 자연스럽게 서비스를 이용할 수 있도록 고민하며 개발합니다.
    <br />
    <br />
    사용자의 특별한 경험을 기술로 연결하고 더 나은 서비스로 이어질 수 있도록 문제를 고민하고 해결합니다. 사용자 피드백과 테스트를 통해 발전하는 서비스를 만드는 것이 저의 목표입니다.
</p>
```

**문제 요약**:
- "고민" 2회 반복
- "저의 목표입니다" — Hero 첫인상에서 목표를 선언하면 아직 못 이룬 것처럼 인상
- 두 단락 모두 "사용자 경험"으로 수렴 → 메시지 심화 없이 반복

**변경할 코드**:
```tsx
<p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-lg sm:leading-8">
    작은 인터랙션 하나가 서비스에 대한 신뢰를 만든다고 생각합니다. 화면의 반응 속도, 버튼의 피드백, 상태 전환의 자연스러움 — 사용자가 의식하지 못할 만큼 자연스러운 경험을 만드는 것이 저의 개발 기준입니다.
    <br />
    <br />
    React로 인터페이스를 구현하고, Spring Boot 기반 REST API와 연동하며 서비스 전체 흐름을 함께 설계해왔습니다. 팀 프로젝트와 개인 프로젝트를 통해 기획부터 배포까지 직접 경험하며 개발자로서의 관점을 넓혀왔습니다.
</p>
```

**변경 포인트**:
- 1단락: "사용자 경험" 반복 제거 → 구체적인 인터랙션(반응 속도, 피드백, 상태 전환)으로 대체 → 개발 철학을 더 구체적으로 표현
- 2단락: "고민하고 해결합니다" / "목표입니다" 제거 → "설계해왔습니다" / "넓혀왔습니다" 능동형으로 교체 → 기술 스택(React, TypeScript, Spring Boot, REST API)을 자연스럽게 포함해 Hero 하단 뱃지와 연결

---

### 작업 B — `About.tsx` H2 타이틀 교체

**수정 위치**: `src/components/About.tsx` 12~16줄

**현재 코드**:
```tsx
<h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
    배우고 만들며 성장하는
    <br />
    프론트엔드 개발자
</h2>
```

**문제 요약**:
- "배우고 만들며 성장하는" — 모든 신입 개발자에게 붙일 수 있는 generic 표현
- Hero 타이틀과 차별화 없이 단순히 유사한 자기소개 반복

**확정된 타이틀**: 예시 G — `"UI 너머 사용자 여정 전체를 설계하는 프론트엔드 개발자"`
- Hero의 "사용자 경험"과 연결되면서 "설계"라는 능동적 역할 추가
- 두 줄로 분리해 현재 레이아웃 유지

**변경할 코드**:
```tsx
<h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
    UI 너머 사용자 여정 전체를
    <br />
    설계하는 프론트엔드 개발자
</h2>
```

---

### 작업 C — `About.tsx` 자기소개 본문 교체

**수정 위치**: `src/components/About.tsx` 74~81줄

**현재 코드**:
```tsx
<div className="space-y-6 border-l border-zinc-200 pl-5 text-sm leading-7 text-zinc-600 sm:pl-8 sm:text-base sm:leading-8">
    <p>
        사용자 경험을 중심으로 문제를 해결하는 프론트엔드 개발자입니다. React와 TypeScript, JavaScript 기반으로 인터페이스를 구현하며 REST API 연동과 상태 관리를 통해 실제 서비스 흐름을 이해하는 개발 경험을 쌓아왔습니다.
    </p>
    <p>
        단순히 화면을 만드는 것에 그치지 않고, 사용자가 어떤 흐름으로 서비스를 이용하는지 고민하며 더 직관적인 UI와 안정적인 구조를 만드는 것을 중요하게 생각합니다. 이 포트폴리오는 제가 경험한 프로젝트와 기술, 그리고 앞으로 어떤 개발자로 성장하고 싶은지를 보여주기 위해 구성했습니다.
    </p>
</div>
```

**문제 요약**:
- 1단락 첫 문장 "사용자 경험을 중심으로 문제를 해결하는 프론트엔드 개발자" — Hero 타이틀과 동일 메시지 반복
- "이해하는 개발 경험을 쌓아왔습니다" — 자신감 없는 표현
- 2단락 마지막 문장 "이 포트폴리오는~" — 포트폴리오 안에서 포트폴리오를 설명하는 메타 서술
- "고민하며" — 소극적 반복

**변경할 코드**:
```tsx
<div className="space-y-6 border-l border-zinc-200 pl-5 text-sm leading-7 text-zinc-600 sm:pl-8 sm:text-base sm:leading-8">
    <p>
        인공지능융합학과에서 알고리즘과 데이터 기반 사고를 배우고, 멀티캠퍼스 풀스택 아카데미를 거쳐 Java부터 Spring Boot, React, TypeScript까지 실무 중심으로 익혔습니다. 팀 프로젝트와 개인 프로젝트를 통해 기획부터 배포까지 직접 경험하며 서비스 전체 흐름을 이해하는 개발자로 성장해왔습니다.
    </p>
    <p>
        단순히 화면을 만드는 것에 그치지 않고, 사용자가 불편함을 느끼지 않는 인터페이스를 만드는 것을 중요하게 생각합니다. 팀 안에서는 백엔드와 적극적으로 소통하며 서비스 흐름을 함께 설계하고, 작은 디테일도 놓치지 않는 프론트엔드 개발자로 성장하고 있습니다.
    </p>
</div>
```

**변경 포인트**:
- 1단락: Hero 반복 제거 → 인공지능융합학과 + 멀티캠퍼스 아카데미 → 기술 성장 흐름 서술 (스마트금융 내용 제외)
- 2단락: "고민하며" 삭제 → "중요하게 생각합니다"로 완결 / "이 포트폴리오는~" 삭제 → 팀 협업과 디테일 지향으로 마무리

---

### 소개글 수정 실행 순서

```
✅ A. Hero.tsx 본문 교체
   → 26~31줄 <p> 태그 내용 전면 교체

✅ B. About.tsx H2 타이틀 교체
   → 12~16줄 <h2> 내부 텍스트 변경

✅ C. About.tsx 자기소개 본문 교체
   → 74~81줄 두 <p> 태그 내용 전면 교체
```