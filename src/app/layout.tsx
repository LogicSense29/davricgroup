import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Davric Group | Global Excellence",
    template: "%s | Davric Group",
  },
  description: "Davric Group is a leading Nigerian conglomerate with subsidiaries in Oil & Gas, Construction, Telecommunications, Real Estate, and Philanthropy.",
  keywords: ["Davric Group", "Nigeria", "oil and gas", "construction", "telecom", "real estate", "infrastructure", "conglomerate"],
  metadataBase: new URL("https://www.davricgroup.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Davric Group",
    title: "Davric Group | Global Excellence",
    description: "A leading Nigerian conglomerate delivering excellence across Oil & Gas, Construction, Telecom, and Real Estate.",
    images: [{ url: "/davric-group-logo.png", width: 800, height: 600, alt: "Davric Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davric Group | Global Excellence",
    description: "A leading Nigerian conglomerate delivering excellence across Oil & Gas, Construction, Telecom, and Real Estate.",
    images: ["/davric-group-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
