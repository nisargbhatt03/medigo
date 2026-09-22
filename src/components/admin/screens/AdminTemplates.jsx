import React from 'react';
import { Plus, FileCode2, Edit } from 'lucide-react';

export default function AdminTemplates() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Document Templates</h2>
          <p className="text-xs text-slate-500">Create and manage templates for prescriptions, invoices and reports.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
          <Plus className="w-4 h-4" /> New Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FileCode2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">Standard Prescription</h3>
            <p className="text-xs text-slate-500 mt-1">Default prescription layout with clinic header & Rx lines.</p>
          </div>
          <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-xs py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1">
            <Edit className="w-3.5 h-3.5" /> Use Template
          </button>
        </div>
      </div>
    </div>
  );
}
