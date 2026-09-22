import React, { useState } from 'react';
import { User, Bell, Lock, Shield, Globe, Save } from 'lucide-react';

export default function PatientProfileSettings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="space-y-6">
      {/* Sub Tabs */}
      <div className="border-b border-slate-200 flex gap-4 text-xs font-semibold text-slate-500 overflow-x-auto">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-2.5 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'profile' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
          }`}
        >
          Personal Information
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`pb-2.5 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'notifications' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
          }`}
        >
          Notifications & Alerts
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`pb-2.5 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'security' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
          }`}
        >
          Security & Privacy
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4 max-w-3xl">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center shadow-md">
              RM
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">Rahul Mehta</h3>
              <p className="text-xs text-slate-500">Patient UHID: UHD-001248 &bull; Male, 34 yrs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Full Name</label>
              <input type="text" defaultValue="Rahul Mehta" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Phone Number</label>
              <input type="text" defaultValue="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
              <input type="email" defaultValue="rahul.mehta@gmail.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Blood Group</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                <option>O Positive (O+)</option>
              </select>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
            <Save className="w-4 h-4" /> Save Profile Changes
          </button>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4 max-w-3xl text-xs">
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Notification Preferences</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="font-semibold text-slate-800">Appointment Reminders</p>
                <p className="text-[11px] text-slate-500">Receive SMS and WhatsApp alerts for upcoming appointments</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="font-semibold text-slate-800">Lab Report Alerts</p>
                <p className="text-[11px] text-slate-500">Get notified when new lab test results are ready</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
