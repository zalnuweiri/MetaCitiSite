import { Card, CardContent } from "@/components/ui/card"

const TrendingUpIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const EyeIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function SocialProofSection() {
  const stats = [
    {
      icon: TrendingUpIcon,
      value: "70%",
      label: "Faster incident detection and response times",
    },
    {
      icon: ClockIcon,
      value: "80%",
      label: "Reduction in manual monitoring workload",
    },
    {
      icon: EyeIcon,
      value: "24/7",
      label: "City-wide coverage with continuous situational awareness",
    },
    {
      icon: ShieldIcon,
      value: "100%",
      label: "Proactive safety through predictive hazard detection",
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-12 text-center">Technology Highlights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#723C70]/15 to-[#B7094C]/5 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-red-600 mb-4">Cooperative AI Perception (CAP)</h4>
              <p className="text-gray-600 leading-relaxed">
                Multi-source data fusion from infrastructure cameras, vehicles, drones, and mobile robots for
                comprehensive coverage
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#723C70]/15 to-[#B7094C]/5 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-red-600 mb-4">Live Digital Twin</h4>
              <p className="text-gray-600 leading-relaxed">
                Continuous localization and tracking of vehicles, pedestrians, and events across the urban environment
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#723C70]/15 to-[#B7094C]/5 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-red-600 mb-4">Predictive Intelligence</h4>
              <p className="text-gray-600 leading-relaxed">
                Advanced analytics engine forecasting congestion, identifying incident-prone zones, and revealing
                mobility trends
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#723C70]/15 to-[#B7094C]/5 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-red-600 mb-4">Scalable Architecture</h4>
              <p className="text-gray-600 leading-relaxed">
                Cloud-native platform processing video, sensor, IoT, and telematics data at city scale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
