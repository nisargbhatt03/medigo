import React from 'react';
import { Pill, Info } from 'lucide-react';

export default function PharmaMedicineDetails() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 font-bold text-base flex items-center justify-center border border-teal-100">
            <Pill className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">Crocin 500</h3>
              <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-[10px]">Analgesic</span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Generic: Paracetamol 500mg | Rx Only</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4 text-xs">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Stock Information</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-slate-500 font-medium">Current Stock</p>
            <p className="font-extrabold text-slate-800 text-sm">320 strips</p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-slate-500 font-medium">MRP</p>
            <p className="font-extrabold text-slate-800 text-sm">₹15.00</p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-slate-500 font-medium">Selling Price</p>
            <p className="font-extrabold text-emerald-600 text-sm">₹12.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
