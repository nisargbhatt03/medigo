import React from 'react';
import { CheckCircle2, Pill } from 'lucide-react';

export default function PharmaRxDetails() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-800">Prescription #RX-001245</h3>
            <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Completed</span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Jan 15, 2025, 09:15 AM | Prescribed by Dr. Priya Sharma</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Medicine Name</th>
                <th className="py-3 px-4">Dosage</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Instructions</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Paracetamol 500mg</td>
                <td className="py-3 px-4 text-slate-600 font-bold">1-0-1</td>
                <td className="py-3 px-4 text-slate-700">5 days</td>
                <td className="py-3 px-4 text-slate-600">After food</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Dispensed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
