import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import CustomCursor from '../components/CustomCursor'
import { useScrollReveal } from '../hooks/useScrollReveal'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function HomePage() {
  useScrollReveal()

  const copyPhone = useCallback((e) => {
    navigator.clipboard.writeText('+5511961747490').then(() => {
      e.target.textContent = 'Copiado!'
      setTimeout(() => { e.target.textContent = '+55 1196174-7490' }, 2000)
    })
  }, [])

  

  return (
    <main className="mx-auto w-full max-w-[1440px] px-[16px]">
      <CustomCursor />

      {/* Hero */}
      <section className="grid md:grid-cols-3 md:gap-3 min-h-[80dvh] md:min-h-[60dvh] items-center py-[40px]">
        <div className="col-start-2">
          <div className="flex flex-col gap-6">

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" w-[64px] h-[64px]">
              <img 
                src="/images/myself-01.png" 
                alt="Guilherme Marques" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            <div className="flex flex-col gap-3"> 
              <motion.div 
                  className="flex fle-row items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  >
                <p className="text-[18px] md:text-[22px] text-black leading-none font-semibold">Guilherme Marques</p>
                <div className="w-[4px] h-[4px] bg-[#000000] mx-3"></div>
                <p className="text-[18px] md:text-[22px] text-black leading-none font-semibold">Product Designer</p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="text-[14px] text-black/60">
                  Projetando com excelência. Desenvolvendo com propósito.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="text-[16px] text-black">Product Designer com 5 anos de experiência focado em marketplaces B2B, Operações de vendas e Ferramentas internas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="flex flex-row gap-6">
              <a 
                href="https://www.linkedin.com/in/glhrmarques/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-b border-[#d9d9d9] py-2 text-[14px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity"
              >
                Linkedin
              </a>
              <a 
                href="https://github.com/glhrmarques" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-b border-[#d9d9d9] py-2 text-[14px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity"
              >
                Github
              </a>
              <button 
                onClick={copyPhone} 
                className="border-b border-[#d9d9d9] py-2 text-[14px] font-medium text-[#1e1e1e] whitespace-nowrap cursor-pointer bg-transparent hover:opacity-70 transition-opacity"
              >
                +55 1196174-7490
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project */}
      <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }} 
      className="md:grid md:grid-cols-3 gap-3">
        {/* First image */}
        <Link to="/projects/rep-sales-app" className="cursor-label-target flex flex-col gap-4 group pb-[80px]">
          <div className="flex flex-row justify-between">
            <p className="text-[16px] text-black leading-none font-regular">App de Vendas</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" stroke="currentColor" 
              className="size-6 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>

          <div className="
            flex items-center justify-center h-[540px] w-full p-10
            bg-[url('/images/cover-background-1.png')] overflow-hidden
            bg-no-repeat bg-cover bg-center relative
            ">
            <img 
              src="/images/cover-projects-1.png"
              alt="Rep Sales App" 
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-600" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>

        <Link to="/projects/seller-platform" className="cursor-label-target flex flex-col gap-4 group pb-[80px]">
          <div className="flex flex-row justify-between">
            <p className="text-[16px] text-black leading-none font-regular">Rotas para Consultores</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" stroke="currentColor" 
              className="size-6 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div className="
            flex items-center justify-center h-[540px] w-full p-10
            bg-[url('/images/cover-background-2.png')] overflow-hidden
            bg-no-repeat bg-cover bg-center relative
            ">
            <video 
              src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-600" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          </div>
        </Link>

        <Link to="/projects/inv-ds" className="cursor-label-target flex flex-col gap-4 group">
          <div className="flex flex-row justify-between">
            <p className="text-[16px] text-black leading-none font-regular">Design System</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" stroke="currentColor" 
              className="size-6 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div className="
            flex items-center justify-center h-[540px] w-full p-10
            bg-[url('/images/cover-background-3.png')] overflow-hidden
            bg-no-repeat bg-cover bg-center relative
            ">
            <img 
              src="/images/cover-projects-2.png"
              alt="Rep Sales App" 
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-600" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          </div>
        </Link>
      </motion.section>
    </main>
  )
}
