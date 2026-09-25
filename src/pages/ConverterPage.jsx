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
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Building a Travel Expense Tracker</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Figma</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Cursor</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Claude Opus 4.6</span>
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">I spent three months learning JavaScript to build something I could use. I chose to solve a personal problem: tracking purchases in foreign currencies while traveling.</p>
        <p className="text-[18px] font-normal leading-[1.5] text-black">I designed and built the app myself with AI support. This helped me practice what I had learned: async functions, promises, error handling, APIs, integrations, and endpoints.</p>
      </section>

      {/* Hero video */}
      <section className="flex flex-col gap-6 mb-20">
        <div className="overflow-hidden md:rounded-[32px]">
          <video src="/images/currency-001.mov" autoPlay loop muted playsInline className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Application */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">The App</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">The web app needed to convert between Argentine pesos (ARS) and Brazilian reais (BRL). It also needed a database to store each purchase’s amount, ID, type, exchange rate, date, and time.</p>
      </section>

      {/* Backend */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Backend</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">A simple Node.js app hosted on Render provides the current ARS to BRL exchange rate, saves purchases, and retrieves past purchases.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-002.png" alt="Backend architecture" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Frontend + AI */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Frontend + AI</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">I designed the interface in Figma and built it using Figma MCP. I improved how the app handled user actions with DOM event listeners and added animations.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-003.png" alt="Frontend implementation" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">I used Claude to help fetch data, make POST requests, create endpoints, and work with sessionStorage.</p>
        <div className="overflow-hidden md:rounded-[32px]">
          <img src="/images/currency-004.png" alt="AI-assisted development" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Figtree',sans-serif] text-[24px] font-medium leading-[1.2] text-black">What I Learned</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black">This project showed me how learning and AI can help turn ideas into working products or businesses quickly.</p>
      </section>
    </motion.main>
  )
}
