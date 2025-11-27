import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="pt-BR" className="scroll-smooth">
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
