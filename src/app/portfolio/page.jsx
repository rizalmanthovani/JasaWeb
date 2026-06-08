import Navbar from '../../components/Navbar';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import FloatingWA from '../../components/FloatingWA';

export const metadata = {
  title: 'Portfolio | Zal Digital Production',
  description: 'Lihat karya terbaik kami dalam pembuatan website profesional untuk Barbershop, Cafe, dan Klinik.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen" style={{ background: '#1e1e1e', color: '#fff' }}>
      <Navbar />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
