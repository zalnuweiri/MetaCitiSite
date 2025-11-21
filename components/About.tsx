"use client";

import { motion } from "motion/react";
import { Target, Sparkles } from "lucide-react";

export function About() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#dc2626]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[#dc2626] text-4xl lg:text-5xl mb-6">
                        About Ottonomi AI
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed">
                        <p>
                            Ottonomi is on a mission to democratize Video AI and is a leader in unlocking value through video and found the platform to transform low-cost, operators, and enterprise software operational intelligence. By fusing video, sensor, IoT, and telematics data, we create the digital twin cities that provide continuous situational awareness and predictive insights.
                        </p>
                    </div>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-3 mb-16 text-gray-700"
                >
                    <Target className="w-5 h-5 text-[#dc2626]" />
                    <p className="text-base">
                        <span className="text-[#dc2626]">Mission:</span> Deliver advanced actionable operational intelligence for a safe, smart, and connected cities.
                    </p>
                </motion.div>

                {/* MetaCiti Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                >
                    {/* Background card with gradient */}
                    <div className="relative bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] rounded-3xl p-10 lg:p-12 border-2 border-[#bfdbfe] shadow-2xl overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0ea5e9]/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#3b82f6]/10 rounded-full blur-2xl" />

                        {/* Corner accent circles */}
                        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[#93c5fd]/30 rounded-full" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-[#60a5fa]/30 rounded-full" />

                        {/* Content */}
                        <div className="relative">
                            {/* Header with icon */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-md">
                                    <Sparkles className="w-6 h-6 text-[#0ea5e9]" />
                                </div>
                                <h3 className="text-[#0284c7] text-2xl lg:text-3xl">
                                    Introducing MetaCiti™
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 text-lg leading-relaxed">
                                MetaCiti™ is an automated incident detection and operational platform designed for cities and municipalities needing enterprise intelligence at scale. They are intelligent operations teams and sensor data into a real-time digital twin map of urban areas, providing operators with continuous situational awareness across transportation and mobility systems.
                            </p>

                            {/* Accent line */}
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#0ea5e9] to-[#3b82f6] rounded-full" />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom decorative line */}
                <div className="flex items-center justify-center mt-12 gap-2">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#0ea5e9]/50" />
                    <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#0ea5e9]/50" />
                </div>
            </div>
        </section>
    );
}
