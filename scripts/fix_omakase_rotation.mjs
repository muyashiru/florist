import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function fixOmakase() {
  const sourceDir = 'public/images/New Katalog/Omakase';
  const destDir = 'public/images/produk/omakase';
  
  const files = [
    { src: 'OmakaseXl_ 001_Harga 350k.jpg', dest: 'OmakaseXl_001_Harga 350k.webp' },
    { src: 'OmakaseXl_002_Harga 300k.jpg', dest: 'OmakaseXl_002_Harga 300k.webp' },
    { src: 'OmakaseXl_003_Harga 300k.jpg', dest: 'OmakaseXl_003_Harga 300k.webp' }
  ];

  for (const file of files) {
    const srcPath = path.join(sourceDir, file.src);
    const destPath = path.join(destDir, file.dest);
    
    if (fs.existsSync(srcPath)) {
      try {
        const inputBuffer = fs.readFileSync(srcPath);
        const outputBuffer = await sharp(inputBuffer)
          .rotate() // APPLY EXIF ORIENTATION
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 75, effort: 4 })
          .toBuffer();
          
        fs.writeFileSync(destPath, outputBuffer);
        console.log(`✅ Berhasil rotasi & convert: ${file.dest}`);
      } catch (e) {
        console.error(`❌ Gagal: ${file.src} - ${e.message}`);
      }
    }
  }
}

fixOmakase();
