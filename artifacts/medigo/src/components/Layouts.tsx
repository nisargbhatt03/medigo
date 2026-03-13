import React from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, Users, Calendar, Stethoscope, 
  MonitorPlay, FileText, Settings, LogOut, Activity,
  ClipboardList, Search, Bell, Menu, Home, Phone
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface SidebarProps {
  items: NavItem[];
  title: string;
  subtitle: string;
  basePath: string;
}

export function Sidebar({ items, title, subtitle, basePath }: SidebarProps) {
  const [location] = useLocation();

  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen border-r border-sidebar-border hidden md:flex shrink-0">
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-tight text-white">{title}</h1>
            <p className="text-xs text-sidebar-foreground/60">{subtitle}</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
        {items.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href} className="block">
              <div
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md font-medium" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "" : "opacity-70"}`} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground/70 hover:text-white hover:bg-sidebar-accent">
            <LogOut className="w-5 h-5 mr-3 opacity-70" />
            Switch Role
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function Topbar({ title }: { title: string }) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        <h2 className="font-display font-semibold text-lg text-foreground hidden sm:block">{title}</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search patients, tokens..." 
            className="pl-9 pr-4 py-2 bg-muted/50 border-transparent rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background transition-all w-64"
          />
        </div>
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-card"></span>
        </Button>
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-foreground">Dr. Profile</p>
            <p className="text-xs text-muted-foreground">Admin Access</p>
          </div>
          <Avatar className="border-2 border-border shadow-sm h-9 w-9">
            <AvatarImage src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} />
            <AvatarFallback className="bg-primary/10 text-primary">DR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export function AppLayout({ children, role }: { children: React.ReactNode, role: "admin" | "doctor" | "reception" }) {
  const adminItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Patients", href: "/admin/patients", icon: Users },
    { label: "Appointments", href: "/admin/appointments", icon: Calendar },
    { label: "Doctors", href: "/admin/doctors", icon: Stethoscope },
    { label: "Live Queue", href: "/admin/queue", icon: MonitorPlay },
    { label: "Referrals", href: "/admin/referrals", icon: Activity },
  ];

  const doctorItems = [
    { label: "My Dashboard", href: "/doctor/dashboard", icon: LayoutDashboard },
    { label: "My Referrals", href: "/doctor/referrals", icon: Activity },
  ];

  const receptionItems = [
    { label: "Point of Sale", href: "/reception", icon: MonitorPlay },
    { label: "Appointments", href: "/admin/appointments", icon: Calendar },
  ];

  const getItems = () => {
    switch (role) {
      case "admin": return adminItems;
      case "doctor": return doctorItems;
      case "reception": return receptionItems;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar items={getItems()} title="Medigo" subtitle="Hospital System" basePath={`/${role}`} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {role !== 'doctor' && <Topbar title={role.charAt(0).toUpperCase() + role.slice(1) + " Portal"} />}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}

export function PatientLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const items = [
    { label: "Home", href: "/patient/home", icon: Home },
    { label: "Book", href: "/patient/book", icon: Calendar },
    { label: "Records", href: "/patient/records", icon: ClipboardList },
  ];

  return (
    <div className="flex justify-center bg-slate-900 min-h-screen items-center p-4">
      <div className="w-full max-w-md h-[844px] bg-background rounded-[40px] shadow-2xl overflow-hidden relative border-8 border-slate-800 flex flex-col">
        {/* Status Bar Mock */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-sm font-medium z-50 bg-background/80 backdrop-blur-md absolute top-0">
          <span>9:41</span>
          <div className="flex gap-2 items-center">
            <Activity className="w-4 h-4" />
          </div>
        </div>

        <main className="flex-1 overflow-y-auto pt-14 pb-24 custom-scrollbar bg-slate-50/50">
          {children}
        </main>

        <div className="absolute bottom-0 w-full h-24 bg-white/90 backdrop-blur-lg border-t border-slate-200/50 flex justify-around items-center px-6 pb-6 rounded-b-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          {items.map(item => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}>
                  <div className={`p-2 rounded-full transition-all ${isActive ? 'bg-primary/10' : ''}`}>
                    <item.icon className={`w-6 h-6 ${isActive ? 'fill-primary/20' : ''}`} />
                  </div>
                  <span className="text-[10px] font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
