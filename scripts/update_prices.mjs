import fs from 'fs';
import path from 'path';

const updates = {
  "BAHS_011": 1250000,
  "BAHS_018": 1000000,
  "BAHS_020": 1250000,
  "BAL_020": 250000,
  "BAL_010": 295000,
  "BAL_064": 295000,
  "BAL_029": 275000,
  "BAL_004": 235000,
  "BAL_054": 250000,
  "BAL_014": 220000,
  "BAL_075": 275000,
  "BAL_048": 250000,
  "BAL_063": 295000,
  "BAL_086": 275000,
  "BAL_012": 275000,
  "BAL_062": 250000
};

const produkDir = path.resolve('public/images/produk');
const productsFile = path.resolve('src/data/products.js');

function getAllWebpFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllWebpFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.webp')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });
  return arrayOfFiles;
}

const allFiles = getAllWebpFiles(produkDir);
const report = [];

let jsContent = fs.readFileSync(productsFile, 'utf8');

for (const [id, newPrice] of Object.entries(updates)) {
  const file = allFiles.find(f => path.basename(f).toLowerCase().startsWith(id.toLowerCase() + '_'));
  
  if (file) {
    const oldName = path.basename(file);
    const dir = path.dirname(file);
    
    const newPriceStr = `${newPrice / 1000}K`;
    const newName = oldName.replace(/harga\s*_?\s*\d+[kK]/i, `Harga ${newPriceStr}`);
    const newFilePath = path.join(dir, newName);
    
    if (oldName !== newName) {
      fs.renameSync(file, newFilePath);
      report.push(`✅ ${id}:\n   Lama: ${oldName}\n   Baru: ${newName}`);
      
      const idRegex = new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"price":\\s*\\d+,`, 'i');
      jsContent = jsContent.replace(idRegex, (match) => {
        return match.replace(/"price":\s*\d+,/i, `"price": ${newPrice},`);
      });
      
      const oldRelativePath = '/images/produk/' + path.relative(produkDir, file).replace(/\\/g, '/');
      const newRelativePath = '/images/produk/' + path.relative(produkDir, newFilePath).replace(/\\/g, '/');
      
      jsContent = jsContent.replace(oldRelativePath, newRelativePath);
    } else {
      report.push(`⚠️ ${id}: File sudah memiliki harga yang benar (${oldName})`);
    }
  } else {
    report.push(`❌ ${id}: File gambar tidak ditemukan!`);
  }
}

fs.writeFileSync(productsFile, jsContent);
console.log("=== LAPORAN PERUBAHAN ===");
console.log(report.join("\n\n"));
