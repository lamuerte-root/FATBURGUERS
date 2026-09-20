import React, { useState } from 'react';
import { Copy, Check, Bike, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface DeliveryPromoBannerProps {
  onApplyCoupon: (code: string) => void;
  onOrderNow: () => void;
}

export const DeliveryPromoBanner: React.FC<DeliveryPromoBannerProps> = ({
  onApplyCoupon,
  onOrderNow,
}) => {
  const [copied, setCopied] = useState(false);
  const couponCode = 'FAT20';

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    onApplyCoupon(couponCode);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="offers" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Bright Amber/Orange Gradient Banner matching the reference */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 p-6 sm:p-10 lg:p-12 text-zinc-950 shadow-2xl shadow-amber-500/20">
        
        {/* Subtle decorative background dashed curved road trail lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 300" fill="none">
            <path
              d="M-50,200 C200,100 400,280 700,150 C850,90 950,200 1050,150"
              stroke="#000"
              strokeWidth="4"
              strokeDasharray="12 12"
            />
            <path
              d="M0,120 C300,50 500,220 800,100 C900,60 1000,180 1100,120"
              stroke="#000"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Block: Slogan & Delivery speed */}
          <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/15 text-xs font-black uppercase tracking-wider text-zinc-950">
              <Bike className="w-4 h-4" />
              <span>Delivery Exclusivo & Rápido</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-script text-3xl sm:text-4xl text-zinc-950 block drop-shadow-sm">
                Bateu a fome?
              </span>
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-[0.95]">
                Nós Levamos Até Você!
              </h3>
            </div>

            <p className="text-zinc-900 text-sm font-medium max-w-md">
              Embalagens térmicas especiais desenvolvidas para manter o pão fofinho, a carne suculenta e as batatas crocantes.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-zinc-900">
              <div className="flex items-center gap-1.5 bg-zinc-950/10 px-3 py-1.5 rounded-lg">
                <Clock className="w-4 h-4" />
                <span>30 - 40 minutos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-950/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>Entrega 100% Segura</span>
              </div>
            </div>
          </div>

          {/* Middle: Motorbike / Scooter Graphic Illustration */}
          <div className="lg:col-span-3 flex justify-center items-center py-2 lg:py-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Pulsing glow circle */}
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl scale-75" />
              
              {/* Stylized Scooter Illustration using SVG */}
              <div className="relative z-10 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-zinc-950/10 border-2 border-zinc-950/20 flex flex-col items-center justify-center p-4">
                  <span className="text-6xl sm:text-7xl drop-shadow-md">🛵</span>
                  <span className="mt-1 text-[11px] font-black uppercase tracking-widest text-zinc-950 bg-amber-300 px-2 py-0.5 rounded shadow-sm">
                    FAT MOTOBOY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: 20% OFF Coupon Card matching reference */}
          <div className="lg:col-span-4 bg-white/95 rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/80 text-center space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-700 tracking-wider uppercase block">
                Oferta Especial de Lançamento
              </span>
              <div className="font-display text-4xl sm:text-5xl font-black text-zinc-950 leading-none mt-1">
                GANHE 20% OFF
              </div>
              <p className="text-xs font-semibold text-zinc-600 mt-1">
                Válido para o seu primeiro pedido no site!
              </p>
            </div>

            {/* Click to Copy Coupon Code */}
            <div className="space-y-2">
              <button
                id="btn-copy-coupon"
                onClick={handleCopy}
                className="w-full flex items-center justify-between px-4 py-3 bg-zinc-100 hover:bg-amber-50 border-2 border-dashed border-amber-500 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="font-mono font-black text-lg text-zinc-900 tracking-wider">
                    {couponCode}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Copiar</span>
                    </>
                  )}
                </div>
              </button>

              <p className="text-[11px] text-zinc-500">
                {copied
                  ? '✨ Cupom aplicado automaticamente no seu carrinho!'
                  : 'Clique para copiar o código ou aplique diretamente'}
              </p>
            </div>

            {/* Action button */}
            <button
              id="btn-use-coupon-now"
              onClick={() => {
                handleCopy();
                onOrderNow();
              }}
              className="w-full py-3 px-4 rounded-xl font-black text-sm bg-zinc-950 hover:bg-zinc-800 text-white shadow-lg active:scale-95 transition-all"
            >
              Aproveitar 20% de Desconto
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
