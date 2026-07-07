import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const isHome = location.pathname === '/'

  const darkRoutes = ['/projects/inv-ds',]
  
  const isDarkPage = darkRoutes.includes(location.pathname)
  const bg = isDarkPage ? 'bg-[#000000]' : 'bg-[#FAFAFA]'
  const icon = isDarkPage ? 'bg-[#FAFAFA]' : 'bg-[#000000]'
  const text = isDarkPage ? 'text-white' : 'text-[#1e1e1e]'

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className={`sticky top-0 z-20 flex items-center justify-between px-6 py-6 md:px-[240px] ${bg}`}>
        <Link to="/" className={`font-semibold text-[18px] ${text}`}>
          Guilherme Marques
        </Link>
        
        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-10 text-[16px] ${text}`}>
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

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 ${icon} transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 ${icon} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 ${icon} transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 z-10 ${bg} flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {isHome ? (
          <>
            <a href="#intro" onClick={closeMenu} className="text-[24px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity">Home</a>
            <a href="#projects" onClick={closeMenu} className="text-[24px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity">Projects</a>
            <a href="#writing" onClick={closeMenu} className="text-[24px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity">Writing</a>
          </>
        ) : (
          <>
            <Link to="/" onClick={closeMenu} className={`text-[24px] font-medium ${text} hover:opacity-70 transition-opacity`}>Home</Link>
            <Link to="/#projects" onClick={closeMenu} className={`text-[24px] font-medium ${text} hover:opacity-70 transition-opacity`}>Projects</Link>
            <Link to="/#writing" onClick={closeMenu} className={`text-[24px] font-medium ${text} hover:opacity-70 transition-opacity`}>Writing</Link>
          </>
        )}
      </div>
    </>
  )
}
