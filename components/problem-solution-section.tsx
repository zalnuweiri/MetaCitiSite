import { Card, CardContent } from "@/components/ui/card"

const Building2Icon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary  mb-6">About Ottonomi AI</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Ottonomi AI is an Ontario-based deep tech leader pioneering Cooperative AI Perception (CAP) and Digital Twin
            platforms that transform how cities, operators, and enterprises achieve operational intelligence. By fusing
            video, sensor, IoT, and telematics data, we create live digital twin maps that provide continuous
            situational awareness and predictive insights.
          </p>
          <div className="mt-8 inline-flex items-center px-6 py-3 bg-[#f0f9ff]/100 rounded-full">
            <span className="text-primary font-semibold">Mission:</span>
            <span className="ml-2 text-black">
              Deliver automated actionable operational intelligence for a safe, smart, and connected future.
            </span>
          </div>
        </div>

        <div
            className="rounded-3xl p-12 mb-16 bg-white/60 bg-blend-overlay"
            style={{
              backgroundImage:
                  'linear-gradient(to bottom right, rgba(240,249,255,0.70), rgba(240,249,255,0.70)), url(/circuit-board.svg)',
              backgroundSize: '600px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Introducing MetaCiti™
          </h3>

          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto text-pretty leading-relaxed">
            MetaCiti™ is an automated incident detection and digital twin platform designed for cities and
            municipalities seeking operational intelligence at scale. The platform fuses live video feeds and sensor
            data into a real-time digital twin map of urban areas, providing operators with continuous situational
            awareness across transportation and mobility systems.
          </p>
        </div>


        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Who We Serve</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Empowering cities and organizations to build safer, smarter urban environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-50/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div
                  className="mb-4 inline-flex p-4 bg-red-600/10 rounded-full group-hover:bg-[#723C70]/20 group-hover:text-[#A01A58]/90 transition-colors duration-300 text-red-600">
                <Building2Icon/>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-red-600 group-hover:text-[#A01A58]/90 transition-colors">Municipal Traffic & Transportation</h4>
              <p className="text-sm text-gray-600">
                Automated incident detection and traffic optimization for city-wide operations
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-50/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex p-4 bg-red-600/10 rounded-full group-hover:bg-[#723C70]/20 group-hover:text-[#A01A58]/90 transition-colors duration-300 text-red-600">
                <MapPinIcon />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-red-600 group-hover:text-[#A01A58]/90 transition-colors">Transit Agencies</h4>
              <p className="text-sm text-gray-600">
                Real-time passenger flow and scheduling insights to improve service reliability
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-50/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex p-4 bg-red-600/10 rounded-full group-hover:bg-[#723C70]/20 group-hover:text-[#A01A58]/90 transition-colors duration-300 text-red-600">
                <TrendingUpIcon />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-red-600 group-hover:text-[#A01A58]/90 transition-colors">Parking & Mobility</h4>
              <p className="text-sm text-gray-600">Live parking availability and demand management integration</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-50/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex p-4 bg-red-600/10 rounded-full group-hover:bg-[#723C70]/20 group-hover:text-[#A01A58]/90 transition-colors duration-300 text-red-600">
                <Building2Icon />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-red-600 group-hover:text-[#A01A58]/90 transition-colors">Smart City Initiatives</h4>
              <p className="text-sm text-gray-600">
                Integrated safety, mobility, and sustainability goals with unified visibility
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
