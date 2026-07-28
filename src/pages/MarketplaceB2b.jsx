import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function MarketplaceB2b() {
  useScrollReveal()

  return (
    <div className="mx-auto w-full max-w-[1440px]">
        <motion.main 
          className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

        <section className="flex flex-col gap-10 mb-[80px]">
          <div className="flex flex-col gap-4">
          <BackArrow />
            <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[40px] font-medium text-[black]">Marketplace B2B</h1>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">A plataforma é um marketplace B2B que aproxima grandes marcas de pequenos lojistas. Ao assumir a operação logística e comercial, oferece ao fornecedor mais controle sobre preços e demanda, enquanto garante aos lojistas melhores condições de compra e entregas rápidas.</p>
          </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">INDUSTRIA</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">B2B</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Marketplace</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">SQUAD</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Product Designer</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Product Manager</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Backend Eng</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Frontend Eng</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">ENTREGÁVEIS</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">User Interface</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">User Experience</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Prototype</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Product Design</p>
            </div>
          </div>
        </section>

        {/* Section - Challenge */}

        <section className="flex flex-col gap-10 mb-[80px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-bold text-[#8C8C8C]">DESAFIO</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">No varejo B2B, a negociação de condições comerciais faz parte natural da compra. Porém, no marketplace, os lojistas não tinham um espaço claro para acessar descontos, frete grátis ou outras vantagens antes de finalizar o pedido.</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">Isso criava atrito na jornada: muitos compradores abandonavam o carrinho ou precisavam acionar o time de CX para solicitar condições ao fornecedor. Um processo burocrático, lento e pouco escalável.</p>
          </div>
        </section>

        {/* Section - Solution */}

        <section className="flex flex-col gap-10 mb-[80px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-bold text-[#8C8C8C]">SOLUÇÃO</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">Integramos os diferencias comerciais de cada marca nos dois principais pontos de decisão da jornada: página da marca e a página de detalhes do produto.</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">A proposta partiu de um comportamento central do pequeno lojista de reabastecer a gôndola comprando volumes maiores de um mesmo item. A interface passou a tornar visíveis os incentivos ligados a esse comportamento, como descontos progressivos por quantidade, frete grátis e cupons disponíveis.</p>
          </div>
        </section>

        <section className="flex flex-col gap-10 mb-[80px]">
        <div className="flex flex-col gap-4 reveal-on-scroll reveal-delay-1">
            <div className="flex w-full h-[540px] bg-[#F5F0EC] items-center justify-center overflow-hidden pt-[190px]">
                <img
                      src="/images/marketplace-02.png"
                      alt="print do marketplace com os novos componentes"
                      className="w-[70%] object-contain"
                />
            </div>
            <div className="grid grid-cols-[1fr_3fr] h-fit gap-4 reveal-on-scroll reveal-delay-1">
                <div className="flex h-[540px] min-w-0 bg-[#F5F0EC] items-center justify-center py-7">
                    <img
                          src="/images/marketplace-01.png"
                          alt="print do marketplace com os novos componentes"
                          className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="flex h-[540px] min-w-0 bg-[#F5F0EC] items-center justify-center p-10 ">
                    <img
                          src="/images/marketplace-03.png"
                          alt="print do marketplace com os novos componentes"
                          className="max-h-full max-w-full object-contain"
                    />
                </div>
            </div>
        </div>
        </section>


        <section className="flex flex-col gap-14 mb-[160px] reveal-on-scroll reveal-delay-1">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">IMPACTO</p>
            
            <div className="flex flex-row">
              <div className="w-full h-[320px] bg-[#F5F0EC] flex flex-col justify-end p-[24px]">
                <p className="font-['Figtree', sans-serif] text-[20px] md:text-[24px] font-medium text-black">Tickets abertos sobre condições comerciais</p>
                <p className="font-['Figtree', sans-serif] text-[48px] md:text-[56px] font-regular text-black">-40%</p>
              </div>

            </div>
          </div>
        </section>
      </motion.main>
    </div> 
  )
}
