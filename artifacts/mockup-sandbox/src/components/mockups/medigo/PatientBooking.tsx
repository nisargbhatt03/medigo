import React, { useState } from 'react';
import { ArrowLeft, Search, Star, MapPin, Calendar as CalendarIcon, Clock, Check } from 'lucide-react';

export function PatientBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(1);
  const [selectedSlot, setSelectedSlot] = useState<string>("11:30 AM");

  const specialties = ["All", "General", "Cardiology", "Orthopedics", "Dermatology", "Gynecology", "Neurology"];
  
  const slots = [
    { time: "9:00 AM", available: true },
    { time: "9:30 AM", available: true },
    { time: "10:00 AM", available: false },
    { time: "10:30 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "12:00 PM", available: true },
  ];

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
        <h1 className="text-xl font-bold ml-2 text-gray-900">Book Appointment</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-28 scrollbar-hide">
        {/* Search */}
        <div className="bg-white px-5 pt-4 pb-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Find Doctor or Specialty" 
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white pb-4 shadow-sm mb-4">
          <div className="flex overflow-x-auto px-5 space-x-2 scrollbar-hide pb-2">
            {specialties.map((spec, i) => (
              <button 
                key={i} 
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition ${
                  i === 0 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="px-5 space-y-4">
          {/* Card 1 (Selected) */}
          <div 
            onClick={() => setSelectedDoctor(1)}
            className={`bg-white rounded-3xl p-4 transition cursor-pointer ${
              selectedDoctor === 1 
              ? 'border-2 border-blue-500 shadow-lg shadow-blue-100' 
              : 'border border-gray-100 shadow-sm'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">
                DS
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Dr. Dhruv Shah</h3>
                    <p className="text-sm text-gray-500 font-medium">MBBS, MD - General Physician</p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mt-2 space-x-3">
                  <span className="flex items-center font-medium text-amber-500"><Star size={14} className="mr-1" fill="currentColor"/> 4.8 <span className="text-gray-400 ml-1 font-normal">(234 reviews)</span></span>
                  <span className="text-gray-300">•</span>
                  <span>12 yrs exp</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mt-1.5">
                  <MapPin size={14} className="mr-1 text-gray-400"/> Medigo City Hospital <span className="text-gray-300 mx-2">•</span> 2.3 km
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs font-bold">
                    Available Today
                  </span>
                  {selectedDoctor !== 1 && (
                    <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
                      Book
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Slot Selection Expansion */}
            {selectedDoctor === 1 && (
              <div className="mt-5 pt-5 border-t border-gray-100 animate-in fade-in slide-in-from-top-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-gray-900">Select Date & Time</h4>
                  <div className="flex items-center text-sm text-blue-600 font-semibold">
                    March 2026 <CalendarIcon size={16} className="ml-1" />
                  </div>
                </div>

                <div className="flex overflow-x-auto space-x-3 pb-4 scrollbar-hide -mx-4 px-4">
                  {/* Mini Calendar */}
                  {['13 Fri', '14 Sat', '15 Sun', '16 Mon', '17 Tue'].map((date, i) => (
                    <div key={i} className={`min-w-[60px] p-2 rounded-xl text-center border cursor-pointer ${
                      i === 2 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                      : 'bg-white border-gray-200 text-gray-600'
                    }`}>
                      <div className="text-xs font-medium mb-1 opacity-80">{date.split(' ')[1]}</div>
                      <div className="text-lg font-bold">{date.split(' ')[0]}</div>
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-sm text-gray-600 mb-3">Available Slots</h4>
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((slot, i) => (
                    <button
                      key={i}
                      disabled={!slot.available}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`py-2 px-1 rounded-xl text-sm font-semibold transition flex justify-center items-center space-x-1 ${
                        !slot.available 
                        ? 'bg-gray-50 text-gray-400 border border-gray-100 cursor-not-allowed'
                        : slot.time === selectedSlot
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100'
                      }`}
                    >
                      <span>{slot.time}</span>
                      {slot.time === selectedSlot && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => setSelectedDoctor(2)}
            className={`bg-white rounded-3xl p-4 transition cursor-pointer border border-gray-100 shadow-sm`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl shrink-0">
                AK
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">Dr. Anjali Kumar</h3>
                <p className="text-sm text-gray-500 font-medium">MBBS, DM - Cardiologist</p>
                
                <div className="flex items-center text-sm text-gray-600 mt-2 space-x-3">
                  <span className="flex items-center font-medium text-amber-500"><Star size={14} className="mr-1" fill="currentColor"/> 4.9</span>
                  <span className="text-gray-300">•</span>
                  <span>15 yrs exp</span>
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-600">
                    Available Tomorrow
                  </span>
                  <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => setSelectedDoctor(3)}
            className={`bg-white rounded-3xl p-4 transition cursor-pointer border border-gray-100 shadow-sm mb-6`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xl shrink-0">
                RG
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">Dr. Rajesh Gupta</h3>
                <p className="text-sm text-gray-500 font-medium">MS - Orthopedic Surgeon</p>
                
                <div className="flex items-center text-sm text-gray-600 mt-2 space-x-3">
                  <span className="flex items-center font-medium text-amber-500"><Star size={14} className="mr-1" fill="currentColor"/> 4.7</span>
                  <span className="text-gray-300">•</span>
                  <span>18 yrs exp</span>
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-600">
                    Available Monday
                  </span>
                  <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-5 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-30 pb-8">
        <button className="w-full bg-[#2563EB] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition active:scale-95 flex items-center justify-center space-x-2">
          <span>Confirm Appointment</span>
        </button>
      </div>
    </div>
  );
}
