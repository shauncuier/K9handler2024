import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-bg-main min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="block text-brand-purple text-[11px] font-bold tracking-[4px] uppercase mb-2">About Us</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark uppercase tracking-wide m-0">
            The <em className="not-italic text-brand-purple">K9handler2024</em> Story
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-brand-purple/10 overflow-hidden">
          <div className="h-64 bg-bg-alt relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple-dark/80 to-brand-purple/40 mix-blend-multiply z-10"></div>
            <img src="https://i.ebayimg.com/images/g/ugIAAeSw9lFp0r~J/s-l1600.webp" alt="Sneakers collection" className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <i className="fa-solid fa-shoe-prints text-6xl text-white/50"></i>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brand-purple-dark mb-4">Premium Footwear, Transparently Sourced.</h2>
            
            <div className="space-y-6 text-text-sub leading-relaxed">
              <p>
                Welcome to K9handler2024. We specialize in curating premium, authentic, and highly sought-after trainers and sneakers for the discerning collector and everyday wearer alike.
              </p>
              
              <p>
                <strong>The Natural Light Promise:</strong> In an industry full of filtered photos and hidden flaws, we take a radically honest approach. Every single pair we sell is meticulously inspected, professionally cleaned, and photographed in 100% natural daylight. What you see is exactly what you get.
              </p>

              <p>
                Whether you're looking for a pristine pair of Air Jordans, classic New Balance comfort, or rare Adidas drops, we ensure that every shoe meets our strict quality standards before it ever reaches our store.
              </p>

              <div className="bg-bg-main p-6 rounded-xl border border-brand-purple/10 mt-8">
                <h3 className="text-lg font-bold text-brand-purple-dark mb-4 uppercase tracking-wider">Our Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                    <span><strong>100% Authenticity Guaranteed:</strong> We never sell fakes, variants, or B-grades.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                    <span><strong>Honest Condition Reports:</strong> We detail every scuff, scratch, or sign of wear.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                    <span><strong>Fast & Secure Shipping:</strong> All orders are securely boxed and tracked.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link to="/shop" className="inline-block bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow hover:scale-105 transition-transform">
                Explore The Collection
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
