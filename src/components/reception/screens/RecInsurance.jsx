import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RecInsurance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Insurance Verification</h2>
          <p className="text-xs text-slate-500">Verify patient's insurance coverage before consultation.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-xl space-y-4">
        <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          <div>
            <span className="text-xs font-bold text-slate-800">Sneha Patel</span>
            <p className="text-xs text-slate-500">Star Health Insurance (SH123456789)</p>
          </div>
          <span className="bg-emerald-600 text-white font-bold text-[10px] px-2.5 py-1 rounded flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Verified
          </span>
        </div>
      </div>
    </div>
  );
}
