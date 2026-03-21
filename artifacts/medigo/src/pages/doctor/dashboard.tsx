import React, { useState } from "react";
import { AppLayout } from "@/components/Layouts";
import { useListAppointments, useCallNextPatient, useCreatePrescription, getListAppointmentsQueryKey } from "@workspace/api-client-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronRight, Pill, Phone, Activity, Stethoscope, AlertCircle, X, Plus } from "lucide-react";

export default function DoctorDashboard() {
  // Hardcoded to doctor 1 for demo
  const { data: queue = [], isLoading } = useListAppointments({ doctorId: 1, date: new Date().toISOString().split('T')[0] });
  const callNext = useCallNextPatient();
  const createPrescription = useCreatePrescription();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [medicines, setMedicines] = useState([{ name: "", dosage: "", duration: "" }]);
  const [diagnosis, setDiagnosis] = useState("");
  const [instructions, setInstructions] = useState("");
  const [sendToPharmacy, setSendToPharmacy] = useState(true);

  const activePatient = queue.find(q => q.status === "in-consultation");
  
  const handleCallNext = () => {
    callNext.mutate({ data: { doctorId: 1 } }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getListAppointmentsQueryKey() });
        toast({ title: "Next patient called successfully" });
      }
    });
  };

  const handleSavePrescription = () => {
    if (!activePatient) return;
    
    createPrescription.mutate({
      data: {
        patientId: activePatient.patientId,
        doctorId: 1,
        appointmentId: activePatient.id,
        diagnosis,
        instructions,
        sendToPharmacy,
        medicines: JSON.stringify(medicines)
      }
    }, {
      onSuccess: () => {
        toast({ title: "Prescription saved and sent" });
        setMedicines([{ name: "", dosage: "", duration: "" }]);
        setDiagnosis("");
        setInstructions("");
      }
    });
  };

  return (
    <AppLayout role="doctor">
      <div className="flex h-full w-full bg-slate-50 font-sans min-w-max">
        
        {/* LEFT PANEL - Queue */}
        <div className="w-80 flex-shrink-0 bg-slate-900 text-white flex flex-col h-full border-r border-slate-800 shadow-xl z-10">
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-14 w-14 border-2 border-primary">
                <AvatarImage src={`${import.meta.env.BASE_URL}images/avatar-doc.png`} />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-bold font-display">Dr. Profile</h2>
                <p className="text-xs text-slate-400">MBBS, MD - Gen. Physician</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Badge className="bg-slate-800 text-slate-300 border-none hover:bg-slate-700">Cabin 2</Badge>
              <span className="text-xs flex items-center text-green-500 font-medium">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Online
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Queue</h3>
              <Badge variant="outline" className="border-slate-700 text-slate-400">{queue.length} total</Badge>
            </div>
            
            <div className="space-y-2">
              {queue.map(patient => (
                <div 
                  key={patient.id} 
                  className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                    patient.status === 'in-consultation' 
                      ? 'bg-primary shadow-lg shadow-primary/20 ring-1 ring-primary ring-offset-2 ring-offset-slate-900' 
                      : patient.status === 'completed'
                      ? 'bg-slate-800/50 border border-slate-800 opacity-50'
                      : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      patient.status === 'in-consultation' ? 'bg-white text-primary' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {patient.tokenNumber}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${patient.status === 'completed' ? 'line-through text-slate-400' : 'text-white'}`}>
                        {patient.patientName}
                      </p>
                      <p className="text-[10px] text-slate-400 capitalize opacity-80">
                        {patient.status.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                  {patient.status === 'in-consultation' && <ChevronRight className="h-4 w-4 text-white" />}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur">
            <Button 
              onClick={handleCallNext}
              disabled={callNext.isPending}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl h-12"
            >
              {callNext.isPending ? "Calling..." : "CALL NEXT PATIENT"}
            </Button>
          </div>
        </div>

        {/* CENTER PANEL - Consultation */}
        {activePatient ? (
          <div className="flex-1 flex flex-col h-full border-r border-border bg-background z-0">
            <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-card shrink-0 shadow-sm">
              <h1 className="text-lg font-semibold flex items-center font-display">
                Current Consultation 
                <span className="mx-3 text-muted-foreground">|</span> 
                <span className="text-primary">{activePatient.patientName}</span>
              </h1>
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-sm py-1 px-3">
                Token {activePatient.tokenNumber}
              </Badge>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-8">
                <h4 className="text-sm font-bold text-foreground mb-4 flex items-center uppercase tracking-wide">
                  <Activity className="w-4 h-4 mr-2 text-secondary" /> Vitals
                </h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-card rounded-xl p-4 border shadow-sm">
                    <p className="text-xs text-muted-foreground font-medium mb-1">Blood Pressure</p>
                    <p className="text-xl font-display font-bold text-orange-600">120/80 <span className="text-xs font-normal">mmHg</span></p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border shadow-sm">
                    <p className="text-xs text-muted-foreground font-medium mb-1">Temperature</p>
                    <p className="text-xl font-display font-bold text-foreground">98.6 <span className="text-xs font-normal">°F</span></p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border shadow-sm">
                    <p className="text-xs text-muted-foreground font-medium mb-1">Pulse</p>
                    <p className="text-xl font-display font-bold text-foreground">72 <span className="text-xs font-normal">bpm</span></p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border shadow-sm">
                    <p className="text-xs text-muted-foreground font-medium mb-1">SpO2</p>
                    <p className="text-xl font-display font-bold text-foreground">99 <span className="text-xs font-normal">%</span></p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-foreground mb-4 flex items-center uppercase tracking-wide">
                  <Stethoscope className="w-4 h-4 mr-2 text-primary" /> Clinical Diagnosis
                </h4>
                <Textarea 
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  className="min-h-[200px] resize-none border-border bg-card rounded-xl p-4 focus-visible:ring-primary text-base shadow-sm"
                  placeholder="Enter clinical observations, chief complaints, and final diagnosis..."
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center bg-background border-r border-border">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <Stethoscope className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-display font-bold text-muted-foreground">No Active Patient</h2>
            <p className="text-muted-foreground mt-2">Click 'Call Next Patient' to start a consultation</p>
          </div>
        )}

        {/* RIGHT PANEL - Prescription Builder */}
        <div className="w-[400px] flex-shrink-0 flex flex-col h-full bg-slate-50 z-0">
          <div className="h-16 border-b border-border flex items-center px-6 bg-card shrink-0 shadow-sm">
            <h2 className="text-lg font-display font-semibold flex items-center">
              <Pill className="w-5 h-5 mr-2 text-secondary" /> Prescription Builder
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className={!activePatient ? 'opacity-50 pointer-events-none' : ''}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">Rx Medications</h3>
              </div>
              
              <div className="space-y-3">
                {medicines.map((med, idx) => (
                  <div key={idx} className="bg-card border rounded-xl p-4 shadow-sm relative group">
                    <button 
                      onClick={() => setMedicines(medicines.filter((_, i) => i !== idx))}
                      className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <Input 
                      placeholder="Medicine Name (e.g. Paracetamol 500mg)" 
                      value={med.name}
                      onChange={(e) => {
                        const newMeds = [...medicines];
                        newMeds[idx].name = e.target.value;
                        setMedicines(newMeds);
                      }}
                      className="mb-2 h-8 text-sm font-medium border-transparent bg-muted/50 focus-visible:bg-background" 
                    />
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Dosage (1-0-1)" 
                        value={med.dosage}
                        onChange={(e) => {
                          const newMeds = [...medicines];
                          newMeds[idx].dosage = e.target.value;
                          setMedicines(newMeds);
                        }}
                        className="flex-1 h-8 text-xs border-transparent bg-muted/50 focus-visible:bg-background" 
                      />
                      <Input 
                        placeholder="Days" 
                        value={med.duration}
                        onChange={(e) => {
                          const newMeds = [...medicines];
                          newMeds[idx].duration = e.target.value;
                          setMedicines(newMeds);
                        }}
                        className="w-20 h-8 text-xs border-transparent bg-muted/50 focus-visible:bg-background" 
                      />
                    </div>
                  </div>
                ))}
                
                <Button 
                  variant="outline" 
                  onClick={() => setMedicines([...medicines, { name: "", dosage: "", duration: "" }])}
                  className="w-full border-dashed rounded-xl h-10 text-primary hover:text-primary hover:bg-primary/5"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Medicine
                </Button>
              </div>
            </div>

            <div className={!activePatient ? 'opacity-50 pointer-events-none' : ''}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3">Instructions</h3>
              <Textarea 
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="resize-none rounded-xl bg-card border shadow-sm text-sm h-20"
                placeholder="Diet, rest, follow-up advice..."
              />
            </div>

            <div className={`bg-card border rounded-xl p-5 flex items-center justify-between shadow-sm ${!activePatient ? 'opacity-50 pointer-events-none' : ''}`}>
              <div>
                <p className="text-sm font-bold text-foreground">Send to e-Pharmacy</p>
                <p className="text-xs text-muted-foreground mt-0.5">Digital script to counter</p>
              </div>
              <Switch checked={sendToPharmacy} onCheckedChange={setSendToPharmacy} />
            </div>
          </div>

          <div className="p-6 bg-card border-t border-border shrink-0">
            <Button 
              onClick={handleSavePrescription}
              disabled={createPrescription.isPending || !activePatient}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl h-12 shadow-lg shadow-primary/20"
            >
              {createPrescription.isPending ? "Saving..." : "Complete & Save"}
            </Button>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
