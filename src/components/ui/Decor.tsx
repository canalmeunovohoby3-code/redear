type PipeLinesProps = {
  className?: string
  tone?: 'light' | 'dark'
}

export function PipeLines({ className = '', tone = 'light' }: PipeLinesProps) {
  const stroke = tone === 'light' ? '#003468' : '#FFFFFF'
  const opacity = tone === 'light' ? 0.14 : 0.16

  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeOpacity={opacity} strokeWidth="1.5">
        <path d="M-20 120 H320 L400 200 H760 L840 120 H1220" />
        <path d="M-20 480 H220 L300 400 H640 L720 480 H1220" />
        <path d="M180 -20 V140 L260 220 V600" />
        <path d="M980 -20 V180 L900 260 V600" />
        <path d="M560 -20 V90 L640 170 V600" />
      </g>
      <g fill={stroke} fillOpacity={tone === 'light' ? 0.25 : 0.3}>
        <circle cx="400" cy="200" r="3.5" />
        <circle cx="760" cy="200" r="3.5" />
        <circle cx="300" cy="400" r="3.5" />
        <circle cx="640" cy="400" r="3.5" />
        <circle cx="260" cy="220" r="3.5" />
        <circle cx="900" cy="260" r="3.5" />
      </g>
      <g>
        <circle r="3" fill="#05B0FA">
          <animateMotion dur="9s" repeatCount="indefinite" path="M-20 120 H320 L400 200 H760 L840 120 H1220" />
        </circle>
        <circle r="3" fill="#05B0FA">
          <animateMotion dur="11s" repeatCount="indefinite" path="M-20 480 H220 L300 400 H640 L720 480 H1220" />
        </circle>
      </g>
    </svg>
  )
}

export function GridBackdrop({
  className = '',
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={`absolute inset-0 ${tone === 'light' ? 'bg-grid-tech' : 'bg-grid-tech-light'} bg-grid-64`}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 70% 20%, transparent 30%, ${
            tone === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(0,21,43,0.9)'
          } 100%)`,
        }}
      />
    </div>
  )
}
