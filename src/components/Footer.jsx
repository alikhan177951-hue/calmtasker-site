import LogoMark from './LogoMark.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark size={36} />
          <span className="text-sm font-semibold text-cream">KaamTasker</span>
        </a>
        <p className="max-w-md text-xs leading-relaxed text-mist/70">
          Website, iOS, Android, and software development. Pronounced CalmTasker / ComTasker. Not a
          marketplace.
        </p>
        <p className="text-xs text-mist/50">© {new Date().getFullYear()} KaamTasker · kaamtasker.com</p>
      </div>
    </footer>
  )
}
