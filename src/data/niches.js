// Zal Digital Production — Data Niche & Pricing
export const NICHES = [
  {
    id: 'semua',
    label: 'Semua',
    accent: '#C9A84C',
    glow: 'rgba(201,168,76,0.25)',
    cardBg: '#1e1408',
    card1Desc: 'Cocok untuk bisnis yang baru ingin hadir di internet dengan tampilan profesional.',
    card2Desc: 'Website lengkap dengan fitur booking, menu/layanan, galeri, dan SEO lokal untuk meningkatkan pelanggan.',
    card3Desc: 'Butuh fitur khusus? Integrasi sistem, multi-halaman, atau desain unik sesuai brand kamu.',
  },
  {
    id: 'barbershop',
    label: 'Barbershop',
    accent: '#C9A84C',
    glow: 'rgba(201,168,76,0.25)',
    cardBg: '#1e1408',
    card1Desc: 'Landing page barbershop dengan info layanan, harga, dan tombol booking WA langsung.',
    card2Desc: 'Website barbershop profesional dengan galeri hasil kerja, jadwal tersedia, dan sistem reservasi online.',
    card3Desc: 'Sistem manajemen booking barbershop dengan admin dashboard, notifikasi, dan laporan harian.',
  },
  {
    id: 'cafe',
    label: 'Cafe & Resto',
    accent: '#C97B3E',
    glow: 'rgba(201,123,62,0.25)',
    cardBg: '#1e1008',
    card1Desc: 'Landing page cafe dengan menu, lokasi, jam buka, dan link order via WA atau GoFood.',
    card2Desc: 'Website cafe lengkap dengan menu digital interaktif, galeri suasana, reservasi meja, dan Google Maps.',
    card3Desc: 'Platform pemesanan online custom dengan integrasi delivery, sistem kasir, dan loyalty program.',
  },
  {
    id: 'klinik',
    label: 'Klinik',
    accent: '#3EC97B',
    glow: 'rgba(62,201,123,0.25)',
    cardBg: '#08180f',
    card1Desc: 'Landing page klinik dengan profil dokter, jadwal praktik, dan booking konsultasi via WA.',
    card2Desc: 'Website klinik profesional dengan profil tim dokter, layanan medis, jadwal, dan sistem pendaftaran online.',
    card3Desc: 'Platform klinik lengkap dengan rekam medis digital, sistem antrean, reminder jadwal, dan telemedicine.',
  }
];

export const getNicheById = (id) => NICHES.find(n => n.id === id) || NICHES[0];
