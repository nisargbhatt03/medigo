import React from 'react';
import { HelpCircle, PhoneCall, AlertTriangle, Plus, FileText } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientEmergencySupport() {
  return (
    <div className="space-y-6">
      {/* Emergency Alert Banner */}
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-rose-900">In Case of Medical Emergency</h4>
            <p className="text-[11px] text-rose-700">Call 108 for immediate ambulance dispatch or contact clinic emergency line below.</p>
          </div>
        </div>
        <a href="tel:108" className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-xs whitespace-nowrap">
          Call 108 Now
        </a>
      </div>

      {/* Support Tickets Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Support & Help Tickets</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" /> New Ticket
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Ticket ID</th>
                <th className="py-2.5 px-4">Subject</th>
                <th className="py-2.5 px-4">Category</th>
                <th className="py-2.5 px-4">Date Created</th>
                <th className="py-2.5 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600 font-medium">#TKT-00125</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Unable to download lab report</td>
                <td className="py-3 px-4 text-slate-600">Lab Technical Issue</td>
                <td className="py-3 px-4 text-slate-500">Jan 15, 2025</td>
                <td className="py-3 px-4 text-right">
                  <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded text-[10px]">Open</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={2} totalItems={4} />
      </div>
    </div>
  );
}
