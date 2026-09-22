import React from 'react';
import { Search } from 'lucide-react';

export default function DocICD() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Diagnoses & ICD Codes</h2>
          <p className="text-xs text-slate-500">Search and select medical diagnoses with ICD-10 codes.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Type condition name or ICD code..." className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4">ICD Code</th>
                <th className="py-3 px-4">Condition</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600 font-bold">J06.9</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Acute upper respiratory infection</td>
                <td className="py-3 px-4 text-slate-600">Respiratory</td>
                <td className="py-3 px-4 text-right">
                  <button className="bg-blue-600 text-white font-semibold text-xs px-3 py-1 rounded">Select</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
