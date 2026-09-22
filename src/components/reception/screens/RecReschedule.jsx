import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function RecReschedule() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Reschedule Appointment</h2>
          <p className="text-xs text-slate-500">Change date, time or doctor for an existing appointment.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-xl space-y-4 text-xs">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <p className="font-bold text-slate-800">Rahul Mehta</p>
          <p className="text-slate-500">Current: Jan 15, 2025, 10:00 AM</p>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5">
          <RefreshCw className="w-4 h-4" /> Reschedule Appointment
        </button>
      </div>
    </div>
  );
}
