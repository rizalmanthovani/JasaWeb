import React, { useState, useRef, useEffect } from 'react';
import { NICHES } from '../data/niches';

const WA_LINK = 'https://wa.me/6287836993805';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    const el = ref.current;
    if (el) { el.classList.add('reveal'); obs.observe(el); }
    return () => obs.disconnect();
  }, []);
  return ref;
}

function PricingCard({ type, niche }) {
  const accent = niche.accent;
  const glow = niche.glow;
  const cardBg = niche.cardBg;

  if (type === 'starter') {
    return (
      <div className="relative rounded-[10px] overflow-hidden border border-[rgba(255,255,255,0.15)] bg-[#141414] flex flex-col transition-all duration-300 hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#C9A84C' }} />

        <div className="p-8 flex flex-col flex-1">
          <div className="mb-6">
            <div className="font-heading text-xs font-semibold tracking-[0.2em] text-[#AAAAAA] mb-3">STARTER</div>
            <div className="font-heading font-bold text-4xl text-white mb-1">Rp500.000</div>
            <div className="text-xs text-[#777777] font-body">Pembayaran sekali</div>
          </div>

          <div className="gold-divider" style={{ margin: '0 0 20px 0' }} />

          <p className="font-body text-sm text-[#BBBBBB] leading-relaxed mb-6">{niche.card1Desc}</p>

          {/* Features */}
          <ul className="space-y-3 mb-8 flex-1">
            {[
              'Landing Page 1 Halaman',
              'WA Booking Button',
              'Galeri Foto',
              'Info Layanan & Harga',
              'Mobile Responsive',
              'Revisi 2X Minor',
              'SSL Certificate',
              'Hosting 1 Tahun',
              'Support 30 Hari'
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#C9A84C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-sm text-[#BBBBBB]">{f}</span>
              </li>
            ))}
          </ul>

          {/* Bottom tag */}
          <div className="mt-auto">
            <div className="flex items-center gap-1.5 text-[#777777] text-xs font-body mb-4">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Include hosting
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-heading font-semibold text-sm py-3 rounded-[6px] transition-all duration-300"
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'pro') {
    return (
      <div
        className="relative rounded-[10px] overflow-hidden flex flex-col scale-[1.03] z-10 shadow-2xl"
        style={{
          background: cardBg,
          border: `1.5px solid ${accent}`,
          boxShadow: `0 0 20px ${glow}, 0 20px 60px rgba(0,0,0,0.4)`,
        }}
      >
        {/* POPULER badge */}
        <div
          className="absolute top-0 left-0 right-0 text-center py-2 font-heading font-bold text-xs tracking-[0.15em] text-black"
          style={{ background: accent }}
        >
          ★ PALING POPULER
        </div>

        <div className="p-8 pt-12 flex flex-col flex-1">
          <div className="mb-6">
            <div
              className="font-heading text-xs font-semibold tracking-[0.2em] mb-3"
              style={{ color: accent }}
            >
              PRO
            </div>
            <div
              className="font-heading font-bold text-4xl mb-1"
              style={{ color: accent }}
            >
              Rp1.200.000
            </div>
            <div className="text-xs text-[#777777] font-body">Pembayaran sekali</div>
          </div>

          <hr className="border-0 h-px mb-5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

          <p className="font-body text-sm text-[#BBBBBB] leading-relaxed mb-6">{niche.card2Desc}</p>

          <ul className="space-y-3 mb-8 flex-1">
            {[
              'Semua fitur Starter',
              'Multi-Section Website (5–8 hal)',
              'Animasi & Interaksi Premium',
              'SEO On-Page Optimization',
              'Form Kontak + Auto Reply WA',
              'Revisi 1X Major & 5X Minor',
              'Loading Speed Optimization',
              'Support 30 Hari',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-sm text-[#BBBBBB]">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="flex items-center gap-1.5 text-[#777777] text-xs font-body mb-4">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Include domain & hosting
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center font-heading font-semibold text-sm py-3 rounded-[6px] transition-all duration-300 hover:brightness-110 text-black"
              style={{ background: accent }}
            >
              Pilih Paket Pro
            </a>
          </div>
        </div>
      </div>
    );
  }

  // CUSTOM
  return (
    <div className="relative rounded-[10px] overflow-hidden border border-[rgba(255,255,255,0.15)] bg-[#141414] flex flex-col transition-all duration-300 hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #777, #aaa, #777)' }} />

      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6">
          <div className="font-heading text-xs font-semibold tracking-[0.2em] text-[#AAAAAA] mb-3">CUSTOM WEB</div>
          <div className="flex items-center gap-3 mb-1">
            <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-heading font-bold text-2xl text-white">Chat WA Admin</span>
          </div>
          <div className="text-xs text-[#777777] font-body">Sesuaikan kebutuhan</div>
        </div>

        <hr className="border-0 h-px mb-5" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />

        <p className="font-body text-sm text-[#BBBBBB] leading-relaxed mb-6">{niche.card3Desc}</p>

        <ul className="space-y-3 mb-8 flex-1">
          {[
            'Custom desain sesuai brand',
            'Fitur & integrasi khusus',
            'Multi-bahasa (opsional)',
            'Admin dashboard (opsional)',
            'Sistem booking / payment',
            'Maintenance & update berkala',
            'Konsultasi & brief intensif',
            'Estimasi harga transparan',
          ].map((f, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <svg className="w-4 h-4 flex-shrink-0 text-[#AAAAAA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-body text-sm text-[#BBBBBB]">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex items-center gap-1.5 text-[#777777] text-xs font-body mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Sesuaikan kebutuhan
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center bg-[#25D366] hover:bg-[#20BD5A] text-black font-heading font-semibold text-sm py-3 rounded-[6px] transition-all duration-300"
          >
            Diskusi Kebutuhan
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeNiche, setActiveNiche] = useState('semua');
  const headerRef = useReveal();
  const cardsRef = useRef(null);

  const currentNiche = NICHES.find(n => n.id === activeNiche) || NICHES[0];

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.style.opacity = '0';
      cardsRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (cardsRef.current) {
          cardsRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          cardsRef.current.style.opacity = '1';
          cardsRef.current.style.transform = 'translateY(0)';
        }
      }, 50);
    }
  }, [activeNiche]);

  return (
    <section id="layanan" className="section-padding" style={{ background: '#1e1e1e' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="badge-gold mb-4 inline-block">LAYANAN KAMI</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Pilih Paket yang <span className="text-[#C9A84C]">Tepat</span>
          </h2>
          <p className="font-body text-[#BBBBBB] text-base max-w-lg mx-auto">
            Semua paket include <span className="text-white font-medium">konsultasi gratis</span> sebelum pengerjaan dimulai
          </p>
        </div>

        {/* Niche Filter */}
        <div className="mb-12 overflow-x-auto niche-scroll">
          <div className="flex gap-3 pb-2 min-w-max mx-auto justify-start md:justify-center px-1">
            {NICHES.map((niche) => (
              <button
                key={niche.id}
                onClick={() => setActiveNiche(niche.id)}
                className="flex-shrink-0 px-5 py-2 rounded-full font-heading font-semibold text-xs tracking-wider transition-all duration-300"
                style={
                  activeNiche === niche.id
                    ? { background: niche.accent, color: '#000', border: `1px solid ${niche.accent}` }
                    : { background: 'transparent', color: niche.accent, border: `1px solid ${niche.accent}` }
                }
              >
                {niche.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center"
        >
          <PricingCard type="starter" niche={currentNiche} />
          <PricingCard type="pro" niche={currentNiche} />
          <PricingCard type="custom" niche={currentNiche} />
        </div>

        {/* Guarantee note */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm text-[#777777]">
            🛡️ Semua paket dilindungi{' '}
            <span className="text-[#BBBBBB] font-medium">garansi bug fix 30 hari</span> setelah website live
          </p>
        </div>
      </div>
    </section>
  );
}
