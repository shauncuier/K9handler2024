export default function ShippingPolicy() {
  return (
    <div className="bg-bg-main min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="block text-brand-purple text-[11px] font-bold tracking-[4px] uppercase mb-2">Policies</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark uppercase tracking-wide m-0">
            Shipping & <em className="not-italic text-brand-purple">Delivery</em>
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-brand-purple/10 p-8 md:p-12 space-y-6 text-text-sub leading-relaxed">
          <h2 className="text-xl font-bold text-brand-purple-dark mb-4">1. Free UK Delivery</h2>
          <p>
            We are proud to offer <strong>Free Standard Delivery</strong> on all orders within the United Kingdom. All UK orders are fully tracked and insured. You will receive a tracking number via email as soon as your order is dispatched.
          </p>

          <h2 className="text-xl font-bold text-brand-purple-dark mt-8 mb-4">2. Processing Time</h2>
          <p>
            All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
          </p>

          <h2 className="text-xl font-bold text-brand-purple-dark mt-8 mb-4">3. International Shipping (Global)</h2>
          <p>
            We ship globally! We use secure, tracked international courier services to ensure your sneakers arrive safely, no matter where you are in the world. Shipping charges for your order will be calculated and displayed at checkout based on your delivery location.
          </p>
          <p>
            <em>Please note:</em> Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. K9handler2024 is not responsible for these charges if they are applied and are your responsibility as the customer.
          </p>

          <h2 className="text-xl font-bold text-brand-purple-dark mt-8 mb-4">4. Packaging</h2>
          <p>
            All sneakers are securely double-boxed and carefully wrapped to ensure they reach you in the exact condition they left our facility. We take great pride in our packaging standards.
          </p>
        </div>
      </div>
    </div>
  );
}
