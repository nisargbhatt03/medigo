import React, { useState } from "react";
import { AppLayout } from "@/components/Layouts";
import { useListPatients, useCreatePatient, getListPatientsQueryKey } from "@workspace/api-client-react";
import { Plus, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function AdminPatients() {
  const [search, setSearch] = useState("");
  const { data: patients = [], isLoading } = useListPatients({ search });
  const createPatient = useCreatePatient();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

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
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">Patients Directory</h1>
            <p className="text-muted-foreground mt-1">Manage and register hospital patients.</p>
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
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b">
                <tr>
                  <th className="px-6 py-4 font-medium">Patient Details</th>
                  <th className="px-6 py-4 font-medium">Age/Gender</th>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Registered</th>
                </tr>
              </thead>
              <tbody className="divide-y border-border">
                {isLoading ? (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">Loading patients...</td></tr>
                ) : patients.length === 0 ? (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">No patients found.</td></tr>
                ) : (
                  patients.map(patient => (
                    <tr key={patient.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
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
                        <p className="text-xs text-muted-foreground">{patient.gender} • {patient.bloodGroup || 'N/A'}</p>
                      </td>
                      <td className="px-6 py-4 font-medium">{patient.phone}</td>
                      <td className="px-6 py-4 text-muted-foreground">{new Date(patient.registeredAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
