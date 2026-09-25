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
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black]">This B2B marketplace connects large brands with small retailers. It handles logistics and sales, giving suppliers more control over prices and demand, and retailers better deals and fast delivery.</p>
          </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">INDUSTRY</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">B2B</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">Marketplace</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">TEAM</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Product Designer</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Product Manager</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Backend Eng</p>
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] text-[black]">1 Frontend Eng</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">DELIVERABLES</p>
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
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-bold text-[#8C8C8C]">CHALLENGE</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">In B2B retail, negotiating a deal is a normal part of buying. But the marketplace had no clear place for retailers to find discounts, free shipping, or other offers before checkout.</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">Many buyers left their carts or contacted customer support to ask suppliers for better deals. The process was slow and hard to manage as demand grew.</p>
          </div>
        </section>

        {/* Section - Solution */}

        <section className="flex flex-col gap-10 mb-[80px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-bold text-[#8C8C8C]">SOLUTION</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">We added each brand’s offers to the two main places where buyers make decisions: the brand page and the product details page.</p>
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[18px] text-[black] font-regular">Small retailers often restock by buying larger quantities of the same item. We made related offers easy to find, including bulk discounts, free shipping, and coupons.</p>
          </div>
        </section>

        <section className="flex flex-col gap-10 mb-[80px]">
        <div className="flex flex-col gap-4 reveal-on-scroll reveal-delay-1">
            <div className="flex w-full h-[540px] bg-[#F5F0EC] items-center justify-center overflow-hidden pt-[190px]">
                <img
                      src="/images/marketplace-02.png"
                      alt="Marketplace showing the new components"
                      className="w-[70%] object-contain"
                />
            </div>
            <div className="grid grid-cols-[1fr_3fr] h-fit gap-4 reveal-on-scroll reveal-delay-1">
                <div className="flex h-[540px] min-w-0 bg-[#F5F0EC] items-center justify-center py-7">
                    <img
                          src="/images/marketplace-01.png"
                          alt="Marketplace showing the new components"
                          className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="flex h-[540px] min-w-0 bg-[#F5F0EC] items-center justify-center p-10 ">
                    <img
                          src="/images/marketplace-03.png"
                          alt="Marketplace showing the new components"
                          className="max-h-full max-w-full object-contain"
                    />
                </div>
            </div>
        </div>
        </section>


        <section className="flex flex-col gap-14 mb-[160px] reveal-on-scroll reveal-delay-1">
          <div className="flex flex-col gap-4">
            <p className="font-['Figtree',sans-serif] text-[16px] md:text-[16px] font-medium text-[#8C8C8C]">IMPACT</p>
            
            <div className="flex flex-row">
              <div className="w-full h-[320px] bg-[#F5F0EC] flex flex-col justify-end p-[24px]">
                <p className="font-['Figtree', sans-serif] text-[20px] md:text-[24px] font-medium text-black">Support requests about deals and payment terms</p>
                <p className="font-['Figtree', sans-serif] text-[48px] md:text-[56px] font-regular text-black">-40%</p>
              </div>

            </div>
          </div>
        </section>
      </motion.main>
    </div> 
  )
}
