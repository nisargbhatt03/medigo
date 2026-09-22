import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function RecAvailability() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Doctor Availability</h2>
          <p className="text-xs text-slate-500">View doctor schedules, availability and leave status.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-5 space-y-4">
        <div className="flex items-center gap-3">
          <Stethoscope className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-800">Doctor Rosters Today</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="font-bold text-slate-800">Dr. Priya Sharma</p>
            <p className="text-slate-500">General Medicine</p>
            <span className="bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded mt-2 inline-block">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
