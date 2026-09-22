import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function DocMessages() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Messages & Notifications</h2>
          <p className="text-xs text-slate-500">Communicate with patients and staff.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-xs">
          <div>
            <p className="font-semibold text-slate-800">Sneha Patel</p>
            <p className="text-slate-600">Hi doctor, can I continue the medicine for 5 more days?</p>
          </div>
          <span className="text-[10px] text-slate-400">10:30 AM</span>
        </div>
      </div>
    </div>
  );
}
