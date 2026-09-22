import React from 'react';
import { Database, Download, CheckCircle2 } from 'lucide-react';

export default function AdminBackup() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Backup & Data Management</h2>
          <p className="text-xs text-slate-500">Manage data backups, exports and system maintenance.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">Automated Daily Backups</h3>
            <p className="text-xs text-slate-500">Daily automated backups keep your clinic data safe and secure.</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg shadow-xs">
          Create Backup
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800">Backup History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 text-slate-600 font-mono">Jan 15, 2025 02:00 AM</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Full Backup</td>
                <td className="py-3 px-4 font-mono text-slate-600">1.2 GB</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px] flex items-center gap-1 w-max">
                    <CheckCircle2 className="w-3 h-3" /> Success
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1 justify-end">
                    <Download className="w-3.5 h-3.5" /> Download
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
