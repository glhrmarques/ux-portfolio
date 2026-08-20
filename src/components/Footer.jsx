import { useCallback } from 'react'

const contributionColors = ['#151a1f', '#093318', '#1a612d', '#4fcc62', '#4fff6a']

export default function Footer() {

  const copyPhone = useCallback((e) => {
    navigator.clipboard.writeText('+5511961747490').then(() => {
      e.target.textContent = 'Copiado'
      setTimeout(() => { e.target.textContent = '+55 1196174-7490' }, 2000)
    })
  }, [])

  const linkClassName =
    'border-b border-[#d9d9d9] py-2 text-[16px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity'

  return (
    <footer className="flex justify-center mx-auto w-full min-h-[50dvh] bg-[#000000]">
      <div className="flex flex-col justify-center items-center gap-8">
          <img 
          src="/images/myself-01.png" 
          alt="Guilherme Marques" 
          className="w-[64px] h-[64px] saturate-0 object-cover" 
          />
          <div className="flex flex-row gap-6">
          <a
            href="https://www.linkedin.com/in/glhrmarques/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClassName} text-white`}
            >
              Linkedin
          </a>
          <a
          href="https://github.com/glhrmarques"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClassName} text-white`}
          >
            Github
          </a>
          <button
            type="button"
            onClick={copyPhone}
            className={`${linkClassName} cursor-pointer bg-transparent whitespace-nowrap text-white`}
            >
              +55 1196174-7490
          </button>
        </div>
      <p className="text-[16px] lg:text-[18px] font-[400] text-white/50">Designed and Coded by Guilherme Marques</p>
      </div>
    </footer>
  )
}
