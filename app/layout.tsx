import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://averinconsulting.com"),
  title: { default: "Averin Consulting | Retail Planning & Supply Chain Advisory", template: "%s | Averin Consulting" },
  description: "Independent retail planning, supply chain, software selection and AI advisory for retailers and manufacturers.",
  keywords: ["retail planning consulting", "merchandise financial planning", "assortment planning", "allocation", "replenishment", "software selection", "retail AI"],
  openGraph: { title: "Averin Consulting", description: "Independent Retail Planning & Supply Chain Advisory", url: "https://averinconsulting.com", siteName: "Averin Consulting", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
