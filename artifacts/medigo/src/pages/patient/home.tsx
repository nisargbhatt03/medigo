import React from "react";
import { PatientLayout } from "@/components/Layouts";
import { Link } from "wouter";
import { Calendar, ClipboardList, MapPin, Pill, Bell, ChevronRight, Star } from "lucide-react";

export default function PatientHome() {
  return (
    <PatientLayout>
      <div className="px-6 space-y-6 pb-6">
        {/* Header */}
        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Good Morning,</h1>
            <h2 className="text-xl font-display text-primary font-semibold">Ramesh Patel 👋</h2>
          </div>
          <div className="relative p-2 bg-white rounded-full shadow-sm">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full"></span>
          </div>
        </div>

        {/* Next Appointment Card */}
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-6 text-white shadow-xl shadow-primary/30 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <p className="text-white/80 text-sm font-medium mb-4">Your Next Appointment</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md font-bold text-xl">
              15
            </div>
            <div>
              <p className="font-bold text-lg">Dr. Dhruv Shah</p>
              <p className="text-white/80 text-sm">General Physician • Token #MG-289</p>
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <Button className="flex-1 bg-white text-primary hover:bg-white/90 rounded-xl font-semibold">View Details</Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/patient/book">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-all active:scale-95">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <p className="font-semibold text-sm text-slate-800">Book Appt</p>
            </div>
          </Link>
          <Link href="/patient/records">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-all active:scale-95">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-3">
                <ClipboardList className="w-6 h-6" />
              </div>
              <p className="font-semibold text-sm text-slate-800">My Records</p>
            </div>
          </Link>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="font-semibold text-sm text-slate-800">Hospitals</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3">
              <Pill className="w-6 h-6" />
            </div>
            <p className="font-semibold text-sm text-slate-800">Medicines</p>
          </div>
        </div>

        {/* Nearby Doctors */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-slate-800">Top Doctors Nearby</h3>
            <span className="text-primary text-sm font-semibold flex items-center">See All <ChevronRight className="w-4 h-4" /></span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 mb-3">
            <img src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100" alt="doc" />
            <div className="flex-1">
              <p className="font-bold text-slate-800">Dr. Priya Mehta</p>
              <p className="text-sm text-slate-500">Cardiologist • 2.3 km</p>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-amber-500">
                <Star className="w-3 h-3 fill-amber-500" /> 4.8 (120 reviews)
              </div>
            </div>
          </div>
        </div>

      </div>
    </PatientLayout>
  );
}

function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`px-4 py-2 ${className}`} {...props}>{children}</button>
  );
}
