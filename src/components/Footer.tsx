import React from 'react';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Bike, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/images/fat_burguer_logo_1789944510522.jpg';

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
              <p className="text-xs text-zinc-500">Média de 30 a 40 minutos em caixas térmicas.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Ingredientes de Primeira</h4>
              <p className="text-xs text-zinc-500">Carne 100% Angus e doces com cacau belga autêntico.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Atendimento Noturno</h4>
              <p className="text-xs text-zinc-500">Terça a Domingo: 18h00 às 23h30.</p>
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
              <div className="w-12 h-12 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-amber-400 to-orange-600 shadow-md">
                <img
                  src={logoImg}
                  alt="FATBURGUERS"
                  className="w-full h-full object-cover rounded-xl bg-zinc-950"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-black text-white tracking-wider">
                  FATBURGUERS
                </span>
                <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                  Hamburgueria & Doces Artesanais
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Especialistas em saciar sua fome com hambúrgueres artesanais suculentos, batatas ultra crocantes e as sobremesas mais generosas e saborosas que você já conheceu.
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
                href="https://wa.me/5511999999999"
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
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Cardápio Completo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bestsellers')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Os Mais Vendidos
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
                  onClick={() => onNavigate('offers')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Cupom 20% OFF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Quem Somos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Horário & Delivery
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-zinc-200 font-semibold block">Terça a Domingo:</span>
                <span className="text-zinc-500">18:00 às 23:30</span>
              </div>
              <div>
                <span className="text-zinc-200 font-semibold block">Sexta e Sábado:</span>
                <span className="text-zinc-500">18:00 às 00:30</span>
              </div>
              <div>
                <span className="text-zinc-200 font-semibold block">Segunda-feira:</span>
                <span className="text-rose-400/90 font-medium">Fechado para descanso da equipe</span>
              </div>
            </div>
          </div>

          {/* Col 5: Contact & Download App */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Fale Conosco
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Rua Gastronômica, 1200 - Centro, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contato@fatburguers.com.br</span>
              </div>
            </div>

            {/* App download badges matching reference layout */}
            <div className="pt-2 space-y-1.5">
              <span className="text-[11px] font-bold text-zinc-300 block">
                Peça também pelo App:
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                  <span>🍏</span>
                  <div>
                    <span className="text-[8px] text-zinc-500 block leading-none">Download on the</span>
                    <span className="font-bold text-white">App Store</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                  <span>🤖</span>
                  <div>
                    <span className="text-[8px] text-zinc-500 block leading-none">Disponível no</span>
                    <span className="font-bold text-white">Google Play</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 FATBURGUERS Delivery. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-600">Hamburgueria & Doces Artesanais</span>
            <span>•</span>
            <span className="text-emerald-500 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Sistema de Pedidos Online 100% Operacional
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
