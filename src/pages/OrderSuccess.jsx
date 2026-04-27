import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="bg-bg-main min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-brand-purple/10 max-w-lg w-full">
        
        <div className="w-24 h-24 bg-gradient-to-br from-brand-purple-dark to-brand-purple rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_8px_20px_rgba(76,42,138,0.3)]">
          <i className="fa-solid fa-check text-4xl text-brand-gold-light"></i>
        </div>
        
        <h1 className="text-3xl font-extrabold text-brand-purple-dark uppercase tracking-wide mb-4">
          Order <em className="not-italic text-brand-purple">Confirmed</em>
        </h1>
        
        <p className="text-text-sub mb-2 text-lg">
          Thank you for shopping with K9handler2024!
        </p>
        
        <p className="text-text-sub mb-8 text-sm bg-bg-alt p-4 rounded-lg border border-brand-purple/10">
          Your order has been received. You have selected <strong>Cash on Delivery</strong>. Please have the exact amount ready when your premium trainers arrive.
        </p>
        
        <div className="space-y-4">
          <Link to="/shop" className="block w-full bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(76,42,138,0.25)] hover:scale-[1.02] transition-transform">
            Continue Shopping
          </Link>
          <Link to="/" className="block w-full bg-bg-alt text-brand-purple-dark border border-brand-purple/20 py-4 rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-brand-purple/5 transition-colors">
            Return to Home
          </Link>
        </div>
        
      </div>
    </div>
  );
}
