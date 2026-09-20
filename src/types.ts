export type CategoryId = 'all' | 'burgers' | 'doces' | 'acompanhamentos' | 'bebidas' | 'combos';

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
  options?: {
    name: string;
    choices: { label: string; extraPrice?: number }[];
  }[];
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
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
