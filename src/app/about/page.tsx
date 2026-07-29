"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Heart, Target, Award, Users, Wrench, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timeline = [
  {
    year: "2014",
    title: "Founded",
    description: "Popli Solutions established with a vision to provide premium water solutions.",
  },
  {
    year: "2016",
    title: "Expansion",
    description: "Expanded operations to serve residential and commercial clients across Delhi NCR.",
  },
  {
    year: "2018",
    title: "Product Range",
    description: "Launched comprehensive product line including tanks, pumps, and filtration systems.",
  },
  {
    year: "2020",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management systems.",
  },
  {
    year: "2023",
    title: "Pan-India Presence",
    description: "Extended services to 15+ states with 500+ successful projects completed.",
  },
  {
    year: "2025",
    title: "Innovation Hub",
    description: "Opened R&D center focused on sustainable water solutions and smart technologies.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Mission",
    description:
      "To deliver world-class water solutions that enhance quality of life while promoting water conservation and sustainability.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To become India's most trusted water solutions company, known for innovation, quality, and exceptional service.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, quality, customer-centricity, and environmental responsibility guide everything we do.",
  },
];

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Projects Completed" },
  { icon: Wrench, value: "50+", label: "Expert Technicians" },
  { icon: HeadphonesIcon, value: "24/7", label: "Support Available" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-navy to-dark-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <div className="max-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              About Us
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Learn about our journey, mission, and commitment to providing premium water solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-accent-blue uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mt-3 mb-6">
                India&apos;s Trusted Water Solutions Provider
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Popli Solutions has been at the forefront of the water solutions industry since 2014,
                providing premium quality products and services to residential, commercial, and industrial
                clients across India.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                From stainless steel water tanks to advanced water treatment systems, we offer
                comprehensive solutions designed to meet the highest standards of quality, durability,
                and performance.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-navy text-white font-semibold text-sm rounded-[10px] hover:bg-dark-navy transition-all"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-light-blue to-white border border-border/50 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary-navy/10 flex items-center justify-center mb-4">
                    <Shield className="w-12 h-12 text-primary-navy" />
                  </div>
                  <p className="text-lg font-bold font-heading text-primary-navy">Popli Solutions</p>
                  <p className="text-sm text-text-secondary">Complete Water Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-section-bg">
        <div className="max-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-light-blue flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-navy" />
                  </div>
                  <div className="text-3xl font-bold font-heading text-primary-navy mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-white">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
              Our Core Principles
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Driven by purpose, guided by values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-8 rounded-[16px] border border-border/60 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-light-blue flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary-navy" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-section-bg">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
              Our Journey
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Milestones that have shaped our story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 p-6 rounded-[16px] bg-white border border-border/60 shadow-sm ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="text-sm font-bold text-accent-blue">{item.year}</span>
                    <h3 className="text-lg font-bold font-heading text-primary-navy mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-navy border-4 border-white shadow z-10" />

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
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
              Want to Work With Us?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Get in touch to discuss your water solutions requirements
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-navy font-bold text-sm rounded-[10px] hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
