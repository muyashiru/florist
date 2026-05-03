import sharp from 'sharp';
import heicConvert from 'heic-convert';
import { rename, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '../public/images/produk');

// Mapping file lama → file baru + data produk
const files = [
  // Petite (HEIC → JPG, harga 35k)
  { old: 'Bap_001_Harga 35k_',       new: 'ba-p-001.jpg', heic: true,  size: 'Petite', price: 35000 },
  { old: 'Bap_002_harga35k',          new: 'ba-p-002.jpg', heic: true,  size: 'Petite', price: 35000 },
  { old: 'Bap_003 harga 35k_',        new: 'ba-p-003.jpg', heic: true,  size: 'Petite', price: 35000 },

  // Small
  { old: 'Bas_001_Harga 85k.jpg',     new: 'ba-s-001.jpg', size: 'S', price: 85000 },
  { old: 'Bas_002_Harga 85k.jpg',     new: 'ba-s-002.jpg', size: 'S', price: 85000 },
  { old: 'Bas_003_Harga 85k.jpg',     new: 'ba-s-003.jpg', size: 'S', price: 85000 },

  // Medium
  { old: 'Bam_001_Harga 200k.jpg',    new: 'ba-m-001.jpg', size: 'M', price: 200000 },
  { old: 'Bam_002_Harga 200k.jpg',    new: 'ba-m-002.jpg', size: 'M', price: 200000 },
  { old: 'Bam_003_Harga 135k.jpg',    new: 'ba-m-003.jpg', size: 'M', price: 135000 },

  // Large
  { old: 'Bal_001_ harga 245k.jpg',   new: 'ba-l-001.jpg', size: 'L', price: 245000 },
  { old: 'Bal_002_ harga 245k.jpg',   new: 'ba-l-002.jpg', size: 'L', price: 245000 },
  { old: 'Bal_003_ harga 220k.jpg',   new: 'ba-l-003.jpg', size: 'L', price: 220000 },

  // XL
  { old: 'Baxl_001_Harga 350k.jpg',  new: 'ba-xl-001.jpg', size: 'XL', price: 350000 },
  { old: 'Baxl_002_Harga 325k.jpg',  new: 'ba-xl-002.jpg', size: 'XL', price: 325000 },
  { old: 'Baxl_003_Harga 325k.jpg',  new: 'ba-xl-003.jpg', size: 'XL', price: 325000 },

  // XXL
  { old: 'Baxxl_001_ Harga 450k.jpg', new: 'ba-xxl-001.jpg', size: 'XXL', price: 450000 },
  { old: 'Baxxl_002_ Harga 600k.jpg', new: 'ba-xxl-002.jpg', size: 'XXL', price: 600000 },
  { old: 'Baxxl_003_ Harga 550k.jpg', new: 'ba-xxl-003.jpg', size: 'XXL', price: 550000 },

  // Human Size
  { old: 'Bahs_001_Harga 1250k.jpg',  new: 'ba-hs-001.jpg', size: 'Human Size', price: 1250000 },
  { old: 'Bahs_002_Harga 650k.jpg',   new: 'ba-hs-002.jpg', size: 'Human Size', price: 650000 },
  { old: 'Bahs_003_Harga 700k.jpg',   new: 'ba-hs-003.jpg', size: 'Human Size', price: 700000 },
];

const sizeOrder = ['Petite', 'S', 'M', 'L', 'XL', 'XXL', 'Human Size'];
const products = [];
let successCount = 0;
let errorCount = 0;

for (const f of files) {
  const oldPath = path.join(dir, f.old);
  const newPath = path.join(dir, f.new);

  if (!existsSync(oldPath)) {
    console.warn(`⚠️  File tidak ditemukan: ${f.old}`);
    errorCount++;
    continue;
  }

  try {
    if (f.heic) {
      // Convert HEIC → JPG via heic-convert
      const inputBuffer = await readFile(oldPath);
      const outputBuffer = await heicConvert({ buffer: inputBuffer, format: 'JPEG', quality: 0.9 });
      const { writeFile: wf } = await import('fs/promises');
      await wf(newPath, Buffer.from(outputBuffer));
      console.log(`🔄 Convert HEIC → JPG: ${f.old} → ${f.new}`);
    } else {
      await rename(oldPath, newPath);
      console.log(`✅ Rename: ${f.old} → ${f.new}`);
    }

    // Buat data produk
    const num = f.new.match(/\d+\.jpg$/)[0].replace('.jpg', '');
    const sizeLabel = f.size === 'Petite' ? 'Petite'
      : f.size === 'Human Size' ? 'Human Size'
      : f.size;
    const skuSize = f.size.replace(' ', '').toLowerCase();

    products.push({
      id: `BA-${skuSize.toUpperCase()}-${num}`,
      name: `Bouquet Artificial ${sizeLabel}`,
      category: 'bouquet-artificial',
      size: sizeLabel,
      price: f.price,
      image: `/images/produk/${f.new}`,
      description: `Rangkaian bunga artificial ukuran ${sizeLabel} dari Jalé Florist. Cantik, tahan lama, dan cocok untuk berbagai momen spesial.`,
      available: true,
    });

    successCount++;
  } catch (err) {
    console.error(`❌ Gagal proses ${f.old}: ${err.message}`);
    errorCount++;
  }
}

// Sort by size order lalu nomor
products.sort((a, b) => {
  const si = sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size);
  if (si !== 0) return si;
  return a.id.localeCompare(b.id);
});

// Generate products.js
const jsContent = `// Data produk Jalé Florist
// Auto-generated — jangan edit manual, gunakan scripts/organize-produk.mjs
// Last updated: ${new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}

export const products = ${JSON.stringify(products, null, 2)};

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'bouquet-artificial', label: 'Bouquet Artificial' },
];

export const sizes = ['Petite', 'S', 'M', 'L', 'XL', 'XXL', 'Human Size'];
`;

import { writeFile, mkdir as mkDir } from 'fs/promises';
const dataDir = path.join(__dirname, '../src/data');
await mkDir(dataDir, { recursive: true });
const dataPath = path.join(dataDir, 'products.js');
await writeFile(dataPath, jsContent, 'utf-8');

console.log(`\n📦 Selesai!`);
console.log(`   ✅ Berhasil : ${successCount} file`);
console.log(`   ❌ Gagal    : ${errorCount} file`);
console.log(`   📄 products.js digenerate di src/data/products.js`);
console.log(`   🗂️  Total produk: ${products.length}`);
