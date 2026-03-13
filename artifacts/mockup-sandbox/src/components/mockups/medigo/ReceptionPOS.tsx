import React, { useState } from "react";
import { 
  Activity, 
  Search, 
  Plus, 
  QrCode, 
  PhoneCall, 
  Check, 
  LogOut, 
  Printer, 
  Download, 
  AlertTriangle,
  User,
  Clock,
  MoreVertical,
  Hospital
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Colors (can use tailwind classes)
// Primary Blue: #2563EB -> bg-blue-600
// Teal: #14B8A6 -> bg-teal-500
// Green: #22C55E -> bg-green-500
// Orange: #F59E0B -> bg-amber-500
// Red: #EF4444 -> bg-red-500
// Background: #F1F5F9 -> bg-slate-100
// Dark sidebar: #1E293B -> bg-slate-800

export function ReceptionPOS() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col h-screen w-full bg-slate-100 font-sans text-slate-900 overflow-hidden" style={{ minWidth: "1200px", maxWidth: "1600px", margin: "0 auto", border: "1px solid #e2e8f0" }}>
      {/* TOP HEADER BAR */}
      <header className="bg-slate-800 text-white flex items-center justify-between px-6 py-3 shrink-0 shadow-md z-10">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Hospital className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Medigo</span>
        </div>
        
        <div className="text-lg font-semibold text-slate-200">
          Reception Dashboard - Medigo City Hospital
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>10:42 AM | Fri, 13 Mar 2026</span>
          </div>
          <div className="h-6 w-px bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 border border-slate-600">
              <AvatarFallback className="bg-slate-700 text-white text-xs">KP</AvatarFallback>
            </Avatar>
            <span>Kavita Patel - Receptionist</span>
          </div>
          <button className="hover:text-white transition-colors hover:bg-slate-700 p-2 rounded-full">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden p-4 gap-4">
        
        {/* LEFT COLUMN */}
        <div className="w-[420px] flex flex-col gap-4 shrink-0 overflow-y-auto pr-1 pb-4">
          
          {/* Add / Find Patient */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="pb-3 pt-4 px-4">
              <CardTitle className="text-lg text-slate-800">Add / Find Patient</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  placeholder="Search by name, phone, or ID..." 
                  className="pl-10 h-12 text-base bg-slate-50 border-slate-300 focus-visible:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Button className="col-span-2 h-12 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold gap-2">
                  <Plus className="w-5 h-5" /> Walk-in Registration
                </Button>
                <Button variant="outline" className="h-11 border-teal-500 text-teal-700 hover:bg-teal-50 gap-2">
                  <QrCode className="w-4 h-4" /> Scan QR / Token
                </Button>
                <Button variant="outline" className="h-11 border-purple-500 text-purple-700 hover:bg-purple-50 gap-2 bg-purple-50/50">
                  <PhoneCall className="w-4 h-4" /> AI Phone Reg.
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* RECENT WALK-INS */}
          <Card className="shadow-sm border-slate-200 flex-1 flex flex-col min-h-0">
            <CardHeader className="pb-2 pt-4 px-4 shrink-0">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base text-slate-800">Recent Walk-ins</CardTitle>
                <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">View All</span>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 flex-1 overflow-y-auto space-y-3">
              {[
                { initials: "RK", name: "Rajesh Kumar", id: "#MG-2847", time: "10:38 AM", status: "pending", color: "bg-blue-100 text-blue-700" },
                { initials: "AP", name: "Anjali Patel", id: "#MG-2846", time: "10:31 AM", status: "pending", color: "bg-pink-100 text-pink-700" },
                { initials: "SM", name: "Suresh Mehta", id: "#MG-2845", time: "10:25 AM", status: "checked", color: "bg-amber-100 text-amber-700" },
                { initials: "PD", name: "Priya Desai", id: "#MG-2844", time: "10:15 AM", status: "checked", color: "bg-teal-100 text-teal-700" },
              ].map((patient, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar className={`w-10 h-10 ${patient.color}`}>
                      <AvatarFallback className="font-semibold">{patient.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm text-slate-800">{patient.name}</div>
                      <div className="text-xs text-slate-500 font-medium">{patient.id} &bull; {patient.time}</div>
                    </div>
                  </div>
                  {patient.status === "pending" ? (
                    <Button size="sm" className="h-8 bg-blue-50 text-blue-700 hover:bg-blue-100 border-none shadow-none font-semibold">
                      Check-in
                    </Button>
                  ) : (
                    <div className="flex items-center gap-1 text-xs font-semibold text-green-600 px-3 py-1.5 bg-green-50 rounded-md">
                      Checked <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* DOCTOR AVAILABILITY */}
          <Card className="shadow-sm border-slate-200 shrink-0">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-base text-slate-800">Doctor Availability</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Dr. Shah", spec: "General", cabin: "Cabin 2", status: "available", waiting: 3 },
                  { name: "Dr. Kumar", spec: "Cardio", cabin: "Cabin 4", status: "available", waiting: 2 },
                  { name: "Dr. Gupta", spec: "Ortho", cabin: "Cabin 6", status: "busy", waiting: 5 },
                  { name: "Dr. Patel", spec: "Neuro", cabin: "Cabin 8", status: "available", waiting: 1 },
                  { name: "Dr. Sharma", spec: "Skin", cabin: "Cabin 3", status: "break", waiting: 0 },
                ].map((doc, i) => (
                  <div key={i} className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-sm flex flex-col gap-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-sm text-slate-800 leading-tight">{doc.name}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{doc.spec} &bull; {doc.cabin}</div>
                      </div>
                      <div className={`w-2.5 h-2.5 rounded-full mt-0.5 shadow-sm ${
                        doc.status === 'available' ? 'bg-green-500' : 
                        doc.status === 'busy' ? 'bg-red-500' : 'bg-amber-400'
                      }`}></div>
                    </div>
                    <div className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded w-max mt-0.5">
                      {doc.waiting} waiting
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex flex-col gap-4 bg-slate-50/50 shrink-0">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">Today's Token Queue</h2>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm">
                <Clock className="w-4 h-4 text-blue-600" />
                Live Update: <span className="text-slate-900">Just now</span>
              </div>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-slate-200/50 p-1 h-10">
                <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm px-4">All</TabsTrigger>
                <TabsTrigger value="waiting" className="data-[state=active]:bg-white data-[state=active]:shadow-sm px-4">Waiting</TabsTrigger>
                <TabsTrigger value="inprogress" className="data-[state=active]:bg-white data-[state=active]:shadow-sm px-4">In Progress</TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm px-4">Completed</TabsTrigger>
                <TabsTrigger value="referred" className="data-[state=active]:bg-white data-[state=active]:shadow-sm px-4">Referred</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex-1 overflow-auto bg-white">
            <Table>
              <TableHeader className="bg-slate-50 sticky top-0 z-10 shadow-sm">
                <TableRow className="border-slate-200">
                  <TableHead className="font-semibold text-slate-600 w-[90px]">Token #</TableHead>
                  <TableHead className="font-semibold text-slate-600">Patient Name</TableHead>
                  <TableHead className="font-semibold text-slate-600 w-[60px]">Age</TableHead>
                  <TableHead className="font-semibold text-slate-600">Doctor</TableHead>
                  <TableHead className="font-semibold text-slate-600">Time Reg.</TableHead>
                  <TableHead className="font-semibold text-slate-600">Wait Time</TableHead>
                  <TableHead className="font-semibold text-slate-600">Status</TableHead>
                  <TableHead className="font-semibold text-slate-600 text-right pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { token: "101", name: "Ramesh Patel", age: 45, doc: "Dr. Shah", time: "9:15 AM", wait: "Done", status: "Completed", statusColor: "bg-green-100 text-green-700 border-green-200" },
                  { token: "102", name: "Priya Mehta", age: 34, doc: "Dr. Shah", time: "9:42 AM", wait: "Done", status: "In Consultation", statusColor: "bg-blue-100 text-blue-700 border-blue-200" },
                  { token: "103", name: "Amit Sharma", age: 28, doc: "Dr. Kumar", time: "10:05 AM", wait: "37 min", status: "Waiting", statusColor: "bg-amber-100 text-amber-700 border-amber-200" },
                  { token: "104", name: "Sunita Verma", age: 52, doc: "Dr. Gupta", time: "10:12 AM", wait: "30 min", status: "Waiting", statusColor: "bg-amber-100 text-amber-700 border-amber-200" },
                  { token: "105", name: "Rajan Modi", age: 61, doc: "Dr. Kumar", time: "10:18 AM", wait: "24 min", status: "Waiting", statusColor: "bg-amber-100 text-amber-700 border-amber-200" },
                  { token: "106", name: "Neha Singh", age: 22, doc: "Dr. Shah", time: "10:25 AM", wait: "17 min", status: "Waiting", statusColor: "bg-amber-100 text-amber-700 border-amber-200" },
                  { token: "107", name: "Vikram Rao", age: 38, doc: "Dr. Patel", time: "10:31 AM", wait: "11 min", status: "Waiting", statusColor: "bg-amber-100 text-amber-700 border-amber-200" },
                  { token: "108", name: "Meera Joshi", age: 44, doc: "Dr. Gupta", time: "10:38 AM", wait: "4 min", status: "Waiting", statusColor: "bg-amber-100 text-amber-700 border-amber-200" },
                  { token: "109", name: "Karan Shah", age: 29, doc: "Dr. Kumar", time: "10:42 AM", wait: "Just now", status: "Registered", statusColor: "bg-blue-50 text-blue-600 border-blue-200" },
                ].map((row, i) => (
                  <TableRow key={i} className="hover:bg-slate-50 border-slate-100">
                    <TableCell className="font-semibold text-slate-800">
                      <div className="bg-slate-100 px-2 py-1 inline-block rounded font-mono text-sm">
                        {row.token}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-slate-800">{row.name}</TableCell>
                    <TableCell className="text-slate-600">{row.age}</TableCell>
                    <TableCell className="text-slate-700 font-medium flex items-center gap-1.5 pt-4">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      {row.doc}
                    </TableCell>
                    <TableCell className="text-slate-600">{row.time}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${row.wait === 'Done' ? 'text-slate-400' : 'text-slate-700'}`}>
                        {row.wait}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${row.statusColor} font-semibold px-2 py-0.5 rounded-full text-xs border whitespace-nowrap flex w-max items-center gap-1.5`}>
                        {row.status === 'Completed' && <Check className="w-3 h-3" />}
                        {row.status === 'In Consultation' && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                        {row.status === 'Waiting' && <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>}
                        {row.status === 'Registered' && <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>}
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-4">
                      {row.status === "Completed" || row.status === "In Consultation" ? (
                        <Button variant="ghost" size="sm" className="h-8 text-blue-600 font-medium hover:bg-blue-50">
                          View
                        </Button>
                      ) : (
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="outline" size="sm" className="h-8 text-slate-600 border-slate-300 font-medium hover:bg-slate-50">
                            Assign
                          </Button>
                          <Button size="sm" className="h-8 bg-blue-600 text-white font-medium hover:bg-blue-700">
                            Check-in
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <footer className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between shrink-0 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] z-10">
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Total Today:</span>
            <span className="text-slate-900 font-bold text-base">47</span>
          </div>
          <div className="h-4 w-px bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="text-slate-500 font-medium">Waiting:</span>
            <span className="text-slate-900 font-bold">31</span>
          </div>
          <div className="h-4 w-px bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-slate-500 font-medium">In Progress:</span>
            <span className="text-slate-900 font-bold">3</span>
          </div>
          <div className="h-4 w-px bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-slate-500 font-medium">Completed:</span>
            <span className="text-slate-900 font-bold">13</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50 gap-2 font-medium">
            <Download className="w-4 h-4 text-slate-500" /> Export Report
          </Button>
          <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50 gap-2 font-medium">
            <Printer className="w-4 h-4 text-slate-500" /> Print All Tokens
          </Button>
          <Button className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 shadow-none gap-2 font-semibold">
            <AlertTriangle className="w-4 h-4" /> Emergency Protocol
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default ReceptionPOS;