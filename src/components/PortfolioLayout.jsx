import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BottomBar from './BottomBar'

export default function PortfolioLayout({ variant = 'inner' }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location.pathname])

  return (
    <>
      <div className="mx-auto w-full max-w-[1440px] flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
      <BottomBar />
    </>
  )
}
