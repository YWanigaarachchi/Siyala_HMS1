import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 px-8 bg-stone-50 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-emerald-950 mb-6">Contact Us</h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-lg text-slate-600 mb-6">Have questions or need assistance with your booking? We're here to help.</p>
          <div className="space-y-4 text-slate-600">
            <p><strong>Email:</strong> support@siyalahotels.lk</p>
            <p><strong>Phone:</strong> +94 11 234 5678</p>
            <p><strong>Address:</strong> 123 Heritage Way, Colombo 03, Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
