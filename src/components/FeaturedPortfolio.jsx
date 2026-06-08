"use client";
import React from 'react';
import Link from 'next/link';

export default function FeaturedPortfolio() {
  return (
    <section className="py-24 px-6 relative border-t border-[rgba(255,255,255,0.05)]" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
              Bukti Kualitas
            </h2>
            <p className="font-body text-[#888888] text-base md:text-lg max-w-xl">
              Kami tidak sekadar berjanji. Berikut adalah beberapa karya terbaik kami yang telah membantu bisnis lokal bertumbuh.
            </p>
          </div>
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(212,175,55,0.4)] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-heading font-semibold text-sm"
          >
            Lihat Semua Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1 */}
          <div className="group relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[#111]">
            <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
              {/* Placeholder image representation using CSS gradient for premium feel since we don't have actual images right now */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#111] opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#333] font-heading text-4xl font-black tracking-widest">Klinik Gigi</span>
              </div>
            </div>
            <div className="p-8 relative z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent -mt-20 pt-24">
              <div className="text-xs font-heading font-semibold text-[#D4AF37] mb-2 tracking-widest">KLINIK</div>
              <h3 className="font-heading font-bold text-2xl text-white">Smilecare Dental</h3>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[#111] md:mt-12">
            <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#2a2a2a] opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#333] font-heading text-4xl font-black tracking-widest">Barbershop</span>
              </div>
            </div>
            <div className="p-8 relative z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent -mt-20 pt-24">
              <div className="text-xs font-heading font-semibold text-[#D4AF37] mb-2 tracking-widest">BARBERSHOP</div>
              <h3 className="font-heading font-bold text-2xl text-white">Gentleman's Cut</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
