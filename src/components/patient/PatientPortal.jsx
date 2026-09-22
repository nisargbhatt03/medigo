import React, { useState } from 'react';
import PatientSidebar from './PatientSidebar';
import PatientHeader from './PatientHeader';

import PatientDashboard from './screens/PatientDashboard';
import PatientAppointments from './screens/PatientAppointments';
import PatientRecords from './screens/PatientRecords';
import PatientPrescriptions from './screens/PatientPrescriptions';
import PatientLabReports from './screens/PatientLabReports';
import PatientInvoices from './screens/PatientInvoices';
import PatientOrderMedicines from './screens/PatientOrderMedicines';
import PatientFamilyMembers from './screens/PatientFamilyMembers';
import PatientInsurance from './screens/PatientInsurance';
import PatientMessages from './screens/PatientMessages';
import PatientHealthPackages from './screens/PatientHealthPackages';
import PatientTracker from './screens/PatientTracker';
import PatientEmergencySupport from './screens/PatientEmergencySupport';
import PatientOtherFeatures from './screens/PatientOtherFeatures';
import PatientProfileSettings from './screens/PatientProfileSettings';
import PatientTelemedicine from './screens/PatientTelemedicine';

export default function PatientPortal({ switchToSuperAdmin }) {
  const [activePatientScreen, setActivePatientScreen] = useState('patient-dashboard');

  const renderPatientScreen = () => {
    switch (activePatientScreen) {
      case 'patient-dashboard': 
        return <PatientDashboard setActivePatientScreen={setActivePatientScreen} />;
      case 'patient-appointments': 
        return <PatientAppointments />;
      case 'patient-telemedicine': 
        return <PatientTelemedicine />;
      case 'patient-records': 
        return <PatientRecords />;
      case 'patient-prescriptions': 
        return <PatientPrescriptions setActivePatientScreen={setActivePatientScreen} />;
      case 'patient-lab-reports': 
        return <PatientLabReports />;
      case 'patient-invoices': 
        return <PatientInvoices />;
      case 'patient-medicines': 
        return <PatientOrderMedicines />;
      case 'patient-family': 
        return <PatientFamilyMembers />;
      case 'patient-insurance': 
        return <PatientInsurance />;
      case 'patient-messages': 
        return <PatientMessages />;
      case 'patient-health-packages': 
        return <PatientHealthPackages />;
      case 'patient-reminders': 
      case 'patient-tracker': 
        return <PatientTracker />;
      case 'patient-emergency': 
        return <PatientEmergencySupport />;
      case 'patient-rewards': 
      case 'patient-consent': 
      case 'patient-activity': 
        return <PatientOtherFeatures />;
      case 'patient-settings': 
        return <PatientProfileSettings />;
      default: 
        return <PatientDashboard setActivePatientScreen={setActivePatientScreen} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans antialiased overflow-hidden">
      <PatientSidebar 
        activePatientScreen={activePatientScreen} 
        setActivePatientScreen={setActivePatientScreen} 
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <PatientHeader 
          activePatientScreen={activePatientScreen} 
          setActivePatientScreen={setActivePatientScreen} 
        />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderPatientScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}
