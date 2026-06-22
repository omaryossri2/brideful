export const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ background: '#2C1810' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-3xl font-serif font-light tracking-widest mb-1">Brideful</p>
          <p className="text-xs tracking-wide opacity-45 uppercase">Bridal Accessories & Gifts · Egypt</p>
        </div>

        <div className="flex gap-7 justify-center mb-8 flex-wrap">
          <a href="https://instagram.com/brideful.eg"
             target="_blank"
             rel="noopener noreferrer"
             className="text-sm opacity-60 hover:opacity-100 transition">
            Instagram
          </a>
        </div>

        <p className="text-xs text-center opacity-25 mb-6">
          © 2025 Brideful · All items customizable · Discounts for large orders
        </p>

        <div className="flex justify-center">
          <a href="https://filthygood.co/"
             target="_blank"
             rel="noopener noreferrer"
             className="px-5 py-2.5 border border-white border-opacity-15 rounded-full text-xs opacity-50 hover:opacity-100 transition"
             style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
            Made with love by FILTHY GOOD
          </a>
        </div>
      </div>
    </footer>
  );
};
