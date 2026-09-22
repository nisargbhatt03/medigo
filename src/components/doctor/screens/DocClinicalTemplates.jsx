import React from 'react';
import { Plus, FileCode2 } from 'lucide-react';

export default function DocClinicalTemplates() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Clinical Templates</h2>
          <p className="text-xs text-slate-500">Use templates and macros to save time.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <Plus className="w-4 h-4" /> New Template
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Template Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                  <FileCode2 className="w-4 h-4 text-blue-600" /> General Consultation
                </td>
                <td className="py-3 px-4 text-slate-600">Note Template</td>
                <td className="py-3 px-4 text-right">
                  <button className="bg-blue-600 text-white font-semibold text-xs px-3 py-1 rounded">Use</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
