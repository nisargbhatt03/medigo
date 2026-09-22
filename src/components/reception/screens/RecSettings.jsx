import React from 'react';
import { Save } from 'lucide-react';

export default function RecSettings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Reception Settings</h2>
          <p className="text-xs text-slate-500">Manage your reception preferences and configurations.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-2xl space-y-4 text-xs">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">General Settings</h3>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Clinic Name</label>
          <input type="text" defaultValue="Sunrise Care Clinic" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Front Desk Phone</label>
          <input type="text" defaultValue="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
        </div>
      </div>
    </div>
  );
}
