# ✅ Checklist Progress — Jalé Florist Website

> **Stack:** React 18 + Vite + Tailwind CSS  
> **Last updated:** Mei 2026

---

## 🗂️ ASET & DATA

### 🖼️ Gambar & Branding
- [x] `public/favicon.png` — Favicon dengan rounded corners
- [x] `public/logo.png` — Logo toko
- [x] `public/images/hero/hero1.png` — Banner hero slide 1
- [x] `public/images/hero/hero2.png` — Banner hero slide 2
- [x] `public/images/hero/hero3.png` — Banner hero slide 3
- [x] `public/images/hero/hero4.png` — Banner hero slide 4

### 📦 Foto Produk — Bouquet Artificial
- [x] `petite/` — ba-p-001, ba-p-002, ba-p-003 (Rp 35.000)
- [x] `s/` — ba-s-001, ba-s-002, ba-s-003 (Rp 85.000)
- [x] `m/` — ba-m-001, ba-m-002, ba-m-003 (Rp 135k–200k)
- [x] `l/` — ba-l-001, ba-l-002, ba-l-003 (Rp 220k–245k)
- [x] `xl/` — ba-xl-001, ba-xl-002, ba-xl-003 (Rp 325k–350k)
- [x] `xxl/` — ba-xxl-001, ba-xxl-002, ba-xxl-003 (Rp 450k–600k)
- [x] `human-size/` — ba-hs-001, ba-hs-002, ba-hs-003 (Rp 650k–1.250k)

### 📦 Foto Produk — Kategori Lainnya *(belum upload)*
- [ ] Fresh Flowers — Petite, S, M, L, XL, XXL, Human Size, Seri Premium
- [ ] Bloom Box Artificial — S, M, L, XL, Customize
- [ ] Bloom Box Fresh Flowers — S, M, L, XL, Customize
- [ ] Bloom Box Mix (Artificial + Fresh) — S, M, L, XL, Customize
- [ ] Vas Artificial — Petite, S, M, L, XL, Customize
- [ ] Vas Fresh Flowers — S, M, L, XL, Customize
- [ ] Snack & Gift Bucket — Customize
- [ ] Money Bucket — Flat, Bunga, Tulip, Customize
- [ ] Wedding Arrangement — Fresh & Artificial
- [ ] Standing Flower & PVC Board
- [ ] Decoration

---

## 🗃️ DATA (`src/data/`)

- [x] `products.js` — 21 produk Bouquet Artificial (id, name, category, size, price, image, description)
- [ ] `products.js` — Tambah data kategori lainnya setelah foto diupload
- [ ] `testimonials.js` — Data testimoni dari Google Maps pelanggan nyata

---

## 🧩 KOMPONEN (`src/components/`)

- [ ] `Navbar.jsx` — Sticky navigation bar (Home, About, Catalog, Contact)
- [ ] `Hero.jsx` — Auto-carousel 4 banner + tagline + tombol CTA "Lihat Koleksi"
- [ ] `About.jsx` — Section tentang Jalé Florist
- [ ] `Catalog.jsx` — Grid produk + filter kategori + filter ukuran
- [ ] `ProductCard.jsx` — Card produk (nama, SKU, harga, foto)
- [ ] `QuickView.jsx` — Modal pop-up detail produk
- [ ] `Testimonial.jsx` — Section testimoni pelanggan
- [ ] `Footer.jsx` — Alamat, jam operasional, Google Maps, sosmed
- [ ] `FloatingWA.jsx` — Tombol WhatsApp mengambang sudut kanan bawah

---

## 🛠️ UTILITAS (`src/utils/`)

- [ ] `whatsapp.js` — Helper generator URL WhatsApp dengan pesan otomatis

---

## 🎨 STYLING

- [ ] `index.css` — Design system: CSS variables warna (cream, blush, sand, rose), tipografi, utilities
- [ ] Google Fonts diintegrasikan
- [ ] Tailwind CSS dikonfigurasi (`tailwind.config.js`)
- [ ] Responsive: desktop 6 kolom, mobile 2 kolom (katalog)

---

## 🌐 FITUR

- [ ] Sticky Navbar
- [ ] Hero auto-carousel (4 slide, loop)
- [ ] Katalog dengan filter kategori
- [ ] Katalog dengan filter ukuran
- [ ] Product card grid
- [ ] Quick View modal
- [ ] Smart WhatsApp order generator
- [ ] Testimoni section (data dari Google Maps)
- [ ] Footer + embed / link Google Maps
- [ ] Floating WhatsApp button
- [ ] Bilingual (Indonesia & Inggris)

---

## 🚀 DEPLOYMENT

- [ ] Test di localhost (`npm run dev`)
- [ ] Build produksi (`npm run build`)
- [ ] Deploy ke hosting (Vercel / Netlify / dll)

---

## 📌 Konvensi Penamaan File Foto Produk

| Kode | Kategori |
|------|----------|
| `ba` | Bouquet Artificial |
| `ff` | Fresh Flowers *(rencana)* |
| `bb` | Bloom Box *(rencana)* |
| `va` | Vas Artificial *(rencana)* |
| `vf` | Vas Fresh Flowers *(rencana)* |
| `sb` | Snack & Gift Bucket *(rencana)* |
| `mb` | Money Bucket *(rencana)* |
| `wa` | Wedding Arrangement *(rencana)* |
| `sf` | Standing Flower *(rencana)* |

| Kode Ukuran | Arti |
|-------------|------|
| `p` | Petite |
| `s` | Small |
| `m` | Medium |
| `l` | Large |
| `xl` | Extra Large |
| `xxl` | Double Extra Large |
| `hs` | Human Size |

**Format nama file:** `{kategori}-{ukuran}-{nomor}.jpg`  
**Contoh:** `ba-xl-001.jpg`, `ff-m-002.jpg`
