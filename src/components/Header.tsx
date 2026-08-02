"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  // { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Popli Solutions Home">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-navy text-white">
            <Droplets className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary-navy font-heading leading-tight">
              Popli Solutions
            </span>
            <span className="text-[10px] font-medium text-text-secondary uppercase tracking-wider leading-tight">
              Complete Water Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary-navy"
                    : "text-text-secondary hover:text-primary-navy"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-navy rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center px-6 py-3 bg-primary-navy text-white font-semibold text-sm rounded-[10px] hover:bg-dark-navy transition-colors duration-200"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-white overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-light-blue text-primary-navy"
                        : "text-text-secondary hover:bg-gray-50 hover:text-primary-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-primary-navy text-white font-semibold text-sm rounded-[10px] text-center hover:bg-dark-navy transition-colors"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
