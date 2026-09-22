import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, MoreVertical } from 'lucide-react';

export default function RevenueManagement() {
  return (
    <div className="space-y-6">
      {/* Metrics Row - 1 Row of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Revenue</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">₹8,45,320</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +24%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Payments</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">₹7,92,450</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +18%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Pending Payments</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">₹52,870</span>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingDown className="w-3 h-3" /> -12%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Refunds</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-800">₹12,450</span>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingDown className="w-3 h-3" /> -6%
            </span>
          </div>
        </div>
      </div>

      {/* Visuals - Revenue Trend Chart & Revenue by Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800">Revenue Trend</h3>
            <span className="text-xs text-slate-500 font-medium">Monthly</span>
          </div>
          <div className="h-44 w-full flex items-end pt-4">
            <svg className="w-full h-full" viewBox="0 0 500 120">
              <path
                d="M 0,100 Q 80,60 160,80 T 320,30 T 500,50"
                fill="none"
                stroke="#2563EB"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <h3 className="text-sm font-bold text-slate-800 mb-2">Revenue by Plan</h3>
          <div className="flex items-center justify-center my-3">
            <div className="w-28 h-28 rounded-full border-8 border-blue-600 border-t-emerald-500 border-r-indigo-500 flex items-center justify-center text-center">
              <div>
                <span className="text-sm font-bold text-slate-800">₹8.45L</span>
                <span className="text-[10px] text-slate-400 block">Total</span>
              </div>
            </div>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between"><span>Basic</span><span className="font-bold">26%</span></div>
            <div className="flex justify-between"><span>Standard</span><span className="font-bold">42%</span></div>
            <div className="flex justify-between"><span>Premium</span><span className="font-bold">26%</span></div>
          </div>
        </div>
      </div>

      {/* Recent Transactions - 1 Static Row */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-800">Recent Transactions</h3>
          <button className="text-xs text-blue-600 font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Clinic</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Payment Method</th>
                <th className="py-3 px-4">Invoice</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 text-slate-500">Jan 15, 2025</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Sunrise Care Clinic</td>
                <td className="py-3 px-4">Standard</td>
                <td className="py-3 px-4 font-bold text-slate-900">₹2,999</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Paid</span>
                </td>
                <td className="py-3 px-4 text-slate-600">Razorpay</td>
                <td className="py-3 px-4 font-mono text-blue-600">INV-00124</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 text-slate-400 hover:text-slate-600"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
