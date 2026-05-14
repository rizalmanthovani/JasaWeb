import React, { useRef, useEffect } from 'react';

const WA_LINK = 'https://wa.me/6287836993805';
const WA_MESSAGE = encodeURIComponent('Halo Zal Digital Production! Saya tertarik untuk konsultasi pembuatan website bisnis saya. Bisa bantu?');

export default function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    const el = ref.current;
    if (el) { el.classList.add('reveal'); obs.observe(el); }
    return () => obs.disconnect();
  }, []);

  return (
    <section id="kontak" className="section-padding relative overflow-hidden" style={{ background: '#2a2a2a' }}>
      {/* Gold glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-[rgba(201,168,76,0.15)]" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-[rgba(201,168,76,0.15)]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <span className="badge-gold mb-6 inline-block">KONTAK</span>

        <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
          Siap Buat Website<br/>
          <span className="text-[#C9A84C]">Bisnis Kamu?</span>
        </h2>

        <p className="font-body text-[#BBBBBB] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Konsultasi <span className="text-white font-medium">100% gratis</span>. Ceritakan bisnis kamu dan kami bantu tentukan website terbaik yang sesuai kebutuhan dan budget.
        </p>

        {/* Main CTA */}
        <a
          href={`${WA_LINK}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-heading font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] mb-4"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat WhatsApp Sekarang
        </a>

        <p className="font-body text-[#777777] text-sm block mb-12">
          +62 878-3699-3805 · Balas dalam &lt;1 jam
        </p>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {[
            { val: '10+', label: 'Niche Dilayani' },
            { val: '3 Hari', label: 'Rata-rata Selesai' },
            { val: '100%', label: 'Konsultasi Gratis' },
            { val: '30 Hari', label: 'Garansi Support' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-bold text-2xl text-[#C9A84C]">{s.val}</div>
              <div className="font-body text-xs text-[#777777]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
