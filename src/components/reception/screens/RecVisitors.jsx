import React from 'react';
import { UserPlus2 } from 'lucide-react';

export default function RecVisitors() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Visitor Management</h2>
          <p className="text-xs text-slate-500">Maintain records of patient attendants and visitors.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
          <UserPlus2 className="w-4 h-4" /> Add Visitor
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Visitor Name</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Relation</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Check-in Time</th>
                <th className="py-3 px-4">Check-out Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Ramesh Mehta</td>
                <td className="py-3 px-4 text-slate-700">Rahul Mehta</td>
                <td className="py-3 px-4 text-slate-600">Father</td>
                <td className="py-3 px-4 font-mono text-slate-600">+91 98765 43210</td>
                <td className="py-3 px-4 font-mono text-slate-500">09:15 AM</td>
                <td className="py-3 px-4 font-mono text-slate-500">11:30 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
