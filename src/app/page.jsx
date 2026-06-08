import Navbar from '../components/Navbar';
import HeroHub from '../components/HeroHub';
import TrustBanner from '../components/TrustBanner';
import NicheBento from '../components/NicheBento';
import FeaturedPortfolio from '../components/FeaturedPortfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWA from '../components/FloatingWA';

export const metadata = {
  title: 'Zal Digital Production | Transformasi Digital Kelas Atas',
  description: 'Premium Web Agency spesialis Barbershop, Cafe, dan Klinik.',
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zal Digital Production",
    "image": "https://zaldigitalproduction.my.id/logo.jpg",
    "description": "Premium Web Agency spesialis Barbershop, Cafe, dan Klinik.",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "url": "https://zaldigitalproduction.my.id"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className="min-h-screen" style={{ background: '#0a0a0a', color: '#fff' }}>
        <Navbar />
        <main>
          <HeroHub />
          <TrustBanner />
          <NicheBento />
          <FeaturedPortfolio />
          <Contact />
        </main>
        <Footer />
        <FloatingWA />
      </div>
    </>
  );
}
