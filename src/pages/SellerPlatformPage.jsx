import BackArrow from '../components/BackArrow'


export default function SellerPlatformPage() {

  return (
    <main className="mx-auto max-w-screen-2xl">
      <section className="
      grid grid-cols-1 md:grid-cols-2 w-full md:min-h-[100dvh]">
        
        {/* Left column */}
        <div className="
        flex flex-col justify-between gap-12 p-4 md:p-20 bg-[#ffffff] 
        sm:min-h-[60dvh]">

          <BackArrow />
          <div className="flex flex-col gap-6">
            <h1 className="text-[32px] lg:text-[40px] font-regular leading-none">Rotas B2B</h1>
            <p className="text-[16px] lg:text-[22px] font-[300]">A Inventa é uma empresa full-service especializada no mercado B2B. Responsável por toda a operação logística, incluindo armazenagem e distribuição, e conta com uma equipe de consultores comerciais por São Paulo.</p>
          </div>

          <div className="
          flex flex-col sm:flex-row justify-between gap-6 pb-10 md:pb-0">
            <div className="flex flex-row sm:flex-col justify-between gap-2">
              <p className="text-[16px] md:text-[18px] font-[400] text-black/50 leading-none">Papel</p>
              <p className="text-[16px] md:text-[18px] font-[400] leading-none">Product Designer</p>
            </div>
            <div className="flex flex-row sm:flex-col justify-between gap-2">
              <p className="text-[16px] md:text-[18px] font-[400] text-black/50 leading-none">Projeto</p>
              <p className="text-[16px] md:text-[18px] font-[400] leading-none">B2B</p>
            </div>
            <div className="flex flex-row sm:flex-col justify-between gap-2">
              <p className="text-[16px] md:text-[18px] font-[400] text-black/50 leading-none">Tempo</p>
              <p className="text-[16px] md:text-[18px] font-[400] leading-none">1 Mês</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="
        p-10 bg-[url('/images/cover-background-2.png')] bg-no-repeat bg-cover bg-center
        min-h-[80dvh]">
          <video 
            src="/images/Screen Recording 2026-02-07 at 00.03.45.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-contain" 
          />
        </div>
      </section>
    </main>
  
  )
}
