import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAGTrans Systems | Engineering Precision in Industrial Cooling & Magnetics",
  description:
    "Advanced process cooling, magnetics & cryogenic solutions for global industries. Trusted testing and proven performance. 45+ years of expertise.",
  keywords: [
    "industrial cooling",
    "magnetics",
    "cryogenic systems",
    "process cooling",
    "MAGTrans",
    "testing instruments",
    "measurement systems",
  ],
  openGraph: {
    title: "MAGTrans Systems | Industrial Cooling & Magnetics",
    description:
      "Advanced process cooling, magnetics & cryogenic solutions for global industries.",
    url: "https://magtrans.in",
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
      <body className="antialiased bg-white text-zinc-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
