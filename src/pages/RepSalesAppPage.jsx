import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function RepSalesAppPage() {
  useScrollReveal()

  return (
    <main className="mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-2 w-full min-h-[90dvh]">
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
      flex flex-col justify-center w-full m-auto min-h-[100dvh] lg:px-55 leading-[1.2]">
        <p
        className="
        text-[48px] font-[400] text-black text-center"
        >O app de vendas da Inventa é tão ineficiente que papel e caneta se tornam a opção mais rápida para negociar e fechar pedidos.</p>
      </section>
    </main>
  )
}
