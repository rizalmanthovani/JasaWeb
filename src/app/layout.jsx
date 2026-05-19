import './globals.css';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-montserrat',
  weight: ['300', '400', '600', '700', '800']
});

export const metadata = {
  metadataBase: new URL('https://zaldigitalproduction.my.id'),
  title: 'Zal Digital Production — Jasa Website Profesional untuk UMKM Indonesia',
  description: 'Zal Digital Production: Jasa pembuatan website profesional untuk barbershop, cafe, salon, UMKM & bisnis lokal Indonesia. Harga terjangkau, pengerjaan cepat 3-7 hari, support aktif.',
  keywords: ['jasa website', 'web design Indonesia', 'website UMKM', 'website barbershop', 'website cafe', 'Zal Digital Production'],
  alternates: {
    canonical: 'https://zaldigitalproduction.my.id',
  },
  icons: {
    icon: '/logo.jpg',
  },
  openGraph: {
    title: 'Zal Digital Production — Website yang Menjual',
    description: 'Bantu bisnis lokal Indonesia tampil profesional di internet. Mulai dari Rp500.000.',
    url: 'https://zaldigitalproduction.my.id',
    siteName: 'Zal Digital Production',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Zal Digital Production Logo'
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zal Digital Production',
    description: 'Bantu bisnis lokal Indonesia tampil profesional di internet.',
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
