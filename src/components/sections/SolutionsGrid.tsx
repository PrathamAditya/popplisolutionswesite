"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Waves,
  Wind,
  Filter,
  Thermometer,
  Bath,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Droplets,
    label: "Water Tanks",
    desc: "Stainless steel & FRP tanks",
    href: "/products#water-tanks",
  },
  {
    icon: Waves,
    label: "Swimming Pools",
    desc: "Design, construction & maintenance",
    href: "/products#swimming-pools",
  },
  {
    icon: Wind,
    label: "Pumps",
    desc: "Pressure pumps & boosters",
    href: "/products#pumps",
  },
  {
    icon: Filter,
    label: "Water Filters",
    desc: "RO, UV & advanced filtration",
    href: "/products#water-filters",
  },
  {
    icon: Thermometer,
    label: "Heat Pumps",
    desc: "Energy-efficient heating",
    href: "/products#heat-pumps",
  },
  {
    icon: Bath,
    label: "Steam & Sauna",
    desc: "Premium steam bath & sauna",
    href: "/products#steam-sauna",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Our Solutions
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Comprehensive water solutions tailored to meet every requirement
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={solution.href}
                  className="group block p-8 bg-white rounded-[16px] border border-border/60 shadow-sm hover:shadow-lg hover:border-primary-navy/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-light-blue flex items-center justify-center mb-5 group-hover:bg-primary-navy transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-primary mb-1.5">
                    {solution.label}
                  </h3>
                  <p className="text-sm text-text-secondary">{solution.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
