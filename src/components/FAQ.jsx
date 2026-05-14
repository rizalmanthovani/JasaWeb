import React, { useState, useRef, useEffect } from 'react';
import { FAQ_ITEMS } from '../data/faq';

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

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <div
      className="border border-[rgba(201,168,76,0.15)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.3)]"
      style={{ background: isOpen ? 'rgba(201,168,76,0.04)' : '#1e1e1e' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <span
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-heading font-bold text-xs mt-0.5 transition-all duration-300"
            style={{
              background: isOpen ? '#C9A84C' : 'rgba(201,168,76,0.1)',
              color: isOpen ? '#000' : '#C9A84C',
              border: '1px solid rgba(201,168,76,0.4)',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-heading font-semibold text-base transition-colors duration-300 ${isOpen ? 'text-[#C9A84C]' : 'text-white'}`}>
            {item.question}
          </span>
        </div>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300"
          style={{
            borderColor: isOpen ? '#C9A84C' : 'rgba(201,168,76,0.3)',
            background: isOpen ? '#C9A84C' : 'transparent',
          }}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            style={{ color: isOpen ? '#000' : '#C9A84C' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`faq-content ${isOpen ? 'open' : ''}`}>
        <div className="px-6 pb-5 ml-11">
          <div className="w-full h-px bg-gradient-to-r from-[rgba(201,168,76,0.2)] to-transparent mb-4" />
          <p className="font-body text-sm text-[#BBBBBB] leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const headerRef = useReveal();
  const listRef = useReveal();

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="section-padding" style={{ background: '#1e1e1e' }}>
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="badge-gold mb-4 inline-block">FAQ</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Pertanyaan yang <span className="text-[#C9A84C]">Sering Ditanya</span>
          </h2>
          <p className="font-body text-[#BBBBBB] text-base max-w-md mx-auto">
            Tidak ketemu jawaban yang kamu cari? Langsung chat kami via WhatsApp
          </p>
        </div>

        {/* FAQ List */}
        <div ref={listRef} className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.id}
              item={item}
              index={i}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center p-6 rounded-xl border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)]">
          <p className="font-body text-[#BBBBBB] text-sm mb-3">Masih ada pertanyaan lain?</p>
          <a
            href="https://wa.me/6287836993805"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-heading font-semibold text-sm px-6 py-2.5 rounded-[6px] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tanya Langsung via WA
          </a>
        </div>
      </div>
    </section>
  );
}
