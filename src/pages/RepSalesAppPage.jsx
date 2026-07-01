import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function RepSalesAppPage() {
  useScrollReveal()

  return (
    <main className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-[120px]">
      {/* Intro */}
      <section className="flex flex-col gap-6 mb-20">
        <BackArrow />
        <h1 className="font-['Poppins',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Designing Sales Representative Reps</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Poppins',sans-serif]">Product Designer</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Poppins',sans-serif]">Inventa</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Poppins',sans-serif]">2022 - Current</span>
        </div>
        <p className="text-[18px] font-normal leading-[1.5] text-black">As a Product Designer, I collaborated with engineers to scale the Sales Rep platform after the MVP validation. We focused on elevating the UX, identifying critical friction points, and increasing tool adoption.</p>
      </section>

      {/* Hero image */}
      <section className="flex flex-col gap-6 mb-20">
        <div className="image-bg bg-blue flex justify-center items-center">
          <img src="/images/sales-app-home.avif" alt="Rep Sales app screenshot" className="max-w-full object-contain mx-auto img-max-h" />
        </div>
      </section>

      {/* Main goals */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Poppins',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Main goals</h2>
        <p className="text-[22px] md:text-[32px] text-[#1a1a1a] md:leading-[120%] font-[300]">Enable sales reps to complete orders in the app <span className="font-[600]">without relying on the support</span> team.</p>
      </section>

      {/* Key research findings */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Poppins',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Key research findings</h2>
        <p className="text-[18px] font-normal leading-[1.5] text-black"><span className="font-semibold">The workaround:</span> To preserve the professional relationship and save time, Reps used paper notes, leading to manual errors and delayed order processing later in the day.</p>
        <p className="text-[18px] font-normal leading-[1.5] text-black">I redesigned the <span className="font-semibold">Catalog</span>, <span className="font-semibold">Shopping Cart</span>, and <span className="font-semibold">Checkout</span> flows to prioritize speed and one-handed navigation. By reducing friction in these three critical areas, I enabled Sales Reps to outperform 'pen and paper' and complete orders in real-time without disrupting the customer's busy workflow.</p>
      </section>

      {/* Screenshots */}
      <section className="flex flex-col gap-6 mb-20">
        {/* Mobile */}
        <div className="flex flex-col gap-[24px] md:hidden">
          <div className="bg-[#C9E5FF] rounded-[32px] p-[24px] flex justify-center">
            <img src="/images/sales-app-clients.avif" alt="Clients list" className="max-w-full object-contain reveal-on-scroll img-max-h" />
          </div>
          <div className="image-bg bg-blue flex justify-center">
            <img src="/images/sales-app-catalog.avif" alt="Catalog view" className="max-w-full object-contain reveal-on-scroll img-max-h" />
          </div>
          <div className="bg-[#C9E5FF] rounded-[32px] p-[24px] flex justify-center">
            <img src="/images/sales-app-checkout.avif" alt="Checkout flow" className="max-w-full object-contain reveal-on-scroll img-max-h" />
          </div>
          <div className="image-bg bg-blue flex justify-center">
            <img src="/images/sales-app-payment.avif" alt="Payment screen" className="max-w-full object-contain reveal-on-scroll img-max-h" />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          <div className="md:col-span-2 bg-[#C9E5FF] rounded-[20px] flex items-center justify-center min-h-[480px] overflow-hidden">
            <img src="/images/sales-app-clients.avif" alt="Clients list" className="max-w-full object-contain reveal-on-scroll img-max-h" />
          </div>
          <div className="md:col-span-3 image-bg bg-blue rounded-[20px] flex items-center justify-center min-h-[480px] overflow-hidden">
            <img src="/images/sales-app-catalog.avif" alt="Catalog view" className="max-w-full object-contain reveal-on-scroll reveal-delay-1 img-max-h" />
          </div>
          <div className="md:col-span-3 image-bg bg-blue rounded-[20px] flex items-center justify-center min-h-[480px] overflow-hidden">
            <img src="/images/sales-app-checkout.avif" alt="Checkout flow" className="max-w-full object-contain reveal-on-scroll img-max-h" />
          </div>
          <div className="md:col-span-2 bg-[#C9E5FF] rounded-[20px] flex items-center justify-center min-h-[480px] overflow-hidden">
            <img src="/images/sales-app-payment.avif" alt="Payment screen" className="max-w-full object-contain reveal-on-scroll reveal-delay-1 img-max-h" />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="flex flex-col gap-6 mb-20">
        <h2 className="font-['Poppins',sans-serif] text-[24px] font-medium leading-[1.2] text-black">Impact</h2>
        <div className="flex flex-col gap-6 reveal-on-scroll reveal-delay-1">
          <div className="flex w-full items-baseline justify-between">
            <p className="text-[16px] md:text-[24px]">Monthly GMV</p>
            <h3 className="text-[32px] md:text-[56px] font-semibold">R$ 402k</h3>
          </div>
          <hr className="border-gray-200" />
          <div className="flex w-full items-baseline justify-between">
            <p className="text-[16px] md:text-[24px]">Client retention</p>
            <h3 className="text-[32px] md:text-[56px] font-semibold">64%</h3>
          </div>
          <hr className="border-gray-200" />
          <div className="flex w-full items-baseline justify-between">
            <p className="text-[16px] md:text-[24px]">Orders via App</p>
            <h3 className="text-[32px] md:text-[56px] font-semibold">+6,300</h3>
          </div>
          <hr className="border-gray-200" />
          <div className="flex w-full items-baseline justify-between">
            <p className="text-[16px] md:text-[24px]">Order Completion Time (27min to 4:36)</p>
            <h3 className="text-[32px] md:text-[56px] font-semibold">-83%</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
