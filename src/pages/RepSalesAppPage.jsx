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
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 sm:min-h-[100dvh]">
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
              <p className="text-[22px] font-[300]">A Inventa é uma empresa full-service responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais em São Paulo.</p>
            </div>

            <div className="flex flex-col  justify-between gap-12 lg:pb-0 pb-10">
              <div className="flex flex-col justify-between gap-4">
                <p className="text-[16px] font-[700] text-black/50 leading-none">TIME</p>
                <p className="text-[18px] font-[400] text-black leading-none">1 Product Designer, 2 Backends e 1 Frontend </p>
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

      {/* Long story short */}
      <section
        className="flex flex-col justify-center min-h-[100dvh] leading-[1.2] bg-[#FCFCFC] gap-[120px] px-4 py-20 md:p-20">
          <div className="reveal-on-scroll flex flex-col gap-8">
            <p className="text-[16px] font-[700] text-[#000000]">SE VOCÊ PRECISASSE LER SÓ UMA PARTE, SERIA ESSSA:</p>
            <p className="sm:text-[32px] text-[28px] font-[400] text-[#7D7D7D]">
              A adoção do aplicativo de vendas era tão baixa por conta da complexidade em criar pedidos que os <span className="text-[#000000]">consultores desistiam de usar.</span>
            </p>
            <div className="flex flex-col gap-3">
              <p className="sm:text-[32px] text-[28px] font-[400] text-[#7D7D7D]">
                Eu foquei em melhorar adoção e confiança dos usuários, que resultou em:
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center mt-8 sm:mt-0">
                <p className="sm:text-[32px] text-[28px] font-[400] text-[#000000]">~R$ 400k GMV Mensal</p>
                <div className="hidden sm:block w-1 h-1 bg-[#000000] rounded-full"></div>
                <p className="sm:text-[32px] text-[28px] font-[400] text-[#000000]">~7k orçamentos criados</p>
                <div className="hidden sm:block w-1 h-1 bg-[#000000] rounded-full"></div>
                <p className="sm:text-[32px] text-[28px] font-[400] text-[#000000]">~4.5k pedidos.</p>
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
              O app de vendas da Inventa é tão ineficiente que <span className="text-white">papel e caneta se tornam a opção mais rápida </span> para negociar e fechar pedidos.
            </p>
          </div>

          {/* motives */}
          <div className="reveal-on-scroll reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-x-20">
            <div className="flex flex-col gap-4">
              <p className="text-[40px] font-[400] text-white/50">01</p>
              <p className="text-[24px] font-[400] text-white leading-[1.5] mb-10">Baixa adoção. Poucos consultores utilizavam o App de vendas.</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[40px] font-[400] text-white/50">02</p>
              <p className="text-[24px] font-[400] text-white leading-[1.5] mb-10">CS recebia os pedidos em fotos no WhatsApp.</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[40px] font-[400] text-white/50">03</p>
              <p className="text-[24px] font-[400] text-white leading-[1.5] mb-10">Novos consultores entrando por semana.</p>
            </div>
          </div>
      </section>

      {/* WHERE I STARTED */}
      <section
        className="flex flex-col justify-center min-h-[100dvh] bg-[#ffffff] gap-[64px] sm:gap-[90px] px-4 py-20 md:p-20">
          <div className="reveal-on-scroll flex flex-col gap-6">
            <p className="text-[16px] font-[700] text-[#000000]">ONDE EU COMECEI</p>
            <p className="sm:text-[32px] text-[28px] font-[300] text-[#7D7D7D]">
              Nós sabiamos que todas as jornadas precisavam de melhorias ou até mesmo serem refeitas. Então, optamos em iniciar em perguntas do que respostas. 
            </p>
          </div>

          {/* motives */}
          <div className="reveal-on-scroll reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-x-20">
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
              </svg>
              <p className="text-[24px] font-[400] text-[#000000] mb-10">Como podemos aumentar a confiança e adoção do App?</p>
            </div>
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
              </svg>
              <p className="text-[24px] font-[400] text-[#000000] mb-10">Onde devemos priorizar para gerarmos impacto rápido?</p>
            </div>
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
              </svg>
              <p className="text-[24px] font-[400] text-[#000000] mb-10">Em que parte na geração de pedidos o App está dificultando?</p>
            </div>
          </div>
      </section>

      {/* Discovery */}
      <section
        className="flex flex-col justify-center bg-[ffffff] gap-[80px] p-4 py-20 md:p-20">
          <div className="reveal-on-scroll flex flex-col gap-6">
            <p className="text-[16px] font-[700] text-[#000000]">DISCOVERY</p>
            <p className="sm:text-[32px] text-[28px] font-[400] text-[#7D7D7D]">
              Conduzi Entrevistas, Testes de usabilidade e Rotas com consultores para entender melhor como a jornada de negociação funciona.
            </p>
            <p className="sm:text-[32px] text-[28px] font-[400] text-[#7D7D7D]">
              O discovery revelou que a <span className="text-[#000000]">arquitetura da informação, a falta de funcionalidades básicas e falta de visibilidade dentro do sistema atrapalhavam a negociação com lojistas.</span>
            </p>
          </div>

          {/* images */}
          <div className="reveal-on-scroll reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-20 md:flex-1">
            <div className="h-[400px] bg-[url('/images/discovery-1.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="h-[400px] bg-[url('/images/discovery-2.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="h-[400px] bg-[url('/images/discovery-3.png')] bg-no-repeat bg-cover bg-center"></div>
          </div>
      </section>

      {/* Solution 1 */}
      <section className="reveal-on-scroll flex flex-col bg-[#ffffff] gap-2 p-4 md:px-20 mt-20">
        <div className="flex flex-col gap-6 mb-10">
          <p className="text-[16px] font-[700] text-[#000000]">JORNADA: CLIENTES</p>
          <p className="sm:text-[32px] text-[28px] font-[300] text-[#7D7D7D]">
            Lista de clientes, Análise de crédito e histórico de pedidos 
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-y-20 md:grid-cols-3 overflow-hidden">
          <div className="h-[600px] bg-[url('/images/sales-app/clientes-1.png')] bg-center bg-cover bg-no-repeat" />
          <div className="h-[600px] bg-[url('/images/sales-app/clientes-2.png')] bg-center bg-cover bg-no-repeat" />
          <div className="h-[600px] bg-[url('/images/sales-app/clientes-3.gif')] bg-center bg-cover bg-no-repeat" />
        </div>
      </section>

      {/* Solution 2 */}
      <section className="reveal-on-scroll flex flex-col bg-[#ffffff] gap-2 p-4 md:px-20 mt-20">
        <div className="flex flex-col gap-6 mb-10">
          <p className="text-[16px] font-[700] text-[#000000]">JORNADA: CATALOGO</p>
          <p className="sm:text-[32px] text-[28px] font-[300] text-[#7D7D7D]">
            Lista de produtos, Detalhes do produto e Carrinho
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-y-20 md:grid-cols-3 overflow-hidden">
          <div className="h-[600px] bg-[url('/images/sales-app/catalogo-1.png')] bg-center bg-cover bg-no-repeat" />
          <div className="h-[600px] bg-[url('/images/sales-app/catalogo-2.png')] bg-center bg-cover bg-no-repeat" />
          <div className="h-[600px] bg-[url('/images/sales-app/catalogo-3.gif')] bg-center bg-cover bg-no-repeat" />
        </div>
      </section>

      <hr className="border-[#000000]/30 my-10"/>

      {/* Solution 3 */}
      <section className="reveal-on-scroll flex flex-col bg-[#ffffff] gap-2 p-4 md:px-20 mt-20">
        <div className="flex flex-col gap-6 mb-10">
          <p className="text-[16px] font-[700] text-[#000000]">JORNADA: PAGAMENTO</p>
          <p className="sm:text-[32px] text-[28px] font-[300] text-[#7D7D7D]">
            Métodos de pagamento, Selecionar parcela e Pedido concluído
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-y-20 md:grid-cols-3 overflow-hidden">
          <div className="h-[600px] bg-[url('/images/sales-app/pagamentos-1.png')] bg-center bg-cover bg-no-repeat" />
          <div className="h-[600px] bg-[url('/images/sales-app/pagamentos-2.png')] bg-center bg-cover bg-no-repeat" />
          <div className="h-[600px] bg-[url('/images/sales-app/pagamentos-3.gif')] bg-center bg-cover bg-no-repeat" />
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
