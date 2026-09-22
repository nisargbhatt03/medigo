import React, { useState } from 'react';
import { Calendar, Plus, Search, MoreVertical } from 'lucide-react';

export default function AdminAppointments() {
  const [activeTab, setActiveTab] = useState('All Appointments');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Appointments</h2>
          <p className="text-xs text-slate-500">Manage patient appointments, scheduling and status.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
          <Plus className="w-4 h-4" /> Book Appointment
        </button>
      </div>

      <div className="border-b border-slate-200 flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
        {['All Appointments', 'Today', 'Upcoming', 'Completed', 'Cancelled'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2.5 transition-colors border-b-2 whitespace-nowrap ${
              activeTab === tab ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">UHID</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-mono text-slate-600">Jan 15, 2025 10:00 AM</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Rahul Mehta</td>
                <td className="py-3 px-4 font-mono text-blue-600">UHD001248</td>
                <td className="py-3 px-4 text-slate-700">Dr. Priya Sharma</td>
                <td className="py-3 px-4 text-slate-600">General Medicine</td>
                <td className="py-3 px-4 text-slate-500">Consultation</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Checked In</span>
                </td>
                <td className="py-3 px-4 text-right"><MoreVertical className="w-4 h-4 text-slate-400" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
