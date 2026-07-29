"use client";

import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Cpu, Award } from "lucide-react";

const features = [
  {
    icon: Droplets,
    label: "Pure",
    description: "100% pure water solutions",
  },
  {
    icon: ShieldCheck,
    label: "Reliable",
    description: "Trusted quality standards",
  },
  {
    icon: Cpu,
    label: "Advanced",
    description: "Latest technology",
  },
  {
    icon: Award,
    label: "Premium",
    description: "Top-grade materials",
  },
];

export default function FeatureIcons() {
  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="max-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-14 h-14 rounded-full bg-light-blue flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-navy" />
                </div>
                <span className="text-sm font-bold text-text-primary font-heading">
                  {feature.label}
                </span>
                <span className="text-xs text-text-secondary hidden sm:block">
                  {feature.description}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
