import React, { useState } from 'react';
import ReceptionSidebar from './ReceptionSidebar';
import ReceptionHeader from './ReceptionHeader';

import RecDashboard from './screens/RecDashboard';
import RecAppointments from './screens/RecAppointments';
import RecRegister from './screens/RecRegister';
import RecPatientSearch from './screens/RecPatientSearch';
import RecQueue from './screens/RecQueue';
import RecBilling from './screens/RecBilling';
import RecCheckin from './screens/RecCheckin';
import RecWalkin from './screens/RecWalkin';
import RecEnquiries from './screens/RecEnquiries';
import RecComms from './screens/RecComms';
import RecReports from './screens/RecReports';
import RecSettings from './screens/RecSettings';
import RecAvailability from './screens/RecAvailability';
import RecCalendar from './screens/RecCalendar';
import RecReschedule from './screens/RecReschedule';
import RecCancellations from './screens/RecCancellations';
import RecDocuments from './screens/RecDocuments';
import RecInsurance from './screens/RecInsurance';
import RecVisitors from './screens/RecVisitors';
import RecCampaigns from './screens/RecCampaigns';
import RecFeedback from './screens/RecFeedback';

export default function ReceptionPortal({ switchToSuperAdmin }) {
  const [activeRecScreen, setActiveRecScreen] = useState('rec-dashboard');

  const renderRecScreen = () => {
    switch (activeRecScreen) {
      case 'rec-dashboard': return <RecDashboard />;
      case 'rec-appointments': return <RecAppointments />;
      case 'rec-register': return <RecRegister />;
      case 'rec-patients': return <RecPatientSearch />;
      case 'rec-queue': return <RecQueue />;
      case 'rec-billing': return <RecBilling />;
      case 'rec-checkin': return <RecCheckin />;
      case 'rec-walkin': return <RecWalkin />;
      case 'rec-enquiries': return <RecEnquiries />;
      case 'rec-comms': return <RecComms />;
      case 'rec-reports': return <RecReports />;
      case 'rec-settings': return <RecSettings />;
      case 'rec-availability': return <RecAvailability />;
      case 'rec-calendar': return <RecCalendar />;
      case 'rec-reschedule': return <RecReschedule />;
      case 'rec-cancellations': return <RecCancellations />;
      case 'rec-documents': return <RecDocuments />;
      case 'rec-insurance': return <RecInsurance />;
      case 'rec-visitors': return <RecVisitors />;
      case 'rec-campaigns': return <RecCampaigns />;
      case 'rec-feedback': return <RecFeedback />;
      default: return <RecDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans antialiased overflow-hidden">
      <ReceptionSidebar
        activeRecScreen={activeRecScreen}
        setActiveRecScreen={setActiveRecScreen}
        switchToSuperAdmin={switchToSuperAdmin}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <ReceptionHeader
          activeRecScreen={activeRecScreen}
          setActiveRecScreen={setActiveRecScreen}
          switchToSuperAdmin={switchToSuperAdmin}
        />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderRecScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}
