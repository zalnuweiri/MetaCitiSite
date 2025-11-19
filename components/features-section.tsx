"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const AlertTriangleIcon = () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <line x1="12" y1="9" x2="12" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MapIcon = () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon
            points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <line x1="8" y1="2" x2="8" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="6" x2="16" y2="22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BusIcon = () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            d="M8 6v6M16 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4c-1.1 0-2.1.8-2.4 1.8l-1.4 5c-.1.4-.2.8-.2 1.2 0 .4.1.8.2 1.2.3 1.1.8 2.8.8 2.8h3M8 22v-3M16 22v-3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ParkingCircleIcon = () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TrendingUpIcon = () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PlugIcon = () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            d="M12 2v4M12 18v4M5 12H2M22 12h-3M7.5 7.5L5 5M19 19l-2.5-2.5M16.5 7.5L19 5M5 19l2.5-2.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export function FeaturesSection() {
    const features = [
        { icon: AlertTriangleIcon, title: "Automated Incident Detection", description: "Instantly flags crashes, congestion, wrong-way driving, and other critical traffic events" },
        { icon: MapIcon, title: "Digital Twin Mapping", description: "Builds a dynamic city-wide map that localizes and tracks vehicles, pedestrians, and events in real time" },
        { icon: BusIcon, title: "Transit & Mobility Monitoring", description: "Supports optimization of bus, train, and fleet operations to reduce delays and improve passenger flow" },
        { icon: ParkingCircleIcon, title: "Parking Availability Tracking", description: "Identifies and visualizes real-time parking availability across city areas" },
        { icon: TrendingUpIcon, title: "Predictive Analytics", description: "Forecasts congestion patterns and identifies incident-prone zones for proactive safety measures" },
        { icon: PlugIcon, title: "Open API Integration", description: "Connects seamlessly with TMC systems, transit dashboards, and 3rd-party apps" },
    ];

    return (
        <section className="py-24 bg-gray-50/30 relative">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Key Features & Benefits
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        MetaCiti™ transforms urban monitoring from reactive to proactive with comprehensive operational intelligence.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer h-full"  // ️ ensures grid cell is full-height
                        >
                            <Card
                                className="
                  bg-white relative overflow-hidden
                  border border-gray-100
                  rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  h-full flex flex-col
                "
                            >
                                {/* Hover gradient wash */}
                                <div
                                    className="
                    absolute inset-0
                    bg-gradient-to-br from-[#E8D2EA] via-[#F5E7F2] to-white
                    opacity-0 group-hover:opacity-100
                    transition-opacity
                  "
                                />

                                <CardContent className="relative p-8 flex flex-col flex-grow">
                                    {/* Icon bubble */}
                                    <motion.div
                                        className="
                      inline-flex w-fit p-4 rounded-xl mb-6
                      bg-gradient-to-br from-[#723C70]/20 to-[#B7094C]/10
                      text-[#B7094C]
                      group-hover:scale-110
                      transition-transform duration-300
                    "
                                    >
                                        <feature.icon />
                                    </motion.div>

                                    <h3 className="text-xl font-semibold mb-3 text-[#723C70]">
                                        {feature.title}
                                    </h3>

                                    {/* flex-grow makes all descriptions fill available space evenly */}
                                    <p className="text-gray-600 leading-relaxed flex-grow">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits section - unchanged */}
                <div className="mt-20 bg-gradient-to-br from-[#723C70]/15 to-[#B7094C]/5 rounded-3xl p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <BenefitItem text="Faster incident response and resource deployment" />
                        <BenefitItem text="Optimized transit operations and fleet management" />
                        <BenefitItem text="Safer, more reliable streets for all road users" />
                        <BenefitItem text="Data-driven infrastructure planning and investment decisions" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">{text}</p>
        </div>
    );
}
