import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [filter, setFilter] = useState('All');
  const brands = ['All', ...new Set(products.map(p => p.brand))];

  const filteredProducts = products.filter(p => {
    const matchesBrand = filter === 'All' || p.brand === filter;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  const clearSearch = () => {
    setSearchParams({});
  };

  return (
    <div className="bg-bg-main min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark uppercase tracking-wide m-0">All <em className="not-italic text-brand-purple">Sneakers</em></h1>
            <div className="flex items-center gap-3 mt-2">
              <p className="text-text-sub text-sm m-0">Showing {filteredProducts.length} results</p>
              {searchQuery && (
                <span className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Search: "{searchQuery}"
                  <button onClick={clearSearch} className="hover:text-brand-purple-dark"><i className="fa-solid fa-xmark"></i></button>
                </span>
              )}
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {brands.map(brand => (
              <button 
                key={brand}
                onClick={() => setFilter(brand)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  filter === brand 
                  ? 'bg-brand-purple text-white shadow-md' 
                  : 'bg-white text-text-sub hover:bg-brand-purple-light hover:text-white border border-brand-purple/10'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
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
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-brand-purple/10">
            <i className="fa-solid fa-box-open text-4xl text-brand-purple/30 mb-4"></i>
            <h3 className="text-xl font-bold text-brand-purple-dark">No products found</h3>
            <p className="text-text-sub text-sm">Try selecting a different filter.</p>
          </div>
        )}

      </div>
    </div>
  );
}
