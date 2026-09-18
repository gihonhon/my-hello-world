# Gihonhon.dev

Portfolio personal Agung Gihon dengan tema Minecraft zombie pixelated. Memuat profil, tujuh project, skills, serta kontak, dengan lanskap voxel, galeri berbingkai kayu, dan mode siang/malam.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

```bash
npm run lint   # ESLint
npm run build  # Type-check dan production build
npm start      # Menjalankan hasil build
```

## Arsitektur

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, dan CSS khusus untuk visual pixel. Halaman utama dirender sebagai Server Component; hanya navigasi, pergantian tema, dan filter project yang memerlukan Client Components. Tidak ada backend atau database untuk portfolio ini.

| Lokasi | Tanggung jawab |
| --- | --- |
| `app/layout.tsx` | Metadata, font lokal, ThemeProvider, Vercel Analytics |
| `app/page.tsx` | Struktur halaman: hero, projects, about, skills, contact, footer |
| `app/globals.css` | Token warna, tema pixel, layout, responsive breakpoints, reduced motion |
| `lib/portfolio.ts` | Profil, kontak, data project, dan skills |
| `components/portfolio-nav.tsx` | Navigasi aktif saat scroll, menu mobile, mode siang/malam |
| `components/project-gallery.tsx` | Filter kategori, cover project, tautan demo dan source code |
| `components/pixel-art.tsx` | Karakter zombie, ikon SVG pixel, dan bar progress |
| `components/theme-provider.tsx` | Persistensi tema melalui next-themes |
| `components/ui/` | Komponen Radix/shadcn yang tersedia untuk pengembangan selanjutnya |
| `public/images/` | Lanskap SVG original dan screenshot project berformat WebP |
| `public/fonts/` | Geist, Press Start 2P, dan lisensi SIL Open Font License |

## Memperbarui konten

- Edit `lib/portfolio.ts` untuk kontak, deskripsi, teknologi, skills, dan URL project.
- Edit pengantar dan teks profil di `app/page.tsx`.
- Untuk project baru, tambahkan datanya di `lib/portfolio.ts`, lalu tentukan kategori dan cover di `components/project-gallery.tsx`.
- Tambahkan screenshot ke `public/images/` dan daftarkan pada `screenshots` di komponen galeri. Project tanpa screenshot memakai cover pixel.
- Isi `demoLink` hanya jika demo tersedia. Project tanpa demo mengarah ke repository GitHub.
- Warna utama dan layout didefinisikan di `app/globals.css`.

Font dan aset visual disajikan secara lokal. Mode malam mengubah pencahayaan lanskap; pilihan pengguna tersimpan di browser. Kontak menggunakan tautan email, GitHub, dan LinkedIn, tanpa formulir atau pengiriman data ke backend.

## Pemeriksaan UI

Validasi desktop dan mobile meliputi filter semua kategori, navigasi anchor, menu mobile, persistensi tema, tautan project, keyboard focus, serta tidak adanya horizontal overflow pada lebar 320 px dan 390 px. Animasi scroll mengikuti preferensi `prefers-reduced-motion`.
