"use client";

import { motion } from "motion/react";
import { Building2, MapPin, ParkingCircle, Boxes, Route } from "lucide-react";

const sectors = [
    {
        icon: Building2,
        title: "Municipal Traffic & Transportation",
        description: "Automated incident detection and traffic optimization for city-wide operations",
    },
    {
        icon: Route,
        title: "Transit Agencies",
        description: "Real-time passenger flow and scheduling insights to improve service reliability",
    },
    {
        icon: ParkingCircle,
        title: "Parking & Mobility",
        description: "Live parking availability and demand management integration",
    },
    {
        icon: MapPin,
        title: "Smart City Initiatives",
        description: "Integrated safety, mobility, and sustainability goals with unified visibility",
    },
    {
        icon: Boxes,
        title: "Highway & Expressway Authorities",
        description: "Monitor high-speed corridors for incidents and optimize flow management",
    },
];

export function SectorsSection() {
    return (
        <section id="sectors" className="py-10 lg:pt-10 lg:py-15 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* ================== NEW TOP ROW (TITLE LEFT + PILLS RIGHT) ================== */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT — Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="inline-block px-8 py-4 text-2xl rounded-full bg-red-100 text-red-700 mb-6">
                                Sectors
                            </div>

                            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                                Empowering cities and industries to build{" "}
                                <span className="text-red-600">smarter environments</span>
                            </h2>

                            <p className="text-2xl text-gray-600 leading-relaxed">
                                From municipal traffic departments to smart city integrators,
                                MetaCiti serves organizations at every scale of urban mobility management.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT — Sector Pills (UnifiedDashboard-style) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-2 gap-4 p-15"
                    >
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={sector.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`
                flex items-center gap-3 p-4 rounded-xl
                bg-gray-100 border border-gray-200
                hover:border-red-300 hover:bg-red-50
                transition-all duration-300
                ${index === sectors.length - 1 ? "col-span-2" : ""}
            `}
                            >
                                <sector.icon className="h-5 w-5 text-red-600 flex-shrink-0" />
                                <span className="text-base text-gray-700 font-medium">
                {sector.title}
            </span>
                            </motion.div>
                        ))}
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
