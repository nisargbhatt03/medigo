import React from 'react';
import { Save, User } from 'lucide-react';

export default function RecRegister() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Register New Patient</h2>
          <p className="text-xs text-slate-500">Create a new patient record.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Personal Information</h3>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
              <input type="text" placeholder="Enter patient full name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Gender *</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800"><option>Select</option><option>Male</option><option>Female</option></select>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Phone Number *</label>
                <input type="text" placeholder="+91 Enter phone number" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
              </div>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2 rounded-lg transition-colors flex items-center gap-1.5">
            <Save className="w-4 h-4" /> Save Patient
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs text-center flex flex-col items-center justify-center space-y-3">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
            <User className="w-10 h-10" />
          </div>
          <p className="text-xs font-semibold text-slate-700">Upload Photo</p>
          <p className="text-[10px] text-slate-400">JPG, PNG (Max 2MB)</p>
        </div>
      </div>
    </div>
  );
}
