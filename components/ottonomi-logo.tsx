export function OttonomiLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dimensions = {
    sm: { width: 32, height: 32, text: "text-sm" },
    md: { width: 48, height: 48, text: "text-lg" },
    lg: { width: 64, height: 64, text: "text-xl" },
  }

  const { width, height, text } = dimensions[size]

  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width, height }}>
        <svg width={width} height={height} viewBox="0 0 64 64" className="drop-shadow-lg">
          {/* Outer hexagon */}
          <path d="M32 4 L54 16 L54 40 L32 52 L10 40 L10 16 Z" fill="url(#outerRed)" stroke="none" />

          {/* Middle hexagon */}
          <path d="M32 12 L46 20 L46 36 L32 44 L18 36 L18 20 Z" fill="url(#middleRed)" stroke="none" />

          {/* Inner hexagon */}
          <path d="M32 18 L40 23 L40 33 L32 38 L24 33 L24 23 Z" fill="url(#innerRed)" stroke="none" />

          {/* Core center with pulse animation */}
          <circle cx="32" cy="28" r="4" fill="url(#coreRed)" className="animate-pulse" />

          {/* Enhanced red gradient definitions with different red degrees */}
          <defs>
            <linearGradient id="outerRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </linearGradient>
            <linearGradient id="middleRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="innerRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F87171" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <linearGradient id="coreRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCA5A5" />
              <stop offset="100%" stopColor="#F87171" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-bold text-foreground ${text} tracking-tight`}>OTTONOMI.AI</span>
        <span className="text-xs text-primary italic font-medium">Intelligence in Motion</span>
      </div>
    </div>
  )
}
