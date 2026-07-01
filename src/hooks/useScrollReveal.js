import { useEffect } from 'react'

export function useScrollReveal(selector = '.reveal-on-scroll', options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -50px 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, options.threshold, options.rootMargin])
}

export function useHomeReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('.home-reveal')
    if (!sections.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach(el => el.classList.add('is-visible'))
      return
    }

    if (!('IntersectionObserver' in window)) {
      sections.forEach(el => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observerInstance.unobserve(entry.target)
        })
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )

    sections.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
