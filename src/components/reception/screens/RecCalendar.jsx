import React from 'react';
import { CalendarDays, Plus } from 'lucide-react';

export default function RecCalendar() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Appointment Calendar</h2>
          <p className="text-xs text-slate-500">View and manage all appointments in daily/weekly view.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> New Appointment
        </button>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-blue-600" /> Jan 15, 2025
          </h3>
        </div>
        <div className="border border-slate-100 rounded-lg p-3 bg-slate-50 text-xs">
          <p className="font-semibold text-slate-800">09:00 AM - 10:00 AM</p>
          <p className="text-slate-600">Rahul Mehta (Dr. Priya Sharma - General Medicine)</p>
        </div>
      </div>
    </div>
  );
}
