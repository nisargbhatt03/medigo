import React, { useState } from "react";
import { AppLayout } from "@/components/Layouts";
import { useListAppointments, useListDoctors, useCreatePatient, useCreateAppointment, getListAppointmentsQueryKey } from "@workspace/api-client-react";
import { Search, UserPlus, Phone, QrCode } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function ReceptionPOS() {
  const { data: doctors = [] } = useListDoctors();
  const { data: appointments = [], isLoading } = useListAppointments({ date: new Date().toISOString().split('T')[0] });
  const createPatient = useCreatePatient();
  const createAppointment = useCreateAppointment();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleWalkInRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      // 1. Create Patient
      const patient = await createPatient.mutateAsync({
        data: {
          name: formData.get("name") as string,
          age: parseInt(formData.get("age") as string, 10),
          gender: formData.get("gender") as string,
          phone: formData.get("phone") as string,
        }
      });

      // 2. Book Appointment
      await createAppointment.mutateAsync({
        data: {
          patientId: patient.id,
          doctorId: parseInt(formData.get("doctorId") as string, 10),
          date: new Date().toISOString().split('T')[0],
          timeSlot: "Walk-in"
        }
      });

      queryClient.invalidateQueries({ queryKey: getListAppointmentsQueryKey() });
      setOpen(false);
      toast({ title: "Walk-in Registration Complete" });
    } catch (err) {
      toast({ title: "Registration failed", variant: "destructive" });
    }
  };

  return (
    <AppLayout role="reception">
      <div className="flex h-full w-full bg-slate-100 overflow-hidden font-sans">
        
        {/* LEFT PANEL - Action Area */}
        <div className="w-[420px] bg-white border-r border-border flex flex-col shadow-sm z-10">
          <div className="p-6 border-b border-border bg-slate-50">
            <h2 className="text-lg font-bold font-display text-foreground mb-4">Add / Find Patient</h2>
            <div className="relative mb-6">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10 h-12 rounded-xl text-base bg-white shadow-sm border-border" placeholder="Search by name, phone, or ID..." />
            </div>

            <div className="space-y-3">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl text-base shadow-sm font-semibold">
                    <UserPlus className="w-5 h-5 mr-2" /> Walk-in Registration
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-display">Fast Walk-in Registration</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleWalkInRegistration} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label>Patient Name *</Label>
                      <Input name="name" required placeholder="Full Name" className="rounded-xl" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Age *</Label>
                        <Input name="age" type="number" required placeholder="Age" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label>Gender *</Label>
                        <select name="gender" required className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Phone *</Label>
                      <Input name="phone" required placeholder="Phone number" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Assign Doctor *</Label>
                      <select name="doctorId" required className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select Doctor...</option>
                        {doctors.map(d => <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>)}
                      </select>
                    </div>
                    <Button type="submit" disabled={createPatient.isPending || createAppointment.isPending} className="w-full rounded-xl mt-4 h-12 text-base">
                      {(createPatient.isPending || createAppointment.isPending) ? "Registering..." : "Complete & Add to Queue"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12 rounded-xl text-secondary border-secondary/30 hover:bg-secondary/5 font-semibold">
                  <QrCode className="w-5 h-5 mr-2" /> Scan QR
                </Button>
                <Button variant="outline" className="h-12 rounded-xl text-purple-600 border-purple-200 hover:bg-purple-50 font-semibold">
                  <Phone className="w-5 h-5 mr-2" /> AI Calls
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 bg-white custom-scrollbar">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Doctor Availability</h3>
            <div className="space-y-3">
              {doctors.map(doc => (
                <div key={doc.id} className="p-3 border rounded-xl flex items-center justify-between shadow-sm">
                  <div>
                    <p className="font-bold text-foreground text-sm">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">{doc.specialty} • Cabin {doc.cabinNumber}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className={`mb-1 ${doc.status === 'available' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                      {doc.status}
                    </Badge>
                    <p className="text-[10px] text-muted-foreground font-medium">{doc.waitingCount} waiting</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Queue Table */}
        <div className="flex-1 flex flex-col h-full bg-background z-0">
          <div className="p-6 border-b border-border flex justify-between items-center bg-card shrink-0">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Live Token Queue</h2>
              <p className="text-muted-foreground text-sm">Managing {appointments.length} patients today.</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-primary text-primary-foreground">All</Badge>
              <Badge variant="outline" className="px-3 py-1.5 text-sm">Waiting</Badge>
              <Badge variant="outline" className="px-3 py-1.5 text-sm">In Progress</Badge>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-6 custom-scrollbar">
            <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-medium">Token</th>
                    <th className="px-6 py-4 font-medium">Patient</th>
                    <th className="px-6 py-4 font-medium">Doctor</th>
                    <th className="px-6 py-4 font-medium">Time / Wait</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-border">
                  {isLoading ? (
                    <tr><td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">Loading queue...</td></tr>
                  ) : appointments.length === 0 ? (
                    <tr><td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">Queue is empty.</td></tr>
                  ) : (
                    appointments.map(apt => (
                      <tr key={apt.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-display font-bold text-lg text-primary">#{apt.tokenNumber}</span>
                        </td>
                        <td className="px-6 py-4 font-semibold text-foreground text-base">{apt.patientName}</td>
                        <td className="px-6 py-4 text-muted-foreground font-medium">{apt.doctorName}</td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-foreground">{apt.timeSlot}</p>
                          <p className="text-xs text-orange-600 font-semibold">{apt.waitTime || 'On time'}</p>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant="outline" className="capitalize px-3 py-1 text-xs">
                            {apt.status.replace('-', ' ')}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="outline" size="sm" className="rounded-lg shadow-sm">Manage</Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
