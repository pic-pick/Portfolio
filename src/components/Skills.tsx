import { skillGroups } from "../data/skillGroups"
import SkillGroupSection from "./SkillGroupSection"

function Skills() {
    return (
        <section id="skills" className="border-b border-zinc-200 bg-white py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
                    <div className="md:sticky md:top-28">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Skills
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            기술 스택
                        </h2>
                        <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600 sm:text-base">
                            프로젝트를 진행하며 사용해온 주요 기술과 도구입니다.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {skillGroups.map((group) => (
                            <SkillGroupSection key={group.title} group={group} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills