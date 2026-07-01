import { useState, useCallback } from 'react'
import BackArrow from '../components/BackArrow'

export default function InvDsPage() {
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setShowToast(true)
    e.target.reset()
    setTimeout(() => setShowToast(false), 3000)
  }, [])

  return (
    <main className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-[120px]">
      <section className="flex flex-col [&>*]:mb-20 [&>*:last-child]:mb-0">
        <div className="flex flex-col gap-6">
          <BackArrow />
          <h2 className="text-[32px] md:text-[40px] font-bold mb-1 leading-[120%] text-[#1a1a1a]">Inventa Design System</h2>
          <div className="flex items-center gap-3 text-[14px] md:text-[18px] text-[#808080]">
            <a href="https://inventa.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 hover:underline">
              <img src="/images/company-logo-inventa.png" alt="Inventa logo" className="w-6 h-6 md:w-8 md:h-8 rounded object-cover flex-shrink-0" />
              Inventa
            </a>
            <span className="mx-1">&middot;</span>Product Designer, 2022 - Current
          </div>
        </div>

        <p className="text-[16px] text-[#1a1a1a]">Led the vision for Inventa design system. Defined and evolved <span className="font-semibold">core components, patterns, tokens</span>, and interaction standards across the product.</p>

        <div className="image-bg bg-blue flex justify-center items-center">
          <img src="/images/inventa-ds.avif" alt="Inventa Design System" className="max-w-full object-contain mx-auto img-max-h rounded-[16px]" />
        </div>

        <div className="flex flex-col items-start">
          <p className="text-[16px] text-[#808080] mb-6">Password required</p>
          <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-sm">
            <input type="password" placeholder="Enter password" className="flex-1 px-4 py-3 text-[14px] border border-gray-300 rounded-xl focus:outline-none focus:border-gray-400 bg-white" />
            <button type="submit" className="px-5 py-3 text-[14px] font-medium bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors">Submit</button>
          </form>
          {showToast && (
            <p className="text-[14px] text-red-500 mt-4">Incorrect password. Try again.</p>
          )}
        </div>
      </section>
    </main>
  )
}
