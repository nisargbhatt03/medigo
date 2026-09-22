import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function RecComms() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Communications</h2>
          <p className="text-xs text-slate-500">Send SMS, WhatsApp or Email to patients.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-2xl space-y-4 text-xs">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Compose Message</h3>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Select Channel</label>
          <div className="flex gap-2">
            <span className="bg-blue-600 text-white font-bold px-3 py-1.5 rounded">SMS</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1.5 rounded">WhatsApp</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1.5 rounded">Email</span>
          </div>
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Recipient</label>
          <input type="text" defaultValue="Rahul Mehta (+91 98765 43210)" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-semibold" />
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Message</label>
          <textarea rows={3} defaultValue="Dear Rahul Mehta, your appointment with Dr. Priya Sharma is confirmed for today at 10:00 AM." className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-800" />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5">
          <Send className="w-4 h-4" /> Send Message
        </button>
      </div>
    </div>
  );
}
