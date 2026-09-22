import React from 'react';
import { UserCheck, CheckCircle2 } from 'lucide-react';

export default function RecCheckin() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Patient Check-in</h2>
          <p className="text-xs text-slate-500">Check-in patients for their appointments or walk-in visits.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-2xl space-y-4">
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-base flex items-center justify-center">
            RM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">Rahul Mehta</h3>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Confirmed</span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Appointment APT-001248 | General Medicine</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5">
          <UserCheck className="w-4 h-4" /> Complete Check-in
        </button>
      </div>
    </div>
  );
}
