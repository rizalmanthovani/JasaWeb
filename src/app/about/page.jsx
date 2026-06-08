import Navbar from '../../components/Navbar';
import About from '../../components/About';
import Process from '../../components/Process';
import Footer from '../../components/Footer';
import FloatingWA from '../../components/FloatingWA';

export const metadata = {
  title: 'Tentang Kami | Zal Digital Production',
  description: 'Kenali Zal Digital Production lebih dekat. Kami adalah agensi pembuat website profesional dengan pengalaman 10 tahun untuk Barbershop, Cafe, dan Klinik.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: '#1e1e1e', color: '#fff' }}>
      <Navbar />
      <main className="pt-20">
        <About />
        <Process />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
