import React from 'react';
import { Video, Mic, PhoneOff, MessageSquare } from 'lucide-react';

export default function DocTelemedicine() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Telemedicine Consultation</h2>
          <p className="text-xs text-slate-500">Conduct video consultations with patients.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 rounded-xl p-6 text-white flex flex-col justify-between h-96 relative overflow-hidden">
          <div className="flex justify-between items-center z-10">
            <span className="bg-slate-800/80 px-3 py-1 rounded-full text-xs font-mono">00:12:34</span>
            <span className="bg-red-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Live</span>
          </div>

          <div className="text-center z-10">
            <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto flex items-center justify-center text-3xl font-bold mb-2">
              RM
            </div>
            <p className="font-bold text-base">Rahul Mehta</p>
          </div>

          <div className="flex items-center justify-center gap-4 z-10">
            <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white"><Mic className="w-5 h-5" /></button>
            <button className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white"><PhoneOff className="w-6 h-6" /></button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-xs font-bold text-slate-800 border-b border-slate-100 pb-2">Patient Details</h3>
          <p className="text-xs font-bold text-slate-800">Rahul Mehta</p>
          <p className="text-[11px] text-slate-500">Chronic Conditions: Hypertension</p>
        </div>
      </div>
    </div>
  );
}
