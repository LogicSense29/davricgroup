import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Davric Group",
  description: "Get in touch with Davric Group. Reach our global headquarters in Ibadan, Nigeria to discuss partnerships in oil & gas, construction, telecom, or real estate.",
  keywords: ["contact", "Davric Group", "partnership", "inquiry", "Ibadan", "Nigeria"],
  openGraph: {
    title: "Contact Us | Davric Group",
    description: "Reach out to Davric Group to discuss your next project or partnership opportunity.",
    images: ["/davricgroup-oilandgas2.jpg"],
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
