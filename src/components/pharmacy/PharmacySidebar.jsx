import React from 'react';
import { 
  LayoutDashboard, ShoppingCart, FileText, Pill, ShoppingBag, 
  Truck, AlertTriangle, Sliders, Info, BarChart3, Settings, HeartPulse
} from 'lucide-react';

export const pharmacyNavItems = [
  { id: 'pharma-dashboard', label: 'Dashboard', icon: LayoutDashboard, num: 1 },
  { id: 'pharma-inventory', label: 'Medicine Inventory', icon: Pill, num: 2 },
  { id: 'pharma-medicine-details', label: 'Medicine Details', icon: Info, num: 3 },
  { id: 'pharma-purchase-orders', label: 'Purchase Orders', icon: ShoppingBag, num: 4 },
  { id: 'pharma-suppliers', label: 'Suppliers Management', icon: Truck, num: 5 },
  { id: 'pharma-sales', label: 'Sales / Billing (POS)', icon: ShoppingCart, num: 6 },
  { id: 'pharma-prescriptions', label: 'Prescription Queue', icon: FileText, num: 7 },
  { id: 'pharma-rx-details', label: 'Prescription Details', icon: FileText, num: 8 },
  { id: 'pharma-stock-adjust', label: 'Stock Adjustment', icon: Sliders, num: 9 },
  { id: 'pharma-expiry', label: 'Expiry Management', icon: AlertTriangle, num: 10 },
  { id: 'pharma-reports', label: 'Reports & Analytics', icon: BarChart3, num: 11 },
  { id: 'pharma-settings', label: 'Pharmacy Settings', icon: Settings, num: 12 },
];

export default function PharmacySidebar({ activePharmaScreen, setActivePharmaScreen, switchToSuperAdmin }) {
  return (
    <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-base text-white tracking-tight">Medigo</span>
            <span className="text-[10px] text-teal-400 font-semibold block">Pharmacy Desk</span>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {pharmacyNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePharmaScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePharmaScreen(item.id)}
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
            onClick={() => setActivePharmaScreen('pharma-settings')}
            className="w-full text-xs bg-slate-700 hover:bg-slate-600 text-white font-medium py-1.5 px-3 rounded transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
}
