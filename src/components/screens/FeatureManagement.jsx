import React, { useState } from 'react';
import { Plus, Settings, Users, Calendar, Stethoscope, FileText, X } from 'lucide-react';

export default function FeatureManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All Features');

  const features = [
    { id: 1, title: 'Patient Management', desc: 'Manage patient registration and records.', icon: Users, enabled: true },
    { id: 2, title: 'Appointment Scheduling', desc: 'Online and in-clinic appointment management.', icon: Calendar, enabled: true },
    { id: 3, title: 'Doctor Management', desc: 'Manage doctors, schedules and availability.', icon: Stethoscope, enabled: true },
    { id: 4, title: 'Prescription Module', desc: 'Digital prescriptions and medicine records.', icon: FileText, enabled: true },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs with Add Feature on Right */}
      <div className="border-b border-slate-200 flex items-center justify-between gap-4">
        <div className="flex gap-4 text-xs font-medium text-slate-500 overflow-x-auto">
          {['All Features', 'Core Modules', 'Integrations', 'Beta Features'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-1.5 mb-2 rounded-lg flex items-center gap-2 shadow-xs shrink-0 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Feature
        </button>
      </div>

      {/* Feature Cards Grid - 1 Concise Row of 4 Modules as requested */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                {/* Toggle switch */}
                <div className="w-10 h-5 bg-emerald-500 rounded-full p-0.5 cursor-pointer flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full shadow-xs" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
                <button className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1">
                  <Settings className="w-3.5 h-3.5" /> Settings
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Feature Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 border border-slate-100 space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Add Platform Feature Flag</h3>
                <p className="text-xs text-slate-500 mt-0.5">Register a new module or feature flag for subscription tier gating.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Feature Info</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Feature Name *</label>
                  <input type="text" placeholder="e.g. Telemedicine Consultation" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Feature Key / Slug *</label>
                  <input type="text" placeholder="telemedicine_consult" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Description</label>
                <input type="text" placeholder="Brief summary of what this feature enables..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Tier Assignment</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Category</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>Core Modules</option>
                    <option>Add-on Features</option>
                    <option>Integrations</option>
                    <option>Beta Features</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Minimum Required Plan</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>Basic Plan</option>
                    <option>Standard Plan</option>
                    <option>Premium Plan</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 text-xs">
              <button onClick={() => setIsModalOpen(false)} className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-xl">
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm">
                Add Feature
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

