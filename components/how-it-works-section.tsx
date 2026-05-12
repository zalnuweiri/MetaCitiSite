"use client";

import { motion } from "motion/react";

const steps = [
    {
        number: "1",
        title: "Connect Infrastructure",
        description:
            "Integrate roadway cameras and selected sensors into the MetaCiti platform.",
    },
    {
        number: "2",
        title: "AI Interprets Activity",
        description:
            "AI models analyze traffic flow, incidents, and movement patterns.",
    },
    {
        number: "3",
        title: "Operators Receive Alerts",
        description:
            "Traffic operators see alerts, analytics, and digital twin visualization.",
    },
];

export const HowItWorksSection = () => {
    return (
        <section
            id="how"
            className="[font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Arial,sans-serif] relative overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-white to-[#f0f9ff]"
        >
            <div className="container mx-auto px-6 lg:px-12 py-15 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left max-w-3xl mb-16"
                >
                    <div className="inline-block px-8 py-4 text-2xl rounded-full bg-red-100 text-red-700 mb-6">
                        How It Works
                    </div>

                    <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                        From Cameras to{" "}
                        <span className="text-red-600">
                            Operational Intelligence
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg 2xl:text-xl leading-relaxed">
                        MetaCiti works with existing roadway infrastructure to provide
                        AI-driven traffic awareness.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-gray-100 border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300">
                                <div className="w-12 h-12 2xl:h-16 2xl:w-16 rounded-xl bg-red-600/20 flex items-center justify-center mb-5 group-hover:bg-[#b62727] group-hover:scale-110 transition-all duration-300">
                                    <span className="text-[#b62727] group-hover:text-white text-xl 2xl:text-2xl font-bold transition-colors duration-300">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl 2xl:text-2xl text-gray-900 mb-3 font-medium">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed 2xl:text-xl 2xl:font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};