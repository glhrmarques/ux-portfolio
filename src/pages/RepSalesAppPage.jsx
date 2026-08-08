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
    <main className=" hero mx-auto max-w-screen-2xl" ref={container}>
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
        text-[48px] font-[400] text-white text-center"
        >
          O app de vendas da Inventa é tão ineficiente que papel e caneta se tornam a opção mais rápida para negociar e fechar pedidos.</p>
      </section>
      
      <section className="
       grid grid-cols-3 gap-3 justify-center w-full items-center m-auto min-h-[100dvh] lg:p-20 bg-[#ffffff]
      ">
        <div className="bg-[#005BE2] w-full h-full"></div>
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="bg-[#005BE2] w-full h-full"></div>
          <div className="bg-[#005BE2] w-full h-full"></div>
        </div>
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="basis-[70%] bg-[#005BE2] w-full h-full"></div>
          <div className="basis-[30%] bg-[#005BE2] w-full h-full"></div>
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
        <p className="text-[24px] font-[400] text-black text-center max-w-[800px] mx-auto">
        Por meio de entrevistas com vendedores e acompanhamento de suas rotas em campo, mapeei a jornada completa do usuário, identificando os principais pontos de atrito e oportunidades de melhoria.
        </p>
        <p className="text-[24px] font-[400] text-black text-center max-w-[800px] mx-auto">
        Os insights obtidos foram consolidados, priorizados em conjunto com stakeholders e alinhados com a equipe de Engenharia para definição das iniciativas de maior impacto.
        </p>
      </section>

      <section className="
      grid grid-cols-[40%_60%] justify-center gap-3 w-full mx-auto min-h-[80dvh] bg-[#005BE2] lg:p-20
      ">
        <div className="bg-[#000000]"></div>
        <div className="flex flex-row gap-3">
          <div className="w-full bg-[#000000]"></div>
          <div className="w-full bg-[#000000]"></div>
        </div>
      </section>

      <section className="
      grid grid-cols-[40%_60%] justify-center gap-3 w-full mx-auto min-h-[80dvh] bg-[#005BE2] lg:p-20
      ">
        <div className="bg-[#000000]"></div>
        <div className="flex flex-row gap-3">
          <div className="w-full bg-[#000000]"></div>
          <div className="w-full bg-[#000000]"></div>
        </div>
      </section>

      <section className="
      grid grid-cols-[40%_60%] justify-center gap-3 w-full mx-auto min-h-[80dvh] bg-[#005BE2] lg:p-20
      ">
        <div className="bg-[#000000]"></div>
        <div className="flex flex-row gap-3">
          <div className="w-full bg-[#000000]"></div>
          <div className="w-full bg-[#000000]"></div>
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
          InventaDs.
        </p>
        <p className="text-[24px] font-[400] text-white/60 text-center">Placeholder</p>
      </section>
    </main>
  )
}
