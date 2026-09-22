import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Building2, X, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function ClinicManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search clinics by name, email or location..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Plans</option>
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 flex items-center gap-1.5 font-medium">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" /> Create Clinic
          </button>
        </div>
      </div>

      {/* Table Container - Single Static Row as requested */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Clinic Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Users</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Created At</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Building2 className="w-4 h-4" />
                  </div>
                  Sunrise Care Clinic
                </td>
                <td className="py-3 px-4 text-slate-600">Mumbai</td>
                <td className="py-3 px-4">
                  <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded border border-slate-200">
                    Standard
                  </span>
                </td>
                <td className="py-3 px-4 font-semibold text-slate-700">12</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-500">Jan 15, 2025</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Showing 1 of 124 clinics</span>
          <div className="flex items-center gap-1 font-mono text-xs">
            <span className="px-2 py-1 bg-blue-600 text-white rounded font-bold">1</span>
            <span className="px-2 py-1 hover:bg-slate-200 rounded cursor-pointer">2</span>
            <span className="px-2 py-1 hover:bg-slate-200 rounded cursor-pointer">3</span>
          </div>
        </div>
      </div>

      {/* Create New Clinic Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 border border-slate-100 space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Register New Clinic</h3>
                <p className="text-xs text-slate-500 mt-0.5">Provision a new clinic tenant organization on Medigo.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Clinic Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Clinic Name *</label>
                  <input type="text" placeholder="e.g. Sunrise Care Clinic" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Subdomain Slug *</label>
                  <div className="relative">
                    <input type="text" placeholder="sunrisecare" className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-20 py-2 text-slate-800" />
                    <span className="text-[10px] text-slate-400 font-mono absolute right-2 top-2.5">.medigo.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Admin & Contact</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Admin Email *</label>
                  <input type="email" placeholder="admin@sunrisecare.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Contact Phone</label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Subscription & Location</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Subscription Plan *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>Standard (₹2,999/mo)</option>
                    <option>Basic (₹999/mo)</option>
                    <option>Premium (₹9,999/mo)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">City / Location</label>
                  <input type="text" placeholder="e.g. Mumbai" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 text-xs">
              <button onClick={() => setIsModalOpen(false)} className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-xl">
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm">
                Create Clinic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

