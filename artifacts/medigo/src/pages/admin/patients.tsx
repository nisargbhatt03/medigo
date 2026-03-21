import React, { useState } from "react";
import { AppLayout } from "@/components/Layouts";
import { useListPatients, useCreatePatient, useListDoctors, getListPatientsQueryKey } from "@workspace/api-client-react";
import { Plus, Search, Send, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

type Patient = { id: number; name: string; age: number; gender: string; phone: string; bloodGroup?: string | null; registeredAt: string };

const URGENCY_COLORS: Record<string, string> = {
  low: "bg-slate-100 text-slate-700 border-slate-200",
  normal: "bg-blue-100 text-blue-700 border-blue-200",
  high: "bg-red-100 text-red-700 border-red-200",
};

function ReferralDialog({ patient, onClose }: { patient: Patient; onClose: () => void }) {
  const { data: doctors = [] } = useListDoctors();
  const { toast } = useToast();
  const [fromDoctorId, setFromDoctorId] = useState("");
  const [toDoctorId, setToDoctorId] = useState("");
  const [disease, setDisease] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [bookAppt, setBookAppt] = useState(false);
  const [apptDate, setApptDate] = useState(new Date().toISOString().slice(0, 10));
  const [loading, setLoading] = useState(false);

  const toDoctor = doctors.find(d => String(d.id) === toDoctorId);

  const handleSubmit = async () => {
    if (!fromDoctorId || !toDoctorId || !disease.trim()) return;
    setLoading(true);
    try {
      const r = await fetch(`${BASE}/api/referrals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId: patient.id,
          fromDoctorId: Number(fromDoctorId),
          toDoctorId: Number(toDoctorId),
          reason: disease.trim(),
          urgency,
        }),
      });
      if (!r.ok) throw new Error("Referral failed");

      if (bookAppt) {
        await fetch(`${BASE}/api/appointments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            patientId: patient.id,
            doctorId: Number(toDoctorId),
            date: apptDate,
            caseType: "new_case",
          }),
        });
        toast({ title: "Referral sent & appointment booked!", description: `${patient.name} → ${toDoctor?.name}` });
      } else {
        toast({ title: "Referral sent successfully", description: `${patient.name} referred to ${toDoctor?.name}` });
      }
      onClose();
    } catch {
      toast({ title: "Failed to send referral", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = fromDoctorId && toDoctorId && fromDoctorId !== toDoctorId && disease.trim();

  return (
    <div className="space-y-4 mt-2">
      {/* Patient info banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
          {patient.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">{patient.name}</p>
          <p className="text-xs text-muted-foreground">{patient.age} yrs · {patient.gender} · {patient.bloodGroup || "N/A"}</p>
        </div>
      </div>

      {/* From Doctor */}
      <div className="space-y-1.5">
        <Label>Referring Doctor (Current) *</Label>
        <select
          value={fromDoctorId}
          onChange={e => setFromDoctorId(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select referring doctor...</option>
          {doctors.map(d => (
            <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>
          ))}
        </select>
      </div>

      {/* To Doctor */}
      <div className="space-y-1.5">
        <Label>Refer To (Specialist) *</Label>
        <select
          value={toDoctorId}
          onChange={e => setToDoctorId(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select specialist...</option>
          {doctors
            .filter(d => String(d.id) !== fromDoctorId)
            .map(d => (
              <option key={d.id} value={d.id}>
                {d.name} — {d.specialty} (New: ₹{(d as any).newCaseFee ?? 1000})
              </option>
            ))}
        </select>
        {toDoctor && (
          <div className="flex items-center gap-2 mt-1.5 px-3 py-2 bg-teal-50 border border-teal-100 rounded-lg">
            <div className={`w-2 h-2 rounded-full ${
              toDoctor.status === "available" ? "bg-green-500" :
              toDoctor.status === "busy" ? "bg-blue-500" :
              toDoctor.status === "break" ? "bg-yellow-500" : "bg-slate-400"
            }`} />
            <span className="text-xs font-medium text-teal-700">{toDoctor.name}</span>
            <span className="text-xs text-teal-600">· {toDoctor.specialty}</span>
            <span className="text-xs text-teal-500 ml-auto capitalize">{toDoctor.status}</span>
          </div>
        )}
      </div>

      {/* Disease / Reason */}
      <div className="space-y-1.5">
        <Label>Disease / Diagnosis *</Label>
        <textarea
          value={disease}
          onChange={e => setDisease(e.target.value)}
          placeholder="e.g. Suspected cardiac arrhythmia, requires ECG and specialist consultation..."
          rows={3}
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      {/* Urgency */}
      <div className="space-y-1.5">
        <Label>Urgency Level</Label>
        <div className="flex gap-2">
          {["low", "normal", "high"].map(u => (
            <button
              key={u}
              onClick={() => setUrgency(u)}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold border-2 transition-all capitalize ${
                urgency === u
                  ? u === "high" ? "bg-red-500 border-red-500 text-white"
                    : u === "normal" ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-slate-500 border-slate-500 text-white"
                  : "bg-card border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              {u === "low" ? "Low" : u === "normal" ? "Normal" : "Urgent"}
            </button>
          ))}
        </div>
      </div>

      {/* Book Appointment toggle */}
      <div
        className={`rounded-xl border-2 p-4 cursor-pointer transition-all ${bookAppt ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}
        onClick={() => setBookAppt(b => !b)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CalendarCheck className={`w-5 h-5 ${bookAppt ? "text-primary" : "text-muted-foreground"}`} />
            <div>
              <p className={`text-sm font-semibold ${bookAppt ? "text-primary" : "text-foreground"}`}>Also book an appointment</p>
              <p className="text-xs text-muted-foreground">Directly schedule a slot with the specialist</p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bookAppt ? "bg-primary border-primary" : "border-border"}`}>
            {bookAppt && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
          </div>
        </div>

        {bookAppt && (
          <div className="mt-3 pt-3 border-t border-primary/20" onClick={e => e.stopPropagation()}>
            <Label className="text-xs mb-1.5 block">Appointment Date</Label>
            <input
              type="date"
              value={apptDate}
              min={new Date().toISOString().slice(0, 10)}
              onChange={e => setApptDate(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {toDoctor && (
              <p className="text-xs text-primary mt-2 font-medium">
                New case fee: ₹{((toDoctor as any).newCaseFee ?? 1000).toLocaleString()}
              </p>
            )}
          </div>
        )}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading || !canSubmit}
        className="w-full rounded-xl mt-1"
      >
        {loading ? "Sending..." : bookAppt ? "Send Referral & Book Appointment" : "Send Referral"}
      </Button>
    </div>
  );
}

export default function AdminPatients() {
  const [search, setSearch] = useState("");
  const { data: patients = [], isLoading } = useListPatients({ search });
  const createPatient = useCreatePatient();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [referPatient, setReferPatient] = useState<Patient | null>(null);

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    createPatient.mutate({
      data: {
        name: formData.get("name") as string,
        age: parseInt(formData.get("age") as string, 10),
        gender: formData.get("gender") as string,
        phone: formData.get("phone") as string,
        bloodGroup: formData.get("bloodGroup") as string || undefined,
        address: formData.get("address") as string || undefined,
      }
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getListPatientsQueryKey() });
        setOpen(false);
        toast({ title: "Patient registered successfully" });
      }
    });
  };

  return (
    <AppLayout role="admin">
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">Patients Directory</h1>
            <p className="text-muted-foreground mt-1">Manage, register, and refer hospital patients.</p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20">
                <Plus className="w-5 h-5 mr-2" /> Register Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-display">New Patient Registration</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreate} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Full Name *</Label>
                  <Input name="name" required placeholder="e.g. Ramesh Patel" className="rounded-xl" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Age *</Label>
                    <Input name="age" type="number" required placeholder="45" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender *</Label>
                    <select name="gender" required className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Phone *</Label>
                    <Input name="phone" required placeholder="+91 98765 43210" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Blood Group</Label>
                    <Input name="bloodGroup" placeholder="B+" className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input name="address" placeholder="City, State" className="rounded-xl" />
                </div>
                <Button type="submit" disabled={createPatient.isPending} className="w-full rounded-xl mt-4">
                  {createPatient.isPending ? "Registering..." : "Complete Registration"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b bg-muted/20 flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or phone..."
                className="pl-9 rounded-xl bg-background"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b">
                <tr>
                  <th className="px-6 py-4 font-medium">Patient Details</th>
                  <th className="px-6 py-4 font-medium">Age / Gender</th>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Registered</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y border-border">
                {isLoading ? (
                  <tr><td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">Loading patients...</td></tr>
                ) : patients.length === 0 ? (
                  <tr><td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">No patients found.</td></tr>
                ) : (
                  patients.map(patient => (
                    <tr key={patient.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                            {patient.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{patient.name}</p>
                            <p className="text-xs text-muted-foreground">#MG-{2840 + patient.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium">{patient.age} yrs</p>
                        <p className="text-xs text-muted-foreground">{patient.gender} · {patient.bloodGroup || "N/A"}</p>
                      </td>
                      <td className="px-6 py-4 font-medium">{patient.phone}</td>
                      <td className="px-6 py-4 text-muted-foreground">{new Date(patient.registeredAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setReferPatient(patient as Patient)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 text-xs font-semibold transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" /> Refer
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Referral Dialog */}
      <Dialog open={!!referPatient} onOpenChange={open => !open && setReferPatient(null)}>
        <DialogContent className="sm:max-w-lg rounded-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-display flex items-center gap-2">
              <Send className="w-5 h-5 text-teal-600" /> Refer Patient to Specialist
            </DialogTitle>
          </DialogHeader>
          {referPatient && (
            <ReferralDialog
              patient={referPatient}
              onClose={() => setReferPatient(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}
