import { useEffect, } from 'react'
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'

export default function InvDsPage() {
  
  useEffect(() => {
    const previous = document.body.style.backgroundColor
  
    document.body.style.backgroundColor = '#000000'
  
    return () => {
      document.body.style.backgroundColor = previous
    }
  }, [])

  return (
    <motion.main 
    className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="flex flex-col gap-30 mb-[80px]">
        <BackArrow />
        <div className="grid grid-cols-[20%_80%] gap-6">
        <div>
          <p className="p-4 font-['Figtree',sans-serif] text-[12px] md:text-[12px] font-bold text-[#656565]">FOUNDATIONS</p>
          <p className="p-4 cursor-pointer bg-[#0E0E0E] rounded-[16px] font-['Figtree',sans-serif] text-[14px] md:text-[14px] font-medium text-[#fafafa]">Work in progress</p>

        </div>
        <div className="w-full h-full p-4">
          <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[40px] font-bold text-white">Inventa Ds.</h1>
          <p className="text-white md:text-[24px]">Design system coming soon.</p>
        </div>
        </div>
      </section>
    </motion.main>
  )
}
