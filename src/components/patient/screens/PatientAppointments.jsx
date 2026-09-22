import React, { useState } from 'react';
import { Calendar, Stethoscope, Clock, CheckCircle2, User, ChevronRight } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientAppointments() {
  const [activeTab, setActiveTab] = useState('book');
  const [selectedDept, setSelectedDept] = useState('General Medicine');

  const depts = [
    'General Medicine', 'Cardiology', 'Dermatology', 'Pediatrics', 
    'Gynecology', 'Orthopedics', 'ENT', 'Ophthalmology', 'Dentistry', 'Others'
  ];

  return (
    <div className="space-y-6">
      {/* Top Main Tabs */}
      <div className="border-b border-slate-200 flex gap-6 text-xs font-semibold text-slate-500">
        <button
          onClick={() => setActiveTab('book')}
          className={`pb-3 border-b-2 transition-colors ${
            activeTab === 'book' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
          }`}
        >
          Book Appointment
        </button>
        <button
          onClick={() => setActiveTab('my-appointments')}
          className={`pb-3 border-b-2 transition-colors ${
            activeTab === 'my-appointments' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'
          }`}
        >
          My Appointments
        </button>
      </div>

      {activeTab === 'book' && (
        <div className="space-y-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 shadow-2xs">
            <span className="font-bold text-blue-600 flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span> Select Department</span>
            <span className="text-slate-300">&rarr;</span>
            <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px]">2</span> Choose Doctor</span>
            <span className="text-slate-300">&rarr;</span>
            <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px]">3</span> Pick Date & Time</span>
            <span className="text-slate-300">&rarr;</span>
            <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px]">4</span> Confirm</span>
          </div>

          {/* Department Pills */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Select Specialty</h3>
            <div className="flex flex-wrap gap-2">
              {depts.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    selectedDept === dept
                      ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors List - 1 Row Static View */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Available Specialists for {selectedDept}</h3>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Doctor Row Preview</span>
            </div>
            <div className="p-4">
              <div className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                    PS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Dr. Priya Sharma</h4>
                    <p className="text-xs text-slate-500">General Medicine &bull; 8 years exp.</p>
                    <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">&starf; 4.8 (120 reviews)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-xs">
                    View Slots & Book
                  </button>
                </div>
              </div>
            </div>
            <Pagination currentPage={1} totalPages={4} totalItems={16} />
          </div>
        </div>
      )}

      {activeTab === 'my-appointments' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800">Appointment History</h3>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
                <tr>
                  <th className="py-2.5 px-4">Date & Time</th>
                  <th className="py-2.5 px-4">Doctor</th>
                  <th className="py-2.5 px-4">Specialty</th>
                  <th className="py-2.5 px-4">Type</th>
                  <th className="py-2.5 px-4">Status</th>
                  <th className="py-2.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-slate-600">Jan 15, 2025 &bull; 10:00 AM</td>
                  <td className="py-3 px-4 font-semibold text-slate-800">Dr. Priya Sharma</td>
                  <td className="py-3 px-4 text-slate-600">General Medicine</td>
                  <td className="py-3 px-4"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold">In-Clinic</span></td>
                  <td className="py-3 px-4"><span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Confirmed</span></td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button className="text-blue-600 hover:underline font-semibold">Reschedule</button>
                    <button className="text-rose-600 hover:underline font-semibold">Cancel</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination currentPage={1} totalPages={3} totalItems={12} />
        </div>
      )}
    </div>
  );
}
