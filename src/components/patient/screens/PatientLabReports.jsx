import React from 'react';
import { FlaskConical, Download, Eye } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientLabReports() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Lab & Diagnostic Reports</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Date</th>
                <th className="py-2.5 px-4">Test Name</th>
                <th className="py-2.5 px-4">Diagnostic Lab</th>
                <th className="py-2.5 px-4">Result Status</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-600">Jan 10, 2025</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Complete Blood Count (CBC)</td>
                <td className="py-3 px-4 text-slate-600">Sunrise Care Diagnostics</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Normal</span>
                </td>
                <td className="py-3 px-4 text-right space-x-2">
                  <button className="text-blue-600 hover:underline font-semibold">View</button>
                  <button className="text-slate-600 hover:underline font-semibold">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={3} totalItems={9} />
      </div>
    </div>
  );
}
