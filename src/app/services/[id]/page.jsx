import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingWA from '../../../components/FloatingWA';
import { getNicheById, NICHES } from '../../../data/niches';
import Link from 'next/link';

export async function generateStaticParams() {
  return NICHES.filter(n => n.id !== 'semua').map((niche) => ({
    id: niche.id,
  }));
}

export async function generateMetadata({ params }) {
  const niche = getNicheById(params.id);
  return {
    title: `Jasa Pembuatan Website ${niche.label} Profesional | Zal Digital Production`,
    description: `Tingkatkan omset dan pelanggan ${niche.label} Anda dengan website profesional, sistem booking, dan SEO lokal terbaik. Konsultasi gratis sekarang!`,
  };
}

export default function NicheServicePage({ params }) {
  const niche = getNicheById(params.id);

  if (!niche || niche.id === 'semua') {
    return <div>Pilih layanan yang spesifik.</div>;
  }

  return (
    <div className="min-h-screen" style={{ background: '#1e1e1e', color: '#fff' }}>
      <Navbar />
      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div 
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6"
            style={{ background: niche.glow, color: niche.accent }}
          >
            Layanan Khusus {niche.label}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Website Khusus <span style={{ color: niche.accent }}>{niche.label}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {niche.card2Desc}
          </p>
          <a 
            href={`https://wa.me/6282245902047?text=Halo%20Zal%20Digital,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20untuk%20${niche.label}%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-bold text-black transition-transform hover:scale-105"
            style={{ background: niche.accent }}
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="rounded-2xl p-8 border border-gray-800" style={{ background: niche.cardBg }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: niche.accent }}>Paket Landing Page</h3>
            <p className="text-gray-300 mb-6">{niche.card1Desc}</p>
          </div>
          <div className="rounded-2xl p-8 border border-gray-800 relative overflow-hidden" style={{ background: niche.cardBg }}>
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold bg-white text-black rounded-bl-lg">TERPOPULER</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: niche.accent }}>Paket Bisnis PRO</h3>
            <p className="text-gray-300 mb-6">{niche.card2Desc}</p>
          </div>
          <div className="rounded-2xl p-8 border border-gray-800" style={{ background: niche.cardBg }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: niche.accent }}>Sistem Manajemen</h3>
            <p className="text-gray-300 mb-6">{niche.card3Desc}</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/portfolio" className="text-gray-400 hover:text-white underline">
            Lihat Portfolio {niche.label} Kami
          </Link>
        </div>
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
