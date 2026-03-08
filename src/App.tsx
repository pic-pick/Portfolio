import { useState } from 'react'
import profileImg from "./assets/profileimg.JPG"
import chartImg from "./assets/chartimg.png"
import reviewImg from "./assets/reviewimg.png"
// import Hero from "./sections/Hero"
// import About from "./sections/About"
// import Skills from "./sections/Skills"
// import Projects from "./sections/Projects"
// import Contact from "./sections/Contact"

function Navbar() {
    const menus = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
                <a href="#home" className="group inline-flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-900">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-zinc-900 transition group-hover:scale-125" />
                    Portfolio
                </a>

                <nav>
                    <ul className="flex w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 p-2 text-sm font-medium text-zinc-600 shadow-sm md:w-auto md:rounded-full md:p-1">
                        {menus.map((menu) => (
                            <li key={menu.href}>
                                <a
                                  href={menu.href}
                                  className="rounded-full px-3 py-2 text-xs transition duration-200 hover:bg-zinc-900 hover:text-white sm:px-4 sm:text-sm"
                                >
                                    {menu.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden border-b border-zinc-200 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(34,197,94,0.12),_transparent_28%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)] py-16 sm:py-20"
        >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-60px] top-20 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
              <div className="absolute bottom-10 right-[-40px] h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
            </div>
            <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12">
                <div className="max-w-3xl">
                    <p className="mb-4 inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600 shadow-sm">
                        Frontend Developer Portfolio
                    </p>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
                        사용자의 경험을
                        <br />
                        더 자연스럽게 만드는 개발자 오승환입니다.
                    </h1>
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                        프론트엔드 개발자로서 작은 디테일이 사용자 경험을 더욱 풍부하게 만든다고 믿습니다. 화면의 섬세한 요소와 직관적인 상호작용을 통해 사람들이 자연스럽게 서비스를 이용할 수 있도록 고민하며 개발합니다.
                        <br />
                        <br />
                        사용자의 특별한 경험을 기술로 연결하고 더 나은 서비스로 이어질 수 있도록 팀원들과 함께 문제를 고민하고 해결합니다. 사용자 피드백과 테스트를 통해 점진적으로 발전하는 서비스를 만드는 것이 저의 목표입니다.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                            href="#projects"
                            className="rounded-2xl bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-700 sm:w-auto"
                        >
                            프로젝트 보기
                        </a>
                        <a
                            href="#contact"
                            className="rounded-2xl border border-zinc-300 bg-white/80 px-5 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 sm:w-auto"
                        >
                            연락하기
                        </a>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-600 sm:mt-10 sm:gap-3">
                      <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm">React</span>
                      <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm">TypeScript</span>
                      <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm">Spring Boot</span>
                      <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm">REST API</span>
                    </div>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute -left-8 top-8 h-24 w-24 rounded-full border border-zinc-200/80 bg-white/70 backdrop-blur" />
                  <div className="absolute right-8 top-0 h-16 w-16 rounded-3xl bg-zinc-900/90" />
                  <div className="absolute bottom-10 left-10 h-20 w-20 rounded-[28px] border border-indigo-200/70 bg-indigo-100/70 backdrop-blur" />
                  <div className="relative ml-auto w-full max-w-sm">
                    <div className="rounded-[40px] border border-white/70 bg-white/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Design + Development</p>
                      <div className="mt-8 space-y-6">
                        <div>
                          <p className="text-sm text-zinc-500">Focus</p>
                          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
                            Intuitive UI,
                            <br />
                            thoughtful interaction
                          </p>
                        </div>
                        <div className="h-px bg-zinc-200" />
                        <div className="grid grid-cols-2 gap-4 text-sm text-zinc-600">
                          <div>
                            <p className="text-zinc-400">Based on</p>
                            <p className="mt-1 font-semibold text-zinc-900">React · TS</p>
                          </div>
                          <div>
                            <p className="text-zinc-400">Experience</p>
                            <p className="mt-1 font-semibold text-zinc-900">API · State</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}


function About() {
    return (
        <section id="about" className="border-b border-zinc-200 bg-[linear-gradient(to_bottom,_#ffffff,_#fafafa)] py-24">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                <div className="space-y-6 md:sticky md:top-28">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            About
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            배우고 만들며 성장하는
                            <br />
                            프론트엔드 개발자
                        </h2>
                    </div>

                    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm md:mx-0 md:max-w-none">
                        <div className="aspect-[3/4] w-full">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                  <div className="grid gap-4 border-l border-zinc-200 pb-6 pl-5 sm:grid-cols-2 sm:pl-8">
                      <div className="border-b border-zinc-200 pb-3 sm:col-span-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Name</p>
                          <p className="mt-2 text-xl font-semibold text-zinc-900">오승환</p>
                      </div>

                      <div className="border-b border-zinc-200 pb-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Birth</p>
                          <p className="mt-2 text-sm font-medium text-zinc-900">2001.03.09</p>
                      </div>

                      <div className="border-b border-zinc-200 pb-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Email</p>
                          <a
                              href="mailto:seunghwanoo@kakao.com"
                              className="mt-2 inline-block text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-600"
                          >
                              seunghwanoo@kakao.com
                          </a>
                      </div>

                      <div className="border-b border-zinc-200 pb-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">University</p>
                          <p className="mt-2 text-sm font-medium text-zinc-900">원광대학교</p>
                      </div>

                      <div className="border-b border-zinc-200 pb-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Major</p>
                          <p className="mt-2 text-sm font-medium text-zinc-900">인공지능융합학과</p>
                      </div>

                      <div className="border-b border-zinc-200 pb-3 sm:col-span-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Double Major</p>
                          <p className="mt-2 text-sm font-medium text-zinc-900">스마트금융SW융합전공</p>
                      </div>
                  </div>

                  <div className="space-y-6 border-l border-zinc-200 pl-5 text-sm leading-7 text-zinc-600 sm:pl-8 sm:text-base sm:leading-8">
                      <p>
                          사용자 경험을 중심으로 문제를 해결하는 프론트엔드 개발자입니다. React와 TypeScript, JavaScript 기반으로 인터페이스를 구현하며 REST API 연동과 상태 관리를 통해 실제 서비스 흐름을 이해하는 개발 경험을 쌓아왔습니다.
                      </p>
                      <p>
                          단순히 화면을 만드는 것에 그치지 않고, 사용자가 어떤 흐름으로 서비스를 이용하는지 고민하며 더 직관적인 UI와 안정적인 구조를 만드는 것을 중요하게 생각합니다. 이 포트폴리오는 제가 경험한 프로젝트와 기술, 그리고 앞으로 어떤 개발자로 성장하고 싶은지를 보여주기 위해 구성했습니다.
                      </p>
                  </div>
                </div>
            </div>
        </section>
    )
}

function Skills() {
    const skillGroups = [
      {
        title: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      },
      {
        title: 'Backend',
        items: ['Java', 'Spring Boot', 'Python', 'REST API'],
      },
      {
        title: 'Tools',
        items: ['Git', 'GitHub', 'Vite', 'WebStorm', 'Figma', 'ESLint', 'Prettier'],
      },
    ]

    return (
        <section id="skills" className="border-b border-zinc-200 py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Skills
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                    기술 스택
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {skillGroups.map((group) => (
                        <article key={group.title} className="group border-t border-zinc-200 pt-6 transition duration-200">
                            <h3 className="text-lg font-semibold text-zinc-900">{group.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState<null | { title: string; pdfUrl?: string; githubUrl?: string }>(null)
    const projects: { info: string; title: string; description: string; stack: string[]; pdfUrl?: string; githubUrl?: string; image?: string }[] = [
      {
        info: '6인 풀스택 팀 프로젝트 [2025.10 ~ 2025.12]',
        title: 'Re:View (풀스택 6인 팀프로젝트)',
        description:
          '사용자의 피부 타입을 기반으로 맞춤 화장품 추천 쇼핑몰 프로젝트입니다. 프론트엔드 개발을 담당했으며 로그인/회원관리, My Page의 전 기능 화면 개발과 REST API 연동, 상태 관리를 구현했습니다. GitHub Flow와 PR 룰을 적극적으로 활용하여 팀원들과 협업 개발을 진행했습니다.',
          stack: ['React', 'JavaScript', 'Spring Boot', 'REST API', 'Git'],
          pdfUrl: 'https://github.io/REST-API',
          githubUrl: 'https://github.com/pic-pick/Re_View',
          image: reviewImg
      },
      {
        info: '1인 개인 프로젝트 [2025.11 ~ 2025.12]',
        title: '차트인사이트 AI (1인 개인 프로젝트)',
        description:
          'React와 Python을 사용해 주가 데이터를 분석하는 프로젝트입니다. TradingView 차트 라이브러리와 yfinance API를 활용해 시계열 주가 데이터를 시각화하고, OpenAI 기반 NLP 프롬프트 처리를 실험하며 데이터 분석 흐름을 구현하는 개인 프로젝트입니다.',
        stack: ['React', 'Python', 'TradingView', 'yfinance API', 'OpenAI API'],
        pdfUrl: '/chartinsight-ai.pdf',
        githubUrl: 'https://github.com/pic-pick/Chart-Insight-AI',
        image: chartImg,
      },
      {
        info: '웹개발 경진대회 해커톤 프로젝트 [2022.9]',
        title: '마이 플래너 (웹개발 경진대회 해커톤)',
        description:
          '웹 개발 경진대회에서 진행한 여행 일정 공유 플랫폼 프로젝트입니다. 웹 퍼블리싱(HTML/CSS 마크업)개발을 목표로 했으며 사용자 친화적인 UI 구조와 반응형 레이아웃을 구현했고, 해당 프로젝트로 대회 수상을 경험했습니다.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Web Publishing'],
      },
    ]

    return (
        <section id="projects" className="border-b border-zinc-200 bg-white py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Projects
                </p>
                <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                        주요 프로젝트
                    </h2>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.title} className="group border-t border-zinc-200 pt-6 transition duration-200 hover:translate-x-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-zinc-500">{project.info}</p>
                              {project.githubUrl ? (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="transition duration-200 group-hover:scale-110"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5 text-zinc-700"
                                  >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.05 11.05 0 015.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.42-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                                  </svg>
                                </a>
                              ) : (
                                <span className="opacity-30">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5 text-zinc-400"
                                  >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.05 11.05 0 015.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.42-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                                  </svg>
                                </span>
                              )}
                            </div>
                            {project.image && (
                              <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200">
                                <div className="aspect-[4/3] w-full">
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                            )}
                            <h3 className="mt-4 text-xl font-semibold text-zinc-900">{project.title}</h3>
                            <p className="mt-4 text-sm leading-6 text-zinc-600">{project.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                if (project.pdfUrl) {
                                  setSelectedProject({ title: project.title, pdfUrl: project.pdfUrl, githubUrl: project.githubUrl })
                                }
                              }}
                              className={`mt-6 flex w-full items-center justify-between text-sm font-medium transition ${project.pdfUrl ? 'text-zinc-900 hover:text-zinc-600' : 'cursor-default text-zinc-400'}`}
                            >
                              <span>{project.pdfUrl ? '자세히 보기' : '준비 중'}</span>
                              <span className={`transition duration-200 ${project.pdfUrl ? 'group-hover:translate-x-1' : ''}`}>→</span>
                            </button>
                        </article>
                    ))}
                </div>
                {selectedProject ? (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8">
                        <div className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl sm:h-[90vh] sm:rounded-[28px]">
                            <div className="flex flex-col gap-3 border-b border-zinc-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                                        Project Detail
                                    </p>
                                    <h3 className="mt-1 text-xl font-semibold text-zinc-900">
                                        {selectedProject.title}
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(null)}
                                    className="self-end rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:self-auto"
                                >
                                    닫기
                                </button>
                            </div>

                            <div className="flex-1 bg-zinc-100">
                                <iframe
                                    src={selectedProject.pdfUrl}
                                    title={selectedProject.title}
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    )
}

function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="mx-auto max-w-4xl rounded-[28px] border border-zinc-200 bg-[linear-gradient(135deg,_#18181b,_#27272a)] px-4 py-12 text-center text-white shadow-xl shadow-zinc-900/10 sm:rounded-[32px] sm:px-6 sm:py-16">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Contact
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    함께 이야기해요
                </h2>
                <p className="mt-5 text-base leading-7 text-zinc-300">
                    포트폴리오를 봐주셔서 감사합니다. 아래 연락처나 GitHub 링크를 여기에
                    추가해서 마무리하면 좋습니다.
                </p>

                <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                        href="mailto:seunghwanoo@kakao.com"
                        className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-100"
                    >
                        이메일 보내기
                    </a>
                    <a
                        href="https://github.com/pic-pick"
                        className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                        GitHub 보기
                    </a>
                </div>
            </div>
        </section>
    )
}

function App() {
    return (
        <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default App