import { useState } from 'react'
import { motion } from 'motion/react'

import Intro from './dsPages/Intro'
import Colors from './dsPages/Colors'
import Padding from './dsPages/Padding'
import Radius from './dsPages/Radius'
import Spacing from './dsPages/Spacing'
import Typography from './dsPages/Typography'

import Button from './dsPages/Button'

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
  {
    id: 'padding',
    label: 'Padding',
    component: Padding,
  },
  {
    id: 'radius',
    label: 'Radius',
    component: Radius,
  },
  {
    id: 'spacing',
    label: 'Spacing',
    component: Spacing,
  },
  {
    id: 'typography',
    label: 'Typography',
    component: Typography,
  },
]

const menuComponent = [
  {
    id: 'button',
    label: 'Button',
    component: Button,
  },
]

const allMenuItems = [...menuItems, ...menuComponent]

export default function InvDsPage() {
  const [activePage, setActivePage] = useState('intro')

  const activeItem =
    allMenuItems.find((item) => item.id === activePage) ?? allMenuItems[0]

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
          <aside className="pt-4 flex flex-col gap-1 md:sticky md:top-16 md:self-start">
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
                    w-full rounded-xl p-4 text-left transition-colors cursor-pointer
                    ${
                      isActive
                      ? 'bg-[#0E0E0E] text-white'
                      : 'text-[#FFFFFF] hover:bg-[#0E0E0E] hover:text-white'
                    }
                    `}
                    >
                  {item.label}
                </button>
              )
            })}
            <p className="p-4 text-xs font-bold text-[#656565]">
              COMPONENTS
            </p>
            {menuComponent.map((item) => {
              const isActive = activePage === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActivePage(item.id)}
                  className={`
                    w-full rounded-xl p-4 text-left transition-colors cursor-pointer
                    ${
                      isActive
                      ? 'bg-[#0E0E0E] text-white'
                      : 'text-[#FFFFFF] hover:bg-[#0E0E0E] hover:text-white'
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
