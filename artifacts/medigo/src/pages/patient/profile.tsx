import React from "react";
import { PatientLayout } from "@/components/Layouts";
import { useListAppointments, useGetPatientPrescriptions } from "@workspace/api-client-react";
import { User, Phone, MapPin, Droplets, Calendar, Pill, ChevronRight, Edit3, Shield } from "lucide-react";
import { Link } from "wouter";

const PATIENT = {
  id: 1,
  name: "Ramesh Patel",
  age: 45,
  gender: "Male",
  bloodGroup: "B+",
  phone: "+91 98765 43210",
  address: "204, Shivam Apartments, Surat, Gujarat",
  patientId: "#MG-2841",
  registered: "Jan 2024",
  allergies: ["Penicillin", "Dust"],
  conditions: ["Hypertension", "Type 2 Diabetes"],
};

export default function PatientProfile() {
  const { data: appointments = [] } = useListAppointments({ patientId: "1" });
  const { data: prescriptions = [] } = useGetPatientPrescriptions(1);

  const completed = appointments.filter(a => a.status === "completed").length;

  return (
    <PatientLayout>
      <div className="pb-6">
        {/* Header Banner */}
        <div className="bg-gradient-to-br from-primary to-blue-700 px-6 pt-6 pb-16 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="flex justify-between items-start">
            <h1 className="text-white font-display font-bold text-xl">My Profile</h1>
            <button className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Edit3 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Avatar Card - overlaps the banner */}
        <div className="px-6 -mt-10 mb-4">
          <div className="bg-white rounded-3xl shadow-xl p-5 border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg shadow-primary/30">
                {PATIENT.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h2 className="font-display font-bold text-slate-900 text-xl">{PATIENT.name}</h2>
                <p className="text-slate-500 text-sm">{PATIENT.patientId} • Since {PATIENT.registered}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <Shield className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs text-green-600 font-semibold">Verified Patient</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-slate-100">
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-primary">{appointments.length}</p>
                <p className="text-xs text-slate-400 mt-0.5">Total Visits</p>
              </div>
              <div className="text-center border-x border-slate-100">
                <p className="text-2xl font-display font-bold text-teal-600">{prescriptions.length}</p>
                <p className="text-xs text-slate-400 mt-0.5">Prescriptions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-green-600">{completed}</p>
                <p className="text-xs text-slate-400 mt-0.5">Completed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 space-y-4">
          {/* Personal Details */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-50">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Personal Details</h3>
            </div>
            <div className="divide-y divide-slate-50">
              <DetailRow icon={<User className="w-4 h-4 text-primary" />} label="Age & Gender" value={`${PATIENT.age} years • ${PATIENT.gender}`} />
              <DetailRow icon={<Droplets className="w-4 h-4 text-red-500" />} label="Blood Group" value={<span className="bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded-md text-sm">{PATIENT.bloodGroup}</span>} />
              <DetailRow icon={<Phone className="w-4 h-4 text-green-600" />} label="Phone" value={PATIENT.phone} />
              <DetailRow icon={<MapPin className="w-4 h-4 text-orange-500" />} label="Address" value={PATIENT.address} />
            </div>
          </div>

          {/* Medical Info */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-50">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Medical Info</h3>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Known Conditions</p>
                <div className="flex flex-wrap gap-2">
                  {PATIENT.conditions.map(c => (
                    <span key={c} className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-xs font-semibold">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Allergies</p>
                <div className="flex flex-wrap gap-2">
                  {PATIENT.allergies.map(a => (
                    <span key={a} className="bg-red-50 text-red-600 border border-red-100 px-3 py-1 rounded-full text-xs font-semibold">⚠ {a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-50">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">My Health</h3>
            </div>
            <div className="divide-y divide-slate-50">
              <Link href="/patient/records">
                <div className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">Health Records & Prescriptions</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </Link>
              <Link href="/patient/medicines">
                <div className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Pill className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">My Medicines</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 px-5 py-4">
      <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-400 font-medium">{label}</p>
        <p className="text-sm font-semibold text-slate-800 truncate">{typeof value === "string" ? value : ""}</p>
        {typeof value !== "string" && value}
      </div>
    </div>
  );
}
