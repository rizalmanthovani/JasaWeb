"use client";
import React from 'react';

export default function TrustBanner() {
  return (
    <div className="py-12 border-y border-[rgba(255,255,255,0.05)] relative overflow-hidden" style={{ background: '#080808' }}>
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, #D4AF37 0%, transparent 70%)' }} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-[rgba(255,255,255,0.05)] text-center">
          
          <div className="flex flex-col items-center">
            <span className="font-heading font-black text-3xl md:text-5xl text-white mb-2">10+</span>
            <span className="font-body text-xs md:text-sm text-[#888888] uppercase tracking-wider">Tahun Pengalaman</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-heading font-black text-3xl md:text-5xl text-white mb-2">50+</span>
            <span className="font-body text-xs md:text-sm text-[#888888] uppercase tracking-wider">Klien B2B Sukses</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-heading font-black text-3xl md:text-5xl text-white mb-2">3 Hari</span>
            <span className="font-body text-xs md:text-sm text-[#888888] uppercase tracking-wider">Rata-Rata Selesai</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-heading font-black text-3xl md:text-5xl text-white mb-2">100%</span>
            <span className="font-body text-xs md:text-sm text-[#888888] uppercase tracking-wider">Garansi Kepuasan</span>
          </div>

        </div>
      </div>
    </div>
  );
}
