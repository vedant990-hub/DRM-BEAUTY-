import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRM Beauty | Premium Beauty and Cosmetics",
  description:
    "DRM Beauty is a premium beauty and cosmetics storefront prototype focused on elevated discovery and conversion.",
  metadataBase: new URL("https://drmbeauty.example"),
  openGraph: {
    title: "DRM Beauty",
    description:
      "Premium beauty and cosmetics storefront prototype with a soft luxury aesthetic.",
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
