import type { ProjectItem } from "../types/project"

type ProjectCardProps = {
    project: ProjectItem
    onOpen: (project: ProjectItem) => void
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
    return (
        <article className="group border-t border-zinc-200 pt-6 transition duration-300 hover:translate-x-1 hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-zinc-500">{project.info}</p>

                <div className="flex items-center gap-3">
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-200 group-hover:scale-110"
                            title="배포 사이트"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-zinc-700">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    ) : null}
                    {project.githubUrl ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-200 group-hover:scale-110"
                            title="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-zinc-700">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.05 11.05 0 015.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.42-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </a>
                    ) : (
                        <span className="opacity-30">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-zinc-400">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.05 11.05 0 015.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.42-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>

            {project.image && (
                <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 transition duration-300 group-hover:shadow-lg">
                    <div className="aspect-[4/3] w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>
            )}

            <h3 className="mt-4 text-xl font-semibold text-zinc-900 transition duration-300 group-hover:translate-x-1">
                {project.title}
            </h3>

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
                onClick={() => onOpen(project)}
                className={`mt-6 flex w-full items-center justify-between text-sm font-medium transition duration-300 ${
                    project.detailType || project.pdfUrl
                        ? "text-zinc-900 hover:text-zinc-600"
                        : "cursor-default text-zinc-400"
                }`}
            >
                <span>{project.detailType || project.pdfUrl ? "자세히 보기" : "준비 중"}</span>
                <span
                    className={`transition duration-200 ${
                        project.detailType || project.pdfUrl ? "group-hover:translate-x-1" : ""
                    }`}
                >
          →
        </span>
            </button>
        </article>
    )
}

export default ProjectCard