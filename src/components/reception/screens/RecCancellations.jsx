import React from 'react';
import { XCircle, MoreVertical } from 'lucide-react';

export default function RecCancellations() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Cancelled Appointments</h2>
          <p className="text-xs text-slate-500">View and manage cancelled appointments and refunds.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4">Refund Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 text-slate-600 font-mono">Jan 15, 2025 10:00 AM</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Pooja Nair</td>
                <td className="py-3 px-4 text-slate-700">Dr. Amit Kumar</td>
                <td className="py-3 px-4 text-slate-600">Patient request</td>
                <td className="py-3 px-4">
                  <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded text-[11px]">Refunded</span>
                </td>
                <td className="py-3 px-4 text-right"><MoreVertical className="w-4 h-4 text-slate-400" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
