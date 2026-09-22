import React from 'react';
import { Star } from 'lucide-react';

export default function RecFeedback() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Patient Feedback</h2>
          <p className="text-xs text-slate-500">Collect and view patient satisfaction feedback.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 font-medium">Average Rating</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-slate-800">4.6 / 5</span>
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Feedback</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Rahul Mehta</td>
                <td className="py-3 px-4 text-slate-700">Dr. Priya Sharma</td>
                <td className="py-3 px-4 font-bold text-amber-500">★★★★★</td>
                <td className="py-3 px-4 text-slate-600">Excellent service!</td>
                <td className="py-3 px-4 text-slate-500 font-mono">Jan 15, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
