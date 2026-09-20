import { MenuItem, Testimonial } from '../types';
import dessertsHeroImg from '../assets/images/fat_desserts_hero_1789944538614.jpg';
import heroBurgerImg from '../assets/images/fat_hero_burger_1789944526775.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // --- BURGERS ---
  {
    id: 'fat-signature',
    name: 'Fat Signature Cheddar',
    category: 'burgers',
    description: 'Dois smash burgers de 160g de blend Angus, cheddar inglês cremoso derretido, fatias de bacon crocante caramelizado e maionese secreta da casa no pão brioche amanteigado.',
    price: 36.90,
    originalPrice: 42.90,
    image: heroBurgerImg,
    badge: 'Mais Vendido',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Artesanal', 'Duplo Smash', 'Cheddar Inglês'],
    options: [
      {
        name: 'Ponto da Carne',
        choices: [{ label: 'Ao Ponto (Rosado e Suculento)' }, { label: 'Bem Passado' }]
      },
      {
        name: 'Adicionais',
        choices: [
          { label: 'Sem adicionais', extraPrice: 0 },
          { label: 'Bacon Crispy Extra (+R$ 5,00)', extraPrice: 5.00 },
          { label: 'Melt de Cheddar Extra (+R$ 6,00)', extraPrice: 6.00 },
          { label: 'Hambúrguer Extra 160g (+R$ 10,00)', extraPrice: 10.00 }
        ]
      }
    ]
  },
  {
    id: 'fat-smash-bacon',
    name: 'Fat Bacon Supreme',
    category: 'burgers',
    description: 'Blend bovino grelhado na brasa, fatias generosas de bacon artesanal defumado em lenha de macieira, cebola caramelizada no shoyu e queijo provolone tostado.',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorito',
    isBestseller: true,
    prepTime: '15 min',
    tags: ['Defumado', 'Bacon Artesanal', 'Cebola Roxa'],
    options: [
      {
        name: 'Ponto da Carne',
        choices: [{ label: 'Ao Ponto' }, { label: 'Bem Passado' }]
      }
    ]
  },
  {
    id: 'fat-truffled',
    name: 'Fat Truffle & Cogumelos',
    category: 'burgers',
    description: 'Hambúrguer 180g de costela Angus, fondue de queijo gouda cremoso, cogumelos salteados na manteiga de ervas e aioli trufado em pão brioche dourado.',
    price: 41.90,
    originalPrice: 47.90,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef Special',
    isBestseller: false,
    prepTime: '18 min',
    tags: ['Gourmet', 'Azeite Trufado', 'Gouda']
  },
  {
    id: 'fat-chicken-crisp',
    name: 'Fat Crispy Chicken',
    category: 'burgers',
    description: 'Sobrecoxa de frango marinada por 24h e empanada com casquinha crocante super sequinha, salada coleslaw artesanal, picles da casa e maionese picante de sriracha.',
    price: 31.90,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    badge: 'Super Crocante',
    isBestseller: true,
    prepTime: '15 min',
    tags: ['Frango Crocante', 'Sriracha Honey', 'Coleslaw']
  },
  {
    id: 'fat-monster-triple',
    name: 'Fat Monster Triplo Smash',
    category: 'burgers',
    description: 'Para quem tem fome de verdade: 3 smash burgers prensados com crostinha tostada perfeita, triplo queijo prato, cebola braseada e molho barbecue rústico.',
    price: 44.90,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    badge: 'Gigante',
    isBestseller: false,
    prepTime: '20 min',
    tags: ['Triplo Smash', 'Molho Barbecue', 'Massa Monstruosa']
  },

  // --- DOCES & SOBREMESAS (ESPECIALIDADE FATBURGUERS) ---
  {
    id: 'doce-brownie-fudge',
    name: 'Taça Brownie Fudge Supreme',
    category: 'doces',
    description: 'Nosso clássico artesanal: Brownie quentinho e denso de cacau 70%, bola generosa de sorvete de baunilha Bourbon, calda quente de fudge de chocolate belga e avelãs tostadas.',
    price: 26.90,
    originalPrice: 31.00,
    image: dessertsHeroImg,
    badge: 'Especial da Casa',
    isBestseller: true,
    prepTime: '10 min',
    tags: ['Chocolate Belga', 'Quente & Frio', 'Cacau 70%']
  },
  {
    id: 'doce-milkshake-pistache',
    name: 'Milk-shake de Pistache Puro & Doce de Leite',
    category: 'doces',
    description: 'Batido na hora com sorvete cremoso de baunilha, pasta pura de pistache italiano, borda generosa de doce de leite argentino e chantilly fresco com pistaches triturados.',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Pedido',
    isBestseller: true,
    prepTime: '8 min',
    tags: ['Pistache', 'Doce de Leite', 'Chantilly']
  },
  {
    id: 'doce-churros-artesanais',
    name: 'Mini Churros Fat Crispy',
    category: 'doces',
    description: 'Porção com 8 mini churros quentinhos, passados na canela com açúcar cristal refinado, servidos com potinhos individuais de Nutella e doce de leite de colher.',
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=800&q=80',
    badge: 'Crocante',
    isBestseller: true,
    prepTime: '10 min',
    tags: ['Nutella', 'Canela & Açúcar', 'Para Compartilhar']
  },
  {
    id: 'doce-cookies-recheado',
    name: 'Fat Cookie Vulcão de Nutella',
    category: 'doces',
    description: 'Cookie americano de 140g assado no ponto perfeito, com massa amanteigada e gotas de chocolate, recheado com uma avalanche de Nutella morna.',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    badge: 'Novo',
    isBestseller: false,
    prepTime: '8 min',
    tags: ['Recheio Quente', 'Massa Amanteigada']
  },
  {
    id: 'doce-torta-banoffee',
    name: 'Banoffee Fat no Pote',
    category: 'doces',
    description: 'Camadas de biscoito artesanal crocante na manteiga, doce de leite cozido suave, rodelas de banana fresca selecionada e chantilly aerado com raspas de cacau.',
    price: 21.90,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    badge: 'Sobremesa do Dia',
    isBestseller: false,
    prepTime: '5 min',
    tags: ['Banoffee', 'Pote Individual', 'Chantilly Aerado']
  },

  // --- ACOMPANHAMENTOS & PETISCOS ---
  {
    id: 'side-batata-rustica-cheddar',
    name: 'Loaded Fries Cheddar & Bacon',
    category: 'acompanhamentos',
    description: 'Batatas palito crocantes e douradas cobertas com cascata de queijo cheddar cremoso derretido e pedacinhos crocantes de bacon frito.',
    price: 23.90,
    originalPrice: 28.00,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    badge: 'Campeã de Vendas',
    isBestseller: true,
    prepTime: '12 min',
    tags: ['Cheddar Cremoso', 'Bacon Crispy', 'Crocante']
  },
  {
    id: 'side-onion-rings',
    name: 'Onion Rings Crocantes com Aioli',
    category: 'acompanhamentos',
    description: 'Anéis de cebola doce empanados em massa temperada com páprica defumada, fritos até o ponto dourado. Acompanha molho aioli da casa.',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1639024471287-032f66e744d0?auto=format&fit=crop&w=800&q=80',
    badge: 'Crocante',
    isBestseller: false,
    prepTime: '10 min',
    tags: ['Onion Rings', 'Molho Aioli']
  },
  {
    id: 'side-nuggets-gourmet',
    name: 'Coxas & Strips de Frango Empanadas',
    category: 'acompanhamentos',
    description: 'Tiras generosas de peito de frango temperadas com chimichurri e crosta de flocos de milho. Acompanha barbecue de goiabada picante.',
    price: 25.90,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    badge: 'Petisco',
    isBestseller: false,
    prepTime: '12 min',
    tags: ['Frango Crocante', 'Barbecue de Goiabada']
  },

  // --- BEBIDAS ---
  {
    id: 'drink-soda-artesanal',
    name: 'Soda Italiana de Frutas Vermelhas',
    category: 'bebidas',
    description: 'Refrescante água com gás com xarope artesanal de amora, framboesa e morango fresco, fatias de limão siciliano e hortelã.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    badge: 'Refrescante',
    isBestseller: false,
    prepTime: '5 min',
    tags: ['Frutas Vermelhas', 'Sem Álcool']
  },
  {
    id: 'drink-coca-gelada',
    name: 'Coca-Cola Zero / Original Lata 350ml',
    category: 'bebidas',
    description: 'Servida trincando de gelada com rodela de limão e gelo em copo especial.',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    isBestseller: false,
    prepTime: '2 min',
    tags: ['Lata', 'Gelada']
  },
  {
    id: 'drink-suco-natural-laranja',
    name: 'Suco Natural da Fruta 500ml',
    category: 'bebidas',
    description: 'Laranja, Maracujá ou Morango com Limão espremidos na hora sem adição de conservantes.',
    price: 11.90,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    isBestseller: false,
    prepTime: '5 min',
    tags: ['Natural', 'Sem Açúcar Adicionado']
  },

  // --- COMBOS ---
  {
    id: 'combo-fat-duplo',
    name: 'Combo Fat Clássico: Burger + Fritas + Bebida',
    category: 'combos',
    description: '1 Fat Signature Cheddar ou Bacon + 1 Batata Frita individual crocante + 1 Refrigerante lata à sua escolha.',
    price: 49.90,
    originalPrice: 58.00,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    badge: 'Economize R$ 8,10',
    isBestseller: true,
    prepTime: '15 min',
    tags: ['Mais Econômico', 'Completo']
  },
  {
    id: 'combo-burger-doce',
    name: 'Combo Fat & Sweet: Burger + Batata + Brownie',
    category: 'combos',
    description: 'A união perfeita do nosso negócio: 1 Burger à escolha + 1 Porção de Batatas + 1 Taça Brownie Fudge Supreme com sorvete.',
    price: 64.90,
    originalPrice: 75.90,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Completo',
    isBestseller: true,
    prepTime: '18 min',
    tags: ['Sal + Doce', 'Experiência Completa']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Lucas Ferreira',
    role: 'Cliente VIP no Delivery',
    comment: 'O Fat Signature Cheddar é simplesmente inacreditável! Carne no ponto certo, bacon hiper crocante e o delivery chegou em 28 minutos quentinho. E ainda pedi o brownie fudge de sobremesa, surreal!',
    rating: 5,
    favoriteItem: 'Fat Signature Cheddar & Brownie Fudge',
    date: 'Ontem',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Camila Mendonça',
    role: 'Food Blogger Local',
    comment: 'Difícil achar uma hamburgueria que entregue a mesma perfeição tanto nos burgers quanto nos doces! O milkshake de pistache com doce de leite é o melhor da cidade.',
    rating: 5,
    favoriteItem: 'Milk-shake de Pistache & Fat Bacon',
    date: 'Há 3 dias',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'Rodrigo Albuquerque',
    role: 'Cliente Frequente',
    comment: 'Pedi o combo família no fim de semana. As batatas com cheddar e bacon continuaram super crocantes no trajeto. Atendimento pelo WhatsApp nota 10!',
    rating: 5,
    favoriteItem: 'Loaded Fries & Fat Monster Triplo',
    date: 'Há 5 dias',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80'
  }
];
