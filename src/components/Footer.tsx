import Link from "next/link";
import { Droplets, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white">
      <div className="max-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold font-heading text-white">
                  Popli Solutions
                </span>
                <span className="block text-[10px] font-medium text-white/60 uppercase tracking-wider">
                  Complete Water Solutions
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mt-4">
              Your trusted partner for premium water solutions. We deliver quality,
              reliability, and innovation in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold font-heading mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                // { label: "Projects", href: "/projects" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-base font-bold font-heading mb-4 text-white">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {[
                "Water Tanks",
                "Swimming Pools",
                "Pressure Pumps",
                "Water Filters",
                "Heat Pumps",
                "Steam & Sauna",
                "Water Harvesting",
                "STP Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold font-heading mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  D78 Guru Amardass Avenue, Airport road, Amritsar-143001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60 shrink-0" />
                <span className="text-sm text-white/70">+91 7986126286</span>
                <span className="text-sm text-white/70">+91 9803204461</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60 shrink-0" />
                <span className="text-sm text-white/70">poplisolutions@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Mon - Sat: 11:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Popli Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
