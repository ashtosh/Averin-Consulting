import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://averinconsulting.com"),
  title: { default: "Averin Consulting | Inventory Replenishment Decision Diagnostic", template: "%s | Averin Consulting" },
  description: "Independent replenishment decision diagnostic for retailers: assess current-tool recommendations, planner overrides, execution, exception handling and where rules, analytics or AI can improve decision quality without requiring a new application deployment.",
  keywords: ["inventory replenishment consulting", "retail replenishment diagnostic", "planner overrides", "replenishment exception management", "retail decision intelligence", "inventory planning AI", "Blue Yonder replenishment", "o9 replenishment", "retail AI advisory", "allocation and replenishment"],
  icons: { icon: "/averin-mark.svg", shortcut: "/averin-mark.svg", apple: "/averin-mark.svg" },
  openGraph: {
    title: "Averin Consulting | Inventory Replenishment Decision Diagnostic",
    description: "Assess the replenishment decision you already make today—across current tools, planner judgment and execution—before adding more software or AI.",
    url: "https://averinconsulting.com",
    siteName: "Averin Consulting",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
