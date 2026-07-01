import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-10 bg-[#FAFAFA] flex items-center justify-between px-6 py-6 md:px-[240px]">
      <Link to="/" className="font-semibold text-[18px] text-[#1e1e1e]">
        Glhrmarques
      </Link>
      <nav className="flex items-center gap-10 text-[16px] text-[#1e1e1e]">
        {isHome ? (
          <>
            <a href="#intro" className="hover:opacity-70 transition-opacity">Home</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
            <a href="#writing" className="hover:opacity-70 transition-opacity">Writing</a>
          </>
        ) : (
          <>
            <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <Link to="/#projects" className="hover:opacity-70 transition-opacity">Projects</Link>
            <Link to="/#writing" className="hover:opacity-70 transition-opacity">Writing</Link>
          </>
        )}
      </nav>
    </header>
  )
}
