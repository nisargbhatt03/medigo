import React, { useState } from 'react';
import { KeyRound, Plus, MoreVertical, CheckCircle, ExternalLink } from 'lucide-react';

export default function ApiIntegrations() {
  const [activeTab, setActiveTab] = useState('API Keys');

  const tabs = ['API Keys', 'Integrations', 'Webhooks', 'Documentation'];

  return (
    <div className="space-y-6">
      {/* Tabs with Generate API Key button on Right */}
      <div className="border-b border-slate-200 flex items-center justify-between gap-4">
        <div className="flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
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
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-1.5 mb-2 rounded-lg flex items-center gap-2 shadow-xs shrink-0 transition-colors">
          <Plus className="w-4 h-4" /> Generate API Key
        </button>
      </div>

      {/* API Keys Table - 1 Static Row as requested */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800">Active API Keys</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Key</th>
                <th className="py-3 px-4">Permissions</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Created At</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Production Key</td>
                <td className="py-3 px-4 font-mono text-slate-600">sk_live_************</td>
                <td className="py-3 px-4 text-slate-700">Full Access</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Active</span>
                </td>
                <td className="py-3 px-4 text-slate-500">Jan 10, 2025</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 text-slate-400 hover:text-slate-600"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Popular Integrations Cards - 1 Row */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-800">Popular Integrations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-slate-800">Razorpay</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Connected
              </span>
            </div>
            <p className="text-xs text-slate-500">Accept online payments across India.</p>
            <button className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs py-1.5 rounded-lg transition-colors">
              Configure
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-slate-800">Stripe</span>
              <span className="text-[10px] bg-slate-100 text-slate-500 font-medium px-2 py-0.5 rounded">Not Connected</span>
            </div>
            <p className="text-xs text-slate-500">Global payment gateway integration.</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-1.5 rounded-lg transition-colors">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
