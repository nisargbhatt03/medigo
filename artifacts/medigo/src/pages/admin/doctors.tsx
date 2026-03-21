import React, { useState } from "react";
import { AppLayout } from "@/components/Layouts";
import { useListDoctors, getListDoctorsQueryKey } from "@workspace/api-client-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Stethoscope, User, Clock, Plus, Pencil, Trash2, IndianRupee, AlertTriangle } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

type DoctorForm = {
  name: string;
  specialty: string;
  qualification: string;
  cabinNumber: string;
  newCaseFee: string;
  oldCaseFee: string;
  status: string;
};

const EMPTY_FORM: DoctorForm = {
  name: "",
  specialty: "",
  qualification: "",
  cabinNumber: "",
  newCaseFee: "1000",
  oldCaseFee: "400",
  status: "available",
};

const STATUS_COLORS: Record<string, string> = {
  available: "bg-green-500",
  busy: "bg-blue-500",
  break: "bg-yellow-500",
  offline: "bg-slate-400",
};

const STATUS_LABELS: Record<string, string> = {
  available: "Available",
  busy: "Busy",
  break: "On Break",
  offline: "Offline",
};

export default function AdminDoctors() {
  const { data: doctors = [], isLoading } = useListDoctors();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [addOpen, setAddOpen] = useState(false);
  const [editDoc, setEditDoc] = useState<(typeof doctors[0] & { id: number }) | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [form, setForm] = useState<DoctorForm>(EMPTY_FORM);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const setField = (k: keyof DoctorForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const createDoctor = useMutation({
    mutationFn: async (data: DoctorForm) => {
      const r = await fetch(`${BASE}/api/doctors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, newCaseFee: Number(data.newCaseFee), oldCaseFee: Number(data.oldCaseFee) }),
      });
      if (!r.ok) throw new Error("Failed to create doctor");
      return r.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getListDoctorsQueryKey() });
      setAddOpen(false);
      setForm(EMPTY_FORM);
      toast({ title: "Doctor added successfully" });
    },
  });

  const updateDoctor = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: DoctorForm }) => {
      const r = await fetch(`${BASE}/api/doctors/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, newCaseFee: Number(data.newCaseFee), oldCaseFee: Number(data.oldCaseFee) }),
      });
      if (!r.ok) throw new Error("Failed to update doctor");
      return r.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getListDoctorsQueryKey() });
      setEditDoc(null);
      toast({ title: "Doctor updated successfully" });
    },
  });

  const deleteDoctor = useMutation({
    mutationFn: async (id: number) => {
      const r = await fetch(`${BASE}/api/doctors/${id}`, { method: "DELETE" });
      if (!r.ok) throw new Error("Failed to delete doctor");
      return r.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getListDoctorsQueryKey() });
      setDeleteId(null);
      toast({ title: "Doctor removed" });
    },
  });

  const openEdit = (doc: typeof doctors[0]) => {
    setForm({
      name: doc.name,
      specialty: doc.specialty,
      qualification: doc.qualification,
      cabinNumber: doc.cabinNumber,
      newCaseFee: String((doc as any).newCaseFee ?? 1000),
      oldCaseFee: String((doc as any).oldCaseFee ?? 400),
      status: doc.status,
    });
    setEditDoc(doc as any);
  };

  const DoctorForm = ({ onSubmit, loading }: { onSubmit: () => void; loading: boolean }) => (
    <div className="space-y-4 mt-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 space-y-1.5">
          <Label>Full Name *</Label>
          <Input value={form.name} onChange={setField("name")} placeholder="Dr. Ramesh Sharma" className="rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <Label>Specialty *</Label>
          <select value={form.specialty} onChange={setField("specialty")} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Select...</option>
            {["General Physician","Cardiology","Orthopedics","Dermatology","Neurology","Gynecology","Pediatrics","ENT","Ophthalmology","Psychiatry"].map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label>Qualification *</Label>
          <Input value={form.qualification} onChange={setField("qualification")} placeholder="MBBS, MD" className="rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <Label>Cabin Number *</Label>
          <Input value={form.cabinNumber} onChange={setField("cabinNumber")} placeholder="Cabin 5" className="rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <Label>Status</Label>
          <select value={form.status} onChange={setField("status")} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="break">On Break</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Consultation Fees</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="flex items-center gap-1.5 text-blue-700"><IndianRupee className="w-3.5 h-3.5" />New Case Fee</Label>
            <Input type="number" value={form.newCaseFee} onChange={setField("newCaseFee")} placeholder="1000" className="rounded-xl" />
          </div>
          <div className="space-y-1.5">
            <Label className="flex items-center gap-1.5 text-teal-700"><IndianRupee className="w-3.5 h-3.5" />Old Case Fee</Label>
            <Input type="number" value={form.oldCaseFee} onChange={setField("oldCaseFee")} placeholder="400" className="rounded-xl" />
          </div>
        </div>
      </div>

      <Button
        onClick={onSubmit}
        disabled={loading || !form.name || !form.specialty || !form.qualification || !form.cabinNumber}
        className="w-full rounded-xl mt-2"
      >
        {loading ? "Saving..." : "Save Doctor"}
      </Button>
    </div>
  );

  return (
    <AppLayout role="admin">
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">Medical Staff</h1>
            <p className="text-muted-foreground mt-1">Manage hospital doctors and their availability.</p>
          </div>
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20" onClick={() => setForm(EMPTY_FORM)}>
                <Plus className="w-5 h-5 mr-2" /> Add Doctor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-display">Add New Doctor</DialogTitle>
              </DialogHeader>
              <DoctorForm onSubmit={() => createDoctor.mutate(form)} loading={createDoctor.isPending} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats row — clickable filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Doctors", value: doctors.length, filter: null, color: "text-blue-600", activeBg: "bg-blue-600", activeRing: "ring-blue-300", dot: "bg-blue-500" },
            { label: "Available", value: doctors.filter(d => d.status === "available").length, filter: "available", color: "text-green-600", activeBg: "bg-green-600", activeRing: "ring-green-300", dot: "bg-green-500" },
            { label: "Busy", value: doctors.filter(d => d.status === "busy").length, filter: "busy", color: "text-blue-600", activeBg: "bg-blue-700", activeRing: "ring-blue-300", dot: "bg-blue-500" },
            { label: "On Break", value: doctors.filter(d => d.status === "break").length, filter: "break", color: "text-yellow-600", activeBg: "bg-yellow-500", activeRing: "ring-yellow-300", dot: "bg-yellow-500" },
          ].map(s => {
            const isActive = s.filter !== null && statusFilter === s.filter;
            return (
              <button
                key={s.label}
                onClick={() => setStatusFilter(isActive ? null : s.filter)}
                className={`text-left rounded-xl p-4 border-2 shadow-sm transition-all cursor-pointer focus:outline-none ${
                  isActive
                    ? `${s.activeBg} border-transparent ring-2 ${s.activeRing} shadow-lg`
                    : "bg-card border-border hover:border-primary/40 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className={`text-xs font-semibold ${isActive ? "text-white/80" : "text-muted-foreground"}`}>{s.label}</p>
                  {s.filter && <span className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-white/60" : s.dot}`}></span>}
                </div>
                <p className={`text-2xl font-display font-bold ${isActive ? "text-white" : s.color}`}>{s.value}</p>
                {isActive && <p className="text-[10px] text-white/70 mt-1 font-medium">Click to clear filter</p>}
                {!s.filter && statusFilter && <p className="text-[10px] text-primary mt-1 font-semibold">Show all</p>}
              </button>
            );
          })}
        </div>

        {/* Active filter banner */}
        {statusFilter && (
          <div className="flex items-center justify-between mb-5 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
            <p className="text-sm font-medium text-primary">
              Showing <span className="font-bold capitalize">{STATUS_LABELS[statusFilter]}</span> doctors
              {" "}({doctors.filter(d => d.status === statusFilter).length} of {doctors.length})
            </p>
            <button
              onClick={() => setStatusFilter(null)}
              className="text-xs text-primary font-bold underline underline-offset-2 hover:text-primary/70 transition-colors"
            >
              Clear Filter
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : doctors.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <Stethoscope className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="font-medium">No doctors yet. Add your first doctor.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {(statusFilter ? doctors.filter(d => d.status === statusFilter) : doctors).map(doctor => (
              <div key={doctor.id} className="bg-card rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all group relative">
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openEdit(doctor)}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                    title="Edit Doctor"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeleteId(doctor.id)}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-destructive flex items-center justify-center transition-colors"
                    title="Remove Doctor"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="relative">
                    <Avatar className="h-16 w-16 border-2 border-border shadow-sm">
                      <AvatarImage src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} />
                      <AvatarFallback className="bg-primary/10 text-primary font-display font-bold text-lg">
                        {doctor.name.split(" ").pop()?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-card ${STATUS_COLORS[doctor.status] ?? "bg-slate-400"}`}></div>
                  </div>
                  <div className="flex-1 min-w-0 pr-14">
                    <h3 className="font-bold text-base text-foreground truncate">{doctor.name}</h3>
                    <p className="text-sm text-secondary font-medium">{doctor.specialty}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {STATUS_LABELS[doctor.status] ?? doctor.status}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <InfoRow icon={<User className="w-4 h-4" />} label={doctor.qualification} />
                  <InfoRow icon={<Stethoscope className="w-4 h-4" />} label={doctor.cabinNumber} />
                  <InfoRow icon={<Clock className="w-4 h-4" />} label={`${(doctor as any).waitingCount ?? 0} waiting • ${(doctor as any).patientsToday ?? 0} today`} />
                </div>

                <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-center">
                    <p className="text-xs text-blue-500 font-medium">New Case</p>
                    <p className="font-display font-bold text-blue-700 text-base mt-0.5">₹{(doctor as any).newCaseFee?.toLocaleString() ?? 1000}</p>
                  </div>
                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 text-center">
                    <p className="text-xs text-teal-500 font-medium">Old Case</p>
                    <p className="font-display font-bold text-teal-700 text-base mt-0.5">₹{(doctor as any).oldCaseFee?.toLocaleString() ?? 400}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={!!editDoc} onOpenChange={open => !open && setEditDoc(null)}>
        <DialogContent className="sm:max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-display">Edit Doctor</DialogTitle>
          </DialogHeader>
          <DoctorForm
            onSubmit={() => editDoc && updateDoctor.mutate({ id: editDoc.id, data: form })}
            loading={updateDoctor.isPending}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirm Dialog */}
      <Dialog open={deleteId !== null} onOpenChange={open => !open && setDeleteId(null)}>
        <DialogContent className="sm:max-w-sm rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-display flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" /> Remove Doctor
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground mt-2">
            Are you sure you want to remove this doctor? This action cannot be undone and will also remove all their appointment history.
          </p>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button
              variant="destructive"
              className="flex-1 rounded-xl"
              disabled={deleteDoctor.isPending}
              onClick={() => deleteId && deleteDoctor.mutate(deleteId)}
            >
              {deleteDoctor.isPending ? "Removing..." : "Yes, Remove"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
      <span className="opacity-60 shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}
