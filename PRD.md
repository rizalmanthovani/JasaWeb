================================================================
PRODUCT REQUIREMENTS DOCUMENT (PRD)
================================================================
Product Name    : Zal Digital Production — Official Website
Version         : 1.0
Type            : Company Profile Website (Pro)
Stack           : HTML5, CSS3, Vanilla JavaScript
                  (no framework, deploy-ready)
Author          : [kamu]
Date            : May 2026
Status          : Ready for Development
================================================================
1. OVERVIEW & TUJUAN
text
================================================================
1. PRODUCT OVERVIEW
================================================================

Website ini adalah company profile resmi untuk brand 
"Zal Digital Production" — sebuah jasa pembuatan website 
profesional yang fokus melayani UMKM dan bisnis lokal Indonesia.

TUJUAN UTAMA:
1. Membangun kredibilitas dan kepercayaan calon client
2. Menampilkan portofolio jasa secara profesional
3. Mengkonversi pengunjung menjadi lead via WhatsApp
4. Menjadi pusat informasi semua layanan yang ditawarkan

TARGET PENGGUNA:
- Owner barbershop yang butuh website
- Pemilik UMKM (cafe, salon, laundry, bengkel, dll)
- Pebisnis lokal yang ingin go digital
- Rentang usia: 22–45 tahun
- Device dominan: smartphone (mobile-first)

URL RENCANA    : zaldigitalproduction.com (atau sesuaikan)
BAHASA         : Indonesia (utama)
================================================================
2. BRAND IDENTITY
text
================================================================
2. BRAND IDENTITY & DESIGN SYSTEM
================================================================

--- LOGO ---
Symbol  : Double-Z geometric mark dalam kotak persegi
          Z besar = border frame kotak
          Z kecil = inner negative space
Wordmark: "Zal Digital" (bold) + "Production" (light, tracked)
Format  : SVG (wajib), PNG transparent (backup)

--- COLOR PALETTE ---
Primary Background  : #2a2a2a  (charcoal dark)
Secondary Background: #1e1e1e  (deeper dark, untuk section alt)
Card Background     : #333333  (elevated surface)
Accent / Gold       : #C9A84C  (brand gold — UTAMA)
Accent Hover        : #E8C96B  (gold lebih terang saat hover)
Accent Dark         : #A8893C  (gold lebih gelap, untuk border)
Text Primary        : #FFFFFF  (putih bersih)
Text Secondary      : #BBBBBB  (abu terang, untuk subtext)
Text Muted          : #777777  (placeholder, caption)
Border Subtle       : rgba(201,168,76,0.2) (gold transparan)
Success             : #4CAF50
Error               : #F44336

--- CSS ROOT VARIABLES ---
:root {
  --bg-primary    : #2a2a2a;
  --bg-secondary  : #1e1e1e;
  --bg-card       : #333333;
  --gold          : #C9A84C;
  --gold-light    : #E8C96B;
  --gold-dark     : #A8893C;
  --text-primary  : #FFFFFF;
  --text-secondary: #BBBBBB;
  --text-muted    : #777777;
  --border        : rgba(201,168,76,0.2);
  --radius-sm     : 6px;
  --radius-md     : 12px;
  --radius-lg     : 20px;
  --shadow-gold   : 0 0 30px rgba(201,168,76,0.15);
  --transition    : all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

--- TYPOGRAPHY ---
Font Heading : "Montserrat" (700, 800) — Google Fonts
Font Body    : "Inter" (400, 500) — Google Fonts
Font Accent  : "Montserrat" (300, letter-spaced) — untuk label

Type Scale:
  H1 : 56px / 64px mobile: 36px — Hero headline
  H2 : 40px / mobile: 28px — Section heading
  H3 : 24px / mobile: 20px — Card heading
  H4 : 18px / mobile: 16px — Sub section
  Body: 16px / mobile: 15px — Paragraf
  Small: 13px — Label, caption, tag

--- SPACING SYSTEM ---
Base unit: 8px
  xs  : 4px
  sm  : 8px
  md  : 16px
  lg  : 24px
  xl  : 32px
  2xl : 48px
  3xl : 64px
  4xl : 96px

--- COMPONENT STYLE ---
Button Primary:
  Background: var(--gold)
  Text: #000000 (hitam, bukan putih)
  Border-radius: var(--radius-sm)
  Padding: 14px 32px
  Font: Montserrat 600
  Hover: background var(--gold-light), transform scale(1.02)

Button Secondary:
  Background: transparent
  Border: 1.5px solid var(--gold)
  Text: var(--gold)
  Hover: background var(--gold), text #000

Card:
  Background: var(--bg-card)
  Border: 1px solid var(--border)
  Border-radius: var(--radius-md)
  Padding: 32px
  Hover: border-color var(--gold), box-shadow var(--shadow-gold)

Gold Divider:
  Height: 1px
  Background: linear-gradient(
    90deg, transparent, var(--gold), transparent)
  Margin: 24px auto

Badge/Tag:
  Background: rgba(201,168,76,0.15)
  Border: 1px solid rgba(201,168,76,0.4)
  Text: var(--gold)
  Border-radius: var(--radius-lg)
  Padding: 4px 16px
  Font: 11px Montserrat 600 uppercase letter-spaced
================================================================
3. STRUKTUR HALAMAN
text
================================================================
3. SITE STRUCTURE
================================================================

SINGLE PAGE dengan smooth scroll navigation:

#home          → Hero Section
#tentang       → About / Brand Story
#layanan       → Services & Pricing
#portofolio    → Portfolio / Case Studies
#proses        → How It Works
#testimoni     → Testimonials
#faq           → FAQ
#kontak        → Contact & CTA

KOMPONEN GLOBAL:
- Navbar (sticky)
- Floating WhatsApp Button
- Footer
================================================================
4. SPESIFIKASI TIAP SECTION
text
================================================================
4. SECTION SPECIFICATIONS
================================================================

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[GLOBAL] NAVBAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Layout    : Fixed top, full width
Background: transparent → #1e1e1e (setelah scroll 80px)
            dengan backdrop-filter: blur(20px)
Transition: smooth background change on scroll

LEFT:
  - Logo SVG (symbol + wordmark)
  - Max height: 40px
  - Klik → scroll ke #home

CENTER (desktop):
  - Navigation links:
    Layanan | Portofolio | Proses | Testimoni | Kontak
  - Font: Inter 500, 14px
  - Color: var(--text-secondary)
  - Hover: var(--gold)
  - Active: var(--gold) + underline gold 2px

RIGHT:
  - Button: "Konsultasi Gratis"
  - Style: Button Primary (gold)
  - Klik: buka wa.me/6287836993805

MOBILE (< 768px):
  - Hamburger icon (3 garis → X animasi)
  - Menu: fullscreen overlay, #1e1e1e background
  - Links: centered, vertical, font besar 24px
  - Animasi: slide down + fade in

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[SECTION 1] HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Height    : 100vh minimum
Background: #1e1e1e
            + subtle radial gradient warm glow center
            + noise texture overlay 3% opacity
            + animated gold particles (subtle, slow moving dots)

LAYOUT: Centered, semua elemen di tengah

ELEMENTS (top to bottom):

1. Badge (animate: fade in dari atas, delay 0.2s):
   "✦ WEB DESIGN SPECIALIST ✦"
   Style: tag/badge gold

2. Headline H1 (animate: fade in, delay 0.4s):
   Line 1: "Website yang"  — text-primary
   Line 2: "Menjual."      — text gold, dengan cursor 
                              blink effect di akhir
   Font: Montserrat 800, 64px
   
3. Subheadline (animate: fade in, delay 0.6s):
   "Kami bantu bisnis lokal Indonesia tampil profesional,
    mudah ditemukan, dan siap menerima pelanggan — 
    tanpa ribet, tanpa mahal."
   Font: Inter 400, 18px, text-secondary
   Max-width: 600px, centered

4. CTA Buttons (animate: fade in, delay 0.8s):
   [Lihat Layanan]    → Button Primary → scroll #layanan
   [Hubungi Kami]     → Button Secondary → WA

5. Stats Bar (animate: count-up saat masuk viewport):
   3 angka dalam satu baris dengan divider vertikal gold:
   
   "10+"          |    "3 Hari"      |    "100%"
   "Niche Bisnis" | "Rata-rata Selesai" | "Konsultasi Gratis"
   
   Style: angka gold bold besar, label text-muted kecil

6. Scroll indicator (bottom):
   Animated chevron down, warna gold, slow bounce

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[SECTION 2] ABOUT / BRAND STORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background: #2a2a2a
Layout    : 2 kolom (desktop), 1 kolom (mobile)

LEFT COLUMN:
  - Logo mark besar (symbol Z saja, tanpa wordmark)
  - Size: 200x200px
  - Gold color, subtle glow di belakang
  - Slow rotate animation (360deg / 20s, infinite)
    ATAU static dengan gold drop shadow

RIGHT COLUMN:
  - Badge: "TENTANG KAMI"
  - H2: "Kami bukan sekadar bikin website."
  - Paragraf:
    "Zal Digital Production lahir dari satu keyakinan —
     bahwa setiap bisnis lokal berhak tampil profesional
     di internet, tanpa harus keluar biaya yang tidak masuk akal."
  - Paragraf 2:
    "Kami fokus pada satu hal: membuat website yang benar-benar
     bekerja untuk bisnis kamu — bukan sekadar ada, tapi 
     bisa menarik pelanggan, membangun kepercayaan, dan 
     menghasilkan."
  - 3 value proposition dengan gold checkmark:
    ✓ Pengerjaan cepat, 3–7 hari kerja
    ✓ Harga transparan, tidak ada biaya tersembunyi
    ✓ Support aktif setelah website live

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[SECTION 3] LAYANAN & HARGA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background: #1e1e1e
Layout    : Centered, max-width 1100px

HEADER:
  - Badge: "LAYANAN KAMI"
  - H2: "Pilih Paket yang Tepat"
  - Subtext: "Semua paket include konsultasi gratis 
              sebelum pengerjaan dimulai"

NICHE FILTER BAR:
  - Pill button filter horizontal scroll (mobile)
  - Filter: Semua | Barbershop | Cafe & Resto | Salon | 
            Laundry | Bengkel | Klinik | Gym | dan lainnya
  - Active filter: gold background, text hitam
  - Inactive: border gold, text gold
  - JavaScript: filter cards berdasarkan niche

PRICING CARDS (3 kartu horizontal):

CARD STARTER:
  Top accent: 3px gold line di atas kartu
  Badge: "UNTUK PEMULA"
  Title: "Starter"
  Price: "Rp500.000"
  Period: "Pembayaran sekali"
  Divider: gold gradient line
  Feature list (dengan gold checkmark):
    ✓ Landing Page 1 Halaman
    ✓ WA Booking Button
    ✓ Galeri Foto
    ✓ Info Layanan & Harga
    ✓ Google Maps Embed
    ✓ Mobile Responsive
    ✓ SSL Certificate
    ✓ Domain & Hosting 1 Tahun
  CTA: "Mulai Sekarang" → Button Secondary

CARD PRO (HIGHLIGHTED — lebih besar/elevated):
  Background: #2a2010 (warm dark gold tint)
  Border: 1.5px solid var(--gold)
  Box-shadow: var(--shadow-gold)
  Transform: scale(1.05) — sedikit lebih besar
  
  Top: badge "★ PALING POPULER" — background gold, text hitam
  Title: "Pro"  — warna gold
  Price: "Rp1.200.000"  — warna gold, lebih besar
  Period: "Pembayaran sekali"
  Divider: gold gradient line
  Feature list:
    ✓ Semua fitur Starter
    