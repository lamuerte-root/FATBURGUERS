import React, { useState, useEffect } from 'react';
import { MenuItem, CategoryId, CartItem } from './types';
import { MENU_ITEMS } from './data/menuData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryBar } from './components/CategoryBar';
import { Bestsellers } from './components/Bestsellers';
import { FullMenu } from './components/FullMenu';
import { DessertSpotlight } from './components/DessertSpotlight';
import { DeliveryPromoBanner } from './components/DeliveryPromoBanner';
import { BrandStory } from './components/BrandStory';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemModal } from './components/ItemModal';
import { Check, ShoppingBag, ArrowUp } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('fatburguers_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('burgers');
  const [selectedItemModal, setSelectedItemModal] = useState<MenuItem | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState('FAT20');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('fatburguers_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (item: MenuItem) => {
    // If item has customizable options, open modal for customization
    if (item.options && item.options.length > 0) {
      setSelectedItemModal(item);
      return;
    }

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.menuItem.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          id: `${item.id}-${Date.now()}`,
          menuItem: item,
          quantity: 1,
        },
      ];
    });

    showToast(`✅ "${item.name}" adicionado ao seu pedido!`);
  };

  const handleAddToCartWithOptions = (
    item: MenuItem,
    quantity: number,
    selectedOptions: Record<string, string>,
    notes: string
  ) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: `${item.id}-${Date.now()}`,
        menuItem: item,
        quantity,
        selectedOptions,
        notes,
      },
    ]);
    showToast(`✅ "${item.name}" personalizado e adicionado!`);
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleApplyCoupon = (code: string) => {
    setAppliedCoupon(code);
    showToast(`🎉 Cupom ${code} aplicado no carrinho!`);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelectFromBar = (cat: CategoryId) => {
    setActiveCategory(cat);
    handleNavigate('menu');
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => {
    let price = item.menuItem.price;
    if (item.selectedOptions && item.menuItem.options) {
      item.menuItem.options.forEach((opt) => {
        const match = opt.choices.find((c) => c.label === item.selectedOptions?.[opt.name]);
        if (match?.extraPrice) price += match.extraPrice;
      });
    }
    return acc + price * item.quantity;
  }, 0);

  const bestsellers = MENU_ITEMS.filter((item) => item.isBestseller).slice(0, 4);
  const desserts = MENU_ITEMS.filter((item) => item.category === 'doces');

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f4f4f5] flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-zinc-900 border border-amber-500/80 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top duration-300">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* 1. Hero Section matching reference */}
        <Hero
          onOrderNow={() => handleNavigate('menu')}
          onExploreMenu={() => handleNavigate('menu')}
        />

        {/* 2. Floating Category Bar matching reference dock */}
        <CategoryBar
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelectFromBar}
        />

        {/* 3. Bestsellers Section matching reference ("OUR BESTSELLERS") */}
        <Bestsellers
          items={bestsellers}
          onAddToCart={handleAddToCart}
          onSelectItem={(item) => setSelectedItemModal(item)}
        />

        {/* 4. Specialized Dessert Section ("Doces & Sobremesas Artesanais") */}
        <DessertSpotlight
          dessertItems={desserts}
          onAddToCart={handleAddToCart}
          onSelectItem={(item) => setSelectedItemModal(item)}
        />

        {/* 5. Delivery Promo Banner matching reference ("HUNGRY? We Deliver To You!") */}
        <DeliveryPromoBanner
          onApplyCoupon={handleApplyCoupon}
          onOrderNow={() => {
            handleNavigate('menu');
            setIsCartOpen(true);
          }}
        />

        {/* 6. Full Interactive Menu */}
        <FullMenu
          items={MENU_ITEMS}
          selectedCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onAddToCart={handleAddToCart}
          onSelectItem={(item) => setSelectedItemModal(item)}
        />

        {/* 7. Brand Quality & Story */}
        <BrandStory />

        {/* 8. Customer Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        appliedCoupon={appliedCoupon}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onApplyCoupon={handleApplyCoupon}
        onClearCart={() => setCartItems([])}
      />

      {/* Product Detail / Customization Modal */}
      <ItemModal
        item={selectedItemModal}
        onClose={() => setSelectedItemModal(null)}
        onAddToCartWithOptions={handleAddToCartWithOptions}
      />

      {/* Floating Action Button for Cart on Mobile & Back to Top */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2">
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            className="w-11 h-11 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full font-extrabold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 shadow-2xl shadow-amber-500/30 active:scale-95 transition-all"
          aria-label="Ver Carrinho"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-zinc-950" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="font-bold">
            {cartTotal > 0
              ? `R$ ${cartTotal.toFixed(2).replace('.', ',')}`
              : 'Ver Pedido'}
          </span>
        </button>
      </div>

    </div>
  );
}
