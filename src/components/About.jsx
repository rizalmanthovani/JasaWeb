import React, { useRef, useEffect } from 'react';

function useReveal(className = 'reveal') {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.15 });
    const el = ref.current;
    if (el) { el.classList.add(className); obs.observe(el); }
    return () => obs.disconnect();
  }, [className]);
  return ref;
}

const CHECK_ITEMS = [
  'Pengerjaan cepat, 3–7 hari kerja',
  'Harga transparan, tidak ada biaya tersembunyi',
  'Support aktif setelah website live',
];

export default function About() {
  const leftRef = useReveal('reveal-left');
  const rightRef = useReveal('reveal-right');

  return (
    <section id="tentang" className="section-padding" style={{ background: '#2a2a2a' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Logo Mark */}
          <div ref={leftRef} className="flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer glow rings */}
              <div className="absolute w-64 h-64 rounded-full border border-[rgba(201,168,76,0.08)] animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-52 h-52 rounded-full border border-[rgba(201,168,76,0.12)] animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute w-40 h-40 rounded-full bg-[rgba(201,168,76,0.05)] blur-2xl" />

              {/* Z Logo Mark */}
              <div className="relative z-10 flex items-center justify-center">
                <img 
                  src="/logo.jpg" 
                  alt="Zal Digital Logo" 
                  className="w-44 h-44 object-cover rounded-full drop-shadow-[0_0_40px_rgba(201,168,76,0.4)] border-2 border-[rgba(201,168,76,0.2)]" 
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div ref={rightRef} className="space-y-6">
            <span className="badge-gold">TENTANG KAMI</span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight">
              Kami bukan sekadar{' '}
              <span className="text-[#C9A84C]">bikin website.</span>
            </h2>

            <p className="font-body text-[#BBBBBB] text-base leading-relaxed">
              Zal Digital Production lahir dari satu keyakinan — bahwa setiap bisnis lokal berhak tampil profesional
              di internet, tanpa harus keluar biaya yang tidak masuk akal.
            </p>

            <p className="font-body text-[#BBBBBB] text-base leading-relaxed">
              Kami fokus pada satu hal: membuat website yang benar-benar{' '}
              <span className="text-white font-medium">bekerja untuk bisnis kamu</span> — bukan sekadar ada, tapi
              bisa menarik pelanggan, membangun kepercayaan, dan menghasilkan.
            </p>

            {/* Gold Divider */}
            <div className="gold-divider" style={{ width: '100%' }} />

            {/* Value Props */}
            <div className="space-y-4">
              {CHECK_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.4)] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-body text-[#BBBBBB] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
