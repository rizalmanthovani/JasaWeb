import React, { useRef, useEffect, useState } from 'react';

const STEPS = [
  {
    num: '01',
    phase: 'DISCOVERY',
    title: 'Konsultasi Gratis',
    duration: '± 15–30 menit',
    desc: 'Ceritakan bisnis kamu — target pelanggan, kompetitor, dan tujuan website. Kami bantu analisis dan rekomendasikan solusi terbaik.',
    points: [
      'Diskusi via WhatsApp / video call',
      'Analisis kebutuhan & kompetitor',
      'Rekomendasi paket yang tepat',
      'Estimasi waktu & biaya transparan',
    ],
    result: 'Proposal & Brief Resmi',
    resultIcon: '📋',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '02',
    phase: 'DESIGN',
    title: 'Brief & Pengerjaan',
    duration: '± 2–5 hari kerja',
    desc: 'Kami kumpulkan semua aset — logo, foto, teks. Tim desainer mulai bangun tampilan website sesuai identitas dan karakter bisnis kamu.',
    points: [
      'Pengumpulan konten & aset brand',
      'Desain UI/UX & mockup awal',
      'Development & coding penuh',
      'Testing di berbagai perangkat',
    ],
    result: 'Draft Website Pertama',
    resultIcon: '🎨',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    phase: 'REVISION',
    title: 'Review & Revisi',
    duration: '± 1–2 hari kerja',
    desc: 'Kamu lihat hasilnya dan beri feedback secara langsung. Kami lakukan revisi sampai tampilan dan konten benar-benar sesuai ekspektasi.',
    points: [
      'Presentasi hasil via link preview',
      'Feedback langsung via WhatsApp',
      'Revisi desain & konten sesuai masukan',
      'Final approval sebelum launch',
    ],
    result: 'Website Siap Launch',
    resultIcon: '✅',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    num: '04',
    phase: 'LAUNCH',
    title: 'Launch & Support',
    duration: 'Seumur Hosting',
    desc: 'Website resmi live di domain kamu dengan SSL aktif. Kami setup semua konfigurasi teknis dan standby 30 hari untuk support penuh.',
    points: [
      'Upload & konfigurasi ke server',
      'Aktivasi SSL & domain resmi',
      'Panduan kelola website sendiri',
      'Support aktif 30 hari post-launch',
    ],
    result: 'Website Live + Panduan',
    resultIcon: '🚀',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const TRUST_BADGES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Respon < 1 Jam',
    sub: 'Jam kerja 08.00–21.00',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Garansi 30 Hari',
    sub: 'Bug fix gratis post-launch',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: 'Harga Transparan',
    sub: 'Tidak ada biaya tersembunyi',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    label: 'Konsultasi Gratis',
    sub: 'Tanpa komitmen apapun',
  },
];

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, delay);
        obs.unobserve(e.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function StepCard({ step, index }) {
  const ref = useReveal(index * 120);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <div
        className="relative rounded-xl border overflow-hidden h-full transition-all duration-400"
        style={{
          background: hovered ? 'rgba(201,168,76,0.06)' : '#1a1a1a',
          borderColor: hovered ? '#C9A84C' : 'rgba(255,255,255,0.08)',
          boxShadow: hovered ? '0 0 30px rgba(201,168,76,0.12)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Big decorative number */}
        <div
          className="absolute -top-4 -right-2 font-heading font-black text-8xl leading-none select-none pointer-events-none transition-opacity duration-300"
          style={{ color: hovered ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)' }}
        >
          {step.num}
        </div>

        <div className="relative z-10 p-6">
          {/* Top: Phase tag + Duration */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="text-[10px] font-heading font-bold tracking-[0.18em] px-3 py-1 rounded-full"
              style={{
                background: 'rgba(201,168,76,0.12)',
                color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              {step.phase}
            </span>
            <span className="text-[11px] font-body text-[#555555] flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {step.duration}
            </span>
          </div>

          {/* Icon + Step Number */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                background: hovered ? 'rgba(201,168,76,0.2)' : 'rgba(201,168,76,0.08)',
                color: '#C9A84C',
                border: '1.5px solid rgba(201,168,76,0.3)',
              }}
            >
              {step.icon}
            </div>
            <div>
              <div className="font-heading font-black text-3xl leading-none" style={{ color: 'rgba(201,168,76,0.25)' }}>
                {step.num}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-white text-lg mb-2">{step.title}</h3>

          {/* Desc */}
          <p className="font-body text-sm text-[#777777] leading-relaxed mb-5">{step.desc}</p>

          {/* Divider */}
          <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />

          {/* Points */}
          <ul className="space-y-2.5 mb-5">
            {step.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <div
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
                >
                  <svg className="w-2.5 h-2.5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-body text-xs text-[#999999]">{point}</span>
              </li>
            ))}
          </ul>

          {/* Result tag */}
          <div
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 w-full"
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px dashed rgba(201,168,76,0.3)',
            }}
          >
            <span className="text-sm">{step.resultIcon}</span>
            <div>
              <span className="font-body text-[10px] text-[#555555] block leading-tight">Kamu dapat:</span>
              <span className="font-heading font-semibold text-xs text-[#C9A84C]">{step.result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectorArrow() {
  return (
    <div className="hidden lg:flex flex-shrink-0 flex-col items-center justify-center px-1 pt-24">
      <div className="flex items-center gap-0.5">
        <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
        <div className="h-px w-4" style={{ background: 'linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.3))' }} />
        <svg className="w-4 h-4 text-[#C9A84C] opacity-60 -ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5l8 7-8 7V5z" />
        </svg>
      </div>
    </div>
  );
}

export default function Process() {
  const headerRef = useReveal(0);

  return (
    <section id="proses" className="section-padding" style={{ background: '#1e1e1e' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          className="text-center mb-6"
        >
          <span className="badge-gold mb-4 inline-block">CARA KERJA KAMI</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Dari <span className="text-[#C9A84C]">Konsultasi</span> ke{' '}
            <span className="text-[#C9A84C]">Website Live</span> — Terstruktur
          </h2>
          <p className="font-body text-[#BBBBBB] text-base max-w-lg mx-auto">
            Proses kerja kami transparan di setiap tahap. Kamu tahu persis apa yang terjadi, kapan selesai, dan apa yang kamu dapat.
          </p>
        </div>

        {/* Timeline pills (desktop) */}
        <div className="hidden md:flex items-center justify-center gap-0 mb-14">
          {STEPS.map((step, i) => (
            <React.Fragment key={i}>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-heading font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(201,168,76,0.06)',
                  borderColor: 'rgba(201,168,76,0.2)',
                  color: '#C9A84C',
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: '#C9A84C', color: '#000' }}
                >
                  {i + 1}
                </span>
                {step.title}
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-8 h-px mx-1" style={{ background: 'rgba(201,168,76,0.3)' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Mobile connector note */}
        <div className="sm:hidden text-center mb-10 -mt-4">
          <span className="text-xs font-body text-[#555555]">↕ Scroll untuk lihat semua tahap</span>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {TRUST_BADGES.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(201,168,76,0.25)] transition-all duration-300"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
              >
                {badge.icon}
              </div>
              <div>
                <div className="font-heading font-semibold text-white text-xs">{badge.label}</div>
                <div className="font-body text-[10px] text-[#555555] leading-tight mt-0.5">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[rgba(201,168,76,0.3)] rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[rgba(201,168,76,0.3)] rounded-br-2xl" />

          <div className="relative z-10">
            <div className="text-2xl mb-3">🤝</div>
            <p className="font-heading font-bold text-white text-xl md:text-2xl mb-2">
              Siap mulai proses bersama kami?
            </p>
            <p className="font-body text-[#777777] text-sm max-w-md mx-auto mb-6">
              Langkah pertama hanya 15 menit — konsultasi gratis via WhatsApp. Tanpa biaya, tanpa komitmen, tanpa tekanan.
            </p>
            <a
              href="https://wa.me/6287836993805"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-heading font-semibold text-sm px-8 py-3.5 rounded-[6px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(201,168,76,0.35)] text-black"
              style={{ background: '#C9A84C' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Mulai Konsultasi Gratis — Gratis!
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
