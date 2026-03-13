import React, { useState } from 'react';
import { 
  User, 
  Clock, 
  Activity, 
  FileText, 
  Pills, 
  CheckCircle2, 
  AlertCircle, 
  Video, 
  Phone, 
  MessageSquare,
  ChevronRight,
  Plus,
  X,
  Send,
  Stethoscope,
  TrendingUp,
  CreditCard,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const patients = [
  { id: 101, name: 'Ramesh Patel', status: 'waiting' },
  { id: 102, name: 'Priya Mehta', status: 'in-progress' },
  { id: 103, name: 'Amit Sharma', status: 'waiting' },
  { id: 104, name: 'Sunita Verma', status: 'waiting' },
  { id: 105, name: 'Rajan Modi', status: 'waiting' },
  { id: 106, name: 'Neha Singh', status: 'waiting' },
  { id: 107, name: 'Vikram Rao', status: 'completed' },
  { id: 108, name: 'Meera Joshi', status: 'completed' },
];

const medications = [
  { name: 'Amlodipine 5mg', dosage: 'Once daily (morning)', duration: '30 days' },
  { name: 'Enalapril 10mg', dosage: 'Once daily (night)', duration: '30 days' },
  { name: 'Paracetamol 500mg', dosage: 'SOS (for pain)', duration: '5 days' },
];

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('chief-complaint');
  
  return (
    <div className="flex h-screen w-full min-w-[1400px] overflow-hidden bg-[#F8FAFC] font-sans">
      
      {/* LEFT PANEL - 300px */}
      <div className="w-[300px] flex-shrink-0 bg-slate-900 text-white flex flex-col h-full border-r border-slate-800 shadow-xl z-10">
        {/* Doctor Profile */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              <Avatar className="h-14 w-14 border-2 border-[#2563EB]">
                <AvatarFallback className="bg-[#2563EB] text-white text-lg">DS</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 h-4 w-4 bg-[#22C55E] rounded-full border-2 border-slate-900"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold">Dr. Dhruv Shah</h2>
              <p className="text-xs text-slate-400">MBBS, MD - Gen. Physician</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-none">Cabin 2</Badge>
            <span className="text-xs flex items-center text-[#22C55E]">
              <span className="h-2 w-2 rounded-full bg-[#22C55E] mr-2"></span>
              Online
            </span>
          </div>
        </div>

        {/* Queue */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Today's Queue</h3>
            <Badge variant="outline" className="border-slate-700 text-slate-400">8 total</Badge>
          </div>
          
          <div className="space-y-2">
            {patients.map(patient => (
              <div 
                key={patient.id} 
                className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-all ${
                  patient.status === 'in-progress' 
                    ? 'bg-[#2563EB] shadow-md ring-1 ring-[#2563EB] ring-offset-2 ring-offset-slate-900' 
                    : patient.status === 'completed'
                    ? 'bg-slate-800/50 border border-slate-800 opacity-60'
                    : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    patient.status === 'in-progress' ? 'bg-white text-[#2563EB]' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {patient.id}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${patient.status === 'completed' ? 'line-through text-slate-400' : 'text-white'}`}>
                      {patient.name}
                    </p>
                    <p className="text-xs text-slate-400 capitalize">
                      {patient.status.replace('-', ' ')}
                    </p>
                  </div>
                </div>
                {patient.status === 'in-progress' && <ChevronRight className="h-4 w-4 text-white" />}
                {patient.status === 'completed' && <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur">
          <div className="space-y-2">
            <Button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-900/20">
              CALL NEXT PATIENT
            </Button>
            <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              SKIP CURRENT
            </Button>
          </div>
        </div>
      </div>

      {/* CENTER PANEL - 700px */}
      <div className="w-[700px] flex-shrink-0 flex flex-col h-full border-r border-slate-200 shadow-sm bg-white z-0">
        {/* Header */}
        <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white shrink-0">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-slate-800 flex items-center">
              Current Consultation 
              <span className="mx-2 text-slate-300">|</span> 
              <span className="text-[#2563EB]">Priya Mehta</span>
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Token 102</Badge>
            <div className="flex items-center text-sm text-slate-500 font-medium">
              <Clock className="w-4 h-4 mr-1" />
              10:35 AM
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-[#F8FAFC]">
          {/* Patient Info Card */}
          <Card className="mb-6 border-slate-200 shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-pink-100 text-pink-700">PM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-slate-900">Priya Mehta</h3>
                  <div className="text-sm text-slate-500 flex items-center space-x-2 mt-1">
                    <span>34 Yrs</span>
                    <span>•</span>
                    <span>Female</span>
                    <span>•</span>
                    <Badge variant="secondary" className="bg-red-50 text-red-600 border-red-100 text-xs">B+</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="flex items-center justify-end text-slate-600 mb-1">
                  <Phone className="w-3 h-3 mr-1" />
                  +91 98765 43210
                </div>
                <div className="text-slate-500">
                  Last Visit: <span className="font-medium text-slate-700">Dec 15, 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Area */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1">
            <Tabs defaultValue="chief-complaint" className="w-full h-full flex flex-col">
              <TabsList className="w-full flex justify-start rounded-none border-b border-slate-200 bg-slate-50 p-0 h-auto">
                {['Chief Complaint', 'History', 'Vitals', 'Diagnosis', 'Tests'].map((tab) => {
                  const val = tab.toLowerCase().replace(' ', '-');
                  return (
                    <TabsTrigger 
                      key={val}
                      value={val}
                      onClick={() => setActiveTab(val)}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2563EB] data-[state=active]:bg-white data-[state=active]:text-[#2563EB] data-[state=active]:shadow-none px-6 py-3 font-medium text-slate-600"
                    >
                      {tab}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
              
              <TabsContent value="chief-complaint" className="flex-1 p-6 m-0 border-none outline-none focus-visible:ring-0">
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2 text-[#2563EB]" />
                    Presenting Complaints
                  </h4>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-slate-700 leading-relaxed">
                      "Severe headache for 3 days, dizziness, occasional blurred vision"
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                    <Activity className="w-4 h-4 mr-2 text-[#14B8A6]" />
                    Current Vitals
                  </h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-orange-50 rounded-lg p-3 border border-orange-200 shadow-sm">
                      <p className="text-xs text-orange-800 font-medium mb-1">Blood Pressure</p>
                      <p className="text-lg font-bold text-orange-600 flex items-baseline">
                        145/90 <span className="text-xs ml-1 font-normal">mmHg</span>
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium mb-1">Temperature</p>
                      <p className="text-lg font-semibold text-slate-900 flex items-baseline">
                        99.2 <span className="text-xs ml-1 font-normal text-slate-500">°F</span>
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium mb-1">Pulse Rate</p>
                      <p className="text-lg font-semibold text-slate-900 flex items-baseline">
                        82 <span className="text-xs ml-1 font-normal text-slate-500">bpm</span>
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium mb-1">SpO2</p>
                      <p className="text-lg font-semibold text-slate-900 flex items-baseline">
                        98 <span className="text-xs ml-1 font-normal text-slate-500">%</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                    <Stethoscope className="w-4 h-4 mr-2 text-[#22C55E]" />
                    Clinical Diagnosis
                  </h4>
                  <Textarea 
                    className="min-h-[120px] resize-none border-slate-200 focus-visible:ring-[#2563EB]"
                    placeholder="Enter clinical observations and diagnosis..."
                    defaultValue="Hypertensive headache - requires BP monitoring. Prescribing antihypertensives."
                  />
                </div>

              </TabsContent>
              {/* Other tab contents would go here, omitting for brevity to focus on Chief Complaint */}
            </Tabs>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="h-20 border-t border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
          <div className="flex space-x-3">
            <Button className="bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm">
              Save Diagnosis
            </Button>
            <Button variant="outline" className="border-[#14B8A6] text-[#14B8A6] hover:bg-teal-50">
              Refer Patient
            </Button>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
              Emergency
            </Button>
            <Button className="bg-[#22C55E] hover:bg-green-600 text-white shadow-sm">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Complete Visit
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - 400px */}
      <div className="flex-1 min-w-[350px] max-w-[400px] flex flex-col h-full bg-slate-50 border-l border-slate-200 z-0">
        <div className="h-16 border-b border-slate-200 flex items-center px-6 bg-white shrink-0">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center">
            <Pills className="w-5 h-5 mr-2 text-[#14B8A6]" />
            Prescription Builder
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Medications List */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-slate-700">Rx Medications</h3>
              <Badge variant="secondary" className="bg-slate-200 text-slate-700">3 Items</Badge>
            </div>
            
            <div className="space-y-3">
              {medications.map((med, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-start justify-between group hover:border-[#2563EB] transition-colors">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{med.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{med.dosage}</p>
                    <Badge variant="outline" className="mt-2 text-[10px] uppercase tracking-wider">{med.duration}</Badge>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              
              <Button variant="outline" className="w-full border-dashed border-slate-300 text-[#2563EB] hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300 bg-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Medicine
              </Button>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-2">Special Instructions</h3>
            <Textarea 
              className="resize-none border-slate-200 focus-visible:ring-[#2563EB] text-sm h-20"
              defaultValue="Avoid salt, rest, monitor BP daily"
            />
          </div>

          {/* Pharmacy Toggle */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Send className="w-4 h-4 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Send to e-Pharmacy</p>
                <p className="text-xs text-slate-500">Digital prescription directly to counter</p>
              </div>
            </div>
            <Switch defaultChecked id="pharmacy-toggle" className="data-[state=checked]:bg-[#2563EB]" />
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center">
              <User className="w-4 h-4 mr-2 text-slate-500" />
              Quick Referral
            </h3>
            <div className="space-y-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Refer to Department / Doctor</Label>
                <select className="flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring focus:border-[#2563EB]">
                  <option>Dr. Patel - Cardiologist</option>
                  <option>Dr. Singh - Neurologist</option>
                  <option>Dr. Kumar - Orthopedics</option>
                </select>
              </div>
              <div className="flex space-x-3">
                <div className="space-y-1 w-1/3">
                  <Label className="text-xs text-slate-500">Urgency</Label>
                  <select className="flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring focus:border-[#2563EB]">
                    <option>High</option>
                    <option>Normal</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="space-y-1 flex-1">
                  <Label className="text-xs text-slate-500">Notes</Label>
                  <Input defaultValue="BP management needed" className="h-9 text-sm focus-visible:ring-[#2563EB]" />
                </div>
              </div>
              <Button className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white">
                Send Referral
              </Button>
            </div>
          </div>
        </div>

        {/* Doctor Stats at bottom */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 shrink-0">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col">
              <span className="text-xs text-slate-500 flex items-center mb-1">
                <Users className="w-3 h-3 mr-1" /> Patients Today
              </span>
              <span className="text-xl font-bold text-slate-800">12</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col">
              <span className="text-xs text-slate-500 flex items-center mb-1">
                <CreditCard className="w-3 h-3 mr-1 text-[#22C55E]" /> Earnings
              </span>
              <span className="text-xl font-bold text-[#22C55E]">₹8,400</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Week: <strong>67</strong></span>
            <span>Month: <strong>248</strong></span>
            <span>Referrals: <strong>4</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
