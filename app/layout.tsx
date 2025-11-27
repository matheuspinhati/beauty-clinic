import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const nimbus = localFont({
  src: [
    {
      path: "./fonts/nimbus-roman-no9-l.regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/nimbus-roman-no9-l.regular-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/nimbus-roman-no9-l.bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/nimbus-roman-no9-l.bold-italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-nimbus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruel Beauty Clinic | Tricologia e Estética em Niterói",
  description:
    "Tricologia especializada e estética natural em Niterói. Protocolos científicos, tecnologia avançada e experiência premium.",
  authors: [{ name: "DataX Marketing" }],
  publisher: "DataX Marketing",
  metadataBase: new URL("https://bruelclinic.com.br"),
  keywords: [
    "Tricologia",
    "Estética",
    "Niterói",
    "Head Spa",
    "Dermatologia",
    "Beleza",
    "Saúde Capilar",
  ],
  openGraph: {
    title: "Bruel Beauty Clinic | Tricologia e Estética em Niterói",
    description:
      "Protocolos científicos, tecnologia avançada e experiência premium para realçar sua melhor versão.",
    url: "https://bruelclinic.com.br",
    siteName: "Bruel Beauty Clinic",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Bruel Beauty Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruel Beauty Clinic",
    description: "Tricologia especializada e estética natural em Niterói.",
    images: ["/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health & Beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", dm_sans.variable, nimbus.variable)}>
      <body
        className={cn(
          "font-sans antialiased bg-background text-foreground overflow-x-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
