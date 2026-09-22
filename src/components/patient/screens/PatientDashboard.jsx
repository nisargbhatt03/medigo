import React from 'react';
import { 
  Calendar, FileText, Pill, CreditCard, MessageSquare, 
  ChevronRight, ArrowUpRight, Sparkles, Download, Clock 
} from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientDashboard({ setActivePatientScreen }) {
  return (
    <div className="space-y-6">
      {/* 3 Quick Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Upcoming Appointment */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Upcoming Appointment</span>
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">In-Clinic</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
              PS
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Dr. Priya Sharma</p>
              <p className="text-xs text-slate-500">General Medicine</p>
              <p className="text-[11px] text-blue-600 font-medium mt-0.5">Wed, Jan 15, 2025 &bull; 10:00 AM</p>
            </div>
          </div>
          <button 
            onClick={() => setActivePatientScreen('patient-appointments')}
            className="w-full text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2 rounded-lg border border-slate-200 transition-colors"
          >
            View Details
          </button>
        </div>

        {/* Recent Lab Report */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Recent Lab Report</span>
            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Normal</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Complete Blood Count (CBC)</p>
            <p className="text-xs text-slate-500">Jan 10, 2025 &bull; Sunrise Labs</p>
          </div>
          <button 
            onClick={() => setActivePatientScreen('patient-lab-reports')}
            className="w-full text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2 rounded-lg border border-slate-200 transition-colors"
          >
            View Report
          </button>
        </div>

        {/* Active Prescription */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Prescription</span>
            <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2 Medicines</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Paracetamol 500mg + 1 more</p>
            <p className="text-xs text-slate-500">Prescribed by Dr. Priya Sharma</p>
          </div>
          <button 
            onClick={() => setActivePatientScreen('patient-prescriptions')}
            className="w-full text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2 rounded-lg border border-slate-200 transition-colors"
          >
            View Prescription
          </button>
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
        <h3 className="text-sm font-bold text-slate-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <button 
            onClick={() => setActivePatientScreen('patient-appointments')}
            className="p-3 bg-blue-50/60 hover:bg-blue-100/60 border border-blue-100 rounded-xl text-center flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <Calendar className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-slate-700">Book Appointment</span>
          </button>
          <button 
            onClick={() => setActivePatientScreen('patient-records')}
            className="p-3 bg-emerald-50/60 hover:bg-emerald-100/60 border border-emerald-100 rounded-xl text-center flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <FileText className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-slate-700">View Reports</span>
          </button>
          <button 
            onClick={() => setActivePatientScreen('patient-medicines')}
            className="p-3 bg-teal-50/60 hover:bg-teal-100/60 border border-teal-100 rounded-xl text-center flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <Pill className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-slate-700">Order Medicines</span>
          </button>
          <button 
            onClick={() => setActivePatientScreen('patient-invoices')}
            className="p-3 bg-indigo-50/60 hover:bg-indigo-100/60 border border-indigo-100 rounded-xl text-center flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <CreditCard className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-slate-700">Make Payment</span>
          </button>
          <button 
            onClick={() => setActivePatientScreen('patient-messages')}
            className="p-3 bg-amber-50/60 hover:bg-amber-100/60 border border-amber-100 rounded-xl text-center flex flex-col items-center justify-center gap-2 group transition-all col-span-2 sm:col-span-1"
          >
            <MessageSquare className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-slate-700">Message Doctor</span>
          </button>
        </div>
      </div>

      {/* Static Single Row Table View as per requirement + Pagination */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Recent Medical Activity Log</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Row Static Preview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-4">Date</th>
                <th className="py-2.5 px-4">Activity</th>
                <th className="py-2.5 px-4">Doctor / Department</th>
                <th className="py-2.5 px-4">Status</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-600">Jan 15, 2025</td>
                <td className="py-3 px-4 font-semibold text-slate-800">General Consultation</td>
                <td className="py-3 px-4 text-slate-600">Dr. Priya Sharma</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">Confirmed</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="text-blue-600 hover:underline font-semibold">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={3} totalItems={15} />
      </div>

      {/* Stay Healthy Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/10">
        <div>
          <h3 className="text-lg font-bold">Stay Healthy, Stay Informed</h3>
          <p className="text-xs text-blue-100 mt-1">Book your annual health check-up today with special discounts.</p>
        </div>
        <button 
          onClick={() => setActivePatientScreen('patient-health-packages')}
          className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-colors whitespace-nowrap"
        >
          View Packages →
        </button>
      </div>
    </div>
  );
}
