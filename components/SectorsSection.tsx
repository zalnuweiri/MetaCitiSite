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

                {/* ================== TOP ROW (TITLE + IMAGE) ================== */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT – Title & description */}
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

                    {/* RIGHT – Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative self-start"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <img src="otnmitest3.webp" className="w-full h-auto" />
                        </div>

                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30 -z-10" />
                    </motion.div>
                </div>

                {/* ================== FULL-WIDTH SECTOR CARDS ================== */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group cursor-pointer"
                        >
                            <div className="
                                relative h-full p-6 rounded-2xl
                                bg-gradient-to-br from-red-50 to-white border border-red-100 hover:border-red-300
                                hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300
                                transition-all duration-300
                                hover:-translate-y-2 hover:shadow-xl
                                hover:border-red-300 hover:shadow-red-600/10

                            ">
                                <div className="
                                    absolute inset-0 pointer-events-none
                                    bg-gradient-to-br from-red-50 to-white
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300
                                    rounded-2xl
                                " />

                                <div className="
                                    w-12 h-12 rounded-xl
                                    bg-gradient-to-br from-red-600/20 to-red-600/10
                                    text-red-600 mb-5
                                    flex items-center justify-center
                                    group-hover:bg-red-600 group-hover:scale-110
                                    transition-all duration-300
                                    relative z-10
                                ">
                                    <sector.icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-medium mb-2 relative z-10 group-hover:text-red-600">
                                    {sector.title}
                                </h3>

                                <p className="text-gray-600 relative z-10">
                                    {sector.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
