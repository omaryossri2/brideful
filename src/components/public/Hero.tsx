import { imageFallback } from './imageFallback';

export const Hero = () => {
  return (
    <section id="hero"
             className="min-h-screen flex flex-col items-center justify-center pt-24 pb-14 px-6 text-center relative overflow-hidden"
             style={{
               background: 'linear-gradient(160deg, #FBF8F5 0%, #F3EAE5 55%, #EDE0F0 100%)',
             }}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
           style={{ background: 'rgba(196, 123, 138, 0.07)', transform: 'translate(120px, -120px)' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
           style={{ background: 'rgba(201, 165, 90, 0.05)', transform: 'translate(-120px, 120px)' }}></div>

      <div className="max-w-2xl relative z-10">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4"
           style={{ color: '#C47B8A', letterSpacing: '0.18em' }}>
          Bridal Accessories & Gifts · Egypt
        </p>

        <h1 className="text-7xl sm:text-8xl font-serif font-light mb-6"
            style={{ color: '#2C1810', lineHeight: '0.92', letterSpacing: '-0.01em' }}>
          Brideful
        </h1>

        <p className="text-2xl font-serif italic mb-10"
           style={{ color: '#7A6660', lineHeight: '1.55' }}>
          Curated gifts & accessories for your perfect wedding day
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a href="#collections"
             className="px-12 py-4 rounded-full font-medium transition-all"
             style={{ background: '#C47B8A', color: '#fff' }}>
            Browse Collections
          </a>
          <a href="https://instagram.com/brideful.eg"
             target="_blank"
             rel="noopener noreferrer"
             className="text-base transition-all"
             style={{ color: '#7A6660' }}>
            or message us on Instagram →
          </a>
        </div>
      </div>

      {/* Hero images */}
      <div className="flex gap-4 mt-16 justify-center flex-wrap">
        <div className="w-32 h-40 rounded-2xl overflow-hidden shadow-lg">
          <img src="/images/full-bridal-package.jpeg"
               alt="Bridal Package"
               className="w-full h-full object-cover"
               {...imageFallback('Bridal Package')} />
        </div>
        <div className="w-32 h-40 rounded-2xl overflow-hidden shadow-lg" style={{ marginTop: '28px' }}>
          <img src="/images/bride-maid-bundle-4.jpeg"
               alt="Bridesmaid Box"
               className="w-full h-full object-cover"
               {...imageFallback('Bridesmaid Box')} />
        </div>
        <div className="w-32 h-40 rounded-2xl overflow-hidden shadow-lg hidden sm:block">
          <img src="/images/bouquet.jpg"
               alt="Bridal Bouquet"
               className="w-full h-full object-cover"
               {...imageFallback('Bridal Bouquet')} />
        </div>
      </div>
    </section>
  );
};
