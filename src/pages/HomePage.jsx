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
    <div className="mx-auto w-full max-w-[1440px] md:px-[24px]">
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
          initial={{ opacity: 0, y: 20 }}
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
      <section className="grid grid-cols-3 gap-3">
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
      </section>



      <main className="flex flex-col gap-[104px] px-6 py-12 pb-20 md:px-[240px] md:py-16">
          {/* Intro */}
          <section id="intro" className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-10">
            <div className="flex flex-col gap-10 max-w-[500px]">
              <motion.h1 
                className="font-['Figtree',sans-serif] text-[44px] font-medium leading-[1.2] text-black "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Senior Product Designer
              </motion.h1>
              <motion.div 
              className="block md:hidden w-[200px] md:w-[260px] aspect-square md:aspect-auto md:self-stretch bg-[#1e1e1e] shrink-0 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                src="/images/myself-01.png" 
                alt="Guilherme Marques" 
                className="block w-full h-full object-cover" 
              />

            </motion.div>
              <div className="flex flex-col gap-6">
                <motion.p 
                  className="font-['Figtree',sans-serif] text-[24px] leading-[1.5] font-medium text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  Focado em marketplaces B2B, operações de vendas e ferramentas internas.
                </motion.p>
                <motion.p 
                  className="font-['Figtree',sans-serif] text-[18px] leading-[1.5] font-regular text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  Criando soluções em{' '}
                  <a 
                    href="https://inventa.com.br/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] underline decoration-solid"
                  >
                    Inventa
                  </a>
                  {' '}para escalar processos do marketplace, reduzir a complexidade operacional e melhorar a performance dos vendedores.
                </motion.p>
                <motion.div 
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                  <a 
                    href="https://www.linkedin.com/in/glhrmarques/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="border-b border-[#d9d9d9] py-2 text-[16px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity"
                  >
                    Linkedin
                  </a>
                  <a 
                    href="https://github.com/glhrmarques" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="border-b border-[#d9d9d9] py-2 text-[16px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity"
                  >
                    Github
                  </a>
                  <button 
                    onClick={copyPhone} 
                    className="border-b border-[#d9d9d9] py-2 text-[16px] font-medium text-[#1e1e1e] whitespace-nowrap cursor-pointer bg-transparent hover:opacity-70 transition-opacity"
                  >
                    +55 1196174-7490
                  </button>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="hidden md:block w-[200px] md:w-[260px] aspect-square md:aspect-auto md:self-stretch bg-[#1e1e1e] shrink-0 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                src="/images/myself-01.png" 
                alt="Guilherme Marques" 
                className="block w-full h-full object-cover" 
              />

            </motion.div>
          </section>

          {/* Projects */}
          <motion.section 
            id="projects" 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <h2 className="font-medium text-[22px] text-black">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <Link to="/projects/rep-sales-app" className="cursor-label-target flex flex-col gap-4 mb-6">
                <div className="w-full h-[380px] bg-[url('/images/background-projects-1.png')] group flex items-end pb-10 justify-center overflow-hidden">
                  <img 
                  src="/images/cover-projects-1.png"
                  alt="Rep Sales App" 
                  className="h-[520px] w-auto object-contain group-hover:scale-105 transition-transform duration-400" 
                  />  
                </div>
                <p className="text-[18px] text-black">App para representantes de vendas</p>
              </Link>

              <Link to="/projects/inv-ds" className="cursor-label-target flex flex-col gap-4 mb-6">
                <div className="w-full h-[380px] bg-[url('/images/background-projects-3.png')] group flex items-center md:p-6 p-6 justify-center overflow-hidden">
                  <img 
                  src="/images/cover-projects-2.png"
                  alt="Rep Sales App" 
                  className="h-auto w-auto object-contain group-hover:scale-105 transition-transform duration-400" 
                  />  
                </div>
                <p className="text-[18px] text-black">Inventa Design System</p>
              </Link>

              <Link to="/projects/seller-platform" className="cursor-label-target md:col-span-2 flex flex-col gap-4 mb-6">
                <div className="w-full h-auto bg-[url('/images/background-projects-2.png')] justify-center md:p-10 p-3 group overflow-hidden">
                  <video 
                    src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-400" 
                  />  
                </div>
                <p className="text-[18px] text-black">Portal de Vendas para fornecedores</p>
              </Link>
            </div>
          </motion.section>
      </main>
    </div>
  )
}
