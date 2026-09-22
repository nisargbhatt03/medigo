import React from 'react';
import { 
  LayoutDashboard, Calendar, Users, UserPlus, ListOrdered, Receipt, 
  UserCheck, UserCheck2, HelpCircle, MessageSquare, BarChart3, Settings, 
  Stethoscope, CalendarDays, RefreshCw, XCircle, FileText, ShieldCheck, 
  UserPlus2, MessageCircle, Star, HeartPulse
} from 'lucide-react';

export const receptionNavItems = [
  { id: 'rec-dashboard', label: 'Dashboard', icon: LayoutDashboard, num: 1 },
  { id: 'rec-appointments', label: 'Appointments', icon: Calendar, num: 2 },
  { id: 'rec-register', label: 'Patient Registration', icon: UserPlus, num: 3 },
  { id: 'rec-patients', label: 'Patient Search & Profile', icon: Users, num: 4 },
  { id: 'rec-queue', label: 'Queue Management', icon: ListOrdered, num: 5 },
  { id: 'rec-billing', label: 'Billing & Payments', icon: Receipt, num: 6 },
  { id: 'rec-checkin', label: 'Patient Check-in', icon: UserCheck, num: 7 },
  { id: 'rec-walkin', label: 'Walk-in Registration', icon: UserCheck2, num: 8 },
  { id: 'rec-enquiries', label: 'Enquiries Management', icon: HelpCircle, num: 9 },
  { id: 'rec-comms', label: 'Communications', icon: MessageSquare, num: 10 },
  { id: 'rec-reports', label: 'Reports', icon: BarChart3, num: 11 },
  { id: 'rec-settings', label: 'Settings', icon: Settings, num: 12 },
  { id: 'rec-availability', label: 'Doctor Availability', icon: Stethoscope, num: 13 },
  { id: 'rec-calendar', label: 'Appointment Calendar', icon: CalendarDays, num: 14 },
  { id: 'rec-reschedule', label: 'Reschedule', icon: RefreshCw, num: 15 },
  { id: 'rec-cancellations', label: 'Cancellations', icon: XCircle, num: 16 },
  { id: 'rec-documents', label: 'Patient Documents', icon: FileText, num: 17 },
  { id: 'rec-insurance', label: 'Insurance Verification', icon: ShieldCheck, num: 18 },
  { id: 'rec-visitors', label: 'Visitor Management', icon: UserPlus2, num: 19 },
  { id: 'rec-campaigns', label: 'WhatsApp Campaigns', icon: MessageCircle, num: 20 },
  { id: 'rec-feedback', label: 'Patient Feedback', icon: Star, num: 21 },
];

export default function ReceptionSidebar({ activeRecScreen, setActiveRecScreen, switchToSuperAdmin }) {
  return (
    <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-base text-white tracking-tight">Medigo</span>
            <span className="text-[10px] text-emerald-400 font-semibold block">Reception Desk</span>
          </div>
        </div>
      </div>


      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {receptionNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeRecScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveRecScreen(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-sm font-semibold' 
                  : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span className="flex-1 text-left truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Need Help Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-900/40">
        <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700/50">
          <p className="text-xs text-slate-300 font-medium mb-1">Need Help?</p>
          <button 
            onClick={() => setActiveRecScreen('rec-enquiries')}
            className="w-full text-xs bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 px-3 rounded transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
}
