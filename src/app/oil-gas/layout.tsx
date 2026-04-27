import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oil & Gas | Davric Group",
  description: "Davric Group's Oil & Gas subsidiary specializes in AGO importation, distribution, and last-mile logistics across all geo-political zones of Nigeria.",
  keywords: ["oil and gas", "AGO", "petroleum", "energy distribution", "downstream oil", "Nigeria", "Davric Group"],
  openGraph: {
    title: "Oil & Gas | Davric Group",
    description: "Leading energy distribution across Nigeria — AGO importation, storage, and last-mile logistics.",
    images: ["/davricgroup-oilandgas.png"],
    type: "website",
  },
};

export default function OilGasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
