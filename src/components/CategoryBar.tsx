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
      id: 'burgers',
      icon: '🍔',
      title: 'BURGERS',
      subtitle: 'Suculentos & Artesanais',
    },
    {
      id: 'doces',
      icon: '🍰',
      title: 'DOCES & TAÇAS',
      subtitle: 'Brownies, Shakes & Churros',
      badge: 'DESTAQUE',
    },
    {
      id: 'acompanhamentos',
      icon: '🍟',
      title: 'BATATAS & PETISCOS',
      subtitle: 'Crocantes & Douradas',
    },
    {
      id: 'bebidas',
      icon: '🥤',
      title: 'BEBIDAS',
      subtitle: 'Geladas & Refrescantes',
    },
    {
      id: 'combos',
      icon: '🍗',
      title: 'COMBOS FAT',
      subtitle: 'Com Super Desconto',
      badge: 'ECONOMIZE',
    },
  ];

  return (
    <div className="relative -mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Floating White/Light Container matching the reference design */}
      <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-2xl shadow-black/60 border border-zinc-200">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl transition-all duration-200 text-center group ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30 scale-[1.02]'
                    : 'bg-zinc-50 hover:bg-amber-50/80 text-zinc-800'
                }`}
              >
                {cat.badge && (
                  <span
                    className={`absolute -top-2 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase shadow-sm ${
                      isActive
                        ? 'bg-zinc-950 text-amber-400'
                        : 'bg-amber-500 text-zinc-950'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
                
                {/* Large Emoji / Icon */}
                <div className="text-3xl sm:text-4xl mb-1.5 transform group-hover:scale-110 transition-transform duration-200">
                  {cat.icon}
                </div>

                {/* Category Title */}
                <span
                  className={`font-display text-base sm:text-lg tracking-wide uppercase font-black ${
                    isActive ? 'text-zinc-950' : 'text-zinc-900'
                  }`}
                >
                  {cat.title}
                </span>

                {/* Subtitle */}
                <span
                  className={`text-[11px] leading-tight font-medium ${
                    isActive ? 'text-zinc-900/90 font-semibold' : 'text-zinc-500'
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
