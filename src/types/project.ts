export type ProjectDetailType = 'pdf' | 'biolens-detail' | 'review-detail' | 'portfolio-detail' | 'daesul-detail' | 'chartinsight-detail' | 'dangdang-detail' | 'adwall-detail'
export type ProjectGroup = 'main' | 'vibe'

export type SelectedProject = {
    title: string
    type?: ProjectDetailType
    pdfUrl?: string
    githubUrl?: string
    demoUrl?: string
    description?: string
    stack?: string[]
    liveUrl?: string
}

export type ProjectItem = {
    group: ProjectGroup
    info: string
    title: string
    description: string
    stack: string[]
    pdfUrl?: string
    githubUrl?: string
    demoUrl?: string
    image?: string
    detailType?: ProjectDetailType
    liveUrl?: string
}
