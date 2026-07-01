export default function Footer() {
  return (
    <footer className="flex flex-col min-h-[70dvh] bg-[#1e1e1e] w-full">
      <div className="mx-auto w-full max-w-[1440px] flex flex-1 flex-col items-center justify-center gap-6 px-6 py-20 md:py-28 lg:py-32 text-center">
        <p className="font-['Inter',sans-serif] font-normal text-[#7f7f7f] text-[clamp(2.5rem,8vw,6.5rem)] leading-none tracking-tight select-none" aria-label="Social handle">
          @glhrmarques
        </p>
        <div className="w-full max-w-4xl h-px bg-[#333]" role="presentation" aria-hidden="true" />
        <p className="font-['Inter',sans-serif] font-normal text-[#7f7f7f] text-[28px]">2026</p>
      </div>
    </footer>
  )
}
