import React from 'react';
import { Search, Plus, FileText, Calendar } from 'lucide-react';

export default function RecPatientSearch() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Patient Search & Profile</h2>
          <p className="text-xs text-slate-500">Search and view patient details, visit history and documents.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input type="text" defaultValue="Rahul Mehta" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 font-semibold" />
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg">Search</button>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-base flex items-center justify-center">
            RM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">Rahul Mehta</h3>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Active</span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">UHID: UHD001248 | +91 98765 43210 | rahul@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-xs font-bold text-slate-800">Visit History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 text-slate-500">Jan 15, 2025</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Dr. Priya Sharma</td>
                <td className="py-3 px-4 text-slate-600">General Medicine</td>
                <td className="py-3 px-4 text-slate-500">Consultation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
