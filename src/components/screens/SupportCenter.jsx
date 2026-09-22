import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, MessageSquare } from 'lucide-react';

export default function SupportCenter() {
  const [activeTab, setActiveTab] = useState('All Tickets');

  const tabs = [
    { label: 'All Tickets', count: '42' },
    { label: 'Open', count: '10' },
    { label: 'In Progress', count: '12' },
    { label: 'Resolved', count: '18' },
    { label: 'Closed', count: '2' },
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search tickets by subject, clinic or ticket ID..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Priority</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Status</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs transition-colors">
            <Plus className="w-4 h-4" /> New Ticket
          </button>
        </div>
      </div>

      {/* Table - 1 Static Row as requested */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-16">#</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Clinic</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Created At</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600 font-bold">#1245</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Login Issue</td>
                <td className="py-3 px-4 text-slate-600">Sunrise Care Clinic</td>
                <td className="py-3 px-4">
                  <span className="bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded text-[11px]">
                    High
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded text-[11px]">
                    Open
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-500">Jan 15, 2025</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 text-slate-400 hover:text-slate-600"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
