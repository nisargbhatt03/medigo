import React from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function DocPatientMessages() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Messages</h2>
          <p className="text-xs text-slate-500">Communicate with your patients securely.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
            RM
          </div>
          <div>
            <p className="font-bold text-slate-800 text-xs">Rahul Mehta</p>
            <p className="text-[10px] text-emerald-600">Online</p>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-2">
          <div className="bg-white p-2.5 rounded border border-slate-200 w-max max-w-md">
            <p className="text-slate-800">Hi Doctor, I'm feeling much better today!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
