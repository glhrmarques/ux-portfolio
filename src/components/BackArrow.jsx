import { Link } from 'react-router-dom'

export default function BackArrow({ to = '/#work' }) {

  return (
    <Link to={to} className={`w-[56px] h-[56px] flex items-center justify-center bg-[#fffff] hover:bg-[#000000]/10`} aria-label="Voltar ao início">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" 
        />
      </svg>
    </Link>
  )
}
