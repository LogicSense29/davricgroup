import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telecom Services | Davric Group",
  description: "Dav-Ric Telecoms provides end-to-end telecom services including cell site builds, maintenance, power solutions, and OFC laying across Nigeria.",
  keywords: ["telecom", "cell site", "telecommunications", "network maintenance", "OFC laying", "power solutions", "Nigeria", "Davric Group"],
  openGraph: {
    title: "Telecom Services | Davric Group",
    description: "Reliable networks. Expert maintenance. Zero downtime. Telecom engineering services across Nigeria.",
    images: ["/davricgroup-telecom.png"],
    type: "website",
  },
};

export default function TelecomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
