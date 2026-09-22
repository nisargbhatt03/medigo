import React, { useState } from 'react';
import { ShieldAlert, Search, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function SecurityCenter() {
  const [activeTab, setActiveTab] = useState('Login History');

  const tabs = ['Login History', 'Active Sessions', 'IP Restrictions', 'MFA Settings', 'Security Alerts'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Security Center</h2>
          <p className="text-xs text-slate-500">Monitor and manage platform security.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2.5 transition-colors border-b-2 whitespace-nowrap ${
              activeTab === tab ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search login logs by user, IP..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Users</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Status</option>
          </select>
        </div>
      </div>

      {/* Login History Table - 1 Static Row as requested */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">IP Address</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Device</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date & Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">superadmin@medigo.com</td>
                <td className="py-3 px-4 text-slate-600">Super Admin</td>
                <td className="py-3 px-4 font-mono text-slate-600">192.168.1.10</td>
                <td className="py-3 px-4 text-slate-700">Mumbai, India</td>
                <td className="py-3 px-4 text-slate-600">Chrome / macOS</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Success</span>
                </td>
                <td className="py-3 px-4 font-mono text-slate-500">Jan 15, 2025 10:24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Alerts Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-rose-800">5 Failed Login Attempts Detected</h4>
            <p className="text-[11px] text-rose-600 mt-0.5">Attempted from IP 192.51.100.25 on Jan 14, 2025 11:20.</p>
            <button className="mt-2 text-[11px] bg-rose-600 text-white font-semibold px-2.5 py-1 rounded hover:bg-rose-700 transition-colors">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-emerald-800">No Suspicious Activity</h4>
            <p className="text-[11px] text-emerald-600 mt-0.5">Your system security firewalls are active and secure.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
