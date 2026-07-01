import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useHomeReveal } from '../hooks/useScrollReveal'

export default function HomePage() {
  useHomeReveal()

  const copyPhone = useCallback((e) => {
    navigator.clipboard.writeText('+5511961747490').then(() => {
      e.target.textContent = 'Copied!'
      setTimeout(() => { e.target.textContent = '+55 1196174-7490' }, 2000)
    })
  }, [])

  return (
    <div className="home-open-main flex-1 min-w-0 flex flex-col px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-[120px]">
      <div id="page-top" className="h-0 w-full overflow-hidden pointer-events-none" aria-hidden="true" />

      {/* Intro */}
      <section id="intro" className="flex flex-col justify-center scroll-mt-8 mb-20 min-h-[50dvh] lg:min-h-0 lg:justify-start">
        <div className="w-[120px] aspect-square bg-[#1e1e1e] overflow-hidden mb-8 lg:hidden">
          <img src="/images/myself-01.png" alt="Guilherme Marques" className="w-full h-full object-cover" />
        </div>
        <p className="max-w-[400px] text-[16px] sm:text-[18px] font-medium leading-[1.5] text-black mb-6">
          I'm Guilherme Marques, with 5 years of experience building and growing projects.
        </p>
        <p className="max-w-4xl font-['Poppins',sans-serif] text-[28px] sm:text-[36px] md:text-[48px] font-medium leading-[1.2] mb-12">
          <span className="text-[#7f7f7f]">Currently Product Designer at Inventa's Fullservice backoffce for marketplaces</span>
          <span className="text-[#7f7f7f]">, </span>
          <span className="text-black">designing impactful scalable solutions.</span>
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href="https://www.linkedin.com/in/glhrmarques/" target="_blank" rel="noopener noreferrer" className="link-underline-ltr inline-flex border-b border-[#d9d9d9] border-solid py-2 text-[18px] font-medium text-[#1e1e1e]">Linkedin</a>
          <a href="https://github.com/glhrmarques" target="_blank" rel="noopener noreferrer" className="link-underline-ltr inline-flex border-b border-[#d9d9d9] border-solid py-2 text-[18px] font-medium text-[#1e1e1e]">Github</a>
          <button onClick={copyPhone} className="link-underline-ltr inline-flex border-b border-[#d9d9d9] border-solid py-2 text-[18px] font-medium text-[#1e1e1e] whitespace-nowrap cursor-pointer bg-transparent">+55 1196174-7490</button>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="flex flex-col gap-4 scroll-mt-8 mb-40">
        <h2 className="text-[32px] font-medium">Selected work</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/projects/seller-platform" className="group w-full sm:w-[calc(50%-6px)] aspect-square bg-[#C1038B] shrink-0 flex flex-col items-start justify-end p-6 relative overflow-hidden">
            <video src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" autoPlay loop muted playsInline className="absolute inset-[24px] w-[calc(100%-48px)] h-[calc(100%-48px)] object-contain bg-[#C1038B]" />
          </Link>
          <Link to="/projects/rep-sales-app" className="group w-full sm:w-[calc(50%-6px)] aspect-square bg-[#2F98F9] shrink-0 flex flex-col items-start justify-end p-6 relative overflow-hidden">
            <img src="/images/sales-app-home.avif" alt="Rep Sales App" className="absolute inset-[24px] w-[calc(100%-48px)] h-[calc(100%-48px)] object-contain" />
          </Link>
          <Link to="/projects/converter" className="group w-full aspect-square sm:aspect-[2/1] bg-[#B9F1BD] shrink-0 flex flex-col items-start justify-end p-6 relative overflow-hidden">
            <img src="/images/converter-cover.png" alt="Currency Converter" className="absolute inset-[24px] w-[calc(100%-48px)] h-[calc(100%-48px)] object-contain" />
          </Link>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="home-reveal flex flex-col scroll-mt-8 gap-8 mb-40">
        <h2 className="text-[32px] font-medium mb-8">Writing</h2>
        <Link to="/writing/sign-up" className="border-b border-[#f0f0f0] border-solid pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 no-underline hover:opacity-70 transition-opacity">
          <p className="flex-1 font-normal text-[24px] sm:text-[24px] text-black leading-normal">Sign up/in in GO</p>
          <p className="shrink-0 font-normal text-[18px] text-[#7f7f7f] whitespace-nowrap">June, 2026</p>
        </Link>
        <Link to="/writing/restful-api-go" className="border-b border-[#f0f0f0] border-solid pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 no-underline hover:opacity-70 transition-opacity">
          <p className="flex-1 font-normal text-[24px] sm:text-[24px] text-black leading-normal">Building my first RESTful API with GO</p>
          <p className="shrink-0 font-normal text-[18px] text-[#7f7f7f] whitespace-nowrap">May, 2026</p>
        </Link>
      </section>

      {/* Languages */}
      <section className="home-reveal flex flex-col gap-10 scroll-mt-8 mb-40" aria-labelledby="languages-heading">
        <h2 id="languages-heading" className="text-[32px] font-medium mb-4">Languages</h2>
        <div className="flex flex-col gap-8 text-[18px]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-b border-[#f0f0f0] border-solid pb-8">
            <span className="font-medium text-black sm:w-40 shrink-0">English</span>
            <span className="font-normal text-[#7f7f7f] sm:text-right">Professional fluency (Cambridge FCE)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-b border-[#f0f0f0] border-solid pb-8">
            <span className="font-medium text-black">Portuguese</span>
            <span className="font-normal text-[#7f7f7f] sm:text-right">Native</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="home-reveal flex flex-col gap-10 scroll-mt-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-[32px] font-medium">Experience</h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[18px] border-b border-[#f0f0f0] border-solid pb-3">
            <span className="font-bold text-black w-[145px] shrink-0">Inventa</span>
            <span className="font-medium text-black whitespace-nowrap shrink-0">Product Designer</span>
            <span className="font-normal text-[#7f7f7f] text-right w-[117px] shrink-0 whitespace-nowrap">2021 - Present</span>
          </div>
          <div className="flex w-full items-start md:pl-[457px]">
            <p className="flex-1 min-w-0 mb-0 text-[18px] font-normal text-black leading-[1.5]">Led a complete UX redesign of the Sales Rep application, improving usability and commercial efficiency, processing approximately R$700k in monthly GMV.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[18px] border-b border-[#f0f0f0] border-solid pb-3">
            <span className="font-bold text-black w-[145px] shrink-0">ePharma</span>
            <span className="font-medium text-black whitespace-nowrap shrink-0">Product Designer</span>
            <span className="font-normal text-[#7f7f7f] text-right w-[117px] shrink-0">2021-2022</span>
          </div>
          <div className="flex w-full items-start md:pl-[457px]">
            <p className="flex-1 min-w-0 mb-0 text-[18px] font-normal text-black leading-[1.5]">Prior contributions as a product designer, from discovery through delivery, partnering with engineering and stakeholders on core product initiatives.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
