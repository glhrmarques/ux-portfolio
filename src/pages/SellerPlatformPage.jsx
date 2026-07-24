import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SellerPlatformPage() {
  useScrollReveal()

  return (
    <motion.main 
      className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Intro */}
      <section className="flex flex-col gap-6 mb-20">
        <BackArrow />
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Portal de Vendas para fornecedores</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Designer de Produto</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Inventa</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">2022 - Atual</span>
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">Trabalhando ao lado de um engenheiro de backend, atuei como <span className="font-semibold">designer engenheiro</span>, moldando tanto a experiência do usuário quanto a lógica de decisão orientada por IA por trás da otimização de rotas.</p>
      </section>

      {/* Hero video */}
      <section className="flex flex-col gap-6 mb-20">
        <div className="image-bg bg-pink flex justify-center items-center">
          <div className="overflow-hidden md:rounded-[4px]">
            <video src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" autoPlay loop muted playsInline className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
          </div>
        </div>
      </section>

      {/* Main goal */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Objetivo principal</h2>
        <p className="text-[22px] md:text-[32px] text-[#1a1a1a] md:leading-[120%] font-[300]">Desenvolver um sistema que permita aos clientes da Inventa <span className="font-[600]">acompanhar o desempenho de vendas</span> e <span className="font-[600]">criar rotas otimizadas</span> para impulsionar o crescimento das vendas.</p>
      </section>

      {/* Core experience */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Experiência principal</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">Trabalhei em estreita colaboração com o cliente e a equipe de negócios para definir um roteiro de funcionalidades alinhado às necessidades operacionais dentro da Inventa. Partindo de uma base simples, refinamos iterativamente a UX com pesquisas de usuários, insights comportamentais e alinhamento contínuo com as partes interessadas.</p>
        <p className="text-[18px] font-normal leading-[1.5] text-[#808080]">Os dados operacionais da Inventa vêm do App de Vendas que redesenhei. <Link to="/projects/rep-sales-app" className="underline hover:text-gray-600">Veja o redesenho.</Link></p>
        <div className="timeline-illustration reveal-on-scroll reveal-delay-1">
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '5%', width: '32%' }}>Configuração do backend e Snowflake</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '35%', width: '20%' }}>Login e painéis</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '44%', width: '19%' }}>Lista de clientes e IA</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '50%', width: '35%' }}>Rotas</div></div>
          <div className="timeline-row"><div className="timeline-bar" style={{ marginLeft: '25%', width: '60%' }}>Sistema de design</div></div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="flex flex-col gap-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-1 image-bg bg-pink rounded-[20px] p-6 flex items-center justify-center min-h-[480px] overflow-hidden relative">
            <div className="flex flex-col items-center -space-y-3 reveal-on-scroll">
              <span className="dot-drop w-20 h-20 rounded-full bg-[#852FE0] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[5]">1</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#3476EE] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[4]">2</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#15AF76] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[3]">3</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#ED932F] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[2]">4</span>
              <span className="dot-drop w-20 h-20 rounded-full bg-[#EC3D40] border-3 border-white flex items-center justify-center text-white text-[22px] font-semibold z-[1]">5</span>
            </div>
          </div>
          <div className="hidden md:flex bg-[#FFF6FB] rounded-[20px] items-center justify-center overflow-hidden md:col-span-4 md:relative md:min-h-[480px]">
            <div className="reveal-on-scroll reveal-delay-1 absolute top-[-20%] left-[-25%] scale-[0.7]" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <img src="/images/seller-02.avif" alt="Visão geral do painel" className="max-w-none" style={{ display: 'block' }} />
            </div>
          </div>
          <div className="flex md:hidden image-bg bg-pink rounded-[20px] items-center justify-center overflow-hidden">
            <div className="reveal-on-scroll reveal-delay-1" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <img src="/images/seller-02.avif" alt="Lista de clientes e filtros" className="max-w-full object-contain mx-auto img-max-h" style={{ display: 'block' }} />
            </div>
          </div>
          <div className="md:col-span-5 image-bg bg-pink rounded-[20px] flex items-center justify-center md:min-h-[480px] overflow-hidden">
            <div className="reveal-on-scroll reveal-delay-1" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <img src="/images/seller-03.avif" alt="Lista de clientes e filtros" className="max-w-full object-contain mx-auto img-max-h" style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Impacto</h2>
        <div className="flex flex-col gap-6 reveal-on-scroll reveal-delay-1">
          <div className="flex w-full items-baseline justify-between">
            <p className="text-[16px] md:text-[24px]">GMV mensal</p>
            <h3 className="text-[32px] md:text-[56px] font-semibold">R$ 43k</h3>
          </div>
          <hr className="border-gray-200" />
          <div className="flex w-full items-baseline justify-between">
            <p className="text-[16px] md:text-[24px]">Rotas criadas</p>
            <h3 className="text-[32px] md:text-[56px] font-semibold">+1200</h3>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
