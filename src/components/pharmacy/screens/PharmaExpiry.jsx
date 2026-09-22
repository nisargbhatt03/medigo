import React from 'react';
import { AlertTriangle, MoreVertical } from 'lucide-react';

export default function PharmaExpiry() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Expiry Management</h2>
          <p className="text-xs text-slate-500">Monitor and manage expiring medicines.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Medicine Name</th>
                <th className="py-3 px-4">Batch No</th>
                <th className="py-3 px-4">Expiry Date</th>
                <th className="py-3 px-4">Stock</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Azithro 500</td>
                <td className="py-3 px-4 font-mono text-slate-600">AZT001</td>
                <td className="py-3 px-4 text-slate-500 font-mono">Jan 30, 2025</td>
                <td className="py-3 px-4 font-bold text-slate-800">25</td>
                <td className="py-3 px-4">
                  <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded text-[11px]">Expiring Soon</span>
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
