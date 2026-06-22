import { useState } from 'react';
import { Header } from '../components/public/Header';
import { Hero } from '../components/public/Hero';
import { ProductCard } from '../components/public/ProductCard';
import { Footer } from '../components/public/Footer';
import { useProducts } from '../context/ProductContext';

export const PublicApp = () => {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState<string>('Bridesmaid Boxes');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = Array.from(new Set(products.map(p => p.category || 'Other').filter(Boolean))).sort();
  const filteredProducts = products.filter(p => (p.category || 'Other') === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: '#FBF8F5' }}>
      <Header />
      <Hero />

      {/* Collections Section */}
      <section id="collections" className="py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
               style={{ color: '#C47B8A', letterSpacing: '0.18em' }}>
              Our Collections
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-light mb-3"
                style={{ color: '#2C1810' }}>
              Find the Perfect Gift
            </h2>
            <p className="text-base" style={{ color: '#7A6660', maxWidth: '440px', margin: '0 auto' }}>
              All items fully customizable · Discounts for large quantities
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-12 overflow-x-auto pb-2 justify-center flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-6 py-2.5 rounded-full font-medium text-sm transition-all whitespace-nowrap"
                style={{
                  background: activeCategory === cat ? '#C47B8A' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#7A6660',
                  border: activeCategory === cat ? '2px solid #C47B8A' : '2px solid #E8D8D0',
                  fontWeight: activeCategory === cat ? '500' : '400',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p style={{ color: '#7A6660' }}>No products in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Brideful Section */}
      <section className="py-16 sm:py-20 md:py-24" style={{ background: '#F3EAE5' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-center mb-12"
              style={{ color: '#2C1810' }}>
            Why Choose Brideful?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✨', title: 'Fully Customizable', desc: 'Add, remove, or swap any item to build the perfect box for your vision.' },
              { icon: '🎁', title: 'Bulk Discounts', desc: 'Special pricing for large orders — perfect for dressing the whole bridal party.' },
              { icon: '🌸', title: 'Egyptian Wedding Specialists', desc: 'From Katb Ketab napkins to live perfume stations — we celebrate your culture.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm"
                   style={{ boxShadow: '0 2px 16px rgba(44, 24, 16, 0.05)' }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#2C1810' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#7A6660', lineHeight: '1.65' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4"
             style={{ color: '#C47B8A', letterSpacing: '0.18em' }}>
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6"
              style={{ color: '#2C1810' }}>
            Ready to Order?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#7A6660', lineHeight: '1.7' }}>
            Chat with us to place your order, get pricing details, or discuss customizations. We'd love to be part of your special day.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://instagram.com/brideful.eg"
               target="_blank"
               rel="noopener noreferrer"
               className="px-12 py-4 rounded-full font-medium"
               style={{ background: '#C47B8A', color: '#fff' }}>
              Message us on Instagram
            </a>
            <a href="https://instagram.com/brideful.eg"
               target="_blank"
               rel="noopener noreferrer"
               className="px-8 py-4"
               style={{ color: '#7A6660' }}>
              Follow us @Brideful.eg
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-end justify-center p-4"
             onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-screen overflow-y-auto"
               onClick={e => e.stopPropagation()}>
            <div className="h-60 overflow-hidden relative"
                 style={{ background: `url(${selectedProduct.image}) center/cover` }}>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center font-bold"
                style={{ color: '#2C1810' }}>
                ✕
              </button>
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full font-semibold text-white"
                   style={{ background: '#C47B8A' }}>
                {selectedProduct.price > 0 ? `${selectedProduct.price} LE` : 'Inquire'}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-serif font-semibold mb-4" style={{ color: '#2C1810' }}>
                {selectedProduct.name}
              </h2>
              <p className="text-base mb-6" style={{ color: '#7A6660', lineHeight: '1.7' }}>
                {selectedProduct.description}
              </p>

              <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                 style={{ color: '#C47B8A', letterSpacing: '0.12em' }}>
                Details
              </p>
              <div className="mb-6 pb-6 border-b" style={{ borderColor: '#F0E8E4' }}>
                <p className="text-sm" style={{ color: '#2C1810' }}>
                  All items can be customized, added or removed · Discounts for large orders
                </p>
              </div>

              <a href="https://instagram.com/brideful.eg"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full py-4 rounded-2xl font-medium text-center text-white transition-all"
                 style={{ background: '#C47B8A' }}>
                Order on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
