import { MenuItem, Testimonial, ExtraAddon } from '../types';
import dessertsHeroImg from '../assets/images/fat_desserts_hero_1789944538614.jpg';
import heroBurgerImg from '../assets/images/fat_hero_burger_1789944526775.jpg';

export const STORE_INFO = {
  nome: 'FAT BURGUERS',
  slogan: 'Hamburgueria & Doceria Artesanal',
  horario: '18:00 - 23:00 (Terça a Domingo)',
  endereco: 'Rua Ferreira César, 229 - Centro - Laje do Muriaé - RJ',
  cidade: 'Laje do Muriaé - RJ',
  whatsapp: '5522996129941',
  whatsappFormatted: '(22) 99612-9941',
  tempoEstimado: '30-45 min',
  taxaEntrega: 'Grátis no Centro / Consulte seu bairro',
};

export const AVAILABLE_ADDONS: ExtraAddon[] = [
  { id: 'add-cheddar', name: 'Cheddar Cremoso', price: 3.00, category: 'Queijos & Molhos' },
  { id: 'add-catupiry', name: 'Catupiry Original', price: 3.00, category: 'Queijos & Molhos' },
  { id: 'add-barbecue', name: 'Molho Barbecue Especial', price: 1.00, category: 'Queijos & Molhos' },
  { id: 'add-bacon', name: 'Bacon Crocante em Fatias', price: 4.00, category: 'Carnes & Proteínas' },
  { id: 'add-queijo', name: 'Fatia Extra de Queijo', price: 4.00, category: 'Queijos & Molhos' },
  { id: 'add-presunto', name: 'Fatia de Presunto', price: 2.00, category: 'Carnes & Proteínas' },
  { id: 'add-bife-boi', name: 'Bife de Boi Artesanal Extra', price: 5.00, category: 'Carnes & Proteínas' },
  { id: 'add-bife-frango', name: 'Bife de Frango Artesanal Extra', price: 5.00, category: 'Carnes & Proteínas' },
  { id: 'add-ovo', name: 'Ovo Frito na Chapa', price: 2.00, category: 'Carnes & Proteínas' },
  { id: 'add-calabresa', name: 'Calabresa Fatiada Dourada', price: 4.00, category: 'Carnes & Proteínas' },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. CLÁSSICOS (HAMBÚRGUERES TRADICIONAIS COM ESCOLHA DE PROTEÍNA: BOI / FRANGO / FILÉ MIGNON)
  // ==========================================
  {
    id: 'hamburguer-classico',
    name: 'HAMBURGUER',
    category: 'classicos',
    description: 'Pão macio selado na chapa, carne artesanal suculenta, salada fresca, batata palha crocante e milho verde.',
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Tradicional',
    isBestseller: false,
    prepTime: '15-20 min',
    tags: ['Artesanal', 'Batata Palha', 'Salada Fresca'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 13.00 },
      { name: 'Frango', price: 17.00 },
      { name: 'Filé Mignon', price: 16.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'x-burguer-classico',
    name: 'X-BURGUER',
    category: 'classicos',
    description: 'Pão selado, carne artesanal, queijo derretido de dar água na boca, salada fresca, batata palha e milho.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorito',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Queijo Derretido', 'Artesanal'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 16.00 },
      { name: 'Frango', price: 17.00 },
      { name: 'Filé Mignon', price: 20.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'burguer-bacon-classico',
    name: 'BURGUERBACON',
    category: 'classicos',
    description: 'Pão brioche, carne artesanal grelhada, generosas fatias de bacon crocante, salada selecionada, batata palha e milho.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    badge: 'Crocante',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Bacon Crocante', 'Sabor Defumado'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 16.00 },
      { name: 'Frango', price: 18.00 },
      { name: 'Filé Mignon', price: 20.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'presunto-burguer-classico',
    name: 'PRESUNTO BURGUER',
    category: 'classicos',
    description: 'Pão fresquinho, carne artesanal, fatias de presunto de primeira qualidade, salada, batata palha e milho.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
    badge: 'Clássico',
    isBestseller: false,
    prepTime: '15-20 min',
    tags: ['Presunto', 'Artesanal'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 15.00 },
      { name: 'Frango', price: 17.00 },
      { name: 'Filé Mignon', price: 19.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'egg-burguer-classico',
    name: 'EGG BURGUER',
    category: 'classicos',
    description: 'Pão selado, carne artesanal, ovo frito no capricho com gema macia, salada, batata palha e milho.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    badge: 'Com Ovo',
    isBestseller: false,
    prepTime: '15-20 min',
    tags: ['Ovo Frito', 'Super Macio'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 15.00 },
      { name: 'Frango', price: 17.00 },
      { name: 'Filé Mignon', price: 19.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'x-salada-classico',
    name: 'X-SALADA',
    category: 'classicos',
    description: 'Pão, carne artesanal, queijo prato derretido, presunto, salada completa, batata palha e milho verde.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    badge: 'Tradicional',
    isBestseller: false,
    prepTime: '15-20 min',
    tags: ['Queijo & Presunto', 'Salada'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 17.00 },
      { name: 'Frango', price: 19.00 },
      { name: 'Filé Mignon', price: 21.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'egg-bacon-classico',
    name: 'EGGBACON',
    category: 'classicos',
    description: 'A união perfeita: Pão, carne artesanal, ovo frito na chapa, bacon crocante defumado, salada, batata e milho.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Combinação',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Ovo & Bacon', 'Defumado'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 17.00 },
      { name: 'Frango', price: 19.00 },
      { name: 'Filé Mignon', price: 21.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'egg-x-burguer-classico',
    name: 'EGG-X-BURGUER',
    category: 'classicos',
    description: 'Pão selado, carne artesanal, ovo frito na chapa, queijo derretido especial, salada, batata palha e milho.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Pedido',
    isBestseller: false,
    prepTime: '15-20 min',
    tags: ['Ovo & Queijo', 'Suculento'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 17.00 },
      { name: 'Frango', price: 19.00 },
      { name: 'Filé Mignon', price: 22.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'egg-x-salada-classico',
    name: 'EGG-X-SALADA',
    category: 'classicos',
    description: 'Pão, carne artesanal, ovo frito, presunto, queijo derretido, salada fresca, batata palha e milho.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&w=800&q=80',
    badge: 'Completo',
    isBestseller: false,
    prepTime: '15-20 min',
    tags: ['Ovo', 'Queijo', 'Presunto'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 18.00 },
      { name: 'Frango', price: 20.00 },
      { name: 'Filé Mignon', price: 23.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'x-bacon-classico',
    name: 'X-BACON',
    category: 'classicos',
    description: 'Pão macio, carne artesanal, muito bacon crocante, presunto selecionado, queijo derretido, salada, batata e milho.',
    price: 21.00,
    image: heroBurgerImg,
    badge: 'Campeão de Vendas',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Muito Bacon', 'Queijo Derretido', 'Presunto'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 21.00 },
      { name: 'Frango', price: 23.00 },
      { name: 'Filé Mignon', price: 26.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'egg-x-bacon-classico',
    name: 'EGG-X-BACON',
    category: 'classicos',
    description: 'Pão quentinho, carne artesanal, ovo frito com gema perfeita, bacon crocante, queijo derretido, salada, batata palha e milho.',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?auto=format&fit=crop&w=800&q=80',
    badge: 'Super Sabor',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Ovo', 'Bacon', 'Queijo'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 22.00 },
      { name: 'Frango', price: 24.00 },
      { name: 'Filé Mignon', price: 27.00 }
    ],
    allowsCustomization: true
  },
  {
    id: 'x-tudo-classico',
    name: 'X-TUDO',
    category: 'classicos',
    description: 'O monstro dos lanches: Pão, carne artesanal, ovo, bacon fatiado, presunto, queijo derretido, salada farta, batata palha crocante e milho.',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Gigante Clássico',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Completo com Tudo', 'Bacon', 'Ovo', 'Queijo', 'Presunto'],
    allowsProteins: true,
    proteins: [
      { name: 'Boi', price: 24.00 },
      { name: 'Frango', price: 25.00 },
      { name: 'Filé Mignon', price: 28.00 }
    ],
    allowsCustomization: true
  },

  // ==========================================
  // 2. ESPECIAIS & COMBOS DA FATBURGUERS
  // ==========================================
  {
    id: 'especial-da-casa',
    name: 'DA CASA',
    category: 'especiais',
    description: 'O maior da casa! Pão especial, 3 carnes fartas (2 de boi e 1 de frango), 2 ovos, 2 porções de bacon, 2 presuntos, 2 queijos, salada, batata e milho.',
    price: 37.00,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    badge: 'O Campeão da Casa',
    isBestseller: true,
    prepTime: '20 min',
    tags: ['3 Carnes (Boi e Frango)', '2x Ovos', '2x Bacon', '2x Queijo'],
    allowsCustomization: true
  },
  {
    id: 'especial-burguer-fat',
    name: 'BURGUER FAT',
    category: 'especiais',
    description: 'Pão selado, 2 bifes suculentos (boi e frango), ovo frito na chapa, bacon crocante, queijo derretido farto, salada fresca e milho.',
    price: 32.00,
    image: heroBurgerImg,
    badge: 'Especial FAT',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['Duplo Bife (Boi + Frango)', 'Bacon', 'Ovo', 'Queijo'],
    allowsCustomization: true
  },
  {
    id: 'especial-x-tonzada',
    name: 'X-TONZADA',
    category: 'especiais',
    description: 'Pão farto, 2 carnes de boi, ovo, fatias de bacon, calabresa tostada, presunto, queijo derretido, cobertura de cheddar cremoso, salada, batata e milho.',
    price: 34.00,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    badge: 'Super Recheado',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['2x Boi', 'Calabresa', 'Cheddar Cremoso', 'Bacon'],
    allowsCustomization: true
  },
  {
    id: 'especial-bacon-burguer-barbecue',
    name: 'BACON-BURGUER-BARBECUE',
    category: 'especiais',
    description: 'Pão tostado, carne artesanal, generosas fatias de bacon crocante, queijo derretido, toque marcante de molho barbecue artesanal, salada, batata e milho.',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    badge: 'Molho Barbecue',
    isBestseller: false,
    prepTime: '15-20 min',
    tags: ['Molho Barbecue', 'Bacon Fatiado', 'Queijo'],
    allowsCustomization: true
  },
  {
    id: 'especial-americano',
    name: 'AMERICANO',
    category: 'especiais',
    description: 'Pão tradicional selado na manteiga, 2 ovos fritos na chapa, 2 queijos derretidos, salada fresca, batata palha e milho.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&w=800&q=80',
    badge: 'Leve & Saboroso',
    isBestseller: false,
    prepTime: '12 min',
    tags: ['2x Ovos', '2x Queijos', 'Sem Carne'],
    allowsCustomization: true
  },
  {
    id: 'especial-misto-quente',
    name: 'MISTO',
    category: 'especiais',
    description: 'Pão de forma especial dourado e crocante na chapa com fatias generosas de presunto e queijo derretido.',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    badge: 'Pão de Forma',
    isBestseller: false,
    prepTime: '10 min',
    tags: ['Pão de Forma', 'Presunto & Queijo']
  },
  {
    id: 'especial-misto-bacon',
    name: 'MISTO COM BACON',
    category: 'especiais',
    description: 'Pão de forma tostado na chapa, recheado com bacon crocante sequinho, presunto e queijo derretido.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    badge: 'Bacon Crocante',
    isBestseller: false,
    prepTime: '10 min',
    tags: ['Bacon', 'Presunto', 'Queijo']
  },
  {
    id: 'especial-misto-ovo',
    name: 'MISTO COM OVO',
    category: 'especiais',
    description: 'Pão de forma douradinho na manteiga com ovo frito na chapa, presunto e queijo cremoso.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    badge: 'Com Ovo',
    isBestseller: false,
    prepTime: '10 min',
    tags: ['Ovo na Chapa', 'Presunto', 'Queijo']
  },
  {
    id: 'especial-queijo-quente',
    name: 'QUEIJO QUENTE',
    category: 'especiais',
    description: 'Pão de forma crocante tostado com dobro de queijo derretido esticando até a última mordida.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    badge: 'Puro Queijo',
    isBestseller: false,
    prepTime: '10 min',
    tags: ['Dobro de Queijo', 'Crocante']
  },
  {
    id: 'combo-furioso',
    name: 'COMBO FURIOSO',
    category: 'combos',
    description: '1 X-TUDO completo + Porção individual de Batata Frita quentinha + 1 Refrigerante Lata 350ml gelado.',
    price: 31.90,
    originalPrice: 38.00,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    badge: 'Combo Individual Top',
    isBestseller: true,
    prepTime: '15-20 min',
    tags: ['1x X-Tudo', 'Batata Frita', 'Refri Lata']
  },
  {
    id: 'combo-love-bacon',
    name: 'COMBO LOVE BACON',
    category: 'combos',
    description: '2 X-BACON super recheados + Porção farta de Batata Frita + 10 Mini Churros com doce de leite + 2 Refrigerantes Lata gelados.',
    price: 64.90,
    originalPrice: 79.90,
    image: heroBurgerImg,
    badge: 'Combo para 2',
    isBestseller: true,
    prepTime: '20 min',
    tags: ['2x X-Bacon', 'Batata Frita', '10 Mini Churros', '2x Refri Lata']
  },
  {
    id: 'combo-black-premium',
    name: 'COMBO BLACK PREMIUM',
    category: 'combos',
    description: 'Banquete para a família e amigos: 3 X-TUDO artesanais + Batata Frita + 15 Mini Salgadinhos fritos + 15 Mini Churros crocantes + 1 Refrigerante 2 Litros.',
    price: 104.90,
    originalPrice: 129.90,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    badge: 'Mega Combo Família',
    isBestseller: true,
    prepTime: '25 min',
    tags: ['3x X-Tudo', 'Batata Frita', '15 Salgadinhos', '15 Churros', 'Refri 2L']
  },
  {
    id: 'combo-dono-do-jogo',
    name: 'COMBO DONO DO JOGO',
    category: 'combos',
    description: 'Monte como quiser: Batata Frita crocante + 5 Mini Churros + 6 Mini Salgadinhos + 1 Refri Lata por apenas R$ 17,99 adicionado ao lanche que você escolher.',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
    badge: 'Monte o Combo',
    isBestseller: false,
    prepTime: '15 min',
    tags: ['Batata + 5 Churros + 6 Salgadinhos + Refri']
  },

  // ==========================================
  // 3. SOBREMESAS & DOCES (CARDÁPIO DE DOCERIA FATBURGUERS)
  // ==========================================
  {
    id: 'doce-copo-da-felicidade',
    name: 'COPO DA FELICIDADE',
    category: 'sobremesas',
    description: 'Camadas super cremosas em copo cristal. Escolha o tamanho e o sabor irresistível:',
    price: 20.00,
    image: dessertsHeroImg,
    badge: 'Sensação',
    isBestseller: true,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Camadas Cremosas', 'Nutella', 'Ninho', 'Frutas'],
    hasVariations: true,
    variations: [
      { name: '300ml — Uva com Ninho e Ganache', price: 20.00 },
      { name: '300ml — Morango com Ninho e Nutella', price: 20.00 },
      { name: '300ml — Kinder Bueno Supreme', price: 20.00 },
      { name: '500ml — Uva com Brigadeiro e Ninho', price: 25.00 },
      { name: '500ml — Kit Kat com Creme de Ninho', price: 25.00 }
    ]
  },
  {
    id: 'doce-torta-gelada',
    name: 'TORTA GELADA CREMOSA',
    category: 'sobremesas',
    description: 'Fatia generosa de torta gelada artesanal: Morango com Nutella e Ninho.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    badge: 'Super Recheada',
    isBestseller: true,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Morango', 'Nutella Pura', 'Leite Ninho'],
    hasVariations: true,
    variations: [
      { name: 'Morango com Nutella e Ninho', price: 17.00 }
    ]
  },
  {
    id: 'doce-bolo-vulcao',
    name: 'BOLO VULCÃO',
    category: 'sobremesas',
    description: 'Bolo fofinho recheado com cascata de calda cremosa e quente no centro. Escolha o sabor dos sonhos:',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    badge: 'Cascata de Recheio',
    isBestseller: true,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Bolo Quente', 'Massa Fofinha', 'Calda Vulcão'],
    hasVariations: true,
    variations: [
      { name: 'Ninho com Nutella', price: 15.00 },
      { name: 'Ninho, Nutella e Morango', price: 15.00 },
      { name: 'Ninho com Morango', price: 15.00 },
      { name: 'Brigadeiro Belga Gourmet', price: 15.00 },
      { name: 'Frutas Vermelhas com Ninho', price: 15.00 },
      { name: 'Cookies & Cream', price: 15.00 }
    ]
  },
  {
    id: 'doce-mini-vulcao',
    name: 'BOLO MINI VULCÃO',
    category: 'sobremesas',
    description: 'Versão individual perfeita do nosso bolo vulcão com recheio escorrendo e cobertura generosa:',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    badge: 'Individual',
    isBestseller: false,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Tamanho Individual', 'Muito Recheio'],
    hasVariations: true,
    variations: [
      { name: 'Ferrero Rocher Gourmet', price: 15.00 },
      { name: 'Ninho, Morango e Nutella', price: 15.00 },
      { name: 'Ninho com Morango', price: 15.00 },
      { name: 'Frutas Vermelhas com Ninho', price: 15.00 }
    ]
  },
  {
    id: 'doce-bolo-de-pote',
    name: 'BOLO DE POTE',
    category: 'sobremesas',
    description: 'Camadas intercaladas de bolo macio e molhadinho, recheio farto e cobertura premium no pote de acrílico:',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    badge: 'Clássico no Pote',
    isBestseller: true,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Bolo Molhadinho', 'Camadas Fartas'],
    hasVariations: true,
    variations: [
      { name: 'Ninho com Nutella (Massa Branca)', price: 14.00 },
      { name: 'Ninho com Morango Fresco', price: 14.00 },
      { name: 'Ferrero Rocher Crocante', price: 14.00 }
    ]
  },
  {
    id: 'doce-pave',
    name: 'PAVÊ DE NINHO COM NUTELLA',
    category: 'sobremesas',
    description: 'Pavê artesanal ultra cremoso preparado com creme de leite Ninho, biscoitos embebidos e generosa camada de Nutella.',
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    badge: 'Cremoso',
    isBestseller: false,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Leite Ninho', 'Nutella', 'Geladinho']
  },
  {
    id: 'doce-pudim-250g',
    name: 'PUDIM TRADICIONAL 250G',
    category: 'sobremesas',
    description: 'Pudim clássico de leite condensado super lisinho e cremoso, com calda de caramelo dourada no ponto ideal. Pote de 250g.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80',
    badge: 'Receita da Vovó',
    isBestseller: true,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Leite Condensado', 'Sem Furinhos', 'Calda de Caramelo']
  },
  {
    id: 'barra-galak',
    name: 'BARRA DE CHOCOLATE GALAK (80g)',
    category: 'sobremesas',
    description: 'Barra original de chocolate branco Nestlé Galak cremosa e saborosa de 80g.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    badge: 'Nestlé',
    isBestseller: false,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Chocolate Branco', '80g']
  },
  {
    id: 'barra-alpino',
    name: 'BARRA DE CHOCOLATE ALPINO (80g)',
    category: 'sobremesas',
    description: 'Barra original de chocolate ao leite suíço Alpino Nestlé com o sabor marcante e inconfundível de 80g.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80',
    badge: 'Nestlé',
    isBestseller: false,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Chocolate ao Leite', '80g']
  },
  {
    id: 'barra-oreo-branco',
    name: 'BARRA CHOCOLATE OREO BRANCO (80g)',
    category: 'sobremesas',
    description: 'Deliciosa barra de chocolate branco crocante com pedacinhos de biscoito Oreo de 80g.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80',
    badge: 'Lacta / Oreo',
    isBestseller: false,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Oreo Crocante', 'Chocolate Branco']
  },
  {
    id: 'barra-oreo-preto',
    name: 'BARRA CHOCOLATE OREO PRETO (80g)',
    category: 'sobremesas',
    description: 'Cremoso chocolate ao leite combinado com o autêntico e crocante biscoito Oreo de 80g.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80',
    badge: 'Lacta / Oreo',
    isBestseller: false,
    prepTime: 'Pronto p/ Entrega',
    tags: ['Oreo', 'Chocolate ao Leite']
  },

  // ==========================================
  // 4. ACOMPANHAMENTOS & SALGADOS
  // ==========================================
  {
    id: 'acomp-mini-churros',
    name: 'MINI CHURROS COM DOCE DE LEITE',
    category: 'acompanhamentos',
    description: 'Mini churros crocantes e sequinhos, passados no açúcar com canela e recheados com doce de leite cremoso. Escolha o tamanho do copo:',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    badge: 'Muito Crocante',
    isBestseller: true,
    prepTime: '10 min',
    tags: ['Doce de Leite', 'Açúcar & Canela', 'Frito na Hora'],
    hasVariations: true,
    variations: [
      { name: 'Copo 330ml de Mini Churros', price: 12.00 },
      { name: 'Copo 500ml de Mini Churros', price: 15.00 }
    ]
  },
  {
    id: 'acomp-mini-salgadinhos',
    name: 'MINI SALGADINHOS FRITOS',
    category: 'acompanhamentos',
    description: 'Centinho e porções de mini salgadinhos fritos sequinhos e quentinhos (coxinhas, bolinhas de queijo, quibes e risoles). Escolha a quantidade:',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    badge: 'Fritos na Hora',
    isBestseller: true,
    prepTime: '15 min',
    tags: ['Coxinha', 'Bolinha de Queijo', 'Quibe', 'Risole'],
    hasVariations: true,
    variations: [
      { name: 'Porção com 30 Unidades', price: 30.00 },
      { name: 'Porção com 50 Unidades', price: 40.00 },
      { name: 'Cento com 100 Unidades', price: 70.00 }
    ]
  },
  {
    id: 'acomp-batata-tradicional',
    name: 'BATATA FRITA TRADICIONAL (400g)',
    category: 'acompanhamentos',
    description: 'Generosa porção de 400g de batata frita em corte palito, sequinha, dourada e crocante por fora e macia por dentro.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    badge: '400 Gramas',
    isBestseller: true,
    prepTime: '10 min',
    tags: ['400g', 'Crocante & Dourada']
  },
  {
    id: 'acomp-batata-bacon',
    name: 'BATATA FRITA COM BACON (400g)',
    category: 'acompanhamentos',
    description: 'Porção de 400g de batatas fritas crocantes cobertas com farta camada de bacon artesanal frito em cubinhos.',
    price: 21.00,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    badge: 'Com Bacon',
    isBestseller: true,
    prepTime: '12 min',
    tags: ['400g', 'Bacon Crocante']
  },
  {
    id: 'acomp-batata-bacon-cheddar',
    name: 'BATATA FRITA C/ BACON E CHEDDAR (400g)',
    category: 'acompanhamentos',
    description: 'A favorita da casa: 400g de batatas douradas afogadas em cheddar cremoso derretido e pedaços crocantes de bacon.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    badge: 'Cheddar & Bacon',
    isBestseller: true,
    prepTime: '12 min',
    tags: ['400g', 'Cheddar Melt', 'Bacon em Dobro']
  },

  // ==========================================
  // 5. BEBIDAS GELADAS
  // ==========================================
  {
    id: 'bebida-coca-2l',
    name: 'COCA-COLA 2 LITROS',
    category: 'bebidas',
    description: 'Garrafa PET 2 Litros gelada para toda a família.',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    badge: '2 Litros',
    isBestseller: true,
    tags: ['2 Litros', 'Super Gelada']
  },
  {
    id: 'bebida-guarana-2l',
    name: 'GUARANÁ ANTARCTICA 2 LITROS',
    category: 'bebidas',
    description: 'Garrafa PET 2 Litros original geladinha.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    badge: '2 Litros',
    isBestseller: false,
    tags: ['2 Litros', 'Guaraná Original']
  },
  {
    id: 'bebida-pepsi-2l',
    name: 'PEPSI 2 LITROS',
    category: 'bebidas',
    description: 'Garrafa PET 2 Litros bem gelada.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    tags: ['2 Litros', 'Gelada']
  },
  {
    id: 'bebida-fanta-uva-2l',
    name: 'FANTA UVA 2 LITROS',
    category: 'bebidas',
    description: 'Garrafa PET 2 Litros sabor uva gelada.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    tags: ['2 Litros', 'Uva']
  },
  {
    id: 'bebida-mineirinho-2l',
    name: 'MINEIRINHO 2 LITROS',
    category: 'bebidas',
    description: 'O clássico refrigerante de chapéu de couro Mineirinho PET 2L geladíssimo.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    tags: ['2 Litros', 'Mineirinho']
  },
  {
    id: 'bebida-coca-1l',
    name: 'COCA-COLA 1 LITRO',
    category: 'bebidas',
    description: 'Garrafa 1 Litro gelada no tamanho perfeito.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    tags: ['1 Litro']
  },
  {
    id: 'bebida-guarana-1-5l',
    name: 'GUARANÁ ANTARCTICA 1,5 LITROS',
    category: 'bebidas',
    description: 'Garrafa 1,5 Litro geladinha.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    tags: ['1.5 Litros']
  },
  {
    id: 'bebida-guarana-1l',
    name: 'GUARANÁ 1 LITRO',
    category: 'bebidas',
    description: 'Garrafa 1 Litro gelada.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    tags: ['1 Litro']
  },
  {
    id: 'bebida-h2o-1-5l',
    name: 'H2O 1,5 LITROS',
    category: 'bebidas',
    description: 'H2O sabor limoneto refrescante em garrafa de 1,5 Litros.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    tags: ['1.5L', 'Limoneto Leve']
  },
  {
    id: 'bebida-coca-lata',
    name: 'COCA-COLA LATA 350ML',
    category: 'bebidas',
    description: 'Lata 350ml trincando de gelada.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Pedida',
    isBestseller: true,
    tags: ['Lata 350ml']
  },
  {
    id: 'bebida-coca-zero-lata',
    name: 'COCA-COLA ZERO LATA 350ML',
    category: 'bebidas',
    description: 'Coca-Cola Sem Açúcar lata 350ml geladinha.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80',
    tags: ['Lata 350ml', 'Zero Açúcar']
  },
  {
    id: 'bebida-guarana-lata',
    name: 'GUARANÁ ANTARCTICA LATA 350ML',
    category: 'bebidas',
    description: 'Guaraná Antarctica lata 350ml trincando de gelada.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    tags: ['Lata 350ml']
  },
  {
    id: 'bebida-pepsi-lata',
    name: 'PEPSI LATA 350ML',
    category: 'bebidas',
    description: 'Pepsi lata 350ml gelada.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    tags: ['Lata 350ml']
  },
  {
    id: 'bebida-h2o-limoneto-500',
    name: 'H2O LIMONETO 500ML',
    category: 'bebidas',
    description: 'Garrafinha 500ml de H2O Limoneto geladíssima.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    tags: ['500ml', 'Limoneto']
  },
  {
    id: 'bebida-h2o-limao-500',
    name: 'H2O LIMÃO 500ML',
    category: 'bebidas',
    description: 'Garrafinha 500ml de H2O Limão geladinha.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    tags: ['500ml', 'Limão']
  },
  {
    id: 'bebida-guaraviton',
    name: 'GUARAVITON 500ML',
    category: 'bebidas',
    description: 'Garrafa 500ml de Guaraviton com extrato de guaraná e sabor energizante.',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    tags: ['500ml', 'Guaraviton']
  },
  {
    id: 'bebida-guaravita',
    name: 'GUARAVITA COPO 290ML',
    category: 'bebidas',
    description: 'Copo tradicional de Guaravita 290ml bem gelado.',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    tags: ['Copo 290ml', 'Tradicional']
  },
  {
    id: 'bebida-agua-gas',
    name: 'ÁGUA MINERAL COM GÁS 500ML',
    category: 'bebidas',
    description: 'Garrafa 500ml de água mineral com gás natural bem gelada.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    tags: ['500ml', 'Com Gás']
  },
  {
    id: 'bebida-agua-sem-gas',
    name: 'ÁGUA MINERAL SEM GÁS 500ML',
    category: 'bebidas',
    description: 'Garrafa 500ml de água mineral sem gás bem gelada.',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    tags: ['500ml', 'Sem Gás']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Lucas Nogueira',
    role: 'Cliente Fiel - Laje do Muriaé',
    comment: 'Melhor hambúrguer da região sem dúvida alguma! O X-Tudo de Boi é gigante e a maionese com o bacon crocante é espetacular. Chegou super rápido e quentinho.',
    rating: 5,
    favoriteItem: 'X-TUDO',
    date: 'Ontem',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Mariana Silveira',
    role: 'Amante de Doces',
    comment: 'Os doces são de outro mundo! O Copo da Felicidade de Morango com Nutella e Ninho é um absurdo de gostoso, super recheado. Pedimos toda semana aqui em casa!',
    rating: 5,
    favoriteItem: 'Copo da Felicidade',
    date: 'Há 3 dias',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Rodrigo Fonseca',
    role: 'Morador do Centro',
    comment: 'O Combo Black Premium salvou o aniversário aqui em casa. Hambúrgueres de filé mignon impecáveis, mini churros crocantes e os salgadinhos sequinhos. Nota 1000!',
    rating: 5,
    favoriteItem: 'Combo Black Premium',
    date: 'Semana passada',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
  }
];
