import React, { useEffect, useState } from "react";
import { useGetTodayQueue } from "@workspace/api-client-react";
import { HeartPulse } from "lucide-react";

export default function QueueDisplay() {
  const { data: queue = [] } = useGetTodayQueue();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const nowServing = queue.filter(q => q.status === "in-consultation");
  const nextUp = queue.filter(q => q.status === "waiting").slice(0, 4);

  // Find the most recent "in-consultation" patient to highlight
  const mainPatient = nowServing[0] || nextUp[0];

  return (
    <div className="h-screen w-full bg-slate-950 text-white flex flex-col overflow-hidden font-sans">
      {/* HEADER */}
      <div className="h-24 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
            <HeartPulse className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight">Medigo City Hospital</h1>
            <p className="text-slate-400 text-lg">Outpatient Department (OPD)</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-5xl font-display font-bold text-blue-400 tracking-tighter">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </h2>
          <p className="text-slate-400 text-lg">{time.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* LEFT: NOW SERVING */}
        <div className="w-[55%] p-10 flex flex-col justify-center relative border-r border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950">
          <h2 className="text-2xl font-bold text-slate-400 tracking-widest uppercase mb-12">Now Serving</h2>
          
          {mainPatient ? (
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="bg-slate-900/80 border-2 border-blue-500/50 rounded-3xl p-12 backdrop-blur-sm relative shadow-2xl shadow-blue-900/20">
                <div className="flex items-end justify-between mb-8">
                  <p className="text-3xl text-blue-400 font-medium">Token No.</p>
                  <div className="bg-blue-600 px-6 py-2 rounded-full">
                    <p className="text-xl font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-white animate-ping"></span> 
                      Proceed
                    </p>
                  </div>
                </div>
                <h1 className="text-[140px] font-display font-black leading-none text-white tracking-tighter mb-4 drop-shadow-md">
                  {mainPatient.tokenNumber}
                </h1>
                <h2 className="text-5xl font-semibold text-slate-300 mb-12">{mainPatient.patientName}</h2>
                
                <div className="bg-slate-800 rounded-2xl p-8 flex items-center justify-between border border-slate-700">
                  <div>
                    <p className="text-xl text-slate-400 mb-1">Doctor</p>
                    <p className="text-3xl font-bold text-white">{mainPatient.doctorName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-slate-400 mb-1">Room</p>
                    <p className="text-5xl font-display font-bold text-teal-400">{mainPatient.cabinNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-500 py-20">
              <p className="text-4xl">No patients in queue</p>
            </div>
          )}
        </div>

        {/* RIGHT: UPCOMING */}
        <div className="flex-1 p-10 flex flex-col bg-slate-950">
          <h2 className="text-2xl font-bold text-slate-400 tracking-widest uppercase mb-8">Next in Queue</h2>
          
          <div className="space-y-6 flex-1">
            {nextUp.map((apt, i) => (
              <div key={apt.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                    <span className="text-5xl font-display font-bold text-orange-400">{apt.tokenNumber}</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-2">{apt.patientName}</p>
                    <p className="text-xl text-slate-400">{apt.doctorName}</p>
                  </div>
                </div>
                <div className="text-right pr-4">
                  <p className="text-lg text-slate-500 mb-1">Cabin</p>
                  <p className="text-4xl font-display font-bold text-teal-500">{apt.cabinNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="h-16 bg-blue-600 shrink-0 overflow-hidden flex items-center px-4 relative">
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap text-2xl font-medium text-white tracking-wide">
          🏥 Welcome to Medigo City Hospital • Please maintain silence • Keep your token ready • Pharmacy is located on the Ground Floor • Emergency Contact: 108 🏥
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        `}} />
      </div>
    </div>
  );
}
