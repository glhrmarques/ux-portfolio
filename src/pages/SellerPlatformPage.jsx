import BackArrow from '../components/BackArrow'
import { motion } from 'motion/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'


export default function SellerPlatformPage() {
    useScrollReveal()

  return (
    <>
    <main className="mx-auto max-w-screen-2xl">
      <section className="
      grid grid-cols-1 md:grid-cols-2 w-full md:min-h-[100dvh]">
        
        {/* Left column */}
        <motion.div 
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="
        flex flex-col justify-between gap-12 p-4 md:p-20 bg-[#ffffff] 
        sm:min-h-[60dvh]">

          <BackArrow />
          <div className="flex flex-col gap-6 sm:gap-10">
              <h1 className="text-[32px] font-regular leading-none sm:text-[40px]">Rotas para Consultores</h1>
              <p className="text-[22px] font-[300]">A Inventa é uma empresa full-service responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais em São Paulo.</p>
            </div>

            <div className="flex flex-col  justify-between gap-12 lg:pb-0 pb-10">
              <div className="flex flex-col justify-between gap-4">
                <p className="text-[16px] font-[700] text-black/50 leading-none">TIME</p>
                <p className="text-[18px] font-[400] text-black leading-none">1 Product Designer e 1 Backend eng</p>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <p className="text-[16px] font-[700] text-black/50 leading-none">MEU PAPEL</p>
                <p className="text-[18px] font-[400] text-black leading-none">Product Designer</p>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <p className="text-[16px] font-[700] text-black/50 leading-none">EMPRESA</p>
                <a href="https://www.linkedin.com/company/inventashop/" className="text-[18px] font-[400] text-black leading-none">Inventa</a>
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
      </section>

      {/* Long story short */}
      <section
        className="flex flex-col justify-center min-h-[100dvh] leading-[1.2] bg-[#FCFCFC] gap-[120px] px-4 py-20 md:p-20">
          <div className="reveal-on-scroll flex flex-col gap-8">
            <p className="text-[16px] font-[700] text-[#000000]">SE VOCÊ PRECISASSE LER SÓ UMA PARTE, SERIA ESSSA:</p>
            <p className="sm:text-[32px] text-[28px] font-[400] text-[#7D7D7D]">
              Otimizar rota para consultores significa mais clientes em um dia, mais cobertura da carteira atendida e <span className="text-[#000000]">menos gasto com transporte.</span>
            </p>
            <div className="flex flex-col gap-3">
              <p className="sm:text-[32px] text-[28px] font-[400] text-[#7D7D7D]">
                Desenvolvi um SaaS com IA que cria rotas por dia da semana para os consultores que resultou em:
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center mt-8 sm:mt-0">
                <p className="sm:text-[32px] text-[28px] font-[400] text-[#000000]">~R$ 50k GMV Mensal</p>
                <div className="hidden sm:block w-1 h-1 bg-[#000000] rounded-full"></div>
                <p className="sm:text-[32px] text-[28px] font-[400] text-[#000000]">+15.00 Rotas</p>
              </div>
            </div>
          </div>
      </section>

      {/* Problem */}
      <section
        className="flex flex-col justify-center min-h-[100dvh] bg-[#000000] gap-[64px] sm:gap-[90px] px-4 py-20 md:p-20">
          <div className="reveal-on-scroll flex flex-col gap-6">
            <p className="text-[16px] font-[700] text-[#ffffff]">PROBLEMA</p>
            <p className="sm:text-[32px] text-[28px] font-[300] text-white/50">
              BeautyColor, nosso cliente precisava de um sistema para <span className="text-white">gerenciar rotas e acompanhar a evolução das vendas </span> de cada Representante.
            </p>
          </div>
      </section>

      {/* Solution */}
      <section className="flex flex-col items-center justify-center bg-[#ffffff]
      gap-20 px-4 py-10
      lg:gap-6 lg:p-20">
        <video 
            src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="reveal-on-scroll object-contain border-[#D9D9D9]
            border scale-100 rounded-[8px]
            lg:border-2 lg:scale-90 lg:rounded-[24px]" 
          />
          <img
              src="/images/Screenshot-2026-02-18-at-13.33.18.avif"
              alt="Rep Sales App"
              className="reveal-on-scroll border-[#D9D9D9]
              border scale-100 rounded-[8px]
              lg:border-2 lg:scale-90 lg:rounded-[24px]"
          />
          <img
              src="/images/seller-02.avif"
              alt="Rep Sales App"
              className="reveal-on-scroll border-[#D9D9D9]
              border scale-100 rounded-[8px]
              lg:border-2 lg:scale-90 lg:rounded-[24px]"
          />
      </section>

      {/* AI */}
      <section className="flex flex-col p-4 gap-6 justify-start bg-[#000000] overflow-hidden relative
      h-[100dvh]
      lg:h-[100dvh]
      ">
        <p className="reveal-on-scroll text-[18px] font-[600] text-center text-white/50 pt-30 md:pt-20">DO DESIGN AO DEPLOY</p>
        <p className="reveal-on-scroll mx-auto text-[24px] md:text-[40px] font-[300] text-white/50 text-center max-w-[800px] leading-[1.2]">Usei IA para conectar design e desenvolvimento, combinando <spam className="text-white">Cursor, Claude Code, MCP do Figma e Googl design.md</spam> para acelerar a criação e manter a consistência do sistema.</p>
        <img 
          src="/images/routes-01.png"
          className="reveal-on-scroll reveal-delay-30 absolute left-1/2 -translate-x-1/2 top-150 scale-200
          md:top-100 md:scale-100"         
        />
      </section>


      {/* Outcome */}
      <section className="
      project-panel flex min-h-[90dvh] w-full flex-col items-center justify-center gap-3 bg-[#ffffff] p-6 sm:p-10 lg:px-55
      ">
        <p className="text-[18px] font-[600] text-center text-black/50 sm:text-[22px]">RESULTADOS</p>
        <div className="flex w-full flex-row justify-between border-b border-[#000000]/30 py-5 sm:py-8">
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">GMV mensal</p>
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">~R$ 50k</p>
        </div>
        <div className="flex w-full flex-row justify-between border-b border-[#000000]/30 py-5 sm:py-8">
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">Rotas criadas</p>
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">+1.500</p>
        </div>
      </section>
    </main>
    <Footer />
    </>
  
  )
}
