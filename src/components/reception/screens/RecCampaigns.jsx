import React from 'react';
import { Plus, MessageCircle } from 'lucide-react';

export default function RecCampaigns() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">WhatsApp Campaigns</h2>
          <p className="text-xs text-slate-500">Send health camp info, reminders and promotional messages.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> New Campaign
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Campaign Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Audience</th>
                <th className="py-3 px-4">Sent On</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> Diabetes Awareness
                </td>
                <td className="py-3 px-4 text-slate-600">Promotional</td>
                <td className="py-3 px-4 text-slate-700">All Patients</td>
                <td className="py-3 px-4 text-slate-500 font-mono">Jan 10, 2025</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Sent</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
