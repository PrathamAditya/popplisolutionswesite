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
    details: ["+91 79861 26286", "+91 98032 04461"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["poplisolutions@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["D78 Guru Amardass Avenue, Airport road, Amritsar-143001"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon - Sat: 11:00 AM - 6:00 PM",
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
          <div className="grid lg:grid-cols-1 gap-12">
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
                    D78 Guru Amardass Avenue
                  </p>
                  <p className="text-sm text-text-secondary mb-4">
                    Airport road, Amritsar-143001
                  </p>
                  <a
                    href="https://maps.app.goo.gl/r4iesjU442Ngc9veA"
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
