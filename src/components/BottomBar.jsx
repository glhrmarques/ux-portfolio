export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 h-[80px] pointer-events-none">
      <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_0%,black_20%,transparent_45%)]" />
      <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black_0%,black_40%,transparent_65%)]" />
      <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_top,black_0%,black_60%,transparent_85%)]" />
    </div>
  )
}