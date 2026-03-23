export type ProjectDetailType = 'pdf' | 'biolens-detail' | 'review-detail' | 'portfolio-detail' | 'daesul-detail' | 'chartinsight-detail' | 'dangdang-detail'

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