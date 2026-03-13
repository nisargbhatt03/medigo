import React from "react";
import { AppLayout } from "@/components/Layouts";
import { useListDoctors } from "@workspace/api-client-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, User, Clock } from "lucide-react";

export default function AdminDoctors() {
  const { data: doctors = [], isLoading } = useListDoctors();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-500";
      case "busy": return "bg-blue-500";
      case "break": return "bg-yellow-500";
      default: return "bg-slate-400";
    }
  };

  return (
    <AppLayout role="admin">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Medical Staff</h1>
          <p className="text-muted-foreground mt-1">Manage hospital doctors and view real-time availability.</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {doctors.map(doctor => (
              <div key={doctor.id} className="bg-card rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 border-2 border-border shadow-sm">
                        <AvatarImage src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} />
                        <AvatarFallback className="bg-primary/10 text-primary font-display font-bold">{doctor.name.charAt(4)}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-card ${getStatusColor(doctor.status)}`}></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{doctor.name}</h3>
                      <p className="text-sm text-secondary font-medium">{doctor.specialty}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center"><User className="w-4 h-4 mr-2" /> Qualification</span>
                    <span className="font-medium">{doctor.qualification}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center"><Stethoscope className="w-4 h-4 mr-2" /> Cabin</span>
                    <Badge variant="outline" className="bg-slate-50">{doctor.cabinNumber}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center"><Clock className="w-4 h-4 mr-2" /> Waiting Queue</span>
                    <span className="font-bold text-orange-600">{doctor.waitingCount || 0} patients</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
