import Navbar from '../../components/Navbar';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import FloatingWA from '../../components/FloatingWA';
import Link from 'next/link';
import { NICHES } from '../../data/niches';

export const metadata = {
  title: 'Layanan Kami | Zal Digital Production',
  description: 'Layanan pembuatan website spesifik untuk Barbershop, Cafe & Resto, dan Klinik medis dengan fitur lengkap dan SEO lokal.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#1e1e1e', color: '#fff' }}>
      <Navbar />
      <main className="pt-20">
        <Services />
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Spesifik Kami</h2>
            <p className="text-gray-400">Pilih industri Anda untuk melihat detail fitur yang akan Anda dapatkan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NICHES.filter(n => n.id !== 'semua').map((niche) => (
              <Link href={`/services/${niche.id}`} key={niche.id} className="block group">
                <div 
                  className="rounded-2xl p-8 border border-gray-800 transition-all duration-300 group-hover:-translate-y-2"
                  style={{ background: niche.cardBg }}
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ color: niche.accent }}>
                    Website {niche.label}
                  </h3>
                  <p className="text-gray-300 mb-6">{niche.card1Desc}</p>
                  <div className="flex items-center text-sm font-semibold" style={{ color: niche.accent }}>
                    <span>Lihat Detail Layanan</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
