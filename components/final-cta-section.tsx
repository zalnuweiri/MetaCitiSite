export function FinalCtaSection() {
  return (
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#723C70] via-[#534D7D] to-[#455E89] text-white">

        {/* Decorative blurred blobs from CTA #1 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#B7094C]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0091AD]/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-30" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">

          {/* Top pill (keep structure, apply new theme) */}
          <div className="inline-flex items-center px-4 py-2 mb-10 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/10">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            Transform Your City's Operations Today
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            From Reactive Monitoring
            <br />
            <span className="text-white/90">to Proactive Operations</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-16 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join forward-thinking municipalities using MetaCiti™ to build safer, smarter urban environments.
          </p>

          {/* CTA Buttons — same structure, new theme */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="px-10 py-6 text-lg font-bold rounded-xl bg-gradient-to-r from-[#0091AD] to-[#1780A1] text-white shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 inline-flex items-center gap-3 group">
              <svg
                  className="w-6 h-6 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
              </svg>
              Request Demo
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="px-10 py-6 text-lg font-semibold rounded-xl border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
              Watch Platform Tour
            </button>
          </div>

          {/* Highlight Cards — same structure, new theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl text-center">
              <div className="text-4xl font-bold mb-2 text-white">30 min</div>
              <div className="text-white/80 text-sm">Free Platform Demo</div>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl text-center">
              <div className="text-4xl font-bold mb-2 text-white">0</div>
              <div className="text-white/80 text-sm">Commitment Required</div>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl text-center">
              <div className="text-4xl font-bold mb-2 text-white">100%</div>
              <div className="text-white/80 text-sm">Custom Solution</div>
            </div>
          </div>
        </div>
      </section>
  )
}
