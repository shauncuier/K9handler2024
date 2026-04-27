import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p._id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-main">
        <h2 className="text-2xl font-bold text-brand-purple-dark mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-brand-purple hover:underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-main min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs font-bold uppercase tracking-wider text-text-sub mb-6">
          <Link to="/" className="hover:text-brand-purple">Home</Link> <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-purple">Shop</Link> <span className="mx-2">/</span>
          <span className="text-brand-purple">{product.brand}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-brand-purple/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Gallery */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-brand-purple/10 bg-bg-alt/30">
              <div className="aspect-square rounded-xl overflow-hidden bg-white mb-4 border border-brand-purple/5">
                <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-brand-purple' : 'border-transparent hover:border-brand-purple/50'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-10 flex flex-col">
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="inline-block bg-brand-purple/10 text-brand-purple text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {product.condition}
                </span>
                <span className="inline-block bg-brand-gold/10 text-brand-gold-dark text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {product.size}
                </span>
              </div>
              
              <h1 className="text-3xl font-extrabold text-brand-purple-dark leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-sm font-bold text-brand-purple-light uppercase tracking-wider mb-6">
                {product.subtitle}
              </p>
              
              <div className="text-4xl font-extrabold text-brand-purple-dark mb-8">
                £{product.price.toFixed(2)}
              </div>

              <div className="bg-bg-main p-5 rounded-xl border border-brand-purple/10 mb-8">
                <h3 className="text-[13px] font-bold text-brand-purple uppercase tracking-wider mb-3"><i className="fa-solid fa-align-left mr-2"></i> Item Description</h3>
                <p className="text-sm text-text-sub leading-relaxed m-0">
                  {product.description}
                </p>
                
                {product.features && product.features.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-brand-purple/10 pt-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-[13px] text-text-sub flex items-center gap-2">
                        <i className="fa-solid fa-check-circle text-brand-gold"></i> {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button 
                onClick={() => addToCart(product)}
                className="mt-auto w-full bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(76,42,138,0.25)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                <i className="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
