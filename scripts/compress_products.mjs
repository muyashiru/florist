import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = 'public/images/produk';

function getAllWebpFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllWebpFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.webp') && !file.startsWith('temp_')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });
  
  return arrayOfFiles;
}

async function processImages() {
  const allFiles = getAllWebpFiles(targetDir);
  console.log(`Ditemukan ${allFiles.length} gambar untuk dikompres.`);
  
  let successCount = 0;
  let errorCount = 0;
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  for (let i = 0; i < allFiles.length; i++) {
    const file = allFiles[i];
    const tempFile = file + '.tmp.webp';
    
    try {
      const stats = fs.statSync(file);
      totalOriginalSize += stats.size;
      
      const inputBuffer = fs.readFileSync(file);
      const outputBuffer = await sharp(inputBuffer)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 75, effort: 4 })
        .toBuffer();
        
      fs.writeFileSync(file, outputBuffer);
      
      const newStats = fs.statSync(file);
      totalNewSize += newStats.size;
      
      successCount++;
      if (successCount % 50 === 0) {
        console.log(`Telah memproses ${successCount}/${allFiles.length}...`);
      }
    } catch (e) {
      console.error(`Error pada ${file}:`, e.message);
      errorCount++;
      if (fs.existsSync(tempFile)) {
        try { fs.unlinkSync(tempFile); } catch(err) {}
      }
    }
  }
  
  console.log(`\nProses kompresi selesai!`);
  console.log(`Berhasil dikompres: ${successCount}`);
  console.log(`Gagal: ${errorCount}`);
  console.log(`Total ukuran sebelumnya: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total ukuran baru: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ruang yang berhasil dihemat: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB`);
}

processImages().catch(console.error);
