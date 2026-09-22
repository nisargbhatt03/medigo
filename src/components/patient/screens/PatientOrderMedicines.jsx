import React, { useState } from 'react';
import { ShoppingCart, Search, Plus, Check } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientOrderMedicines() {
  const [selectedCat, setSelectedCat] = useState('All');

  const cats = ['All', 'Prescription', 'OTC', 'Vitamins', 'Personal Care', 'Diabetes', 'Heart Care'];

  return (
    <div className="space-y-6">
      {/* Category Pills & Cart Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-2xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs whitespace-nowrap">
          <ShoppingCart className="w-4 h-4" /> Cart (2 items)
        </button>
      </div>

      {/* Product Grid - 1 Row Static View */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Pharmacy Products ({selectedCat})</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Item Row Static Preview</span>
        </div>
        <div className="p-4">
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm shadow-xs">
                Rx
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Paracetamol 500mg</h4>
                <p className="text-xs text-slate-500">10 Tablets Strip &bull; Fever & Pain Relief</p>
                <p className="text-sm font-extrabold text-blue-600 mt-1">₹25 <span className="text-[10px] text-slate-400 font-normal line-through">₹30</span></p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-xs flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Add to Cart
            </button>
          </div>
        </div>
        <Pagination currentPage={1} totalPages={6} totalItems={24} />
      </div>
    </div>
  );
}
