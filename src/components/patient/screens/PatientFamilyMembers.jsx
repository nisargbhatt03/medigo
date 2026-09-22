import React from 'react';
import { UserPlus, User, ShieldCheck } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientFamilyMembers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Family Members</h2>
          <p className="text-xs text-slate-500">Manage healthcare records for your family members.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
          <UserPlus className="w-4 h-4" /> Add Family Member
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Registered Family Members</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Name</th>
                <th className="py-2.5 px-4">Relation</th>
                <th className="py-2.5 px-4">Age / Gender</th>
                <th className="py-2.5 px-4">UHID</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-800">Sneha Mehta</td>
                <td className="py-3 px-4 text-slate-600">Spouse</td>
                <td className="py-3 px-4 text-slate-600">32 yrs &bull; Female</td>
                <td className="py-3 px-4 font-mono text-blue-600">UHD-001249</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-blue-600 hover:underline font-semibold">View Profile</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={2} totalItems={6} />
      </div>
    </div>
  );
}
