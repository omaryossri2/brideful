export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
            style={{ background: 'transparent' }}
            id="main-nav">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-serif font-light tracking-wide"
            style={{ color: '#2C1810', letterSpacing: '0.06em' }}>
          Brideful
        </h1>
        <a href="https://instagram.com/brideful.eg"
           target="_blank"
           rel="noopener noreferrer"
           className="px-6 py-2.5 rounded-full font-medium text-sm transition-all"
           style={{ background: '#C47B8A', color: '#fff', letterSpacing: '0.01em' }}>
          Order on Instagram
        </a>
      </div>
    </header>
  );
};
