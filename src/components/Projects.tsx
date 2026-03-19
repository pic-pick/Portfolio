import { useState } from "react"
import { projects } from "../data/projects"
import type { ProjectItem, SelectedProject } from "../types/project"
import ProjectCard from "./ProjectCard"
import reviewUiImg from "../assets/reviewui.png"
import reviewUserFlowImg from "../assets/reviewuserflowchart.png"
import daesulsc1 from "../assets/daesulsc1.png"
import daesulsc2 from "../assets/daesulsc2.png"
import daesulsc3 from "../assets/daesulsc3.png"
import dangdangtripSCImg from "../assets/dangdangtripSC.png"

function ModalHeader({ selectedProject, onClose }: { selectedProject: SelectedProject; onClose: () => void }) {
    return (
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
    )
}

function ReviewDetail({ selectedProject }: { selectedProject: SelectedProject }) {
    return (
        <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-5xl space-y-12">
                <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Summary</p>
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">RE:View 프로젝트 요약</h4>
                        <p className="mt-5 text-base leading-8 text-zinc-600">
                            RE:View는 사용자 후기와 바우만 피부타입 추천을 기반으로 상품과 리뷰를 연결하는 화장품 쇼핑 플랫폼입니다.
                            리뷰 중심의 정보 탐색과 개인화 추천을 결합해, 사용자가 자신의 피부 타입에 맞는 상품을 더 신뢰도 높게 탐색할 수 있도록 기획한 프로젝트입니다.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                        <div className="aspect-[4/3] w-full">
                            <img src={reviewUiImg} alt="Re:View UI 전체 화면" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </section>

                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Background</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            프로젝트 기획안에서는 피부타입에 맞는 화장품을 찾기 어렵고, 리뷰의 신뢰도와 개인화 추천 기능이 부족하다는 문제를 해결하고자 했습니다.
                            이에 상품 추천, 리뷰 추천, 검색, 운영자픽 리뷰, 회원가입/로그인, 주문/결제, 관리자 페이지 등 쇼핑몰과 커뮤니티 기능을 함께 갖춘 구조로 프로젝트를 설계했습니다.
                        </p>
                    </div>
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Project Meaning</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            제가 처음으로 풀스택 단위의 프로젝트를 진행한 경험이었고, API와 데이터베이스를 연동해 개발한 것도 처음이었습니다.
                            백엔드 팀과 협업하는 과정에서 API 연결 방식과 서비스 구조를 실무처럼 익힐 수 있었고, 규모가 있는 프로젝트를 기능 단위로 나누어 개발하면서 GitHub 브랜치 전략과 PR 코드리뷰를 적극적으로 활용했습니다.
                            그 과정에서 충돌과 코드 이슈를 해결하는 방법까지 배울 수 있어 협업과 구조 설계 측면에서 특히 의미가 큰 프로젝트였습니다.
                        </p>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">What I Built</p>
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
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Retrospective</p>
                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">배운 점</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    처음으로 API와 데이터베이스를 실제로 연동하며 서비스 전체 구조를 이해했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    GitHub 브랜치 전략과 PR 코드리뷰를 활용한 협업 흐름을 실무에 가깝게 경험했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    충돌과 코드 이슈를 직접 해결하며 팀 개발 환경에서의 문제 해결 능력을 기를 수 있었습니다.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-zinc-200 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">아쉬웠던 점</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300"></span>
                                    첫 풀스택 프로젝트라 초기 API 명세 합의 과정에서 예상보다 많은 시간이 걸렸습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300"></span>
                                    화면 설계와 API 연동을 동시에 진행하다 보니 예상치 못한 의존성이 발생해 수정이 필요한 경우가 있었습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Demo Video</p>
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
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">User Flow</p>
                    <div className="mt-5 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                        <img src={reviewUserFlowImg} alt="Re:View 유저 플로우 차트" className="h-full w-full object-cover" />
                    </div>
                </section>
            </div>
        </div>
    )
}

function ChartInsightDetail({ selectedProject }: { selectedProject: SelectedProject }) {
    return (
        <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-5xl space-y-10">
                <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Summary</p>
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">차트인사이트 AI</h4>
                        <p className="mt-5 text-base leading-8 text-zinc-600">
                            주식 기술적 지표 데이터를 AI와 연결해 종목 인사이트를 대시보드 방식으로 제공하는 개인 프로젝트입니다.
                            React와 Python(FastAPI)을 기반으로 시계열 데이터를 시각화하고, OpenAI LLM을 활용해 종목 분석 결과를 자동으로 생성합니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Tech Stack</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {selectedProject.stack?.map((item) => (
                                <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700">{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Background</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            주식에 관심이 있었지만 기술적 지표를 직접 해석하기가 쉽지 않았습니다.
                            지표 데이터로 종목을 분석하면 어떤 결과가 나올까 하는 아이디어에서 출발해,
                            yfinance의 시장 데이터를 OpenAI LLM 프롬프트와 연결해 대시보드 형태로 인사이트를 제공하는 방식을 구현했습니다.
                        </p>
                    </div>
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Trouble Shooting</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            초기에는 ARIMA 기반 시계열 모델로 주가를 예측하려 했지만, 뉴스, 시황, 정책 등 외생변수가 너무 많아 예측 정확도가 기대에 미치지 못했습니다.
                            이후 방향을 바꿔 예측 대신 LLM이 지표 데이터를 해석해 인사이트를 생성하는 구조로 전환했고, API 데이터와 LLM 모델을 연결하는 흐름 자체에서 가능성을 확인했습니다.
                        </p>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">What I Built</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">캔들스틱 차트 시각화</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                lightweight-charts 라이브러리를 활용해 OHLCV 캔들스틱 차트를 구현했습니다. SMA20, SMA60 이동평균선을 오버레이로 표시하고, ARIMA 예측 밴드를 차트 위에 시각화해 가격 범위의 불확실성을 직관적으로 표현했습니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">AI 인사이트 대시보드</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                yfinance(미국 주식)와 pykrx(한국 주식) API로 수집한 시장 데이터를 OpenAI LLM 프롬프트에 전달해 종목별 인사이트를 자동 생성합니다. 변동성, 모멘텀, 이동평균 등 지표를 종합한 분석 텍스트를 대시보드 형태로 제공합니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">전략 스코어링 시스템</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                이동평균 크로스오버, 볼린저 밴드 평균 회귀, 모멘텀 기반 전략 등 복수의 기술적 전략을 0-100점으로 평가하고, 매수/홀드/매도 시그널을 자동으로 분류하는 스코어링 모듈을 구현했습니다.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Project Document (PDF)</p>
                    <div className="mt-5 h-[520px] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
                        <iframe
                            src={selectedProject.pdfUrl}
                            title={selectedProject.title}
                            className="h-full w-full"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

function PortfolioDetail({ selectedProject }: { selectedProject: SelectedProject }) {
    return (
        <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-4xl space-y-10">
                <section>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Summary</p>
                    <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">포트폴리오 웹사이트</h4>
                    <p className="mt-5 text-base leading-8 text-zinc-600">
                        심플하면서도 진행한 프로젝트를 간결하게 보여줄 수 있는 블로그 느낌의 레이아웃을 목표로 직접 디자인하고 구현한 개인 포트폴리오 웹사이트입니다.
                        React와 TypeScript를 기반으로 컴포넌트 구조를 설계하고, Tailwind CSS로 반응형 UI를 구현했습니다.
                    </p>
                </section>

                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Background</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            화려한 효과보다는 작업물이 잘 보이는 레이아웃을 우선시했습니다.
                            블로그처럼 정보가 깔끔하게 정리되면서도, 각 프로젝트의 상세 내용을 모달로 확인할 수 있는 구조를 기획했습니다.
                            기획, 디자인, 개발을 모두 직접 담당하며 전체 흐름을 경험한 프로젝트입니다.
                        </p>
                    </div>
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Tech Stack</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {selectedProject.stack?.map((item) => (
                                <span key={item} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">What I Built</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">컴포넌트 단위 설계</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                Navbar, Hero, About, Skills, Projects, Contact 등 섹션별로 컴포넌트를 분리해 구성했습니다. 데이터(projects.ts, skillGroups.ts)와 UI를 분리해 콘텐츠 수정이 쉬운 구조로 설계했습니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">프로젝트 상세 모달 시스템</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                각 프로젝트마다 다른 형태의 상세 뷰를 지원하는 모달 시스템을 구현했습니다. review-detail, chartinsight-detail, daesul-detail 등 타입별로 다른 레이아웃을 렌더링합니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">TypeScript 타입 설계</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                ProjectItem, SelectedProject, ProjectDetailType 등 커스텀 타입을 정의해 컴포넌트 간 데이터 흐름을 타입 안전하게 관리했습니다. 런타임 오류를 줄이고 코드 자동완성이 잘 동작하도록 구성했습니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">반응형 레이아웃</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                Tailwind CSS의 반응형 유틸리티를 활용해 모바일부터 데스크탑까지 자연스럽게 대응하는 레이아웃을 구현했습니다. 스티키 네비게이션, 백드롭 블러, 그리드 레이아웃 등 세부 인터랙션도 함께 구성했습니다.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

function DaesulDetail({ selectedProject }: { selectedProject: SelectedProject }) {
    return (
        <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-4xl space-y-10">
                <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Summary</p>
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">대설 빙수 웹 퍼블리싱</h4>
                        <p className="mt-5 text-base leading-8 text-zinc-600">
                            개인적으로 좋아하는 빙수 브랜드 대설의 웹사이트를 참고해 UI 구조를 재구성하고 퍼블리싱한 프로젝트입니다.
                            React 없이 순수 HTML/CSS/JavaScript만으로 싱글 페이지 브랜드 사이트를 구현했습니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Tech Stack</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {selectedProject.stack?.map((item) => (
                                <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700">{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Background</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            프레임워크 없이 순수 웹 기술만으로 실제 브랜드 사이트 수준의 퍼블리싱을 구현해보고 싶었습니다.
                            평소 좋아하는 대설 브랜드의 감성과 컨셉을 최대한 살리는 것을 목표로, Figma로 레이아웃을 먼저 설계한 뒤 마크업을 진행했습니다.
                        </p>
                    </div>
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">What I Built</p>
                        <ul className="mt-4 space-y-2 text-base leading-8 text-zinc-600">
                            <li className="flex items-start gap-2">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                Figma 기반 레이아웃 설계 후 HTML/CSS 마크업
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                대설 브랜드 컨셉에 맞춘 색상, 폰트, 이미지 구성
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                싱글 페이지 구조의 반응형 레이아웃 구현
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                Vercel 배포
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Screenshots</p>
                    <div className="mt-5 space-y-4">
                        <div className="overflow-hidden rounded-2xl border border-zinc-200">
                            <img src={daesulsc1} alt="대설 빙수 스크린샷 1" className="w-full object-cover" />
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-zinc-200">
                            <img src={daesulsc2} alt="대설 빙수 스크린샷 2" className="w-full object-cover" />
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-zinc-200">
                            <img src={daesulsc3} alt="대설 빙수 스크린샷 3" className="w-full object-cover" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

function DangdangDetail({ selectedProject }: { selectedProject: SelectedProject }) {
    return (
        <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-5xl space-y-10">
                <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Summary</p>
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">댕댕트립</h4>
                        <p className="mt-5 text-base leading-8 text-zinc-600">
                            반려동물과 함께 갈 수 있는 여행지를 찾을 수 있는 웹 서비스입니다.
                            한국관광공사 공공 API를 연동해 지역/카테고리/키워드 복합 검색과 반려동물 동반 조건 배지를 제공하고,
                            React 19 프론트엔드와 Spring Boot 백엔드로 구성된 풀스택 프로젝트입니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Tech Stack</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {selectedProject.stack?.map((item) => (
                                <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700">{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Background</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            반려동물 동반 여행 정보가 흩어져 있어 한 번에 찾기 어렵다는 점에서 기획했습니다.
                            한국관광공사의 KorPetTourService2 공공 API를 활용해 전국 17개 시도의 반려동물 동반 가능 명소, 식당, 숙소, 문화시설 정보를 제공하는 서비스를 구현했습니다.
                        </p>
                    </div>
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Architecture</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            React 19 + TypeScript 프론트엔드와 Spring Boot 3.5 백엔드로 구성된 풀스택 구조입니다.
                            백엔드가 공공 API를 프록시하면서 Caffeine 캐싱으로 외부 호출을 최소화하고, 병렬 API 호출로 응답 속도를 개선했습니다.
                        </p>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">What I Built</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">병렬 API 호출 및 캐싱</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                상세 페이지에서 Mono.zip()을 활용해 여러 API를 병렬 호출해 응답 시간을 단축했습니다. Caffeine 기반 캐싱으로 외부 API 호출을 최소화하고, 정규식으로 HTML href를 파싱해 홈페이지 URL을 추출했습니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">복합 검색 및 필터</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                지역, 카테고리, 키워드를 조합한 복합 검색을 구현했습니다. 반려동물 동반 조건(목줄/이동장/소중대형견 여부)을 배지로 시각화해 사용자가 한눈에 동반 가능 여부를 확인할 수 있도록 했습니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">드래그 스크롤 UX</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                카테고리 목록에 드래그 스크롤을 구현하면서 클릭 이벤트와의 충돌을 방지했습니다. 드래그 여부를 판별해 의도치 않은 클릭 오작동을 막는 세밀한 이벤트 처리를 적용했습니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">스켈레톤 로딩 및 무한 스크롤</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                데이터 로딩 중 스켈레톤 UI를 표시해 사용자 체감 속도를 개선했습니다. 더 보기 버튼 기반 페이지네이션으로 초기 로딩 부담을 줄이고, CSS Modules로 컴포넌트별 스타일을 격리해 관리했습니다.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Retrospective</p>
                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">배운 점</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    공공 API 데이터가 항상 깔끔하지 않다는 것을 직접 경험하며 방어적 코드 작성 습관을 기를 수 있었습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    API 순차 호출을 병렬로 바꾸며 성능이 눈에 띄게 개선되는 경험을 했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    드래그와 클릭을 구분하는 세밀한 이벤트 처리를 통해 UX 하나를 제대로 만드는 데 필요한 고민의 깊이를 배웠습니다.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-zinc-200 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">아쉬웠던 점</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300"></span>
                                    반려동물 동반 가능 장소 데이터가 생각보다 적었고, 다른 API 병합도 데이터 품질 문제로 포기했습니다. 데이터 확보가 서비스 품질에 얼마나 중요한지 실감했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300"></span>
                                    배포 후 외부 API 호출 제한에 걸려 서비스가 동작하지 않는 상황을 겪었습니다. 처음부터 캐싱을 설계에 포함했다면 좋았을 것 같습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Screenshot</p>
                    <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200">
                        <img src={dangdangtripSCImg} alt="댕댕트립 스크린샷" className="w-full object-cover" />
                    </div>
                </section>
            </div>
        </div>
    )
}

function ProjectModal({
    selectedProject,
    onClose,
}: {
    selectedProject: SelectedProject
    onClose: () => void
}) {
    const renderContent = () => {
        if (selectedProject.type === "review-detail") {
            return <ReviewDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "chartinsight-detail") {
            return <ChartInsightDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "portfolio-detail") {
            return <PortfolioDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "daesul-detail") {
            return <DaesulDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "dangdang-detail") {
            return <DangdangDetail selectedProject={selectedProject} />
        }
        return (
            <div className="flex-1 bg-zinc-100">
                <iframe
                    src={selectedProject.pdfUrl}
                    title={selectedProject.title}
                    className="h-full w-full"
                />
            </div>
        )
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8">
            <div className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl sm:h-[90vh] sm:rounded-[28px]">
                <ModalHeader selectedProject={selectedProject} onClose={onClose} />
                {renderContent()}
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
        } else if (project.detailType === "chartinsight-detail") {
            setSelectedProject({
                title: project.title,
                type: "chartinsight-detail",
                pdfUrl: project.pdfUrl,
                githubUrl: project.githubUrl,
                description: project.description,
                stack: project.stack,
                liveUrl: project.liveUrl,
            })
        } else if (project.detailType === "dangdang-detail") {
            setSelectedProject({
                title: project.title,
                type: "dangdang-detail",
                githubUrl: project.githubUrl,
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
