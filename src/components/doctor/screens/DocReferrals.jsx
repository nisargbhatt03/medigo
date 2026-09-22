import React from 'react';
import { UserCheck, Send } from 'lucide-react';

export default function DocReferrals() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Referral Management</h2>
          <p className="text-xs text-slate-500">Refer patients to specialists or other facilities.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-xl space-y-4 text-xs">
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Patient</label>
          <input type="text" defaultValue="Rahul Mehta (UHD001248)" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-semibold" />
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Specialty</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium"><option>Cardiology</option></select>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5">
          <Send className="w-4 h-4" /> Send Referral
        </button>
      </div>
    </div>
  );
}
