import React, { useState } from 'react';
import { FileText, Download, Eye, UploadCloud, Clock, ShieldCheck } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientRecords() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = ['all', 'consultations', 'prescriptions', 'labs', 'radiology', 'others'];

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="border-b border-slate-200 flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`pb-2.5 capitalize border-b-2 whitespace-nowrap transition-colors ${
              activeTab === t ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Single Row Static Table Grid + Pagination */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Medical Records Vault</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Date</th>
                <th className="py-2.5 px-4">Record Type</th>
                <th className="py-2.5 px-4">Doctor</th>
                <th className="py-2.5 px-4">Notes / Remarks</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-600">Jan 15, 2025</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Consultation Note</td>
                <td className="py-3 px-4 text-slate-600">Dr. Priya Sharma</td>
                <td className="py-3 px-4 text-slate-500">Mild fever and cough assessment</td>
                <td className="py-3 px-4 text-right space-x-2">
                  <button className="text-blue-600 hover:underline font-semibold flex items-center gap-1 inline-flex">
                    <Eye className="w-3.5 h-3.5" /> View
                  </button>
                  <button className="text-slate-600 hover:underline font-semibold flex items-center gap-1 inline-flex">
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={5} totalItems={25} />
      </div>

      {/* Drag and Drop Document Upload Card */}
      <div className="bg-white p-6 rounded-xl border border-dashed border-slate-300 text-center space-y-2">
        <UploadCloud className="w-8 h-8 text-blue-600 mx-auto" />
        <h4 className="text-xs font-bold text-slate-800">Upload Medical Document</h4>
        <p className="text-[11px] text-slate-500">Drag and drop files here or click to upload (PDF, JPG, PNG &bull; Max 10MB)</p>
        <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg mt-2 shadow-xs">
          Select Document
        </button>
      </div>
    </div>
  );
}
