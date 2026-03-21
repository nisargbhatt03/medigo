import React from "react";
import { AppLayout } from "@/components/Layouts";
import { useListAppointments, useUpdateAppointment, getListAppointmentsQueryKey } from "@workspace/api-client-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

const statusColors: Record<string, string> = {
  "waiting": "bg-orange-100 text-orange-700 border-orange-200",
  "in-consultation": "bg-blue-100 text-blue-700 border-blue-200",
  "completed": "bg-green-100 text-green-700 border-green-200",
  "referred": "bg-purple-100 text-purple-700 border-purple-200",
  "cancelled": "bg-red-100 text-red-700 border-red-200",
};

export default function ReceptionAppointments() {
  const { data: appointments = [], isLoading } = useListAppointments({ date: new Date().toISOString().split("T")[0] });
  const updateAppointment = useUpdateAppointment();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const handleStatusChange = (id: number, status: string) => {
    updateAppointment.mutate({ id, data: { status } }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getListAppointmentsQueryKey() });
        toast({ title: "Status updated" });
      },
    });
  };

  return (
    <AppLayout role="reception">
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">Today's Appointments</h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b">
                <tr>
                  <th className="px-6 py-4 font-medium">Token</th>
                  <th className="px-6 py-4 font-medium">Patient</th>
                  <th className="px-6 py-4 font-medium">Doctor</th>
                  <th className="px-6 py-4 font-medium">Time Slot</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Update</th>
                </tr>
              </thead>
              <tbody className="divide-y border-border">
                {isLoading ? (
                  <tr><td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">Loading appointments...</td></tr>
                ) : appointments.length === 0 ? (
                  <tr><td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">No appointments today.</td></tr>
                ) : (
                  appointments.map(apt => (
                    <tr key={apt.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 border flex items-center justify-center font-display font-bold text-lg text-slate-700">
                          {apt.tokenNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-foreground">{apt.patientName}</td>
                      <td className="px-6 py-4 text-muted-foreground">{apt.doctorName}</td>
                      <td className="px-6 py-4 font-medium">{apt.timeSlot}</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className={`capitalize px-2.5 py-1 ${statusColors[apt.status] || ""}`}>
                          {apt.status.replace("-", " ")}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Select
                          disabled={updateAppointment.isPending}
                          value={apt.status}
                          onValueChange={val => handleStatusChange(apt.id, val)}
                        >
                          <SelectTrigger className="w-[140px] ml-auto rounded-xl">
                            <SelectValue placeholder="Update Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="waiting">Waiting</SelectItem>
                            <SelectItem value="in-consultation">In Consultation</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="referred">Referred</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
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
