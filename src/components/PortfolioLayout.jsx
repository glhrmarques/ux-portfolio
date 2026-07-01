import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

export default function PortfolioLayout({ variant = 'inner' }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <div className="mx-auto w-full max-w-[1440px] flex flex-col min-h-screen lg:flex-row">
        <Sidebar variant={variant} />
        <Outlet />
      </div>
      <MobileMenu variant={variant} />
      <Footer />
    </>
  )
}
