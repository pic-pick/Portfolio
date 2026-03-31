# Portfolio 프로젝트 구조 상세 분석 보고서

> 분석일: 2026-03-20

---

## 1. 전체 디렉토리 구조

```
/Users/hwani/Portfolio/
├── .claude/settings.local.json
├── .git/
├── .gitignore
├── .idea/                          (IntelliJ IDEA 설정)
├── README.md
├── dist/                           (빌드 결과물 - Vercel 배포용)
│   ├── assets/
│   │   ├── index-Bvjdv4Yd.css
│   │   ├── index-joyNlZoh.js
│   │   └── (이미지 파일들)
│   ├── chartinsight-ai.pdf
│   └── index.html
├── eslint.config.js
├── index.html                      (진입점 HTML)
├── node_modules/
├── package.json
├── package-lock.json
├── public/
│   ├── chartinsight-ai.pdf         (프로젝트 문서 PDF)
│   └── vite.svg
├── src/
│   ├── App.tsx                     (루트 컴포넌트)
│   ├── main.tsx                    (앱 진입점)
│   ├── index.css                   (전역 CSS - Tailwind import 1줄)
│   ├── assets/                     (이미지 17개)
│   │   ├── chartimg.png
│   │   ├── daesulImg.png
│   │   ├── daesulsc1~3.png
│   │   ├── dangdangtrip.png
│   │   ├── dangdangtripSC.png
│   │   ├── mainprofileimg.jpg
│   │   ├── mainprofileimg2.jpg
│   │   ├── myplannerimg.png
│   │   ├── portfolio.png
│   │   ├── profileimg.jpg
│   │   ├── react.svg
│   │   ├── reviewimg.png
│   │   ├── reviewui.png
│   │   └── reviewuserflowchart.png
│   ├── components/                 ← 실제 사용되는 컴포넌트들
│   │   ├── About.tsx               (122줄)
│   │   ├── Contact.tsx             (39줄)
│   │   ├── Hero.tsx                (75줄)
│   │   ├── Navbar.tsx              (36줄)
│   │   ├── ProjectCard.tsx         (101줄)
│   │   ├── Projects.tsx            (677줄, 가장 큰 파일)
│   │   ├── SkillGroupSection.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   ├── projects.ts             (6개 프로젝트 데이터)
│   │   └── skillGroups.ts          (스킬 그룹 데이터)
│   ├── sections/                   ← 미사용 (초기 개발 잔여물)
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── types/
│       └── project.ts              (TypeScript 타입 정의)
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

[//]: # (이파일들은 없애줘)
> **주의**: `src/sections/` 폴더는 초기 개발 잔여물. `App.tsx`에서는 `src/components/`만 import하며, `sections/` 내 파일들은 실제로 사용되지 않음. 

---

## 2. 기술 스택

### 런타임 의존성

| 패키지 | 버전 | 역할 |
|---|---|---|
| `react` | ^19.2.0 | UI 프레임워크 (최신 React 19) |
| `react-dom` | ^19.2.0 | DOM 렌더링 |
| `tailwindcss` | ^4.2.1 | CSS 유틸리티 프레임워크 |
| `@tailwindcss/vite` | ^4.2.1 | Tailwind v4 Vite 플러그인 |

### 개발 의존성

| 패키지 | 버전 | 역할 |
|---|---|---|
| `vite` | ^7.3.1 | 빌드 도구 / 개발 서버 |
| `@vitejs/plugin-react` | ^5.1.1 | React Fast Refresh |
| `typescript` | ~5.9.3 | 타입 검사 |
| `eslint` | ^9.39.1 | 코드 린터 |
| `typescript-eslint` | ^8.48.0 | TS 전용 ESLint 규칙 |
| `eslint-plugin-react-hooks` | ^7.0.1 | React Hooks 규칙 검사 |
| `eslint-plugin-react-refresh` | ^0.4.24 | Fast Refresh 호환성 |

[//]: # (불필요한 tailwind.config.js도 없애줘)
> **특이사항**: Tailwind CSS **v4** 사용. v4는 `tailwind.config.js` 불필요 — `vite.config.ts`에 플러그인 추가 + `index.css`에 `@import "tailwindcss"` 한 줄로 동작.

---

## 3. 주요 설정 파일

### `vite.config.ts`
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
별도의 `base`, `build` 경로 설정 없이 기본값 사용.

### `tsconfig.app.json`
- `target: ES2022`, `module: ESNext`
- `strict: true` — 엄격 타입 검사 활성화
- `noUnusedLocals`, `noUnusedParameters: true` — 미사용 변수/파라미터 금지
- `jsx: react-jsx` — 자동 JSX Transform (import React 불필요)
- `noEmit: true` — 타입 검사 전용 (빌드는 Vite 담당)

[//]: # (index.html이 뭐가 미완성인건지 상세하게 보고해줘)
### `index.html`
- `<title>portfolio</title>` — 한국어 미적용, 미완성 상태
- favicon은 vite.svg 기본값 사용 중

### `src/index.css`
```css
@import "tailwindcss";
```
단 1줄. 커스텀 CSS 전무.

---

## 4. 컴포넌트 구조 (전체 트리)

```
App.tsx
├── Navbar
├── Hero
├── About
├── Skills
│   └── SkillGroupSection (skillGroups 배열 map 렌더링)
├── Projects
│   ├── ProjectCard (projects 배열 map 렌더링)
│   └── ProjectModal (selectedProject !== null일 때 렌더링)
│       ├── ModalHeader (공통)
│       ├── ReviewDetail        (detailType: 'review-detail')
│       ├── ChartInsightDetail  (detailType: 'chartinsight-detail')
│       ├── PortfolioDetail     (detailType: 'portfolio-detail')
│       ├── DaesulDetail        (detailType: 'daesul-detail')
│       ├── DangdangDetail      (detailType: 'dangdang-detail')
│       └── PDF iframe          (detailType: 'pdf' 또는 default)
└── Contact
```

---

## 5. 컴포넌트 상세 분석

### `Navbar.tsx` (36줄)
- `sticky top-0 z-50` + `backdrop-blur-xl` 스티키 헤더
- 로고: "SeungHwan.OH"
- 메뉴 4개: About / Skills / Projects / Contact (앵커 링크)
- 반응형: 모바일 `flex-col` → 데스크탑(`md:`) `flex-row`

[//]: # (Hero title 내용 데스크톱 화면에서는 "~ 더 자연스럽게 만드는 개발" 여기서 줄바꿈이 되고 모바일 화면에서는 "더 자연스럽게 만드는 개발자 오승" 여기서 줄바꿈이 돼. 둘 다 "더 자연스럽게 만드는 개발자" 여기서 줄바꿈이 되도록 수정해줘)
### `Hero.tsx` (75줄)
- `id="home"`, 배경: `radial-gradient` + `linear-gradient` 조합
- 두 개의 blur된 원형 배경 장식 (`motion-safe:animate-pulse`)
- 좌측: 타이틀, 설명, CTA 버튼 2개("프로젝트 보기" / "연락하기"), 기술 뱃지 4개
- 우측(`md:` 이상): 프로필 사진 카드 (`rounded-[40px]`, `aspect-[3/4]`)


[//]: # (about에 학력에서 전공 인공지능 기초, Java, 자료구조, 운영체제, 데이터베이스 시스템 이론, 임베디드소프트웨어 / 복수전공에서 미시 경제학, 금융기관론, 주택금융론 학습했다는 내용 추가해줘. 그리고 타임라인에 2025.6~12에 멀티캠퍼스에서 하는 [현대이지웰]Java 풀스택 개발자 아카데미 6회차 참여랑 2025.10~12 화장품 쇼핑몰 [Re:view] 개발 프로젝트 진행 이 두개도 추가해줘 )
### `About.tsx` (122줄)
- `id="about"`, CSS Grid `[0.8fr_/_1.2fr]`
- 좌측: `sticky top-28` — 섹션 제목 + 프로필 사진
- 우측: 개인 정보 그리드 + 자기소개 + 타임라인 4개 항목
  - 2020.04~10: Java 스터디 & 안드로이드 앱 개발
  - 2021.10.30: Start-App 캠프 수상 (색약자 RGB 변환 앱)
  - 2021.11.13: Ticket to the Dream 아이디어톤 참여
  - 2022.09.03: SW실무아카데미 수상 (여행 플래너 플랫폼)

[//]: # (스킬 부분은 내가 프로젝트 진행한 것 중에서 더 들어갈 내용이 있을지 검토해줘)
### `Skills.tsx` + `SkillGroupSection.tsx`
- `id="skills"`, CSS Grid `[0.7fr_/_1.3fr]`
- `skillGroups` 배열을 map으로 순회해 `SkillGroupSection` 반복 렌더링
- 각 그룹: 제목 + 뱃지 목록 (hover 시 dark 반전)

### `Projects.tsx` (677줄 — 가장 큰 파일)
- `id="projects"`, `useState<SelectedProject | null>(null)` 모달 상태 관리
- 프로젝트 카드 그리드: 기본 1열 → `md:grid-cols-3`
- `handleOpenProject`: `ProjectItem` → `SelectedProject` 변환 (detailType 기반 분기)
- 모달 오픈 시 `ProjectModal` 렌더링 (고정 overlay)
- 모든 Detail 컴포넌트가 이 파일 안에 인라인 정의됨

### `ProjectCard.tsx` (101줄)
- liveUrl / githubUrl 있을 때만 아이콘 링크 활성화 (없으면 `opacity-30`)
- 이미지, 제목, 설명, 기술 스택 뱃지
- "자세히 보기" 버튼: detailType 없으면 "준비 중"으로 표시

### `Contact.tsx` (39줄)
- `id="contact"`, 중앙 정렬
- 이메일: seunghwanoo@kakao.com
- GitHub: https://github.com/pic-pick
- 버튼 2개 (Email 복사 / GitHub 이동)

---

## 6. 라우팅

**라우터 없음.** `react-router-dom` 미사용.

완전한 **단일 페이지(SPA, 스크롤 기반)** 구조:
- 네비게이션: 앵커 링크 (`#home`, `#about`, `#skills`, `#projects`, `#contact`)
- 프로젝트 상세: 별도 URL 없이 **모달(조건부 렌더링)** 방식으로 동일 URL에서 overlay

---

## 7. 스타일링

- **Tailwind CSS v4** — 설정 파일 없이 `@import "tailwindcss"` 한 줄
- **커스텀 CSS 없음** — 모든 스타일은 인라인 Tailwind 클래스
- Arbitrary value 적극 활용: `bg-[radial-gradient(...)]`, `grid-cols-[0.8fr_1.2fr]`
- 반응형 접두사: `sm:`, `md:`, `lg:`
- hover 인터랙션: `hover:-translate-y-1`, `hover:scale-[1.01]`, `group-hover:scale-105`
- 모션: `motion-safe:animate-pulse` (접근성 고려)
- 색상 팔레트: **zinc** 계열 (zinc-50 ~ zinc-950) 모노크롬 + indigo/emerald 포인트

---

## 8. 데이터 구조

### `src/types/project.ts`
```ts
export type ProjectDetailType =
  'pdf' | 'review-detail' | 'portfolio-detail' |
  'daesul-detail' | 'chartinsight-detail' | 'dangdang-detail'

export type SelectedProject = {
    title: string
    type?: ProjectDetailType
    pdfUrl?: string
    githubUrl?: string
    demoUrl?: string
    description?: string
    stack?: string[]
    liveUrl?: string
}

export type ProjectItem = {
    info: string
    title: string
    description: string
    stack: string[]
    pdfUrl?: string
    githubUrl?: string
    demoUrl?: string
    image?: string
    detailType?: ProjectDetailType
    liveUrl?: string
}
```

### `src/data/projects.ts` — 프로젝트 목록 (6개)

| # | 제목 | 기간 | 형태 | 주요 스택 | 배포 |
|---|---|---|---|---|---|
| 1 | Re:View | 2025.10~12 | 6인 팀 | React, JS, Spring Boot, REST API | Vercel |
| 2 | 댕댕트립 | 2026.03 | 1인 | React, TS, Spring Boot, Java, Axios, CSS Modules | Vercel |
| 3 | 차트인사이트 AI | 2025.11~12 | 1인 | React, Python, TradingView, yfinance, OpenAI API | PDF 문서 |
| 4 | 대설 빙수 웹 퍼블리싱 | 2026.03 | 개인 | HTML, CSS, JS, Figma | Vercel |
| 5 | 포트폴리오 웹사이트 | 2026.03 | 1인 | React, TS, Tailwind CSS, Vite | Vercel |
| 6 | 마이 플래너 | 2022.09 | 해커톤 | HTML, CSS, JS | 없음 |

### `src/data/skillGroups.ts`
```ts
[
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Backend',  items: ['Java', 'Spring Boot', 'Python', 'REST API'] },
  { title: 'Tools',    items: ['Git', 'GitHub', 'Figma', 'Notion'] },
]
```

---

## 9. 주요 기능 상세

### 9-1. 프로젝트 상세 모달 시스템

`Projects.tsx` 내에 완전히 구현된 복잡한 모달 시스템:

- **상태**: `useState<SelectedProject | null>(null)`
- **진입**: `handleOpenProject(project: ProjectItem)` — detailType별 분기 후 selectedProject 설정
- **UI**: 고정 위치 overlay (`fixed inset-0`), backdrop-blur, 90vh 높이, 내부 스크롤
- **`renderContent()`** 함수로 detailType별 컴포넌트 조건부 렌더링:

| detailType | 렌더링 컴포넌트 | 주요 섹션 |
|---|---|---|
| `review-detail` | `ReviewDetail` | Summary, Background, What I Built, Retrospective, Demo Video, User Flow |
| `chartinsight-detail` | `ChartInsightDetail` | Summary, Background, Trouble Shooting, What I Built, PDF 임베드 |
| `portfolio-detail` | `PortfolioDetail` | Summary, Background, Tech Stack, What I Built |
| `daesul-detail` | `DaesulDetail` | Summary, Background, What I Built, Screenshots 3장 |
| `dangdang-detail` | `DangdangDetail` | Summary, Background, Architecture, What I Built, Retrospective, Screenshot |
| `pdf` / default | PDF iframe | `chartinsight-ai.pdf` 인라인 표시 |

### 9-2. 인터랙션 & 애니메이션

- Navbar sticky + backdrop-blur
- Hero 섹션 배경 pulse 애니메이션 (`motion-safe:animate-pulse`)
- 모든 카드/버튼 hover: translate + scale 트랜지션
- 이미지 hover scale (`group-hover:scale-105/110`)
- About/Skills 섹션 좌측 sticky 패널

### 9-3. 반응형 레이아웃

- **모바일 퍼스트** 접근
- Navbar: 모바일 세로 → 데스크탑 가로
- Hero 사진: `hidden md:block` (모바일에서 숨김)
- Projects: 1열(기본) → 3열(`md:`)
- About/Skills: 1열(기본) → 2열(`md:`) 그리드

---

## 10. 빌드 & 배포

### 빌드 명령

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

- `tsc -b`: 타입 검사 먼저 수행 (오류 시 빌드 중단)
- `vite build`: 번들링, 코드 분할, 해시된 파일명 생성

### 배포 정보

- **플랫폼**: Vercel
- **GitHub**: https://github.com/pic-pick/Portfolio
- **라이브 URL**: https://portfolio-9fmvpypur-pro5kinghwan-5655s-projects.vercel.app/

---

## 11. 개인 정보 (About 섹션)

| 항목 | 내용 |
|---|---|
| 이름 | 오승환 |
| 생년월일 | 2001.03.09 |
| 이메일 | seunghwanoo@kakao.com |
| 대학 | 원광대학교 |
| 전공 | 인공지능융합학과 |
| 복수전공 | 스마트금융SW융합전공 |

---

## 12. 코드 품질 평가

### 잘 된 부분

- 데이터(`projects.ts`, `skillGroups.ts`)와 UI 컴포넌트 완전 분리
- TypeScript strict 모드 + 커스텀 타입 정의 활용 (`ProjectItem`, `SelectedProject`, `ProjectDetailType`)
- 컴포넌트 단위 분리 명확 (Navbar, Hero, About, Skills, Projects, Contact)
- Tailwind v4 최신 스택 활용
- `motion-safe:` 접근성 접두사 사용

### 개선 여지

| 항목 | 현재 상태 | 개선 방향 |
|---|---|---|
| `src/sections/` 폴더 | 5개 파일 미사용으로 방치 | 삭제하여 코드 정리 |
| `Projects.tsx` 677줄 | Detail 컴포넌트들이 하나의 파일에 집중 | `ReviewDetail.tsx`, `DaesulDetail.tsx` 등으로 분리 |
| `index.html` title | "portfolio" (영문 소문자) | 한국어 또는 브랜드명으로 변경 |
| 모달 접근성 | ESC 키 닫기, body 스크롤 잠금 미구현 | `useEffect`로 키보드 이벤트 + `overflow-hidden` 처리 |
| favicon | vite.svg 기본값 | 개인 브랜드 아이콘으로 교체 |

---

*이 보고서는 Claude Code에 의해 자동 생성되었습니다.*

---

---

# 포트폴리오 레이아웃·스타일·짜임새 상세 분석 보고서

> 분석일: 2026-03-20
> 분석 대상: 전체 컴포넌트 (Navbar, Hero, About, Skills, Projects, Contact, ProjectCard, SkillGroupSection, 모달 시스템)

---

## A. 전체 디자인 언어

### A-1. 색상 체계

| 역할 | 값 | 사용처 |
|---|---|---|
| 배경 (기본) | `#ffffff` / zinc-50 | 섹션 배경 |
| 배경 (강조) | radial-gradient (indigo+emerald) | Hero, About, Contact |
| 텍스트 (주) | `text-zinc-900` | 제목, 본문 강조 |
| 텍스트 (보조) | `text-zinc-600` | 본문 설명 |
| 텍스트 (라벨) | `text-zinc-400` / `text-zinc-500` | Section label, 메타 정보 |
| 구분선 | `border-zinc-200` | 섹션 경계, 카드, timeline |
| 카드 bg | zinc-50 | 스킬 뱃지, Detail 카드 bg |
| Primary accent | zinc-900 | CTA 버튼, hover 상태, 수상 뱃지 |
| Decorative | indigo-200/40, emerald-200/40 | Hero blur circle 장식 (motion-safe pulse) |

**핵심 원칙:** 전체 팔레트가 zinc 모노크롬 단색 계열 하나로 통일됨. 컬러 포인트는 Hero 배경 그라디언트와 장식 요소에만 한정되어 있어 콘텐츠가 시각적으로 방해받지 않는다.

### A-2. 타이포그래피 시스템

| 계층 | Tailwind 클래스 | 사용처 |
|---|---|---|
| Section Label | `text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400/500` | 모든 섹션 상단 ("About", "Skills", "Projects" 등) |
| H1 (Hero) | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900` | Hero 메인 타이틀 |
| H2 (Section) | `text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900` | About, Skills, Projects 제목 |
| H3 (Modal) | `text-xl font-semibold text-zinc-900` | 모달 헤더 프로젝트명 |
| H4 (Detail) | `text-3xl font-bold tracking-tight text-zinc-900` | Detail 섹션 제목 |
| H5 (Card) | `text-lg font-semibold text-zinc-900` | What I Built 카드 제목 |
| Body | `text-sm sm:text-base leading-7 sm:leading-8 text-zinc-600` | 본문 단락 |
| Meta Badge | `text-xs font-semibold uppercase tracking-[0.15~0.18em]` | Timeline label, Detail section label |

**특징:** Section Label의 `tracking-[0.2em]` 자간이 전체 섹션에서 완전히 통일되어 있어 강한 시각적 일관성을 만든다. H1~H2는 `tracking-tight`으로 제목 자간을 좁혀 현대적 editorial 느낌을 준다.

---

## B. 섹션별 레이아웃 분석

### B-1. Navbar

```
[sticky top-0 z-50] [backdrop-blur-md] [border-b border-zinc-200]
└─ max-w-6xl container
   ├─ 로고: "오승환" (text-lg font-bold)
   └─ 네비: flex gap-4~6 (hidden→sm:flex)
      ├─ Home / About / Skills / Projects / Contact
      └─ 각 항목: text-sm font-medium, hover:text-zinc-900
```

- 높이 암묵적으로 약 56px (py-4 + text 높이)
- About/Skills sticky panel의 `top-28`이 Navbar 높이를 고려한 값
- 모바일에서 nav 링크가 `hidden sm:flex` → 모바일에서 네비게이션 링크가 완전히 사라짐 (햄버거 메뉴 없음)

### B-2. Hero

```
[relative overflow-hidden border-b] [radial-gradient bg + pulse blobs]
└─ max-w-6xl grid: [1.15fr_0.85fr] (md+)
   ├─ 좌: 텍스트 블록
   │   ├─ badge ("Frontend Developer Portfolio")
   │   ├─ H1 (3줄: 사용자의 경험을 / 더 자연스럽게 만드는 개발자 / 오승환입니다.)
   │   ├─ 소개 단락 2개
   │   ├─ CTA 버튼 2개 (프로젝트 보기 / 연락하기)
   │   └─ 기술 태그 4개 (React / TypeScript / Spring Boot / REST API)
   └─ 우: 프로필 사진 (hidden md:block)
       ├─ 장식 도형 3개 (absolute 배치)
       └─ 사진 카드 (rounded-[40px], aspect-[3/4], shadow)
```

- `py-16 sm:py-20` — 섹션 중 가장 패딩이 작음 (타 섹션 `py-24`)
- 그리드 비율 1.15:0.85 — 텍스트 영역을 약간 넓게
- 모바일에서는 텍스트 컬럼만 표시 (사진 hidden)

### B-3. About

```
[border-b] [linear-gradient bg]
└─ max-w-6xl grid: [0.8fr_1.2fr] (md+)
   ├─ 좌 (sticky top-28):
   │   ├─ section label "About"
   │   ├─ H2 (2줄)
   │   └─ 프로필 사진 (max-w-[350px], aspect-[3/4], rounded-2xl)
   └─ 우 (스크롤):
       ├─ 정보 그리드 (border-l, pl-5 sm:pl-8)
       │   ├─ Name, Birth, Email, University, Major, Double Major
       │   └─ 각 항목: border-b pb-3
       ├─ 자기소개 단락 2개 (border-l)
       └─ Timeline (border-l)
           └─ 6개 항목 (absolute dot + left border line)
```

- timeline dot: `absolute -left-[25px] sm:-left-[37px]` → border-l 선 위에 dot 중앙 정렬
- 좌우 비율 0.8:1.2 — 우측 콘텐츠 영역이 더 넓음
- sticky panel이 긴 우측 콘텐츠와 함께 스크롤되며 항상 보임

### B-4. Skills

```
[border-b] [bg-white]
└─ max-w-6xl grid: [0.7fr_1.3fr] (md+)
   ├─ 좌 (sticky top-28):
   │   ├─ section label "Skills"
   │   ├─ H2 "기술 스택"
   │   └─ 설명 텍스트 1줄
   └─ 우:
       └─ SkillGroupSection × 3 (Frontend / Backend / Tools)
           └─ article border-t pt-6
               ├─ H3 (카테고리명)
               └─ flex-wrap 뱃지 목록 (icon + name)
```

- About보다 좌측 비율이 더 좁음 (0.7 vs 0.8) — sticky 설명 콘텐츠가 적어서
- 뱃지 hover: border/bg zinc-200→zinc-900, text white (color inversion)
- SimpleIcons CDN `https://cdn.simpleicons.org/{slug}` → 16×16 아이콘

### B-5. Projects

```
[border-b] [bg-white]
└─ max-w-6xl
   ├─ section label "Projects"
   ├─ H2 "주요 프로젝트"
   └─ grid 1열 → md:3열
       └─ ProjectCard × 6
           ├─ article border-t (첫 번째만 border-t-0)
           ├─ 이미지 (aspect-[4/3])
           ├─ info badge + title + description
           ├─ stack 뱃지 목록
           └─ 외부링크 (GitHub, Live) + "자세히 보기" 버튼
```

- 카드 hover: `-translate-y-1.5 shadow-lg`
- detailType 없는 경우 "준비 중" 버튼 (opacity-50, cursor-not-allowed)
- liveUrl/githubUrl 없으면 아이콘 링크 `opacity-30`

### B-6. Contact

```
[bg-gradient]
└─ max-w-3xl (타 섹션과 달리 max-w-3xl로 좁힘)
   ├─ section label "Contact"
   ├─ H2 "함께 일해요"
   ├─ 설명 텍스트
   └─ 버튼 2개 (Email 복사 / GitHub 이동)
       ├─ Email: bg-zinc-900 (filled)
       └─ GitHub: border (outline)
```

- 유일하게 `max-w-3xl` 사용 — 중앙 집중형 CTA 구조
- 타 섹션과 달리 `border-b` 없음 (마지막 섹션)

---

## C. 공통 패턴 & 반복 구조

### C-1. Section Label 패턴

모든 섹션에서 동일하게 사용:
```tsx
<p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400/500">
    섹션명
</p>
```
Hero의 "Frontend Developer Portfolio" badge는 border가 있는 pill 형태로 변형되어 있지만 같은 역할.

### C-2. Left-Border 콘텐츠 블록

About 섹션 내 정보 그리드, 자기소개 단락, Timeline 모두:
```
border-l border-zinc-200 pl-5 sm:pl-8
```
좌측 선을 기준으로 콘텐츠가 들여쓰기되어 세로로 연결된 느낌을 준다.

### C-3. Sticky Left Panel

About + Skills 섹션에서 공통으로 사용:
```tsx
<div className="md:sticky md:top-28">
    {/* 섹션 라벨 + 제목 + 간단 설명/사진 */}
</div>
```
우측 콘텐츠가 길어도 왼쪽 컨텍스트가 항상 화면에 유지되어 독자가 어느 섹션인지 잃지 않도록 한다.

### C-4. 섹션 구분선 패턴

```
Hero     → border-b border-zinc-200
About    → border-b border-zinc-200
Skills   → border-b border-zinc-200
Projects → border-b border-zinc-200
Contact  → (없음, 마지막)
```
모든 섹션이 `border-b`로 명확히 구분된다.

### C-5. 배경 교차 패턴

```
Navbar  → bg-white/80 backdrop-blur
Hero    → radial-gradient (indigo + emerald) + gradient to #f8fafc
About   → linear-gradient (#ffffff → #fafafa)
Skills  → bg-white
Projects→ bg-white
Contact → (배경 미지정, App.tsx bg-white 상속)
```
Hero와 About은 섬세한 그라디언트, Skills/Projects는 순수 흰색으로 배경 밀도를 줄인다.

---

## D. 모달 시스템 구조 분석

### D-1. 레이어 구조

```
ProjectModal (fixed inset-0 z-[100])
└─ dim + backdrop-blur-sm overlay (bg-zinc-950/70)
   └─ 모달 패널 (max-w-6xl, h-90~92vh, rounded-[24~28px])
      ├─ ModalHeader (border-b, fixed)
      │   ├─ "Project Detail" label + 프로젝트명
      │   └─ 사이트 보기 / GitHub / 닫기 버튼 (rounded-full)
      └─ Content 영역 (flex-1, overflow-y-auto)
          └─ [detailType별 컴포넌트]
```

### D-2. Detail 컴포넌트별 섹션 구조

모든 Detail 컴포넌트가 동일한 내부 패턴을 사용:
```
section label (uppercase tracking-[0.2em] text-zinc-400)
└─ 제목 / 콘텐츠
```

| 컴포넌트 | 고유 섹션 |
|---|---|
| ReviewDetail | Summary + 이미지, Background + Project Meaning, What I Built (담당 파트), Retrospective, Demo Video, User Flow |
| ChartInsightDetail | Summary, Background, Trouble Shooting, What I Built (4개 카드), PDF iframe |
| PortfolioDetail | Summary, Background + Tech Stack, What I Built (4개 카드) |
| DaesulDetail | Summary + Tech Stack (side), Background, What I Built (bullet list), Screenshots (3장) |
| DangdangDetail | Summary + Tech Stack (side), Background, Architecture, What I Built (4개 카드), Retrospective (배운 점/아쉬웠던 점), Screenshot |

### D-3. What I Built 카드 레이아웃

대부분의 Detail에서 공통:
```tsx
<div className="grid gap-4 sm:grid-cols-2">
    <div className="rounded-2xl bg-zinc-50 p-5">
        <h5 className="text-lg font-semibold">...</h5>
        <p className="mt-3 text-sm leading-7 text-zinc-600">...</p>
    </div>
</div>
```

### D-4. Retrospective (회고) 레이아웃 — DangdangDetail만 해당

```tsx
<div className="grid gap-4 lg:grid-cols-2">
    <div className="rounded-2xl bg-zinc-50 p-5">배운 점</div>   {/* filled */}
    <div className="rounded-2xl border border-zinc-200 p-5">아쉬웠던 점</div> {/* outlined */}
</div>
```
배운 점(zinc-50 bg)과 아쉬웠던 점(border-only)의 시각적 강도를 달리해 의도를 구분.

---

## E. 인터랙션 & 애니메이션 패턴

### E-1. Hover 인터랙션 유형

| 유형 | 클래스 | 사용처 |
|---|---|---|
| 위로 이동 | `hover:-translate-y-1` | ProjectCard, About 프로필 이미지, Hero 프로필 |
| 미세 이동 | `hover:-translate-y-0.5` | Hero 기술 태그, SkillGroupSection 뱃지 |
| 스케일 | `hover:scale-[1.01]` | Hero CTA 버튼 |
| 이미지 줌 | `group-hover:scale-105/110` | About 프로필, ProjectCard 이미지 |
| 컬러 반전 | `hover:bg-zinc-900 hover:text-white hover:border-zinc-900` | 기술 태그, 스킬 뱃지 |
| 그림자 강화 | `hover:shadow-xl`, `hover:shadow-[0_40px_100px_...]` | Hero 프로필 카드, About 프로필 |

### E-2. Transition 설정

- 대부분 `transition duration-300` 사용
- Hero 프로필 wrapper: `transition duration-500` (느린 전환)
- SkillGroupSection 뱃지: `transition duration-200` (빠른 전환)
- `transition` 단독(duration 미지정) 사용처도 있음 (모달 헤더 버튼)

### E-3. 장식 애니메이션

```tsx
// Hero 배경 blur circle
className="motion-safe:animate-pulse"
```
`motion-safe:` 접두사로 시스템 설정에서 모션 감소를 요청한 사용자에게는 애니메이션이 비활성화됨. 접근성 배려.

---

## F. 반응형 전략 상세

### F-1. 브레이크포인트 사용 패턴

| bp | 주요 변화 |
|---|---|
| 기본(모바일) | 1열 레이아웃, 텍스트 small, 패딩 px-4 |
| `sm:` (640px+) | 텍스트 크기 업, 패딩 px-6, Navbar 링크 표시, 버튼 row 정렬 |
| `md:` (768px+) | 2열 그리드 전환 (About/Skills), Hero 사진 표시, Projects 3열 |
| `lg:` (1024px+) | Hero H1 최대 크기, Detail 내부 2열 그리드 |

### F-2. 모바일 전용 문제점

- **Navbar**: 모바일에서 nav 링크 완전히 숨김 (`hidden sm:flex`) — 햄버거 메뉴 없음. 600px 미만에서는 섹션 이동 방법이 Hero CTA 버튼 2개뿐
- **Hero**: 프로필 사진 `hidden md:block` — 모바일에서 텍스트만 표시
- **About sticky**: `md:sticky` — 모바일에서는 sticky 없이 일반 흐름

### F-3. 그리드 비율 설계 의도

| 섹션 | 그리드 비율 | 의도 |
|---|---|---|
| Hero | `[1.15fr_0.85fr]` | 텍스트 공간 약간 우선 |
| About | `[0.8fr_1.2fr]` | 우측 상세 정보 영역 넓게 |
| Skills | `[0.7fr_1.3fr]` | 우측 스킬 목록 최대한 넓게 |

---

## G. 데이터-UI 분리 구조 평가

### 분리 상태

```
src/data/
├─ projects.ts     → ProjectItem[] 배열 (6개)
└─ skillGroups.ts  → SkillGroup[] 배열

src/types/
└─ project.ts      → ProjectItem, SelectedProject, ProjectDetailType 타입 정의
```

- 데이터가 UI와 완전히 분리되어 있어 콘텐츠 추가/수정 시 컴포넌트 코드를 건드리지 않아도 됨
- 단, 새 detailType 추가 시 `Projects.tsx`의 `handleOpenProject`와 `renderContent` 두 곳에 분기를 추가해야 하는 구조적 결합이 있음

---

## H. 전체 짜임새 평가

### H-1. 강점

| 항목 | 평가 |
|---|---|
| 색상 일관성 | zinc 모노크롬 팔레트 완전 통일, 이탈 없음 |
| Section Label 패턴 | 모든 섹션에서 동일 스타일로 반복, 강한 인식성 |
| Sticky Left Panel | About/Skills에서 사용자 컨텍스트 유지 |
| 모달 상세 | 프로젝트별 맞춤 레이아웃, 정보 밀도 높음 |
| 타이포그래피 계층 | H1→H2→H3→H4→H5 명확하게 구분됨 |
| 접근성 배려 | `motion-safe:`, `rel="noopener noreferrer"`, alt text 존재 |
| 데이터 분리 | projects.ts, skillGroups.ts 분리로 유지보수 용이 |

### H-2. 개선 여지

| 항목 | 현황 | 개선 방향 |
|---|---|---|
| 모바일 Navbar | 600px 미만 링크 없음 | 햄버거 메뉴 또는 bottom nav 추가 |
| 모달 접근성 | ESC 키 닫기, body 스크롤 잠금 미구현 | `useEffect` keydown + `document.body.style.overflow` |
| Projects.tsx 크기 | 677줄, 5개 Detail 컴포넌트 인라인 | `ReviewDetail.tsx`, `DangdangDetail.tsx` 등 파일 분리 |
| SimpleIcons hover | hover 시 icon이 흰색 배경에서 white icon → 보이지 않을 가능성 | icon color 처리 또는 hover 시 icon 숨김/invert |
| Transition 비일관성 | `duration-200`, `duration-300`, `duration-500`, 미지정 혼재 | 일관된 duration 기준 정립 |
| ProjectCard border-t 첫 항목 | 1번 카드도 `border-t` 적용됨 (`first:border-t-0` 없음) | `[&:first-child]:border-t-0` 또는 래퍼 처리 |
| favicon | vite.svg 기본값 사용 중 | 개인 브랜드 favicon으로 교체 |

---

*레이아웃/스타일/짜임새 분석 보고서 — Claude Code 자동 생성 (2026-03-20)*