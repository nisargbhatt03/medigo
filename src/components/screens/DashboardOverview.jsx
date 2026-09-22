import React from 'react';
import { Building2, Users, DollarSign, CreditCard, TrendingUp, CheckCircle2, UserPlus, FileCheck } from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div className="space-y-6">

      {/* Metric Cards - 1 Row of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Clinics</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">124</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12%
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Active Users</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">2,842</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +18%
            </span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Monthly Revenue</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">₹8,45,320</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +24%
            </span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Active Subscriptions</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">98</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +6%
            </span>
          </div>
        </div>
      </div>

      {/* Main Visuals Grid - 1 Row (Charts) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Overview Line Chart (2 Cols) */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Revenue Overview</h3>
              <p className="text-xs text-slate-400">₹ (in Lakhs)</p>
            </div>
            <select className="text-xs border border-slate-200 rounded-lg px-2.5 py-1 bg-slate-50 text-slate-600">
              <option>Last 12 months</option>
            </select>
          </div>
          {/* SVG Line Chart Representation */}
          <div className="h-44 w-full flex items-end pt-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120">
              <path
                d="M 0,90 Q 60,70 120,80 T 240,40 T 360,60 T 500,20"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
              />
              <path
                d="M 0,90 Q 60,70 120,80 T 240,40 T 360,60 T 500,20 L 500,120 L 0,120 Z"
                fill="url(#gradient)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Clinics by Plan Donut Chart (1 Col) */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <h3 className="text-sm font-bold text-slate-800 mb-2">Clinics by Plan</h3>
          <div className="flex items-center justify-center my-3 relative">
            <div className="w-32 h-32 rounded-full border-8 border-blue-500 border-t-emerald-500 border-r-indigo-500 flex items-center justify-center">
              <div className="text-center">
                <span className="text-xl font-bold text-slate-800">124</span>
                <span className="text-[10px] text-slate-400 block">Clinics</span>
              </div>
            </div>
          </div>
          <div className="space-y-1.5 text-xs text-slate-600">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"/> Basic</span>
              <span className="font-semibold text-slate-800">48</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500"/> Standard</span>
              <span className="font-semibold text-slate-800">52</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"/> Premium</span>
              <span className="font-semibold text-slate-800">24</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid - 1 Row (Recent Activity & System Health) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities (Static Display - 1 Row) */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-800 mb-3">Recent Activities</h3>
          <div className="border border-slate-100 rounded-lg p-3 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">New clinic registered</p>
                <p className="text-[11px] text-slate-500">Sunrise Care Clinic</p>
              </div>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">5 minutes ago</span>
          </div>
        </div>

        {/* System Health (Static Display - 1 Row items) */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-800 mb-3">System Health</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center justify-between p-2 rounded border border-emerald-100 bg-emerald-50/40">
              <span className="text-slate-700 font-medium">API Server</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Operational
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded border border-emerald-100 bg-emerald-50/40">
              <span className="text-slate-700 font-medium">Database</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
