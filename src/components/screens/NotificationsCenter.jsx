import React, { useState } from 'react';
import { Plus, Search, Calendar, MoreVertical, X, Bell } from 'lucide-react';

export default function NotificationsCenter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All Notifications');

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search notifications..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Types</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 text-slate-600 font-medium">
            <option>All Status</option>
          </select>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" /> Send Notification
          </button>
        </div>
      </div>

      {/* Table - 1 Static Row as requested */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Target Audience</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Sent At</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Platform Maintenance</td>
                <td className="py-3 px-4 text-slate-600">Scheduled maintenance on Jan 20, 2025...</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded text-[11px]">System</span>
                </td>
                <td className="py-3 px-4 text-slate-700">All Clinics</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Sent</span>
                </td>
                <td className="py-3 px-4 text-slate-500">Jan 16, 2025 10:00</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 text-slate-400 hover:text-slate-600"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Send Broadcast Notification Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 border border-slate-100 space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Send System Broadcast</h3>
                <p className="text-xs text-slate-500 mt-0.5">Send a real-time notification alert to clinics or platform users.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Target & Delivery Channel</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Target Audience *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>All Registered Clinics</option>
                    <option>Super Admins Only</option>
                    <option>Clinic Admins</option>
                    <option>Patients Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Notification Type</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>In-App System Bell</option>
                    <option>Email Broadcast</option>
                    <option>WhatsApp Alert</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Message Content</h4>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Notification Title *</label>
                <input type="text" placeholder="e.g. Scheduled System Upgrade Notification" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Message Body *</label>
                <textarea rows={3} placeholder="Enter your notification message content here..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 text-xs">
              <button onClick={() => setIsModalOpen(false)} className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-xl">
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5">
                <Bell className="w-4 h-4" /> Send Notification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

