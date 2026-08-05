import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import CustomCursor from '../components/CustomCursor'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function HomePage() {
  const copyPhone = useCallback((e) => {
    navigator.clipboard.writeText('+5511961747490').then(() => {
      e.target.textContent = 'Copiado!'
      setTimeout(() => { e.target.textContent = '+55 1196174-7490' }, 2000)
    })
  }, [])

  return (
    <main className="mx-auto w-full max-w-[1440px] md:px-[24px]">
      <CustomCursor />

      {/* Hero */}
      <section className="grid grid-cols-3 gap-3 min-h-[60dvh] items-center py-[40px]">
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

        <div className="flex flex-col gap-2"> 
          <motion.div 
              className="flex fle-row gap-3 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
            <p className="text-[22px] text-black leading-none font-semibold">Guilherme Marques</p>
            <div className="w-[4px] h-[4px] bg-[#000000]"></div>
            <p className="text-[22px] text-black leading-none font-semibold">Product Designer</p>
          </motion.div>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-[16px] text-black/50">
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
      className="grid grid-cols-3 gap-3">
        {/* First image */}
        <Link to="/projects/inv-ds" className="cursor-label-target flex flex-col gap-4">
        <span>App de vendedores</span>
          <div className="
            flex items-center justify-center h-[540px] w-full p-6
            bg-[url('/images/cover-background-1.png')] overflow-hidden
            bg-no-repeat bg-cover bg-center group
            ">
            <img 
              src="/images/cover-projects-1.png"
              alt="Rep Sales App" 
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-400" 
            />
          </div>
        </Link>

        <Link to="/projects/inv-ds" className="cursor-label-target flex flex-col gap-4">
        <span>App de vendedores</span>
          <div className="
            flex items-center justify-center h-[540px] w-full p-6
            bg-[url('/images/cover-background-2.png')] overflow-hidden
            bg-no-repeat bg-cover bg-center group
            ">
            <video 
              src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-400" 
            />
          </div>
        </Link>

        <Link to="/projects/inv-ds" className="cursor-label-target flex flex-col gap-4">
        <span>App de vendedores</span>
          <div className="
            flex items-center justify-center h-[540px] w-full p-6
            bg-[url('/images/cover-background-3.png')] overflow-hidden
            bg-no-repeat bg-cover bg-center group
            ">
            <img 
              src="/images/cover-projects-2.png"
              alt="Rep Sales App" 
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-400" 
            />
          </div>
        </Link>
      </motion.section>
    </main>
  )
}
