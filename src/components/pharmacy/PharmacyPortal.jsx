import React, { useState } from 'react';
import PharmacySidebar from './PharmacySidebar';
import PharmacyHeader from './PharmacyHeader';

import PharmaDashboard from './screens/PharmaDashboard';
import PharmaInventory from './screens/PharmaInventory';
import PharmaMedicineDetails from './screens/PharmaMedicineDetails';
import PharmaPurchaseOrders from './screens/PharmaPurchaseOrders';
import PharmaSuppliers from './screens/PharmaSuppliers';
import PharmaSalesPOS from './screens/PharmaSalesPOS';
import PharmaPrescriptionQueue from './screens/PharmaPrescriptionQueue';
import PharmaRxDetails from './screens/PharmaRxDetails';
import PharmaStockAdjust from './screens/PharmaStockAdjust';
import PharmaExpiry from './screens/PharmaExpiry';
import PharmaReports from './screens/PharmaReports';
import PharmaSettings from './screens/PharmaSettings';

export default function PharmacyPortal({ switchToSuperAdmin }) {
  const [activePharmaScreen, setActivePharmaScreen] = useState('pharma-dashboard');

  const renderPharmaScreen = () => {
    switch (activePharmaScreen) {
      case 'pharma-dashboard': return <PharmaDashboard />;
      case 'pharma-inventory': return <PharmaInventory />;
      case 'pharma-medicine-details': return <PharmaMedicineDetails />;
      case 'pharma-purchase-orders': return <PharmaPurchaseOrders />;
      case 'pharma-suppliers': return <PharmaSuppliers />;
      case 'pharma-sales': return <PharmaSalesPOS />;
      case 'pharma-prescriptions': return <PharmaPrescriptionQueue />;
      case 'pharma-rx-details': return <PharmaRxDetails />;
      case 'pharma-stock-adjust': return <PharmaStockAdjust />;
      case 'pharma-expiry': return <PharmaExpiry />;
      case 'pharma-reports': return <PharmaReports />;
      case 'pharma-settings': return <PharmaSettings />;
      default: return <PharmaDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans antialiased overflow-hidden">
      <PharmacySidebar
        activePharmaScreen={activePharmaScreen}
        setActivePharmaScreen={setActivePharmaScreen}
        switchToSuperAdmin={switchToSuperAdmin}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <PharmacyHeader
          activePharmaScreen={activePharmaScreen}
          setActivePharmaScreen={setActivePharmaScreen}
          switchToSuperAdmin={switchToSuperAdmin}
        />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderPharmaScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}
