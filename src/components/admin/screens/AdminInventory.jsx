import React from 'react';
import { Plus, Download, AlertTriangle, MoreVertical } from 'lucide-react';

export default function AdminInventory() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Inventory Management</h2>
          <p className="text-xs text-slate-500">Track and manage medical supplies, equipment and stock levels.</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-2xs">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
            <Plus className="w-4 h-4" /> Add Item
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Items</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">342</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Low Stock</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1 flex items-center gap-2">
            18 <AlertTriangle className="w-4 h-4" />
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Item Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Stock</th>
                <th className="py-3 px-4">Unit</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Paracetamol 500mg</td>
                <td className="py-3 px-4 text-slate-600">Medicines</td>
                <td className="py-3 px-4 font-bold text-slate-800">150</td>
                <td className="py-3 px-4 text-slate-500">Strip</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">In Stock</span>
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
