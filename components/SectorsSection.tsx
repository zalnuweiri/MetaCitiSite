"use client";

import { motion } from 'motion/react';
import { Building2, MapPin, ParkingCircle, Boxes, Route } from 'lucide-react';
import otnmitest3 from 'otnmitest3.webp';

const sectors = [
    {
        icon: Building2,
        title: 'Municipal Traffic & Transportation',
        description: 'Automated incident detection and traffic optimization for city-wide operations',
    },
    {
        icon: Route,
        title: 'Transit Agencies',
        description: 'Real-time passenger flow and scheduling insights to improve service reliability',
    },
    {
        icon: ParkingCircle,
        title: 'Parking & Mobility',
        description: 'Live parking availability and demand management integration',
    },
    {
        icon: MapPin,
        title: 'Smart City Initiatives',
        description: 'Integrated safety, mobility, and sustainability goals with unified visibility',
    },
    {
        icon: Boxes,
        title: 'Highway & Expressway Authorities',
        description: 'Monitor high-speed corridors for incidents and optimize flow management',
    },
];

export function SectorsSection() {
    return (
        <section id="sectors" className="py-10 lg:pt-10 lg:py-15 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 mb-6">
                                Who We Serve
                            </div>
                            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                                Empowering cities and organizations to build{' '}
                                <span className="text-red-600">safer, smarter environments</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                From municipal traffic departments to smart city integrators, MetaCiti serves
                                organizations at every scale of urban mobility management.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {sectors.map((sector, index) => (
                                <motion.div
                                    key={sector.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                                        <sector.icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg text-gray-900 mb-1">{sector.title}</h3>
                                        <p className="text-gray-600">{sector.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <img
                                src={"otnmitest3.webp"}
                                alt="Who We Serve"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mt-10">
                            <img
                                src="testnmifile2.webp"
                                alt="Additional Image"
                                className="w-full h-auto"
                            />
                        </div>


                        {/* Decorative element */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}