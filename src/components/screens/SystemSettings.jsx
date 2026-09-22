import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function SystemSettings() {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = ['General', 'Email', 'SMS', 'WhatsApp', 'Payment', 'Integrations', 'Security'];

  return (
    <div className="space-y-6">
      {/* Sub-tabs with Save Changes on Right */}
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
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-1.5 mb-2 rounded-lg flex items-center gap-2 shadow-xs transition-colors shrink-0">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      {/* Form Content */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4 w-full">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">General Settings</h3>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Platform Name *</label>
              <input
                type="text"
                defaultValue="Medigo"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Platform URL</label>
              <input
                type="text"
                defaultValue="https://app.medigo.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Support Email *</label>
              <input
                type="email"
                defaultValue="support@medigo.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Default Timezone</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                  <option>(GMT+5:30) Asia/Kolkata</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Default Language</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                  <option>English</option>
                </select>
              </div>
            </div>

            {/* Maintenance mode toggle */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">Maintenance Mode</p>
                <p className="text-[11px] text-slate-500">When enabled, only super admins can access the platform.</p>
              </div>
              <div className="w-10 h-5 bg-slate-300 rounded-full p-0.5 cursor-pointer flex items-center">
                <div className="w-4 h-4 bg-white rounded-full shadow-xs" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
