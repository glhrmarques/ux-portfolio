const glowSize = 'min(1244px, 86vw)'

export default function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/images/glow-top-right.svg"
        alt=""
        className="absolute max-w-none"
        style={{
          width: glowSize,
          height: glowSize,
          top: '-40%',
          right: '-18%',
        }}
      />
      <img
        src="/images/glow-left.svg"
        alt=""
        className="absolute max-w-none"
        style={{
          width: glowSize,
          height: glowSize,
          top: '32%',
          left: '-65%',
        }}
      />
    </div>
  )
}
