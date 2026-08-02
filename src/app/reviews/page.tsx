"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Building2, Home, Hotel } from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Qadian",
    rating: 5,
    text: "Excellent service! Installed a 2000L SS water tank and pressure pump. The team was professional and completed the installation in one day. Highly recommended.",
    project: "Water Tank Installation",
  },
  {
    name: "Priya Sharma",
    location: "Batala",
    rating: 5,
    text: "We got our swimming pool designed and built by Popli Solutions. The quality of work is outstanding. The filtration system works perfectly. Thank you for the wonderful job!",
    project: "Swimming Pool Construction",
  },
  {
    name: "Amit Singh",
    location: "Batala",
    rating: 5,
    text: "Installed a complete water filtration system for our factory. The team did a thorough assessment and provided the perfect solution. Great after-sales support too.",
    project: "Industrial Water Filter",
  },
  {
    name: "Sunil Mehta",
    location: "Gurdaspur",
    rating: 4,
    text: "Very happy with the heat pump installation. It's been running efficiently for over a year now. The energy savings are noticeable. Would definitely recommend.",
    project: "Heat Pump Installation",
  },
  {
    name: "Anita Verma",
    location: "Amritsar",
    rating: 5,
    text: "The steam bath installation at our home is amazing! Professional team, quality products, and excellent customer service. Popli Solutions delivered exactly what they promised.",
    project: "Steam Bath Installation",
  },
  {
    name: "Vikram Patel",
    location: "Amritsar",
    rating: 5,
    text: "We engaged Popli Solutions for our residential complex STP. They designed an efficient system that meets all environmental norms. Very satisfied with their expertise.",
    project: "STP Installation",
  },
];

const projectGallery = [
  { icon: Building2, label: "Commercial Projects", count: "150+" },
  { icon: Home, label: "Residential Projects", count: "250+" },
  { icon: Hotel, label: "Hospitality Projects", count: "75+" },
  { icon: Building2, label: "Industrial Projects", count: "50+" },
];

export default function ReviewsPage() {
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
              Customer Reviews
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with Popli Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="text-4xl font-bold font-heading text-primary-navy mb-1">
              4.7 / 5.0
            </div>
            <p className="text-text-secondary">
              Based on 500+ reviews from our valued customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-section-bg">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real feedback from real customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-[16px] p-6 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-light-blue mb-3" />
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-border/60 pt-4">
                  <p className="font-bold text-text-primary text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-text-secondary">{review.location}</p>
                  <p className="text-xs text-accent-blue font-medium mt-1">
                    {review.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
              Projects Gallery
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectGallery.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-[16px] bg-section-bg border border-border/60"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-light-blue flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary-navy" />
                  </div>
                  <div className="text-2xl font-bold font-heading text-primary-navy mb-1">
                    {item.count}
                  </div>
                  <div className="text-sm text-text-secondary">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA
      <section className="py-20 bg-accent-blue text-white">
        <div className="max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Share Your Experience
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              We value your feedback. Let us know how we did.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-navy font-bold text-sm rounded-[10px] hover:bg-gray-100 transition-all shadow-lg"
            >
              Write a Review
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}
