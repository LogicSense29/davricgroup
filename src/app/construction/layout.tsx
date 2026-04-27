import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Civil Works | Davric Group",
  description: "Davric Group delivers excellence in civil construction — from road and bridge infrastructure to residential and commercial developments across Nigeria.",
  keywords: ["construction", "civil works", "infrastructure", "residential construction", "commercial construction", "Nigeria", "Davric Group"],
  openGraph: {
    title: "Construction & Civil Works | Davric Group",
    description: "Building today for tomorrow. Infrastructure, residential, and commercial construction across Nigeria.",
    images: ["/davricgroup-construction.png"],
    type: "website",
  },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
