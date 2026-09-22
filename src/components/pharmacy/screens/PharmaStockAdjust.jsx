import React from 'react';
import { Plus, Sliders, MoreVertical } from 'lucide-react';

export default function PharmaStockAdjust() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Stock Adjustment</h2>
          <p className="text-xs text-slate-500">Adjust stock for expiry, damage, or other reasons.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> New Adjustment
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Medicine Name</th>
                <th className="py-3 px-4">Current Stock</th>
                <th className="py-3 px-4">Adjustment</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 text-slate-500 font-mono">Jan 15, 2025</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Cetrizine 10mg</td>
                <td className="py-3 px-4 font-bold text-slate-800">5</td>
                <td className="py-3 px-4 font-bold text-rose-600">-5</td>
                <td className="py-3 px-4">
                  <span className="bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded text-[11px]">Expired</span>
                </td>
                <td className="py-3 px-4 text-right"><MoreVertical className="w-4 h-4 text-slate-400" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
