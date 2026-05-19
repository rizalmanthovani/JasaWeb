"use client";
import React, { useRef, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolio';

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

function PortfolioCard({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, index * 80);
        obs.unobserve(e.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className="block group relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)] hover:border-[rgba(201,168,76,0.4)] transition-all duration-500 cursor-pointer"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Visual area */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${item.accentColor}15 0%, #0a0a0a 50%, ${item.accentColor}08 100%)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${item.accentColor}40 1px, transparent 1px), linear-gradient(90deg, ${item.accentColor}40 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Live Website Screenshot */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={item.image} 
            alt={`Screenshot of ${item.title}`}
            className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
          />
          {/* Subtle gradient overlay to ensure text/icons remain readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[rgba(10,10,10,0.5)]" />
        </div>

        {/* Icon */}
        <div className="absolute top-4 left-4 text-2xl">{item.icon}</div>

        {/* Time badge */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-heading font-semibold"
          style={{ background: `${item.accentColor}20`, color: item.accentColor, border: `1px solid ${item.accentColor}40` }}
        >
          ⚡ {item.stats}
        </div>

        {/* Hover overlay */}
        <div className="portfolio-overlay absolute inset-0 flex items-center justify-center bg-black/70">
          <div
            className="px-5 py-2 text-black font-heading font-semibold text-sm rounded-[6px] transition-all duration-300"
            style={{ background: item.accentColor }}
          >
            Lihat Demo
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 bg-[#141414]">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading font-bold text-base text-white">{item.title}</h3>
          <span
            className="flex-shrink-0 text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full ml-2"
            style={{
              background: `${item.accentColor}15`,
              color: item.accentColor,
              border: `1px solid ${item.accentColor}30`,
            }}
          >
            {item.niche}
          </span>
        </div>
        <p className="font-body text-xs text-[#777777] mb-3">{item.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-body px-2 py-0.5 rounded border"
              style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#BBBBBB' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const headerRef = useReveal();

  return (
    <section id="portofolio" className="section-padding" style={{ background: '#2a2a2a' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="badge-gold mb-4 inline-block">PORTOFOLIO</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Website yang <span className="text-[#C9A84C]">Sudah Kami Buat</span>
          </h2>
          <p className="font-body text-[#BBBBBB] text-base max-w-lg mx-auto">
            Setiap proyek dikerjakan dengan dedikasi penuh dan hasil yang terukur
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-[#BBBBBB] text-sm mb-4">
            Ingin website seperti ini untuk bisnis kamu?
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96B] text-black font-heading font-semibold text-sm px-8 py-3 rounded-[6px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            Konsultasi Gratis Sekarang →
          </a>
        </div>
      </div>
    </section>
  );
}
