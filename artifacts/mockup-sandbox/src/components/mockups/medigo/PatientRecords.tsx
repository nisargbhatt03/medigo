import React from 'react';
import { ArrowLeft, Home, Calendar, FileText, Pill, User, Phone, Droplet, Download, ExternalLink, Calendar as CalendarIcon, Clock } from 'lucide-react';

export function PatientRecords() {
  return (
    <div className="w-[390px] h-[844px] bg-[#F8FAFC] relative overflow-hidden mx-auto border-8 border-gray-900 rounded-[40px] shadow-2xl flex flex-col font-sans">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-sm font-semibold bg-white z-20">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"></path></svg>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1.32626 9.38914L12 20.0629L22.6737 9.38914C19.7282 6.44365 15.7335 4.80165 12 4.80165C8.26654 4.80165 4.27179 6.44365 1.32626 9.38914Z"></path></svg>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5H21V19H3V5ZM5 7V17H19V7H5ZM16 9H18V15H16V9Z"></path></svg>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center shadow-sm z-20">
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft size={24} className="text-gray-800" />
        </button>
        <h1 className="text-xl font-bold ml-2 text-gray-900">My Health Records</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-28 scrollbar-hide">
        {/* Patient Summary Card */}
        <div className="px-5 pt-5 pb-2">
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-5 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-blue-100 rounded-bl-full opacity-50 -z-0"></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Ramesh Patel</h2>
                <div className="flex items-center text-sm text-gray-600 space-x-2 font-medium">
                  <span>45 years</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Male</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="flex items-center text-red-500"><Droplet size={14} className="mr-0.5" fill="currentColor"/> B+</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center font-bold text-xl text-blue-700 shadow-sm">
                RP
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-blue-200/50 flex flex-col space-y-2 relative z-10">
              <div className="flex items-center text-sm font-medium text-gray-700">
                <Phone size={14} className="mr-2 text-blue-500"/> +91 98765 43210
              </div>
              <div className="flex items-center text-sm font-medium text-gray-700">
                <Home size={14} className="mr-2 text-blue-500"/> Registered: Medigo City Hospital
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#F8FAFC] sticky top-0 z-10 pt-2 pb-4">
          <div className="flex overflow-x-auto px-5 space-x-2 scrollbar-hide">
            {['Prescriptions', 'Test Reports', 'Visits', 'Referrals'].map((tab, i) => (
              <button 
                key={i} 
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition ${
                  i === 0 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Prescription List */}
        <div className="px-5 space-y-4">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Dr. Shah</h3>
                  <p className="text-xs text-gray-500 font-medium">March 10, 2026</p>
                </div>
              </div>
              <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold border border-green-100 flex items-center">
                ✅ Dispensed
              </span>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4 mb-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Medicines</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 shrink-0"></span>
                  <span className="font-medium text-gray-800">Amlodipine 5mg <span className="text-gray-500 font-normal ml-1">(OD)</span></span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 shrink-0"></span>
                  <span className="font-medium text-gray-800">Paracetamol 500mg <span className="text-gray-500 font-normal ml-1">(SOS)</span></span>
                </li>
              </ul>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 flex items-center justify-center space-x-2 bg-white border border-gray-200 text-gray-700 font-semibold py-2 rounded-xl text-sm">
                <Download size={16} /> <span>Download</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 font-semibold py-2 rounded-xl text-sm">
                <ExternalLink size={16} /> <span>View Details</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-gray-50 rounded-xl text-gray-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Dr. Kumar</h3>
                  <p className="text-xs text-gray-500 font-medium">Feb 22, 2026</p>
                </div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-xs font-bold flex items-center">
                📋 Archived
              </span>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Medicines</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 shrink-0"></span>
                  <span className="font-medium text-gray-800">Atorvastatin 10mg <span className="text-gray-500 font-normal ml-1">(HS)</span></span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 shrink-0"></span>
                  <span className="font-medium text-gray-800">Aspirin 75mg <span className="text-gray-500 font-normal ml-1">(OD)</span></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm mb-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-gray-50 rounded-xl text-gray-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Dr. Patel</h3>
                  <p className="text-xs text-gray-500 font-medium">Jan 15, 2026</p>
                </div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-xs font-bold flex items-center">
                📋 Archived
              </span>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4">
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 shrink-0"></span>
                  <span className="font-medium text-gray-800">Metformin 500mg <span className="text-gray-500 font-normal ml-1">(BD)</span></span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 shrink-0"></span>
                  <span className="font-medium text-gray-800">Glimepiride 2mg <span className="text-gray-500 font-normal ml-1">(OD)</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Appointment Reminder */}
        <div className="px-5 mb-8">
          <div className="bg-[#14B8A6] rounded-3xl p-4 text-white flex justify-between items-center shadow-lg shadow-teal-200">
            <div>
              <p className="text-xs font-semibold text-teal-100 mb-1 uppercase tracking-wider">Follow-up Due</p>
              <h4 className="font-bold text-sm">Dr. Shah</h4>
              <p className="text-xs text-teal-50 mt-0.5 flex items-center"><CalendarIcon size={12} className="mr-1"/> Sat, 15 Mar 2026</p>
            </div>
            <button className="bg-white text-teal-700 font-bold px-4 py-2 rounded-xl text-sm shadow-sm transition active:scale-95 whitespace-nowrap">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 pb-8 flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-20">
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-gray-600 transition">
          <Home size={24} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-gray-600 transition">
          <Calendar size={24} />
          <span className="text-[10px] font-medium">Appointments</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-[#2563EB]">
          <FileText size={24} fill="currentColor" className="opacity-20 absolute" />
          <FileText size={24} />
          <span className="text-[10px] font-semibold">Records</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-gray-600 transition">
          <Pill size={24} />
          <span className="text-[10px] font-medium">Pharmacy</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-gray-600 transition">
          <User size={24} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
}
