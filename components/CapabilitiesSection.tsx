"use client";

import { motion } from "motion/react";
import {
    AlertTriangle,
    UserX,
    Truck,
    BarChart3,
    Map,
    Search,
    Layers
} from "lucide-react";

const capabilities = [
    { icon: AlertTriangle, title: "Incident Detection", description: "Stalled vehicles, debris, and wrong-way driving alerts" },
    { icon: UserX, title: "Unsafe Driving Detection", description: "Real-time identification of dangerous driving behaviors" },
    { icon: Truck, title: "Multi-Modal Monitoring", description: "Track cars, trucks, buses, and pedestrian movement" },
    { icon: BarChart3, title: "Traffic Analytics", description: "Congestion, flow, density, and volume analytics" },
    { icon: Map, title: "Activity Heatmaps", description: "Visual heatmaps of traffic activity and safety events" },
    { icon: Search, title: "Visual Search", description: "Search and review historical video and event data" },
    { icon: Layers, title: "Platform Integration", description: "Integration with VMS, control rooms, and IoT platforms" },
];

export function CapabilitiesSection() {
    return (
        <section
            id="capabilities"
            className="py-3 lg:py-15 bg-gradient-to-br from-[#f0f9ff] via-white to-[#f0f9ff] relative overflow-hidden"
        >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40 -z-0" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block px-8 py-4 text-2xl rounded-full bg-red-100 text-red-700 mb-6">
                        Capabilities
                    </div>

                    <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                        Comprehensive Detection &{" "}
                        <span className="text-red-600">Analytics Suite</span>
                    </h2>

                    <p className="text-xl text-gray-600">
                        From incident detection to predictive analytics,
                        MetaCiti delivers the intelligence you need to manage urban mobility.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className="
                                    relative h-full p-8 rounded-2xl
                                    bg-white border border-gray-200
                                    transition-all duration-300
                                    hover:-translate-y-2 hover:shadow-xl
                                    hover:border-red-300 hover:shadow-red-600/10
                                "
                            >
                                {/* gradient wash (old file) */}
                                <div
                                    className="
                                        absolute inset-0 pointer-events-none
                                        bg-gradient-to-br from-[#f0f9ff] via-[#F5E7F2] to-white
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300
                                        rounded-2xl
                                    "
                                />

                                {/* Icon bubble */}
                                <div
                                    className="
                                        w-12 h-12 rounded-xl
                                        bg-gradient-to-br from-[#723C70]/20 to-[#B7094C]/10
                                        text-[#B7094C]
                                        flex items-center justify-center mb-5
                                        group-hover:scale-110
                                        transition-transform duration-300
                                        relative z-10
                                    "
                                >
                                    <capability.icon className="h-6 w-6" />
                                </div>

                                {/* Title with hover styling */}
                                <h3
                                    className="
                                        text-xl font-semibold mb-3 relative z-10
                                        text-red-600
                                        transition-colors duration-300
                                        group-hover:text-[#723C70]
                                    "
                                >
                                    {capability.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed relative z-10">
                                    {capability.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
