// "use client";

// import { motion } from "framer-motion";
// import { Building2, Home, Hotel, Factory, ArrowRight } from "lucide-react";
// import Link from "next/link";

// const projects = [
//   {
//     title: "Residential Complex Water System",
//     category: "Residential",
//     description:
//       "Complete water supply system installation for a 200-apartment complex including SS tanks, pressure pumps, and filtration.",
//     icon: Home,
//     color: "from-blue-50 to-cyan-50",
//   },
//   {
//     title: "Hotel Swimming Pool & Spa",
//     category: "Hospitality",
//     description:
//       "Design and construction of a luxury swimming pool with heat pump, steam bath, and sauna for a 5-star hotel.",
//     icon: Hotel,
//     color: "from-sky-50 to-indigo-50",
//   },
//   {
//     title: "Industrial STP Plant",
//     category: "Industrial",
//     description:
//       "Installation of a 500 KLD sewage treatment plant for a manufacturing facility with zero liquid discharge.",
//     icon: Factory,
//     color: "from-cyan-50 to-teal-50",
//   },
//   {
//     title: "Commercial Building Water Solution",
//     category: "Commercial",
//     description:
//       "Integrated water solution for a 15-story commercial tower including harvesting system and booster pumps.",
//     icon: Building2,
//     color: "from-blue-50 to-indigo-50",
//   },
//   {
//     title: "School Water Purification Project",
//     category: "Institutional",
//     description:
//       "Installation of large-scale RO water purification system ensuring safe drinking water for 2,000+ students.",
//     icon: Building2,
//     color: "from-teal-50 to-cyan-50",
//   },
//   {
//     title: "Residential Township STP",
//     category: "Infrastructure",
//     description:
//       "Design and installation of a decentralized STP system for a 500-home township with recycling capabilities.",
//     icon: Factory,
//     color: "from-indigo-50 to-blue-50",
//   },
//   {
//     title: "Luxury Villa Pool & Spa",
//     category: "Residential",
//     description:
//       "Custom swimming pool, steam bath, and sauna installation for a luxury villa with smart control systems.",
//     icon: Home,
//     color: "from-sky-50 to-cyan-50",
//   },
//   {
//     title: "Hospital Water Treatment Plant",
//     category: "Healthcare",
//     description:
//       "Comprehensive water treatment and purification system for a 300-bed hospital with emergency backup.",
//     icon: Building2,
//     color: "from-blue-50 to-sky-50",
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <>
//       {/* Hero Banner */}
//       <section className="relative bg-gradient-to-br from-primary-navy to-dark-navy text-white py-24 overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
//           <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
//         </div>
//         <div className="max-container relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
//               Our Projects
//             </h1>
//             <p className="text-white/80 text-lg max-w-2xl mx-auto">
//               Showcasing our expertise through successful water solutions projects across India
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-20 bg-section-bg">
//         <div className="max-container">
//           <div className="grid md:grid-cols-2 gap-6">
//             {projects.map((project, index) => {
//               const Icon = project.icon;
//               return (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.08 }}
//                   className="group bg-white rounded-[16px] border border-border/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                 >
//                   <div
//                     className={`h-48 flex items-center justify-center bg-gradient-to-br ${project.color}`}
//                   >
//                     <div className="w-20 h-20 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
//                       <Icon className="w-10 h-10 text-primary-navy" />
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
//                       {project.category}
//                     </span>
//                     <h3 className="text-lg font-bold font-heading text-primary-navy mt-2 mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-sm text-text-secondary leading-relaxed">
//                       {project.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-accent-blue text-white">
//         <div className="max-container text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
//               Have a Project in Mind?
//             </h2>
//             <p className="text-white/80 max-w-xl mx-auto mb-8">
//               Let us help you with your water solutions requirements
//             </p>
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-navy font-bold text-sm rounded-[10px] hover:bg-gray-100 transition-all shadow-lg"
//             >
//               Start Your Project
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }
