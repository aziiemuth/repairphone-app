# Panduan Deploy ke Subdomain (Vercel)

Karena kamu sudah punya domain `aziiemuth.my.id` di Vercel, menambahkan subdomain `repair.aziiemuth.my.id` itu sangat mudah dan **GRATIS**.

## Langkah 1: Deploy Project ke Vercel

1. **Buka Vercel Dashboard**: [vercel.com](https://vercel.com)
2. Klik tombol **"Add New..."** > **"Project"**.
3. Di bagian **"Import Git Repository"**, cari repo yang baru kita upload: `repairphone-app`.
4. Klik **"Import"**.
5. Di halaman konfigurasi:
   - **Project Name**: `repair-app` (atau bebas)
   - **Framework Preset**: Next.js (biasanya auto-detect)
   - **Root Directory**: `./` (biarkan default)
6. Klik **"Deploy"**.
7. Tunggu sampai proses build selesai dan muncul confetti 🎉.

## Langkah 2: Setting Subdomain

1. Setelah selesai deploy, klik tombol **"Continue to Dashboard"**.
2. Masuk ke tab **"Settings"** (di bagian atas).
3. Pilih menu **"Domains"** (di sidebar kiri).
4. Di kolom input domain, ketik: `repair.aziiemuth.my.id`
5. Klik **"Add"**.

**Selesai!** 🚀

Karena domain utama (`aziiemuth.my.id`) sudah ada di Vercel, Vercel akan otomatis mengkonfigurasi DNS untuk subdomainnya. Tidak perlu setting DNS record manual di provider domain kamu.

Tunggu beberapa detik/menit, dan website kamu akan bisa diakses di [https://repair.aziiemuth.my.id](https://repair.aziiemuth.my.id).
