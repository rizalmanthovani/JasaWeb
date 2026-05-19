"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WA_LINK = 'https://wa.me/6287836993805';

const NAV_LINKS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Proses', href: '#proses' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Active section detection
      const sections = ['home', 'tentang', 'layanan', 'portofolio', 'proses', 'testimoni', 'faq', 'kontak'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1e1e1e]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.15)] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img src="/logo.jpg" alt="Zal Digital Production - Web Design & Development" title="Zal Digital Production" className="h-12 w-auto max-w-[140px] object-contain rounded-md" />
              <div className="absolute inset-0 rounded-md bg-gold/10 blur-md group-hover:blur-xl transition-all duration-300 -z-10" />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-white text-sm tracking-tight">Zal Digital</div>
              <div className="font-heading font-light text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">Production</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`nav-link font-body text-sm font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-[#C9A84C] active'
                    : 'text-[#BBBBBB] hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96B] text-black font-heading font-semibold text-sm px-6 py-2.5 rounded-[6px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi Gratis
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1e1e1e] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#C9A84C]/30" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#C9A84C]/30" />

        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-heading font-bold text-3xl transition-all duration-300 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${isActive(link.href) ? 'text-[#C9A84C]' : 'text-white hover:text-[#C9A84C]'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-[#C9A84C] text-black font-heading font-semibold text-base px-8 py-3 rounded-[6px]"
            onClick={() => setMenuOpen(false)}
          >
            Konsultasi Gratis
          </a>
        </nav>
      </div>
    </>
  );
}
