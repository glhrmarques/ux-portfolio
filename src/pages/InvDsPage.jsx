import { useState } from 'react'
import { motion } from 'motion/react'

import Intro from './dsPages/Intro'
import Spacing from './dsPages/Spacing'
// Continue importing your pages

const menuItems = [
  {
    id: 'intro',
    label: 'Intro',
    component: Intro,
  },
  {
    id: 'spacing',
    label: 'Spacing',
    component: Spacing,
  },
]

export default function InvDsPage() {
  const [activePage, setActivePage] = useState('colors')

  const activeItem =
    menuItems.find((item) => item.id === activePage) ?? menuItems[0]

  const ActivePage = activeItem.component

  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <motion.main
        className="min-w-0 px-6 py-12 md:px-[240px] md:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-[20%_80%] gap-6">
          <aside className="flex flex-col gap-2">
            <p className="p-4 text-xs font-bold text-[#656565]">
              FOUNDATIONS
            </p>

            {menuItems.map((item) => {
              const isActive = activePage === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActivePage(item.id)}
                  className={`
                    w-full rounded-xl p-4 text-left transition-colors
                    ${
                      isActive
                        ? 'bg-[#0E0E0E] text-white'
                        : 'text-[#8C8C8C] hover:bg-[#0E0E0E] hover:text-white'
                    }
                  `}
                >
                  {item.label}
                </button>
              )
            })}
          </aside>

          <section className="min-w-0 p-4">
            <ActivePage />
          </section>
        </div>
      </motion.main>
      </div>
  )
}