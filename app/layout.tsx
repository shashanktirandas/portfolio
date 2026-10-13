import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shashanktirandas.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Shashank Tirandas | Independent Developer",
    template: "%s | Shashank Tirandas",
  },

  description:
    "I'm Shashank Tirandas, an independent developer and B.Tech CSE student building thoughtful web applications and useful digital experiences.",

  applicationName: "Shashank Tirandas Portfolio",

  openGraph: {
    title: "Shashank Tirandas | Independent Developer",
    description:
      "Explore selected projects, web applications, and digital experiences built by Shashank Tirandas.",
    url: siteUrl,
    siteName: "Shashank Tirandas",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shashank Tirandas | Independent Developer",
    description:
      "Thoughtful web applications, useful digital products, and selected projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}