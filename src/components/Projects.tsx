import { useState } from "react"
import { projects } from "../data/projects"
import type { ProjectItem, SelectedProject } from "../types/project"
import ProjectCard from "./ProjectCard"
import reviewUiImg from "../assets/reviewui.png"
import reviewUserFlowImg from "../assets/reviewuserflowchart.png"
import daesulsc1 from "../assets/daesulsc1.png"
import daesulsc2 from "../assets/daesulsc2.png"
import daesulsc3 from "../assets/daesulsc3.png"

function ProjectModal({
                          selectedProject,
                          onClose,
                      }: {
    selectedProject: SelectedProject
    onClose: () => void
}) {
    return (
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

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        {selectedProject.liveUrl ? (
                            <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                            >
                                사이트 보기
                            </a>
                        ) : null}

                        {selectedProject.githubUrl ? (
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                            >
                                GitHub
                            </a>
                        ) : null}

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                        >
                            닫기
                        </button>
                    </div>
                </div>

                {selectedProject.type === "review-detail" ? (
                    <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
                        <div className="mx-auto max-w-5xl space-y-12">
                            <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                        Summary
                                    </p>
                                    <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
                                        RE:View 프로젝트 요약
                                    </h4>
                                    <p className="mt-5 text-base leading-8 text-zinc-600">
                                        RE:View는 사용자 후기와 바우만 피부타입 추천을 기반으로 상품과 리뷰를 연결하는 화장품 쇼핑 플랫폼입니다.
                                        리뷰 중심의 정보 탐색과 개인화 추천을 결합해, 사용자가 자신의 피부 타입에 맞는 상품을 더 신뢰도 높게 탐색할 수 있도록 기획한 프로젝트입니다.
                                    </p>
                                </div>

                                <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                                    <div className="aspect-[4/3] w-full">
                                        <img
                                            src={reviewUiImg}
                                            alt="Re:View UI 전체 화면"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="grid gap-8 lg:grid-cols-2">
                                <div className="border-t border-zinc-200 pt-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                        Background
                                    </p>
                                    <p className="mt-4 text-base leading-8 text-zinc-600">
                                        프로젝트 기획안에서는 피부타입에 맞는 화장품을 찾기 어렵고, 리뷰의 신뢰도와 개인화 추천 기능이 부족하다는 문제를 해결하고자 했습니다.
                                        이에 상품 추천, 리뷰 추천, 검색, 운영자픽 리뷰, 회원가입/로그인, 주문/결제, 관리자 페이지 등 쇼핑몰과 커뮤니티 기능을 함께 갖춘 구조로 프로젝트를 설계했습니다.
                                    </p>
                                </div>

                                <div className="border-t border-zinc-200 pt-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                        Project Meaning
                                    </p>
                                    <p className="mt-4 text-base leading-8 text-zinc-600">
                                        제가 처음으로 풀스택 단위의 프로젝트를 진행한 경험이었고, API와 데이터베이스를 연동해 개발한 것도 처음이었습니다.
                                        백엔드 팀과 협업하는 과정에서 API 연결 방식과 서비스 구조를 실무처럼 익힐 수 있었고, 규모가 있는 프로젝트를 기능 단위로 나누어 개발하면서 GitHub 브랜치 전략과 PR 코드리뷰를 적극적으로 활용했습니다.
                                        그 과정에서 충돌과 코드 이슈를 해결하는 방법까지 배울 수 있어 협업과 구조 설계 측면에서 특히 의미가 큰 프로젝트였습니다.
                                    </p>
                                </div>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    What I Built
                                </p>
                                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl bg-zinc-50 p-5">
                                        <h5 className="text-lg font-semibold text-zinc-900">마이페이지 전체 UI 설계 및 구현</h5>
                                        <p className="mt-3 text-sm leading-7 text-zinc-600">
                                            React 기반으로 마이페이지 전반의 화면을 구성했습니다. 회원 정보 확인, 주문 관련 정보, 활동 내역처럼 사용자가 자신의 상태를 한눈에 확인할 수 있도록 레이아웃을 나누고, 화면 흐름이 복잡해지지 않도록 정보 구조와 UI 배치를 정리했습니다.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-50 p-5">
                                        <h5 className="text-lg font-semibold text-zinc-900">API 연동을 고려한 화면 상태 구성</h5>
                                        <p className="mt-3 text-sm leading-7 text-zinc-600">
                                            백엔드에서 제공하는 회원 및 마이페이지 관련 API와 연결되는 것을 전제로 화면을 개발했습니다. 데이터 로딩 전후 상태, 사용자 정보 표시, 목록형 데이터 렌더링 등을 고려해 컴포넌트를 구성했고, 실제 서비스 화면처럼 자연스럽게 정보가 이어지도록 UI 흐름을 맞췄습니다.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-50 p-5">
                                        <h5 className="text-lg font-semibold text-zinc-900">사용자 중심 인터페이스 디테일 반영</h5>
                                        <p className="mt-3 text-sm leading-7 text-zinc-600">
                                            사용자가 자주 확인하는 정보가 먼저 보이도록 우선순위를 두고 인터페이스를 설계했습니다. 섹션 간 간격, 버튼 배치, 정보 카드 구성 등 세부 요소를 조정해 마이페이지가 단순한 정보 나열이 아니라 사용 흐름에 맞는 화면이 되도록 구현했습니다.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-50 p-5">
                                        <h5 className="text-lg font-semibold text-zinc-900">프론트엔드 협업 구조 경험</h5>
                                        <p className="mt-3 text-sm leading-7 text-zinc-600">
                                            팀 프로젝트에서 프론트엔드 담당 영역을 맡아 다른 화면 담당자 및 백엔드 팀원과 기능 단위를 맞춰 작업했습니다. GitHub를 활용해 작업 내용을 공유하고 브랜치를 나누어 개발하면서, API 명세와 화면 요구사항을 조율하는 협업 방식을 경험했습니다.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Demo Video
                                </p>
                                <div className="mt-5 overflow-hidden rounded-3xl border border-zinc-200 bg-black shadow-sm">
                                    <div className="aspect-video w-full">
                                        <iframe
                                            src={selectedProject.demoUrl}
                                            title="Re:View Demo Video"
                                            className="h-full w-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    User Flow
                                </p>
                                <div className="mt-5 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                                    <img
                                        src={reviewUserFlowImg}
                                        alt="Re:View 유저 플로우 차트"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                ) : selectedProject.type === "portfolio-detail" ? (
                    <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
                        <div className="mx-auto max-w-4xl space-y-8">
                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Summary
                                </p>
                                <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
                                    포트폴리오 웹사이트
                                </h4>
                                <p className="mt-5 text-base leading-8 text-zinc-600">
                                    {selectedProject.description}
                                </p>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Tech Stack
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {selectedProject.stack?.map((item) => (<span key={item} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">{item}</span>))}
                                </div>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Description
                                </p>
                                <p className="mt-4 text-base leading-8 text-zinc-600">
                                    이 프로젝트에서는 React와 TypeScript를 사용해 전체 포트폴리오 구조를 컴포넌트 단위로 설계했고, Tailwind CSS를 활용해 반응형 레이아웃과 인터랙션을 구현했습니다. 또한 프로젝트별 상세 모달, 썸네일 카드, 기술 스택 소개, 연락처 섹션을 구성해 사용자가 작업물을 자연스럽게 탐색할 수 있도록 개발했습니다.
                                </p>
                            </section>
                        </div>
                    </div>
                ) : selectedProject.type === "daesul-detail" ? (
                    <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
                        <div className="mx-auto max-w-4xl space-y-8">
                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Summary
                                </p>
                                <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
                                    퍼블리싱 웹사이트
                                </h4>
                                <p className="mt-5 text-base leading-8 text-zinc-600">
                                    {selectedProject.description}
                                </p>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Tech Stack
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {selectedProject.stack?.map((item) => (<span key={item} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">{item}</span>))}
                                </div>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Description
                                </p>
                                <p className="mt-4 text-base leading-8 text-zinc-600">
                                    이 프로젝트에서는 대설 브랜드 사이트를 재구성한 퍼블리싱 작업으로 싱글 페이지 구성으로 react 없이 구현을 목적으로 한 프로젝트입니다.
                                </p>
                            </section>

                            <section className="border-t border-zinc-200 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    ScreenShot
                                </p>
                                <div className="mt-5 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                                    <img
                                        src={daesulsc1}
                                        alt="퍼블리싱 스크린샷1"
                                        className="h-full w-full object-cover"
                                    />
                                    <img
                                        src={daesulsc2}
                                        alt="퍼블리싱 스크린샷2"
                                        className="h-full w-full object-cover"
                                    />
                                    <img
                                        src={daesulsc3}
                                        alt="퍼블리싱 스크린샷3"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 bg-zinc-100">
                        <iframe
                            src={selectedProject.pdfUrl}
                            title={selectedProject.title}
                            className="h-full w-full"
                        />
                    </div>
                )}



            </div>
        </div>
    )
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null)

    const handleOpenProject = (project: ProjectItem) => {
        if (project.detailType === "review-detail") {
            setSelectedProject({
                title: project.title,
                type: "review-detail",
                githubUrl: project.githubUrl,
                demoUrl: project.demoUrl,
                description: project.description,
                stack: project.stack,
                liveUrl: project.liveUrl,
            })
        } else if (project.detailType === "portfolio-detail") {
            setSelectedProject({
                title: project.title,
                type: "portfolio-detail",
                githubUrl: project.githubUrl,
                description: project.description,
                stack: project.stack,
                liveUrl: project.liveUrl,
            })
        } else if (project.detailType === "daesul-detail") {
            setSelectedProject({
                title: project.title,
                type: "daesul-detail",
                githubUrl: project.githubUrl,
                description: project.description,
                stack: project.stack,
                liveUrl: project.liveUrl,
            })
        } else if (project.pdfUrl) {
            setSelectedProject({
                title: project.title,
                type: "pdf",
                pdfUrl: project.pdfUrl,
                githubUrl: project.githubUrl,
                demoUrl: project.demoUrl,
                description: project.description,
                stack: project.stack,
                liveUrl: project.liveUrl,
            })
        }
    }

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
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onOpen={handleOpenProject}
                        />
                    ))}
                </div>

                {selectedProject ? (
                    <ProjectModal
                        selectedProject={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                ) : null}
            </div>
        </section>
    )
}

export default Projects