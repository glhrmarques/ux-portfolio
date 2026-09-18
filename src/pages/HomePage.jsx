import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import CustomCursor from '../components/CustomCursor'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

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
    <>
    <main className="mx-auto w-full max-w-screen-2xl px-4 lg:px-[40px]">
      <CustomCursor />

      {/* Hero */}
      <section className="grid md:grid-cols-3 md:gap-3 min-h-[80dvh] md:min-h-[60dvh] items-center py-[40px]">
        <div className="col-start-2">
          <div className="flex flex-col">

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[96px] h-[96px]">
              <img 
                src="/images/myself-01.png" 
                alt="Guilherme Marques" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            <div className="flex flex-col gap-3"> 
              <motion.div 
                  className="flex fle-row items-center mt-[32px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  >
                <p className="font-['Source_Serif_4',sans-serif] text-[18px] whitespace-nowrap text-black leading-none font-[500]">Guilherme Marques</p>
                <div className="w-[4px] h-[4px] bg-[#000000] mx-3"></div>
                <p className="font-['Source_Serif_4',sans-serif] text-[18px] text-black leading-none font-[500]">Product Designer</p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="text-[16px] leading-[1.5] text-black/50 mt-[16px]">5 anos de experiência conectando Design centrado no usuário com impacto estratégico ao negócio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="flex flex-row gap-6 mt-[16px]">
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
              <a 
                href="https://drive.google.com/file/d/1Nwcng-1mgBUOb2_6L15odxzGj_JlzNa8/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-b border-[#d9d9d9] py-2 text-[14px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity"
              >
                CV
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
      className="md:grid md:grid-cols-3 gap-3 mb-10">
        {/* First image */}
        <Link to="/projects/rep-sales-app" className="cursor-label-target flex flex-col gap-4 group pb-[80px]">
          <div className="flex flex-row justify-between">
            <p className="text-[14px] text-black leading-none font-regular">Escalando a Operação e Construindo Confiança</p>
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
            <p className="text-[14px] text-black leading-none font-regular">Rotas para Consultores</p>
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

        <Link to="/projects/inv-ds" target="_blank" className="cursor-label-target flex flex-col gap-4 group">
          <div className="flex flex-row justify-between">
            <p className="text-[14px] text-black leading-none font-regular">Design System</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" stroke="currentColor" 
              className="size-6 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>

          <div className="
            relative flex flex-col items-center justify-center h-[540px] w-full p-10
            bg-[#000000]
            ">
            <div className="grid grid-cols-2 w-[80px] h-[44px]">
              <div className="h-full w-full bg-[#005BE2]"></div>
              <div className="grid grid-rows-2 w-full h-full">
                <div className="grid grid-cols-2 h-full w-full">
                  <div className="h-full w-full bg-[#363636]"></div>
                  <div className="h-full w-full bg-[#01B971]"></div>
                </div>
                <div className="h-full w-full bg-[#ffffff]"></div>
              </div>
              </div>
            <p
            className="
            text-center text-[36px] font-[700] text-white sm:text-[48px]"
            >
            Inventa<span className="m-0 text-white/50">Ds.</span>
            </p>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          </div>
        </Link>
      </motion.section>
    </main>
    <Footer />
    </>
  )
}
