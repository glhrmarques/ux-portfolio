import { useRef } from "react";
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../gsap";

export default function RepSalesAppPage() {
  useScrollReveal()
  
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".project-panel", container.current);
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });

    });

    return () => media.revert();
  }, { scope: container });

  return (
    <>
    <main className="mx-auto max-w-screen-2xl">
      <section ref={container}>
        {/* Hero */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:min-h-[100dvh]">
          {/* Right column */}
          <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex sm:min-h-[60dvh] w-full flex-col justify-between gap-12 p-4 sm:p-10 lg:p-20"
          >
            <BackArrow />
            <div className="flex flex-col gap-6 sm:gap-10">
              <h1 className="text-[32px] font-regular leading-none sm:text-[40px]">App de Vendedores</h1>
              <p className="text-[16px] lg:text-[18px] font-[300]">A Inventa é uma empresa full-service especializada no mercado B2B. Responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais por São Paulo.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:pb-0 pb-10">
              <div className="flex flex-row justify-between lg:flex-col gap-2 sm:gap-3">
                <p className="text-[16px] font-[400] text-black/50 leading-none sm:text-[18px]">Papel</p>
                <p className="text-[16px] font-[400] text-black leading-none sm:text-[18px]">Product Designer</p>
              </div>

              <div className="flex flex-row justify-between lg:flex-col gap-2 sm:gap-3">
                <p className="text-[16px] font-[400] text-black/50 leading-none sm:text-[18px]">Projeto</p>
                <p className="text-[16px] font-[400] text-black leading-none sm:text-[18px]">B2B App</p>
              </div>

              <div className="flex flex-row justify-between lg:flex-col gap-2 sm:gap-3">
                <p className="text-[16px] font-[400] text-black/50 leading-none sm:text-[18px]">Tempo</p>
                <p className="text-[16px] font-[400] text-black leading-none sm:text-[18px]">3 Meses</p>
              </div>
            </div>
          </motion.div>

          {/* Left column */}
          <div 
          className="
          min-h-[100dvh] lg:min-h-[60dvh] w-full bg-[url('/images/cover-background-1.png')]
          lg:min-h-0
          bg-no-repeat bg-cover bg-center relative overflow-hidden"
          >
            <motion.img
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              src="/images/cover-projects-1.png"
              alt="Rep Sales App"
              className="absolute inset-0 m-auto scale-90 lg:scale-80"
            />
          </div>
        </div>
      </section>
      
      {/* Problem */}
      <section
        className="flex flex-col justify-center min-h-[100dvh] leading-[1.2] bg-[#000000] gap-[120px] px-4 py-20 md:p-20">
          <div className="reveal-on-scroll flex flex-col gap-6">
            <p className="lg:text-[22px] text-[18px] font-[700] text-white/50">PROBLEMA</p>
            <p className="lg:text-[40px] text-[22px] font-[300] text-white/50">
              O app de vendas da Inventa é tão ineficiente que <span className="text-white">papel e caneta se tornam a opção mais rápida</span> para negociar e fechar pedidos.
            </p>
          </div>

          {/* motives */}
          <div className="reveal-on-scroll reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-x-20">
            <div className="flex flex-col gap-4 border-t-1 border-[#ffffff]/30">
              <p className="text-[40px] font-[400] text-white/50 mt-10">01</p>
              <p className="text-[22px] font-[300] text-white leading-[1.5] mb-10">Baixa adoção. Poucos consultores utilizavam o App de vendas.</p>
            </div>
            <div className="flex flex-col gap-4 border-t-1 border-[#ffffff]/30">
              <p className="text-[40px] font-[400] text-white/50 mt-10">02</p>
              <p className="text-[22px] font-[300] text-white leading-[1.5] mb-10">CS recebia os pedidos em fotos no WhatsApp.</p>
            </div>
            <div className="flex flex-col gap-4 border-t-1 border-[#ffffff]/30">
              <p className="text-[40px] font-[400] text-white/50 mt-10">03</p>
              <p className="text-[22px] font-[300] text-white leading-[1.5] mb-10">O programa estava em expansão. Mais consultores a cada semana</p>
            </div>
          </div>
      </section>

      {/* Discovery */}
      <section
        className="flex flex-col justify-center min-h-[100dvh] leading-[1.2] bg-[ffffff] gap-[80px] p-4 py-20 md:p-20">
          <div className="reveal-on-scroll flex flex-col gap-6">
            <p className="lg:text-[22px] text-[18px] font-[700] text-black/50">DISCOVERY</p>
            <p className="lg:text-[40px] text-[22px] font-[300] text-black/50">
              A pesquisa revelou que a <span className="text-black">arquitetura da informação, a falta de funcionalidades básicas atrapalhavam a negociação com lojistas.</span>
            </p>
          </div>

          {/* images */}
          <div className="reveal-on-scroll reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-20 md:flex-1">
            <div className="h-[300px] md:h-full bg-[url('/images/discovery-1.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="h-[300px] md:h-full bg-[url('/images/discovery-2.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="h-[300px] md:h-full bg-[url('/images/discovery-3.png')] bg-no-repeat bg-cover bg-center"></div>
          </div>
      </section>

      {/* Solution 1 */}
      <section className="reveal-on-scroll flex flex-col bg-[#ffffff] gap-2 p-4 md:px-20 mt-20">
        <p className="lg:text-[22px] text-[18px] font-[700] text-black/50 text-center">SOLUÇÕES</p>

        <div className="grid w-full grid-cols-1 gap-y-20 md:grid-cols-3 overflow-hidden">
          <div className="flex flex-col">
            <div className="h-[600px] bg-[url('/images/sales-app/clientes-1.png')] bg-center bg-cover bg-no-repeat" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Lista de clientes</p>
          </div>
          <div className="flex flex-col">
            <div className="h-[600px] bg-[url('/images/sales-app/clientes-2.png')] bg-center bg-cover bg-no-repeat" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Cadastro de clientes</p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <div className="h-[600px] bg-[url('/images/sales-app/clientes-3.gif')] bg-center bg-cover bg-no-repeat scale-[1.02]" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Análise de crédito</p>
            <div className="absolute left-2 bottom-5 w-full h-[2px] bg-[#ffffff] sm:hidden"></div>
          </div>
        </div>
      </section>

      <hr className="border-[#000000]/20 my-10"/>

      {/* Solution 2 */}
      <section className="reveal-on-scroll flex flex-col bg-[#ffffff] gap-2 p-4 md:px-20">
        <div className="grid w-full grid-cols-1 gap-y-20 md:grid-cols-3 overflow-hidden">
          <div className="flex flex-col">
            <div className="h-[600px] bg-[url('/images/sales-app/catalogo-1.png')] bg-center bg-cover bg-no-repeat" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Lista de produtos</p>
          </div>
          <div className="flex flex-col">
            <div className="h-[600px] bg-[url('/images/sales-app/catalogo-2.png')] bg-center bg-cover bg-no-repeat" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Detalhes do produto</p>
          </div>
          <div className="flex flex-col gap-2 overflow-hidden relative">
            <div className="h-[600px] bg-[url('/images/sales-app/catalogo-3.gif')] bg-center bg-cover bg-no-repeat scale-[1.02]" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Adicionar itens ao carrinho</p>
            <div className="absolute left-2 bottom-5 w-full h-[2px] bg-[#ffffff] sm:hidden"></div>

          </div>
        </div>
      </section>

      <hr className="border-[#000000]/30 my-10"/>

      {/* Solution 3 */}
      <section className="reveal-on-scroll flex flex-col bg-[#ffffff] gap-2 p-4 md:px-20">
        <div className="grid w-full grid-cols-1 gap-y-20 md:grid-cols-3 overflow-hidden">
          <div className="flex flex-col">
            <div className="h-[600px] bg-[url('/images/sales-app/pagamentos-1.png')] bg-center bg-cover bg-no-repeat" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Métodos de pagamento</p>
          </div>
          <div className="flex flex-col">
            <div className="h-[600px] bg-[url('/images/sales-app/pagamentos-2.png')] bg-center bg-cover bg-no-repeat" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Selecionar parcela</p>
          </div>
          <div className="flex flex-col gap-2 overflow-hidden relative">
            <div className="h-[600px] bg-[url('/images/sales-app/pagamentos-3.gif')] bg-center bg-cover bg-no-repeat scale-[1.02]" />
            <p className="text-[18px] font-[500] text-black/50 text-center leading-none">Concluir pedido</p>
            <div className="absolute left-2 bottom-5 w-full h-[2px] bg-[#ffffff] sm:hidden"></div>
          </div>
        </div>
      </section>



      {/* Outcome */}
      <section className="
      flex min-h-[100dvh] w-full flex-col items-center justify-center gap-3 bg-[#ffffff] p-6 sm:p-10 lg:px-55
      ">
        <p className="text-[18px] font-[600] text-center text-black/50 sm:text-[22px]">RESULTADOS</p>
        <div className="flex w-full flex-row justify-between border-b border-[#000000]/30 py-5 sm:py-8">
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">GMV mensal</p>
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">~R$ 400k</p>
        </div>
        <div className="flex w-full flex-row justify-between border-b border-[#000000]/30 py-5 sm:py-8">
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">Orçamentos criados</p>
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">~7k</p>
        </div>
        <div className="flex w-full flex-row justify-between border-b border-[#000000]/30 py-5 sm:py-8">
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">Pedidos criados</p>
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">~4.5k</p>
        </div>
        <div className="flex w-full flex-row justify-between border-b border-[#000000]/30 py-5 sm:py-8">
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">Retenção</p>
          <p className="text-[20px] font-[400] text-black sm:text-[32px]">~36%</p>
        </div>
      </section>
    </main>
    {/* DS */}
      <section
      className="
       flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 bg-[#000000] p-6 leading-[1.2] sm:gap-8 sm:p-10 lg:px-55">

        <div className="reveal-on-scroll grid grid-cols-2 w-[80px] h-[44px]">
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
        className="reveal-on-scroll reveal-delay-2 
        text-center text-[36px] font-[700] text-white sm:text-[48px]"
        >
          Inventa<span className="m-0 text-white/50">Ds.</span>
        </p>
        <p className="reveal-on-scroll reveal-delay-2 max-w-[800px] text-center text-[18px] font-[400] text-white/60 sm:text-[24px]">Ao fim do projeto foi desenvolvido um InvendaDs para aumentar velocidade de desenolvimento e consistência das interfaces.</p>
        <button
        onClick={() => window.open("/projects/inv-ds", "_blank", "noopener,noreferrer")}
        className="
        reveal-on-scroll reveal-delay-2 border bg-[#ffffff] p-4 text-black font-[600] hover:bg-[#000000] hover:text-white sm:p-5 cursor-pointer
        ">Ver Design System</button>
      </section>
    <Footer />
    </>
  )
}
