import React from 'react';
import { CategoryId } from '../types';

interface CategoryBarProps {
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const categories: {
    id: CategoryId;
    icon: string;
    title: string;
    subtitle: string;
    badge?: string;
  }[] = [
    {
      id: 'classicos',
      icon: '🍔',
      title: 'CLÁSSICOS',
      subtitle: 'Boi, Frango & Filé Mignon',
      badge: 'ARTESANAL',
    },
    {
      id: 'especiais',
      icon: '👑',
      title: 'ESPECIAIS',
      subtitle: 'Da Casa, Burguer Fat & Tonzada',
      badge: 'FAVORITOS',
    },
    {
      id: 'combos',
      icon: '🔥',
      title: 'COMBOS FAT',
      subtitle: 'Com Lanche + Batata + Refri',
      badge: 'ECONOMIZE',
    },
    {
      id: 'sobremesas',
      icon: '🍰',
      title: 'DOCES & SOBREMESAS',
      subtitle: 'Copos, Vulcão, Tortas & Potes',
      badge: 'DOCERIA',
    },
    {
      id: 'acompanhamentos',
      icon: '🍟',
      title: 'ACOMPANHAMENTOS',
      subtitle: 'Batatas, Churros & Mini Salgados',
    },
    {
      id: 'bebidas',
      icon: '🥤',
      title: 'BEBIDAS GELADAS',
      subtitle: '2L, 1L, Latas, H2O & Sucos',
    },
  ];

  return (
    <div className="relative -mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Floating Light/Dark Container with official aesthetic */}
      <div className="bg-zinc-900/95 backdrop-blur-xl rounded-3xl p-3 sm:p-4 shadow-2xl shadow-black/80 border border-zinc-800">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl transition-all duration-200 text-center group ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/25 scale-[1.03] ring-2 ring-amber-400'
                    : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-100 hover:border-amber-500/40 border border-zinc-700/50'
                }`}
              >
                {cat.badge && (
                  <span
                    className={`absolute -top-2.5 px-2 py-0.5 rounded-full text-[8.5px] font-black tracking-wider uppercase shadow-sm ${
                      isActive
                        ? 'bg-zinc-950 text-amber-400 border border-zinc-800'
                        : 'bg-amber-500 text-zinc-950'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
                
                {/* Large Emoji / Icon */}
                <div className="text-2xl sm:text-3xl mb-1 transform group-hover:scale-110 transition-transform duration-200">
                  {cat.icon}
                </div>

                {/* Category Title */}
                <span
                  className={`font-display text-xs sm:text-sm tracking-wide uppercase font-black ${
                    isActive ? 'text-zinc-950' : 'text-zinc-100'
                  }`}
                >
                  {cat.title}
                </span>

                {/* Subtitle */}
                <span
                  className={`text-[10px] leading-tight font-medium line-clamp-1 ${
                    isActive ? 'text-zinc-950/80 font-semibold' : 'text-zinc-400'
                  }`}
                >
                  {cat.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
