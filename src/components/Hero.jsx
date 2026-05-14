import React, { useEffect, useRef, useState } from 'react';

const WA_LINK = 'https://wa.me/6287836993805';

// Particle system
function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 60 }, () => ({
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

// Count-up hook
function useCountUp(target, duration = 1500, trigger) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const isNumeric = /^\d+/.test(target);
    if (!isNumeric) { setCount(target); return; }
    const numTarget = parseInt(target);
    const step = numTarget / (duration / 16);
    startRef.current = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numTarget));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      else setCount(numTarget);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, target, duration]);

  return count;
}

function StatItem({ value, label, suffix = '' }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const numStr = value.replace(/\D/g, '');
  const numVal = parseInt(numStr) || 0;
  const count = useCountUp(numVal, 1500, visible);

  const displayValue = value.replace(/\d+/, String(count));

  return (
    <div ref={ref} className="flex flex-col items-center px-8 md:px-12">
      <span className="font-heading font-bold text-3xl md:text-4xl text-[#C9A84C]">{displayValue}</span>
      <span className="font-body text-xs md:text-sm text-[#777777] mt-1 text-center">{label}</span>
    </div>
  );
}

export default function Hero() {
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

  const scrollToLayanan = () => {
    document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#1e1e1e' }}
    >
      {/* Particles */}
      <canvas ref={canvasRef} id="particles-canvas" className="absolute inset-0 w-full h-full" />

      {/* Radial glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-24 pb-16">

        {/* Badge */}
        <div
          className="badge-gold mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          ✦ WEB DESIGN SPECIALIST ✦
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-black text-[40px] sm:text-[56px] md:text-[72px] leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <span className="text-white block">Website yang</span>
          <span className="text-[#C9A84C] block">
            Menjual.
            <span className="cursor-blink" />
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-base md:text-lg text-[#BBBBBB] max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Kami bantu bisnis anda tampil profesional, mudah ditemukan, dan siap menerima pelanggan —{' '}
          <span className="text-white">tanpa ribet, tanpa mahal.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          <button
            onClick={scrollToLayanan}
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96B] text-black font-heading font-semibold text-sm px-8 py-4 rounded-[6px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            Lihat Layanan
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-heading font-semibold text-sm px-8 py-4 rounded-[6px] transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami
          </a>
        </div>

        {/* Stats Bar */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center justify-center border border-[rgba(201,168,76,0.2)] rounded-xl bg-[rgba(201,168,76,0.04)] backdrop-blur-sm divide-x divide-[rgba(201,168,76,0.2)]">
            <StatItem value="10+" label="Niche Bisnis" />
            <StatItem value="3 Hari" label="Rata-rata Selesai" />
            <StatItem value="100%" label="Konsultasi Gratis" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-[#777777] text-xs font-body tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
