import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRM Beauty | Coming Soon",
  description: "DRM Beauty — Discover something beautiful coming soon.",
  metadataBase: new URL("https://drmbeauty.in"),
  openGraph: {
    title: "DRM Beauty | Coming Soon",
    description: "DRM Beauty — Discover something beautiful coming soon.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
