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
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Building a currency tracker for travel expenses</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Figma</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Cursor</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Claude Opus 4.6</span>
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">In the last 3 months, I have studied JavaScript with a personal objective: to go beyond theory and build something real. I challenged myself to create a project to solve a personal problem, controlling my purchases in a foreign currency while traveling.</p>
        <p className="text-[18px] font-normal leading-[1.5] text-black">I pushed further into product design to deliver an end-to-end solution. I coded it myself with AI assistance to apply the concepts I learned (async functions, promises, error handling, API consumption, integrations, and creating endpoints).</p>
      </section>

      {/* Hero video */}
      <section className="flex flex-col gap-6 mb-20">
        <div className="overflow-hidden md:rounded-[32px]">
          <video src="/images/currency-001.mov" autoPlay loop muted playsInline className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Application */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Aplication</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">The web app should be capable of converting currency between ARS and BRL, and be integrated with a database that registers the purchase value, ID, type of purchase, exchange rate at the time of the transaction, and timestamp.</p>
      </section>

      {/* Backend */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Backend</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">A simple Node.js application hosted on Render, responsible for providing the current exchange rate between ARS and BRL, registering purchases in the database, and retrieving all recorded purchases.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-002.png" alt="Backend architecture" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Frontend + AI */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Frontend + IA</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">The interface was designed in Figma and implemented using Figma's MCP. During development, I enhanced event handling (DOM event listeners) to improve UX and add animations.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-003.png" alt="Frontend implementation" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">I used Claude as my AI assistant for fetching data, making POST requests, endpoints, and working with sessionStorage.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-004.png" alt="AI-assisted development" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Conclusion</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">This project reinforces something that has become increasingly evident: with study and AI, it is possible to transform ideas into products or businesses quickly.</p>
      </section>
    </motion.main>
  )
}
