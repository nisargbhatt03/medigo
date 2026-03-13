import React, { useState } from 'react';
import { Bell, Calendar, Folder, MapPin, Pill, Search, Heart, Home, Clock, FileText, User } from 'lucide-react';

export function PatientHome() {
  return (
    <div className="w-[390px] h-[844px] bg-[#F8FAFC] relative overflow-hidden mx-auto border-8 border-gray-900 rounded-[40px] shadow-2xl flex flex-col font-sans">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-sm font-semibold">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"></path>
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.32626 9.38914L12 20.0629L22.6737 9.38914C19.7282 6.44365 15.7335 4.80165 12 4.80165C8.26654 4.80165 4.27179 6.44365 1.32626 9.38914Z"></path>
          </svg>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5H21V19H3V5ZM5 7V17H19V7H5ZM16 9H18V15H16V9Z"></path>
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        {/* Header */}
        <div className="bg-white px-5 py-4 flex justify-between items-center rounded-b-2xl shadow-sm z-10 relative">
          <div>
            <p className="text-gray-500 text-sm font-medium">Good Morning,</p>
            <h1 className="text-xl font-bold text-gray-900">Ramesh! 👋</h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="font-bold text-[#2563EB] text-lg tracking-tight">Medigo</div>
            <div className="relative">
              <div className="p-2 bg-gray-100 rounded-full">
                <Bell size={20} className="text-gray-700" />
              </div>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Upcoming Appointment */}
        <div className="px-5 mt-5">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-5 text-white shadow-lg shadow-blue-200">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                Your Next Appointment
              </span>
              <span className="font-bold bg-white text-blue-600 px-2 py-0.5 rounded-md text-sm">
                #MG-289
              </span>
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg backdrop-blur-sm">
                DS
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Dr. Dhruv Shah</h3>
                <p className="text-blue-100 text-sm">General Physician</p>
              </div>
            </div>

            <div className="bg-black/10 rounded-xl p-3 mb-4 backdrop-blur-sm">
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center"><Calendar size={14} className="mr-1.5"/> 15 Mar 2026</span>
                <span className="flex items-center"><Clock size={14} className="mr-1.5"/> 11:30 AM</span>
              </div>
              <div className="flex items-start text-sm">
                <MapPin size={14} className="mr-1.5 mt-0.5 shrink-0"/>
                <span className="leading-tight text-blue-50">Medigo City Hospital, Ahmedabad</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-white text-blue-600 font-semibold py-2.5 rounded-xl text-sm transition active:scale-95">
                View Details
              </button>
              <button className="flex-1 bg-blue-600 border border-blue-400 text-white font-semibold py-2.5 rounded-xl text-sm transition active:scale-95">
                Reschedule
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-5 mt-6">
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-3 transition active:scale-95">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Calendar size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-sm text-left leading-tight">Book<br/>Appointment</span>
            </button>
            <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-3 transition active:scale-95">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                <Folder size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-sm text-left leading-tight">My<br/>Records</span>
            </button>
            <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-3 transition active:scale-95">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <MapPin size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-sm text-left leading-tight">Nearby<br/>Hospitals</span>
            </button>
            <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-3 transition active:scale-95">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                <Pill size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-sm text-left leading-tight">Medicine<br/>Orders</span>
            </button>
          </div>
        </div>

        {/* Nearby Doctors */}
        <div className="mt-6">
          <div className="flex justify-between items-center px-5 mb-3">
            <h2 className="text-lg font-bold text-gray-900">Doctors Near You</h2>
            <button className="text-blue-600 text-sm font-semibold">See All →</button>
          </div>
          
          <div className="flex overflow-x-auto space-x-4 px-5 pb-4 scrollbar-hide">
            {[
              { name: "Dr. Priya Mehta", spec: "Cardiologist", rating: "4.8", dist: "2.3 km", avail: "Available Today", initials: "PM", color: "bg-rose-100 text-rose-700" },
              { name: "Dr. Amit Gupta", spec: "Orthopedics", rating: "4.6", dist: "3.1 km", avail: "Available Tomorrow", initials: "AG", color: "bg-amber-100 text-amber-700" },
              { name: "Dr. Sunita Rao", spec: "Gynecologist", rating: "4.9", dist: "1.8 km", avail: "Available Today", initials: "SR", color: "bg-purple-100 text-purple-700" }
            ].map((doc, i) => (
              <div key={i} className="min-w-[240px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 shrink-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${doc.color}`}>
                    {doc.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{doc.name}</h3>
                    <p className="text-xs text-gray-500">{doc.spec}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-600 mb-3 space-x-2">
                  <span className="flex items-center bg-gray-50 px-1.5 py-0.5 rounded font-medium">⭐ {doc.rating}</span>
                  <span className="text-gray-300">•</span>
                  <span>{doc.dist}</span>
                </div>
                <div className={`text-xs font-semibold py-1.5 px-3 rounded-lg text-center ${
                  doc.avail.includes('Today') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                }`}>
                  {doc.avail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="px-5 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 mt-1">
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Today's Health Tip</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Stay hydrated! Drink 8 glasses of water daily for better kidney health.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 pb-8 flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-20">
        <button className="flex flex-col items-center space-y-1 text-[#2563EB]">
          <Home size={24} fill="currentColor" />
          <span className="text-[10px] font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-gray-600 transition">
          <Calendar size={24} />
          <span className="text-[10px] font-medium">Appointments</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-gray-600 transition">
          <FileText size={24} />
          <span className="text-[10px] font-medium">Records</span>
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
