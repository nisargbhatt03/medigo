import React, { useState } from 'react';
import { Search, Download, UserPlus, Filter, MoreVertical, X } from 'lucide-react';

export default function UserManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All Users');

  const tabs = [
    { label: 'All Users', count: '2,842' },
    { label: 'Admins', count: '124' },
    { label: 'Doctors', count: '1,024' },
    { label: 'Reception', count: '892' },
    { label: 'Medical Staff', count: '642' },
    { label: 'Inactive', count: '160' },
  ];

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="border-b border-slate-200 flex gap-4 overflow-x-auto text-xs">
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`pb-2.5 font-medium whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === tab.label
                ? 'border-blue-600 text-blue-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>{tab.label}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search users by name, email or clinic..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Roles</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Clinics</option>
          </select>
          <button className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 flex items-center gap-1.5 font-medium">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-2xs">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs"
          >
            <UserPlus className="w-4 h-4" /> Add User
          </button>
        </div>
      </div>

      {/* Table - 1 Static Row */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Clinic</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Last Login</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Dr. Priya Sharma</td>
                <td className="py-3 px-4 text-slate-600">priya@sunrise.com</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200 text-[11px]">
                    Doctor
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-700 font-medium">Sunrise Care Clinic</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-500">2 hours ago</td>
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
          <span>Showing 1 of 2,842 users</span>
        </div>
      </div>

      {/* Add New User Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 border border-slate-100 space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Add New System User</h3>
                <p className="text-xs text-slate-500 mt-0.5">Create a user account with role permissions and clinic assignment.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Account Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                  <input type="text" placeholder="e.g. Rahul Mehta" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                  <input type="email" placeholder="rahul@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Role & Scope</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Role *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>Clinic Admin</option>
                    <option>Doctor</option>
                    <option>Receptionist</option>
                    <option>Pharmacist</option>
                    <option>Super Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Assigned Clinic</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>Sunrise Care Clinic</option>
                    <option>Global Health Hospital</option>
                    <option>All Clinics (Super Admin)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 text-xs">
              <button onClick={() => setIsModalOpen(false)} className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-xl">
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm">
                Save User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

