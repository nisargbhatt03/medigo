import React, { useState } from "react";
import { PatientLayout } from "@/components/Layouts";
import { useListDoctors, useCreateAppointment, getListAppointmentsQueryKey } from "@workspace/api-client-react";
import { Star, MapPin, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function PatientBook() {
  const { data: doctors = [] } = useListDoctors();
  const createAppointment = useCreateAppointment();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const specialties = ["All", "General", "Cardiology", "Orthopedics", "Dermatology", "Neurology"];
  const timeSlots = ["9:00 AM", "9:30 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"];

  const [activeSlot, setActiveSlot] = useState("10:30 AM");

  const handleBook = () => {
    if (!selectedDoctor) return;
    createAppointment.mutate({
      data: {
        patientId: 1, // Mocked patient ID
        doctorId: selectedDoctor,
        date: new Date().toISOString().split('T')[0],
        timeSlot: activeSlot
      }
    }, {
      onSuccess: () => {
        toast({ title: "Appointment Confirmed!" });
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

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar -mx-6 px-6">
          {specialties.map((s, i) => (
            <div key={i} className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-colors ${i === 0 ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200'}`}>
              {s}
            </div>
          ))}
        </div>

        <div className="space-y-4 mt-2">
          {doctors.map(doc => (
            <div 
              key={doc.id} 
              onClick={() => setSelectedDoctor(doc.id)}
              className={`bg-white rounded-2xl p-4 border-2 transition-all cursor-pointer ${selectedDoctor === doc.id ? 'border-primary shadow-lg shadow-primary/10' : 'border-slate-100 shadow-sm hover:border-primary/30'}`}
            >
              <div className="flex gap-4">
                <img src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} className="w-20 h-20 rounded-xl object-cover bg-slate-100" alt={doc.name} />
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-sm text-primary font-medium">{doc.specialty}</p>
                  <p className="text-xs text-slate-500 mt-1">{doc.qualification} • 12 yrs exp</p>
                  <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-amber-500">
                    <Star className="w-3 h-3 fill-amber-500" /> 4.8 
                    <span className="text-slate-400 ml-2 font-normal flex items-center"><MapPin className="w-3 h-3 mr-0.5" /> 2.3 km</span>
                  </div>
                </div>
              </div>

              {selectedDoctor === doc.id && (
                <div className="mt-6 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-4">
                  <p className="font-bold text-sm text-slate-800 mb-3">Select Time Slot</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {timeSlots.map(slot => (
                      <div 
                        key={slot}
                        onClick={(e) => { e.stopPropagation(); setActiveSlot(slot); }}
                        className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${activeSlot === slot ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-600 border-slate-200'}`}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                  <button 
                    disabled={createAppointment.isPending}
                    onClick={(e) => { e.stopPropagation(); handleBook(); }}
                    className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                  >
                    {createAppointment.isPending ? "Confirming..." : "Confirm Booking"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PatientLayout>
  );
}
