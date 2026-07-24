import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'

export default function ConverterPage() {
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
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Criando um controle de moedas para despesas de viagem</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Figma</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Cursor</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Claude Opus 4.6</span>
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">Nos últimos três meses, estudei JavaScript com um objetivo pessoal: ir além da teoria e construir algo real. Desafiei-me a criar um projeto para resolver um problema pessoal: controlar minhas compras em moeda estrangeira durante viagens.</p>
        <p className="text-[18px] font-normal leading-[1.5] text-black">Aprofundei-me em design de produto para entregar uma solução de ponta a ponta. Eu mesmo a programei com assistência de IA para aplicar os conceitos que aprendi: funções assíncronas, promises, tratamento de erros, consumo de APIs, integrações e criação de endpoints.</p>
      </section>

      {/* Hero video */}
      <section className="flex flex-col gap-6 mb-20">
        <div className="overflow-hidden md:rounded-[32px]">
          <video src="/images/currency-001.mov" autoPlay loop muted playsInline className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Application */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Aplicação</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">O app web deveria converter moedas entre ARS e BRL e ser integrado a um banco de dados que registra o valor e o ID da compra, o tipo de compra, a cotação no momento da transação e o registro de data e hora.</p>
      </section>

      {/* Backend */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Backend</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">Uma aplicação Node.js simples hospedada na Render, responsável por fornecer a cotação atual entre ARS e BRL, registrar compras no banco de dados e recuperar todas as compras registradas.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-002.png" alt="Backend architecture" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Frontend + AI */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Frontend + IA</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">A interface foi desenhada no Figma e implementada com o MCP do Figma. Durante o desenvolvimento, aprimorei o tratamento de eventos (event listeners do DOM) para melhorar a UX e adicionar animações.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-003.png" alt="Frontend implementation" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">Usei o Claude como assistente de IA para buscar dados, fazer requisições POST, criar endpoints e trabalhar com sessionStorage.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-004.png" alt="AI-assisted development" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Conclusão</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">Este projeto reforça algo que se tornou cada vez mais evidente: com estudo e IA, é possível transformar ideias em produtos ou negócios rapidamente.</p>
      </section>
    </motion.main>
  )
}
