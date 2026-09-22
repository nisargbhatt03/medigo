import React, { useState } from 'react';
import { Search, Download, UserPlus, Filter, MoreVertical, X } from 'lucide-react';

export default function TenantManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search tenants..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Plans</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Status</option>
          </select>
          <button className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 flex items-center gap-1.5 font-medium">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-2xs transition-colors">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <UserPlus className="w-4 h-4" /> Add User
          </button>
        </div>
      </div>

      {/* Table - 1 Static Row as requested */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Tenant Name</th>
                <th className="py-3 px-4">Domain</th>
                <th className="py-3 px-4">Admin User</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Storage Used</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Sunrise Care Clinic</td>
                <td className="py-3 px-4 font-mono text-blue-600">sunrise.medigo.com</td>
                <td className="py-3 px-4 text-slate-600">dr.sharma@sunrise.com</td>
                <td className="py-3 px-4">
                  <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded border border-slate-200">
                    Standard
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-medium text-slate-700 block">12 GB / 50 GB</span>
                    <div className="w-28 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[24%]" />
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Showing 1 of 124 tenants</span>
        </div>
      </div>

      {/* Add New Tenant User Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 border border-slate-100 space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Add Tenant Administrator</h3>
                <p className="text-xs text-slate-500 mt-0.5">Assign a new administrator user to a clinic tenant.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">User Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                  <input type="text" placeholder="e.g. Dr. Priya Sharma" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                  <input type="email" placeholder="priya@sunrisecare.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Tenant & Permissions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Select Clinic Tenant *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>Sunrise Care Clinic</option>
                    <option>City Health Care</option>
                    <option>Apollo Wellness Center</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Assigned Role</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>Clinic Admin</option>
                    <option>Super Admin Delegate</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 text-xs">
              <button onClick={() => setIsModalOpen(false)} className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-xl">
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm">
                Add Tenant User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

