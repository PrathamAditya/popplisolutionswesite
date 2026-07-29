"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wind, Thermometer, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative min-h-[650px] bg-white overflow-hidden">
      {/* Background water splash effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-light-blue/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-light-blue/30 blur-3xl" />
        <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-accent-blue/5 blur-2xl" />
        {/* Wave pattern */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 text-white"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,20 C360,50 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="max-container relative z-10 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-light-blue rounded-full text-primary-navy text-sm font-medium mb-6">
                <Droplets className="w-4 h-4" />
                <span>Trusted Since 2014</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-heading text-primary-navy leading-[1.1] tracking-tight mb-6">
                Complete Water Solutions
                <span className="block text-accent-blue">Under One Roof</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
                From stainless steel tanks to advanced filtration systems, we provide
                end-to-end water solutions for residential, commercial, and industrial
                needs with unmatched quality and expertise.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-navy text-white font-semibold text-sm rounded-[10px] hover:bg-dark-navy transition-all duration-200 shadow-lg shadow-primary-navy/20 hover:shadow-xl hover:shadow-primary-navy/30 hover:-translate-y-0.5"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-navy text-primary-navy font-semibold text-sm rounded-[10px] hover:bg-primary-navy hover:text-white transition-all duration-200"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right - Product Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large tank */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-blue to-white border border-border/50 shadow-lg h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-primary-navy/10 flex items-center justify-center">
                      <Droplets className="w-12 h-12 text-primary-navy" />
                    </div>
                    <p className="text-sm font-semibold text-primary-navy">Stainless Steel Tanks</p>
                    <p className="text-xs text-text-secondary">100-50000 Liters</p>
                  </div>
                </div>
              </div>

              {/* Pressure Pump */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-blue to-white border border-border/50 shadow-md h-36">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent-blue/10 flex items-center justify-center">
                      <Wind className="w-6 h-6 text-accent-blue" />
                    </div>
                    <p className="text-xs font-semibold text-text-primary">Pressure Pumps</p>
                  </div>
                </div>
              </div>

              {/* Water Filter */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-blue to-white border border-border/50 shadow-md h-36">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent-blue/10 flex items-center justify-center">
                      <Filter className="w-6 h-6 text-accent-blue" />
                    </div>
                    <p className="text-xs font-semibold text-text-primary">Water Filters</p>
                  </div>
                </div>
              </div>

              {/* Heat Pump */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-blue to-white border border-border/50 shadow-md h-28">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-navy/10 flex items-center justify-center">
                      <Thermometer className="w-5 h-5 text-primary-navy" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-text-primary">Heat Pumps</p>
                      <p className="text-xs text-text-secondary">Energy Efficient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center shadow-lg shadow-accent-blue/30">
              <span className="text-white text-[10px] font-bold text-center leading-tight">
                10+<br />Years
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
