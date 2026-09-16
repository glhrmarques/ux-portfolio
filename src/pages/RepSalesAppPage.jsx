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
    <main>
      <section ref={container}>
        {/* Hero */}
        <div className="mx-auto max-w-screen-2xl grid w-full grid-cols-1 lg:grid-cols-2 sm:min-h-[90dvh]">
          {/* left column */}
          <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex sm:min-h-[60dvh] w-full flex-col gap-12 p-4 sm:p-10 md:p-10"
          >
            <BackArrow />
            <div className="flex flex-col gap-6">
              <h1 className="text-[32px] font-[500] leading-[1.5] max-w-[400px]">Escalando a Operação e Construindo Confiança</h1>
              <p className="text-[20px] font-[400]">A Inventa é uma empresa full-service responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais em São Paulo.</p>
            </div>

            <div className="flex flex-col  justify-between gap-12 lg:pb-0 pb-10">
              <div className="flex flex-col justify-between gap-4">
                <p className="text-[16px] font-[700] text-black/50 leading-none">MEU PAPEL</p>
                <p className="text-[20px] font-[400] text-black leading-none">Product Designer</p>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <p className="text-[16px] font-[700] text-black/50 leading-none">TIME</p>
                <p className="text-[20px] font-[400] text-black leading-none">Engenheiros (Backend e Frotend)</p>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div 
          className="
          min-h-[100dvh] w-full bg-[url('/images/cover-background-1.png')]
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

      {/* IMPACTO */}
      <section className="min-h-[80dvh] flex items-center bg-[#000000]">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl py-10 sm:py-0 px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#ffffff] mt-1">IMPACTO</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[64px] lg:w-[70%]">
            <p className="text-[24px] font-[400] text-[#ffffff] max-w-[1000px]">Diante da baixa adoção, conduzi pesquisas e implementei uma nova arquitetura para simplificar a experiência e aumentar a confiança dos usuários na criação de pedidos no aplicativo de vendas B2B.</p>
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-[64px]">
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[400]">+R$ 400k</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">GMV mensal</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[400]">+7.000</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">Orçamentos criados</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[400]">+4.000</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">Pedidos criados</p>
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
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">O app de vendas da Inventa era tão ineficiente que papel e caneta se tornaram a opção mais fácil para fechar pedidos.</p>
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Consultores iniciavam o fluxo de pedido, mas nunca finalizavam.</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Alto volume de contato com CS para criarem os pedidos enviados por WhatsApp.</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Usuários não conseguiam selecionar o boleto parcelado.</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Eu era o único Product Designer para repensar a UX do MVP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">RESEARCH</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">Entrevistei +12 consultores para entender a lógica por trás das pré visitas e visitas, além de identificar quais são as prioridades para uma negociação bem-sucedida.</p>
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">Acompanhei +5 de consultores em suas rotas para entender como as negociações acontecem na prática e identificar necessidades críticas e definir prioridades para evolução.</p>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[320px] w-full bg-[url('/images/discovery-1.png')] bg-no-repeat bg-cover bg-center lg:h-[228px] lg:flex-1"></div>
              <div className="h-[320px] w-full bg-[url('/images/discovery-2.png')] bg-no-repeat bg-cover bg-center lg:h-[228px] lg:flex-1"></div>
              <div className="h-[320px] w-full bg-[url('/images/discovery-3.png')] bg-no-repeat bg-cover bg-center lg:h-[228px] lg:flex-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="flex items-center bg-[#FFFFFF] pt-10">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">O QUE ENTREGUEI</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">Evoluímos de uma página centralizadora para uma arquitetura escalável, capaz de acompanhar cada etapa da jornada de negociação e incorporar novas funcionalidades conforme as de cada etapa.</p>
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">Dessa forma, consegui disponibilizar funcionalidades de acordo com o contexto de cada etapa da jornada — como pré-visita, visita e pós-visita — e criar funis para acompanhar a conversão e identificar pontos de abandono.</p>
            <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
              <div className="flex flex-col items-center gap-2">
                <p className="text-center text-[16px] font-[500] text-[#000000]/50">ANTES</p>
                <p className="text-center text-[16px] font-[400] text-[#000000]/50">Todas jornadas juntas</p>
                <img
                  src="/images/sales-app/old-1"
                  alt="Fluxo de pedido anterior concentrado em uma única jornada"
                  className="h-auto w-full max-w-[202px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-center text-[16px] font-[500] text-[#000000]/50">DEPOIS</p>
                <p className="text-center text-[16px] font-[400] text-[#000000]/50">Cada jornada separada</p>
                <img
                  src="/images/sales-app/SalesApp-screens.png"
                  alt="Fluxos de clientes, produtos e pagamento separados"
                  className="h-auto w-full max-w-[560px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY 1*/}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">CLIENTES</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Lista de clientes com limite de crédito disponível</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Solicitar reanálise de Crédito</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Ver histórico de pedidos do cliente</p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[544px] w-full bg-[url('/images/sales-app/clientes-1.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/clientes-2.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/clientes-3.gif')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY 2*/}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">CATÁLOGO</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Salvamento automático após iniciar um orçamento</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Carrinho para acompanhar limite de crédito, itens adicionados e valor do pedido mínimo</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Página de detalhes do produto sobre informações de desconto</p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[544px] w-full bg-[url('/images/sales-app/catalogo-1.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/catalogo-2.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/catalogo-3.gif')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY 3*/}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">PAGAMENTO</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Seleção do boleto parcelado de forma simples</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Salvar pedido como rascunho ou compartilhar por PDF</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Tela de confirmação para prevenir erros antes de confirmar o pedido</p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[544px] w-full bg-[url('/images/sales-app/pagamentos-1.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/pagamentos-2.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/pagamentos-3.gif')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* DS
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
        <p className="reveal-on-scroll reveal-delay-2 max-w-[800px] text-center text-[18px] font-[400] text-[#ffffff] sm:text-[24px] leading-[1.5]">Design System desenvolvido para aumentar velocidade de desenolvimento e consistência das interfaces.</p>
        <button
        onClick={() => window.open("/projects/inv-ds", "_blank", "noopener,noreferrer")}
        className="
        reveal-on-scroll reveal-delay-2 border bg-[#ffffff] p-4 text-black font-[600] hover:bg-[#000000] hover:text-white sm:p-5 cursor-pointer
        ">Ver Design System</button>
      </section>
      */}
    <Footer />
    </>
  )
}
