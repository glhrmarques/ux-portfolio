import BackArrow from '../components/BackArrow'
import { motion } from 'motion/react'


export default function SellerPlatformPage() {

  return (
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
          <div className="flex flex-col gap-6">
            <h1 className="text-[32px] lg:text-[40px] font-regular leading-none">Roterizador</h1>
            <p className="text-[16px] lg:text-[22px] font-[300]">A Inventa é uma empresa full-service especializada no mercado B2B. Responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais por São Paulo.</p>
          </div>

          <div className="
          flex flex-col sm:flex-row justify-between gap-6 pb-10 md:pb-0">
            <div className="flex flex-row sm:flex-col justify-between gap-2">
              <p className="text-[16px] md:text-[18px] font-[400] text-black/50 leading-none">Papel</p>
              <p className="text-[16px] md:text-[18px] font-[400] leading-none">Product Designer</p>
            </div>
            <div className="flex flex-row sm:flex-col justify-between gap-2">
              <p className="text-[16px] md:text-[18px] font-[400] text-black/50 leading-none">Projeto</p>
              <p className="text-[16px] md:text-[18px] font-[400] leading-none">B2B SaaS</p>
            </div>
            <div className="flex flex-row sm:flex-col justify-between gap-2">
              <p className="text-[16px] md:text-[18px] font-[400] text-black/50 leading-none">Tempo</p>
              <p className="text-[16px] md:text-[18px] font-[400] leading-none">1 Mês</p>
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

      {/* Challenge */}
      <section className="flex flex-col p-4 gap-6 justify-center bg-[#000000]
      h-[100dvh]
      lg:h-[90dvh]">
        <p className="text-[18px] font-[600] text-center text-white/50">DESAFIO</p>
        <p className="mx-auto text-[24px] md:text-[40px] font-[300] text-white/50 text-center max-w-[800px] leading-[1.2]">Desenvolver um portal para apoiar a operação comercial com o <spam className="text-white">desempenho de vendas dos consultores</spam> e <span className="text-white">planejar rotas de visitas.</span></p>
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
            className="object-contain border-[#D9D9D9]
            border scale-100 rounded-[8px]
            lg:border-2 lg:scale-90 lg:rounded-[24px]" 
          />
          <img
              src="/images/Screenshot-2026-02-18-at-13.33.18.avif"
              alt="Rep Sales App"
              className="border-[#D9D9D9]
              border scale-100 rounded-[8px]
              lg:border-2 lg:scale-90 lg:rounded-[24px]"
          />
          <img
              src="/images/seller-02.avif"
              alt="Rep Sales App"
              className="border-[#D9D9D9]
              border scale-100 rounded-[8px]
              lg:border-2 lg:scale-90 lg:rounded-[24px]"
          />
      </section>

      {/* AI */}
      <section className="flex flex-col p-4 gap-6 justify-start bg-[#000000] overflow-hidden relative
      h-[100dvh]
      lg:h-[100dvh]
      ">
        <p className="text-[18px] font-[600] text-center text-white/50 pt-30 md:pt-20">DO DESIGN AO DEPLOY</p>
        <p className="mx-auto text-[24px] md:text-[40px] font-[300] text-white/50 text-center max-w-[800px] leading-[1.2]">Usei IA para conectar design e desenvolvimento, combinando <spam className="text-white">Cursor, Claude Code, MCP do Figma e Googl design.md</spam> para acelerar a criação e manter a consistência do sistema.</p>
        <img 
          src="/images/routes-01.png"
          className="absolute left-1/2 -translate-x-1/2 top-150 scale-200
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
  
  )
}
