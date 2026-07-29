"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, Wrench, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: CalendarCheck,
    title: "10+ Years Experience",
    description:
      "Over a decade of expertise in delivering premium water solutions across India.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "We use only the highest quality materials and components in every installation.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "Certified technicians ensure flawless installation and setup for every product.",
  },
  {
    icon: HeadphonesIcon,
    title: "After Sales Support",
    description:
      "Comprehensive maintenance and support to keep your systems running smoothly.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-primary-navy text-white">
      <div className="max-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Why Choose Popli Solutions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            What sets us apart from the competition
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
