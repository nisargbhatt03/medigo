import React, { useState } from 'react';
import { Pill, Download, ShoppingCart, CheckCircle2 } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientPrescriptions({ setActivePatientScreen }) {
  const [tab, setTab] = useState('active');

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 flex gap-4 text-xs font-semibold text-slate-500">
        <button
          onClick={() => setTab('active')}
          className={`pb-2.5 border-b-2 transition-colors ${
            tab === 'active' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
          }`}
        >
          Active Prescriptions
        </button>
        <button
          onClick={() => setTab('past')}
          className={`pb-2.5 border-b-2 transition-colors ${
            tab === 'past' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
          }`}
        >
          Past Prescriptions
        </button>
      </div>

      {/* Single Row Static Preview Card/Table Grid */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Prescription Details</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/40 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <div>
                <p className="text-xs font-bold text-slate-800">Dr. Priya Sharma</p>
                <p className="text-[11px] text-slate-500">Jan 15, 2025 &bull; General Medicine</p>
              </div>
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Active</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-white text-slate-500 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-3">Medicine Name</th>
                    <th className="py-2 px-3">Dosage</th>
                    <th className="py-2 px-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800">Paracetamol 500mg</td>
                    <td className="py-2 px-3 font-mono text-slate-600">1-0-1 (After food)</td>
                    <td className="py-2 px-3 text-slate-600">5 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-2 pt-2">
              <button className="text-xs bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg font-medium shadow-2xs flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" /> Download PDF
              </button>
              <button 
                onClick={() => setActivePatientScreen('patient-medicines')}
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-medium shadow-2xs flex items-center gap-1.5"
              >
                <ShoppingCart className="w-3.5 h-3.5" /> Order from Pharmacy
              </button>
            </div>
          </div>
        </div>
        <Pagination currentPage={1} totalPages={4} totalItems={12} />
      </div>
    </div>
  );
}
