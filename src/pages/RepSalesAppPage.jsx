import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function RepSalesAppPage() {
  useScrollReveal()

  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <motion.main 
        className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section - Intro */}
        <section className="flex flex-col gap-10 mb-[80px]">
          <div className="flex flex-col gap-4">
          <BackArrow />
            <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[40px] font-medium text-[black]">App para Representantes de Vendas</h1>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">O App de Representantes de Vendas é uma ferramenta para gerenciar clientes, acessar informações de produtos, criar pedidos e apoiar a rotina de vendas em campo.</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">O MVP já havia validado que o produto podia apoiar a operação comercial, mas seu uso ainda dependia de como ele se encaixava no fluxo de trabalho existente dos representantes.</p>
          </div>

          {/* Team */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">FUNÇÃO</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Designer de Produto</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">PERÍODO</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Jun - Dez de 2025</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">EQUIPE</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Product Designer</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">2 Backend Eng</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Frontend Eng</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">COMPETÊNCIAS</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Product Design</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">UX Research</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Prototype</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Design Interaction</p>
            </div>
          </div>
        </section>

        {/* Section - Problem */}

        <section className="flex flex-col gap-10 mb-[80px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">PROBLEMA</p>
            <h2 className="font-['Figtree',sans-serif] text-[28px] md:text-[32px] font-medium text-[black] max-w-[456px]">O que a Inventa deveria melhorar em seu primeiro app?</h2>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">Os representantes precisavam alternar rapidamente entre o contexto do cliente, a seleção de produtos e a criação de pedidos. E por não terem um app, recorriam a soluções manuais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-[56px]">
            {/* Text 1 */}
            <div className="flex flex-col gap-2">
              <p className="font-['Source_Serif_4',sans-serif] text-[20px] md:text-[20px] font-medium text-black">Adoção</p>
              <p className="font-['Figtree',sans-serif] text-[16px] font-regular text-[#8C8C8C]">O desafio de design era reduzir o esforço de usar a ferramenta durante uma interação comercial ao vivo.</p>
            </div>

            {/* Text 2 */}
            <div className="flex flex-col gap-2">
              <p className="font-['Source_Serif_4',sans-serif] text-[20px] md:text-[20px] font-medium text-black">Autonomia</p>
              <p className="font-['Figtree',sans-serif] text-[16px] font-regular text-[#8C8C8C]">Os representantes precisavam decidir rapidamente se valia a pena visitar ou reativar uma loja.</p>
            </div>

            {/* Text 3 */}
            <div className="flex flex-col gap-2">
              <p className="font-['Source_Serif_4',sans-serif] text-[20px] md:text-[20px] font-medium text-black">Iteração com feedback</p>
              <p className="font-['Figtree',sans-serif] text-[16px] font-regular text-[#8C8C8C]">Explorar várias ideias e testar rapidamente conceitos com usuários.</p>
            </div>
          </div>

        </section>

        {/* Section - discovery */}

        <section className="flex flex-col gap-10 mb-[80px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C] ">UX RESEARCH</p>
            <h2 className="font-['Figtree',sans-serif] text-[28px] md:text-[32px] font-medium text-[black] max-w-[372px]">Identificando problemas e oportunidades</h2>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">Para compreender o comportamento dos representantes, ampliamos a análise para toda a jornada de compra e suas interações com o lojista. Esse mapeamento permitiu identificar necessidades, pontos de atrito e oportunidades ao longo do processo, trazendo mais clareza sobre quais funcionalidades priorizar em cada etapa da experiência no aplicativo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-y-[4px]">
            {/* Image 1 */}
            <img
              src="/images/shadown-01.png"
              alt="Coletando feedback com representantes de vendas"
              className="w-full h-[400px] object-cover"
            />

            {/* Image 2 */}
            <img
              src="/images/shadown-02.png"
              alt="Coletando feedback com representantes de vendas"
              className="w-full h-[400px] object-cover"
            />

            {/* Image 3 */}
            <img
              src="/images/shadown-03.png"
              alt="Coletando feedback com representantes de vendas"
              className="w-full h-[400px] object-cover"
            />

          </div>
        </section>

        {/* Section - Core flows */}
        <section className="flex flex-col gap-14 mb-[160px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">FLUXOS PRINCIPAIS</p>
            <h2 className="font-['Figtree',sans-serif] text-[28px] md:text-[32px] font-medium text-[black]">Prototipação e testes</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] gap-x-10 items-end ">
            <div className="w-full h-[464px] overflow-hidden bg-[#F4EAE2]">
              <video
                  src="/videos/sales-app-core-1.mov"
                  className="w-full h-[464px] object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
              />
            </div>

              <div className="flex flex-col gap-2">
                <p className="font-['Source_Serif_4',sans-serif] text-[24px] md:text-[28px] font-medium text-black">Contexto do cliente</p>
                <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Adicionar clientes, análise de crédito e pedidos anteriores</p>
              </div>

              <div className="w-full h-[464px] overflow-hidden bg-[#F4EAE2]">
              <video
                  src="/videos/sales-app-core-2.mov"
                  className="w-full h-[464px] object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
              />
            </div>

              <div className="flex flex-col gap-2">
                <p className="font-['Source_Serif_4',sans-serif] text-[24px] md:text-[28px] font-medium text-black">Navegação no catálogo</p>
                <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Encontrar produtos por marca e informações do produto</p>
              </div>

              <div className="w-full h-[464px] overflow-hidden bg-[#F4EAE2]">
              <video
                  src="/videos/sales-app-core-3.mov"
                  className="w-full h-[464px] object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
              />
            </div>

              <div className="flex flex-col gap-2">
                <p className="font-['Source_Serif_4',sans-serif] text-[24px] md:text-[28px] font-medium text-black">Seleção de produtos</p>
                <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Carrinho para verificar o valor mínimo do pedido e os produtos adicionados</p>
              </div>

              <div className="w-full h-[464px] overflow-hidden bg-[#F4EAE2]">
              <video
                  src="/videos/sales-app-core-4.mov"
                  className="w-full h-[464px] object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
              />
            </div>

              <div className="flex flex-col gap-2">
                <p className="font-['Source_Serif_4',sans-serif] text-[24px] md:text-[28px] font-medium text-black">Pagamento simplificado</p>
                <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Seleção de parcelas com menos esforço cognitivo</p>
              </div>
          </div>

        </section>

        {/* Section - Design decisions */}
        <section className="flex flex-col gap-14 mb-[160px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">DECISÕES DE DESIGN</p>
            <h2 className="font-['Figtree',sans-serif] text-[28px] md:text-[32px] font-medium text-[black]">Foco por padrão, detalhes quando necessário</h2>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">Em vez de expor todos os detalhes de imediato, priorizamos as informações de que os representantes precisavam com mais frequência e mantivemos os detalhes secundários disponíveis quando necessário. Isso ajudou a experiência a manter o foco sem remover o acesso a contextos importantes.</p>
          </div>


          <div className="grid grid-cols-1 gap-[24px]">
            <div className="flex flex-col gap-4">
              <h2 className="font-['Source_Serif_4',sans-serif] text-[24px] md:text-[24px] font-medium text-[black]">Priorizar velocidade em vez de exploração</h2>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[#8C8C8C]">Como os representantes costumam usar o app enquanto conversam com clientes, priorizamos a velocidade em vez de uma navegação profunda. O objetivo não era apenas criar uma experiência de catálogo bonita, mas ajudar os representantes a encontrar produtos, adicionar itens e avançar com o mínimo de interrupção.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="w-full h-[320px] overflow-hidden bg-[#F4EAE2]">
                <img
                  src="/images/sales-app-decision-5.png"
                  alt="Coletando feedback com representantes de vendas"
                  className="w-full h-[400px] object-contain"
                />
              </div>
              <div className="w-full h-[320px] bg-[#F4EAE2] flex items-end justify-center overflow-hidden">
                <img
                  src="/images/sales-app-decision-4.png"
                  alt="Coletando feedback com representantes de vendas"
                  className="h-[420px] w-auto object-contain"
                />
              </div>
              <div className="w-full h-[320px] overflow-hidden bg-[#F4EAE2]">
                <img
                  src="/images/sales-app-decision-1.png"
                  alt="Coletando feedback com representantes de vendas"
                  className="w-full h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-14 mb-[160px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">RESULTADOS</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">

              <div className="w-full h-[320px] bg-[#F4EAE2] flex flex-col justify-end p-[24px]">
                <p className="font-['Figtree', sans-serif] text-[20px] md:text-[24px] font-medium text-black">Pedidos</p>
                <p className="font-['Figtree', sans-serif] text-[48px] md:text-[56px] font-regular text-black">+7.000</p>
              </div>

              <div className="w-full h-[320px] bg-[#F4EAE2] flex flex-col justify-end p-[24px]">
                <p className="font-['Figtree', sans-serif] text-[20px] md:text-[24px] font-medium text-black">GMV mensal</p>
                <p className="font-['Figtree', sans-serif] text-[48px] md:text-[56px] font-regular text-black">R$ 413k</p>
              </div>

              <div className="w-full h-[320px] bg-[#F4EAE2] flex flex-col justify-end p-[24px]">
                <p className="font-['Figtree', sans-serif] text-[20px] md:text-[24px] font-medium text-black">Consultores</p>
                <p className="font-['Figtree', sans-serif] text-[48px] md:text-[56px] font-regular text-black">+100</p>
              </div>

            </div>
          </div>
        </section>

      </motion.main>
    </div> 
  )
}
