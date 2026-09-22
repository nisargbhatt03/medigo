import React, { useState } from 'react';
import { Download, FileText, Calendar } from 'lucide-react';

export default function AdminReports() {
  const [activeTab, setActiveTab] = useState('Patient Reports');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Reports</h2>
          <p className="text-xs text-slate-500">View and export detailed reports about your clinic.</p>
        </div>
      </div>

      <div className="border-b border-slate-200 flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
        {['Patient Reports', 'Financial Reports', 'Appointment Reports', 'Staff Reports'].map(tab => (
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

      {/* Report Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-800">Patient Summary</h3>
            <p className="text-[11px] text-slate-500 mt-1">Total patients, new patients, and demographics.</p>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-1.5 rounded-lg transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Recent Reports Table - 1 Row */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800">Recent Reports</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Report Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Date Range</th>
                <th className="py-3 px-4">Generated On</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Monthly Revenue Report</td>
                <td className="py-3 px-4 text-slate-600">Financial</td>
                <td className="py-3 px-4 font-mono text-slate-500">Jan 1 - Jan 31, 2025</td>
                <td className="py-3 px-4 text-slate-500">Jan 31, 2025</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-blue-600 hover:underline font-semibold flex items-center gap-1 justify-end">
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
