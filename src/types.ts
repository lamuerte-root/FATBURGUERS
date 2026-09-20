export type CategoryId = 
  | 'all' 
  | 'classicos' 
  | 'especiais' 
  | 'combos' 
  | 'sobremesas' 
  | 'acompanhamentos' 
  | 'bebidas';

export interface ExtraAddon {
  id: string;
  name: string;
  price: number;
  category?: string;
}

export interface ProteinChoice {
  name: 'Boi' | 'Frango' | 'Filé Mignon' | string;
  price: number;
}

export interface VariationChoice {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isBestseller?: boolean;
  calories?: string;
  prepTime?: string;
  tags?: string[];
  allowsProteins?: boolean;
  proteins?: ProteinChoice[];
  hasVariations?: boolean;
  variations?: VariationChoice[];
  allowsCustomization?: boolean;
  options?: {
    name: string;
    choices: { label: string; extraPrice?: number }[];
  }[];
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  unitPrice: number;
  selectedProtein?: ProteinChoice;
  selectedVariation?: VariationChoice;
  selectedAddons?: ExtraAddon[];
  selectedOptions?: Record<string, string>;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  favoriteItem: string;
  date: string;
  avatar: string;
}
