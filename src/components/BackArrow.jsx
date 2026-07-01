import { Link } from 'react-router-dom'

export default function BackArrow({ to = '/#work' }) {
  return (
    <Link to={to} className="w-6 h-6 flex items-center justify-center" aria-label="Back to home">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}
