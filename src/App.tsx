import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { useAuth } from './hooks/useAuth';
import { PublicApp } from './pages/PublicApp';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminLogin } from './components/admin/AdminLogin';

function App() {
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicApp />} />
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <AdminDashboard onLogout={logout} />
              ) : (
                <AdminLogin onLogin={login} />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
