import { useEffect, useRef, useState } from "react";
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../gsap";

function useCountUp(target, isActive, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();
    let animationFrame;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easedProgress));

      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, isActive, target]);

  return count;
}

export default function RepSalesAppPage() {
  useScrollReveal()
  
  const container = useRef(null);
  const statsRef = useRef(null);
  const [areStatsVisible, setAreStatsVisible] = useState(false);
  const gmv = useCountUp(400, areStatsVisible);
  const quotes = useCountUp(7000, areStatsVisible);
  const orders = useCountUp(4000, areStatsVisible);

  useEffect(() => {
    const stats = statsRef.current;
    if (!stats) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setAreStatsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setAreStatsVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.3 }
    );

    observer.observe(stats);
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".project-panel", container.current);
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });

    });

    return () => media.revert();
  }, { scope: container });

  return (
    <>
    <main>
      <section ref={container}>
        {/* Hero */}
        <div className="mx-auto max-w-screen-2xl grid w-full grid-cols-1 lg:grid-cols-2 sm:min-h-[90dvh]">
          {/* left column */}
          <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex sm:min-h-[60dvh] w-full flex-col gap-12 p-4 sm:p-10 md:p-10"
          >
            <BackArrow />
            <div className="flex flex-col gap-6">
              <h1 className="text-[32px] sm:text-[40px] font-[500] leading-[1.2] max-w-[424px]">Growing the Business and Building Trust</h1>
              <p className="text-[20px] font-[400]">Inventa handles the full logistics process, from storage to delivery. It also has a team of sales reps in São Paulo.</p>
            </div>

            <div className="flex flex-col  justify-between gap-12 lg:pb-0 pb-10">
              <div className="flex flex-col justify-between gap-4">
                <p className="text-[14px] font-[700] text-black/50 leading-none">MY ROLE</p>
                <p className="text-[20px] font-[400] text-black leading-none">Product Designer</p>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <p className="text-[14px] font-[700] text-black/50 leading-none">TEAM</p>
                <p className="text-[20px] font-[400] text-black leading-none">Backend and Frontend Engineers</p>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div 
          className="
          min-h-[100dvh] w-full bg-[url('/images/cover-background-1.png')]
          lg:min-h-0
          bg-no-repeat bg-cover bg-center relative overflow-hidden"
          >
            <motion.img
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              src="/images/cover-projects-1.png"
              alt="Rep Sales App"
              className="absolute inset-0 m-auto scale-90 lg:scale-80"
            />
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="min-h-[80dvh] flex items-center bg-[#000000]">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl py-20 sm:py-0 px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#ffffff] mt-1">IMPACT</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[64px] lg:w-[70%]">
            <p className="text-[32px] sm:text-[32px] font-[500] leading-[1.2] text-[#ffffff] max-w-[1000px]">To address low adoption of the sales app, I researched user needs and redesigned its structure to make it easier to use and help users feel confident placing B2B orders.</p>
            <div ref={statsRef} className="flex flex-col gap-8 lg:flex-row lg:gap-[64px]">
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[300]">+R$ {gmv}k</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">Monthly sales (GMV)</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[300]">+{quotes.toLocaleString('en-US')}</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">Quotes created</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[56px] text-[#ffffff] font-[300]">+{orders.toLocaleString('en-US')}</p>
                <p className="text-[20px] text-[#ffffff] font-[400]">Orders created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="min-h-[80dvh] flex items-center bg-[#FCFCFC]">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl py-20 sm:py-0 px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-1">PROBLEM</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[64px] lg:w-[70%]">
            <p className="text-[32px] leading-[1.2] font-[500] text-[#000000] max-w-[1000px] mb-6">Inventa’s sales app was so inefficient that pen and paper became the easiest way to place orders.</p>
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Sales reps started orders but did not finish them.</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Sales reps often sent orders through WhatsApp and asked CS team to create them.</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Users could not select the boleto installment option.</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">I was the only Product Designer working on the user experience of the first version.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">RESEARCH</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">I interviewed 12+ sales reps to understand the reasoning behind their pre-visit planning and customer visits, and identify the priorities for a successful negotiation.</p>
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">I shadowed 5+ sales reps on their routes to understand how negotiations happen in practice, identify critical needs, and set priorities for product improvements.</p>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[320px] w-full bg-[url('/images/discovery-1.png')] bg-no-repeat bg-cover bg-center lg:h-[228px] lg:flex-1"></div>
              <div className="h-[320px] w-full bg-[url('/images/discovery-2.png')] bg-no-repeat bg-cover bg-center lg:h-[228px] lg:flex-1"></div>
              <div className="h-[320px] w-full bg-[url('/images/discovery-3.png')] bg-no-repeat bg-cover bg-center lg:h-[228px] lg:flex-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="flex items-center bg-[#FFFFFF] pt-10">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">WHAT I DELIVERED</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">We moved from a single central page to a scalable architecture that supports each stage of the sales journey and allows new features to be added based on the needs of each stage.</p>
            <p className="text-[24px] font-[400] text-[#000000] max-w-[1000px] mb-6">This allowed me to provide features tailored to each stage of the journey — before, during, and after customer visits — and create funnels to track conversion and identify churning points.</p>
            <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
              <div className="flex flex-col items-center gap-2">
                <p className="text-center text-[16px] font-[700] leading-none text-[#000000]/50">BEFORE</p>
                <p className="text-center text-[16px] font-[400] leading-none text-[#000000]/50">All steps together</p>
                <img
                  src="/images/sales-app/old-1"
                  alt="Previous order process with all steps in one flow"
                  className="h-auto w-full max-w-[202px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-center text-[16px] font-[700] leading-none text-[#000000]/50">AFTER</p>
                <p className="text-center text-[16px] font-[400] leading-none text-[#000000]/50">Separate steps</p>
                <img
                  src="/images/sales-app/SalesApp-screens.png"
                  alt="Separate customer, product, and payment flows"
                  className="h-auto w-full max-w-[560px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY 1*/}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">CUSTOMERS</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Customer list showing available credit</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Request a credit review</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">View customer order history</p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[544px] w-full bg-[url('/images/sales-app/clientes-1.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/clientes-2.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/clientes-3.gif')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY 2*/}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">CATALOG</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">Automatic saving when starting a quote</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">A cart showing available credit, added items, and the minimum order amount</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Product details with discount information</p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[544px] w-full bg-[url('/images/sales-app/catalogo-1.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/catalogo-2.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/catalogo-3.gif')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY 3*/}
      <section className="flex items-center bg-[#FFFFFF] py-20">
        <div className="flex w-full flex-col gap-8 mx-auto max-w-screen-2xl px-4 sm:px-10 lg:flex-row lg:gap-0">
          <div className="w-full reveal-on-scroll flex flex-col lg:w-[30%]">
            <p className="text-[16px] font-[700] text-[#000000] mt-2">PAYMENT</p>
          </div>
          <div className="w-full reveal-on-scroll flex flex-col gap-[24px] lg:w-[70%]">
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-[400] text-[#000000]">An easy way to choose boleto installments</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">Save an order as a draft or share it as a PDF</p>
              <hr className="text-[#000000]/30"/>
              <p className="text-[20px] font-[400] text-[#000000]">A review screen to catch mistakes before placing an order</p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="h-[544px] w-full bg-[url('/images/sales-app/pagamentos-1.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/pagamentos-2.png')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
              <div className="h-[544px] w-full bg-[url('/images/sales-app/pagamentos-3.gif')] bg-center bg-cover bg-no-repeat lg:min-w-0 lg:flex-1" />
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* DS
      <section
      className="
       flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 bg-[#000000] p-6 leading-[1.2] sm:gap-8 sm:p-10 lg:px-55">

        <div className="reveal-on-scroll grid grid-cols-2 w-[80px] h-[44px]">
          <div className="h-full w-full bg-[#005BE2]"></div>
            <div className="grid grid-rows-2 w-full h-full">
              <div className="grid grid-cols-2 h-full w-full">
                <div className="h-full w-full bg-[#363636]"></div>
                <div className="h-full w-full bg-[#01B971]"></div>
              </div>
              <div className="h-full w-full bg-[#ffffff]"></div>
          </div>
        </div>
        <p
        className="reveal-on-scroll reveal-delay-2 
        text-center text-[36px] font-[700] text-white sm:text-[48px]"
        >
          Inventa<span className="m-0 text-white/50">Ds.</span>
        </p>
        <p className="reveal-on-scroll reveal-delay-2 max-w-[800px] text-center text-[18px] font-[400] text-[#ffffff] sm:text-[24px] leading-[1.5]">A design system built to speed up development and keep interfaces consistent.</p>
        <button
        onClick={() => window.open("/projects/inv-ds", "_blank", "noopener,noreferrer")}
        className="
        reveal-on-scroll reveal-delay-2 border bg-[#ffffff] p-4 text-black font-[600] hover:bg-[#000000] hover:text-white sm:p-5 cursor-pointer
        ">View Design System</button>
      </section>
      */}
    <Footer />
    </>
  )
}
