import React from 'react';
import { Download, TrendingUp } from 'lucide-react';

export default function RecReports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Reception Reports</h2>
          <p className="text-xs text-slate-500">View and export reception activity reports.</p>
        </div>
        <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-2xs">
          <Download className="w-3.5 h-3.5" /> Export
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Appointments</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">342</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Walk-in Patients</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">86</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-xs font-bold text-slate-800">Department-wise Appointments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Checked In</th>
                <th className="py-3 px-4">Completed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">General Medicine</td>
                <td className="py-3 px-4 font-bold text-slate-800">98</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">92</td>
                <td className="py-3 px-4 text-blue-600 font-semibold">85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
