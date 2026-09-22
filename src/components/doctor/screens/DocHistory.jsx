import React from 'react';
import { Clock, Eye } from 'lucide-react';

export default function DocHistory() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Patient History</h2>
          <p className="text-xs text-slate-500">View past medical history, consultation notes and records.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-xs font-bold text-slate-800 flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600" /> Consultation Timeline
        </h3>
        <div className="border border-slate-100 rounded-lg p-3 bg-slate-50 text-xs flex justify-between items-center">
          <div>
            <p className="font-semibold text-slate-800">Jan 15, 2025 • Consultation</p>
            <p className="text-slate-600">Diagnosis: Cough and cold</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" /> View Notes
          </button>
        </div>
      </div>
    </div>
  );
}
