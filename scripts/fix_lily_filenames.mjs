import fs from 'fs';
import path from 'path';

const produkDir = path.resolve('public/images/produk');

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

const prefixMaxId = {};
const zeroIdFiles = [];
let fixes = 0;

console.log("=== Proses Analisis & Perbaikan Nama File Lily ===");

for (const file of allFiles) {
  let basename = path.basename(file, '.webp');
  const originalBasename = basename;
  
  // 1. Remove (1), (2), (3) etc
  basename = basename.replace(/\(\d+\)/g, '');
  basename = basename.trim();
  
  // 2. Fix missing "Harga"
  if (basename.match(/_(\d+)[kK]$/)) {
    basename = basename.replace(/_(\d+[kK])$/i, '_Harga $1');
  }
  
  // 3. Standardize spacing around Harga
  basename = basename.replace(/harga\s*_?\s*(\d+[kK])/i, 'Harga $1');
  
  const match = basename.match(/^([A-Za-z]+)_(\d+)_Harga/i);
  if (match) {
    const prefix = match[1];
    const idNum = parseInt(match[2], 10);
    
    if (!prefixMaxId[prefix]) {
      prefixMaxId[prefix] = new Set();
    }
    
    if (idNum === 0) {
      zeroIdFiles.push({ file, basename, prefix, originalBasename });
    } else {
      prefixMaxId[prefix].add(idNum);
      
      const newName = basename + '.webp';
      const oldName = path.basename(file);
      if (newName !== oldName) {
         const newPath = path.join(path.dirname(file), newName);
         if (!fs.existsSync(newPath)) {
             fs.renameSync(file, newPath);
             console.log(`[RAPATKAN] ${oldName} -> ${newName}`);
             fixes++;
         }
      }
    }
  }
}

for (const item of zeroIdFiles) {
  const { file, basename, prefix, originalBasename } = item;
  
  let nextId = 1;
  const usedIds = prefixMaxId[prefix] || new Set();
  while (usedIds.has(nextId)) {
    nextId++;
  }
  
  usedIds.add(nextId);
  const idStr = String(nextId).padStart(3, '0');
  
  const newBasename = basename.replace(/_000_/g, `_${idStr}_`);
  let newPath = path.join(path.dirname(file), newBasename + '.webp');
  
  // Just in case collision happens (e.g. 2 exactly same names after ID fix)
  let counter = 1;
  while (fs.existsSync(newPath)) {
      const altBasename = `${newBasename}_alt${counter}`;
      newPath = path.join(path.dirname(file), altBasename + '.webp');
      counter++;
  }
  
  fs.renameSync(file, newPath);
  console.log(`[FIX ID 000] ${originalBasename}.webp -> ${path.basename(newPath)}`);
  fixes++;
}

console.log(`\nSelesai! Berhasil memperbaiki ${fixes} file.`);
