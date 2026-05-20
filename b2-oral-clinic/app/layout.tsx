import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "B2 Oral Clinic | Odontologia de Alto Padrão",
  description:
    "Transforme seu sorriso com a mais alta tecnologia e estética refinada. Implantes, lentes dentais, clareamento e harmonização facial.",
  keywords:
    "odontologia premium, implante dental, lente dental, clareamento dental, harmonização facial, B2 Oral Clinic",
  authors: [{ name: "B2 Oral Clinic" }],
  openGraph: {
    title: "B2 Oral Clinic | Odontologia de Alto Padrão",
    description:
      "Transforme seu sorriso com a mais alta tecnologia e estética refinada.",
    type: "website",
    locale: "pt_BR",
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
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
