"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, SendHorizonal } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 11111 22222"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["dummy@poplisolutions.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Batala", Punjab - 143505,
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon - Sat: 9:00 AM - 7:00 PM",
      "Sunday: Closed",
    ],
  },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    reset();
    alert("Thank you! We will get back to you shortly.");
  };

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
              Contact Us
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Get in touch with us for inquiries, quotes, or support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-[16px] bg-white border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-light-blue flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-navy" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-sm text-text-secondary">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-section-bg">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-text-secondary mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-[10px] border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-[10px] border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-[10px] border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-[10px] border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-[10px] border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-navy text-white font-semibold text-sm rounded-[10px] hover:bg-dark-navy transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <SendHorizonal className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-navy mb-2">
                Visit Our Office
              </h2>
              <p className="text-text-secondary mb-8">
                Drop by our office for a face-to-face consultation
              </p>

              <div className="rounded-[16px] overflow-hidden border border-border/60 shadow-sm h-[400px] bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary-navy mx-auto mb-3" />
                  <p className="font-semibold text-text-primary mb-1">
                    Popli Solutions
                  </p>
                  <p className="text-sm text-text-secondary">
                    123 Industrial Area, Sector-12
                  </p>
                  <p className="text-sm text-text-secondary mb-4">
                    Gurugram, Haryana - 122001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Gurugram+Haryana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-navy text-white text-sm font-semibold rounded-[10px] hover:bg-dark-navy transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
