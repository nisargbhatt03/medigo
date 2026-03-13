import React from "react";
import { AppLayout } from "@/components/Layouts";
import { useListReferrals } from "@workspace/api-client-react";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

export default function AdminReferrals() {
  const { data: referrals = [], isLoading } = useListReferrals();

  const getUrgencyBadge = (urgency: string) => {
    if (urgency === 'high') return <Badge className="bg-red-100 text-red-700 border-red-200">High</Badge>;
    if (urgency === 'normal') return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Normal</Badge>;
    return <Badge className="bg-slate-100 text-slate-700 border-slate-200">Low</Badge>;
  };

  return (
    <AppLayout role="admin">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Cross-Department Referrals</h1>
          <p className="text-muted-foreground mt-1">Track patient transfers between specialists.</p>
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b">
                <tr>
                  <th className="px-6 py-4 font-medium">Patient</th>
                  <th className="px-6 py-4 font-medium">From Doctor</th>
                  <th className="px-6 py-4 font-medium">To Doctor</th>
                  <th className="px-6 py-4 font-medium">Reason</th>
                  <th className="px-6 py-4 font-medium">Urgency</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y border-border">
                {isLoading ? (
                  <tr><td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">Loading referrals...</td></tr>
                ) : referrals.length === 0 ? (
                  <tr><td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">No referrals found.</td></tr>
                ) : (
                  referrals.map(ref => (
                    <tr key={ref.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">{ref.patientName}</td>
                      <td className="px-6 py-4 text-muted-foreground">{ref.fromDoctorName}</td>
                      <td className="px-6 py-4 font-medium text-primary flex items-center gap-2">
                        <Activity className="w-4 h-4" /> {ref.toDoctorName}
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate" title={ref.reason}>{ref.reason}</td>
                      <td className="px-6 py-4">{getUrgencyBadge(ref.urgency)}</td>
                      <td className="px-6 py-4 text-muted-foreground">{new Date(ref.createdAt).toLocaleDateString()}</td>
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
