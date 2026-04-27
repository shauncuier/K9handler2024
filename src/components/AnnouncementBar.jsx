import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-purple-dark py-2 px-4 border-b border-brand-purple">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="text-white text-xs font-semibold tracking-wide text-center">
          <i className="fa-solid fa-star text-brand-gold-light mr-2"></i>
          K9handler2024 — Premium Trainers & Sneakers · <span className="font-bold text-brand-gold-light">Free UK Delivery</span>
        </div>
      </div>
    </div>
  );
}
