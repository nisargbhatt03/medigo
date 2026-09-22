import React, { useState } from 'react';
import { Plus, Download, TrendingUp, MoreVertical } from 'lucide-react';

export default function AdminBilling() {
  const [activeTab, setActiveTab] = useState('All Invoices');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Billing & Payments</h2>
          <p className="text-xs text-slate-500">Manage invoices, payments and financial records.</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-2xs">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
            <Plus className="w-4 h-4" /> Create Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Revenue</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">₹4,85,320</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> +24%</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Invoices</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">842</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> +18%</span>
        </div>
      </div>

      <div className="border-b border-slate-200 flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
        {['All Invoices', 'Paid', 'Pending', 'Overdue', 'Refunded'].map(tab => (
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
                <th className="py-3 px-4">Invoice No</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-mono text-blue-600 font-bold">INV-001024</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Rahul Mehta</td>
                <td className="py-3 px-4 text-slate-500">Jan 15, 2025</td>
                <td className="py-3 px-4 font-extrabold text-slate-900">₹2,499</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Paid</span>
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
