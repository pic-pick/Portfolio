function Contact() {
    return (
        <section id="contact" className="border-t border-zinc-200 bg-white py-24">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Contact
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 transition duration-300 sm:text-4xl">
                    포트폴리오를 봐주셔서 감사합니다
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                    프로젝트, 협업 또는 프론트엔드 개발과 관련된 이야기 언제든 환영합니다.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="mailto:seunghwanoo@kakao.com"
                        className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-md"
                    >
                        Email
                        <span className="transition group-hover:translate-x-1">→</span>
                    </a>

                    <a
                        href="https://github.com/pic-pick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-md"
                    >
                        GitHub
                        <span className="transition group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
} export default Contact
