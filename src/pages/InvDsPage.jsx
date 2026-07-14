import { useState } from 'react'
import { motion } from 'motion/react'

import Intro from './dsPages/Intro'
import Colors from './dsPages/Colors'
// Continue importing your pages

const menuItems = [
  {
    id: 'intro',
    label: 'Intro',
    component: Intro,
  },
  {
    id: 'colors',
    label: 'Colors',
    component: Colors,
  },
]

export default function InvDsPage() {
  const [activePage, setActivePage] = useState('intro')

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
        <div className="grid grid-cols-[15%_85%] gap-3">
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