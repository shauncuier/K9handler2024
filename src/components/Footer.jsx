import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-purple-dark via-brand-purple to-brand-purple-dark pt-14 border-t-[3px] border-brand-purple-light mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <img 
              src="https://i.ebayimg.com/images/g/ugIAAeSw9lFp0r~J/s-l140.webp" 
              alt="K9handler2024" 
              className="w-[72px] h-[72px] rounded-full border-2 border-brand-gold-light object-cover mb-2.5 mx-auto lg:mx-0 shadow-[0_0_18px_rgba(253,233,138,0.25)]"
            />
            <h3 className="text-xl font-extrabold tracking-[2px] text-white uppercase mt-4">
              K9handler<em className="not-italic text-brand-gold-light">2024</em>
            </h3>
            <p className="text-white/60 text-xs mt-2">Premium Footwear<br/>for the K9 Community</p>
          </div>

          <div>
            <div className="text-brand-gold-light text-[12.5px] font-bold mb-3.5 pb-2 border-b border-white/15 uppercase tracking-[1.5px]">Quick Links</div>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-brand-gold-light"></i> Home</Link></li>
              <li><Link to="/shop" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-brand-gold-light"></i> Shop All</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-brand-gold-light"></i> About Us</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-brand-gold-light"></i> Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-brand-gold-light text-[12.5px] font-bold mb-3.5 pb-2 border-b border-white/15 uppercase tracking-[1.5px]">Our Policies</div>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><Link to="/shipping-policy" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-truck-fast text-brand-gold-light w-4"></i> Shipping Policy</Link></li>
              <li><Link to="/returns-policy" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-rotate-left text-brand-gold-light w-4"></i> Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-shield-halved text-brand-gold-light w-4"></i> Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-white/60 hover:text-brand-gold-light transition-colors text-[13px] flex items-center gap-2"><i className="fa-solid fa-file-contract text-brand-gold-light w-4"></i> Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-brand-gold-light text-[12.5px] font-bold mb-3.5 pb-2 border-b border-white/15 uppercase tracking-[1.5px]">Disclaimer</div>
            <p className="text-[12px] text-white/55 leading-[1.7]">
              ⚠️ All photos are of the actual item — no stock images. Please read the condition report carefully. Check UK/US/EU size and compare to a pair you already own.
            </p>
          </div>

        </div>
      </div>
      
      <div className="bg-black/25 py-4 border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center flex-col md:flex-row gap-2">
          <p className="text-white/50 text-xs m-0">&copy; 2026 <span className="text-brand-gold-light">K9handler2024</span> · All rights reserved.</p>
          <p className="text-white/50 text-xs m-0">Designed with <span className="text-brand-gold-light">♥</span> by <span className="text-brand-gold-light">3s-Soft</span></p>
        </div>
      </div>
    </footer>
  );
}
