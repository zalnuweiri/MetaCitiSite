"use client";

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function FinalCtaSection() {
  return (
      <section className="py-15 lg:py-20 bg-gradient-to-br from-[#B7094C] via-[#723C70] to-[#0091AD] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-5xl lg:text-6xl xl:text-7xl text-white mb-8 tracking-tight leading-tight">
              Ready to Transform Your City's Mobility?
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 mb-16 leading-relaxed max-w-3xl mx-auto">
              See how MetaCiti can help you improve safety, optimize operations,
              and make data-driven decisions for your urban network.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                <span className="text-lg">Free consultation</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                <span className="text-lg">Custom demo</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                <span className="text-lg">No commitment</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button
                  size="lg"
                  className="bg-white hover:bg-gray-50 text-[#723C70] px-12 shadow-2xl group text-lg h-16 transition-all duration-300 hover:scale-105"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-red-600 hover:bg-white/10 px-12 text-lg h-16 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-20 pt-16 border-t border-white/20"
            >
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-5xl lg:text-6xl text-white mb-3">500+</div>
                  <div className="text-white/80 text-lg">Cities Deployed</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl text-white mb-3">10M+</div>
                  <div className="text-white/80 text-lg">Daily Detections</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl text-white mb-3">99.9%</div>
                  <div className="text-white/80 text-lg">Accuracy Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}