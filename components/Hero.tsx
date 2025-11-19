import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { DashboardShowcase } from "./DashboardShowcase";
import { Navbar } from "@/components/navbar";

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-8 bg-white relative overflow-hidden">

      {/* NAVBAR */}
      <Navbar/>

      {/* Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient background - Magenta Dream palette */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B7094C] via-[#723C70] to-[#0091AD]" />

        {/* Layered waves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-auto opacity-90"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="#1780A1"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-auto opacity-80"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="#2E6F95"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,229.3C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="#0091AD"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
              <div className="w-2 h-2 bg-[#0091AD] rounded-full animate-pulse" />
              <span className="text-[#1780A1]">
                AI-Powered Intelligence Platform
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-white font-semibold text-2xl">
                Transform Your Operations with Real-Time
                Intelligence
              </h1>
              <p className="text-white max-w-xl">
                Harness the power of AI and computer vision to
                unlock actionable insights from your data. Make
                smarter decisions faster with our
                enterprise-grade analytics platform. Transform your
                city's traffic operations with automated incident detection,
                live digital twin mapping, and predictive analytics
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B7094C] to-[#A01A58] hover:from-[#A01A58] hover:to-[#892B64] text-white group"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-[#455E89] hover:bg-[#455E89]/10 text-[#455E89]"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Platform Tour
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-white mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex items-center gap-8">
                <div className="text-white text-bold">ACME Corp</div>
                <div className="text-white text-bold">TechGlobal</div>
                <div className="text-white text-bold">
                  Innovate Inc
                </div>
                <div className="text-white text-bold">DataFlow</div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Showcase */}
          <DashboardShowcase />
        </div>
      </div>
    </section>
  );
}