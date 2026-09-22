import React from 'react';
import { Bell, Search, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { navItems } from './Sidebar';

export default function Header({ activeScreen, setActiveScreen }) {
  const screenDetails = {
    dashboard: { title: 'Welcome back, Super Admin!', tagline: "Here's what's happening across your platform today." },
    clinics: { title: 'Clinics', tagline: 'Manage all registered clinics across the platform.' },
    subscriptions: { title: 'Subscriptions', tagline: 'Manage subscription plans, pricing, and features.' },
    tenants: { title: 'Tenants', tagline: 'Manage clinic tenants, database isolation, and account status.' },
    users: { title: 'Users', tagline: 'Manage system users, credentials, and access roles.' },
    revenue: { title: 'Revenue & Billing', tagline: 'Monitor subscription earnings, payouts, and revenue analytics.' },
    features: { title: 'Feature Flags', tagline: 'Enable, disable, and configure system feature flags across clinics.' },
    support: { title: 'Support Center', tagline: 'Manage customer support tickets, FAQs, and help resources.' },
    'audit-logs': { title: 'Audit Logs', tagline: 'Track system events, user actions, and security logs.' },
    settings: { title: 'System Settings', tagline: 'Configure global system parameters, branding, and defaults.' },
    notifications: { title: 'Notifications Center', tagline: 'Broadcast notifications and alerts across clinics.' },
    reports: { title: 'Reports & Analytics', tagline: 'View platform-wide usage metrics, performance, and financial reports.' },
    roles: { title: 'Roles & Permissions', tagline: 'Define user roles, access rights, and permission levels.' },
    api: { title: 'API & Integrations', tagline: 'Manage API keys, webhooks, and third-party integrations.' },
  };

  const currentNav = navItems?.find(item => item.id === activeScreen);
  const currentScreen = screenDetails[activeScreen] || { title: currentNav?.label || 'Overview', tagline: '' };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10 shadow-xs">
      {/* Title & Screen Breadcrumb */}
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-base font-bold text-slate-800 tracking-tight">{currentScreen.title}</h1>
          {currentScreen.tagline && (
            <p className="text-[11px] text-slate-500">{currentScreen.tagline}</p>
          )}
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Date Selector Pill */}
        <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-lg">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Jan 1, 2025 - Jan 31, 2025</span>
        </div>

        {/* Notifications */}
        <button 
          onClick={() => setActiveScreen('notifications')}
          className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
        </button>

        {/* Super Admin Profile */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
            SA
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-slate-800 leading-tight">Super Admin</p>
            <p className="text-[10px] text-slate-400">admin@medigo.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
