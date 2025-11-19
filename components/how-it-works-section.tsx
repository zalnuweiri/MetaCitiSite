import { Card, CardContent } from "@/components/ui/card"

const LinkIcon = () => (
  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CpuIcon = () => (
  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      ry="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="9" y="9" width="6" height="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="9" y1="1" x2="9" y2="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="15" y1="1" x2="15" y2="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="9" y1="20" x2="9" y2="23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="15" y1="20" x2="15" y2="23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="20" y1="9" x2="23" y2="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="20" y1="14" x2="23" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="1" y1="9" x2="4" y2="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="1" y1="14" x2="4" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ZapIcon = () => (
  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon
      points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: LinkIcon,
      title: "Connect",
      description: "Integrate existing cameras, sensors, and data sources across your city",
    },
    {
      number: "02",
      icon: CpuIcon,
      title: "Detect & Map",
      description: "AI processes feeds in real-time, building a live digital twin with automated incident detection",
    },
    {
      number: "03",
      icon: ZapIcon,
      title: "Act",
      description: "Operators receive instant alerts and actionable insights for proactive response",
    },
  ]

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Get started with MetaCiti™ in three simple steps and transform your city's operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="inline-flex p-6 bg-red-900/10 rounded-full group-hover:bg-red-900/20 transition-colors duration-300 relative text-red-900">
                      <step.icon />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">{step.title}</h3>
                  <p className="text-gray-600 text-pretty leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-900/30 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-900/50 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
