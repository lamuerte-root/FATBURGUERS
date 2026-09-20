import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="font-script text-3xl sm:text-4xl text-amber-400 block">
            — Quem Prova, Apaixona —
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-wide">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-400 text-sm font-semibold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-zinc-300">4.9 de 5 baseado em mais de 1.800 avaliações no Google & iFood</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#121216] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between relative shadow-lg hover:border-amber-500/30 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-zinc-700" />
                </div>

                {/* Comment text */}
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Favorite item */}
              <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-amber-500/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs text-zinc-400">{review.role}</p>
                  <span className="text-[11px] text-amber-400/90 font-medium block mt-0.5">
                    Item favorito: {review.favoriteItem}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
