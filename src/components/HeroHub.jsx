"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const WA_LINK = 'https://wa.me/6287836993805';

function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  let raf;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    raf = requestAnimationFrame(draw);
  }
  draw();
  return () => cancelAnimationFrame(raf);
}

export default function HeroHub() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initParticles(canvasRef.current);
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => { cleanup(); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden" style={{ background: '#0a0a0a' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      
      {/* Premium Glass Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.05)] backdrop-blur-md mb-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-heading font-semibold tracking-widest text-[#D4AF37] uppercase">Spesialis Website Bisnis Lokal</span>
        </div>

        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <span className="text-white block">Website Profesional</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] block">
            yang Menghasilkan.
          </span>
        </h1>

        <p className="font-body text-base md:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          Kami membantu Barbershop, Cafe, dan Klinik memiliki website modern yang rapi, cepat, dan siap mendatangkan pelanggan baru.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black font-heading font-bold text-sm md:text-base px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Mulai Konsultasi Gratis</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-3 border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md text-white font-heading font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(212,175,55,0.5)]"
          >
            Lihat Karya Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
