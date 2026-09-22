import React from 'react';
import { FileText, Eye } from 'lucide-react';

export default function PharmaPrescriptionQueue() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Prescription Queue</h2>
          <p className="text-xs text-slate-500">View and process doctor prescriptions.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-mono text-slate-600">09:15 AM</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Rahul Mehta</td>
                <td className="py-3 px-4 text-slate-700">Dr. Priya Sharma</td>
                <td className="py-3 px-4">
                  <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded text-[11px]">Pending</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="bg-blue-600 text-white font-semibold text-xs px-3 py-1 rounded flex items-center gap-1 ml-auto">
                    <Eye className="w-3 h-3" /> View
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
