export type ProjectDetailType = 'pdf' | 'review-detail' | 'portfolio-detail'

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