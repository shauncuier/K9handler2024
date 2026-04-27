import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bg-alt via-bg-main to-[#fff8f0] py-20 border-b border-brand-purple/20">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_55%_75%_at_85%_50%,rgba(176,125,0,0.07)_0%,transparent_65%),radial-gradient(ellipse_45%_65%_at_15%_50%,rgba(123,63,196,0.10)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-40"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <span className="block text-brand-purple-light text-[11px] font-bold tracking-[5px] uppercase mb-4">K9handler2024 · Authentic Footwear</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-purple-dark uppercase tracking-wide leading-tight mb-8">
            Premium New & <br/><span className="text-brand-purple">Preloved</span> Trainers
          </h1>
          <p className="text-text-sub max-w-2xl mx-auto text-lg mb-10">
            Meticulously inspected, professionally cleaned, and photographed in 100% natural light.
          </p>
          <Link to="/shop" className="inline-block bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white px-10 py-4 rounded-full font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(76,42,138,0.25)] hover:scale-105 transition-transform">
            Shop Collection <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>

      {/* WHY BUY (TRUST) */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="block text-brand-purple text-[11px] font-bold tracking-[4px] uppercase mb-2"><i className="fa-solid fa-shield-halved mr-2"></i>Why K9handler2024</span>
            <h2 className="text-3xl font-extrabold text-brand-purple-dark uppercase tracking-wide">Our <em className="not-italic text-brand-purple">Promise</em></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: '📸', title: 'Natural Light', desc: 'Every photo in natural light — no filters.' },
              { icon: '✨', title: 'Always Fresh', desc: 'Professionally cleaned preloved pairs.' },
              { icon: '📦', title: 'Safe Packing', desc: 'Wrapped securely for safe delivery.' },
              { icon: '⚡', title: 'Fast Replies', desc: 'We respond to all messages quickly.' },
              { icon: '✅', title: '100% Genuine', desc: 'Every item authentic — no fakes.' },
              { icon: '🚚', title: 'Free UK Post', desc: 'Fully tracked delivery service.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-brand-purple/20 rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 hover:border-brand-purple transition-all">
                <span className="block text-3xl mb-3">{item.icon}</span>
                <h5 className="text-[12.5px] font-bold uppercase tracking-[1px] text-brand-purple mb-1.5">{item.title}</h5>
                <p className="text-[11px] text-text-sub m-0 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="block text-brand-purple text-[11px] font-bold tracking-[4px] uppercase mb-2"><i className="fa-solid fa-fire mr-2"></i>Latest Drops</span>
            <h2 className="text-3xl font-extrabold text-brand-purple-dark uppercase tracking-wide">Featured <em className="not-italic text-brand-purple">Collection</em></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <Link key={product._id} to={`/product/${product._id}`} className="group block bg-white border border-brand-purple/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-purple/30 transition-all">
                <div className="relative aspect-square overflow-hidden bg-bg-alt">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-brand-purple text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                    {product.condition}
                  </div>
                </div>
                <div className="p-5 border-t border-brand-purple/5">
                  <div className="text-[10px] text-text-sub font-bold tracking-wider uppercase mb-1">{product.brand} · {product.size}</div>
                  <h3 className="font-bold text-text-main text-[15px] leading-tight mb-3 line-clamp-2">{product.name}</h3>
                  <div className="text-brand-purple-dark font-extrabold text-lg">£{product.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-block bg-bg-alt text-brand-purple-dark px-8 py-3 rounded-full font-bold text-[13px] tracking-wider uppercase shadow hover:bg-brand-purple hover:text-white transition-colors">
              View All Sneakers
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
