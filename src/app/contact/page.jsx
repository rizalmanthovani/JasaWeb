import Navbar from '../../components/Navbar';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import FloatingWA from '../../components/FloatingWA';
import { FAQ_ITEMS } from '../../data/faq';

export const metadata = {
  title: 'Kontak & FAQ | Zal Digital Production',
  description: 'Hubungi Zal Digital Production untuk konsultasi gratis mengenai pembuatan website untuk bisnis Barbershop, Cafe, atau Klinik Anda.',
};

export default function ContactPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen" style={{ background: '#1e1e1e', color: '#fff' }}>
        <Navbar />
        <main className="pt-20">
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingWA />
      </div>
    </>
  );
}
