import profileImg from "../assets/profileimg.jpg";

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
                            UI 너머 사용자 여정 전체를
                            <br />
                            설계하는 프론트엔드 개발자
                        </h2>
                    </div>

                    <div className="group mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:mx-0 md:max-w-[350px]">
                        <div className="aspect-[3/4] w-full">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div className="grid gap-4 border-l border-zinc-200 pb-6 pl-5 transition duration-300 sm:grid-cols-2 sm:pl-8">
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
                            <p className="mt-1.5 text-xs leading-5 text-zinc-400">
                                인공지능 기초 · Java · 자료구조 · 운영체제 · 데이터베이스 시스템 이론 · 임베디드소프트웨어
                            </p>
                        </div>

                        <div className="border-b border-zinc-200 pb-3 sm:col-span-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Double Major</p>
                            <p className="mt-2 text-sm font-medium text-zinc-900">스마트금융SW융합전공</p>
                            <p className="mt-1.5 text-xs leading-5 text-zinc-400">
                                미시 경제학 · 금융기관론 · 주택금융론
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 border-l border-zinc-200 pl-5 text-sm leading-7 text-zinc-600 sm:pl-8 sm:text-base sm:leading-8">
                        <p>
                            인공지능융합학과에서 알고리즘과 데이터 기반 사고를 배우고, 멀티캠퍼스 풀스택 아카데미를 거쳐 Java부터 Spring Boot, React, TypeScript까지 실무 중심으로 익혔습니다. 팀 프로젝트와 개인 프로젝트를 통해 기획부터 배포까지 직접 경험하며 서비스 전체 흐름을 이해하는 개발자로 성장해왔습니다.
                        </p>
                        <p>
                            단순히 화면을 만드는 것에 그치지 않고, 사용자가 불편함을 느끼지 않는 인터페이스를 만드는 것을 중요하게 생각합니다. 팀 안에서는 백엔드와 적극적으로 소통하며 서비스 흐름을 함께 설계하고, 작은 디테일도 놓치지 않는 프론트엔드 개발자로 성장하고 있습니다.
                        </p>
                    </div>

                    <div className="border-l border-zinc-200 pl-5 sm:pl-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Timeline</p>
                        <div className="mt-6 space-y-8">
                            <div className="relative">
                                <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2020.04 — 2020.10</p>
                                <h4 className="mt-1.5 text-sm font-semibold text-zinc-900">Java 스터디 & 안드로이드 앱 개발</h4>
                                <p className="mt-1 text-sm text-zinc-500">모임 연결 플랫폼 '모여봐' 앱 프로젝트</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2021.10.30</p>
                                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                    <h4 className="text-sm font-semibold text-zinc-900">교육혁신센터 실무코칭아카데미 Start-App 캠프&경진대회</h4>
                                    <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-white">수상</span>
                                </div>
                                <p className="mt-1 text-sm text-zinc-500">색약자를 위한 사진 RGB 변환 애플리케이션 개발</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2021.11.13</p>
                                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                    <h4 className="text-sm font-semibold text-zinc-900">「Ticket to the Dream」 대학생 아이디어톤 경진대회</h4>
                                    <span className="rounded-full border border-zinc-300 px-2.5 py-0.5 text-xs font-medium text-zinc-500">참여</span>
                                </div>
                                <p className="mt-1 text-sm text-zinc-500">PC방에서의 서빙 로봇 활용 아이디어</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2022.09.03</p>
                                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                    <h4 className="text-sm font-semibold text-zinc-900">융합SW교육원 SW실무아카데미 캠프 경진대회</h4>
                                    <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-white">수상</span>
                                </div>
                                <p className="mt-1 text-sm text-zinc-500">여행 플래너 플랫폼 웹 기획 & 퍼블리셔 프로토타입 제작</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2025.06 — 2025.12</p>
                                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                    <h4 className="text-sm font-semibold text-zinc-900">[현대이지웰] Java 풀스택 개발자 아카데미 6회차</h4>
                                    <span className="rounded-full border border-zinc-300 px-2.5 py-0.5 text-xs font-medium text-zinc-500">수료</span>
                                </div>
                                <p className="mt-1 text-sm text-zinc-500">멀티캠퍼스 주관 Java 기반 풀스택 개발 교육 과정 수료</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white sm:-left-[37px]"></span>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">2025.10 — 2025.12</p>
                                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                    <h4 className="text-sm font-semibold text-zinc-900">화장품 쇼핑몰 Re:View 개발 프로젝트</h4>
                                    <span className="rounded-full border border-zinc-300 px-2.5 py-0.5 text-xs font-medium text-zinc-500">Front</span>
                                </div>
                                <p className="mt-1 text-sm text-zinc-500">피부 타입 기반 맞춤 화장품 추천 리뷰 쇼핑몰 6인 팀 개발</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} export default About
