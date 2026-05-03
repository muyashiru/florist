import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { rename } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, '../public/favicon.png');
const outputPath = path.join(__dirname, '../public/favicon.png');

// Baca metadata untuk dapatkan dimensi
const metadata = await sharp(inputPath).metadata();
const size = Math.min(metadata.width, metadata.height);

// Radius sudut — sekitar 22% dari ukuran (seperti icon app iOS/Android)
const radius = Math.round(size * 0.22);

// Buat SVG rounded rectangle mask
const roundedMask = Buffer.from(
  `<svg width="${size}" height="${size}">
    <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" />
  </svg>`
);

await sharp(inputPath)
  .resize(size, size)
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .png()
  .toFile(outputPath + '.tmp.png');

await rename(outputPath + '.tmp.png', outputPath);

console.log(`✅ favicon.png berhasil dijadikan rounded corners (radius: ${radius}px, size: ${size}x${size}px)`);
