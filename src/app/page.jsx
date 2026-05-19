import Navbar from '../components/Navbar';
import { FAQ_ITEMS } from '../data/faq';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWA from '../components/FloatingWA';

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zal Digital Production",
    "image": "https://zaldigitalproduction.my.id/logo.jpg",
    "description": "Jasa pembuatan website profesional untuk UMKM, barbershop, cafe, dan bisnis lokal.",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "url": "https://zaldigitalproduction.my.id"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen" style={{ background: '#1e1e1e', color: '#fff' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingWA />
      </div>
    </>
  );
}
