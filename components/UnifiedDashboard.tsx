"use client";

import { motion } from 'motion/react';
import { Monitor, Video, Bell, Map, History, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UnifiedDashboardProps {
    image: string;
}

export function UnifiedDashboard({ image }: UnifiedDashboardProps) {
    const features = [
        { icon: Video, text: 'Live video feeds with AI overlays' },
        { icon: Bell, text: 'Real-time alerts and notifications' },
        { icon: Map, text: 'Live Digital Twin Maps' },
        { icon: History, text: 'Historical event replay' },
        { icon: TrendingUp, text: 'Congestion pattern monitoring' },
        { icon: Monitor, text: 'Multi-camera tracking' },
    ];

    return (
        <section className="py-8 lg:py-15 bg-gradient-to-br from-red-900/90 via-red-900/90 to-red-900/90 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                            <ImageWithFallback
                                src={image}
                                alt="Unified Dashboard"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent" />
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -top-8 -left-8 w-64 h-64 bg-red-600/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-block px-4 py-2 rounded-full bg-red-600/20 text-red-400 border border-red-600/30 mb-6">
                                Unified Dashboard
                            </div>
                            <h2 className="text-4xl lg:text-5xl text-white mb-6">
                                One Interface for{' '}
                                <span className="text-red-400">Complete Visibility</span>
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                MetaCiti operates through a unified dashboard that combines live video, AI overlays,
                                alerts, and Live Digital Twin Maps in a single interface. Operators can track movement
                                across multiple cameras, review past events, monitor congestion patterns, and respond
                                to incidents instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-red-600/50 hover:bg-gray-800 transition-all duration-300"
                                >
                                    <feature.icon className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    <span className="text-red-400">"The dashboard scales easily</span> from a single
                                    site to district or citywide deployments, providing seamless integration with existing
                                    infrastructure and workflows."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                                        <span className="text-white">MC</span>
                                    </div>
                                    <div>
                                        <div className="text-white">MetaCiti Platform</div>
                                        <div className="text-sm text-gray-400">Scalable Architecture</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
