import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function RepSalesAppPage() {
  useScrollReveal()

  return (
    <motion.main 
      className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section - Intro */}
      <section className="flex flex-col gap-14 mb-[160px]">
        <div class="flex flex-col gap-4">
        <BackArrow />
          <h1 className="font-['Figtree',sans-serif] text-[44px] md:text-[44px] font-medium text-[black]">Sales Reps App</h1>
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[22px] text-[black]">The Sales Rep App is a tool used by sales representatives to manage customers, access product information, create orders, and support their sales routine in the field. The MVP had already validated that the product could support the sales operation, but usage still depended on how well it fit into the rep’s existing workflow.</p>
        </div>

        {/* Team */}
        <div class="flex flex-row justify-between">
          <div class="flex flex-col gap-2">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">ROLE</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">Product Designer</p>
          </div>

          <div class="flex flex-col gap-2">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">TIMELINE</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">June - September, 2025</p>
          </div>

          <div class="flex flex-col gap-2">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">TEAM</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">1 Product Designer</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">1 Product Manager</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">2 Backend Eng</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">1 Frontend Eng</p>
          </div>

          <div class="flex flex-col gap-2">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">SKILLS</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">Product Design</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">Product Strategy</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">Prototype</p>
            <p className="font-['Figtree',sans-serif] text-[18px] md:text-[18px] text-[black]">Design System</p>
          </div>
        </div>
      </section>

      {/* Section - Problem */}

      <section className="flex flex-col gap-14 mb-[160px]">
        <div class="flex flex-col gap-4">
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">PROBLEM</p>
          <h2 className="font-['Figtree',sans-serif] text-[44px] md:text-[32px] font-medium text-[black]">What should Inventa improve in their first App?</h2>
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[22px] text-[black]">Sales reps needed to move quickly between customer context, catalog browsing, product selection, and order creation. When the app slowed them down or made information hard to find, they defaulted back to manual workarounds.</p>
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-[56px]">
          {/* Text 1 */}
          <div className="flex flex-col gap-2">
            <p className="font-['Figtree',sans-serif] text-[22px] md:text-[24px] font-medium text-black">Adoption</p>
            <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Reps had existing habits and needed the app to feel faster than their manual workflow.</p>
            <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">The design challenge was to reduce the cost of using the tool during a live sales interaction.</p>
          </div>

          {/* Text 2 */}
          <div className="flex flex-col gap-2">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[24px] font-medium text-black">Independence</p>
            <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Reps needed to decide quickly whether a store was worth visiting or reactivating.</p>
            <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">This will reduce the need to jump between customer details and order history.</p>
          </div>

          {/* Text 3 */}
          <div className="flex flex-col gap-2">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[24px] font-medium text-black">Iterating with Feedback</p>
            <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Going wide in ideation and rapidly testing concepts with users.</p>
            <p className="font-['Figtree',sans-serif] text-[18px] font-medium text-[#8C8C8C]">Continuously iterating on concepts and validating product decisions.</p>
          </div>
        </div>

      </section>

      {/* Section - discovery */}

      <section className="flex flex-col gap-14 mb-[160px]">
        <div class="flex flex-col gap-4">
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">DISCOVERY</p>
          <h2 className="font-['Figtree',sans-serif] text-[44px] md:text-[32px] font-medium text-[black]">Understanding the Adoption Gap</h2>
          <p className="font-['Figtree',sans-serif] text-[16px] md:text-[22px] text-[black]">To understand where adoption was breaking down, I reviewed the rep workflow across customer management, catalog navigation, and order creation. I combined operational feedback, product usage signals, and conversations with the Sales Reps to identify where the app was creating unnecessary effort.</p>
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-[56px]">
          {/* Image 1 */}
          <img
            src="/images/shadown-01.png"
            alt="getting feedback with sales reps"
            className="w-full h-[400px] object-contain"
          />

          {/* Image 2 */}
          <img
            src="/images/shadown-02.png"
            alt="getting feedback with sales reps"
            className="w-full h-[400px] object-contain"
          />

          {/* Image 3 */}
          <img
            src="/images/shadown-03.png"
            alt="getting feedback with sales reps"
            className="w-full h-[400px] object-contain"
          />

          <p className="col-span-3 font-['Figtree',sans-serif] text-[16px] font-medium text-[#8C8C8C] text-center">We observed how they used them, how they felt, and got tons of valuable feedback.</p>
        </div>

      </section>
    </motion.main>
  )
}
