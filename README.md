# Template Landing Page Bisnis Jasa

Template landing page modern dengan performa tinggi yang dibangun menggunakan **Next.js 15** dan **Styled Components**. Dirancang khusus untuk bisnis jasa (Service HP/Laptop, Agensi, Konsultan, dll) yang ingin tampil profesional dan terpercaya.

![Project Preview](/public/preview.png)

## 🚀 Fitur Unggulan

- **⚡ Performa Kilat**: Dibangun di atas Next.js 15 (App Router) untuk kecepatan optimal dan SEO terbaik.
- **🎨 UI Modern**: Desain bersih dan terpercaya menggunakan Styled Components & Phosphor Icons.
- **📱 Responsif Penuh**: Tampilan sempurna di HP (Mobile), Tablet, maupun Desktop.
- **🌗 Dark Mode**: Fitur mode gelap (dark mode) bawaan yang elegan.
- **✨ Animasi Halus**: Animasi scroll yang menarik untuk meningkatkan engagement pengunjung.
- **🧩 Komponen Modular**:
  - **Hero Section**: Penawaran utama yang menarik perhatian.
  - **Trust Bar**: Highlight keunggulan singkat (cth: Bergaransi, Aman).
  - **Services**: Layout grid untuk daftar layanan Anda.
  - **Process**: Langkah-langkah "Cara Kerja" yang jelas.
  - **FAQ**: Pertanyaan umum model accordion.
  - **Testimonials**: Carousel bukti kepuasan pelanggan (social proof).
  - **WhatsApp CTA**: Tombol melayang untuk konversi cepat ke chat WA.

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 15
- **Styling**: Styled Components
- **Icons**: @phosphor-icons/react
- **Fonts**: Google Fonts (Outfit)
- **Animation**: Custom CSS Keyframes & Scroll Observers

## 📦 Cara Memulai (Getting Started)

1. **Clone repository ini**

   ```bash
   git clone https://github.com/aziiemuth/repairphone-app.git
   cd repairphone-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan server development**

   ```bash
   npm run dev
   ```

4. **Buka browser**
   Kunjungi `http://localhost:3000` untuk melihat hasilnya.

## 📝 Panduan Kustomisasi

### 1. Mengubah Warna & Font

Edit file `app/styles/theme.js` untuk menyesuaikan dengan identitas brand Anda.

```javascript
export const lightTheme = {
  colors: {
    primary: "#0EA5E9", // Warna utama brand Anda
    secondary: "#6366F1", // Warna aksen
    background: "#F0F9FF", // Background halaman
    // ...
  },
};
```

### 2. Mengubah Konten

Konten dipisah-pisah dalam komponen di folder `app/components/`.

- **Layanan (Services)**: Edit `app/components/Services.jsx` (cari bagian array `services`).
- **Testimoni**: Edit `app/components/Testimonials.jsx`.
- **FAQ**: Edit `app/components/FAQ.jsx`.
- **Info Kontak**: Update `app/components/Footer.jsx` dan `app/components/Location.jsx`.

### 3. Konfigurasi SEO

Update metadata di file `app/layout.js`:

```javascript
export const metadata = {
  title: "Nama Bisnis Anda - Slogan",
  description: "Deskripsi layanan untuk keperluan SEO.",
  // ...
};
```

## 🚀 Cara Deploy

Cara termudah untuk online adalah menggunakan **Vercel**:

1. Upload/Push kode Anda ke GitHub.
2. Login ke Vercel dan import repository Anda.
3. Klik **Deploy**. Vercel akan mendeteksi Next.js secara otomatis.

## 🤝 Kontribusi

Silakan gunakan template ini untuk projek Anda sendiri! Jika menemukan bug atau ingin mengembangkan lebih lanjut, silakan buka issue atau pull request.

## 📄 Lisensi

MIT License - gratis untuk digunakan untuk projek personal maupun komersial.
