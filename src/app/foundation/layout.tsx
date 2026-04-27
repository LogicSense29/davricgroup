import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation | Davric Group",
  description: "The Dav-Ric Foundation is the philanthropic arm of Davric Group, dedicated to education, healthcare, and community empowerment across Nigeria.",
  keywords: ["foundation", "philanthropy", "CSR", "community development", "education", "healthcare", "Nigeria", "Davric Group"],
  openGraph: {
    title: "The Dav-Ric Foundation | Davric Group",
    description: "Building people first. The Dav-Ric Foundation drives social impact through education, health, and community growth.",
    images: ["/davricgroup-construction2.png"],
    type: "website",
  },
};

export default function FoundationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
