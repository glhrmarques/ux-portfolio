import { useRef } from "react";
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../gsap";

export default function RepSalesAppPage() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".project-panel");

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, { scope: container });

  return (
    <main className="hero mx-auto max-w-screen-2xl" ref={container}>
      <div className="grid grid-cols-2 w-full min-h-[100dvh]">
        {/* Right column */}
        <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col justify-between w-full p-20"
        >
          <BackArrow />
          <div className="flex flex-col gap-10">
            <h1 className="text-[40px] font-regular leading-none">App de Vendedores</h1>
            <p className="text-[22px] font-[300]">A Inventa é uma empresa full-service especializada no mercado B2B. Responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais por São Paulo.</p>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-[18px] font-[400] text-black/50 leading-none">Papel</p>
              <p className="text-[18px] font-[400] text-black leading-none">Product Designer</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[18px] font-[400] text-black/50 leading-none">Projeto</p>
              <p className="text-[18px] font-[400] text-black leading-none">B2B</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[18px] font-[400] text-black/50 leading-none">Tempo</p>
              <p className="text-[18px] font-[400] text-black leading-none">1 Mês</p>
            </div>
          </div>
        </motion.div>

        <div 
        className="
        w-full bg-[url('/images/cover-background-1.png')]
        bg-no-repeat bg-cover bg-center relative overflow-hidden"
        >
          <motion.img
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            src="/images/cover-projects-1.png"
            alt="Rep Sales App"
            className="absolute inset-0 m-auto scale-80"
          />
        </div>
      </div>

      <section
      className="
       flex flex-col justify-center gap-8 w-full m-auto min-h-[100dvh] lg:px-55 leading-[1.2] bg-[#000000]">
        <p className="text-[22px] font-[600] text-white/50 text-center">DESAFIO</p>
        <p
        className="
        text-[48px] font-[400] text-white/50 text-center max-w-[1000px] mx-auto"
        >
          O app de vendas da Inventa é tão ineficiente que <span className="text-white">papel e caneta se tornam a opção mais rápida</span> para negociar e fechar pedidos.</p>
      </section>
      
      <section className="
       grid grid-cols-3 gap-3 justify-center w-full items-center m-auto min-h-[100dvh] lg:p-20 bg-[#ffffff]
      ">
        <div className="bg-[#005BE2] w-full h-full"></div>
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="
          flex flex-col justify-center items-center p-6
          bw-full bg-[url('/images/cover-background-1.png')] h-full w-full
          bg-no-repeat bg-cover bg-center relative overflow-hidden">
              <div className="
              flex flex-row w-full justify-between
              bg-[#ffffff] p-4 rounded-[12px]
              ">
                <p className="text-[16px] font-[400] text-black leading-none">Placeholder</p>
                <p className="text-[16px] font-[400] text-black leading-none">Placeholder</p>
              </div>
              <div className="
              flex flex-row w-full justify-between
              bg-[#ffffff] p-4 rounded-[12px]
              ">
                <p className="text-[16px] font-[400] text-black leading-none">Placeholder</p>
                <p className="text-[16px] font-[400] text-black leading-none">Placeholder</p>
              </div>

          </div>
          <div className="w-full h-full min-h-0 overflow-hidden relative">
            <img
              src="/images/shadown-03.png"
              alt="Guilherme acompanhando representantes de venda"
              className="absolute -bottom-50 left-0 w-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="
          basis-[70%] w-full bg-[#005BE2]
          bg-no-repeat bg-cover bg-center relative overflow-hidden relative">
            <img 
            src="/images/cover-projects-1.png"
            alt="Rep Sales App"
            className="absolute top-0 left-0 w-[100%] object-contain"
            />
          </div>
          <div className="
          flex justify-center items-center p-8
          basis-[30%] w-full bg-[url('/images/cover-background-1.png')]
          bg-no-repeat bg-cover bg-center relative overflow-hidden">
            <div className="flex flex-row bg-[#005BE2] w-full justify-between items-center p-6">
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-[500] text-white leading-none">Total do pedido</p>
                <p className="text-[16px] font-[300] text-white leading-none"><span className="text-[22px] font-[500]">R$ 208,85</span> / 10 itens</p>
              </div>
              <p className="text-[18px] font-[500] text-white leading-none">Ver itens</p>
            </div>
          </div>


        </div>
      </section>

      <section
      className="
        flex flex-col justify-center gap-8 w-full mx-auto min-h-[100dvh] lg:px-20 leading-[1.2] bg-[#ffffff]">
        <p className="text-[22px] font-[600] text-black/50 text-center">RESEARCH</p>
        <p
        className="
        text-[48px] font-[400] text-black text-center"
        >
          Identificando problemas e oportunidades
        </p>
        <p className="text-[24px] font-[300] text-black text-center max-w-[800px] mx-auto">
          Por meio de entrevistas com vendedores e acompanhamento de suas rotas em campo, mapeei a jornada completa do usuário, identificando os principais pontos de atrito e oportunidades de melhoria.
        </p>
        <p className="text-[24px] font-[300] text-black text-center max-w-[800px] mx-auto">
          Os insights obtidos foram consolidados, priorizados em conjunto com stakeholders e alinhados com a equipe de Engenharia para definição das iniciativas de maior impacto.
        </p>
      </section>

      <section className="
      grid grid-cols-[40%_60%] justify-center gap-3 w-full mx-auto h-[90dvh] bg-[#ffffff] lg:p-10
      ">
        <div className="bg-[#000000]"></div>
        <div className="flex h-full min-h-0 flex-row gap-3">
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#ffffff]">
            <img 
              src="/images/clientes-01.png"
              alt="Lista de clientes"
              className="block h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#ffffff]">
            <video
              src="/images/clientes-03.mov"
              autoPlay
              loop
              muted 
              playsInline
              className="block h-full max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="
      grid grid-cols-[40%_60%] justify-center gap-3 w-full mx-auto h-[90dvh] bg-[#ffffff] lg:p-10
      ">
        <div className="bg-[#000000]"></div>
        <div className="flex h-full min-h-0 flex-row gap-3">
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#ffffff]">
            <img 
              src="/images/cover-projects-1.png"
              alt="Lista de clientes"
              className="block h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#ffffff] pt-4">
          <video
              src="/images/clientes-04.webm"
              autoPlay
              loop
              muted 
              playsInline
              className="block h-full max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="
      grid grid-cols-[40%_60%] justify-center gap-3 w-full mx-auto h-[90dvh] bg-[#ffffff] lg:p-10
      ">
        <div className="bg-[#000000]"></div>
        <div className="flex h-full min-h-0 flex-row gap-3">
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#ffffff]">
            <img 
              src="/images/clientes-06.png"
              alt="Lista de clientes"
              className="block h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#ffffff] pt-4">
          <video
              src="/images/clientes-07.webm"
              autoPlay
              loop
              muted 
              playsInline
              className="block h-full max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="
      flex flex-col justify-center gap-3 w-full mx-auto min-h-[40dvh] bg-[#ffffff] lg:p-55
      ">
        <p className="text-[22px] font-[600] text-black/50 text-center">RESULTADOS</p>
        <div className="flex flex-rol justify-between w-full border-b border-[#000000]/30 py-8">
          <p className="text-[32px] font-[400] text-black">GMV mensal</p>
          <p className="text-[32px] font-[400] text-black">~R$ 400k</p>
        </div>
        <div className="flex flex-rol justify-between w-full border-b border-[#000000]/30 py-8">
          <p className="text-[32px] font-[400] text-black">Orçamentos criados</p>
          <p className="text-[32px] font-[400] text-black">~7k</p>
        </div>
        <div className="flex flex-rol justify-between w-full border-b border-[#000000]/30 py-8">
          <p className="text-[32px] font-[400] text-black">Pedidos criados</p>
          <p className="text-[32px] font-[400] text-black">~4.5k</p>
        </div>
        <div className="flex flex-rol justify-between w-full border-b border-[#000000]/30 py-8">
          <p className="text-[32px] font-[400] text-black">Retenção</p>
          <p className="text-[32px] font-[400] text-black">~36%</p>
        </div>
      </section>

      <section
      className="
       flex flex-col justify-center items-center gap-8 w-full m-auto min-h-[100dvh] lg:px-55 leading-[1.2] bg-[#000000]">

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
        text-[48px] font-[700] text-white text-center"
        >
          Inventa<span className="m-0 text-white/50">Ds.</span>
        </p>
        <p className="text-[24px] font-[400] text-white/60 text-center">Placeholder</p>
        <button
        onClick={() => window.open("/projects/inv-ds", "_blank", "noopener,noreferrer")}
        className="
        bg-[#ffffff] p-5 text-black font-[600] hover:bg-[#000000] border 
        hover:text-white cursor-pointer
        ">Ver Design System</button>
      </section>
    </main>
  )
}
