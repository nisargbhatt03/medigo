import React from 'react';
import { Plus, Radio } from 'lucide-react';

export default function DocRadiology() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Radiology Orders</h2>
          <p className="text-xs text-slate-500">Order X-Ray, Ultrasound, CT Scan and MRI imaging.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> Create Radiology Order
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Talent Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-blue-600" /> X-Ray Chest
                </td>
                <td className="py-3 px-4 text-slate-600">X-Ray</td>
                <td className="py-3 px-4 font-bold text-slate-900">400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
