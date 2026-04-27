import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-bg-main min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-24 h-24 bg-bg-alt rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-purple/10">
        <i className="fa-solid fa-triangle-exclamation text-4xl text-brand-purple/40"></i>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-extrabold text-brand-purple-dark tracking-tighter mb-4 opacity-10">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple-dark uppercase tracking-wide mb-4">
        Page Not <em className="not-italic text-brand-purple">Found</em>
      </h2>
      
      <p className="text-text-sub mb-8 max-w-md">
        The sneaker or page you're looking for might have been sold, removed, or is temporarily unavailable.
      </p>
      
      <div className="flex gap-4">
        <Link to="/shop" className="bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow hover:scale-105 transition-transform">
          Shop Collection
        </Link>
        <Link to="/" className="bg-bg-alt text-brand-purple-dark border border-brand-purple/20 px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-brand-purple/5 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
}
