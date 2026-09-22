import React, { useState } from 'react';
import { Save, HeartPulse } from 'lucide-react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = ['General', 'Clinic Profile', 'Working Hours', 'Billing & Payments', 'Notifications', 'Integrations', 'Security'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Clinic Settings</h2>
          <p className="text-xs text-slate-500">Manage your clinic's general settings and preferences.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs self-start sm:self-auto">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">General Settings</h3>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Clinic Name</label>
              <input type="text" defaultValue="Sunrise Care Clinic" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Email</label>
              <input type="email" defaultValue="admin@sunrisecare.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Phone</label>
              <input type="text" defaultValue="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4 text-center">
          <h3 className="text-sm font-bold text-slate-800">Clinic Logo</h3>
          <div className="border border-dashed border-slate-200 rounded-xl p-4 bg-slate-50 flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-2">
              <HeartPulse className="w-6 h-6 text-cyan-600" />
              <span className="font-bold text-base text-slate-900">Sunrise Care</span>
            </div>
            <button className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-lg font-medium shadow-2xs">
              Change Logo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
