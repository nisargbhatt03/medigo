import React from "react";
import { PatientLayout } from "@/components/Layouts";
import { useGetPatientPrescriptions } from "@workspace/api-client-react";
import { Pill, Clock, AlertCircle, CheckCircle2, ArrowLeft, Info } from "lucide-react";
import { Link } from "wouter";

const MED_COLORS = [
  { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100", dot: "bg-blue-400" },
  { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-100", dot: "bg-teal-400" },
  { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100", dot: "bg-orange-400" },
  { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-100", dot: "bg-purple-400" },
];

function parseMedicines(raw: string): Array<{ name: string; dosage: string; timing?: string }> {
  try {
    return JSON.parse(raw);
  } catch {
    return raw.split(";").map(m => {
      const parts = m.trim().split("-");
      return { name: parts[0]?.trim() || m.trim(), dosage: parts.slice(1).join("-").trim() };
    }).filter(m => m.name);
  }
}

export default function PatientMedicines() {
  const { data: prescriptions = [], isLoading } = useGetPatientPrescriptions(1);

  const allMeds = prescriptions.flatMap((rx, rxIdx) =>
    parseMedicines(rx.medicines).map((med, i) => ({
      ...med,
      rxId: rx.id,
      doctorName: rx.doctorName,
      diagnosis: rx.diagnosis,
      date: rx.createdAt,
      status: rx.status,
      colorIdx: (rxIdx + i) % MED_COLORS.length,
    }))
  );

  const activeMeds = allMeds.filter(m => m.status !== "cancelled");

  return (
    <PatientLayout>
      <div className="pb-6">
        <div className="px-6 pt-4 flex items-center gap-3 mb-6">
          <Link href="/patient/home">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer border border-slate-100">
              <ArrowLeft className="w-5 h-5 text-slate-700" />
            </div>
          </Link>
          <div>
            <h1 className="text-xl font-display font-bold text-slate-900">My Medicines</h1>
            <p className="text-xs text-slate-400">{activeMeds.length} active medicines</p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mx-6 mb-5 bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-700 font-medium leading-relaxed">These medicines were prescribed by your doctor. Do not stop or change dosage without medical advice.</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : prescriptions.length === 0 ? (
          <div className="text-center py-16 px-6">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Pill className="w-8 h-8 text-slate-400" />
            </div>
            <p className="font-bold text-slate-600 mb-1">No medicines yet</p>
            <p className="text-sm text-slate-400">Your doctor prescribed medicines will appear here.</p>
          </div>
        ) : (
          <div className="px-6 space-y-6">
            {prescriptions.map(rx => (
              <div key={rx.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Rx Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-5 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-bold text-sm">{rx.doctorName}</p>
                      <p className="text-white/60 text-xs mt-0.5">
                        {new Date(rx.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </p>
                    </div>
                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${rx.status === "dispensed" ? "bg-green-500/20 text-green-300" : "bg-blue-500/20 text-blue-300"}`}>
                      <CheckCircle2 className="w-3 h-3" /> {rx.status}
                    </div>
                  </div>
                  <div className="mt-3 bg-white/10 rounded-xl px-3 py-2">
                    <p className="text-white/50 text-[10px] uppercase tracking-wide font-bold">Diagnosis</p>
                    <p className="text-white text-sm font-medium mt-0.5">{rx.diagnosis}</p>
                  </div>
                </div>

                {/* Medicines List */}
                <div className="p-4 space-y-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Prescribed Medicines</p>
                  {parseMedicines(rx.medicines).map((med, i) => {
                    const c = MED_COLORS[i % MED_COLORS.length];
                    return (
                      <div key={i} className={`${c.bg} border ${c.border} rounded-xl p-4`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center shrink-0`}>
                            <Pill className={`w-5 h-5 ${c.text}`} />
                          </div>
                          <div className="flex-1">
                            <p className={`font-bold ${c.text} text-sm`}>{med.name}</p>
                            {med.dosage && (
                              <div className="flex items-center gap-1.5 mt-1">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <p className="text-xs text-slate-600 font-medium">{med.dosage}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {rx.instructions && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex gap-2 mt-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-0.5">Instructions</p>
                        <p className="text-xs text-amber-700">{rx.instructions}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PatientLayout>
  );
}
