import React from 'react';
import { 
  LayoutDashboard, Building2, CreditCard, Users, UserCheck, DollarSign, 
  ToggleLeft, HelpCircle, FileText, Settings, Bell, BarChart3, 
  ShieldCheck, KeyRound, ShieldAlert, HeartPulse
} from 'lucide-react';

export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, num: 1 },
  { id: 'clinics', label: 'Clinics', icon: Building2, num: 2 },
  { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard, num: 3 },
  { id: 'tenants', label: 'Tenants', icon: Users, num: 4 },
  { id: 'users', label: 'Users', icon: UserCheck, num: 5 },
  { id: 'revenue', label: 'Revenue', icon: DollarSign, num: 6 },
  { id: 'features', label: 'Features', icon: ToggleLeft, num: 7 },
  { id: 'support', label: 'Support', icon: HelpCircle, num: 8 },
  { id: 'audit-logs', label: 'Audit Logs', icon: FileText, num: 9 },
  { id: 'settings', label: 'System Settings', icon: Settings, num: 10 },
  { id: 'notifications', label: 'Notifications', icon: Bell, num: 11 },
  { id: 'reports', label: 'Reports', icon: BarChart3, num: 12 },
  { id: 'roles', label: 'Roles & Permissions', icon: ShieldCheck, num: 13 },
  { id: 'integrations', label: 'API & Integrations', icon: KeyRound, num: 14 },
  { id: 'security', label: 'Security Center', icon: ShieldAlert, num: 15 },
];

export default function Sidebar({ activeScreen, setActiveScreen }) {
  return (
    <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
      {/* Brand Logo Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
          <HeartPulse className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-lg text-white tracking-tight">Medigo</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Super Admin</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
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

    </aside>
  );
}
