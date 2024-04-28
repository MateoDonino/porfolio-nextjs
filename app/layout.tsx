import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://porfolio-nextjs-eight.vercel.app/"),

  title: "Portfolio - Mateo Donino",
  authors: {
    name: "chensokheng",
  },

  description:
    "Especializado en el Frontend, utilizando las últimas tecnologías y frameworks disponibles puedo crear sitios y aplicaciones web a medida que se adapten a tus necesidades específicas. Te puedo asesorar en la selección de la mejor tecnología para tu proyecto, analizar los requisitos y planificar el desarrollo. Te invito a que le des un vistazo a mi CV!",
  openGraph: {
    title: "Portfolio - Mateo Donino Vote",
    description:
      "Especializado en el Frontend, utilizando las últimas tecnologías y frameworks disponibles puedo crear sitios y aplicaciones web a medida que se adapten a tus necesidades específicas. Te puedo asesorar en la selección de la mejor tecnología para tu proyecto, analizar los requisitos y planificar el desarrollo. Te invito a que le des un vistazo a mi CV!",
    url: "https://porfolio-nextjs-eight.vercel.app/",
    siteName: "Portfolio - Mateo Donino",
    images: "/web6.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
