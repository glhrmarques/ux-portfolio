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
        <p>New page</p>
      </motion.main>
    </div> 
  )
}
