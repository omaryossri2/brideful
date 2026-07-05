import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('brideful_products');
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load products', e);
        setProducts(getDefaultProducts());
      }
    } else {
      setProducts(getDefaultProducts());
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('brideful_products', JSON.stringify(products));
  };

  const addProduct = (product: Product) => {
    const updated = [...products, product];
    setProducts(updated);
    localStorage.setItem('brideful_products', JSON.stringify(updated));
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    const updated = products.map(p => p.id === id ? { ...p, ...updates } : p);
    setProducts(updated);
    localStorage.setItem('brideful_products', JSON.stringify(updated));
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('brideful_products', JSON.stringify(updated));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, saveToLocalStorage, loadFromLocalStorage }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};

const getDefaultProducts = (): Product[] => [
  {
    id: '1',
    name: 'Soft Bridesmaid Box',
    description: 'Groom Face Stick, Scrunchie, Baby Flower Bracelet, Jewel Box',
    price: 360,
    image: '/images/bride-maid-bundle-3.jpeg',
    category: 'Bridesmaid Boxes'
  },
  {
    id: '2',
    name: 'Luna Bridesmaid Box',
    description: 'Customized Fan, Scrunchie, Candle, Mini Accessories Box, Bracelet',
    price: 460,
    image: '/images/full-bridal-box.jpeg',
    category: 'Bridesmaid Boxes'
  },
  {
    id: '3',
    name: 'Golidicious Bridesmaid Box',
    description: 'Customized Fan, Mini Mirror, Candle, Sash, Scrunchie',
    price: 475,
    image: '/images/bride-maid-bundle-5.jpeg',
    category: 'Bridesmaid Boxes'
  },
  {
    id: '4',
    name: 'Boho Bridesmaid Box',
    description: 'Customized Wooden Hair Brush, Mug, Fan, Pouch, Sash',
    price: 850,
    image: '/images/bridemaid-bundle-1.jpeg',
    category: 'Bridesmaid Boxes'
  },
  {
    id: '5',
    name: "L'amour Bridesmaid Box",
    description: 'Candle, Lip Gloss, Bracelet, Scrunchie, Sash & 5 more items',
    price: 900,
    image: '/images/bride-maid-bundle-2.jpeg',
    category: 'Bridesmaid Boxes'
  },
  {
    id: '6',
    name: 'Premium Bridesmaid Box',
    description: 'Complete luxury set with 14 premium items including makeup & skincare',
    price: 1200,
    image: '/images/bride-maid-bundle-4.jpeg',
    category: 'Bridesmaid Boxes'
  },
  {
    id: '7',
    name: 'Essential Bridal Box',
    description: 'Customized Fan, Mirror, Mug, Candle, Accessories Box',
    price: 1850,
    image: '/images/essential-bridal-box.jpeg',
    category: 'Bridal'
  },
  {
    id: '8',
    name: 'Full Bridal Package',
    description: 'Complete package: Fan, Mug, Mirror, Bride Headband, Robe, Slippers',
    price: 2900,
    image: '/images/full-bridal-package.jpeg',
    category: 'Bridal'
  },
  {
    id: '9',
    name: 'Wooden Fans',
    description: 'Customized with name in gold. Multiple styles. Bulk orders welcome.',
    price: 0,
    image: '/images/wooden-fans.jpg',
    category: 'Accessories'
  },
  {
    id: '10',
    name: 'Pearl & Lace Mirrors',
    description: 'Hand-decorated with pearls & crystals. Custom name or title.',
    price: 0,
    image: '/images/mirror.png',
    category: 'Accessories'
  },
  {
    id: '11',
    name: 'Tambourines',
    description: 'Custom Arabic calligraphy. Various decorative designs.',
    price: 0,
    image: '/images/tambourine.jpg',
    category: 'Accessories'
  },
  {
    id: '12',
    name: 'Katb Ketab Napkins',
    description: "Embroidered with couple's names. Crystal & bead embellishments.",
    price: 0,
    image: '/images/katb-napkins.jpg',
    category: 'Accessories'
  },
  {
    id: '13',
    name: 'Mabkhara (Incense Burner)',
    description: 'Crystal glass with pearl & rhinestone details. Custom Arabic name.',
    price: 0,
    image: '/images/mabkhara.jpg',
    category: 'Accessories'
  },
  {
    id: '14',
    name: 'Bridal Bouquet',
    description: 'Realistic touch tulips with pearl ribbon wrap. Everlasting arrangement.',
    price: 0,
    image: '/images/bouquet.jpg',
    category: 'Accessories'
  },
];
