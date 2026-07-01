import { useState, useCallback, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MobileMenu({ variant = 'portfolio' }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden'
      return !prev
    })
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  const isHome = variant === 'home'

  const navLinks = isHome
    ? [
        { to: '/', hash: '#page-top', label: 'Intro' },
        { to: '/', hash: '#work', label: 'Work' },
        { to: '/', hash: '#writing', label: 'Writing' },
      ]
    : [
        { to: '/', label: 'Intro' },
        { to: '/#work', label: 'Work' },
        { to: '/#writing', label: 'Writing' },
      ]

  return (
    <>
      <button
        className={`mobile-menu-btn${isOpen ? ' open' : ''}`}
        onClick={toggle}
        aria-label="Open menu"
      >
        <svg className="menu-icon-inactive" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <svg className="menu-icon-active" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <div className={`mobile-menu-overlay${isOpen ? ' open' : ''}`}>
        <div className="flex flex-col items-center gap-10">
          {variant !== 'home' && (
            <div className="w-[184px] aspect-square bg-[#1e1e1e] overflow-hidden">
              <img src="/images/myself-01.png" alt="Guilherme Marques" className="w-full h-full object-cover" />
            </div>
          )}
          <nav className="flex flex-col items-center gap-10">
            {navLinks.map(link => {
              if (isHome && link.hash) {
                return (
                  <a
                    key={link.label}
                    href={link.hash}
                    className="text-[32px] font-medium text-[#1e1e1e]"
                    onClick={close}
                  >
                    {link.label}
                  </a>
                )
              }
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[32px] font-medium text-[#1e1e1e]"
                  onClick={close}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
