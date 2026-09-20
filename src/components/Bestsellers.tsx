import React from 'react';
import { Plus, Flame, Clock } from 'lucide-react';
import { MenuItem } from '../types';

interface BestsellersProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({
  items,
  onAddToCart,
  onSelectItem,
}) => {
  return (
    <section id="bestsellers" className="py-20 bg-[#0c0c0f] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-amber-500/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching the reference ("Popular Picks / OUR BESTSELLERS") */}
        <div className="text-center space-y-2 mb-12">
          <p className="font-script text-2xl sm:text-3xl text-amber-400 drop-shadow-sm">
            — Escolhas Mais Pedidas —
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-amber-500/80" />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-wider text-white">
              OS MAIS VENDIDOS
            </h2>
            <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-amber-500/80" />
          </div>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            Os queridinhos dos clientes: nossos hambúrgueres mais premiados e as sobremesas mais desejadas.
          </p>
        </div>

        {/* Bestseller Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#131317] hover:bg-[#18181f] border border-zinc-800 hover:border-amber-500/60 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div>
                {/* Image Container with Badge */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Badge in top left corner (e.g. BEST SELLER) */}
                  {item.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-amber-500 text-zinc-950 shadow-md">
                        <Flame className="w-3 h-3 fill-zinc-950" />
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {item.prepTime && (
                    <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-sm text-zinc-300 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {item.prepTime}
                    </div>
                  )}
                </div>

                {/* Title and Ingredients */}
                <h3
                  onClick={() => onSelectItem(item)}
                  className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1 mb-1.5"
                >
                  {item.name}
                </h3>

                <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Price & Add Button */}
              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500 block leading-none mb-0.5">Preço</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-2xl font-black text-amber-400">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-zinc-500 line-through">
                        R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Circular Gold '+' Button matching the reference */}
                <button
                  id={`btn-add-bestseller-${item.id}`}
                  onClick={() => onAddToCart(item)}
                  aria-label={`Adicionar ${item.name}`}
                  className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 flex items-center justify-center shadow-lg shadow-amber-500/25 active:scale-90 transition-all duration-200"
                >
                  <Plus className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
