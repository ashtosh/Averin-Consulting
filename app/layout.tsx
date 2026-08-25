import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://averinconsulting.com"),
  title: { default: "Averin Consulting | Retail Planning, Supply Chain & AI Advisory", template: "%s | Averin Consulting" },
  description: "Independent retail planning, supply chain, technology selection and AI advisory for fashion, luxury, specialty retail and manufacturing organizations.",
  keywords: ["retail planning consulting", "fashion retail consulting", "luxury retail planning", "merchandise financial planning", "assortment planning", "demand planning", "allocation", "replenishment", "software selection", "retail AI", "supply chain advisory"],
  icons: { icon: "/averin-mark.svg", shortcut: "/averin-mark.svg", apple: "/averin-mark.svg" },
  openGraph: {
    title: "Averin Consulting | Retail Planning. Supply Chain. Powered by AI.",
    description: "Independent retail planning, supply chain, technology and AI advisory.",
    url: "https://averinconsulting.com",
    siteName: "Averin Consulting",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
