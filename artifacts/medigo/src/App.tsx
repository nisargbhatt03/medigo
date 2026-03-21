import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import RoleSelector from "./pages/role-selector";
import AdminDashboard from "./pages/admin/dashboard";
import AdminPatients from "./pages/admin/patients";
import AdminAppointments from "./pages/admin/appointments";
import AdminDoctors from "./pages/admin/doctors";
import AdminReferrals from "./pages/admin/referrals";
import QueueDisplay from "./pages/admin/queue-display";

import DoctorDashboard from "./pages/doctor/dashboard";
import DoctorReferrals from "./pages/doctor/referrals";
import DoctorProfile from "./pages/doctor/profile";

import PatientHome from "./pages/patient/home";
import PatientBook from "./pages/patient/book";
import PatientRecords from "./pages/patient/records";
import PatientProfile from "./pages/patient/profile";
import PatientHospitals from "./pages/patient/hospitals";
import PatientMedicines from "./pages/patient/medicines";

import ReceptionPOS from "./pages/reception/pos";
import ReceptionAppointments from "./pages/reception/appointments";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={RoleSelector} />
      
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/patients" component={AdminPatients} />
      <Route path="/admin/appointments" component={AdminAppointments} />
      <Route path="/admin/doctors" component={AdminDoctors} />
      <Route path="/admin/referrals" component={AdminReferrals} />
      <Route path="/admin/queue" component={QueueDisplay} />
      
      <Route path="/doctor/dashboard" component={DoctorDashboard} />
      <Route path="/doctor/referrals" component={DoctorReferrals} />
      <Route path="/doctor/profile" component={DoctorProfile} />
      
      <Route path="/patient/home" component={PatientHome} />
      <Route path="/patient/book" component={PatientBook} />
      <Route path="/patient/records" component={PatientRecords} />
      <Route path="/patient/profile" component={PatientProfile} />
      <Route path="/patient/hospitals" component={PatientHospitals} />
      <Route path="/patient/medicines" component={PatientMedicines} />
      
      <Route path="/reception" component={ReceptionPOS} />
      <Route path="/reception/appointments" component={ReceptionAppointments} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
