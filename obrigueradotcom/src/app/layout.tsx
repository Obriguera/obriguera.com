import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Octavio Briguera | Full Stack Developer",
    template: "%s | Octavio Briguera",
  },
  description:
    "Portfolio profesional de Octavio Briguera, estudiante de ingeniería y desarrollador full stack en Córdoba, Argentina.",
  keywords: [
    "Octavio Briguera",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Córdoba",
  ],
  metadataBase: new URL("https://obriguera.com"),
  openGraph: {
    title: "Octavio Briguera | Full Stack Developer",
    description:
      "Portfolio profesional de Octavio Briguera, estudiante de ingeniería y desarrollador full stack.",
    url: "https://obriguera.com",
    siteName: "OBriguera",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml', // Esto ayuda a Chrome a procesarlo correctamente
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1a1c1a]"> 
        {/* Renderizamos el Header arriba de todo */}
        <Header />
        {/* Envolvemos el children en un main que ocupa el resto del espacio */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}