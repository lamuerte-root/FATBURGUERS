import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Clock, ShoppingBag, Check } from 'lucide-react';
import { MenuItem, ProteinChoice, VariationChoice, ExtraAddon } from '../types';
import { AVAILABLE_ADDONS } from '../data/menuData';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCartWithOptions: (
    item: MenuItem,
    quantity: number,
    selectedOptions: Record<string, string>,
    notes: string,
    selectedProtein?: ProteinChoice,
    selectedVariation?: VariationChoice,
    selectedAddons?: ExtraAddon[],
    unitPrice?: number
  ) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  onClose,
  onAddToCartWithOptions,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedProtein, setSelectedProtein] = useState<ProteinChoice | undefined>(() => {
    return item.proteins && item.proteins.length > 0 ? item.proteins[0] : undefined;
  });
  const [selectedVariation, setSelectedVariation] = useState<VariationChoice | undefined>(() => {
    return item.variations && item.variations.length > 0 ? item.variations[0] : undefined;
  });
  const [selectedAddons, setSelectedAddons] = useState<ExtraAddon[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    item.options?.forEach((opt) => {
      if (opt.choices.length > 0) {
        initial[opt.name] = opt.choices[0].label;
      }
    });
    return initial;
  });
  const [notes, setNotes] = useState('');

  // Reset when item changes
  useEffect(() => {
    if (item) {
      setQuantity(1);
      setSelectedProtein(item.proteins && item.proteins.length > 0 ? item.proteins[0] : undefined);
      setSelectedVariation(item.variations && item.variations.length > 0 ? item.variations[0] : undefined);
      setSelectedAddons([]);
      setNotes('');
      const initial: Record<string, string> = {};
      item.options?.forEach((opt) => {
        if (opt.choices.length > 0) {
          initial[opt.name] = opt.choices[0].label;
        }
      });
      setSelectedOptions(initial);
    }
  }, [item]);

  // Compute base price from protein / variation / default price
  let basePrice = item.price;
  if (selectedProtein) {
    basePrice = selectedProtein.price;
  } else if (selectedVariation) {
    basePrice = selectedVariation.price;
  }

  // Calculate extra price from selected options
  let extraOptionsTotal = 0;
  item.options?.forEach((opt) => {
    const currentChoiceLabel = selectedOptions[opt.name];
    const match = opt.choices.find((c) => c.label === currentChoiceLabel);
    if (match && match.extraPrice) {
      extraOptionsTotal += match.extraPrice;
    }
  });

  // Calculate addons total
  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  const unitPrice = basePrice + extraOptionsTotal + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const toggleAddon = (addon: ExtraAddon) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const handleOptionChange = (optionName: string, choiceLabel: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: choiceLabel,
    }));
  };

  const handleConfirm = () => {
    onAddToCartWithOptions(
      item,
      quantity,
      selectedOptions,
      notes,
      selectedProtein,
      selectedVariation,
      selectedAddons,
      unitPrice
    );
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#121216] border border-zinc-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-zinc-300 hover:text-white hover:bg-black/90 flex items-center justify-center backdrop-blur-md transition-colors border border-white/10 shadow-lg"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable container */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Item Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {item.badge && (
              <span className="absolute top-3 left-3 bg-amber-500 text-zinc-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                {item.badge}
              </span>
            )}
            {item.prepTime && (
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-zinc-200 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {item.prepTime}
              </div>
            )}
          </div>

          {/* Item Title & Price */}
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                {item.name}
              </h3>
              <span className="font-display text-2xl sm:text-3xl font-black text-amber-400 shrink-0">
                R$ {unitPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* 1. Protein Selection (Boi, Frango, Filé Mignon) */}
          {item.proteins && item.proteins.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  1. Escolha a Carne / Proteína (Obrigatório)
                </span>
                <span className="text-[10px] text-zinc-400">Selecione 1</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.proteins.map((p, idx) => {
                  const isSelected = selectedProtein?.name === p.name;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedProtein(p)}
                      className={`flex flex-col p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-white shadow-md shadow-amber-500/10'
                          : 'bg-zinc-900/70 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-bold text-sm">{p.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <span className="font-display text-base font-black text-amber-400">
                        R$ {p.price.toFixed(2).replace('.', ',')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Variations (Flavors / Sizes for doces, bolos, salgadinhos) */}
          {item.variations && item.variations.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Opções / Sabores / Tamanhos
                </span>
                <span className="text-[10px] text-zinc-400">Selecione 1</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {item.variations.map((v, idx) => {
                  const isSelected = selectedVariation?.name === v.name;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedVariation(v)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-white'
                          : 'bg-zinc-900/70 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-amber-500 bg-amber-500 text-zinc-950' : 'border-zinc-600'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{v.name}</span>
                      </div>
                      <span className="font-display text-base font-bold text-amber-400">
                        R$ {v.price.toFixed(2).replace('.', ',')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. Adicionais & Extras (Cheddar, Catupiry, Bacon, Queijo, etc.) */}
          {(item.allowsCustomization || item.category === 'classicos' || item.category === 'especiais') && (
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Deseja Adicionais? (Opcional)
                </span>
                <span className="text-[10px] text-zinc-400">Adicione ao seu gosto</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AVAILABLE_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.some((a) => a.id === addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs transition-all ${
                        isChecked
                          ? 'bg-amber-500/15 border-amber-500 text-white'
                          : 'bg-zinc-900/50 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-amber-500 border-amber-500 text-zinc-950' : 'border-zinc-700'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium text-xs">{addon.name}</span>
                      </div>
                      <span className="font-bold text-amber-400">
                        + R$ {addon.price.toFixed(2).replace('.', ',')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. Special Options if available */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-4 pt-2 border-t border-zinc-800">
              {item.options.map((opt, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    {opt.name}
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {opt.choices.map((choice, cIdx) => {
                      const isSelected = selectedOptions[opt.name] === choice.label;
                      return (
                        <label
                          key={cIdx}
                          className={`flex items-center justify-between p-3 rounded-xl border text-sm cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500 text-white'
                              : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name={opt.name}
                              checked={isSelected}
                              onChange={() => handleOptionChange(opt.name, choice.label)}
                              className="text-amber-500 focus:ring-amber-500"
                            />
                            <span>{choice.label}</span>
                          </div>
                          {choice.extraPrice ? (
                            <span className="text-xs font-bold text-amber-400">
                              + R$ {choice.extraPrice.toFixed(2).replace('.', ',')}
                            </span>
                          ) : null}
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 5. Special Notes / Observações */}
          <div className="space-y-2 pt-2 border-t border-zinc-800">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
              Observações para a cozinha
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Tirar cebola, maionese à parte, ponto da carne, caprichar no molho..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-zinc-200 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
            />
          </div>
        </div>

        {/* Footer: Quantity & Confirm Add */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center gap-3 sm:gap-4">
          <div className="flex items-center border border-zinc-800 rounded-xl bg-zinc-900 p-1 shrink-0">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800"
              aria-label="Diminuir"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-white text-sm">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800"
              aria-label="Aumentar"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 flex items-center justify-between px-4 sm:px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <ShoppingBag className="w-4 h-4 text-zinc-950" />
              <span>Adicionar ao Pedido</span>
            </span>
            <span className="font-display text-base sm:text-lg font-black">
              R$ {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
