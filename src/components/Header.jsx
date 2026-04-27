import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-brand-purple/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ebayimg.com/images/g/ugIAAeSw9lFp0r~J/s-l140.webp" 
              alt="K9handler2024" 
              className="w-12 h-12 rounded-full border-2 border-brand-purple object-cover shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="hidden sm:block text-lg font-extrabold uppercase tracking-widest text-brand-purple-dark">
              K9handler<em className="not-italic text-brand-purple">2024</em>
            </span>
          </Link>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-text-sub font-bold hover:text-brand-purple transition-colors uppercase text-xs tracking-wider">Home</Link>
            <Link to="/shop" className="text-text-sub font-bold hover:text-brand-purple transition-colors uppercase text-xs tracking-wider">Shop All</Link>
            <Link to="/about" className="text-text-sub font-bold hover:text-brand-purple transition-colors uppercase text-xs tracking-wider">Our Story</Link>
            <Link to="/contact" className="text-text-sub font-bold hover:text-brand-purple transition-colors uppercase text-xs tracking-wider">Contact</Link>
          </nav>

          {/* Icons - Right */}
          <div className="flex items-center gap-5">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search sneakers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-bg-alt border border-brand-purple/20 rounded-full py-2 px-4 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple w-48 text-text-main transition-all"
              />
              <button type="submit" className="absolute right-3 top-2 text-text-sub hover:text-brand-purple transition-colors">
                <i className="fa-solid fa-magnifying-glass text-sm"></i>
              </button>
            </form>
            
            <Link to="/cart" className="relative text-brand-purple hover:text-brand-purple-dark transition-colors flex items-center gap-2">
              <div className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-brand-gold text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:block text-xs font-bold uppercase tracking-wider mt-0.5">Cart</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
