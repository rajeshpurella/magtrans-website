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

const SITE_URL = "https://magtrans.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MAGTRANS Systems | Magnetic Testing, Cryogenics & Process Cooling",
    template: "%s | MAGTRANS Systems",
  },
  description:
    "MAGTRANS Systems delivers magnetic testing, cryogenic platforms and process cooling solutions for research labs and industrial manufacturers.",
  keywords: [
    "magnetic testing systems",
    "cryogenic cooling systems",
    "magnet measurement",
    "industrial magnet testing",
    "research magnet systems",
    "MAGTrans",
    "process cooling",
    "measurement systems",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MAGTrans Systems",
    title: "MAGTrans Systems | Magnetic Testing & Cryogenic Cooling Solutions",
    description:
      "MAGTrans provides advanced magnetic testing systems, cryogenic cooling solutions, and precision engineering equipment for research labs and industrial applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGTrans Systems | Magnetic Testing & Cryogenic Cooling Solutions",
    description:
      "MAGTrans provides advanced magnetic testing systems, cryogenic cooling solutions, and precision engineering equipment for research labs and industrial applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // Organization & Website structured data for enterprise brand
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}#organization`,
                  name: "MAGTrans Systems Private Limited",
                  url: SITE_URL,
                  logo: `${SITE_URL}/products/images/logo/magtranslogo.png`,
                  description:
                    "Engineering precision in industrial cooling, magnetics, cryogenic systems and advanced laboratory solutions.",
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}#website`,
                  url: SITE_URL,
                  name: "MAGTrans Systems",
                  publisher: {
                    "@id": `${SITE_URL}#organization`,
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
