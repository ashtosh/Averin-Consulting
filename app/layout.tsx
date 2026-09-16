import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://averinconsulting.com"),
  title: { default: "Averin Consulting | Retail Planning, Data & AI Advisory", template: "%s | Averin Consulting" },
  description: "Independent advisory focused on assortment planning, merchandise financial planning, allocation and replenishment, plus data management and AI advisory around these retail planning solutions.",
  keywords: ["retail planning consulting", "assortment planning", "merchandise financial planning", "MFP", "allocation", "replenishment", "retail planning data management", "planning software selection", "retail AI", "adaptive planning agent"],
  icons: { icon: "/averin-mark.svg", shortcut: "/averin-mark.svg", apple: "/averin-mark.svg" },
  openGraph: {
    title: "Averin Consulting | Focused Retail Planning, Data & AI Advisory",
    description: "Independent advisory for assortment planning, MFP, allocation and replenishment, data management and AI.",
    url: "https://averinconsulting.com",
    siteName: "Averin Consulting",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
