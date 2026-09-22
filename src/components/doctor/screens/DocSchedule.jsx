import React from 'react';
import { CalendarDays, Plus } from 'lucide-react';

export default function DocSchedule() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">My Schedule & Availability</h2>
          <p className="text-xs text-slate-500">Manage your clinic schedule and availability.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> Block Time Slot
        </button>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
        <h3 className="text-xs font-bold text-slate-800 flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-blue-600" /> Jan 15, 2025 Roster
        </h3>
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
          <p className="font-semibold text-slate-800">09:00 AM - 01:00 PM: OPD Consultations</p>
        </div>
      </div>
    </div>
  );
}
