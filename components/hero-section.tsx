import { OttonomiLogo } from "@/components/ottonomi-logo";
import { HeroSlideshowPanel } from "@/components/hero-slideshow-panel";
import { Navbar } from "@/components/navbar";

export function HeroSection() {
  return (
      <section className="relative w-full pt-32 pb-48 bg-gradient-to-br from-red-50 via-white to-red-100">

        {/* NAVBAR */}
        <Navbar/>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
          <svg
              viewBox="0 0 1440 320"
              className="w-full h-[220px] md:h-[280px] lg:h-[320px]"
              preserveAspectRatio="none"
          >
            <path
                fill="#ffffff"
                d="M0,256L40,224C80,192,160,128,240,117.3C320,107,400,149,480,186.7C560,224,640,256,720,261.3C800,267,880,245,960,213.3C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>


        {/* HERO GRID */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8">

          {/* LEFT */}
          <div className="text-left">

            <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight text-black">
              Real-Time Urban Intelligence{" "}
              <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
              Through AI-Powered Digital Twins
            </span>
            </h1>

            <p className="text-xl mt-6 text-gray-700 max-w-xl">
              Transform your city's traffic operations with automated incident
              detection, live digital twin mapping, and predictive analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Request Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Platform Tour
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <HeroSlideshowPanel />
          </div>
        </div>
      </section>
  );
}
