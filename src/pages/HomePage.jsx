import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function HomePage() {
  const copyPhone = useCallback((e) => {
    navigator.clipboard.writeText('+5511961747490').then(() => {
      e.target.textContent = 'Copied!'
      setTimeout(() => { e.target.textContent = '+55 1196174-7490' }, 2000)
    })
  }, [])

  return (
    <main className="flex flex-col gap-[104px] px-6 py-12 pb-20 md:px-[240px] md:py-16">
        {/* Intro */}
        <section id="intro" className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-10">
          <div className="flex flex-col gap-10 max-w-[421px]">
            <motion.h1 
              className="font-['Figtree',sans-serif] text-[44px] font-medium leading-[1.5] text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Product designer
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
                className="font-['Figtree',sans-serif] text-[22px] leading-[1.5] font-medium text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                Focused on B2B marketplaces, sales operations, and internal tools.
              </motion.p>
              <motion.p 
                className="font-['Figtree',sans-serif] text-[16px] leading-[1.5] font-medium text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Designing systems at{' '}
                <a 
                  href="https://inventa.com.br/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] underline decoration-solid"
                >
                  Inventa
                </a>
                {' '}that help marketplace teams scale workflows, reduce operational friction, and improve seller performance.
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
          <h2 className="font-medium text-[22px] text-black">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/projects/rep-sales-app" className="group aspect-square bg-[#2F98F9] p-6 flex items-center justify-center overflow-hidden">
              <img 
                src="/images/sales-app-home.avif" 
                alt="Rep Sales App" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
            <Link to="/projects/seller-platform" className="group aspect-square bg-[#C1038B] p-6 flex items-center justify-center overflow-hidden">
              <video 
                src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </div>
        </motion.section>

        {/* Writing */}
        <motion.section 
          id="writing" 
          className="flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="font-medium text-[22px] text-black mb-0">Writing</h2>
          <Link 
            to="/writing/sign-up" 
            className="border-b border-[#dcdbdb] py-8 flex items-center justify-between no-underline hover:opacity-70 transition-opacity"
          >
            <p className="text-[20px] md:text-[24px] font-medium text-black">Sign up/in in GO</p>
            <p className="text-[16px] md:text-[18px] text-[#7f7f7f]">June, 2026</p>
          </Link>
          <Link 
            to="/writing/restful-api-go" 
            className="border-b border-[#dcdbdb] py-8 flex items-center justify-between no-underline hover:opacity-70 transition-opacity"
          >
            <p className="text-[20px] md:text-[24px] font-medium text-black">Building my first RESTful API with GO</p>
            <p className="text-[16px] md:text-[18px] text-[#7f7f7f]">May, 2026</p>
          </Link>
        </motion.section>
    </main>
  )
}
