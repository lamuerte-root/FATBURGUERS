import React from 'react';
import { ArrowRight, Play, Flame, Award, ShieldCheck, Heart } from 'lucide-react';
import heroBurgerImg from '../assets/images/fat_hero_burger_1789944526775.jpg';
import logoImg from '../assets/images/fat_burguer_logo_official.svg';

interface HeroProps {
  onOrderNow: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onExploreMenu }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-20 lg:pt-12 lg:pb-28 bg-[#0b0b0e]">
      {/* Subtle background ambient radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Script Cursive Eyebrow matching the reference ("Craving Something") */}
            <div className="inline-block">
              <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                Bateu aquela fome?
              </span>
            </div>

            {/* Giant Punchy Headline matching the reference ("DELICIOUS BURGERS") */}
            <div className="space-y-1">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white">
                <span className="block italic text-zinc-100 font-serif font-light text-4xl sm:text-5xl md:text-6xl tracking-normal">
                  Suculentos &
                </span>
                <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 drop-shadow-md">
                  FAT BURGERS
                </span>
              </h1>
            </div>

            {/* Pill Tag with amber dots: [ QUENTE • FRESCO • ARTESANAL ] */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs sm:text-sm font-semibold text-zinc-300 tracking-wider">
                <span className="text-amber-400 font-bold">QUENTE</span>
                <span className="text-amber-500">•</span>
                <span className="text-amber-400 font-bold">FRESCO</span>
                <span className="text-amber-500">•</span>
                <span className="text-amber-400 font-bold">100% ARTESANAL</span>
              </div>
            </div>

            {/* Subtitle / Description */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Smash burgers artesanais prensados na chapa de ferro com crosta perfeita, 
              queijo cheddar derretido e nossas famosas <strong className="text-amber-400 font-medium">sobremesas e brownies</strong> que 
              transformam qualquer momento em um banquete.
            </p>

            {/* Action Buttons matching the reference */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-order-now-btn"
                onClick={onOrderNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base bg-gradient-to-r from-amber-500 via-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 shadow-xl shadow-amber-500/25 active:scale-95 transition-all duration-200 uppercase tracking-wide group"
              >
                <span>Pedir Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-amber-500/50 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Play className="w-3 h-3 fill-amber-400 translate-x-0.5" />
                </div>
                <span>Ver Cardápio Completo</span>
              </button>
            </div>

            {/* Trust Mini Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Carne 100% Angus Certificada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Pães Assados Diariamente</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Doces Feitos por Confeiteiro</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Food Composition & Circular Stamp */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* The circular brand stamp badge with official logo */}
            <div className="absolute -top-3 left-4 sm:left-8 md:left-12 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-amber-400/80 bg-zinc-950/95 backdrop-blur-md p-1.5 flex flex-col items-center justify-center text-center shadow-xl shadow-amber-500/20 rotate-[-12deg] group hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full rounded-full border border-amber-500/40 flex flex-col items-center justify-center p-1.5 relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
                <img
                  src={logoImg}
                  alt="Selo FATBURGUERS Original"
                  className="w-full h-full object-contain filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Food Image Container with slate dark base, warm rim lights & glow */}
            <div className="relative w-full max-w-lg lg:max-w-none group">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900 to-[#0c0c0e] shadow-2xl shadow-amber-500/10">
                <img
                  src={heroBurgerImg}
                  alt="FatBurguer Cheeseburger Artesanal com Fritas e Refri"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient overlay on bottom to seamlessly blend into dark background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating review card in bottom corner */}
              <div className="absolute -bottom-5 right-2 sm:right-6 bg-zinc-900/95 border border-zinc-700/80 rounded-2xl p-3.5 shadow-xl backdrop-blur-md flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <span>★ 4.9</span>
                    <span className="text-zinc-400 font-normal">/ 5.0</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 font-medium leading-tight mt-0.5">
                    Eleito o melhor burger & sobremesas da região
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
