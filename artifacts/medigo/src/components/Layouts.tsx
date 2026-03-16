import React from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, Users, Calendar, Stethoscope, 
  MonitorPlay, LogOut, Activity,
  ClipboardList, Search, Bell, Menu, Home,
  Pill, MapPin, User, X, UserCog
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
  onClose?: () => void;
}

export function Sidebar({ items, title, subtitle, onClose }: SidebarProps) {
  const [location] = useLocation();

  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-full border-r border-sidebar-border shrink-0">
      <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group" onClick={onClose}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-tight text-white">{title}</h1>
            <p className="text-xs text-sidebar-foreground/60">{subtitle}</p>
          </div>
        </Link>
        {onClose && (
          <button onClick={onClose} className="md:hidden text-sidebar-foreground/60 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
        {items.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href} className="block" onClick={onClose}>
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
        <Link href="/" onClick={onClose}>
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground/70 hover:text-white hover:bg-sidebar-accent">
            <LogOut className="w-5 h-5 mr-3 opacity-70" />
            Switch Role
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function Topbar({ title, onMenuClick }: { title: string; onMenuClick?: () => void }) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 md:px-6 sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="w-5 h-5" />
        </Button>
        <h2 className="font-display font-semibold text-base md:text-lg text-foreground">{title}</h2>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
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
        <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-foreground">Admin</p>
            <p className="text-xs text-muted-foreground">Portal</p>
          </div>
          <Avatar className="border-2 border-border shadow-sm h-8 w-8 md:h-9 md:w-9">
            <AvatarImage src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} />
            <AvatarFallback className="bg-primary/10 text-primary text-sm">DR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export function AppLayout({ children, role }: { children: React.ReactNode, role: "admin" | "doctor" | "reception" }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [location] = useLocation();

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
    { label: "My Profile", href: "/doctor/profile", icon: UserCog },
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

  const items = getItems();

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex h-screen">
        <Sidebar items={items} title="Medigo" subtitle="Hospital System" basePath={`/${role}`} />
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 shadow-2xl">
            <Sidebar items={items} title="Medigo" subtitle="Hospital System" basePath={`/${role}`} onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {role !== "doctor" && <Topbar title={role.charAt(0).toUpperCase() + role.slice(1) + " Portal"} onMenuClick={() => setMobileOpen(true)} />}
        {role === "doctor" && (
          <div className="md:hidden h-14 bg-sidebar flex items-center px-4 gap-3 shrink-0">
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <span className="text-white font-semibold">Doctor Portal</span>
          </div>
        )}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </main>

        {/* Mobile bottom nav for admin/doctor/reception */}
        <nav className="md:hidden border-t border-border bg-card flex shrink-0">
          {items.slice(0, 5).map(item => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href} className="flex-1">
                <div className={`flex flex-col items-center py-2 px-1 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  <item.icon className={`w-5 h-5 ${isActive ? "" : "opacity-60"}`} />
                  <span className="text-[9px] mt-0.5 font-medium truncate w-full text-center">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
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
    { label: "Hospitals", href: "/patient/hospitals", icon: MapPin },
    { label: "Profile", href: "/patient/profile", icon: User },
  ];

  return (
    <>
      {/* Desktop: Phone frame wrapper */}
      <div className="hidden md:flex justify-center bg-slate-900 min-h-screen items-center p-4">
        <div className="w-full max-w-md h-[844px] bg-background rounded-[40px] shadow-2xl overflow-hidden relative border-8 border-slate-800 flex flex-col">
          {/* Status Bar Mock */}
          <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-sm font-medium z-50 bg-background/80 backdrop-blur-md absolute top-0">
            <span>9:41</span>
            <div className="flex gap-2 items-center">
              <Activity className="w-4 h-4" />
            </div>
          </div>

          <main className="flex-1 overflow-y-auto pt-14 pb-20 custom-scrollbar bg-slate-50/50">
            {children}
          </main>

          <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-lg border-t border-slate-200/50 flex justify-around items-center px-2 pb-4 pt-2 rounded-b-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            {items.map(item => {
              const isActive = location === item.href || (item.href === "/patient/medicines" && location === "/patient/medicines");
              return (
                <Link key={item.href} href={item.href}>
                  <div className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors px-2 py-1 ${isActive ? "text-primary" : "text-slate-400"}`}>
                    <div className={`p-1.5 rounded-full ${isActive ? "bg-primary/10" : ""}`}>
                      <item.icon className={`w-5 h-5 ${isActive ? "fill-primary/20" : ""}`} />
                    </div>
                    <span className="text-[9px] font-medium">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Full-screen app */}
      <div className="md:hidden flex flex-col min-h-screen bg-slate-50">
        <main className="flex-1 overflow-y-auto pb-20">
          {children}
        </main>
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200/50 flex justify-around items-center px-2 pb-safe pt-2 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50">
          {items.map(item => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors px-3 py-1 ${isActive ? "text-primary" : "text-slate-400"}`}>
                  <div className={`p-1.5 rounded-full ${isActive ? "bg-primary/10" : ""}`}>
                    <item.icon className={`w-5 h-5 ${isActive ? "fill-primary/20" : ""}`} />
                  </div>
                  <span className="text-[9px] font-medium">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

