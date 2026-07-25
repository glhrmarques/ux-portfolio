import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SellerPlatformPage() {
  useScrollReveal()

  return (
  
    <motion.main 
      className="mx-auto w-full max-w-[1440px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <section className="min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16 gap-20">

      {/* Main wrapper */}
      <section className="flex flex-col gap-6">
          <BackArrow />
          <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Portal de Vendas</h1>
          <p className="text-[18px] font-normal leading-[1.5] text-black">O Portal de Vendas para Fornecedores foi desenvolvido para centralizar a gestão comercial, permitindo acompanhar o desempenho dos consultores, planejar rotas de visitas, monitorar os produtos mais vendidos e gerenciar a carteira de clientes.</p>
      
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">FUNÇÃO</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Product Designer</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">PERÍODO</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Jan - Fev de 2026</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">EQUIPE</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Product Designer</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Backend Eng</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">COMPETÊNCIAS</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Product Design</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Prototype</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Cursor + Claude code</p>
            </div>
          </div>
      </section>

      {/*Problem */}
      <section className="flex flex-col gap-6 reveal-on-scroll reveal-delay-1">
        <div className="flex flex-1 flex-col gap-6">
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">PROBLEMA</p>
          <h2 className="font-['Figtree',sans-serif] text-[28px] md:text-[32px] font-medium text-[black] max-w-[456px]">O que o Portal deveria focar?</h2>
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">O desafio era definir quais funcionalidades realmente gerariam valor para os clientes da Inventa. O objetivo era desenvolver um portal que permitisse acompanhar o desempenho de vendas dos consultores, planejar rotas de visitas mais eficientes e apoiar a tomada de decisões para impulsionar os resultados comerciais.</p>
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">As pesquisas realizadas anteriormente com representantes de vendas já haviam fornecido insumos suficientes para identificar as principais necessidades dos usuários. Com esses aprendizados, estruturamos um roadmap priorizando as funcionalidades de maior impacto para o negócio e para a experiência dos clientes.</p>
        </div>
        <div className="timeline-illustration">
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '5%', width: '20%' }}>Backend e Snowflake</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '22%', width: '8%' }}>Login</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '30%', width: '20%' }}>Home</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '35%', width: '20%' }}>Carteira de Clientes</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '44%', width: '30%' }}>Roteirização</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '22%', width: '100%' }}>Design System</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '22%', width: '10%' }}>Posthog</div></div>
        </div>
      </section>


      <section className="flex flex-col gap-6 reveal-on-scroll reveal-delay-1">
        <div className="flex flex-col gap-6">
          <p className="text-[16px] md:text-[16px] font-medium text-[#8C8C8C] leading-none">DELIVERY</p>
          <h2 className="text-[28px] md:text-[32px] font-medium text-[black] max-w-[456px] leading-none">Construindo com IA</h2>
          <p className="text-[16px] md:text-[18px] text-black">Para construir a solução, utilizei uma stack baseada em IA, integrando design, desenvolvimento e prototipação em um único fluxo. Stack utilizada:</p>
        </div>

        <div className="flex flex-row gap-6 justify-between items-center">
          <p className="font-['Source_Serif_4',sans-serif] text-[24px] font-regular text-black">Next.js</p>
          <div className="h-[4px] w-[4px] bg-[#000000] rounded-full"></div>
          <p className="font-['Source_Serif_4',sans-serif] text-[24px] font-regular text-black">Figma MPC</p>
          <div className="h-[4px] w-[4px] bg-[#000000] rounded-full"></div>
          <p className="font-['Source_Serif_4',sans-serif] text-[24px] font-regular text-black">Cursor</p>
          <div className="h-[4px] w-[4px] bg-[#000000] rounded-full"></div>
          <p className="font-['Source_Serif_4',sans-serif] text-[24px] font-regular text-black">Claude Code</p>
          <div className="h-[4px] w-[4px] bg-[#000000] rounded-full"></div>
          <p className="font-['Source_Serif_4',sans-serif] text-[24px] font-regular text-black">Google design.md</p>
        </div>
      </section>
      
      <section className="flex flex-col gap-6 mb-20">
      <div className="lex justify-center items-center bg-[url('/images/background-projects-2.png')] p-10 reveal-on-scroll reveal-delay-1">
        <div className="overflow-hidden">
          <video src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" autoPlay loop muted playsInline className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-1 bg-[#F4EAE2] p-6 flex items-center justify-center min-h-[480px] overflow-hidden relative">
            <div className="flex flex-col items-center -space-y-3 reveal-on-scroll">
              <span className="dot-drop w-20 h-20 rounded-full bg-[#852FE0] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[5]">1</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#3476EE] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[4]">2</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#15AF76] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[3]">3</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#ED932F] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[2]">4</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#EC3D40] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[1]">5</span>
            </div>
          </div>
          <div className="bg-[#F4EAE2] hidden md:flex items-center justify-center overflow-hidden md:col-span-4 md:relative md:min-h-[480px]">
            <div className="reveal-on-scroll reveal-delay-1 absolute top-[-20%] left-[-25%] scale-[0.7]" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <img src="/images/seller-02.avif" alt="Visão geral do painel" className="max-w-none" style={{ display: 'block' }} />
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center overflow-hidden">
            <div className="reveal-on-scroll reveal-delay-1" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <img src="/images/seller-02.avif" alt="Lista de clientes e filtros" className="max-w-full object-contain mx-auto img-max-h" style={{ display: 'block' }} />
            </div>
          </div>
          <div className="md:col-span-5 p-6 bg-[#F4EAE2] flex items-center justify-center md:min-h-[480px] overflow-hidden">
            <div className="reveal-on-scroll reveal-delay-1" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <img src="/images/seller-03.avif" alt="Lista de clientes e filtros" className="max-w-full object-contain mx-auto img-max-h" style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </section>
      </section>
    </motion.main>
  )
}
