import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Links | Bruel Beauty Clinic",
  description: "Acesse nossos links principais - Instagram, WhatsApp e localização",
  robots: {
    index: false,
    follow: false,
  },
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

