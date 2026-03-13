import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

export function QueueDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full h-screen bg-[#0F172A] text-white font-sans overflow-hidden flex flex-col selection:bg-blue-500/30">
      {/* TOP HEADER */}
      <header className="h-[80px] bg-[#1E293B] border-b border-[#334155] flex items-center justify-between px-8 shrink-0 relative z-10 shadow-lg shadow-black/20">
        <div className="flex items-center gap-3 w-1/4">
          <div className="bg-[#2563EB] p-2 rounded-lg">
            <Plus className="w-8 h-8 text-white stroke-[3]" />
          </div>
          <span className="text-3xl font-bold tracking-tight text-white">Medigo</span>
        </div>
        
        <div className="w-2/4 text-center">
          <h1 className="text-2xl font-semibold text-gray-200 uppercase tracking-widest">Medigo City Hospital</h1>
          <p className="text-[#14B8A6] font-medium text-lg">WAITING AREA</p>
        </div>
        
        <div className="flex flex-col items-end w-1/4">
          <div className="text-3xl font-bold text-white tracking-wider">{formattedTime}</div>
          <div className="text-gray-400 font-medium text-sm tracking-wide uppercase">{formattedDate}</div>
        </div>
      </header>

      {/* MARQUEE HEADER */}
      <div className="h-[40px] bg-[#2563EB]/10 border-b border-[#2563EB]/20 flex items-center overflow-hidden shrink-0">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] inline-block text-[#60A5FA] font-medium text-lg tracking-wide">
          <span className="mx-8">•</span> Please maintain social distancing 
          <span className="mx-8">•</span> Wear your mask securely covering your nose and mouth
          <span className="mx-8">•</span> Keep your token ready when your number is displayed
          <span className="mx-8">•</span> Please maintain social distancing 
          <span className="mx-8">•</span> Wear your mask securely covering your nose and mouth
          <span className="mx-8">•</span> Keep your token ready when your number is displayed
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex p-6 gap-8 overflow-hidden">
        
        {/* LEFT HALF - NOW SERVING */}
        <div className="w-[45%] flex flex-col gap-6">
          <div className="bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-3xl border border-[#2563EB]/40 p-10 flex-1 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)]">
            {/* Pulse effect rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-[400px] h-[400px] rounded-full border border-[#2563EB] animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute w-[500px] h-[500px] rounded-full border border-[#2563EB] animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center w-full">
              <div className="bg-[#2563EB]/20 text-[#60A5FA] px-6 py-2 rounded-full text-xl font-bold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Now Serving
              </div>
              
              <div className="text-[140px] leading-none font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] my-2 tabular-nums">
                102
              </div>
              
              <div className="text-5xl font-semibold text-white mt-4 mb-8 w-full max-w-md truncate">
                Priya Mehta
              </div>
              
              <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-gray-500 to-transparent my-4"></div>
              
              <div className="text-gray-400 text-xl font-medium mb-2 uppercase tracking-wider">
                Please proceed to
              </div>
              
              <div className="text-[44px] font-bold text-[#14B8A6] leading-tight drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                CABIN 2
              </div>
              <div className="text-3xl text-gray-200 mt-1">
                Dr. Shah
              </div>
              <div className="text-xl text-gray-500 mt-2 font-medium">
                General Physician
              </div>
            </div>
          </div>

          {/* NEXT IN QUEUE */}
          <div className="shrink-0">
            <h2 className="text-gray-400 text-xl font-bold uppercase tracking-widest mb-4 flex items-center gap-4">
              Next in Queue
              <div className="h-px bg-gray-700 flex-1"></div>
            </h2>
            <div className="flex gap-4">
              {[
                { token: "103", name: "Amit Sharma", dr: "Dr. Kumar", cabin: "Cabin 4" },
                { token: "104", name: "Sunita Verma", dr: "Dr. Gupta", cabin: "Cabin 6" },
                { token: "105", name: "Rajan Modi", dr: "Dr. Kumar", cabin: "Cabin 4" },
              ].map((item, i) => (
                <div key={i} className="flex-1 bg-[#1E293B] rounded-2xl p-5 border border-[#334155] flex flex-col">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-1 tabular-nums">#{item.token}</div>
                  <div className="text-xl font-semibold text-white truncate mb-2">{item.name}</div>
                  <div className="mt-auto">
                    <div className="text-[#14B8A6] font-medium text-lg">{item.cabin}</div>
                    <div className="text-gray-400 text-sm">{item.dr}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT HALF - CABIN STATUS */}
        <div className="w-[55%] flex flex-col">
          <h2 className="text-white text-2xl font-bold tracking-widest mb-6 flex items-center gap-4 uppercase">
            Cabin Status
            <div className="h-px bg-gray-700 flex-1"></div>
          </h2>
          
          <div className="grid grid-cols-2 gap-4 flex-1">
            {[
              { num: "1", dr: "Dr. Sharma", spec: "Dermatology", status: "AVAILABLE", color: "green", count: 0, token: null },
              { num: "2", dr: "Dr. Shah", spec: "General", status: "CONSULTING", color: "blue", count: 5, token: "102" },
              { num: "3", dr: "Dr. Kumar", spec: "Cardiology", status: "WAITING", color: "orange", count: 3, token: null },
              { num: "4", dr: "Dr. Gupta", spec: "Orthopedics", status: "CONSULTING", color: "blue", count: 7, token: "98" },
              { num: "5", dr: "Dr. Patel", spec: "Neurology", status: "AVAILABLE", color: "green", count: 0, token: null },
              { num: "6", dr: "Dr. Mehta", spec: "ENT", status: "BREAK", color: "red", count: null, token: null },
            ].map((cabin, i) => (
              <div key={i} className="bg-[#1E293B] rounded-2xl border border-[#334155] p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">C-{cabin.num}</div>
                    <div className="text-xl font-semibold text-gray-200">{cabin.dr}</div>
                    <div className="text-gray-400 font-medium">{cabin.spec}</div>
                  </div>
                  
                  <div className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wider flex items-center gap-2 border ${
                    cabin.color === 'green' ? 'bg-[#22C55E]/10 text-[#4ADE80] border-[#22C55E]/20' :
                    cabin.color === 'blue' ? 'bg-[#2563EB]/10 text-[#60A5FA] border-[#2563EB]/20' :
                    cabin.color === 'orange' ? 'bg-[#F59E0B]/10 text-[#FBBF24] border-[#F59E0B]/20' :
                    'bg-[#EF4444]/10 text-[#F87171] border-[#EF4444]/20'
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      cabin.color === 'green' ? 'bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]' :
                      cabin.color === 'blue' ? 'bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]' :
                      cabin.color === 'orange' ? 'bg-[#FBBF24] shadow-[0_0_8px_#FBBF24]' :
                      'bg-[#F87171] shadow-[0_0_8px_#F87171]'
                    } ${cabin.color === 'blue' ? 'animate-pulse' : ''}`}></div>
                    {cabin.status}
                  </div>
                </div>
                
                <div className="mt-auto flex justify-between items-end border-t border-[#334155]/50 pt-4">
                  {cabin.token ? (
                    <div>
                      <div className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">Serving Token</div>
                      <div className="text-3xl font-bold text-white tabular-nums leading-none">{cabin.token}</div>
                    </div>
                  ) : (
                    <div className="text-gray-500 font-medium text-lg italic">
                      {cabin.status === 'BREAK' ? '--' : 'Ready for next'}
                    </div>
                  )}
                  
                  {cabin.count !== null && cabin.status !== 'BREAK' && (
                    <div className="text-right">
                      <div className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">Waiting</div>
                      <div className="text-2xl font-bold text-gray-300 tabular-nums leading-none">
                        {cabin.count}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* BOTTOM TICKER BAR */}
      <footer className="h-[60px] bg-[#020617] flex items-center px-6 overflow-hidden shrink-0 border-t border-[#334155]">
        <div className="text-gray-300 font-medium text-xl whitespace-nowrap animate-[marquee_25s_linear_infinite_reverse] w-full flex gap-16 items-center">
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> 
            Pharmacy is open on Ground Floor
          </span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> 
            Next OPD: Monday 9AM
          </span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span> 
            Ambulance: 108
          </span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span> 
            Blood Bank: Ext. 204
          </span>
          {/* Duplicate for seamless scrolling */}
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> 
            Pharmacy is open on Ground Floor
          </span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span> 
            Next OPD: Monday 9AM
          </span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span> 
            Ambulance: 108
          </span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span> 
            Blood Bank: Ext. 204
          </span>
        </div>
      </footer>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default QueueDisplay;
