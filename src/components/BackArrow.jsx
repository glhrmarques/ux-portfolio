import { Link, useLocation } from 'react-router-dom'

export default function BackArrow({ to = '/#work' }) {

  const location = useLocation()

  const darkRoutes = ['/projects/inv-ds']
  const isDarkPage = darkRoutes.includes(location.pathname)
  const stroke = isDarkPage ? 'stroke-[#FAFAFA]' : 'stroke-[#000000]'
  const border = isDarkPage ? 'border-[#FAFAFA]' : 'border-[#000000]'


  return (
    <Link to={to} className={`w-[40px] h-[40px] rounded-[500px] border ${border} flex items-center justify-center`} aria-label="Voltar ao início">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
         d="M19 12H5M5 12L12 19M5 12L12 5"
         className={stroke}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       </svg>
    </Link>
  )
}
