import type { SkillGroup } from "../data/skillGroups"

function SkillGroupSection({ group }: { group: SkillGroup }) {
    return (
        <article className="border-t border-zinc-200 pt-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="md:w-48">
                    <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                        {group.title}
                    </h3>
                </div>

                <div className="flex-1">
                    <div className="flex flex-wrap gap-2.5">
                        {group.items.map((item) => (
                            <span
                                key={item.name}
                                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                            >
                                {item.icon && (
                                    <img
                                        src={`https://cdn.simpleicons.org/${item.icon}`}
                                        alt=""
                                        className="h-4 w-4"
                                    />
                                )}
                                {item.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SkillGroupSection
