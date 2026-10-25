import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { profile } from "@/data/profile";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a1f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Lets CSS hide reveal-on-scroll content only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <div className="backdrop" aria-hidden="true">
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
          <span className="grid-overlay" />
        </div>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
