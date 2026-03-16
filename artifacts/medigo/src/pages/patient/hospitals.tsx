import React, { useState } from "react";
import { PatientLayout } from "@/components/Layouts";
import { MapPin, Star, Phone, Clock, ChevronRight, Search, Navigation, Stethoscope } from "lucide-react";

const HOSPITALS = [
  {
    id: 1,
    name: "Medigo City Hospital",
    type: "Multi-Specialty",
    distance: "0.2 km",
    rating: 4.9,
    reviews: 842,
    address: "Plot 14, Ring Road, Surat",
    phone: "+91 261 234 5678",
    hours: "24/7 Open",
    emergency: true,
    registered: true,
    specialties: ["Cardiology", "Ortho", "Neurology", "Gynecology"],
    color: "from-primary to-blue-600",
    badge: "Your Hospital",
  },
  {
    id: 2,
    name: "Sunshine Super Speciality",
    type: "Super Speciality",
    distance: "1.4 km",
    rating: 4.7,
    reviews: 520,
    address: "Athwa Lines, Surat",
    phone: "+91 261 456 7890",
    hours: "6 AM – 10 PM",
    emergency: true,
    registered: false,
    specialties: ["Oncology", "Neurology", "ENT"],
    color: "from-orange-500 to-orange-600",
    badge: "Top Rated",
  },
  {
    id: 3,
    name: "Nirmal Children's Hospital",
    type: "Paediatric",
    distance: "2.1 km",
    rating: 4.8,
    reviews: 310,
    address: "Vesu, Surat",
    phone: "+91 261 678 9012",
    hours: "8 AM – 9 PM",
    emergency: false,
    registered: false,
    specialties: ["Paediatrics", "Neonatology"],
    color: "from-green-500 to-teal-600",
    badge: "Children",
  },
  {
    id: 4,
    name: "Lifeline Heart Institute",
    type: "Cardiac",
    distance: "3.0 km",
    rating: 4.6,
    reviews: 198,
    address: "Adajan, Surat",
    phone: "+91 261 789 0123",
    hours: "24/7 Open",
    emergency: true,
    registered: false,
    specialties: ["Cardiac Surgery", "Cardiology"],
    color: "from-red-500 to-rose-600",
    badge: "Cardiac",
  },
  {
    id: 5,
    name: "Vatsalya Women's Clinic",
    type: "Gynecology",
    distance: "4.2 km",
    rating: 4.5,
    reviews: 256,
    address: "Piplod, Surat",
    phone: "+91 261 890 1234",
    hours: "9 AM – 8 PM",
    emergency: false,
    registered: false,
    specialties: ["Gynecology", "Obstetrics", "IVF"],
    color: "from-pink-500 to-purple-600",
    badge: "Women's",
  },
];

export default function PatientHospitals() {
  const [search, setSearch] = useState("");
  const filtered = HOSPITALS.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PatientLayout>
      <div className="pb-6">
        {/* Header */}
        <div className="px-6 pt-4 mb-5">
          <h1 className="text-2xl font-display font-bold text-slate-900">Nearby Hospitals</h1>
          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
            <Navigation className="w-3.5 h-3.5 text-primary" />
            <span>Surat, Gujarat — 6 hospitals nearby</span>
          </p>
        </div>

        {/* Search */}
        <div className="px-6 mb-5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search hospitals or speciality..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mx-6 mb-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-36 bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-5 w-full h-full">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="border border-slate-400"></div>
              ))}
            </div>
          </div>
          <MapPin className="w-8 h-8 text-primary mb-2 drop-shadow" />
          <p className="text-sm font-bold text-slate-700">Map View</p>
          <p className="text-xs text-slate-500">Tap to open in Maps</p>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 px-6 mb-4 custom-scrollbar">
          {["All", "Multi-Specialty", "Cardiac", "Paediatric", "Gynecology", "24/7"].map((f, i) => (
            <div key={f} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border transition-colors ${i === 0 ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`}>
              {f}
            </div>
          ))}
        </div>

        {/* Hospital Cards */}
        <div className="px-6 space-y-4">
          {filtered.map(h => (
            <div key={h.id} className={`bg-white rounded-2xl border-2 shadow-sm overflow-hidden ${h.registered ? "border-primary/30" : "border-slate-100"}`}>
              {/* Top bar */}
              <div className={`bg-gradient-to-r ${h.color} px-5 py-3 flex justify-between items-center`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">{h.name}</p>
                    <p className="text-white/80 text-xs mt-0.5">{h.type}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${h.registered ? "bg-white text-primary" : "bg-white/20 text-white"}`}>
                  {h.badge}
                </span>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span className="font-bold text-sm text-slate-800">{h.rating}</span>
                    <span className="text-xs text-slate-400">({h.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-bold text-sm">
                    <Navigation className="w-3.5 h-3.5" />
                    {h.distance}
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" />
                  <span>{h.address}</span>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-green-600" />
                    <span className="font-medium">{h.hours}</span>
                  </div>
                  {h.emergency && (
                    <span className="bg-red-50 text-red-600 border border-red-100 px-2 py-0.5 rounded-full font-bold text-[10px]">
                      🚨 Emergency
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {h.specialties.map(s => (
                    <span key={s} className="bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-0.5 rounded-full text-[11px] font-medium">{s}</span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a href={`tel:${h.phone}`} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  {h.registered ? (
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
                      Book Now <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors">
                      Get Directions
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PatientLayout>
  );
}
