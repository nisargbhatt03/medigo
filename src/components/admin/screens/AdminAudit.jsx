import React from 'react';
import { FileText } from 'lucide-react';

export default function AdminAudit() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Audit Logs</h2>
          <p className="text-xs text-slate-500">Track system activity and changes.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Module</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 text-slate-500 font-mono">Jan 15, 2025 10:24</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Dr. Priya Sharma</td>
                <td className="py-3 px-4 text-slate-700">Updated patient record</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded text-[11px]">Patients</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
