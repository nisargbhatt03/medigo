import React from 'react';
import { ShoppingCart, Search, CreditCard, CheckCircle2 } from 'lucide-react';

export default function PharmaSalesPOS() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">New Sale (POS)</h2>
          <p className="text-xs text-slate-500">Create a new pharmacy sale.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input type="text" placeholder="Gain barcode or search medicine..." className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <tr>
                  <th className="py-2.5 px-3">Medicine Name</th>
                  <th className="py-2.5 px-3">Price</th>
                  <th className="py-2.5 px-3">Stock</th>
                  <th className="py-2.5 px-3">Qty</th>
                  <th className="py-2.5 px-3">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2.5 px-3 font-semibold text-slate-800">Crocin 500</td>
                  <td className="py-2.5 px-3 text-slate-700 font-mono">₹12.00</td>
                  <td className="py-2.5 px-3 text-slate-500">320</td>
                  <td className="py-2.5 px-3 font-bold text-slate-800">2</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-600 font-mono">₹24.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-2 border-b border-slate-100 pb-3">
            <div className="flex justify-between text-slate-600"><span>Subtotal</span><span className="font-mono font-bold">₹132.00</span></div>
            <div className="flex justify-between text-slate-600"><span>Discount</span><span className="font-mono font-bold">₹0.00</span></div>
            <div className="flex justify-between text-slate-900 font-bold text-sm pt-2 border-t border-slate-100"><span>Total</span><span className="font-mono text-emerald-600">₹132.00</span></div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Complete Sale
          </button>
        </div>
      </div>
    </div>
  );
}
