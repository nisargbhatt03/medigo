import React from 'react';
import { Receipt, Download, CreditCard } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientInvoices() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Invoices & Payment History</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Invoice #</th>
                <th className="py-2.5 px-4">Date</th>
                <th className="py-2.5 px-4">Description</th>
                <th className="py-2.5 px-4">Amount</th>
                <th className="py-2.5 px-4">Status</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600 font-medium">INV-2025-001</td>
                <td className="py-3 px-4 font-mono text-slate-600">Jan 15, 2025</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Consultation Fee (Dr. Priya Sharma)</td>
                <td className="py-3 px-4 font-bold text-slate-900">₹500</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Paid</span>
                </td>
                <td className="py-3 px-4 text-right space-x-2">
                  <button className="text-blue-600 hover:underline font-semibold">View Receipt</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={4} totalItems={16} />
      </div>
    </div>
  );
}
