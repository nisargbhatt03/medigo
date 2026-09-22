import React from 'react';
import { Pill, TrendingUp, AlertTriangle } from 'lucide-react';

export default function PharmaDashboard() {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Today's Sales</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">₹18,450</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Prescriptions Filled</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">86</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +8%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Low Stock Items</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-amber-600">12</span>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
              ▼ 25%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Inventory</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">1,248</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +5%
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-800 mb-4">Sales Trend (Last 7 Days)</h3>
          <div className="h-44 w-full pt-4">
            <svg className="w-full h-full" viewBox="0 0 500 120">
              <path d="M 0,90 Q 100,50 200,70 T 400,30 T 500,60" fill="none" stroke="#0D9488" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Top Selling Medicines</h3>
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-800">1. Paracetamol 500mg</span>
            <span className="font-mono text-slate-500">120 sold</span>
          </div>
        </div>
      </div>
    </div>
  );
}
