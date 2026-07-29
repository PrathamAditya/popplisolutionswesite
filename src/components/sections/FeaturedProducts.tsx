"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Waves, Wind, Filter } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Stainless Steel Tanks",
    description: "Premium SS tanks from 100 to 50,000 liters. Corrosion-resistant, durable, and ISI certified.",
    icon: Droplets,
    color: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
  },
  {
    title: "Swimming Pools",
    description: "Custom-designed residential and commercial pools with advanced filtration systems.",
    icon: Waves,
    color: "from-sky-50 to-indigo-50",
    iconBg: "bg-sky-100",
  },
  {
    title: "Pressure Pumps",
    description: "High-performance pressure pumps and booster systems for consistent water pressure.",
    icon: Wind,
    color: "from-cyan-50 to-teal-50",
    iconBg: "bg-cyan-100",
  },
  {
    title: "Water Filters",
    description: "Advanced RO, UV, and multi-stage filtration systems for pure and safe drinking water.",
    icon: Filter,
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-indigo-100",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
              Featured Products
            </h2>
            <p className="text-text-secondary max-w-xl">
              Explore our range of premium water solutions engineered for performance and durability
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary-navy font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-[16px] border border-border/60 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div
                  className={`h-52 flex items-center justify-center bg-gradient-to-br ${product.color}`}
                >
                  <div
                    className={`w-20 h-20 rounded-2xl ${product.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-primary-navy" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold font-heading text-text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-navy hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
