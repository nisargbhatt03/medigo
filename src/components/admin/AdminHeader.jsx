import React from 'react';
import { Bell, Search, Calendar } from 'lucide-react';
import { adminNavItems } from './AdminSidebar';

export default function AdminHeader({ activeAdminScreen, setActiveAdminScreen, switchToSuperAdmin }) {
  const currentNav = adminNavItems.find(item => item.id === activeAdminScreen) || adminNavItems[0];

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10 shadow-xs">
      {/* Left Search Section */}
      <div className="relative w-72 sm:w-80 md:w-96">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-lg">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Jan 1, 2025 - Jan 31, 2025</span>
        </div>

        <button className="relative p-2 text-slate-500 hover:text-slate-800 rounded-lg">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
        </button>

        {/* Clinic Admin Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-cyan-600 text-white font-bold text-xs flex items-center justify-center">
            A
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-slate-800 leading-tight">Admin</p>
            <p className="text-[10px] text-slate-400">Sunrise Care Clinic</p>
          </div>
        </div>
      </div>
    </header>
  );
}

