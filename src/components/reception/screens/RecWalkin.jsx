import React from 'react';
import { UserCheck2 } from 'lucide-react';

export default function RecWalkin() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Walk-in Patient Registration</h2>
          <p className="text-xs text-slate-500">Register new walk-in patients for immediate consultation.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-3xl space-y-4 text-xs">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Patient & Visit Details</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
            <input type="text" placeholder="Enter full name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
          </div>
          <div>
            <label className="block text-slate-700 font-semibold mb-1">Phone Number *</label>
            <input type="text" placeholder="+91 Enter phone" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5">
          <UserCheck2 className="w-4 h-4" /> Register & Check-in
        </button>
      </div>
    </div>
  );
}
