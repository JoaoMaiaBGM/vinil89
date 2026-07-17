import { Montserrat, Oswald, Roboto } from 'next/font/google';
import '@/styles/tailwind-base.css';
import '@/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Vinil89', template: '%s | Vinil89' },
  description:
    'Banda de pop/rock de Recife com repertório clássico, shows ao vivo e novidades da Vinil89.',
  openGraph: {
    title: 'Vinil89 | Banda de pop/rock de Recife',
    description:
      'Banda de pop/rock de Recife com repertório clássico, shows ao vivo e novidades da Vinil89.',
    url: siteUrl,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${oswald.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
