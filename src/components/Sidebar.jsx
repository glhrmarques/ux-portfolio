import { Link } from 'react-router-dom'

export default function Sidebar({ variant = 'inner' }) {
  const isHome = variant === 'home'

  if (isHome) {
    return (
      <aside className="home-open-aside w-full lg:w-[240px] shrink-0 lg:sticky lg:top-0 lg:self-start hidden lg:flex flex-col gap-6 px-6 py-12 lg:px-6 lg:py-[120px] border-b border-[#d9d9d9] lg:border-b-0">
        <div className="w-full max-w-[184px] aspect-[184/184] max-h-[184px] lg:max-h-none bg-[#1e1e1e] rounded-none lg:rounded-none overflow-hidden" role="img" aria-label="Foto de perfil">
          <img src="/images/myself-01.png" alt="Guilherme Marques" className="w-full h-full object-cover" />
        </div>
        <nav className="flex flex-col w-full" aria-label="Navegação por seções">
          <a
            href="#page-top"
            className="home-nav-scroll-top link-underline-ltr block w-full border-b border-[#d9d9d9] border-solid px-3 py-6 text-[18px] font-semibold text-[#1e1e1e]"
            onClick={(e) => {
              e.preventDefault()
              const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches
              window.scrollTo({ top: 0, left: 0, behavior: instant ? 'auto' : 'smooth' })
              if (window.history && history.replaceState) {
                history.replaceState(null, '', window.location.pathname + window.location.search)
              }
            }}
          >
            Intro
          </a>
          <a href="#work" className="link-underline-ltr block w-full border-b border-[#d9d9d9] border-solid px-3 py-6 text-[18px] font-semibold text-[#1e1e1e]">Trabalhos</a>
          <a href="#writing" className="link-underline-ltr block w-full border-b border-[#d9d9d9] border-solid px-3 py-6 text-[18px] font-semibold text-[#1e1e1e]">Artigos</a>
        </nav>
      </aside>
    )
  }

  return (
    <aside className="w-full lg:w-[240px] shrink-0 lg:sticky lg:top-0 lg:self-start hidden lg:flex flex-col gap-6 px-6 py-12 lg:px-6 lg:py-[120px] border-b border-[#d9d9d9] lg:border-b-0">
      <div className="w-full aspect-[229/229] max-h-[229px] lg:max-h-none bg-[#1e1e1e] rounded-none overflow-hidden" role="img" aria-label="Foto de perfil">
        <img src="/images/myself-01.png" alt="Guilherme Marques" className="w-full h-full object-cover" />
      </div>
      <nav className="flex flex-col w-full" aria-label="Navegação por seções">
        <Link to="/" className="link-underline-ltr block w-full border-b border-[#d9d9d9] border-solid px-3 py-6 text-[18px] font-semibold text-[#1e1e1e]">Início</Link>
        <Link to="/#work" className="link-underline-ltr block w-full border-b border-[#d9d9d9] border-solid px-3 py-6 text-[18px] font-semibold text-[#1e1e1e]">Trabalhos</Link>
        <Link to="/#writing" className="link-underline-ltr block w-full border-b border-[#d9d9d9] border-solid px-3 py-6 text-[18px] font-semibold text-[#1e1e1e]">Artigos</Link>
      </nav>
    </aside>
  )
}
