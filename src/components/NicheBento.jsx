"use client";
import React from 'react';
import Link from 'next/link';

const niches = [
  {
    id: 'barbershop',
    title: 'Barbershop',
    desc: 'Sistem booking cerdas & galeri potongan rambut elegan.',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    accent: '#D4AF37',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4h6m-6 3h6m-6 3h6M6 7l2 1m-2-1l2-1m-2 1v2.5M6 4h6m-6 3h6m-6 3h6" />
      </svg>
    ) // abstract icon representing scissors/comb
  },
  {
    id: 'cafe',
    title: 'Cafe & Resto',
    desc: 'Menu digital interaktif & reservasi meja yang memikat pelanggan.',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    accent: '#C97B3E',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 8h-3V4H3v13a4 4 0 004 4h4a4 4 0 004-4v-4h5a2 2 0 002-2V10a2 2 0 00-2-2zM15 17a2 2 0 01-2 2H7a2 2 0 01-2-2V6h10v11zm5-5h-3V10h3v2z" />
      </svg>
    ) // abstract icon representing coffee cup
  },
  {
    id: 'klinik',
    title: 'Klinik Medis',
    desc: 'Platform jadwal dokter profesional yang membangun kepercayaan pasien.',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    accent: '#3EC97B',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ) // abstract icon representing health/heart
  }
];

export default function NicheBento() {
  return (
    <section className="py-24 px-6 relative" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
            Spesialisasi Kami
          </h2>
          <p className="font-body text-[#888888] text-base md:text-lg max-w-2xl mx-auto">
            Kami tidak melayani semua industri. Kami fokus menjadi yang terbaik untuk 3 sektor ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 auto-rows-fr">
          {niches.map((niche) => (
            <Link
              href={`/services/${niche.id}`}
              key={niche.id}
              className={`group relative overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.3)] ${niche.colSpan} ${niche.rowSpan} flex flex-col justify-end min-h-[250px]`}
            >
              {/* Glow Effect */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ background: niche.accent }}
              />

              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500"
                  style={{ color: niche.accent }}
                >
                  {niche.icon}
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {niche.title}
                </h3>
                <p className="font-body text-[#999999] text-sm md:text-base mb-6 leading-relaxed">
                  {niche.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-widest" style={{ color: niche.accent }}>
                  <span>Pelajari Solusinya</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
