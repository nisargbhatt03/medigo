import React from 'react';
import { Save, Receipt } from 'lucide-react';

export default function PharmaSettings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Pharmacy Settings</h2>
          <p className="text-xs text-slate-500">Manage pharmacy preferences and configurations.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">General Settings</h3>
          <div>
            <label className="block text-slate-700 font-semibold mb-1">Pharmacy Name</label>
            <input type="text" defaultValue="Sunrise Care Clinic Pharmacy" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
          </div>
          <div>
            <label className="block text-slate-700 font-semibold mb-1">License Number</label>
            <input type="text" defaultValue="20B-12345" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-xs font-bold text-slate-800 flex items-center gap-2">
            <Receipt className="w-4 h-4 text-teal-600" /> Receipt Preview
          </h3>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center space-y-1 font-mono">
            <p className="font-bold text-slate-800 text-xs">Sunrise Care Clinic Pharmacy</p>
            <p className="text-[10px] text-slate-500">Total: ₹42.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
