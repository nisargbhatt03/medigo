import React from 'react';
import { Bell, Check } from 'lucide-react';

export default function DocReminders() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Follow-up Reminders</h2>
          <p className="text-xs text-slate-500">Set and manage follow-up reminders for patients.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Patient</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4">Follow-up Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Rahul Mehta</td>
                <td className="py-3 px-4 text-slate-600">BP Review</td>
                <td className="py-3 px-4 text-slate-700 font-mono">Jan 16, 2025</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Upcoming</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold text-xs px-2.5 py-1 rounded flex items-center gap-1 ml-auto">
                    <Check className="w-3.5 h-3.5" /> Mark Done
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
