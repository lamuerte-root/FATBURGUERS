import React from 'react';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Bike, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/images/fat_burguer_logo_official.svg';
import { STORE_INFO } from '../data/menuData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-[#08080a] border-t border-zinc-800 text-zinc-400 text-sm">
      
      {/* Top Value Banner */}
      <div className="border-b border-zinc-900 py-8 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Bike className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Entrega Rápida & Quentinha</h4>
              <p className="text-xs text-zinc-500">Tempo médio de {STORE_INFO.tempoEstimado} em {STORE_INFO.cidade}.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Carnes & Doces Selecionados</h4>
              <p className="text-xs text-zinc-500">Opções de Boi, Frango e Filé Mignon + doces artesanais.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Horário de Atendimento</h4>
              <p className="text-xs text-zinc-500">{STORE_INFO.horario}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center p-1 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-md">
                <img
                  src={logoImg}
                  alt="FATBURGUERS Logo Real Oficial"
                  className="w-full h-full object-contain filter drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-black text-white tracking-wider">
                  {STORE_INFO.nome}
                </span>
                <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                  {STORE_INFO.slogan}
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              O autêntico sabor de Laje do Muriaé: lanches clássicos suculentos com Boi, Frango ou Filé Mignon, hambúrgueres especiais da casa, batatas crocantes e sobremesas deliciosas!
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 hover:text-amber-400 text-zinc-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 hover:text-amber-400 text-zinc-300 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 hover:text-amber-400 text-zinc-300 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Clássicos (Boi/Frango/Filé)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Especiais da Casa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Combos Fat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('desserts')}
                  className="hover:text-amber-400 transition-colors text-amber-400 font-semibold"
                >
                  Doces & Sobremesas 🍰
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Acompanhamentos & Batatas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Bebidas Geladas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Funcionamento
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-zinc-200 font-semibold block">Terça a Domingo:</span>
                <span className="text-zinc-400">{STORE_INFO.horario}</span>
              </div>
              <div>
                <span className="text-zinc-200 font-semibold block">Entrega Delivery:</span>
                <span className="text-zinc-400">{STORE_INFO.tempoEstimado}</span>
              </div>
              <div>
                <span className="text-zinc-200 font-semibold block">Segunda-feira:</span>
                <span className="text-amber-400 font-medium">Fechado</span>
              </div>
            </div>
          </div>

          {/* Col 5: Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Localização & Contato
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.endereco}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{STORE_INFO.whatsappFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>fatburguersdelivery@gmail.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20FatBurguers!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Pedir no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 FAT BURGUERS. Todos os direitos reservados. {STORE_INFO.cidade}.</p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-600">Hamburgueria & Doceria Oficial</span>
            <span>•</span>
            <span className="text-emerald-500 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Cardápio Completo Sincronizado
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
