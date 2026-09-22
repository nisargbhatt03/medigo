import React from 'react';
import { ShieldCheck, Plus, FileText } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientInsurance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Insurance & Claims</h2>
          <p className="text-xs text-slate-500">Manage your health insurance policies and track claim status.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
          <Plus className="w-4 h-4" /> Add Insurance
        </button>
      </div>

      {/* Insurance Card */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl p-5 text-white shadow-md space-y-4 max-w-lg">
        <div className="flex justify-between items-center">
          <span className="font-extrabold tracking-wide text-sm flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-emerald-400" /> Star Health Insurance</span>
          <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">Active</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p className="text-blue-200 text-[10px] uppercase">Policy Number</p>
            <p className="font-mono font-bold">SH123456789</p>
          </div>
          <div>
            <p className="text-blue-200 text-[10px] uppercase">Policy Holder</p>
            <p className="font-semibold">Rahul Mehta</p>
          </div>
          <div>
            <p className="text-blue-200 text-[10px] uppercase">Valid Till</p>
            <p className="font-mono">Dec 31, 2025</p>
          </div>
          <div>
            <p className="text-blue-200 text-[10px] uppercase">Coverage</p>
            <p className="font-bold text-emerald-300">₹5,00,000</p>
          </div>
        </div>
      </div>

      {/* Claims History Table + Pagination */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Claims History</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Date</th>
                <th className="py-2.5 px-4">Claim ID</th>
                <th className="py-2.5 px-4">Claim Type</th>
                <th className="py-2.5 px-4">Amount</th>
                <th className="py-2.5 px-4">Status</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-600">Jan 10, 2025</td>
                <td className="py-3 px-4 font-mono text-blue-600">CLM00125</td>
                <td className="py-3 px-4 text-slate-700 font-medium">OPD Consultation</td>
                <td className="py-3 px-4 font-bold text-slate-800">₹1,240</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Approved</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="text-blue-600 hover:underline font-semibold">View Claim</button>
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
