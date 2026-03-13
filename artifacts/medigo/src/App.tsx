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

import PatientHome from "./pages/patient/home";
import PatientBook from "./pages/patient/book";
import PatientRecords from "./pages/patient/records";

import ReceptionPOS from "./pages/reception/pos";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 mins
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={RoleSelector} />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/patients" component={AdminPatients} />
      <Route path="/admin/appointments" component={AdminAppointments} />
      <Route path="/admin/doctors" component={AdminDoctors} />
      <Route path="/admin/referrals" component={AdminReferrals} />
      <Route path="/admin/queue" component={QueueDisplay} />
      
      {/* Doctor Routes */}
      <Route path="/doctor/dashboard" component={DoctorDashboard} />
      <Route path="/doctor/referrals" component={DoctorReferrals} />
      
      {/* Patient Routes */}
      <Route path="/patient/home" component={PatientHome} />
      <Route path="/patient/book" component={PatientBook} />
      <Route path="/patient/records" component={PatientRecords} />
      
      {/* Reception Route */}
      <Route path="/reception" component={ReceptionPOS} />
      
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
