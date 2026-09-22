import React from 'react';
import { KeyRound, CheckCircle } from 'lucide-react';

export default function AdminIntegrations() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Integrations</h2>
          <p className="text-xs text-slate-500">Connect with third-party services and configure settings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-slate-800">WhatsApp Business</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Connected
            </span>
          </div>
          <p className="text-xs text-slate-500">Send appointment reminders and notifications via WhatsApp.</p>
          <button className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs py-1.5 rounded-lg transition-colors">
            Configure
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-slate-800">SMS Gateway</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Connected
            </span>
          </div>
          <p className="text-xs text-slate-500">Send SMS alerts and updates to patients.</p>
          <button className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs py-1.5 rounded-lg transition-colors">
            Configure
          </button>
        </div>
      </div>
    </div>
  );
}
