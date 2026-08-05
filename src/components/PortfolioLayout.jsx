import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import BottomBar from './BottomBar'

export default function PortfolioLayout({ variant = 'inner' }) {
  const location = useLocation()

  const darkRoutes = ['/projects/inv-ds',]

  const isDarkPage = darkRoutes.includes(location.pathname)
  const bg = isDarkPage ? 'bg-[#000000]' : 'bg-[#FAFAFA]'

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
      <div className={`mx-auto w-full flex flex-col min-h-screen ${bg}`}>
        <Outlet />
      </div>
      <Footer />
      <BottomBar />
    </>
  )
}
