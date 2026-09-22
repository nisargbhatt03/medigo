import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

export default function DocReports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Doctor Reports</h2>
          <p className="text-xs text-slate-500">View your consultation and patient statistics.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Consultations</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">248</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> +12%</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">New Patients</p>
          <p className="text-2xl font-extrabold text-blue-600 mt-1">86</p>
        </div>
      </div>
    </div>
  );
}
