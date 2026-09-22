import React, { useState } from 'react';
import { UserPlus, Search, Filter, MoreVertical } from 'lucide-react';

export default function AdminStaff() {
  const [activeTab, setActiveTab] = useState('All Staff');

  const tabs = [
    { label: 'All Staff', count: '24' },
    { label: 'Doctors', count: '12' },
    { label: 'Reception', count: '5' },
    { label: 'Medical Staff', count: '4' },
    { label: 'Admin Staff', count: '3' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Staff Management</h2>
          <p className="text-xs text-slate-500">Manage all staff members, roles and access permissions.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
          <UserPlus className="w-4 h-4" /> Add Staff
        </button>
      </div>

      <div className="border-b border-slate-200 flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`pb-2.5 transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === tab.label ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
            }`}
          >
            <span>{tab.label}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Search staff..." className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Dr. Priya Sharma</td>
                <td className="py-3 px-4 text-slate-600">priya@clinic.com</td>
                <td className="py-3 px-4">Doctor</td>
                <td className="py-3 px-4 text-slate-700">General Medicine</td>
                <td className="py-3 px-4 font-mono text-slate-600">+91 98765 43210</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Active</span>
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
