import { useRef } from "react";
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../gsap";

export default function RepSalesAppPage() {
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
    <main className="hero mx-auto max-w-screen-2xl">
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
              <p className="text-[16px] lg:text-[22px] font-[300]">A Inventa é uma empresa full-service especializada no mercado B2B. Responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais por São Paulo.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:pb-0 pb-10">
              <div className="flex flex-row justify-between lg:flex-col gap-2 sm:gap-3">
                <p className="text-[16px] font-[400] text-black/50 leading-none sm:text-[18px]">Papel</p>
                <p className="text-[16px] font-[400] text-black leading-none sm:text-[18px]">Product Designer</p>
              </div>

              <div className="flex flex-row justify-between lg:flex-col gap-2 sm:gap-3">
                <p className="text-[16px] font-[400] text-black/50 leading-none sm:text-[18px]">Projeto</p>
                <p className="text-[16px] font-[400] text-black leading-none sm:text-[18px]">B2B</p>
              </div>

              <div className="flex flex-row justify-between lg:flex-col gap-2 sm:gap-3">
                <p className="text-[16px] font-[400] text-black/50 leading-none sm:text-[18px]">Tempo</p>
                <p className="text-[16px] font-[400] text-black leading-none sm:text-[18px]">1 Mês</p>
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

        {/* Challenge */}
        <section
        className="
        flex min-h-[100dvh] w-full flex-col justify-center gap-6 bg-[#000000] p-6 leading-[1.2] sm:gap-8 sm:p-10 lg:px-55">
          <p className="text-[18px] font-[600] text-center text-white/50 sm:text-[22px]">DESAFIO</p>
          <p
          className="
          mx-auto max-w-[1000px] text-center lg:text-[32px] text-[22px] font-[400] text-white/50 sm:text-[48px]"
          >
            O app de vendas da Inventa é tão ineficiente que <span className="text-white">papel e caneta se tornam a opção mais rápida</span> para negociar e fechar pedidos.</p>
        </section>
        
        {/* Moodboard */}
        <section className="
        hidden min-h-[100dvh] w-full grid-cols-3 items-center justify-center gap-3 bg-[#ffffff] lg:grid lg:p-20
        ">
          <div className="bg-[#005BE2] h-full relative overflow-hidden">
            <img 
            src="/images/moodboard-product.png"
            alt="Rep Sales App"
            className="absolute -top-60 left-[5%] w-[90%] object-contain"
            />

          </div>
          <div className="flex flex-col gap-3 w-full h-full">
            <div className="
            flex flex-col justify-center items-center p-6
            bw-full bg-[url('/images/cover-background-1.png')] h-full w-full
            bg-no-repeat bg-cover bg-center relative overflow-hidden">
                <div className="flex flex-col p-4 bg-[#ffffff] w-full rounded-[12px] gap-6 mb-3">
                  <div className="
                  flex flex-row w-full justify-between
                  ">
                    <p className="text-[18px] font-[300] text-black leading-none">Subtotal</p>
                    <p className="text-[18px] font-[300] text-black leading-none">R$ 1.000,00</p>
                  </div>
                  <div className="
                  flex flex-row w-full justify-between
                  ">
                    <p className="text-[18px] font-[300] text-black leading-none">Desconto de 3%</p>
                    <p className="text-[18px] font-[300] text-black leading-none">-R$ 30,00</p>
                  </div>
                  <hr className="border-[#000000]/20"/>
                  <div className="
                  flex flex-row w-full justify-between
                  ">
                    <p className="text-[18px] font-[300] text-black leading-none">Total</p>
                    <p className="text-[18px] font-[300] text-black leading-none">R$ 970,00</p>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-[#ffffff] w-full rounded-[12px] gap-6">
                  <div className="
                  flex flex-row w-full justify-between
                  ">
                    <div className="flex flex-row gap-2 items-center">
                      <p className="text-[18px] font-[500] text-black leading-none">15</p>
                      <div className="w-1 h-1 bg-[#000000]/40 rounded-full"></div>
                      <p className="text-[18px] font-[500] text-black leading-none">30 dias</p>

                    </div>
                    <p className="text-[18px] font-[500] text-black leading-none">2x R$ 485,00</p>
                  </div>
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
            overflow-hidden relative">
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

        {/* Research */}
        <section
        className="
          flex min-h-[100dvh] w-full flex-col justify-center gap-6 bg-[#ffffff] p-6 leading-[1.2] sm:gap-8 sm:p-10 lg:px-20">
          <p className="text-[18px] font-[600] text-center text-black/50 sm:text-[22px]">RESEARCH</p>
          <p
          className="
          text-center text-[32px] font-[400] text-black sm:text-[48px]"
          >
            Identificando problemas e oportunidades
          </p>
          <p className="mx-auto max-w-[800px] text-center text-[18px] font-[300] text-black sm:text-[24px]">
            Por meio de entrevistas com vendedores e acompanhamento de suas rotas em campo, mapeei a jornada completa do usuário, identificando os principais pontos de atrito e oportunidades de melhoria.
          </p>
          <p className="mx-auto max-w-[800px] text-center text-[18px] font-[300] text-black sm:text-[24px]">
            Os insights obtidos foram consolidados, priorizados em conjunto com stakeholders e alinhados com a equipe de Engenharia para definição das iniciativas de maior impacto.
          </p>
        </section>
      </section>

      {/* Solution 1 */}
      <section className="
      mx-auto grid h-auto w-full grid-cols-1 gap-6 bg-[#ffffff] p-6 sm:p-10 lg:h-[90dvh] lg:grid-cols-[40%_60%] lg:gap-3 lg:p-10
      ">
        <div className="flex flex-col justify-end gap-6 lg:px-25 lg:pb-10 lg:gap-[40px]">
          <p className="text-[32px] font-[300] leading-none text-black sm:text-[40px]">Análise de Crédito</p>
          <hr className="border-[#000000]/30" />
          <p className="text-[18px] font-[300] text-black/50 sm:text-[24px]">Lista de cliente com métodos de pagamentos disponíveis e histórico de pedidos.</p>
        </div>
        <div className="flex min-h-0 flex-col gap-3 sm:flex-row lg:h-full">
          <div className="hidden sm:block flex min-h-[42dvh] w-full items-center justify-center overflow-hidden bg-[#ffffff] sm:min-h-0">
            <img 
              src="/images/clientes-01.png"
              alt="Lista de clientes"
              className="block h-full max-w-full object-contain p-10"
            />
          </div>
          <div className="flex min-h-[42dvh] w-full items-center justify-center overflow-hidden bg-[#ffffff] sm:min-h-0">
            <video
              src="/images/clientes-03.mov"
              autoPlay
              loop
              muted 
              playsInline
              className="block h-full max-w-full object-contain p-8"
            />
          </div>
        </div>
      </section>

      {/* Solution 2 */}
      <section className="
      mx-auto grid h-auto w-full grid-cols-1 gap-6 bg-[#ffffff] p-6 sm:p-10 lg:h-[90dvh] lg:grid-cols-[40%_60%] lg:gap-3 lg:p-10
      ">
        <div className="flex flex-col justify-end gap-6 lg:px-25 lg:pb-10 lg:gap-[40px]">
          <p className="text-[32px] font-[300] leading-none text-black sm:text-[40px]">Catálogo</p>
          <hr className="border-[#000000]/30" />
          <p className="text-[18px] font-[300] text-black/50 sm:text-[24px]">Lista de produtos com detalhes dos descontos progressivos e o carrinho que mostra os items adicionados e o pedido mínimo para concluir.</p>
        </div>
        <div className="flex min-h-0 flex-col gap-3 sm:flex-row lg:h-full">
          <div className="hidden sm:block flex min-h-[42dvh] w-full items-center justify-center overflow-hidden bg-[#ffffff] sm:min-h-0">
            <img 
              src="/images/cover-projects-1.png"
              alt="Lista de clientes"
              className="block h-full max-w-full object-contain p-10"
            />
          </div>
          <div className="flex min-h-[42dvh] w-full items-center justify-center overflow-hidden bg-[#ffffff] pt-4 sm:min-h-0">
          <video
              src="/images/clientes-04.webm"
              autoPlay
              loop
              muted 
              playsInline
              className="block h-full max-w-full object-contain p-8"
            />
          </div>
        </div>
      </section>

      {/* Solution 3 */}
      <section className="
      mx-auto grid h-auto w-full grid-cols-1 gap-6 bg-[#ffffff] p-6 sm:p-10 lg:h-[90dvh] lg:grid-cols-[40%_60%] lg:gap-3 lg:p-10
      ">
        <div className="flex flex-col justify-end gap-6 lg:px-25 lg:pb-10 lg:gap-[40px]">
          <p className="text-[32px] font-[300] leading-none text-black sm:text-[40px]">Pagamento</p>
          <hr className="border-[#000000]/30" />
          <p className="text-[18px] font-[300] text-black/50 sm:text-[24px]">Seleção simplificada dos pagamentos, principalmente do boleto parcelado.</p>
        </div>
        <div className="flex min-h-0 flex-col gap-3 sm:flex-row lg:h-full">
          <div className="hidden sm:block flex min-h-[42dvh] w-full items-center justify-center overflow-hidden bg-[#ffffff] sm:min-h-0">
            <img 
              src="/images/clientes-05.png"
              alt="Lista de clientes"
              className="block h-full max-w-full object-contai p-10"
            />
          </div>
          <div className="flex min-h-[42dvh] w-full items-center justify-center overflow-hidden bg-[#ffffff] pt-4 sm:min-h-0">
          <video
              src="/images/clientes-07.webm"
              autoPlay
              loop
              muted 
              playsInline
              className="block h-full max-w-full object-contain p-8"
            />
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

      {/* DS */}
      <section
      className="
       flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 bg-[#000000] p-6 leading-[1.2] sm:gap-8 sm:p-10 lg:px-55">

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
        text-center text-[36px] font-[700] text-white sm:text-[48px]"
        >
          Inventa<span className="m-0 text-white/50">Ds.</span>
        </p>
        <p className="max-w-[800px] text-center text-[18px] font-[400] text-white/60 sm:text-[24px]">Ao fim do projeto foi desenvolvido um InvendaDs para aumentar velocidade de desenolvimento e consistência das interfaces.</p>
        <button
        onClick={() => window.open("/projects/inv-ds", "_blank", "noopener,noreferrer")}
        className="
        border bg-[#ffffff] p-4 text-black font-[600] hover:bg-[#000000] hover:text-white sm:p-5 cursor-pointer
        ">Ver Design System</button>
      </section>
    </main>
  )
}
