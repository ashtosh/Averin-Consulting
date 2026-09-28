import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://averinconsulting.com"),
  title: { default: "Averin Consulting | Inventory Replenishment & AI Decision Sprint", template: "%s | Averin Consulting" },
  description: "A two-week fixed-fee Inventory Replenishment & Exception Decision Sprint that turns retailer sales and inventory data into a working AI-assisted decision prototype, historical back-test and 90-day adoption plan.",
  keywords: ["inventory replenishment consulting", "retail replenishment", "retail exception management", "inventory planning AI", "replenishment AI", "retail planning consulting", "allocation and replenishment", "retail decision intelligence", "inventory exception management", "retail AI advisory"],
  icons: { icon: "/averin-mark.svg", shortcut: "/averin-mark.svg", apple: "/averin-mark.svg" },
  openGraph: {
    title: "Averin Consulting | Inventory Replenishment & Exception Decision Sprint",
    description: "Turn one recurring replenishment decision into a working AI-assisted prototype using your own retailer data.",
    url: "https://averinconsulting.com",
    siteName: "Averin Consulting",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
