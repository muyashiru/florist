import { products } from '../src/data/products.js';

export default function handler(req, res) {
  const { id } = req.query;
  
  let ogTitle = "Jalé Florist";
  let ogDesc = "Bloom with meaning, delivered with love.";
  let ogImg = "https://jaleflorist.com/logo.png";

  if (id) {
    const product = products.find(p => p.id === id);
    if (product) {
      ogTitle = product.name;
      
      const formatPrice = (price) => {
        if (price === 0) return "Ask admin for price";
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(price);
      };
      
      ogDesc = `Harga: ${formatPrice(product.price)}`;
      
      const baseUrl = "https://jaleflorist.com";
      const encodedImagePath = encodeURI(product.image || '');
      ogImg = product.image?.startsWith('http') ? product.image : `${baseUrl}${encodedImagePath}`;
    }
  }
  
  const redirectUrl = `https://jaleflorist.com/catalog${id ? `?open=${id}` : ''}`;

  const html = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${ogTitle}</title>
      
      <!-- Open Graph / WhatsApp / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:title" content="${ogTitle}">
      <meta property="og:description" content="${ogDesc}">
      <meta property="og:image" content="${ogImg}">
      <meta property="og:image:width" content="800">
      <meta property="og:image:height" content="800">
      <meta property="og:url" content="https://jaleflorist.com/">
      
      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${ogTitle}">
      <meta name="twitter:description" content="${ogDesc}">
      <meta name="twitter:image" content="${ogImg}">

      <!-- Redirect ke katalog -->
      <meta http-equiv="refresh" content="0; url=${redirectUrl}">
      <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; color: #333; }
      </style>
    </head>
    <body>
      <p>Membuka produk ${ogTitle}...</p>
      <p>Jika tidak dialihkan otomatis, <a href="${redirectUrl}">klik di sini</a>.</p>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
