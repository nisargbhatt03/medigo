import React from "react"
import { 
  PlusSquare, 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope, 
  ListOrdered, 
  Pill, 
  BarChart, 
  Settings,
  Bell,
  Search,
  Activity,
  IndianRupee,
  Clock,
  ArrowRight,
  PhoneCall,
  UserPlus,
  Printer,
  AlertTriangle
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function AdminDashboard() {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] font-sans text-[#111827] overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-[240px] bg-[#0F172A] text-white flex flex-col shrink-0 h-full">
        {/* Logo */}
        <div className="p-6 flex items-center space-x-3">
          <div className="bg-[#2563EB] text-white p-1.5 rounded-lg">
            <PlusSquare size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">Medigo</h1>
            <p className="text-xs text-slate-400 font-medium">Hospital POS</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1.5 mt-4 overflow-y-auto">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem icon={<Users size={18} />} label="Patients" />
          <NavItem icon={<Calendar size={18} />} label="Appointments" />
          <NavItem icon={<Stethoscope size={18} />} label="Doctors" />
          <NavItem icon={<ListOrdered size={18} />} label="Queue" />
          <NavItem icon={<Pill size={18} />} label="Pharmacy" />
          <NavItem icon={<BarChart size={18} />} label="Reports" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-xl">
            <Avatar className="h-10 w-10 border border-slate-700">
              <AvatarImage src="https://i.pravatar.cc/150?u=admin_singh" />
              <AvatarFallback className="bg-slate-700 text-white">AS</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Admin Singh</p>
              <p className="text-xs text-slate-400 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP BAR */}
        <header className="h-20 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-8 shrink-0">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#111827]">Today's Overview</h2>
            <p className="text-sm text-slate-500 font-medium">March 13, 2026</p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search patients, doctors..." 
                className="w-full pl-10 bg-slate-50 border-slate-200 focus-visible:ring-[#2563EB]"
              />
            </div>
            <button className="relative p-2 text-slate-500 hover:text-[#111827] transition-colors rounded-full hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full ring-2 ring-white"></span>
            </button>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-auto p-8 space-y-6">
          
          {/* STATS CARDS ROW */}
          <div className="grid grid-cols-4 gap-6">
            {/* Patients Today */}
            <Card className="bg-gradient-to-br from-[#2563EB] to-blue-700 text-white border-none shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Users size={64} />
              </div>
              <CardContent className="p-6 relative z-10">
                <p className="text-blue-100 font-medium mb-1">Patients Today</p>
                <h3 className="text-4xl font-bold mb-2">124</h3>
                <p className="text-sm text-blue-200 flex items-center">
                  <Activity size={14} className="mr-1" />
                  +12% from yesterday
                </p>
              </CardContent>
            </Card>

            {/* Doctors Active */}
            <Card className="bg-gradient-to-br from-[#14B8A6] to-teal-600 text-white border-none shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Stethoscope size={64} />
              </div>
              <CardContent className="p-6 relative z-10">
                <p className="text-teal-100 font-medium mb-1">Doctors Active</p>
                <h3 className="text-4xl font-bold mb-2">18</h3>
                <p className="text-sm text-teal-200 flex items-center">
                  <Activity size={14} className="mr-1" />
                  Out of 22 total
                </p>
              </CardContent>
            </Card>

            {/* Revenue Today */}
            <Card className="bg-gradient-to-br from-[#22C55E] to-green-600 text-white border-none shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <IndianRupee size={64} />
              </div>
              <CardContent className="p-6 relative z-10">
                <p className="text-green-100 font-medium mb-1">Revenue Today</p>
                <h3 className="text-4xl font-bold mb-2">₹48,500</h3>
                <p className="text-sm text-green-200 flex items-center">
                  <Activity size={14} className="mr-1" />
                  +5% from average
                </p>
              </CardContent>
            </Card>

            {/* Queue Status */}
            <Card className="bg-gradient-to-br from-[#F59E0B] to-orange-500 text-white border-none shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Clock size={64} />
              </div>
              <CardContent className="p-6 relative z-10">
                <p className="text-orange-100 font-medium mb-1">Queue Status</p>
                <h3 className="text-4xl font-bold mb-2">31</h3>
                <p className="text-sm text-orange-200 flex items-center">
                  Waiting right now
                </p>
              </CardContent>
            </Card>
          </div>

          {/* TWO-COLUMN SECTION */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* LEFT COLUMN: Queue Table */}
            <Card className="col-span-8 shadow-sm border-[#E5E7EB]">
              <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
                <div>
                  <CardTitle className="text-lg">Today's Appointment Queue</CardTitle>
                  <p className="text-sm text-slate-500 mt-1">Live updates of patient flow</p>
                </div>
                <Button variant="outline" size="sm" className="text-[#2563EB] border-[#2563EB] hover:bg-blue-50">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="w-[80px]">Token</TableHead>
                      <TableHead>Patient Name</TableHead>
                      <TableHead>Doctor</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patients.map((p) => (
                      <TableRow key={p.token} className="hover:bg-slate-50/50">
                        <TableCell className="font-medium text-slate-500">{p.token}</TableCell>
                        <TableCell className="font-semibold">{p.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-slate-200 mr-2 flex items-center justify-center text-[10px] font-bold">
                              {p.doctor.split(' ')[1][0]}
                            </div>
                            {p.doctor}
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-500">{p.time}</TableCell>
                        <TableCell>
                          <StatusBadge status={p.status} />
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {p.status === "Waiting" && (
                              <Button size="sm" className="bg-[#2563EB] hover:bg-blue-700 h-8 text-xs">Call Next</Button>
                            )}
                            {p.status === "In Consultation" && (
                              <Button size="sm" variant="outline" className="h-8 text-xs">View</Button>
                            )}
                            {p.status === "Completed" && (
                              <Button size="sm" variant="outline" className="h-8 text-xs text-slate-500">Receipt</Button>
                            )}
                            {p.status === "Referred" && (
                              <Button size="sm" variant="secondary" className="h-8 text-xs bg-purple-100 text-purple-700 hover:bg-purple-200 border-none">Refer</Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* RIGHT COLUMN */}
            <div className="col-span-4 space-y-6">
              
              {/* Doctor Status & Load */}
              <Card className="shadow-sm border-[#E5E7EB]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Doctor Workload</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {doctorStats.map(doc => (
                    <div key={doc.name}>
                      <div className="flex justify-between items-end mb-1">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${doc.active ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                          <span className="text-sm font-medium">{doc.name}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">{doc.patients} pts</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${doc.color}`} 
                          style={{ width: `${(doc.patients / 40) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-sm border-[#E5E7EB]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-[#2563EB] hover:bg-blue-700 h-11">
                    <UserPlus className="mr-2" size={18} />
                    Add Walk-in Patient
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-11 text-slate-700 border-slate-300 hover:bg-slate-50">
                    <Printer className="mr-2" size={18} />
                    Print Queue Report
                  </Button>
                  <Button variant="destructive" className="w-full justify-start h-11 bg-[#EF4444] hover:bg-red-600">
                    <AlertTriangle className="mr-2" size={18} />
                    Emergency Alert
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Recent Referrals */}
            <Card className="shadow-sm border-[#E5E7EB]">
              <CardHeader className="border-b pb-3">
                <CardTitle className="text-lg flex items-center">
                  <ArrowRight className="mr-2 text-purple-500" size={20} />
                  Internal Referrals
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {referrals.map((ref, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50">
                      <div>
                        <p className="font-semibold text-sm">{ref.patient}</p>
                        <p className="text-xs text-slate-500 mt-1">{ref.reason}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-medium bg-slate-100 rounded-md p-1.5 px-3">
                        <span className="text-slate-600">{ref.from}</span>
                        <ArrowRight size={14} className="text-slate-400" />
                        <span className="text-[#2563EB]">{ref.to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Receptionist Log */}
            <Card className="shadow-sm border-[#E5E7EB]">
              <CardHeader className="border-b pb-3">
                <CardTitle className="text-lg flex items-center">
                  <PhoneCall className="mr-2 text-teal-500" size={20} />
                  AI Receptionist Log
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {aiLogs.map((log, i) => (
                    <div key={i} className="p-4 flex gap-4 hover:bg-slate-50">
                      <div className={`mt-0.5 p-2 rounded-full h-fit shrink-0 ${log.type === 'call' ? 'bg-teal-100 text-teal-600' : 'bg-blue-100 text-blue-600'}`}>
                        {log.type === 'call' ? <PhoneCall size={14} /> : <Calendar size={14} />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{log.title}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-slate-500">{log.patient}</p>
                          <span className="text-xs text-slate-400">{log.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </main>
    </div>
  )
}

// -- Components --

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button 
      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
        active 
          ? "bg-[#2563EB] text-white font-medium shadow-sm" 
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Waiting":
      return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-none shadow-none font-medium">Waiting</Badge>
    case "In Consultation":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none shadow-none font-medium flex gap-1 items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>In Clinic</Badge>
    case "Completed":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none shadow-none font-medium">Completed</Badge>
    case "Referred":
      return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none shadow-none font-medium">Referred</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

// -- Mock Data --

const patients = [
  { token: "A-102", name: "Ramesh Patel", doctor: "Dr. Shah", time: "10:15 AM", status: "In Consultation" },
  { token: "A-103", name: "Priya Mehta", doctor: "Dr. Kumar", time: "10:20 AM", status: "Waiting" },
  { token: "B-045", name: "Amit Sharma", doctor: "Dr. Gupta", time: "10:30 AM", status: "Waiting" },
  { token: "A-101", name: "Sunita Verma", doctor: "Dr. Shah", time: "09:45 AM", status: "Completed" },
  { token: "C-201", name: "Rajan Modi", doctor: "Dr. Patel", time: "09:30 AM", status: "Referred" },
  { token: "A-104", name: "Neha Singh", doctor: "Dr. Kumar", time: "10:45 AM", status: "Waiting" },
  { token: "B-046", name: "Vikram Rao", doctor: "Dr. Gupta", time: "11:00 AM", status: "Waiting" },
  { token: "A-105", name: "Meera Joshi", doctor: "Dr. Shah", time: "11:15 AM", status: "Waiting" },
]

const doctorStats = [
  { name: "Dr. Shah (Cardio)", patients: 28, active: true, color: "bg-[#2563EB]" },
  { name: "Dr. Kumar (Ortho)", patients: 35, active: true, color: "bg-[#14B8A6]" },
  { name: "Dr. Gupta (Gen)", patients: 42, active: true, color: "bg-[#22C55E]" },
  { name: "Dr. Patel (Ped)", patients: 15, active: false, color: "bg-slate-300" },
]

const referrals = [
  { patient: "Rajan Modi (45M)", from: "Dr. Patel", to: "Dr. Shah", reason: "ECG shows abnormalities, needs cardio consult." },
  { patient: "Sneha Desai (28F)", from: "Dr. Gupta", to: "Dr. Kumar", reason: "Persistent knee pain, suspected ligament tear." },
  { patient: "Arun Nair (52M)", from: "ER", to: "Dr. Shah", reason: "Chest pain observation." },
  { patient: "Kavita Reddy (34F)", from: "Dr. Gupta", to: "Dr. Patel", reason: "Pediatric consult for accompanying child." },
]

const aiLogs = [
  { type: "call", title: "Patient Registered via Call", patient: "Anjali Sharma (+91 98*** ***12)", time: "10:23 AM" },
  { type: "calendar", title: "Appointment Rescheduled", patient: "Rahul Verma (Token B-042)", time: "10:15 AM" },
  { type: "call", title: "Follow-up Query Answered", patient: "Deepak Tiwari (+91 87*** ***99)", time: "09:58 AM" },
  { type: "calendar", title: "Cancellation Processed", patient: "Kiran Bedi", time: "09:30 AM" },
]