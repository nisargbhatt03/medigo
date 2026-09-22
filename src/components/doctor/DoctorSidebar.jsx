import React from 'react';
import { 
  LayoutDashboard, Calendar, ListOrdered, FileText, Pill, 
  FlaskConical, Radio, Clock, RefreshCw, Award, MessageSquare, 
  Star, Search, UserCheck, Video, CalendarDays, Palmtree, 
  BarChart3, Bookmark, FileCode2, MessageCircle, FolderCheck, 
  Bell, Settings, HeartPulse
} from 'lucide-react';

export const doctorNavItems = [
  { id: 'doc-dashboard', label: 'Dashboard', icon: LayoutDashboard, num: 1 },
  { id: 'doc-appointments', label: 'Appointments', icon: Calendar, num: 2 },
  { id: 'doc-queue', label: 'Patient Queue', icon: ListOrdered, num: 3 },
  { id: 'doc-consultation', label: 'Consultation / EMR', icon: FileText, num: 4 },
  { id: 'doc-prescriptions', label: 'Prescriptions', icon: Pill, num: 5 },
  { id: 'doc-lab', label: 'Lab Orders', icon: FlaskConical, num: 6 },
  { id: 'doc-radiology', label: 'Radiology Orders', icon: Radio, num: 7 },
  { id: 'doc-history', label: 'Patient History', icon: Clock, num: 8 },
  { id: 'doc-followups', label: 'Follow-ups', icon: RefreshCw, num: 9 },
  { id: 'doc-certificates', label: 'Medical Certificates', icon: Award, num: 10 },
  { id: 'doc-messages', label: 'Messages / Notifications', icon: MessageSquare, num: 11 },
  { id: 'doc-templates', label: 'Templates & Favorites', icon: Star, num: 12 },
  { id: 'doc-icd', label: 'Diagnoses & ICD Codes', icon: Search, num: 13 },
  { id: 'doc-referrals', label: 'Referral Management', icon: UserCheck, num: 14 },
  { id: 'doc-telemedicine', label: 'Telemedicine', icon: Video, num: 15 },
  { id: 'doc-schedule', label: 'Schedule & Availability', icon: CalendarDays, num: 16 },
  { id: 'doc-leaves', label: 'Leave Management', icon: Palmtree, num: 17 },
  { id: 'doc-reports', label: 'Reports & Analytics', icon: BarChart3, num: 18 },
  { id: 'doc-fav-prescriptions', label: 'Favorite Prescriptions', icon: Bookmark, num: 19 },
  { id: 'doc-clinical-templates', label: 'Clinical Templates', icon: FileCode2, num: 20 },
  { id: 'doc-patient-messages', label: 'Patient Messages', icon: MessageCircle, num: 21 },
  { id: 'doc-documents', label: 'Patient Documents', icon: FolderCheck, num: 22 },
  { id: 'doc-reminders', label: 'Follow-up Reminders', icon: Bell, num: 23 },
  { id: 'doc-settings', label: 'Settings', icon: Settings, num: 24 },
];

export default function DoctorSidebar({ activeDocScreen, setActiveDocScreen, switchToSuperAdmin }) {
  return (
    <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-base text-white tracking-tight">Medigo</span>
            <span className="text-[10px] text-indigo-400 font-semibold block">Dr. Priya Sharma</span>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {doctorNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeDocScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveDocScreen(item.id)}
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
            onClick={() => setActiveDocScreen('doc-messages')}
            className="w-full text-xs bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 px-3 rounded transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
}
