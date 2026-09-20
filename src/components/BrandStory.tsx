import React from 'react';
import { Flame, Sparkles, UtensilsCrossed, ShieldCheck, Heart } from 'lucide-react';
import logoImg from '../assets/images/fat_burguer_logo_1789944510522.jpg';

export const BrandStory: React.FC = () => {
  const pillars = [
    {
      icon: <Flame className="w-6 h-6 text-orange-400" />,
      title: 'Blend Angus Moído Todo Dia',
      desc: 'Carne 100% nobre, sem misturas ou aditivos. Prensamos cada hambúrguer na chapa ultra quente para criar a crostinha caramelizada perfeita (reação de Maillard).'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: 'Pães Brioche de Fermentação Natural',
      desc: 'Nossos pães são assados artesanalmente todas as manhãs. Fofinhos, dourados e tostados na manteiga clarificada antes de montar o seu burger.'
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: 'Doces de Verdadeira Confeitaria',
      desc: 'Não somos apenas mais uma hamburgueria. Criamos sobremesas autorais com chocolate belga, doce de leite argentino e frutas frescas que encantam.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Embalagem Térmica Especial',
      desc: 'Desenvolvemos caixas com respiro inteligente que retêm o calor do hambúrguer e a crocância das batatas até a porta da sua casa.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0c0c0f] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Logo & Quality Badge */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              Nossa Identidade & Paixão
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="w-36 h-36 rounded-3xl p-1 bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 shadow-2xl shadow-amber-500/20">
                <img
                  src={logoImg}
                  alt="FATBURGUERS Brand Badge"
                  className="w-full h-full object-cover rounded-[22px] bg-zinc-950"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
                A EXPERIÊNCIA <span className="text-amber-400">FATBURGUERS</span>
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Nascemos com um propósito claro: entregar a combinação dos sonhos para quem ama comer bem.
                O melhor hambúrguer artesanal da sua vida, acompanhado pelos doces e taças mais irresistíveis que você já provou.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-zinc-800">
              <div>
                <span className="font-display text-3xl font-black text-amber-400 block">
                  +18k
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">Burgers Entregues</span>
              </div>
              <div>
                <span className="font-display text-3xl font-black text-amber-400 block">
                  4.9★
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">Avaliação Média</span>
              </div>
              <div>
                <span className="font-display text-3xl font-black text-amber-400 block">
                  35 min
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">Entrega Express</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Quality Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121217] border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl p-5 space-y-3 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-base">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
