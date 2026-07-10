import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import convert from 'heic-convert';

const targetDir = 'public/images/New Katalog';
const outputDir = 'public/images/produk/uncategorized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });
  return arrayOfFiles;
}

async function convertAll() {
  const allFiles = getAllFiles(targetDir);
  console.log(`Menemukan ${allFiles.length} file untuk dikonversi.`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    const basename = path.basename(file, ext);
    
    if (basename.startsWith('.')) continue; // skip hidden files
    
    let cleanBasename = basename.trim();
    const outputPath = path.join(outputDir, cleanBasename + '.webp');
    
    if (fs.existsSync(outputPath)) {
       successCount++;
       continue;
    }

    try {
      let inputBuffer = fs.readFileSync(file);
      
      try {
        const outputBuffer = await sharp(inputBuffer)
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 75, effort: 4 })
          .toBuffer();
        fs.writeFileSync(outputPath, outputBuffer);
      } catch (err) {
        if (err.message.includes('heif: Error') || err.message.includes('bad seek')) {
          console.log(`[HEIC Detected] Menggunakan heic-convert untuk ${cleanBasename}...`);
          const jpegBuffer = await convert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 1
          });
          
          const finalWebP = await sharp(Buffer.from(jpegBuffer))
            .resize({ width: 800, withoutEnlargement: true })
            .webp({ quality: 75, effort: 4 })
            .toBuffer();
          fs.writeFileSync(outputPath, finalWebP);
        } else {
          throw err;
        }
      }

      successCount++;
      if (successCount % 10 === 0) {
        console.log(`Memproses... ${successCount} file selesai.`);
      }
    } catch (e) {
      console.error(`❌ Gagal file: ${file} | Error: ${e.message}`);
      errorCount++;
    }
  }
  
  console.log(`\nSelesai! Berhasil: ${successCount}, Gagal: ${errorCount}`);
}

convertAll();
