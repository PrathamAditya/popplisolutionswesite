import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Popli Solutions | Complete Water Solutions Under One Roof",
  description:
    "Popli Solutions provides premium water solutions including stainless steel water tanks, swimming pools, pressure pumps, water filters, heat pumps, steam baths, sauna baths, water harvesting, and STP solutions.",
  keywords:
    "water solutions, water tanks, swimming pools, pressure pumps, water filters, heat pumps, steam bath, sauna, water harvesting, STP",
  openGraph: {
    title: "Popli Solutions | Complete Water Solutions",
    description:
      "Premium water solutions for every need. Stainless steel tanks, pumps, filters, and more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-text-primary font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
