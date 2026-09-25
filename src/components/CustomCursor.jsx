import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

    const move = (event) => setCursor({ x: event.clientX, y: event.clientY })
    const enter = () => setIsVisible(true)
    const leave = () => setIsVisible(false)

    const attachCursor = () => {
      if (!finePointer.matches) return () => {}

      const elements = document.querySelectorAll('.cursor-label-target')
      window.addEventListener('mousemove', move)
      elements.forEach((element) => {
        element.addEventListener('mouseenter', enter)
        element.addEventListener('mouseleave', leave)
      })

      return () => {
        window.removeEventListener('mousemove', move)
        elements.forEach((element) => {
          element.removeEventListener('mouseenter', enter)
          element.removeEventListener('mouseleave', leave)
        })
      }
    }

    let cleanup = attachCursor()
    const updatePointerMode = () => {
      cleanup()
      setIsVisible(false)
      cleanup = attachCursor()
    }

    finePointer.addEventListener('change', updatePointerMode)
    return () => {
      cleanup()
      finePointer.removeEventListener('change', updatePointerMode)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 place-items-center
        py-3 px-4 rounded-full bg-black/40 border border-white/25
        backdrop-blur-sm
        shadow-lg shadow-black/10
        font-medium uppercase text-xs text-white tracking-wide"
      style={{ left: cursor.x, top: cursor.y }}
    >
      <p>View project</p>
    </div>
  )
}
