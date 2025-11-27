import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const garet = localFont({
  src: [
    {
      path: "./fonts/Garet-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Garet-Heavy.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-garet",
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
  description: "Tricologia especializada e estética natural em Niterói. Protocolos científicos, tecnologia avançada e experiência premium.",
  keywords: ["Tricologia", "Estética", "Niterói", "Head Spa", "Dermatologia", "Beleza", "Saúde Capilar"],
  openGraph: {
    title: "Bruel Beauty Clinic | Tricologia e Estética em Niterói",
    description: "Protocolos científicos, tecnologia avançada e experiência premium para realçar sua melhor versão.",
    url: "https://bruelclinic.com.br",
    siteName: "Bruel Beauty Clinic",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruel Beauty Clinic",
    description: "Tricologia especializada e estética natural em Niterói.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", garet.variable, nimbus.variable)}>
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
