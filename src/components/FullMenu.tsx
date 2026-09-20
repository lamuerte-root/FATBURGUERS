import React, { useState, useMemo } from 'react';
import { Search, Plus, Sparkles, Filter, X } from 'lucide-react';
import { MenuItem, CategoryId } from '../types';

interface FullMenuProps {
  items: MenuItem[];
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  onAddToCart: (item: MenuItem) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const FullMenu: React.FC<FullMenuProps> = ({
  items,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onSelectItem,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  const categories: { id: CategoryId; label: string; icon: string }[] = [
    { id: 'all', label: 'Todos os Itens', icon: '✨' },
    { id: 'burgers', label: 'Hambúrgueres', icon: '🍔' },
    { id: 'doces', label: 'Doces & Sobremesas', icon: '🍰' },
    { id: 'acompanhamentos', label: 'Batatas & Porções', icon: '🍟' },
    { id: 'bebidas', label: 'Bebidas Geladas', icon: '🥤' },
    { id: 'combos', label: 'Combos Especiais', icon: '🍗' },
  ];

  return (
    <section id="menu" className="py-20 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-10">
          <span className="font-script text-3xl sm:text-4xl text-amber-400 block">
            — Escolha seu Prato Favorito —
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-wide">
            NOSSO CARDÁPIO COMPLETO
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            Ingredientes frescos e selecionados, feitos no capricho para a sua melhor experiência gastronômica.
          </p>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              id="input-menu-search"
              type="text"
              placeholder="Buscar por hambúrguer, brownie, batata, cheddar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-500 rounded-2xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
          <span>
            Mostrando <strong>{filteredItems.length}</strong> itens deliciosos
          </span>
          {searchQuery && (
            <span className="text-amber-400">
              Filtro ativo: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 max-w-md mx-auto">
            <Filter className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Nenhum item encontrado</h3>
            <p className="text-zinc-400 text-xs mb-4">
              Não encontramos resultados para sua busca. Tente palavras diferentes ou explore outra categoria!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs"
            >
              Ver todos os itens
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#121216] hover:bg-[#16161c] border border-zinc-800/90 hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Photo & badges */}
                  <div
                    onClick={() => onSelectItem(item)}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-zinc-900 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-amber-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3
                    onClick={() => onSelectItem(item)}
                    className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors cursor-pointer mb-2 leading-snug"
                  >
                    {item.name}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Price and Add CTA */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-zinc-500 block leading-none mb-0.5">Preço</span>
                    <span className="font-display text-2xl font-black text-amber-400">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors"
                    >
                      Detalhes
                    </button>
                    <button
                      id={`btn-menu-add-${item.id}`}
                      onClick={() => onAddToCart(item)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Adicionar</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
