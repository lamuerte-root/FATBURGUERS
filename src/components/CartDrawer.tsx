import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Bike, Store, Sparkles, Send, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  appliedCoupon: string;
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onApplyCoupon: (code: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  appliedCoupon,
  onUpdateQuantity,
  onRemoveItem,
  onApplyCoupon,
}) => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'takeout'>('delivery');
  const [couponInput, setCouponInput] = useState(appliedCoupon);
  const [couponFeedback, setCouponFeedback] = useState<string | null>(null);
  
  // Customer checkout info
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'cash'>('pix');
  const [cashChange, setCashChange] = useState('');

  if (!isOpen) return null;

  // Calculate totals accurately using item.unitPrice
  const subtotal = items.reduce((acc, item) => {
    const itemPrice = item.unitPrice || item.menuItem.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  const isCouponValid = appliedCoupon.toUpperCase() === 'FAT20';
  const discountAmount = isCouponValid ? subtotal * 0.2 : 0;
  
  const deliveryFee = deliveryType === 'takeout' || subtotal >= 60 ? 0 : 5.00;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim().toUpperCase() === 'FAT20') {
      onApplyCoupon('FAT20');
      setCouponFeedback('Cupom de 20% OFF aplicado com sucesso!');
    } else {
      setCouponFeedback('Cupom inválido. Experimente FAT20');
    }
  };

  const handleCheckoutViaWhatsApp = () => {
    if (!customerName.trim()) {
      alert('Por favor, informe seu nome para o pedido.');
      return;
    }
    if (deliveryType === 'delivery' && !address.trim()) {
      alert('Por favor, informe o endereço de entrega completo com bairro e ponto de referência.');
      return;
    }

    let message = `🍔 *NOVO PEDIDO - ${STORE_INFO.nome}* 🍔\n`;
    message += `---------------------------------\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    if (customerPhone) message += `📞 *WhatsApp:* ${customerPhone}\n`;
    message += `🛵 *Tipo:* ${deliveryType === 'delivery' ? 'Entrega Delivery' : 'Retirada no Balcão'}\n`;
    if (deliveryType === 'delivery') {
      message += `📍 *Endereço de Entrega:* ${address}\n`;
    }
    message += `\n📋 *ITENS DO PEDIDO:*\n`;

    items.forEach((item, index) => {
      const priceUnit = item.unitPrice || item.menuItem.price;
      const totalItem = priceUnit * item.quantity;
      message += `${index + 1}. *${item.quantity}x ${item.menuItem.name}* (R$ ${totalItem.toFixed(2).replace('.', ',')})\n`;
      
      if (item.selectedProtein) {
        message += `   🥩 *Carne:* ${item.selectedProtein.name}\n`;
      }
      if (item.selectedVariation) {
        message += `   🍰 *Opção:* ${item.selectedVariation.name}\n`;
      }
      if (item.selectedAddons && item.selectedAddons.length > 0) {
        const addonsList = item.selectedAddons.map((a) => a.name).join(', ');
        message += `   ➕ *Adicionais:* ${addonsList}\n`;
      }
      if (item.selectedOptions && Object.keys(item.selectedOptions).length > 0) {
        Object.entries(item.selectedOptions).forEach(([k, v]) => {
          message += `   ↳ ${k}: ${v}\n`;
        });
      }
      if (item.notes) {
        message += `   📝 *Obs:* ${item.notes}\n`;
      }
    });

    message += `\n💰 *RESUMO DO PEDIDO:*\n`;
    message += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (discountAmount > 0) {
      message += `Desconto (${appliedCoupon}): -R$ ${discountAmount.toFixed(2).replace('.', ',')}\n`;
    }
    message += `Taxa de Entrega: ${deliveryFee === 0 ? 'GRÁTIS' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}\n`;
    message += `*TOTAL A PAGAR: R$ ${grandTotal.toFixed(2).replace('.', ',')}*\n\n`;

    message += `💳 *Forma de Pagamento:* ${
      paymentMethod === 'pix'
        ? 'Pix'
        : paymentMethod === 'card'
        ? 'Cartão (Levar maquininha)'
        : `Dinheiro ${cashChange ? `(Troco para R$ ${cashChange})` : '(Sem troco)'}`
    }\n`;
    message += `---------------------------------\n`;
    message += `Obrigado por pedir na ${STORE_INFO.nome}! 🚀`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#101014] border-l border-zinc-800 text-zinc-100 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-white leading-none">
                  SEU CARRINHO
                </h3>
                <span className="text-xs text-zinc-400">
                  {items.length} {items.length === 1 ? 'item' : 'itens'} adicionados
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-4xl">
                  🍔
                </div>
                <h4 className="font-display text-2xl font-bold text-white">
                  Seu carrinho está vazio
                </h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  Dê uma olhada nos nossos hambúrgueres e doces e monte seu pedido no capricho!
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20"
                >
                  Explorar Cardápio
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  {items.map((item) => {
                    const priceUnit = item.unitPrice || item.menuItem.price;
                    return (
                      <div
                        key={item.id}
                        className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-3.5 flex gap-3 items-start"
                      >
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-16 h-16 rounded-xl object-cover bg-zinc-950 shrink-0 border border-zinc-800"
                          referrerPolicy="no-referrer"
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-bold text-white text-sm line-clamp-1">
                              {item.menuItem.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-zinc-500 hover:text-red-400 p-1 transition-colors"
                              aria-label="Remover item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Selected Protein */}
                          {item.selectedProtein && (
                            <p className="text-[11px] font-semibold text-amber-400">
                              🥩 Carne: {item.selectedProtein.name}
                            </p>
                          )}

                          {/* Selected Variation */}
                          {item.selectedVariation && (
                            <p className="text-[11px] font-semibold text-amber-300">
                              🍰 {item.selectedVariation.name}
                            </p>
                          )}

                          {/* Selected Addons */}
                          {item.selectedAddons && item.selectedAddons.length > 0 && (
                            <p className="text-[10px] text-zinc-300">
                              ➕ {item.selectedAddons.map((a) => a.name).join(', ')}
                            </p>
                          )}

                          {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                            <p className="text-[10px] text-zinc-400">
                              {Object.values(item.selectedOptions).join(' • ')}
                            </p>
                          )}

                          {item.notes && (
                            <p className="text-[10px] text-zinc-400 italic line-clamp-1">
                              Obs: {item.notes}
                            </p>
                          )}

                          <div className="flex items-center justify-between mt-2 pt-1 border-t border-zinc-800/80">
                            <span className="font-display text-base font-black text-amber-400">
                              R$ {(priceUnit * item.quantity).toFixed(2).replace('.', ',')}
                            </span>

                            <div className="flex items-center border border-zinc-700/80 rounded-lg bg-zinc-950 px-1 py-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-1 text-zinc-400 hover:text-white"
                                aria-label="Diminuir quantidade"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-6 text-center text-xs font-bold text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-1 text-zinc-400 hover:text-white"
                                aria-label="Aumentar quantidade"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Delivery Type Switcher */}
                <div className="space-y-2 pt-2 border-t border-zinc-800">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    Tipo de Entrega
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('delivery')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-bold transition-all border ${
                        deliveryType === 'delivery'
                          ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Bike className="w-4 h-4" />
                      <span>Delivery ({STORE_INFO.tempoEstimado})</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('takeout')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-bold transition-all border ${
                        deliveryType === 'takeout'
                          ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>Retirada Balcão</span>
                    </button>
                  </div>
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-2 border-t border-zinc-800">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    Dados do Cliente
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp para contato (DDD + Número) *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                  {deliveryType === 'delivery' && (
                    <input
                      type="text"
                      placeholder="Endereço de entrega (Rua, Número, Bairro, Referência) *"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  )}
                </div>

                {/* Coupon Code Section */}
                <div className="pt-2 border-t border-zinc-800 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    Cupom de Desconto
                  </label>
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Insira cupom (ex: FAT20)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      className="flex-1 p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white uppercase font-mono placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl font-bold text-xs bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                  {couponFeedback && (
                    <p
                      className={`text-[11px] font-semibold ${
                        isCouponValid ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {couponFeedback}
                    </p>
                  )}
                  {isCouponValid && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                      <Sparkles className="w-3 h-3" />
                      Cupom <strong>FAT20</strong> ativo: 20% OFF concedido!
                    </div>
                  )}
                </div>

                {/* Payment Method */}
                <div className="space-y-2 pt-2 border-t border-zinc-800">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    Forma de Pagamento
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-2.5 rounded-xl font-bold border text-center transition-all ${
                        paymentMethod === 'pix'
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      ⚡ Pix
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl font-bold border text-center transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      💳 Cartão
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cash')}
                      className={`p-2.5 rounded-xl font-bold border text-center transition-all ${
                        paymentMethod === 'cash'
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      💵 Dinheiro
                    </button>
                  </div>

                  {paymentMethod === 'cash' && (
                    <input
                      type="text"
                      placeholder="Precisa de troco para quanto? (Deixe em branco se não precisar)"
                      value={cashChange}
                      onChange={(e) => setCashChange(e.target.value)}
                      className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500"
                    />
                  )}
                </div>

              </>
            )}

          </div>

          {/* Footer Totals & WhatsApp Button */}
          {items.length > 0 && (
            <div className="p-5 bg-zinc-950 border-t border-zinc-800 space-y-3">
              <div className="space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-zinc-200">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto (20% OFF):</span>
                    <span className="font-mono">
                      - R$ {discountAmount.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Taxa de Entrega:</span>
                  <span className="font-mono text-zinc-200">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400 font-bold">GRÁTIS</span>
                    ) : (
                      `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Total a Pagar:</span>
                  <span className="font-display text-2xl font-black text-amber-400">
                    R$ {grandTotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Concluir Pedido via WhatsApp */}
              <button
                id="btn-checkout-whatsapp"
                onClick={handleCheckoutViaWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-zinc-950 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all uppercase tracking-wide"
              >
                <Send className="w-4 h-4 text-zinc-950" />
                <span>Enviar Pedido pelo WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
