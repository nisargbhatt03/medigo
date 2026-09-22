import React, { useState } from 'react';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';

export default function ReportsAnalytics() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Revenue', 'Subscriptions', 'Users', 'Clinics', 'Usage', 'Custom Reports'];

  return (
    <div className="space-y-6">
      {/* Tabs with Export on Right */}
      <div className="border-b border-slate-200 flex items-center justify-between gap-4">
        <div className="flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
          {tabs.map(tab => (
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
        <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3 py-1.5 mb-2 rounded-lg flex items-center gap-1.5 shadow-2xs shrink-0 transition-colors">
          <Download className="w-3.5 h-3.5" /> Export
        </button>
      </div>

      {/* Metric Cards - 1 Row of 5 Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-[11px] text-slate-500 font-medium">Total Revenue</p>
          <p className="text-lg font-extrabold text-slate-800 mt-1">₹8,45,320</p>
          <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5"><TrendingUp className="w-2.5 h-2.5" /> +24%</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-[11px] text-slate-500 font-medium">Total Clinics</p>
          <p className="text-lg font-extrabold text-slate-800 mt-1">124</p>
          <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5"><TrendingUp className="w-2.5 h-2.5" /> +18%</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-[11px] text-slate-500 font-medium">Total Users</p>
          <p className="text-lg font-extrabold text-slate-800 mt-1">2,842</p>
          <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5"><TrendingUp className="w-2.5 h-2.5" /> +18%</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-[11px] text-slate-500 font-medium">Active Subscriptions</p>
          <p className="text-lg font-extrabold text-slate-800 mt-1">98</p>
          <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5"><TrendingUp className="w-2.5 h-2.5" /> +6%</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-[11px] text-slate-500 font-medium">Churn Rate</p>
          <p className="text-lg font-extrabold text-slate-800 mt-1">4.2%</p>
          <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5"><TrendingDown className="w-2.5 h-2.5" /> ▼ 1.1%</span>
        </div>
      </div>

      {/* Visual Analytics Charts Grid - 1 Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Revenue Growth Chart */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <h3 className="text-xs font-bold text-slate-800 mb-2">Revenue Growth</h3>
          <div className="h-32 w-full pt-2">
            <svg className="w-full h-full" viewBox="0 0 300 100">
              <path d="M 0,80 Q 50,60 100,70 T 200,30 T 300,20" fill="none" stroke="#2563EB" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        {/* Clinic Registrations Bar Chart */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <h3 className="text-xs font-bold text-slate-800 mb-2">Clinic Registrations</h3>
          <div className="h-32 w-full flex items-end justify-between gap-1.5 pt-4">
            {[40, 65, 50, 85, 95, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-emerald-500 rounded-t hover:bg-emerald-600 transition-all" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* User Distribution Donut */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800 mb-1">User Distribution</h3>
          <div className="flex items-center justify-center my-2">
            <div className="w-24 h-24 rounded-full border-6 border-blue-600 border-t-emerald-500 border-r-amber-500 flex items-center justify-center text-center">
              <div>
                <span className="text-xs font-bold text-slate-800">2,842</span>
                <span className="text-[9px] text-slate-400 block">Users</span>
              </div>
            </div>
          </div>
          <div className="space-y-0.5 text-[10px] text-slate-600">
            <div className="flex justify-between"><span>Doctors</span><span className="font-bold">1,024</span></div>
            <div className="flex justify-between"><span>Reception</span><span className="font-bold">892</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
