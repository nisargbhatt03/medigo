import React from 'react';
import { Video, Mic, MicOff, Camera, PhoneOff, MessageSquare } from 'lucide-react';

export default function PatientTelemedicine() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video Consultation Main Screen */}
      <div className="lg:col-span-2 bg-slate-900 rounded-2xl overflow-hidden relative min-h-[420px] flex flex-col justify-between p-4 shadow-xl">
        {/* Top Header overlay */}
        <div className="flex justify-between items-center text-white text-xs z-10">
          <span className="bg-emerald-500/20 text-emerald-400 font-mono px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Call: 00:12:34
          </span>
          <span className="font-semibold text-slate-300">Dr. Priya Sharma &bull; General Medicine</span>
        </div>

        {/* Doctor Video Placeholder representation */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400 space-y-2">
          <div className="w-24 h-24 rounded-full bg-indigo-600/30 border-2 border-indigo-400/40 flex items-center justify-center text-indigo-300 font-bold text-2xl shadow-inner">
            PS
          </div>
          <p className="text-xs font-semibold text-slate-200">Dr. Priya Sharma (Video Connected)</p>
        </div>

        {/* Self View Thumb */}
        <div className="absolute bottom-16 right-4 w-28 h-20 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg flex items-center justify-center text-slate-400 text-[10px] z-10">
          Self Camera
        </div>

        {/* Call Controls Bar */}
        <div className="flex items-center justify-center gap-3 z-10 pt-4">
          <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors">
            <Mic className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors">
            <Camera className="w-4 h-4" />
          </button>
          <button className="w-11 h-11 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg transition-colors">
            <PhoneOff className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Consultation Notes / Quick Prescription */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Consultation Notes</h3>
          <p className="text-xs text-slate-600 mt-2">
            Patient reporting fever & mild headache since 2 days. Recommended rest and hydration.
          </p>
        </div>

        <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 space-y-2">
          <p className="text-xs font-bold text-blue-900">Digital Prescription Issued</p>
          <p className="text-[11px] text-slate-600">&bull; Paracetamol 500mg (1-0-1)</p>
          <button className="w-full text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 rounded-lg shadow-xs mt-1">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
