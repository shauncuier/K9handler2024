import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: ''
  });

  if (cartItems.length === 0) {
    return (
      <div className="bg-bg-main min-h-screen py-20 text-center">
        <h2 className="text-2xl font-bold text-brand-purple-dark mb-4">Your cart is empty</h2>
        <Link to="/shop" className="text-brand-purple hover:underline font-bold">Return to Shop</Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate API call to save order to MongoDB
    console.log("Order placed:", { items: cartItems, total: cartTotal, shippingDetails: formData, paymentMethod: 'Cash on Delivery' });
    
    // Clear cart and redirect
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="bg-bg-main min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark uppercase tracking-wide mb-10">Secure <em className="not-italic text-brand-purple">Checkout</em></h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-brand-purple/10 p-6 md:p-8">
              <h3 className="text-xl font-bold text-brand-purple-dark mb-6 border-b border-brand-purple/10 pb-4">Shipping Information</h3>
              
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">First Name</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Last Name</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="07123 456789" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Street Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="123 Sneaker Street" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Town / City</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="London" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Postcode</label>
                    <input required type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="SW1A 1AA" />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-brand-purple-dark mb-6 border-b border-brand-purple/10 pb-4">Payment Method</h3>
                  <div className="bg-brand-purple/5 border-2 border-brand-purple rounded-lg p-4 flex items-center gap-4">
                    <input type="radio" id="cod" name="paymentMethod" value="cod" checked readOnly className="w-5 h-5 text-brand-purple focus:ring-brand-purple border-brand-purple/30" />
                    <label htmlFor="cod" className="font-bold text-text-main">
                      Cash on Delivery
                      <span className="block text-sm font-normal text-text-sub mt-1">Pay with cash when your sneakers arrive.</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-brand-purple/10 p-6 sticky top-24">
              <h3 className="text-lg font-extrabold text-brand-purple-dark uppercase tracking-wider mb-6 pb-4 border-b border-brand-purple/10">Your Order</h3>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cartItems.map(item => (
                  <div key={item._id} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 bg-bg-alt rounded border border-brand-purple/5 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-[12px] font-bold text-text-main line-clamp-1">{item.name}</div>
                      <div className="text-[10px] text-text-sub">Qty: {item.quantity} · Size: {item.size}</div>
                      <div className="text-[13px] font-bold text-brand-purple-dark mt-1">£{(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 border-t border-brand-purple/10 pt-4">
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
                <span className="text-base font-bold text-text-main">Total to Pay</span>
                <span className="text-2xl font-extrabold text-brand-purple-dark">£{cartTotal.toFixed(2)}</span>
              </div>

              <button 
                type="submit" 
                form="checkout-form"
                className="w-full bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(76,42,138,0.25)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                Place Order (COD) <i className="fa-solid fa-check text-brand-gold-light"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
