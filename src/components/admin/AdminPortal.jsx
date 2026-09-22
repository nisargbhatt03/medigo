import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

import AdminDashboard from './screens/AdminDashboard';
import AdminPatients from './screens/AdminPatients';
import AdminAppointments from './screens/AdminAppointments';
import AdminDoctors from './screens/AdminDoctors';
import AdminStaff from './screens/AdminStaff';
import AdminDepartments from './screens/AdminDepartments';
import AdminBilling from './screens/AdminBilling';
import AdminInventory from './screens/AdminInventory';
import AdminReports from './screens/AdminReports';
import AdminSettings from './screens/AdminSettings';
import AdminLab from './screens/AdminLab';
import AdminPharmacy from './screens/AdminPharmacy';
import AdminTemplates from './screens/AdminTemplates';
import AdminNotifications from './screens/AdminNotifications';
import AdminRoles from './screens/AdminRoles';
import AdminAudit from './screens/AdminAudit';
import AdminBackup from './screens/AdminBackup';
import AdminIntegrations from './screens/AdminIntegrations';

export default function AdminPortal({ switchToSuperAdmin }) {
  const [activeAdminScreen, setActiveAdminScreen] = useState('admin-dashboard');

  const renderAdminScreen = () => {
    switch (activeAdminScreen) {
      case 'admin-dashboard': return <AdminDashboard />;
      case 'admin-patients': return <AdminPatients />;
      case 'admin-appointments': return <AdminAppointments />;
      case 'admin-doctors': return <AdminDoctors />;
      case 'admin-staff': return <AdminStaff />;
      case 'admin-departments': return <AdminDepartments />;
      case 'admin-billing': return <AdminBilling />;
      case 'admin-inventory': return <AdminInventory />;
      case 'admin-reports': return <AdminReports />;
      case 'admin-settings': return <AdminSettings />;
      case 'admin-lab': return <AdminLab />;
      case 'admin-pharmacy': return <AdminPharmacy />;
      case 'admin-templates': return <AdminTemplates />;
      case 'admin-notifications': return <AdminNotifications />;
      case 'admin-roles': return <AdminRoles />;
      case 'admin-audit': return <AdminAudit />;
      case 'admin-backup': return <AdminBackup />;
      case 'admin-integrations': return <AdminIntegrations />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans antialiased overflow-hidden">
      <AdminSidebar
        activeAdminScreen={activeAdminScreen}
        setActiveAdminScreen={setActiveAdminScreen}
        switchToSuperAdmin={switchToSuperAdmin}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminHeader
          activeAdminScreen={activeAdminScreen}
          setActiveAdminScreen={setActiveAdminScreen}
          switchToSuperAdmin={switchToSuperAdmin}
        />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderAdminScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}
