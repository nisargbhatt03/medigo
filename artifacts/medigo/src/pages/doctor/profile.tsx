import React, { useState, useEffect } from "react";
import { AppLayout } from "@/components/Layouts";
import { useGetDoctor, getListDoctorsQueryKey } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { 
  User, Stethoscope, IndianRupee, Save, CheckCircle2,
  Building2, GraduationCap, Activity
} from "lucide-react";

const DOCTOR_ID = 1;
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const STATUS_OPTIONS = [
  { value: "available", label: "Available", color: "bg-green-500", textColor: "text-green-700", bg: "bg-green-50 border-green-200" },
  { value: "busy", label: "In Consultation", color: "bg-blue-500", textColor: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  { value: "break", label: "On Break", color: "bg-yellow-500", textColor: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200" },
  { value: "offline", label: "Offline", color: "bg-slate-400", textColor: "text-slate-700", bg: "bg-slate-50 border-slate-200" },
];

export default function DoctorProfile() {
  const { data: doctor, isLoading } = useGetDoctor(DOCTOR_ID);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    specialty: "",
    qualification: "",
    cabinNumber: "",
    newCaseFee: "",
    oldCaseFee: "",
    status: "available",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (doctor) {
      setForm({
        name: doctor.name ?? "",
        specialty: doctor.specialty ?? "",
        qualification: doctor.qualification ?? "",
        cabinNumber: doctor.cabinNumber ?? "",
        newCaseFee: String((doctor as any).newCaseFee ?? 1000),
        oldCaseFee: String((doctor as any).oldCaseFee ?? 400),
        status: doctor.status ?? "available",
      });
    }
  }, [doctor]);

  const update = useMutation({
    mutationFn: async () => {
      const r = await fetch(`${BASE}/api/doctors/${DOCTOR_ID}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          newCaseFee: Number(form.newCaseFee),
          oldCaseFee: Number(form.oldCaseFee),
        }),
      });
      if (!r.ok) throw new Error("Update failed");
      return r.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getListDoctorsQueryKey() });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      toast({ title: "Profile updated successfully" });
    },
    onError: () => toast({ title: "Update failed", variant: "destructive" }),
  });

  const setStatus = async (status: string) => {
    setForm(f => ({ ...f, status }));
    await fetch(`${BASE}/api/doctors/${DOCTOR_ID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    queryClient.invalidateQueries({ queryKey: getListDoctorsQueryKey() });
    toast({ title: `Status set to ${STATUS_OPTIONS.find(s => s.value === status)?.label}` });
  };

  if (isLoading) {
    return (
      <AppLayout role="doctor">
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      </AppLayout>
    );
  }

  const currentStatus = STATUS_OPTIONS.find(s => s.value === form.status) ?? STATUS_OPTIONS[0];

  return (
    <AppLayout role="doctor">
      <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">My Profile</h1>
            <p className="text-muted-foreground mt-1 text-sm">Update your professional details and availability.</p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-card rounded-2xl border shadow-sm p-6 flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-20 w-20 border-3 border-border shadow-md">
              <AvatarImage src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} />
              <AvatarFallback className="bg-primary/10 text-primary font-display font-bold text-2xl">
                {form.name.split(" ").pop()?.charAt(0) ?? "D"}
              </AvatarFallback>
            </Avatar>
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-card ${currentStatus.color}`}></div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-display font-bold text-foreground">{form.name || "Your Name"}</h2>
            <p className="text-secondary font-medium text-sm">{form.specialty || "Specialty"}</p>
            <p className="text-muted-foreground text-xs mt-0.5">{form.qualification || "Qualification"} · {form.cabinNumber || "Cabin"}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${currentStatus.bg} ${currentStatus.textColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.color}`}></span>
                {currentStatus.label}
              </span>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-2">
              <p className="text-xs text-blue-500 font-medium">New Case</p>
              <p className="font-bold text-blue-700">₹{Number(form.newCaseFee).toLocaleString()}</p>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
              <p className="text-xs text-teal-500 font-medium">Old Case</p>
              <p className="font-bold text-teal-700">₹{Number(form.oldCaseFee).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Quick Status Toggle */}
        <div className="bg-card rounded-2xl border shadow-sm p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4" /> Quick Status
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATUS_OPTIONS.map(s => (
              <button
                key={s.value}
                onClick={() => setStatus(s.value)}
                className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${form.status === s.value ? `${s.bg} border-current ${s.textColor}` : "border-border hover:border-primary/30 text-muted-foreground"}`}
              >
                <span className={`w-3 h-3 rounded-full mb-1.5 ${s.color}`}></span>
                <span className="text-xs font-semibold">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-card rounded-2xl border shadow-sm p-6 space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
            <User className="w-4 h-4" /> Professional Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="col-span-1 sm:col-span-2 space-y-1.5">
              <Label className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-primary" /> Full Name</Label>
              <Input
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Dr. Dhruv Shah"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="flex items-center gap-1.5"><Stethoscope className="w-3.5 h-3.5 text-secondary" /> Specialty</Label>
              <select
                value={form.specialty}
                onChange={e => setForm(f => ({ ...f, specialty: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {["General Physician","Cardiology","Orthopedics","Dermatology","Neurology","Gynecology","Pediatrics","ENT","Ophthalmology","Psychiatry"].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label className="flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5 text-blue-600" /> Qualification</Label>
              <Input
                value={form.qualification}
                onChange={e => setForm(f => ({ ...f, qualification: e.target.value }))}
                placeholder="MBBS, MD"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-orange-600" /> Cabin Number</Label>
              <Input
                value={form.cabinNumber}
                onChange={e => setForm(f => ({ ...f, cabinNumber: e.target.value }))}
                placeholder="Cabin 2"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Fee Section */}
          <div className="bg-slate-50 rounded-xl border p-4 space-y-4 mt-2">
            <h4 className="text-sm font-bold text-slate-600 flex items-center gap-2">
              <IndianRupee className="w-4 h-4" /> Consultation Fees
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-blue-700 text-xs font-bold">New Case Fee (₹)</Label>
                <Input
                  type="number"
                  value={form.newCaseFee}
                  onChange={e => setForm(f => ({ ...f, newCaseFee: e.target.value }))}
                  className="rounded-xl border-blue-200 focus-visible:ring-blue-300"
                />
                <p className="text-[10px] text-slate-400">First visit / new problem</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-teal-700 text-xs font-bold">Old Case Fee (₹)</Label>
                <Input
                  type="number"
                  value={form.oldCaseFee}
                  onChange={e => setForm(f => ({ ...f, oldCaseFee: e.target.value }))}
                  className="rounded-xl border-teal-200 focus-visible:ring-teal-300"
                />
                <p className="text-[10px] text-slate-400">Follow-up / same issue</p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => update.mutate()}
            disabled={update.isPending || !form.name}
            className={`w-full rounded-xl h-11 transition-all ${saved ? "bg-green-600 hover:bg-green-600" : "bg-primary hover:bg-primary/90"}`}
          >
            {saved ? (
              <><CheckCircle2 className="w-4 h-4 mr-2" /> Saved!</>
            ) : update.isPending ? (
              "Saving..."
            ) : (
              <><Save className="w-4 h-4 mr-2" /> Save Profile</>
            )}
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
