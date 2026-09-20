import React, { useState } from 'react';
import { ShoppingBag, Clock, Menu, X, PhoneCall, Sparkles } from 'lucide-react';
import logoImg from '../assets/images/fat_burguer_logo_1789944510522.jpg';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c0c0f]/95 backdrop-blur-md border-b border-zinc-800/80 transition-all duration-200">
      {/* Top micro bar with delivery info and store status */}
      <div className="hidden sm:flex items-center justify-between px-4 lg:px-8 py-1.5 bg-gradient-to-r from-amber-950/40 via-zinc-900 to-amber-950/40 border-b border-zinc-800/40 text-xs">
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Aberto Agora • Delivery até 23h30
          </span>
          <span className="hidden md:inline text-zinc-500">|</span>
          <span className="hidden md:flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Tempo médio de entrega: 30-40 min
          </span>
        </div>
        <div className="flex items-center gap-3 text-zinc-300">
          <span className="flex items-center gap-1 text-amber-400">
            <Sparkles className="w-3 h-3" />
            Cupom: <strong className="text-white bg-amber-500/20 border border-amber-500/40 px-1.5 py-0.5 rounded font-mono">FAT20</strong> (20% OFF)
          </span>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20FatBurguers!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-amber-500" />
            WhatsApp Delivery
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative w-13 h-13 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-amber-400 via-amber-600 to-orange-600 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <img
              src={logoImg}
              alt="FATBURGUERS Logo"
              className="w-full h-full object-cover rounded-xl bg-zinc-950"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display text-3xl font-extrabold tracking-wider text-white group-hover:text-amber-400 transition-colors">
                FATBURGUERS
              </span>
            </div>
            <p className="text-[11px] font-semibold text-amber-500/90 tracking-widest uppercase">
              Hambúrguer & Doces Artesanais
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <button
            onClick={() => handleNavClick('hero')}
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick('menu')}
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Cardápio
          </button>
          <button
            onClick={() => handleNavClick('bestsellers')}
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Mais Vendidos
          </button>
          <button
            onClick={() => handleNavClick('desserts')}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors py-1"
          >
            Doces & Taças
            <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded-full font-bold">
              TOP
            </span>
          </button>
          <button
            onClick={() => handleNavClick('offers')}
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Ofertas & Cupom
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Nossa História
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Avaliações
          </button>
        </nav>

        {/* CTA Button: Pedir Online / Carrinho */}
        <div className="flex items-center gap-3">
          <button
            id="btn-open-cart"
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-500/25 active:scale-95 transition-all duration-200"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-zinc-950" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline font-bold">Pedir Online</span>
            {cartTotal > 0 && (
              <span className="hidden md:inline bg-zinc-950/20 px-2 py-0.5 rounded text-xs font-mono font-bold">
                R$ {cartTotal.toFixed(2).replace('.', ',')}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-base text-zinc-200">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 border-b border-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left py-2 border-b border-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              Cardápio Completo
            </button>
            <button
              onClick={() => handleNavClick('bestsellers')}
              className="text-left py-2 border-b border-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              Mais Vendidos (Bestsellers)
            </button>
            <button
              onClick={() => handleNavClick('desserts')}
              className="text-left py-2 border-b border-zinc-800/60 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              Doces, Brownies & Shakes 🍰
            </button>
            <button
              onClick={() => handleNavClick('offers')}
              className="text-left py-2 border-b border-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              Cupom de 20% OFF
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              Sobre a FATBURGUERS
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left py-2 hover:text-amber-400 transition-colors"
            >
              Depoimentos de Clientes
            </button>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="text-emerald-400 font-semibold">● Pedidos abertos agora</span>
            <span>Entrega 30-40 min</span>
          </div>
        </div>
      )}
    </header>
  );
};
