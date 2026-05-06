export default function SectionBackground({ variant }) {
  // Semua background memiliki z-0 dan overflow-hidden agar tidak keluar kotak section
  const baseClass = "absolute inset-0 overflow-hidden pointer-events-none z-0";

  switch (variant) {
    case 'intro':
      return (
        <div className={baseClass}>
          {/* Siluet Halus */}
          <div className="absolute top-0 left-[-5%] text-[20rem] text-rose-300 opacity-15 rotate-[15deg] select-none">✿</div>
          <div className="absolute bottom-[-20%] right-[-10%] text-[25rem] text-rose-300 opacity-20 -rotate-12 select-none">❀</div>
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-100/50 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-[100px] mix-blend-multiply"></div>
        </div>
      );
    case 'features':
      return (
        <div className={baseClass}>
          <div className="absolute top-[20%] right-[10%] text-[8rem] md:text-[15rem] text-emerald-300 opacity-15 rotate-45 select-none">🌿</div>
          <div className="absolute bottom-[10%] left-[-5%] text-[10rem] md:text-[22rem] text-blue-300 opacity-15 -rotate-[30deg] select-none">✾</div>
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] text-white opacity-50 rotate-90 select-none">✿</div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-50/50 rounded-full blur-[60px] md:blur-[120px] mix-blend-multiply"></div>
        </div>
      );
    case 'products':
      return (
        <div className={baseClass}>
          <div className="absolute -top-10 left-[20%] text-[18rem] text-rose-300 opacity-20 rotate-12 select-none">❁</div>
          <div className="absolute top-[40%] right-[-5%] text-[26rem] text-pink-300 opacity-15 -rotate-[60deg] select-none">❀</div>
          <div className="absolute -bottom-20 left-[-10%] text-[30rem] text-orange-300 opacity-15 rotate-[45deg] select-none">✿</div>
          
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-[100px] mix-blend-multiply"></div>
        </div>
      );
    case 'promo':
      return (
        <div className={baseClass}>
          {/* Desktop: Gradient + Large decorations */}
          <div className="hidden md:block">
            <div className="absolute top-[-10%] right-[15%] text-[20rem] text-fuchsia-300 opacity-20 rotate-[20deg] select-none">✽</div>
            <div className="absolute bottom-[-15%] left-[10%] text-[25rem] text-purple-300 opacity-15 -rotate-12 select-none">✾</div>
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-50/50 to-purple-50/50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px]"></div>
          </div>
          
          {/* Mobile: Layered flower silhouettes - rame tapi terstruktur */}
          <div className="md:hidden">
            {/* Layer 1: Corner flowers - Bold */}
            <div className="absolute top-1 right-2 text-[2.5rem] text-pink-300 opacity-35 rotate-[20deg] select-none">🌸</div>
            <div className="absolute bottom-2 left-2 text-[2.5rem] text-rose-300 opacity-35 -rotate-[15deg] select-none">🌷</div>
            
            {/* Layer 2: Side accents - Medium */}
            <div className="absolute top-1/4 right-1 text-[1.5rem] text-pink-200 opacity-30 rotate-45 select-none">✿</div>
            <div className="absolute bottom-1/3 left-0.5 text-[1.5rem] text-rose-200 opacity-28 -rotate-[30deg] select-none">❁</div>
            <div className="absolute top-3/4 right-1 text-[1.5rem] text-pink-300 opacity-25 rotate-12 select-none">💐</div>
            
            {/* Layer 3: Sparkles & small elements - Scattered */}
            <div className="absolute top-2 left-1/3 text-lg text-rose-200 opacity-35 select-none">✦</div>
            <div className="absolute bottom-4 right-1/4 text-sm text-pink-300 opacity-30 select-none">✧</div>
            <div className="absolute top-1/2 left-2 text-base text-rose-300 opacity-25 select-none">🌼</div>
            <div className="absolute bottom-1/4 right-2 text-sm text-pink-200 opacity-28 select-none">✿</div>
            
            {/* Layer 4: Soft background wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-rose-50/25"></div>
          </div>
        </div>
      );
    case 'categories':
      return (
        <div className={baseClass}>
          <div className="absolute top-10 left-[-10%] text-[24rem] text-amber-300 opacity-20 rotate-[45deg] select-none">❀</div>
          <div className="absolute bottom-0 right-[5%] text-[20rem] text-rose-300 opacity-20 -rotate-[30deg] select-none">✿</div>
          
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-50/50 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-50/50 rounded-full blur-[100px] mix-blend-multiply"></div>
        </div>
      );
    case 'testimonials':
      return (
        <div className={baseClass}>
          <div className="absolute top-[10%] right-[-5%] text-[30rem] text-blue-300 opacity-15 rotate-12 select-none">❁</div>
          <div className="absolute bottom-[20%] left-[-10%] text-[25rem] text-indigo-300 opacity-15 -rotate-[45deg] select-none">✾</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45rem] text-white opacity-40 rotate-[60deg] select-none">✿</div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-50/40 rounded-full blur-[120px] mix-blend-multiply"></div>
        </div>
      );
    default:
      return null;
  }
}
