import React from 'react';
import { Calendar, Users, FileText, TrendingUp, Clock, Bell } from 'lucide-react';

export default function DocDashboard() {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Today's Appointments</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">18</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Patients Seen</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">12</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Consultations</p>
          <p className="text-2xl font-extrabold text-blue-600 mt-1">6</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Follow-ups</p>
          <p className="text-2xl font-extrabold text-indigo-600 mt-1">4</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-800 mb-3">Today's Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
                <tr>
                  <th className="py-2 px-3">Time</th>
                  <th className="py-2 px-3">Patient</th>
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2.5 px-3 font-mono text-slate-600">09:00 AM</td>
                  <td className="py-2.5 px-3 font-semibold text-slate-800">Rahul Mehta</td>
                  <td className="py-2.5 px-3 text-slate-600">Consultation</td>
                  <td className="py-2.5 px-3">
                    <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Checked In</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-slate-800">Patient Queue</h3>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-slate-800">Neha Singh</p>
              <p className="text-[10px] text-slate-400">Pediatrics</p>
            </div>
            <span className="text-[10px] bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded">10 min wait</span>
          </div>
        </div>
      </div>
    </div>
  );
}
