import React from 'react';
import { 
  LayoutDashboard, Users, Calendar, Stethoscope, UserCheck, 
  Building2, Receipt, Package, BarChart3, Settings, 
  FlaskConical, Pill, FileCode2, Bell, ShieldCheck, 
  FileText, Database, KeyRound, HeartPulse
} from 'lucide-react';

export const adminNavItems = [
  { id: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard, num: 1 },
  { id: 'admin-patients', label: 'Patients', icon: Users, num: 2 },
  { id: 'admin-appointments', label: 'Appointments', icon: Calendar, num: 3 },
  { id: 'admin-doctors', label: 'Doctors', icon: Stethoscope, num: 4 },
  { id: 'admin-staff', label: 'Staff', icon: UserCheck, num: 5 },
  { id: 'admin-departments', label: 'Departments', icon: Building2, num: 6 },
  { id: 'admin-billing', label: 'Billing', icon: Receipt, num: 7 },
  { id: 'admin-inventory', label: 'Inventory', icon: Package, num: 8 },
  { id: 'admin-reports', label: 'Reports', icon: BarChart3, num: 9 },
  { id: 'admin-settings', label: 'Settings', icon: Settings, num: 10 },
  { id: 'admin-lab', label: 'Lab', icon: FlaskConical, num: 11 },
  { id: 'admin-pharmacy', label: 'Pharmacy', icon: Pill, num: 12 },
  { id: 'admin-templates', label: 'Templates', icon: FileCode2, num: 13 },
  { id: 'admin-notifications', label: 'Notifications', icon: Bell, num: 14 },
  { id: 'admin-roles', label: 'Roles & Permissions', icon: ShieldCheck, num: 15 },
  { id: 'admin-audit', label: 'Audit Logs', icon: FileText, num: 16 },
];

export default function AdminSidebar({ activeAdminScreen, setActiveAdminScreen, switchToSuperAdmin }) {
  return (
    <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
      {/* Clinic Logo Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base text-white tracking-tight">Medigo</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-semibold block">Sunrise Care Clinic</span>
          </div>
        </div>
      </div>


      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeAdminScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveAdminScreen(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-sm font-semibold' 
                  : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Need Help Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-900/40">
        <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700/50">
          <p className="text-xs text-slate-300 font-medium mb-1">Need Help?</p>
          <button 
            onClick={() => setActiveAdminScreen('admin-settings')}
            className="w-full text-xs bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 px-3 rounded transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
}
