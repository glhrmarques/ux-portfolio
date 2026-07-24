import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

import Intro from './dsPages/Intro'
import Colors from './dsPages/Colors'
import Padding from './dsPages/Padding'
import Radius from './dsPages/Radius'
import Spacing from './dsPages/Spacing'
import Typography from './dsPages/Typography'

import Button from './dsPages/Button'
import ClientCard from './dsPages/ClientCard'

const menuItems = [
  {
    id: 'intro',
    label: 'Introdução',
    component: Intro,
  },
  {
    id: 'colors',
    label: 'Cores',
    component: Colors,
  },
  {
    id: 'padding',
    label: 'Preenchimento',
    component: Padding,
  },
  {
    id: 'radius',
    label: 'Raio',
    component: Radius,
  },
  {
    id: 'spacing',
    label: 'Espaçamento',
    component: Spacing,
  },
  {
    id: 'typography',
    label: 'Tipografia',
    component: Typography,
  },
]

const menuComponent = [
  {
    id: 'button',
    label: 'Botão',
    component: Button,
  },
  {
    id: 'clientCard',
    label: 'Cartão de cliente',
    component: ClientCard,
  },
]

const allMenuItems = [...menuItems, ...menuComponent]

export default function InvDsPage() {
  const [activePage, setActivePage] = useState('intro')
  const contentRef = useRef(null)

  const activeItem =
    allMenuItems.find((item) => item.id === activePage) ?? allMenuItems[0]

  const ActivePage = activeItem.component

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [activePage])

  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <motion.main
        className="h-[calc(100dvh-76px)] min-w-0 overflow-hidden px-6 py-6 font-['Inter',sans-serif] md:px-[240px] md:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid h-full min-h-0 grid-cols-[minmax(0,15fr)_minmax(0,85fr)] gap-3">
          <aside className="min-h-0 overflow-y-auto overscroll-contain ds-scrollbar">
            <div className="flex flex-col gap-1 pt-4">
              <p className="p-4 text-xs font-bold text-[#656565]">
                FUNDAMENTOS
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
                COMPONENTES
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
            </div>
          </aside>

          <section
            ref={contentRef}
            className="min-h-0 min-w-0 overflow-y-auto overscroll-none hide-scrollbar"
          >
            <div className="p-4 pb-24">
              <ActivePage />
            </div>
          </section>
        </div>
      </motion.main>
      </div>
  )
}
