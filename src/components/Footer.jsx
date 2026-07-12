import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'


const contributionColors = ['#151a1f', '#093318', '#1a612d', '#4fcc62', '#4fff6a']

export default function Footer() {

  const darkRoutes = ['/projects/inv-ds',]

  const isDarkPage = darkRoutes.includes(location.pathname)
  const isVisible = isDarkPage ? 'hidden' : 'block'

  const copyPhone = useCallback((e) => {
    navigator.clipboard.writeText('+5511961747490').then(() => {
      e.target.textContent = 'Copied!'
      setTimeout(() => { e.target.textContent = '+55 1196174-7490' }, 2000)
    })
  }, [])

  const linkClassName =
    'border-b border-[#d9d9d9] py-2 text-[16px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity'

  return (
    <footer className={`w-full border-t border-[#dcdbdb] ${isVisible}`}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 pt-20 pb-[120px] md:px-[240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-[32px] leading-none text-[#1e1e1e]">
            Glhrmarques
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-serif text-[16px] leading-[1.5] text-black">
              — Always commited
            </p>
            <div className="flex items-center gap-2" aria-hidden="true">
              {contributionColors.map((color) => (
                <div
                  key={color}
                  className="size-6 shrink-0 rounded-[4px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/glhrmarques/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Linkedin
            </a>
            <a
              href="https://github.com/glhrmarques"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Github
            </a>
            <button
              type="button"
              onClick={copyPhone}
              className={`${linkClassName} cursor-pointer bg-transparent whitespace-nowrap`}
            >
              +55 1196174-7490
            </button>
          </div>
          <p className="text-[18px] text-[#7f7f7f]">
            Designed and coded by Guilherme Marques
          </p>
        </div>
      </div>
    </footer>
  )
}
