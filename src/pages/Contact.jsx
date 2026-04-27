export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you shortly.");
    e.target.reset();
  };

  return (
    <div className="bg-bg-main min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="block text-brand-purple text-[11px] font-bold tracking-[4px] uppercase mb-2">Get In Touch</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark uppercase tracking-wide m-0">
            Contact <em className="not-italic text-brand-purple">Us</em>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-brand-purple/10 p-8">
              <h2 className="text-xl font-bold text-brand-purple-dark mb-6">Customer Support</h2>
              <p className="text-text-sub mb-8">
                Have a question about a specific pair of sneakers, sizing, or an existing order? We're here to help. Our team typically responds within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center text-brand-purple shrink-0">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-main uppercase tracking-wider">Email Us</h4>
                    <p className="text-text-sub mt-1">support@k9handler2024.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center text-brand-purple shrink-0">
                    <i className="fa-solid fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-main uppercase tracking-wider">Business Hours</h4>
                    <p className="text-text-sub mt-1">Mon - Fri, 9:00 AM - 5:00 PM (GMT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center text-brand-purple shrink-0">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-main uppercase tracking-wider">Location</h4>
                    <p className="text-text-sub mt-1">United Kingdom<br/>(Online Store Only)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-brand-purple/10 p-8">
              <h2 className="text-xl font-bold text-brand-purple-dark mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Your Name</label>
                    <input required type="text" className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Subject</label>
                  <input required type="text" className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="Order Inquiry #12345" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-sub uppercase tracking-wider mb-2">Message</label>
                  <textarea required rows="5" className="w-full bg-bg-alt border border-brand-purple/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" placeholder="How can we help you today?"></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                  <i className="fa-solid fa-paper-plane text-brand-gold-light"></i> Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
