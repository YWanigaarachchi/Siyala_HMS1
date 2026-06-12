import React, { useState } from 'react';
import { UtensilsCrossed, Coffee } from 'lucide-react';

const Footer = () => {
  const [currency, setCurrency] = useState('LKR');

  return (
    <footer className="py-16 bg-stone-50 text-slate-800">
      <div className="max-w-7xl px-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Local Food & Drink */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-6 text-sm font-bold tracking-widest text-emerald-900 uppercase">Local Food & Drink</h4>
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="flex items-center justify-center w-20 h-20 transition-all bg-white border border-slate-200 shadow-sm rounded-full group-hover:border-amber-500 group-hover:shadow-md">
                <UtensilsCrossed className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-sm font-medium text-slate-600 group-hover:text-emerald-900">Kottu</span>
            </div>
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="flex items-center justify-center w-20 h-20 transition-all bg-white border border-slate-200 shadow-sm rounded-full group-hover:border-amber-500 group-hover:shadow-md">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-sm font-medium text-slate-600 group-hover:text-emerald-900">Hoppers</span>
            </div>
          </div>
        </div>

        {/* Column 2: Currency Rates */}
        <div className="flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-12">
          <div className="flex items-center justify-between w-full mb-6">
            <h4 className="text-sm font-bold tracking-widest text-emerald-900 uppercase">Local Currency</h4>
            <button 
              onClick={() => setCurrency(currency === 'LKR' ? 'USD' : 'LKR')}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-200 text-slate-700 hover:bg-amber-100 hover:text-amber-800 transition-colors"
            >
              Switch to {currency === 'LKR' ? 'USD' : 'LKR'}
            </button>
          </div>
          
          <div className="w-full overflow-hidden bg-white border rounded-2xl border-slate-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium">Day</th>
                  <th className="px-4 py-3 font-medium text-right">USD to LKR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700">Monday</td>
                  <td className="px-4 py-3 text-right text-emerald-700 font-semibold">301.50</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700">Tuesday</td>
                  <td className="px-4 py-3 text-right text-emerald-700 font-semibold">302.10</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700">Wednesday</td>
                  <td className="px-4 py-3 text-right text-emerald-700 font-semibold">300.90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Column 3: Local Culture */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-12">
          <h4 className="mb-6 text-sm font-bold tracking-widest text-emerald-900 uppercase">Local Culture</h4>
          <div className="p-6 bg-white border border-slate-200 shadow-sm rounded-2xl">
            <h5 className="mb-2 text-lg font-serif font-semibold text-amber-700">The Spirit of Ayubowan</h5>
            <p className="text-sm leading-relaxed text-slate-500">
              Experience the warmth of true Sri Lankan hospitality. From centuries-old heritage architecture to vibrant tropical landscapes, our multi-chain sanctuaries offer an unforgettable embrace of island culture.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
