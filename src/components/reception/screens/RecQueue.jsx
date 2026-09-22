import React from 'react';
import { Plus, ListOrdered, PhoneCall } from 'lucide-react';

export default function RecQueue() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Patient Queue</h2>
          <p className="text-xs text-slate-500">Manage patient check-in, queue and consultation flow.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> Check in Patient
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-16">Token</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Wait Time</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono font-bold text-blue-600">A001</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Sneha Patel</td>
                <td className="py-3 px-4 text-slate-700">Dr. Amit Kumar</td>
                <td className="py-3 px-4 text-slate-600">Pediatrics</td>
                <td className="py-3 px-4 text-slate-500">25 min</td>
                <td className="py-3 px-4">
                  <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded text-[11px]">Waiting</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="border border-blue-600 text-blue-600 font-semibold text-xs px-2.5 py-1 rounded flex items-center gap-1 ml-auto">
                    <PhoneCall className="w-3 h-3" /> Call
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
