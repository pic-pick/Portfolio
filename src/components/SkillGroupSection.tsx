function SkillGroupSection({ group }: { group: { title: string; items: string[] } }) {
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
                                key={item}
                                className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                            >
                {item}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SkillGroupSection