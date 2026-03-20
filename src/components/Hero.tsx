import mainProfileImg from "../assets/mainprofileimg2.jpg"

function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden border-b border-zinc-200 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(34,197,94,0.12),_transparent_28%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)] py-16 sm:py-20"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-60px] top-20 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl motion-safe:animate-pulse" />
                <div className="absolute bottom-10 right-[-40px] h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl motion-safe:animate-pulse" />
            </div>

            <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12">
                <div className="max-w-3xl">
                    <p className="mb-4 inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600 shadow-sm">
                        Frontend Developer Portfolio
                    </p>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 transition duration-500 sm:text-4xl md:text-5xl lg:text-6xl">
                        사용자의 경험을
                        <br />
                        <span className="whitespace-nowrap">더 자연스럽게 만드는 개발자</span>
                        <br />
                        오승환입니다.
                    </h1>
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                        프론트엔드 개발자로서 작은 디테일이 사용자 경험을 만든다고 믿습니다. 화면의 섬세한 요소와 직관적인 상호작용을 통해 사람들이 자연스럽게 서비스를 이용할 수 있도록 고민하며 개발합니다.
                        <br />
                        <br />
                        사용자의 특별한 경험을 기술로 연결하고 더 나은 서비스로 이어질 수 있도록 문제를 고민하고 해결합니다. 사용자 피드백과 테스트를 통해 발전하는 서비스를 만드는 것이 저의 목표입니다.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                            href="#projects"
                            className="rounded-2xl bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-zinc-700 sm:w-auto"
                        >
                            프로젝트 보기
                        </a>
                        <a
                            href="#contact"
                            className="rounded-2xl border border-zinc-300 bg-white/80 px-5 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-zinc-100 sm:w-auto"
                        >
                            연락하기
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-600 sm:mt-10 sm:gap-3">
                        <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">React</span>
                        <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">TypeScript</span>
                        <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">Spring Boot</span>
                        <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">REST API</span>
                    </div>
                </div>

                <div className="relative hidden md:block transition duration-500 hover:-translate-y-1">
                    <div className="absolute -left-8 top-8 h-24 w-24 rounded-full border border-zinc-200/80 bg-white/70 backdrop-blur" />
                    <div className="absolute right-8 top-0 h-16 w-16 rounded-3xl bg-zinc-900/90" />
                    <div className="absolute bottom-10 left-10 h-20 w-20 rounded-[28px] border border-indigo-200/70 bg-indigo-100/70 backdrop-blur" />
                    <div className="relative ml-auto w-full max-w-sm">
                        <div className="overflow-hidden rounded-[40px] border border-white/70 bg-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:shadow-[0_40px_100px_rgba(15,23,42,0.12)]">
                            <div className="aspect-[3/4] w-full">
                                <img
                                    src={mainProfileImg}
                                    alt="오승환 프로필 사진"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero