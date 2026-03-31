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
import biolensExploreImg from "../assets/biolens-explore.png"
import biolensSaveImg from "../assets/biolens-save.png"
import biolensNetworkImg from "../assets/biolens-network.png"
import adwallImg from "../assets/adwall.png"
import adwallMobileImg from "../assets/adwall-mobile.png"

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

function BioLensDetail({ selectedProject }: { selectedProject: SelectedProject }) {
    return (
        <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-5xl space-y-12">

                {/* Summary */}
                <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Summary</p>
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">BioLens 프로젝트 요약</h4>
                        <p className="mt-5 text-base leading-8 text-zinc-600">
                            BioLens는 신약 연구자를 위한 AI 기반 생의학 논문 탐색 웹 서비스입니다.
                            PubMed에서 논문을 검색하고 GPT-4o-mini가 한국어 3줄 요약을 즉시 생성해주며,
                            인용 네트워크 시각화와 스크랩보드 기능으로 연구 흐름을 한눈에 파악할 수 있도록 설계했습니다.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {(selectedProject.stack ?? []).map((s) => (
                                <span key={s} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                        <div className="aspect-[4/3] w-full">
                            <img src={biolensExploreImg} alt="BioLens 논문 탐색 화면" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* Core Features */}
                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Core Features</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'AI 한국어 요약', desc: 'GPT-4o-mini로 논문 Abstract를 한국어 3줄 요약 + 핵심 키워드 추출. 연구자가 빠르게 논문을 스크리닝할 수 있도록 지원' },
                            { title: 'PubMed 통합 검색', desc: '무한 스크롤, 연도 범위·출판 유형·오픈 액세스 필터. 배치 EFetch로 API 호출을 22회→3회로 최적화' },
                            { title: '연구 트렌드 시각화', desc: 'Chart.js 기반 2000년~현재까지 연도별 논문 발표 수 바 차트로 연구 흐름 파악' },
                            { title: '인용 네트워크 그래프', desc: 'Semantic Scholar + iCite API 연동, vis-network 라이브러리로 선행/후행 논문 관계를 인터랙티브 그래프로 시각화' },
                            { title: '스크랩보드', desc: '관심 논문을 주제별로 저장·분류. localStorage 기반으로 로그인 없이 사용 가능' },
                            { title: '다중 논문 비교', desc: '최대 5개 논문을 동시 분석, 연구 방법론·결과·한계점 비교 테이블 생성' },
                        ].map((f) => (
                            <div key={f.title} className="rounded-2xl bg-zinc-50 p-5">
                                <h5 className="text-sm font-semibold text-zinc-900">{f.title}</h5>
                                <p className="mt-2 text-sm leading-7 text-zinc-500">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Highlights */}
                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Technical Highlights</p>
                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">API 최적화</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    배치 EFetch로 개별 Abstract 호출 20개를 1번의 API 호출로 통합, 요청 수 22→3회 절감
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    NCBI Rate Limiter 큐 구현 (API Key 없이 3 req/s, Key 사용 시 10 req/s)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    History Server(WebEnv/query_key) 기반 페이지네이션으로 ESearch 재호출 없이 무한 스크롤 구현
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-zinc-200 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">Vue 3 Composition API 설계</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    usePubmed.js 컴포저블로 검색·페이지네이션·AI 요약 로직을 캡슐화
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    App.vue 중앙 상태 관리 → SearchBar/PaperCard 컴포넌트로 단방향 데이터 흐름
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    한국어 입력 감지 후 영어 검색 권장, XML 파싱으로 MeSH 용어 자동 추출
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vibe Coding Process */}
                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Vibe Coding Process</p>
                    <h5 className="mt-3 text-xl font-bold tracking-tight text-zinc-900">바이브코딩 개발 과정</h5>
                    <p className="mt-3 text-base leading-8 text-zinc-600">
                        BioLens는 코드 작성 전 충분한 사전 조사와 설계를 거친 <strong>Research → Plan → Build</strong> 사이클로 개발했습니다.
                        Claude Code를 활용해 2일 만에 완성했으며, 무작정 코딩하는 방식 대신 구조화된 문서 작성이 반복 수정과 토큰 비용을 크게 줄이고 결과물 퀄리티도 눈에 띄게 올라간다는 것을 직접 경험했습니다.
                    </p>

                    {/* Cycle Diagram */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">1</span>
                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Research</span>
                            </div>
                            <p className="text-sm font-semibold text-zinc-900">research.md 작성</p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-500">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>PubMed E-utilities API 스펙 분석 (Rate Limit, 배치 전략, 필드 태그)</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>iCite / Semantic Scholar 인용 API 연구</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>한국어 검색 불가 이슈 파악 및 우회 전략 도출</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>OpenAI JSON 응답 안전성 검토</li>
                            </ul>
                        </div>
                        <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">2</span>
                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Plan</span>
                            </div>
                            <p className="text-sm font-semibold text-zinc-900">plan.md 작성</p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-500">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>Rate Limiter · XML 파서 · usePubmed.js 컴포저블 설계</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>AI 요약 · iCite 인용 지표 · 확장형 PaperCard UI</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>Chart.js 트렌드 시각화 · 인용 네트워크 · Vercel 배포</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>컴포넌트 구조 및 데이터 흐름 사전 확정</li>
                            </ul>
                        </div>
                        <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">3</span>
                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Build</span>
                            </div>
                            <p className="text-sm font-semibold text-zinc-900">Claude Code로 구현</p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-500">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>research.md · plan.md를 컨텍스트로 제공해 AI가 설계 의도를 정확히 반영</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>기능 단위로 프롬프트 분할, 각 단계 결과를 검토 후 다음 단계 진행</li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400"></span>총 개발 기간 2일 완성</li>
                            </ul>
                        </div>
                    </div>

                    {/* Prompt Strategy */}
                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                        <h6 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">주요 프롬프트 전략</h6>
                        <div className="mt-4 space-y-3">
                            {[
                                { label: '컨텍스트 선주입', desc: '코딩 시작 전 research.md와 plan.md 전문을 프롬프트에 포함 → AI가 API 제약·설계 의도를 처음부터 인식하도록 설정' },
                                { label: '기능 단위 분할', desc: 'Rate Limiter → XML 파서 → 컴포저블 → UI 순서로 독립 단위를 순차 구현, 각 단계 검토 후 다음 프롬프트 전달' },
                                { label: '제약 조건 명시', desc: '"NCBI API Key 없이 3 req/s 제한 준수", "XML EFetch 응답 파싱" 등 구체적 제약을 프롬프트에 명시해 잘못된 코드 생성 방지' },
                                { label: '문서화 병행', desc: '구현 중 발견한 엣지케이스(한국어 검색 실패, HTTP 200 + 에러 바디 패턴)를 문서에 추가하며 다음 프롬프트에 반영' },
                            ].map((s) => (
                                <div key={s.label} className="flex items-start gap-3">
                                    <span className="mt-1 shrink-0 rounded bg-zinc-200 px-1.5 py-0.5 text-xs font-semibold text-zinc-600">{s.label}</span>
                                    <p className="text-sm leading-7 text-zinc-600">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Screenshots */}
                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Screenshots</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl border border-zinc-200">
                            <img src={biolensExploreImg} alt="논문 탐색 화면" className="w-full object-cover" />
                            <p className="px-4 py-2 text-xs text-zinc-400">논문 탐색 &amp; AI 요약</p>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-zinc-200">
                            <img src={biolensSaveImg} alt="스크랩 화면" className="w-full object-cover" />
                            <p className="px-4 py-2 text-xs text-zinc-400">스크랩보드</p>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 sm:col-span-2">
                            <img src={biolensNetworkImg} alt="인용 네트워크 화면" className="w-full object-cover" />
                            <p className="px-4 py-2 text-xs text-zinc-400">인용 네트워크 그래프 (선행/후행 논문)</p>
                        </div>
                    </div>
                </section>

                {/* Retrospective */}
                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Retrospective</p>
                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">배운 점</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    코딩 전 충분한 API 리서치와 설계 문서 작성이 반복 수정 비용을 대폭 줄여준다는 것을 실감했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    Vue 3 Composition API의 컴포저블 패턴으로 관심사를 명확히 분리하는 방법을 익혔습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    Rate Limit 제약 안에서 배치 처리로 성능을 최적화하는 실용적인 API 설계 경험을 쌓았습니다.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-zinc-200 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">아쉬웠던 점</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300"></span>
                                    Semantic Scholar API 응답 지연으로 네트워크 그래프 초기 로딩이 느린 점이 아쉬웠습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

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
                    <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">담당 파트</p>
                        <p className="mt-2 text-sm font-semibold text-zinc-900">마이페이지 전체 프론트엔드 개발</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {['주문·배송 관리', '찜 메뉴', '장바구니', '구매', '작성 후기 조회·수정·삭제', '고객센터'].map((item) => (
                                <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">마이페이지 UI 설계 및 구현</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                주문·배송 관리, 찜 메뉴, 장바구니, 구매 내역, 작성 후기(조회·수정·삭제), 고객센터까지 마이페이지 전 영역의 화면을 React로 구현했습니다. 사용자가 자신의 상태를 한눈에 파악할 수 있도록 정보 구조와 UI 배치를 정리했습니다.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="text-lg font-semibold text-zinc-900">API 연동을 고려한 화면 상태 구성</h5>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">
                                백엔드에서 제공하는 마이페이지 관련 API와 연결되는 것을 전제로 화면을 개발했습니다. 데이터 로딩 전후 상태, 목록형 데이터 렌더링 등을 고려해 컴포넌트를 구성했고, 실제 서비스 화면처럼 자연스럽게 정보가 이어지도록 UI 흐름을 맞췄습니다.
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

function AdwallDetail({ selectedProject }: { selectedProject: SelectedProject }) {
    return (
        <div className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-5xl space-y-10">
                <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Summary</p>
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">AdWall 오퍼월 웹 프론트엔드</h4>
                        <p className="mt-5 text-base leading-8 text-zinc-600">
                            메인 대시보드, 미션 탐색, 참여 히스토리, 리워드샵까지 이어지는 오퍼월 서비스 흐름을 하나의 React SPA로 구현한 프론트엔드 프로젝트입니다.
                            실제 API 없이도 서비스처럼 탐색하고 상호작용할 수 있도록 목업 데이터 중심으로 구조를 설계했고, 데스크탑과 모바일에서 각각 자연스럽게 동작하는 대시보드형 UX를 구성했습니다.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                        <div className="aspect-[4/3] w-full">
                            <img src={adwallImg} alt="AdWall 메인 대시보드 화면" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </section>

                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Background</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            광고/리워드 미션 플랫폼을 가정하고, 단순 랜딩 페이지가 아니라 실제 서비스처럼 보이는 오퍼월 UI를 포트폴리오 수준으로 재구성하는 것을 목표로 진행했습니다.
                            사용자가 포인트 현황을 확인하고, 미션을 탐색하고, 참여 내역과 리워드 교환까지 한 흐름 안에서 경험할 수 있도록 정보 구조를 설계했습니다.
                        </p>
                    </div>
                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Architecture</p>
                        <p className="mt-4 text-base leading-8 text-zinc-600">
                            `react-router-dom` 기반으로 `/`, `/missions`, `/history`, `/reward-shop` 4개 라우트를 구성하고, `AppShell`에서 헤더·푸터·스크롤 탑 버튼을 공통 레이아웃으로 관리했습니다.
                            페이지 전환은 Router가 담당하고, 미션 상세 모달·카테고리 필터·공지 모달·토스트 같은 세부 인터랙션은 각 페이지 내부 state로 분리해 SPA 구조를 명확히 나눴습니다.
                        </p>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Tech Stack</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {selectedProject.stack?.map((item) => (
                            <span key={item} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">{item}</span>
                        ))}
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Core Features</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: '대시보드 홈',
                                desc: '월간 적립 포인트 히어로 카드, 자동 순환 HOT 프로모션 슬라이드, 완료 미션 카드와 요약 KPI 카드로 오퍼월 메인 진입 화면을 구성했습니다.',
                            },
                            {
                                title: '미션 탐색',
                                desc: '카테고리 필터와 추천 미션 카드, 리스트형 미션 섹션을 결합해 홈과 미션 페이지 모두에서 같은 데이터 구조를 재사용하도록 설계했습니다.',
                            },
                            {
                                title: '미션 상세 모달',
                                desc: '미션 정보, 예상 적립 포인트, 참여 단계, CTA를 모달로 제공하고 참여 완료 시 토스트 피드백까지 이어지도록 구현했습니다.',
                            },
                            {
                                title: '히스토리 페이지',
                                desc: '이번 달 참여 건수, 누적 적립, 완료율 KPI와 최근 활동 내역 리스트를 배치해 사용자가 자신의 참여 상태를 한눈에 파악할 수 있게 했습니다.',
                            },
                            {
                                title: '리워드샵',
                                desc: '현재 포인트에 따라 즉시 교환 가능, 조금만 더, 포인트 부족 상태가 갈리는 리워드 카드 구조를 만들고 교환 흐름을 서비스형 UI로 정리했습니다.',
                            },
                            {
                                title: '모바일 최적화',
                                desc: '햄버거 메뉴, 가로 스와이프 카테고리, 모바일 전용 카드 재배치와 대시보드 요약 바텀시트형 모달로 작은 화면에 맞는 탐색 경험을 구성했습니다.',
                            },
                        ].map((feature) => (
                            <div key={feature.title} className="rounded-2xl bg-zinc-50 p-5">
                                <h5 className="text-sm font-semibold text-zinc-900">{feature.title}</h5>
                                <p className="mt-2 text-sm leading-7 text-zinc-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Implementation Points</p>
                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">라우팅 + 공통 레이아웃</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    `BrowserRouter`와 4개 메인 라우트로 서비스 흐름을 분리하고, `AppShell`에서 Header, Footer, ScrollToTopButton을 공통 처리했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    페이지 전환 시 스크롤을 상단으로 초기화해 실제 서비스처럼 자연스럽게 이동하도록 구성했습니다.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-zinc-200 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">상태 관리와 UX 디테일</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    `selectedOffer`, `selectedCategory`, `noticeOpen`, `activeDashboardModal`, `toastVisible` 상태를 분리해 모달/필터/토스트 흐름을 관리했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    ESC 닫기, 배경 클릭 닫기, body scroll lock, 자동 사라지는 토스트 등 서비스형 인터랙션을 구현했습니다.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">데이터 중심 설계</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    `mockData.ts` 한 파일에 네비게이션, 사용자 요약, 카테고리, 미션, 히스토리, 리워드 데이터를 모아 API 교체가 쉬운 구조로 정리했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    타입 정의를 함께 두어 카드형 UI, 리스트형 UI, 모달 UI가 같은 데이터를 서로 다른 방식으로 안전하게 재사용하도록 설계했습니다.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-zinc-200 p-5">
                            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">반응형 대시보드 UI</h5>
                            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    데스크탑에서는 카드 밀도와 정보량을 높이고, 모바일에서는 우선순위가 높은 정보부터 보이도록 `2 + 1` 카드 배치와 스와이프형 카테고리 UI를 적용했습니다.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                                    홈과 미션 페이지에서 카테고리, 추천 미션, 리스트 섹션을 공용 컴포넌트로 재사용해 일관된 화면 경험을 유지했습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Screenshots</p>
                    <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="overflow-hidden rounded-2xl border border-zinc-200">
                            <img src={adwallImg} alt="AdWall 데스크탑 메인 화면" className="w-full object-cover" />
                            <p className="px-4 py-2 text-xs text-zinc-400">데스크탑 메인 대시보드</p>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                            <div className="flex h-full items-center justify-center p-4">
                                <img src={adwallMobileImg} alt="AdWall 모바일 화면" className="max-h-[560px] w-auto rounded-[24px] object-contain shadow-sm" />
                            </div>
                            <p className="px-4 py-2 text-xs text-zinc-400">모바일 대표 화면</p>
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
        if (selectedProject.type === "biolens-detail") {
            return <BioLensDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "review-detail") {
            return <ReviewDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "chartinsight-detail") {
            return <ChartInsightDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "portfolio-detail") {
            return <PortfolioDetail selectedProject={selectedProject} />
        }
        if (selectedProject.type === "adwall-detail") {
            return <AdwallDetail selectedProject={selectedProject} />
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
    const mainProjects = projects.filter((project) => project.group === "main")
    const vibeProjects = projects
        .filter((project) => project.group === "vibe")
        .sort((a, b) => {
            if (a.title.includes("AdWall")) return -1
            if (b.title.includes("AdWall")) return 1
            return 0
        })

    const handleOpenProject = (project: ProjectItem) => {
        if (project.detailType === "biolens-detail") {
            setSelectedProject({
                title: project.title,
                type: "biolens-detail",
                githubUrl: project.githubUrl,
                description: project.description,
                stack: project.stack,
                liveUrl: project.liveUrl,
            })
        } else if (project.detailType === "review-detail") {
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
        } else if (project.detailType === "adwall-detail") {
            setSelectedProject({
                title: project.title,
                type: "adwall-detail",
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
                        프로젝트
                    </h2>
                </div>

                <div className="mt-10">
                    <div className="flex items-end justify-between gap-4 border-b border-zinc-200 pb-4">
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                주요 프로젝트
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-zinc-500">
                                팀 프로젝트와 개인 프로젝트 중심으로 정리한 작업들입니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {mainProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                onOpen={handleOpenProject}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <div className="flex items-end justify-between gap-4 border-b border-zinc-200 pb-4">
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                Vibe Code 프로젝트
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-zinc-500">
                                리서치와 설계를 먼저 정리한 뒤 빠르게 구현한 서비스형 프론트엔드 프로젝트입니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {vibeProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                onOpen={handleOpenProject}
                            />
                        ))}
                    </div>
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
