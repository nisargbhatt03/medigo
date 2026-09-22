import React from 'react';
import { Plus, FlaskConical } from 'lucide-react';

export default function DocLab() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Lab Orders</h2>
          <p className="text-xs text-slate-500">Order lab tests and diagnostic investigations.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> Create Lab Order
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Test Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-blue-600" /> Complete Blood Count (CBC)
                </td>
                <td className="py-3 px-4 text-slate-600">Hematology</td>
                <td className="py-3 px-4 font-bold text-slate-900">500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
