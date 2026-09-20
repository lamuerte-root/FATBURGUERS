import React from 'react';
import { Sparkles, Heart, Plus, Award } from 'lucide-react';
import { MenuItem } from '../types';
import dessertsHeroImg from '../assets/images/fat_desserts_hero_1789944538614.jpg';

interface DessertSpotlightProps {
  dessertItems: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const DessertSpotlight: React.FC<DessertSpotlightProps> = ({
  dessertItems,
  onAddToCart,
  onSelectItem,
}) => {
  const signatureDessert = dessertItems.find((d) => d.id === 'doce-copo-da-felicidade') || dessertItems[0];
  const otherDesserts = dessertItems.filter((d) => d.id !== signatureDessert?.id).slice(0, 3);

  return (
    <section id="desserts" className="py-20 bg-gradient-to-b from-[#0c0c0f] via-[#111115] to-[#0c0c0f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="font-script text-3xl sm:text-4xl text-amber-400 drop-shadow-sm block">
            — Doceria & Sobremesas Artesanais —
          </span>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 sm:w-20 bg-amber-500/60" />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-wider text-white">
              DOCES & SOBREMESAS FAT
            </h2>
            <div className="h-[2px] w-12 sm:w-20 bg-amber-500/60" />
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Aqui na FATBURGUERS os doces são feitos com muito carinho: Copos da Felicidade, Bolos Vulcão, Bolos de Pote e Tortas Geladas preparadas artesanalmente!
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Card: Signature Copo da Felicidade */}
          <div className="lg:col-span-7 bg-[#16161c] border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl group hover:border-amber-500/60 transition-all duration-300">
            <div className="relative z-10 space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-zinc-950">
                  <Sparkles className="w-3.5 h-3.5 fill-zinc-950" />
                  Sensação da Cidade
                </span>
                <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Mais de 1.000 pedidos
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {signatureDessert?.name}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base mt-2 leading-relaxed max-w-xl">
                  {signatureDessert?.description} Vários sabores e tamanhos (300ml e 500ml) com Nutella, Ninho, Morango, Uva, Kinder Bueno e Kit Kat.
                </p>
              </div>

              {/* Photo Showcase */}
              <div
                onClick={() => signatureDessert && onSelectItem(signatureDessert)}
                className="relative aspect-video sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-zinc-700/60"
              >
                <img
                  src={dessertsHeroImg}
                  alt={signatureDessert?.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-amber-300 border border-amber-500/30">
                  🍓 Nutella, Leite Ninho, Morangos Frescos & Kinder
                </div>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="pt-6 mt-4 border-t border-zinc-800 flex items-center justify-between relative z-10">
              <div>
                <span className="text-xs text-zinc-400 block">A partir de</span>
                <span className="font-display text-3xl font-black text-amber-400">
                  R$ {signatureDessert?.price.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                id="btn-add-signature-dessert"
                onClick={() => signatureDessert && onSelectItem(signatureDessert)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Escolher Sabor</span>
              </button>
            </div>

          </div>

          {/* Right Column: Other Signature Sweets */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {otherDesserts.map((item) => (
              <div
                key={item.id}
                className="bg-[#131317] hover:bg-[#18181f] border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-4 transition-all duration-200 flex gap-4 items-center group"
              >
                {/* Image */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-zinc-900 shrink-0 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {item.badge && (
                    <span className="inline-block text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                      {item.badge}
                    </span>
                  )}
                  <h4
                    onClick={() => onSelectItem(item)}
                    className="font-bold text-white group-hover:text-amber-400 transition-colors text-sm sm:text-base line-clamp-1 cursor-pointer"
                  >
                    {item.name}
                  </h4>
                  <p className="text-zinc-400 text-xs line-clamp-2 mt-0.5 mb-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-amber-400">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                    <button
                      onClick={() => onSelectItem(item)}
                      aria-label={`Personalizar ${item.name}`}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-400 hover:text-zinc-950 font-bold text-xs flex items-center gap-1 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Ver</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}

            {/* Banner highlight */}
            <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-xs text-zinc-300">
                <strong className="text-amber-400 font-bold block">Entrega Rápida:</strong>
                Doces embalados com todo o cuidado para chegarem perfeitos na sua casa!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
