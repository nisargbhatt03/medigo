import React from 'react';
import { 
  LayoutDashboard, Calendar, Video, FileText, Pill, FlaskConical, 
  Receipt, ShoppingCart, Users, ShieldCheck, MessageSquare, Package, 
  Bell, Activity, HelpCircle, Gift, FileCheck, Clock, Settings, HeartPulse 
} from 'lucide-react';

export const patientNavItems = [
  { id: 'patient-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'patient-appointments', label: 'Appointments', icon: Calendar },
  { id: 'patient-telemedicine', label: 'Telemedicine', icon: Video },
  { id: 'patient-records', label: 'Medical Records', icon: FileText },
  { id: 'patient-prescriptions', label: 'Prescriptions', icon: Pill },
  { id: 'patient-lab-reports', label: 'Lab Reports', icon: FlaskConical },
  { id: 'patient-invoices', label: 'Invoices & Payments', icon: Receipt },
  { id: 'patient-medicines', label: 'Order Medicines', icon: ShoppingCart },
  { id: 'patient-family', label: 'Family Members', icon: Users },
  { id: 'patient-insurance', label: 'Insurance & Claims', icon: ShieldCheck },
  { id: 'patient-messages', label: 'Messages', icon: MessageSquare },
  { id: 'patient-health-packages', label: 'Health Packages', icon: Package },
  { id: 'patient-reminders', label: 'Medication Reminders', icon: Bell },
  { id: 'patient-tracker', label: 'Health Tracker', icon: Activity },
  { id: 'patient-emergency', label: 'Emergency & Help', icon: HelpCircle },
  { id: 'patient-rewards', label: 'Referral & Rewards', icon: Gift },
  { id: 'patient-consent', label: 'Consent & Export', icon: FileCheck },
  { id: 'patient-activity', label: 'Activity Log', icon: Clock },
  { id: 'patient-settings', label: 'Profile & Settings', icon: Settings },
];

export default function PatientSidebar({ activePatientScreen, setActivePatientScreen }) {
  return (
    <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
      {/* Brand Logo Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-base text-white tracking-tight">Medigo</span>
            <span className="text-[10px] text-blue-400 font-semibold block">Patient Portal</span>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {patientNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePatientScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePatientScreen(item.id)}
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
            onClick={() => setActivePatientScreen('patient-emergency')}
            className="w-full text-xs bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 px-3 rounded transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
}
