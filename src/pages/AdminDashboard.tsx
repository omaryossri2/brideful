import { useState } from 'react';
import { useProducts, Product } from '../context/ProductContext';
import { ProductEditor } from '../components/admin/ProductEditor';

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const { products, deleteProduct } = useProducts();
  const [showEditor, setShowEditor] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowEditor(true);
  };

  const handleAddNew = () => {
    setEditingProduct(undefined);
    setShowEditor(true);
  };

  const handleCloseEditor = () => {
    setShowEditor(false);
    setEditingProduct(undefined);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `brideful-products-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={onLogout}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Products</h2>
            <p className="text-gray-600">Manage your bridal collection</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleAddNew}
              className="flex-1 sm:flex-none bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition font-medium"
            >
              + Add Product
            </button>
            <button
              onClick={handleExport}
              className="flex-1 sm:flex-none bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Export JSON
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {products.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{product.category || '-'}</td>
                      <td className="px-6 py-4 text-sm space-x-3 flex">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products yet. Add one to get started!</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Editor Modal */}
      {showEditor && (
        <ProductEditor
          product={editingProduct}
          onClose={handleCloseEditor}
        />
      )}
    </div>
  );
};
