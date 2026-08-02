"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Waves,
  Wind,
  Filter,
  Thermometer,
  Bath,
  CloudRain,
  Recycle,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "water-tanks", label: "Water Tanks", icon: Droplets },
  { id: "swimming-pools", label: "Swimming Pools", icon: Waves },
  { id: "pressure-pumps", label: "Pressure Pumps", icon: Wind },
  { id: "water-filters", label: "Water Filters", icon: Filter },
  { id: "heat-pumps", label: "Heat Pumps", icon: Thermometer },
  { id: "steam-bath", label: "Steam Bath", icon: Bath },
  { id: "sauna-bath", label: "Sauna Bath", icon: Bath },
  { id: "water-harvesting", label: "Water Harvesting", icon: CloudRain },
  { id: "stp-solutions", label: "STP Solutions", icon: Recycle },
];

const productData: Record<
  string,
    { title: string; description: string; features: string[]; image: string; imageSrc: string }
> = {
  "water-tanks": {
    title: "Stainless Steel Water Tanks",
    description:
      "Premium quality stainless steel water tanks designed for durability and hygiene. Available in various capacities from 100 to 50,000 liters, our tanks are corrosion-resistant, easy to install, and come with ISI certification.",
    features: [
      "SS-304 & SS-316 food-grade stainless steel",
      "Range from 100 to 50,000 liters",
      "Corrosion and rust resistant",
      "ISI certified quality",
      "Easy installation and maintenance",
      "10-year warranty",
    ],
    image: "water-tank",
  },
  "swimming-pools": {
    title: "Swimming Pools",
    description:
      "Custom-designed swimming pools for residential, commercial, and hospitality sectors. We provide end-to-end solutions including design, construction, filtration systems, and maintenance services.",
    features: [
      "Custom designs for any space",
      "Advanced filtration systems",
      "Energy-efficient pumps",
      "LED lighting options",
      "Heating systems available",
      "Regular maintenance packages",
    ],
    image: "pool",
  },
  "pressure-pumps": {
    title: "Pressure Pumps",
    description:
      "High-performance pressure pumps and booster systems designed to deliver consistent water pressure for residential and commercial applications. Energy-efficient and built to last.",
    features: [
      "Automatic pressure control",
      "Energy-efficient motors",
      "Quiet operation",
      "Corrosion-resistant body",
      "Thermal overload protection",
      "2-year warranty",
    ],
    image: "pump",
  },
  "water-filters": {
    title: "Water Filters & Purification Systems",
    description:
      "Advanced water filtration and purification systems using RO, UV, and multi-stage filtration technology. Ensure pure, safe, and great-tasting water for your home or business.",
    features: [
      "RO + UV + UF multi-stage filtration",
      "Removes 99.9% contaminants",
      "TDS control technology",
      "Smart auto-flush system",
      "Food-grade plastic components",
      "Annual maintenance contracts",
    ],
    image: "filter",
  },
  "heat-pumps": {
    title: "Heat Pumps",
    description:
      "Energy-efficient heat pump systems for water heating, pool heating, and space heating. Our heat pumps use advanced inverter technology for optimal performance and energy savings.",
    features: [
      "Inverter compressor technology",
      "COP up to 5.0 (500% efficiency)",
      "Smart temperature control",
      "Quiet operation (45 dB)",
      "Eco-friendly refrigerant",
      "Suitable for pools & homes",
    ],
    image: "heat-pump",
  },
  "steam-bath": {
    title: "Steam Bath Systems",
    description:
      "Premium steam bath systems for luxurious spa experiences at home or in commercial settings. Features digital controls, rapid steam generation, and safety sensors.",
    features: [
      "Digital touch control panel",
      "Rapid steam generation",
      "Auto-cleaning system",
      "Aromatherapy compatible",
      "Safety auto shut-off",
      "Compact design",
    ],
    image: "steam",
  },
  "sauna-bath": {
    title: "Sauna Bath Systems",
    description:
      "Traditional and infrared sauna rooms crafted from premium materials. Experience the ultimate relaxation with our professionally installed sauna solutions.",
    features: [
      "Cedar & hemlock wood construction",
      "Infrared and traditional options",
      "Digital temperature control",
      "LED mood lighting",
      "Built-in audio system",
      "Quick heat-up time",
    ],
    image: "sauna-bath-img",
    imageSrc: "/products/sauna-bath-img.jpg",
    // image: "sauna",
  },
  "water-harvesting": {
    title: "Water Harvesting Systems",
    description:
      "Complete rainwater harvesting solutions for residential and commercial properties. Capture, filter, and store rainwater for sustainable water management.",
    features: [
      "Rooftop harvesting systems",
      "Underground storage tanks",
      "Advanced filtration units",
      "Groundwater recharge systems",
      "Custom designs for any property",
      "Government subsidy eligible",
    ],
    image: "harvesting",
  },
  "stp-solutions": {
    title: "STP Solutions",
    description:
      "Sewage treatment plant solutions for residential complexes, commercial buildings, and industrial facilities. Meet environmental compliance with our efficient treatment systems.",
    features: [
      "MBBR & SBR technology",
      "Zero liquid discharge options",
      "Compact footprint design",
      "Low energy consumption",
      "Remote monitoring capability",
      "CPCB compliant",
    ],
    image: "stp",
  },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("water-tanks");

  const activeProduct = productData[activeCategory];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-navy to-dark-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <div className="max-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Our Products
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Comprehensive range of premium water solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-72 shrink-0"
            >
              <div className="lg:sticky lg:top-28 bg-white rounded-[16px] border border-border/60 shadow-sm overflow-hidden">
                <div className="p-4 bg-primary-navy text-white">
                  <h3 className="font-bold font-heading text-sm">Categories</h3>
                </div>
                <nav className="p-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                          isActive
                            ? "bg-light-blue text-primary-navy"
                            : "text-text-secondary hover:bg-gray-50 hover:text-primary-navy"
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.aside>

            {/* Product Detail */}
            <div className="flex-1">
              {activeProduct && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Product Image */}
                    <div className="rounded-[16px] overflow-hidden bg-gradient-to-br from-light-blue to-white border border-border/50 shadow-md h-72 lg:h-96 flex items-center justify-center"
                    >
                       <Image
    src={activeProduct.imageSrc}
    alt={activeProduct.title}
    fill
    className="object-cover"
    onError={(e) => {
      // hide broken image, fallback div below will show
      (e.target as HTMLImageElement).style.display = "none";
    }}
  />
                      <div className="text-center">
                        {activeProduct.image === "water-tank" && (
                          <Droplets className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "pool" && (
                          <Waves className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "pump" && (
                          <Wind className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "filter" && (
                          <Filter className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "heat-pump" && (
                          <Thermometer className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "steam" && (
                          <Bath className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "sauna" && (
                          <Bath className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "harvesting" && (
                          <CloudRain className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        {activeProduct.image === "stp" && (
                          <Recycle className="w-20 h-20 text-primary-navy mx-auto mb-3" />
                        )}
                        <p className="text-sm font-semibold text-primary-navy">
                          {activeProduct.title}
                        </p>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-navy mb-4">
                        {activeProduct.title}
                      </h2>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {activeProduct.description}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {activeProduct.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-light-blue flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-primary-navy" />
                            </div>
                            <span className="text-sm text-text-primary">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-navy text-white font-semibold text-sm rounded-[10px] hover:bg-dark-navy transition-all w-fit"
                      >
                        Enquire Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* All Products Grid */}
              <div className="mt-16">
                <h3 className="text-xl font-bold font-heading text-primary-navy mb-6">
                  Browse All Products
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex flex-col items-center gap-2 p-5 rounded-[16px] border transition-all duration-200 ${
                          isActive
                            ? "bg-primary-navy text-white border-primary-navy shadow-lg"
                            : "bg-white text-text-primary border-border/60 hover:border-primary-navy/30 hover:shadow-md"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="text-xs font-semibold text-center">
                          {cat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-blue text-white">
        <div className="max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Our experts can help you select the right product for your needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-navy font-bold text-sm rounded-[10px] hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
