import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homes | Davric Group",
  description: "Dav-Ric Homes creates premium residential experiences through architectural elegance, smart integration, and lifestyle-driven development.",
  keywords: ["real estate", "luxury homes", "residential development", "premium housing", "Nigeria", "Davric Group", "Dav-Ric Homes"],
  openGraph: {
    title: "Homes | Davric Group",
    description: "Premium residential living — where vision meets address. Dav-Ric Homes.",
    images: ["/davricgroup-homes.png"],
    type: "website",
  },
};

export default function HomesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
