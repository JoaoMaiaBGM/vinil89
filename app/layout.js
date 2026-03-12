import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://vinil89.vercel.app"),
  title: { default: "Vinil89", template: "%s | Vinil89" },
  description: "Banda de pop/rock de Recife",
  openGraph: {
    title: "Vinil89",
    description: "Banda de pop/rock de Recife",
    url: "https://vinil89.vercel.app",
    images: [
      {
        url: "https://vinil89.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
