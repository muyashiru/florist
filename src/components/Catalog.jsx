import { useState, useMemo } from 'react';
import { products, categories, sizes } from '../data/products';
import ProductCard from './ProductCard';
import QuickView from './QuickView';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSize, setActiveSize] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const sizeMatch = activeSize === 'all' || p.size === activeSize;
      return catMatch && sizeMatch;
    });
  }, [activeCategory, activeSize]);

  return (
    <section id="catalog" className="py-24 bg-cream relative overflow-hidden">
      {/* --- Ornamen Background --- */}
      {/* Blur Backgrounds (Menyebar di berbagai area) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D9A299]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-[30%] right-0 w-[400px] h-[400px] bg-[#DCC5B2]/15 rounded-full blur-[120px] translate-x-1/3 pointer-events-none"></div>
      <div className="absolute top-[60%] left-0 w-[600px] h-[600px] bg-[#D9A299]/10 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DCC5B2]/15 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      
      {/* Floating Flowers (Lebih banyak & variatif di berbagai ketinggian) */}
      {/* Top area */}
      <svg className="absolute top-40 left-10 md:left-20 w-16 h-16 text-[#D9A299]/20 animate-[spin_20s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[15%] right-8 md:right-24 w-12 h-12 text-[#DCC5B2]/30 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[20%] left-1/3 w-10 h-10 text-[#D9A299]/15 animate-[spin_25s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[10%] right-1/4 w-14 h-14 text-[#DCC5B2]/20 animate-[bounce_7s_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      
      {/* Middle area */}
      <svg className="absolute top-[40%] left-5 md:left-12 w-20 h-20 text-[#D9A299]/20 animate-[bounce_5s_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[55%] right-10 md:right-20 w-16 h-16 text-[#DCC5B2]/25 animate-[spin_25s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[45%] right-1/3 w-12 h-12 text-[#D9A299]/18 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-1/2 left-1/4 w-14 h-14 text-[#DCC5B2]/22 animate-[bounce_6s_infinite_1s] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      
      {/* Bottom area */}
      <svg className="absolute top-[80%] left-10 md:left-[15%] w-14 h-14 text-[#D9A299]/20 animate-[spin_18s_linear_infinite_reverse] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute bottom-[5%] right-12 md:right-32 w-24 h-24 text-[#DCC5B2]/20 animate-[bounce_6s_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute bottom-[20%] left-1/3 w-16 h-16 text-[#D9A299]/15 animate-[spin_22s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute bottom-[15%] right-1/4 w-12 h-12 text-[#DCC5B2]/18 animate-[bounce_5s_infinite_2s] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      {/* Extra flowers - more positions */}
      <svg className="absolute top-[5%] left-[5%] w-10 h-10 text-[#D9A299]/16 animate-[spin_28s_linear_infinite_reverse] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-1/3 left-[8%] w-14 h-14 text-[#DCC5B2]/19 animate-[bounce_7.5s_infinite_0.5s] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[60%] right-[5%] w-16 h-16 text-[#D9A299]/17 animate-[spin_24s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[72%] left-[22%] w-10 h-10 text-[#DCC5B2]/20 animate-[spin_26s_linear_infinite_reverse] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[38%] right-[5%] w-12 h-12 text-[#D9A299]/15 animate-[bounce_8s_infinite_1.5s] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute bottom-[8%] left-[8%] w-14 h-14 text-[#DCC5B2]/21 animate-[spin_20s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute bottom-[28%] right-[12%] w-11 h-11 text-[#D9A299]/18 animate-[bounce_6.5s_infinite_0.8s] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[28%] left-[50%] w-13 h-13 text-[#DCC5B2]/17 animate-[spin_32s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>

      {/* Floating Sparkles (Menyebar) */}
      <div className="absolute top-[10%] right-[20%] text-[#D9A299]/40 text-4xl animate-pulse pointer-events-none">✦</div>
      <div className="absolute top-[25%] left-[25%] text-[#DCC5B2]/50 text-2xl animate-[pulse_3s_infinite_1s] pointer-events-none">✧</div>
      <div className="absolute top-[50%] right-[30%] text-[#D9A299]/30 text-3xl animate-[pulse_4s_infinite_2s] pointer-events-none">✦</div>
      <div className="absolute top-[75%] left-[10%] text-[#DCC5B2]/40 text-4xl animate-pulse pointer-events-none">✧</div>
      <div className="absolute bottom-[10%] right-[15%] text-[#D9A299]/50 text-3xl animate-[pulse_3s_infinite] pointer-events-none">✦</div>
      {/* Additional sparkles */}
      <div className="absolute top-[5%] left-[15%] text-[#DCC5B2]/35 text-3xl animate-[pulse_2.5s_infinite_1.5s] pointer-events-none">✧</div>
      <div className="absolute top-[35%] right-[10%] text-[#D9A299]/25 text-2xl animate-[pulse_3.5s_infinite_0.5s] pointer-events-none">✦</div>
      <div className="absolute top-[65%] left-1/3 text-[#DCC5B2]/30 text-2xl animate-[pulse_2s_infinite_2s] pointer-events-none">✧</div>
      <div className="absolute bottom-[30%] right-[8%] text-[#D9A299]/35 text-3xl animate-[pulse_3s_infinite_1s] pointer-events-none">✦</div>
      {/* More sparkles */}
      <div className="absolute top-[18%] right-[45%] text-[#DCC5B2]/28 text-2xl animate-[pulse_2.8s_infinite_0.3s] pointer-events-none">✧</div>
      <div className="absolute top-[42%] left-[5%] text-[#D9A299]/32 text-3xl animate-[pulse_3.2s_infinite_1.2s] pointer-events-none">✦</div>
      <div className="absolute bottom-[22%] left-[40%] text-[#DCC5B2]/26 text-2xl animate-[pulse_2.6s_infinite_1.8s] pointer-events-none">✧</div>
      <div className="absolute top-[58%] right-[22%] text-[#D9A299]/29 text-3xl animate-[pulse_3.3s_infinite_0.7s] pointer-events-none">✦</div>
      
      {/* Pattern Titik Halus */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D9A299 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
      {/* --- End Ornamen --- */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-rose-brand text-sm tracking-[0.25em] uppercase font-medium mb-3">Koleksi Kami</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4">Katalog Produk</h2>
          <div className="w-16 h-0.5 bg-rose-brand mx-auto mb-5" />
          <p className="text-muted max-w-xl mx-auto">
            Temukan rangkaian bunga sempurna untuk setiap momen spesialmu.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === 'all'
                ? 'bg-rose-brand text-white shadow-md'
                : 'bg-blush text-charcoal hover:bg-sand'
              }`}
          >
            Semua Kategori
          </button>
          {categories.filter((c) => c.id !== 'all').map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.id
                  ? 'bg-rose-brand text-white shadow-md'
                  : 'bg-blush text-charcoal hover:bg-sand'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Ukuran */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveSize('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${activeSize === 'all'
                ? 'border-rose-brand bg-rose-brand/10 text-rose-brand'
                : 'border-sand text-muted hover:border-rose-brand hover:text-rose-brand'
              }`}
          >
            Semua Ukuran
          </button>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${activeSize === size
                  ? 'border-rose-brand bg-rose-brand/10 text-rose-brand'
                  : 'border-sand text-muted hover:border-rose-brand hover:text-rose-brand'
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-sm text-muted text-center mb-8">
          Menampilkan <span className="font-semibold text-charcoal">{filtered.length}</span> produk
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🌸</p>
            <p className="text-muted">Belum ada produk untuk filter ini.</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
