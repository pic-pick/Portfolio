export type SkillItem = {
    name: string
    icon?: string
}

export type SkillGroup = {
    title: string
    items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        items: [
            { name: 'React',            icon: 'react' },
            { name: 'Vue.js 3',         icon: 'vuedotjs' },
            { name: 'Composition API' },
            { name: 'TypeScript',       icon: 'typescript' },
            { name: 'JavaScript',   icon: 'javascript' },
            { name: 'HTML',         icon: 'html5' },
            { name: 'CSS',          icon: 'css' },
            { name: 'Tailwind CSS', icon: 'tailwindcss' },
            { name: 'Axios',        icon: 'axios' },
            { name: 'CSS Modules' },
        ],
    },
    {
        title: 'Backend',
        items: [
            { name: 'Java',        icon: 'openjdk' },
            { name: 'Spring Boot', icon: 'springboot' },
            { name: 'Python',      icon: 'python' },
            { name: 'REST API' },
        ],
    },
    {
        title: 'Tools',
        items: [
            { name: 'Git',    icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Figma',  icon: 'figma' },
            { name: 'Notion', icon: 'notion' },
            { name: 'Vite',   icon: 'vite' },
        ],
    },
]
