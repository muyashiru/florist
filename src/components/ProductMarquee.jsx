import { products } from '../data/products';
import { formatPrice, generateOrderLink } from '../utils/whatsapp';

export default function ProductMarquee() {
  // Mengacak produk agar tampil random
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  
  // Membagi 2 baris
  const half = Math.ceil(shuffled.length / 2);
  const row1 = shuffled.slice(0, half);
  const row2 = shuffled.slice(half);

  // Duplikasi agar animasi seamless
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  const renderCard = (p, i) => (
    <div key={i} className="w-40 md:w-64 bg-white rounded-xl shadow-sm border border-sand/40 overflow-hidden flex-shrink-0 whitespace-normal flex flex-col group hover:shadow-md transition-shadow">
      <div className="w-full h-40 md:h-60 bg-cream relative overflow-hidden">
        <img 
          src={p.image} 
          alt={p.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-2 bg-gradient-to-t from-black/50 to-transparent">
          <span className="text-white text-[9px] md:text-xs font-medium drop-shadow-md">Code: {p.id}</span>
        </div>
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1 bg-white relative z-10">
        <h4 className="font-bold text-charcoal text-[11px] md:text-sm mb-2 md:mb-3 line-clamp-2 leading-snug">{p.name}</h4>
        <div className="mt-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
          <span className="font-bold text-charcoal text-[11px] md:text-sm">{formatPrice(p.price)}</span>
          <a 
            href={generateOrderLink(p)} 
            target="_blank" 
            rel="noreferrer"
            className="w-full md:w-auto justify-center bg-[#25D366] hover:bg-[#1DA851] text-white px-2 py-1.5 md:px-3 md:py-1.5 rounded-md md:rounded-lg flex items-center gap-1 transition-colors text-[9px] md:text-xs font-medium"
          >
            <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Beli <span className="hidden md:inline">&nbsp;langsung</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-20 relative overflow-hidden bg-[#FAF8F5] border-b border-sand/40">
      {/* Background Floral Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c2.8 8.5 9.5 15.2 18 18-8.5 2.8-15.2 9.5-18 18-2.8-8.5-9.5-15.2-18-18 8.5-2.8 15.2-9.5 18-18zM15 35c1.4 4.2 4.8 7.6 9 9-4.2 1.4-7.6 4.8-9 9-1.4-4.2-4.8-7.6-9-9 4.2-1.4 7.6-4.8 9-9z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}
      />

      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); } /* Bergeser sepertiga karena kita duplicate 3x */
        }
        @keyframes scrollXReverse {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: scrollX 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: scrollXReverse 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-rose-brand text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-3">Produk Best Seller</p>
          <h2 className="font-display text-2xl md:text-5xl text-charcoal font-bold mb-3 md:mb-4">
            Top Bouquet &amp; Karangan Bunga
          </h2>
          <p className="text-muted text-xs md:text-base max-w-2xl mx-auto">
            Produk yang kami tawarkan berkualitas dan dirangkai dengan indah untuk memenuhi setiap kebutuhan hari spesial Anda.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative z-10 flex flex-col gap-4 md:gap-8 pb-4">
        {/* Row 1: Right to Left */}
        <div className="flex overflow-hidden w-full group mask-edges">
          <div className="flex gap-4 md:gap-6 w-max animate-marquee marquee-track px-2 md:px-3">
            {duplicatedRow1.map((p, i) => renderCard(p, i))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden w-full group mask-edges">
          <div className="flex gap-4 md:gap-6 w-max animate-marquee-reverse marquee-track px-2 md:px-3">
            {duplicatedRow2.map((p, i) => renderCard(p, i))}
          </div>
        </div>
      </div>

      {/* Edge Fading Mask */}
      <style>{`
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </section>
  );
}
