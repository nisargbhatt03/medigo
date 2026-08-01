import React, { useState } from "react";
import { AppLayout } from "@/components/Layouts";
import { useListReferrals, useCreateReferral, useListDoctors, getListReferralsQueryKey } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function DoctorReferrals() {
  const { data: referrals = [], isLoading } = useListReferrals({ fromDoctorId: 1 }); // Mocking doc id 1
  const { data: doctors = [] } = useListDoctors();
  const safeReferrals = Array.isArray(referrals) ? referrals : [];
  const safeDoctors = Array.isArray(doctors) ? doctors : [];
  const createReferral = useCreateReferral();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    createReferral.mutate({
      data: {
        patientId: 1, // hardcoded for demo
        fromDoctorId: 1,
        toDoctorId: parseInt(formData.get("toDoctorId") as string, 10),
        reason: formData.get("reason") as string,
        urgency: formData.get("urgency") as string,
      }
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getListReferralsQueryKey() });
        setOpen(false);
        toast({ title: "Referral sent successfully" });
      }
    });
  };

  return (
    <AppLayout role="doctor">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">My Referrals</h1>
            <p className="text-muted-foreground mt-1">Manage patients you have referred out.</p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20">
                <Send className="w-4 h-4 mr-2" /> Send New Referral
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-display">Refer Patient</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Select Specialist *</Label>
                  <select name="toDoctorId" required className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select Doctor...</option>
                    {safeDoctors.map(d => <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Urgency *</Label>
                  <select name="urgency" required className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Reason / Clinical Notes *</Label>
                  <Input name="reason" required placeholder="Reason for referral" className="rounded-xl" />
                </div>
                <Button type="submit" disabled={createReferral.isPending} className="w-full rounded-xl mt-4">
                  {createReferral.isPending ? "Sending..." : "Send Referral"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">Patient</th>
                <th className="px-6 py-4 font-medium">Referred To</th>
                <th className="px-6 py-4 font-medium">Reason</th>
                <th className="px-6 py-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y border-border">
              {isLoading ? (
                <tr><td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">Loading...</td></tr>
              ) : safeReferrals.length === 0 ? (
                <tr><td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">No referrals sent.</td></tr>
              ) : (
                safeReferrals.map(ref => (
                  <tr key={ref.id} className="hover:bg-muted/20">
                    <td className="px-6 py-4 font-semibold">{ref.patientName}</td>
                    <td className="px-6 py-4 text-primary font-medium">{ref.toDoctorName}</td>
                    <td className="px-6 py-4">{ref.reason}</td>
                    <td className="px-6 py-4 text-muted-foreground">{new Date(ref.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
