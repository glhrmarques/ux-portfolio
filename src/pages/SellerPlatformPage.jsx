import { useEffect, useRef, useState } from 'react'
import BackArrow from '../components/BackArrow'
import { motion } from 'motion/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

function useCountUp(target, isActive, duration = 1600) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const startTime = performance.now()
    let animationFrame

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * easedProgress))

      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [duration, isActive, target])

  return count
}


export default function SellerPlatformPage() {
  const [areStatsVisible, setAreStatsVisible] = useState(false)
  const statsRef = useRef(null)
  const gmv = useCountUp(100, areStatsVisible)
  const orders = useCountUp(2000, areStatsVisible)
  const routes = useCountUp(3000, areStatsVisible)

  useScrollReveal()

  useEffect(() => {
    const stats = statsRef.current
    if (!stats) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setAreStatsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setAreStatsVisible(true)
        observer.unobserve(entry.target)
      },
      { threshold: 0.3 }
    )

    observer.observe(stats)
    return () => observer.disconnect()
  }, [])

  return (
    <>
    <main>
      <div className="mx-auto max-w-screen-2xl grid w-full grid-cols-1 lg:grid-cols-2 sm:min-h-[90dvh]">
        
        {/* Left column */}
        <motion.div 
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="
        flex sm:min-h-[60dvh] w-full flex-col gap-12 p-4 sm:p-10 md:p-10">

          <BackArrow />
          <div className="flex flex-col gap-6 sm:gap-10">
              <h1 className="text-[40px] font-[500] leading-[1.5] max-w-[400px]">Rotas para Consultores</h1>
              <p className="text-[20px] font-[400]">A Inventa é uma empresa full-service responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais em São Paulo.</p>
            </div>

            <div className="flex flex-col  justify-between gap-12 lg:pb-0 pb-10">
              <div className="flex flex-col justify-between gap-4">
                <p className="text-[14px] font-[700] text-black/50 leading-none">MEU PAPEL</p>
                <p className="text-[20px] font-[400] text-black leading-none">Product Designer</p>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <p className="text-[14px] font-[700] text-black/50 leading-none">TIME</p>
                <p className="text-[20px] font-[400] text-black leading-none">1 Backend</p>
              </div>
            </div>
        </motion.div>

        {/* Right column */}
        <div
        className="
        bg-[url('/images/cover-background-2.png')] bg-no-repeat bg-cover bg-center overflow-hidden
        px-4 py-10
        lg:relative lg:p-10 lg:min-h-[80dvh]">
          <motion.img
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} 
              src="/images/seller-02.avif"
              alt="Rep Sales App"
              className="inset-0 m-auto
              scale-100 rounded-[8px]
              lg:absolute lg:left-50 lg:scale-130 lg:rounded-[16px]"
          />
        </div>
      </div>

      {/* IMPACTO */}
      <section className="min-h-[80dvh] flex items-center bg-[#000000]">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl py-10 sm:py-0 px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#ffffff] mt-1">IMPACTO</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[64px] lg:w-[70%]">
            <p className="text-[32px] font-[500] leading-[1.2] text-[#ffffff] max-w-[1000px]">Otimizar as rotas para consultores significa mais clientes em um dia, mais cobertura da carteira atendida e menos gasto com transporte</p>
            <div ref={statsRef} className="flex flex-col gap-8 lg:flex-row lg:gap-[64px]">
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[300]">+R$ {gmv}k</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">GMV mensal</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[300]">+{orders.toLocaleString('pt-BR')}</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">Pedidos criados</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[300]">+{routes.toLocaleString('pt-BR')}</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">Rotas criadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="min-h-[80dvh] flex items-center bg-[#FCFCFC]">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl py-10 sm:py-0 px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-1">PROBLEMA</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[64px] lg:w-[70%]">
            <p className="text-[32px] font-[500] leading-[1.2] text-[#000000] max-w-[1000px] mb-6">BeautyColor, nosso cliente precisava de um sistema para gerenciar rotas e acompanhar a evolução das vendas de cada Representante.</p>
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Falta de visibilidade sobre a performance dos consultores</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">A falta de uma estratégia nas visitas dificultava a mensuração da eficiência dos consultores</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY AND RESEARCH */}
      <section className="flex items-center bg-[#FFFFFF] py-10">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">O QUE ENTREGUEI</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">Entrevistei dois stakeholders para alinhar as necessidades de visualização operacional do time</p>
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">Transformei os requisitos operacionais em uma solução funcional, desenhando as interfaces e desenvolvendo frontend e backend com suporte de IA, utilizando Codex e Cursor.</p>
            <video 
              src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="metadata"
              className="reveal-on-scroll block w-full max-w-[1000px] rounded-[8px] border border-[#D9D9D9] object-contain lg:rounded-[24px] lg:border-2" 
            />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  
  )
}
