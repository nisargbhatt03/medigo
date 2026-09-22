import React from 'react';
import { Gift, FileCheck, Clock, Copy, Download } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientOtherFeatures() {
  return (
    <div className="space-y-6">
      {/* Refer & Earn Banner Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="bg-white/20 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-white/30">Referral Program</span>
          <h3 className="text-lg font-bold mt-2">Refer Friends & Family to Medigo</h3>
          <p className="text-xs text-blue-100 mt-1">Get ₹500 health credit for every friend who books an appointment.</p>
        </div>
        <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-center backdrop-blur-xs">
          <p className="text-[10px] text-blue-200 uppercase font-semibold">Your Referral Code</p>
          <p className="text-lg font-extrabold font-mono text-amber-300">RAHUL500</p>
        </div>
      </div>

      {/* Activity Log Table + Pagination */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Account Activity Log</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Timestamp</th>
                <th className="py-2.5 px-4">Action</th>
                <th className="py-2.5 px-4">Device / IP</th>
                <th className="py-2.5 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-600">Jan 15, 2025 &bull; 10:30 AM</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Patient Portal Login</td>
                <td className="py-3 px-4 text-slate-600">Chrome on Windows &bull; New Delhi</td>
                <td className="py-3 px-4 text-right">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Success</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={4} totalItems={16} />
      </div>
    </div>
  );
}
