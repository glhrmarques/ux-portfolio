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
      <BackArrow />
      <h2 className="font-['Figtree',sans-serif] text-[32px] md:text-[40px] font-bold mb-1 leading-[120%] text-white">Inventa Ds.</h2>
    </motion.main>
  )
}
