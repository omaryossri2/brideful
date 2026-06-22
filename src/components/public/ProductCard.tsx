import { Product } from '../../context/ProductContext';
import { imageFallback } from './imageFallback';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
         onClick={onClick}
         style={{ boxShadow: '0 2px 18px rgba(44, 24, 16, 0.06)' }}>
      <div className="h-64 overflow-hidden relative"
           style={{ background: 'linear-gradient(135deg, #F3EAE5 0%, #EDE0F0 100%)' }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          {...imageFallback(product.name)}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(44, 24, 16, 0.22) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-serif font-semibold mb-1" style={{ color: '#2C1810' }}>
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2" style={{ color: '#A89490' }}>
          {product.description}
        </p>
        <div className="flex justify-between items-center pt-3 border-t" style={{ borderColor: '#F0E8E4' }}>
          {product.price > 0 ? (
            <span className="text-2xl font-serif font-semibold" style={{ color: '#C47B8A' }}>
              {product.price} LE
            </span>
          ) : (
            <span className="text-base font-medium" style={{ color: '#C47B8A' }}>
              Inquire
            </span>
          )}
          <span className="text-xs" style={{ color: '#A89490' }}>tap to see →</span>
        </div>
      </div>
    </div>
  );
};
