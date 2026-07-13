import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = 'public/images/hero baru';
const destDir = 'public/images/hero';

async function processHero() {
  if (!fs.existsSync(sourceDir)) {
    console.error("Folder 'hero baru' tidak ditemukan!");
    return;
  }

  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
  
  if (files.length === 0) {
    console.log("Tidak ada file gambar di folder 'hero baru'.");
    return;
  }

  for (const file of files) {
    // Mengecek apakah nama file mengandung huruf 'M' (untuk Mobile)
    const isMobile = file.includes('M');
    const basename = path.basename(file, path.extname(file));
    
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, `${basename}.webp`);
    
    // Desktop max lebar 1920px, Mobile max lebar 1080px (agar tetap tajam namun ringan)
    const maxWidth = isMobile ? 1080 : 1920;
    
    try {
      console.log(`Memproses ${file}...`);
      await sharp(srcPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 }) // Kualitas WebP 80% untuk hero banner (lebih tajam)
        .toFile(destPath);
      
      const stats = fs.statSync(destPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✅ Selesai: ${basename}.webp (Ukuran: ${sizeKB} KB)`);
    } catch (err) {
      console.error(`❌ Gagal pada ${file}:`, err);
    }
  }
}

processHero();
