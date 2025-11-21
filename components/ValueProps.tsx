"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Video, BarChart3 } from "lucide-react";

const tabs = [
    {
        id: "security",
        title: "See and solve security issues faster",
        icon: Shield,
        description: "Free your team from manual video reviews and onsite audits. Intuitive tools make it easy to spot problems in minutes, not hours.",
        stat: {
            value: "12",
            unit: "hours",
            label: "Customers save at least 12 hours of investigation and reporting time per month."
        },
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
        id: "cameras",
        title: "Give your old cameras new life",
        icon: Video,
        description: "Transform existing camera infrastructure into intelligent monitoring systems. No need for expensive hardware upgrades.",
        stat: {
            value: "85%",
            unit: "savings",
            label: "Average cost reduction compared to replacing entire camera systems."
        },
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
        id: "insights",
        title: "Uncover insights with video + data",
        icon: BarChart3,
        description: "Combine video intelligence with business data to discover patterns and opportunities you never knew existed.",
        stat: {
            value: "10x",
            unit: "faster",
            label: "Analyze operations 10x faster with AI-powered video analytics."
        },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
];

export function ValueProps() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0];

    return (
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
                    Get more value from your video
                </h2>

                {/* Tab Navigation */}
                <div className="flex items-center justify-center gap-12 mb-8 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                pb-4 px-4 text-left transition-all relative
                ${activeTab === tab.id
                                ? 'text-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                            }
              `}
                        >
                            <div className="flex items-center gap-2">
                                <tab.icon className="w-5 h-5"/>
                                <span className="text-base lg:text-lg">{tab.title}</span>
                            </div>
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dc2626]"
                                    transition={{type: "spring", stiffness: 300, damping: 30}}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Left: Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-gray-900 text-3xl lg:text-4xl mb-4">
                                    {activeContent.title}
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    {activeContent.description}
                                </p>
                            </div>

                            {/* Stat Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl text-[#0ea5e9]">
                    {activeContent.stat.value}
                  </span>
                                    <span className="text-2xl text-gray-500 mb-1">
                    {activeContent.stat.unit}
                  </span>
                                </div>
                                <p className="text-gray-600">
                                    {activeContent.stat.label}
                                </p>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="relative">
                            <div
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                                <ImageWithFallback
                                    src={activeContent.image}
                                    alt={activeContent.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>

                                {/* Mock interface overlay - optional */}
                                <div
                                    className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-lg p-4 text-white">
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                                        <span>AI Analysis Active</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div
                                className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-3xl -z-10"/>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}