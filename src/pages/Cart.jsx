import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="bg-bg-main min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark uppercase tracking-wide mb-10">Your <em className="not-italic text-brand-purple">Cart</em></h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-brand-purple/10 p-12 text-center">
            <div className="w-24 h-24 bg-bg-alt rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-cart-shopping text-4xl text-brand-purple/40"></i>
            </div>
            <h2 className="text-2xl font-bold text-brand-purple-dark mb-4">Your cart is empty</h2>
            <p className="text-text-sub mb-8">Looks like you haven't added any premium trainers yet.</p>
            <Link to="/shop" className="inline-block bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow hover:scale-105 transition-transform">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item._id} className="bg-white rounded-xl shadow-sm border border-brand-purple/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
                  
                  <Link to={`/product/${item._id}`} className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-bg-alt border border-brand-purple/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform" />
                  </Link>

                  <div className="flex-grow text-center sm:text-left">
                    <div className="text-[10px] font-bold text-text-sub uppercase tracking-wider mb-1">{item.brand} · {item.size}</div>
                    <Link to={`/product/${item._id}`} className="text-[15px] font-bold text-text-main hover:text-brand-purple transition-colors line-clamp-1 mb-2">
                      {item.name}
                    </Link>
                    <div className="text-lg font-extrabold text-brand-purple-dark">
                      £{item.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-bg-alt rounded-lg border border-brand-purple/10 p-1">
                      <button 
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="w-8 h-8 rounded text-brand-purple font-bold hover:bg-white transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-text-main">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="w-8 h-8 rounded text-brand-purple font-bold hover:bg-white transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item._id)}
                      className="w-10 h-10 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center"
                      title="Remove item"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-brand-purple/10 p-6 sticky top-24">
                <h3 className="text-lg font-extrabold text-brand-purple-dark uppercase tracking-wider mb-6 pb-4 border-b border-brand-purple/10">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-text-sub">
                    <span>Subtotal</span>
                    <span className="font-bold text-text-main">£{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-sub">
                    <span>UK Delivery</span>
                    <span className="font-bold text-brand-gold-dark">Free</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-brand-purple/10 mb-8">
                  <span className="text-base font-bold text-text-main">Total</span>
                  <span className="text-2xl font-extrabold text-brand-purple-dark">£{cartTotal.toFixed(2)}</span>
                </div>

                <Link to="/checkout" className="w-full bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(76,42,138,0.25)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-3">
                  Proceed to Checkout <i className="fa-solid fa-arrow-right text-brand-gold-light"></i>
                </Link>
                
                <div className="mt-4 text-center">
                  <span className="text-[11px] text-text-sub flex items-center justify-center gap-2">
                    <i className="fa-solid fa-shield-halved text-brand-purple"></i> Safe & Secure Payments
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
