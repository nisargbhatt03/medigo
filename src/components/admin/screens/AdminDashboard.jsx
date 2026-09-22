import React from 'react';
import { Users, Calendar, DollarSign, Stethoscope, TrendingUp, Bell } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">

      {/* Metrics Row - 1 Row of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Patients</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">1,248</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Appointments</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">342</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +8%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Revenue</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">₹4,85,320</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +24%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Active Doctors</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">12</span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              → 0%
            </span>
          </div>
        </div>
      </div>

      {/* Visual Charts Grid - 1 Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800">Appointments Overview</h3>
            <span className="text-xs text-slate-500">This Month</span>
          </div>
          <div className="h-44 w-full pt-4">
            <svg className="w-full h-full" viewBox="0 0 500 120">
              <path d="M 0,80 Q 100,40 200,60 T 400,30 T 500,50" fill="none" stroke="#2563EB" strokeWidth="2.5" />
              <path d="M 0,100 Q 100,70 200,80 T 400,60 T 500,70" fill="none" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <h3 className="text-sm font-bold text-slate-800 mb-2">Patients by Department</h3>
          <div className="flex items-center justify-center my-2">
            <div className="w-28 h-28 rounded-full border-8 border-blue-600 border-t-emerald-500 border-r-amber-500 flex items-center justify-center text-center">
              <div>
                <span className="text-base font-bold text-slate-800">1,248</span>
                <span className="text-[10px] text-slate-400 block">Patients</span>
              </div>
            </div>
          </div>
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>General Medicine</span><span className="font-bold">40%</span></div>
            <div className="flex justify-between"><span>Pediatrics</span><span className="font-bold">22%</span></div>
          </div>
        </div>
      </div>

      {/* Bottom Grid - 1 Static Row Appointments & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-slate-800">Recent Appointments</h3>
            <button className="text-xs text-blue-600 font-semibold">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
                <tr>
                  <th className="py-2 px-3">Time</th>
                  <th className="py-2 px-3">Patient</th>
                  <th className="py-2 px-3">Doctor</th>
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="py-2 px-3 font-mono text-slate-600">10:00 AM</td>
                  <td className="py-2 px-3 font-semibold text-slate-800">Rahul Mehta</td>
                  <td className="py-2 px-3 text-slate-600">Dr. Priya Sharma</td>
                  <td className="py-2 px-3 text-slate-500">Consultation</td>
                  <td className="py-2 px-3">
                    <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Checked In</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-800 mb-3">Notifications</h3>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-600" />
              <span className="text-slate-800 font-medium">2 new appointment requests</span>
            </div>
            <span className="text-[10px] text-slate-400">5 mins ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
