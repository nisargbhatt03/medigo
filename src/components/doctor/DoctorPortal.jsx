import React, { useState } from 'react';
import DoctorSidebar from './DoctorSidebar';
import DoctorHeader from './DoctorHeader';

import DocDashboard from './screens/DocDashboard';
import DocAppointments from './screens/DocAppointments';
import DocQueue from './screens/DocQueue';
import DocConsultation from './screens/DocConsultation';
import DocPrescriptions from './screens/DocPrescriptions';
import DocLab from './screens/DocLab';
import DocRadiology from './screens/DocRadiology';
import DocHistory from './screens/DocHistory';
import DocFollowups from './screens/DocFollowups';
import DocCertificates from './screens/DocCertificates';
import DocMessages from './screens/DocMessages';
import DocTemplates from './screens/DocTemplates';
import DocICD from './screens/DocICD';
import DocReferrals from './screens/DocReferrals';
import DocTelemedicine from './screens/DocTelemedicine';
import DocSchedule from './screens/DocSchedule';
import DocLeaves from './screens/DocLeaves';
import DocReports from './screens/DocReports';
import DocFavPrescriptions from './screens/DocFavPrescriptions';
import DocClinicalTemplates from './screens/DocClinicalTemplates';
import DocPatientMessages from './screens/DocPatientMessages';
import DocDocuments from './screens/DocDocuments';
import DocReminders from './screens/DocReminders';
import DocSettings from './screens/DocSettings';

export default function DoctorPortal({ switchToSuperAdmin }) {
  const [activeDocScreen, setActiveDocScreen] = useState('doc-dashboard');

  const renderDocScreen = () => {
    switch (activeDocScreen) {
      case 'doc-dashboard': return <DocDashboard />;
      case 'doc-appointments': return <DocAppointments />;
      case 'doc-queue': return <DocQueue />;
      case 'doc-consultation': return <DocConsultation />;
      case 'doc-prescriptions': return <DocPrescriptions />;
      case 'doc-lab': return <DocLab />;
      case 'doc-radiology': return <DocRadiology />;
      case 'doc-history': return <DocHistory />;
      case 'doc-followups': return <DocFollowups />;
      case 'doc-certificates': return <DocCertificates />;
      case 'doc-messages': return <DocMessages />;
      case 'doc-templates': return <DocTemplates />;
      case 'doc-icd': return <DocICD />;
      case 'doc-referrals': return <DocReferrals />;
      case 'doc-telemedicine': return <DocTelemedicine />;
      case 'doc-schedule': return <DocSchedule />;
      case 'doc-leaves': return <DocLeaves />;
      case 'doc-reports': return <DocReports />;
      case 'doc-fav-prescriptions': return <DocFavPrescriptions />;
      case 'doc-clinical-templates': return <DocClinicalTemplates />;
      case 'doc-patient-messages': return <DocPatientMessages />;
      case 'doc-documents': return <DocDocuments />;
      case 'doc-reminders': return <DocReminders />;
      case 'doc-settings': return <DocSettings />;
      default: return <DocDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans antialiased overflow-hidden">
      <DoctorSidebar
        activeDocScreen={activeDocScreen}
        setActiveDocScreen={setActiveDocScreen}
        switchToSuperAdmin={switchToSuperAdmin}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <DoctorHeader
          activeDocScreen={activeDocScreen}
          setActiveDocScreen={setActiveDocScreen}
          switchToSuperAdmin={switchToSuperAdmin}
        />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderDocScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}
