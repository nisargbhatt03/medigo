import React from 'react';
import { Plus, Printer, Save, MoreVertical } from 'lucide-react';

export default function DocPrescriptions() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Prescription Management</h2>
          <p className="text-xs text-slate-500">Add medicines, set dosages and issue prescriptions.</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3 py-2 rounded-lg flex items-center gap-1.5">
            <Printer className="w-3.5 h-3.5" /> Print Prescription
          </button>
          <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5">
            <Save className="w-4 h-4" /> Save Prescription
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Medicine</th>
                <th className="py-3 px-4">Dosage</th>
                <th className="py-3 px-4">Frequency</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Instructions</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Paracetamol 500mg</td>
                <td className="py-3 px-4 text-slate-600">1 tablet</td>
                <td className="py-3 px-4 font-bold text-blue-600">TDS</td>
                <td className="py-3 px-4 text-slate-700">5 days</td>
                <td className="py-3 px-4 text-slate-600">After food</td>
                <td className="py-3 px-4 text-right"><MoreVertical className="w-4 h-4 text-slate-400" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
