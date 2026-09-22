import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

export default function AuditLogs() {
  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search by user, action or details..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Users</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Actions</option>
          </select>
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-2 rounded-lg font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Jan 1, 2025 - Jan 31, 2025</span>
          </div>
        </div>
      </div>

      {/* Table - 1 Static Row as requested */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Details</th>
                <th className="py-3 px-4">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 text-slate-500 font-mono">Jan 15, 2025 10:24</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Super Admin</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded text-[11px]">
                    Created clinic
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-700">New clinic 'Sunrise Care'</td>
                <td className="py-3 px-4 font-mono text-slate-500">192.168.1.10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Showing 1 of 1,384 logs</span>
        </div>
      </div>
    </div>
  );
}
