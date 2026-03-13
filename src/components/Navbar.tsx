function Navbar() {
    const menus = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
                <a href="#home" className="group inline-flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-900 transition duration-300 hover:-translate-y-0.5">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-zinc-900 transition duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    SeungHwan.OH
                </a>

                <nav>
                    <ul className="flex w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 p-2 text-sm font-medium text-zinc-600 shadow-sm md:w-auto md:rounded-full md:p-1">
                        {menus.map((menu) => (
                            <li key={menu.href}>
                                <a
                                    href={menu.href}
                                    className="rounded-full px-3 py-2 text-xs transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white sm:px-4 sm:text-sm"
                                >
                                    {menu.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar