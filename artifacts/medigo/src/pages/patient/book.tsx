import React, { useState } from "react";
import { PatientLayout } from "@/components/Layouts";
import { useListDoctors, useCreateAppointment, getListAppointmentsQueryKey } from "@workspace/api-client-react";
import { Star, MapPin, ArrowLeft, IndianRupee, UserPlus, RefreshCw } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const SPECIALTIES = ["All", "General", "Cardiology", "Orthopedics", "Dermatology", "Neurology"];
const TIME_SLOTS = ["9:00 AM", "9:30 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM", "3:30 PM"];

export default function PatientBook() {
  const { data: doctors = [] } = useListDoctors();
  const createAppointment = useCreateAppointment();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [activeSlot, setActiveSlot] = useState("10:30 AM");
  const [caseType, setCaseType] = useState<"new_case" | "old_case">("new_case");
  const [activeSpec, setActiveSpec] = useState("All");

  const filteredDoctors = activeSpec === "All" ? doctors : doctors.filter(d =>
    d.specialty.toLowerCase().includes(activeSpec.toLowerCase())
  );

  const getFee = (doc: (typeof doctors)[0]) => {
    const newFee = (doc as any).newCaseFee ?? 1000;
    const oldFee = (doc as any).oldCaseFee ?? 400;
    return caseType === "new_case" ? newFee : oldFee;
  };

  const handleBook = () => {
    if (!selectedDoctor) return;
    createAppointment.mutate({
      data: {
        patientId: 1,
        doctorId: selectedDoctor,
        date: new Date().toISOString().split("T")[0],
        timeSlot: activeSlot,
        caseType,
      } as any
    }, {
      onSuccess: () => {
        toast({ title: "Appointment Confirmed!", description: `Token booked for ${activeSlot}` });
        queryClient.invalidateQueries({ queryKey: getListAppointmentsQueryKey() });
        setLocation("/patient/home");
      }
    });
  };

  return (
    <PatientLayout>
      <div className="px-6 pb-6">
        <div className="flex items-center gap-4 mb-6 pt-2">
          <Link href="/patient/home">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer border border-slate-100">
              <ArrowLeft className="w-5 h-5 text-slate-800" />
            </div>
          </Link>
          <h1 className="text-xl font-display font-bold text-slate-900">Book Appointment</h1>
        </div>

        {/* Case Type Selector */}
        <div className="mb-5">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2.5">Visit Type</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setCaseType("new_case")}
              className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${caseType === "new_case" ? "border-primary bg-primary/5 shadow-md shadow-primary/10" : "border-slate-200 bg-white"}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${caseType === "new_case" ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}>
                <UserPlus className="w-5 h-5" />
              </div>
              <p className={`font-bold text-sm ${caseType === "new_case" ? "text-primary" : "text-slate-700"}`}>New Case</p>
              <p className="text-xs text-slate-400 mt-0.5">First visit / new problem</p>
              <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold ${caseType === "new_case" ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}>
                ₹1,000
              </div>
            </button>

            <button
              onClick={() => setCaseType("old_case")}
              className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${caseType === "old_case" ? "border-teal-500 bg-teal-50 shadow-md shadow-teal-500/10" : "border-slate-200 bg-white"}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${caseType === "old_case" ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                <RefreshCw className="w-5 h-5" />
              </div>
              <p className={`font-bold text-sm ${caseType === "old_case" ? "text-teal-600" : "text-slate-700"}`}>Old Case</p>
              <p className="text-xs text-slate-400 mt-0.5">Follow-up / same issue</p>
              <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold ${caseType === "old_case" ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                ₹400
              </div>
            </button>
          </div>
        </div>

        {/* Specialty Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 custom-scrollbar">
          {SPECIALTIES.map(s => (
            <div
              key={s}
              onClick={() => setActiveSpec(s)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold cursor-pointer transition-colors ${activeSpec === s ? "bg-primary text-white shadow-md" : "bg-white text-slate-600 border border-slate-200"}`}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="space-y-4 mt-2">
          {filteredDoctors.map(doc => {
            const fee = getFee(doc);
            const isSelected = selectedDoctor === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedDoctor(isSelected ? null : doc.id)}
                className={`bg-white rounded-2xl p-4 border-2 transition-all cursor-pointer ${isSelected ? "border-primary shadow-lg shadow-primary/10" : "border-slate-100 shadow-sm hover:border-primary/30"}`}
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-teal-100 flex items-center justify-center text-primary font-display font-bold text-2xl shrink-0">
                    {doc.name.split(" ").pop()?.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900">{doc.name}</h3>
                    <p className="text-sm text-primary font-medium">{doc.specialty}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{doc.qualification}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500" /> 4.8
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3 h-3" /> 2.3 km
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`flex items-center gap-0.5 font-display font-bold text-lg ${caseType === "new_case" ? "text-primary" : "text-teal-600"}`}>
                      <IndianRupee className="w-4 h-4" />{fee.toLocaleString()}
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium">{caseType === "new_case" ? "New Case" : "Old Case"}</p>
                    <p className={`text-[10px] font-semibold mt-1 ${(doc as any).waitingCount > 0 ? "text-orange-500" : "text-green-600"}`}>
                      {(doc as any).waitingCount ?? 0} waiting
                    </p>
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-5 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
                    {/* Summary */}
                    <div className={`rounded-xl p-3 mb-4 ${caseType === "new_case" ? "bg-primary/5 border border-primary/10" : "bg-teal-50 border border-teal-100"}`}>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Consultation Fee</span>
                        <span className={`font-bold ${caseType === "new_case" ? "text-primary" : "text-teal-600"}`}>₹{fee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mt-1">
                        <span>{caseType === "new_case" ? "New case consultation" : "Follow-up consultation"}</span>
                        <span>{doc.name}</span>
                      </div>
                    </div>

                    <p className="font-bold text-sm text-slate-800 mb-3">Select Time Slot</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {TIME_SLOTS.map(slot => (
                        <div
                          key={slot}
                          onClick={e => { e.stopPropagation(); setActiveSlot(slot); }}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${activeSlot === slot ? "bg-primary text-white border-primary" : "bg-slate-50 text-slate-600 border-slate-200"}`}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>

                    <button
                      disabled={createAppointment.isPending}
                      onClick={e => { e.stopPropagation(); handleBook(); }}
                      className={`w-full py-3.5 font-bold rounded-xl shadow-lg transition-colors text-white ${caseType === "new_case" ? "bg-primary shadow-primary/20 hover:bg-primary/90" : "bg-teal-500 shadow-teal-500/20 hover:bg-teal-600"}`}
                    >
                      {createAppointment.isPending ? "Confirming..." : `Confirm Booking • ₹${fee.toLocaleString()}`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </PatientLayout>
  );
}
