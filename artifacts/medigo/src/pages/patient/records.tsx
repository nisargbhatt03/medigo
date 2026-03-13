import React from "react";
import { PatientLayout } from "@/components/Layouts";
import { useGetPatientPrescriptions } from "@workspace/api-client-react";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function PatientRecords() {
  // Mocking patient ID 1
  const { data: prescriptions = [], isLoading } = useGetPatientPrescriptions(1);

  return (
    <PatientLayout>
      <div className="px-6 pb-6">
        <div className="flex items-center gap-4 mb-6 pt-2">
          <Link href="/patient/home">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer border border-slate-100">
              <ArrowLeft className="w-5 h-5 text-slate-800" />
            </div>
          </Link>
          <h1 className="text-xl font-display font-bold text-slate-900">Health Records</h1>
        </div>

        {/* Patient Summary Card */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
          <h2 className="font-bold text-blue-900 text-lg">Ramesh Patel</h2>
          <div className="flex gap-4 mt-2 text-sm text-blue-700/80 font-medium">
            <span>45 yrs</span>
            <span>Male</span>
            <span className="bg-blue-200/50 px-2 rounded-md">B+</span>
          </div>
          <p className="text-xs text-blue-600 mt-3 pt-3 border-t border-blue-200/50">Medigo City Hospital Registered</p>
        </div>

        <div className="flex gap-6 border-b border-slate-200 mb-6 px-2">
          <div className="pb-3 border-b-2 border-primary font-bold text-primary text-sm">Prescriptions</div>
          <div className="pb-3 font-medium text-slate-400 text-sm">Test Reports</div>
          <div className="pb-3 font-medium text-slate-400 text-sm">Visits</div>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <p className="text-center text-slate-400 py-10">Loading records...</p>
          ) : prescriptions.length === 0 ? (
            <p className="text-center text-slate-400 py-10">No prescriptions found.</p>
          ) : (
            prescriptions.map(rx => (
              <div key={rx.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{rx.doctorName}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{new Date(rx.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-lg text-xs font-bold border border-green-100">
                    <CheckCircle2 className="w-3 h-3" /> {rx.status}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Diagnosis</p>
                  <p className="text-sm font-medium text-slate-800">{rx.diagnosis}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Medicines</p>
                  <ul className="space-y-2">
                    {(() => {
                      try {
                        const meds = JSON.parse(rx.medicines);
                        return meds.map((m: any, i: number) => (
                          <li key={i} className="flex justify-between items-center text-sm border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                            <span className="font-semibold text-slate-700">{m.name}</span>
                            <span className="text-slate-500 text-xs">{m.dosage}</span>
                          </li>
                        ));
                      } catch {
                        return <li className="text-sm text-slate-700">{rx.medicines}</li>;
                      }
                    })()}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </PatientLayout>
  );
}
