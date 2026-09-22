import React from 'react';
import { Save, CheckCircle2 } from 'lucide-react';

export default function DocConsultation() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-base flex items-center justify-center">
            RM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">Rahul Mehta</h3>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Active Patient</span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">UHID: UHD001248 | 34 years, Male | +91 98765 43210</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4 text-xs">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Vitals Summary</h3>
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-[10px] text-slate-500 font-medium">BP</p>
            <p className="font-extrabold text-slate-800 text-sm">120/80 mmHg</p>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-[10px] text-slate-500 font-medium">Pulse</p>
            <p className="font-extrabold text-slate-800 text-sm">72 bpm</p>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-[10px] text-slate-500 font-medium">Temp</p>
            <p className="font-extrabold text-slate-800 text-sm">98.6 °F</p>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-[10px] text-slate-500 font-medium">SpO2</p>
            <p className="font-extrabold text-slate-800 text-sm">98 %</p>
          </div>
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">Chief Complaint</label>
          <textarea rows={2} defaultValue="Cough and cold for 3 days with mild fever." className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-800" />
        </div>

        <div className="flex gap-2 pt-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Complete Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
