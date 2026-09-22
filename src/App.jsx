import React, { useState, useEffect, lazy, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import DashboardOverview from './components/screens/DashboardOverview';
import ClinicManagement from './components/screens/ClinicManagement';
import SubscriptionManagement from './components/screens/SubscriptionManagement';
import TenantManagement from './components/screens/TenantManagement';
import UserManagement from './components/screens/UserManagement';
import RevenueManagement from './components/screens/RevenueManagement';
import FeatureManagement from './components/screens/FeatureManagement';
import SupportCenter from './components/screens/SupportCenter';
import AuditLogs from './components/screens/AuditLogs';
import SystemSettings from './components/screens/SystemSettings';
import NotificationsCenter from './components/screens/NotificationsCenter';
import ReportsAnalytics from './components/screens/ReportsAnalytics';
import RolePermissions from './components/screens/RolePermissions';
import ApiIntegrations from './components/screens/ApiIntegrations';
import SecurityCenter from './components/screens/SecurityCenter';

// Lazy-load Clinic Admin, Reception, Doctor, Pharmacy, and Patient Portals into separate JS/CSS chunks for permission-based loading
const AdminPortal = lazy(() => import('./components/admin/AdminPortal'));
const ReceptionPortal = lazy(() => import('./components/reception/ReceptionPortal'));
const DoctorPortal = lazy(() => import('./components/doctor/DoctorPortal'));
const PharmacyPortal = lazy(() => import('./components/pharmacy/PharmacyPortal'));
const PatientPortal = lazy(() => import('./components/patient/PatientPortal'));

export default function App() {
  const [portalMode, setPortalMode] = useState(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path.includes('/patient') || hash.includes('patient')) return 'patient';
    if (path.includes('/pharmacy') || hash.includes('pharmacy')) return 'pharmacy';
    if (path.includes('/doctor') || hash.includes('doctor')) return 'doctor';
    if (path.includes('/reception') || hash.includes('reception')) return 'reception';
    if (path.includes('/admin') || hash.includes('admin')) return 'admin';
    return 'superadmin';
  });

  const [activeScreen, setActiveScreen] = useState('dashboard');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes('/patient') || hash.includes('patient')) {
        setPortalMode('patient');
      } else if (path.includes('/pharmacy') || hash.includes('pharmacy')) {
        setPortalMode('pharmacy');
      } else if (path.includes('/doctor') || hash.includes('doctor')) {
        setPortalMode('doctor');
      } else if (path.includes('/reception') || hash.includes('reception')) {
        setPortalMode('reception');
      } else if (path.includes('/admin') || hash.includes('admin')) {
        setPortalMode('admin');
      } else {
        setPortalMode('superadmin');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const switchPortal = (mode) => {
    setPortalMode(mode);
    const pathMap = {
      superadmin: '/',
      admin: '/admin',
      reception: '/reception',
      doctor: '/doctor',
      pharmacy: '/pharmacy',
      patient: '/patient'
    };
    window.history.pushState({}, '', pathMap[mode]);
  };

  const LoadingFallback = ({ name }) => (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-900 text-white font-sans text-sm">
      <div className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-xl border border-slate-700 shadow-xl">
        <div className="w-5 h-5 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
        <span>Loading {name} Module (Lazy-loading separate bundle)...</span>
      </div>
    </div>
  );

  if (portalMode === 'patient') {
    return (
      <Suspense fallback={<LoadingFallback name="Patient Portal (/patient)" />}>
        <PatientPortal switchToSuperAdmin={() => switchPortal('superadmin')} />
      </Suspense>
    );
  }

  if (portalMode === 'admin') {
    return (
      <Suspense fallback={<LoadingFallback name="Clinic Admin Portal (/admin)" />}>
        <AdminPortal switchToSuperAdmin={() => switchPortal('superadmin')} />
      </Suspense>
    );
  }

  if (portalMode === 'reception') {
    return (
      <Suspense fallback={<LoadingFallback name="Reception Desk Portal (/reception)" />}>
        <ReceptionPortal switchToSuperAdmin={() => switchPortal('superadmin')} />
      </Suspense>
    );
  }

  if (portalMode === 'doctor') {
    return (
      <Suspense fallback={<LoadingFallback name="Doctor View Portal (/doctor)" />}>
        <DoctorPortal switchToSuperAdmin={() => switchPortal('superadmin')} />
      </Suspense>
    );
  }

  if (portalMode === 'pharmacy') {
    return (
      <Suspense fallback={<LoadingFallback name="Pharmacy Module Portal (/pharmacy)" />}>
        <PharmacyPortal switchToSuperAdmin={() => switchPortal('superadmin')} />
      </Suspense>
    );
  }

  const renderSuperAdminScreen = () => {
    switch (activeScreen) {
      case 'dashboard': return <DashboardOverview />;
      case 'clinics': return <ClinicManagement />;
      case 'subscriptions': return <SubscriptionManagement />;
      case 'tenants': return <TenantManagement />;
      case 'users': return <UserManagement />;
      case 'revenue': return <RevenueManagement />;
      case 'features': return <FeatureManagement />;
      case 'support': return <SupportCenter />;
      case 'audit-logs': return <AuditLogs />;
      case 'settings': return <SystemSettings />;
      case 'notifications': return <NotificationsCenter />;
      case 'reports': return <ReportsAnalytics />;
      case 'roles': return <RolePermissions />;
      case 'integrations': return <ApiIntegrations />;
      case 'security': return <SecurityCenter />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans antialiased overflow-hidden">
      <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">

        <Header activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderSuperAdminScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}
