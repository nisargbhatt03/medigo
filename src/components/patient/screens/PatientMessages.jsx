import React, { useState } from 'react';
import { Send, Search, User } from 'lucide-react';

export default function PatientMessages() {
  const [activeChat, setActiveChat] = useState('Dr. Priya Sharma');

  const contacts = [
    { name: 'Dr. Priya Sharma', role: 'General Medicine', time: '10:30 AM', unread: true },
    { name: 'Clinic Support', role: 'Front Desk', time: 'Jan 13', unread: false },
    { name: 'Dr. Amit Kumar', role: 'Cardiology', time: 'Jan 12', unread: false },
    { name: 'Pharmacy', role: 'Prescriptions', time: 'Jan 10', unread: false },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden h-[540px] flex">
      {/* Sidebar Contacts List */}
      <div className="w-64 border-r border-slate-200 flex flex-col bg-slate-50/50">
        <div className="p-3 border-b border-slate-200">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full text-xs bg-white border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {contacts.map(c => (
            <div
              key={c.name}
              onClick={() => setActiveChat(c.name)}
              className={`p-3 flex items-center gap-3 cursor-pointer transition-colors ${
                activeChat === c.name ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-slate-100/60'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="text-xs font-bold text-slate-800 truncate">{c.name}</p>
                  <span className="text-[10px] text-slate-400 font-mono">{c.time}</span>
                </div>
                <p className="text-[11px] text-slate-500 truncate">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Box */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-3 border-b border-slate-200 flex items-center justify-between bg-slate-50/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              PS
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">{activeChat}</p>
              <p className="text-[10px] text-emerald-600 font-semibold">Online &bull; Available</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/20">
          <div className="flex flex-col items-start max-w-[80%]">
            <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-xs text-xs text-slate-800">
              Hello Rahul, please follow the prescribed dosage for 5 days. Let me know if fever persists.
            </div>
            <span className="text-[10px] text-slate-400 mt-1 pl-1">10:15 AM</span>
          </div>

          <div className="flex flex-col items-end max-w-[80%] ml-auto">
            <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-xs text-xs text-white">
              Thank you Doctor! I am feeling much better today.
            </div>
            <span className="text-[10px] text-slate-400 mt-1 pr-1">10:30 AM</span>
          </div>
        </div>

        <div className="p-3 border-t border-slate-200 flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs">
            <Send className="w-3.5 h-3.5" /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
