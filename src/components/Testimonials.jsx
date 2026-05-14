import React, { useRef, useEffect } from 'react';
import { TESTIMONIALS } from '../data/testimonials';

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

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-[#C9A84C]' : 'text-[#444]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, index * 100);
        obs.unobserve(e.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="relative p-6 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#1e1e1e] hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_0_30px_rgba(201,168,76,0.08)] transition-all duration-400 flex flex-col"
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s' }}
    >
      {/* Quote icon */}
      <div className="absolute top-5 right-5 text-[#C9A84C] opacity-20 text-5xl font-heading leading-none select-none">"</div>

      {/* Stars */}
      <StarRating rating={item.rating} />

      {/* Text */}
      <p className="font-body text-sm text-[#BBBBBB] leading-relaxed mt-4 mb-6 flex-1">
        "{item.text}"
      </p>

      {/* Divider */}
      <div className="gold-divider mb-4" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
          style={{ background: item.avatarBg, color: item.avatarColor, border: `1.5px solid ${item.avatarColor}40` }}
        >
          {item.avatar}
        </div>
        <div>
          <div className="font-heading font-semibold text-white text-sm">{item.name}</div>
          <div className="font-body text-xs text-[#777777]">
            {item.role} — {item.business}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useReveal();

  return (
    <section id="testimoni" className="section-padding" style={{ background: '#2a2a2a' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="badge-gold mb-4 inline-block">TESTIMONI</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Kata Mereka yang <span className="text-[#C9A84C]">Sudah Percaya</span>
          </h2>
          <p className="font-body text-[#BBBBBB] text-base max-w-lg mx-auto">
            Lebih dari sekadar kata-kata — ini adalah hasil nyata dari bisnis yang kami bantu
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div>
            <span className="font-heading font-bold text-white text-xl">5.0</span>
            <span className="font-body text-[#777777] text-sm ml-2">dari semua klien</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
