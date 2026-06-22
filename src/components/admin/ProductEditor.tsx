import { useState } from 'react';
import { Product, useProducts } from '../../context/ProductContext';

interface ProductEditorProps {
  product?: Product;
  onClose: () => void;
}

export const ProductEditor = ({ product, onClose }: ProductEditorProps) => {
  const { addProduct, updateProduct } = useProducts();
  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      description: '',
      price: 0,
      image: '',
      category: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      updateProduct(product.id, formData);
    } else {
      addProduct(formData as Product);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">
          {product ? 'Edit Product' : 'Add New Product'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price ($) *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price || 0}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL *
            </label>
            <input
              type="url"
              name="image"
              value={formData.image || ''}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category || ''}
              onChange={handleChange}
              placeholder="e.g., Gowns, Accessories"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition font-medium"
            >
              Save Product
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
