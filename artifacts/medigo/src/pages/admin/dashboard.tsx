import React from "react";
import { AppLayout } from "@/components/Layouts";
import { useGetDashboardStats } from "@workspace/api-client-react";
import { Users, Stethoscope, IndianRupee, Clock, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useGetDashboardStats();

  if (isLoading || !stats) {
    return (
      <AppLayout role="admin">
        <div className="p-8 flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AppLayout>
    );
  }

  const statCards = [
    { title: "Patients Today", value: stats.patientsToday, icon: Users, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
    { title: "Doctors Active", value: stats.doctorsActive, icon: Stethoscope, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
    { title: "Revenue Today", value: `₹${stats.revenueToday.toLocaleString()}`, icon: IndianRupee, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
    { title: "Queue Waiting", value: stats.queueWaiting, icon: Clock, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
  ];

  return (
    <AppLayout role="admin">
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Today's Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back. Here's what's happening at Medigo today.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, idx) => (
            <div key={idx} className={`bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group`}>
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} ${stat.border} border`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Patients per Doctor
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.patientsPerDoctor} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="doctorName" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    cursor={{ fill: 'hsl(var(--muted)/0.5)' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              Recent Activity
            </h3>
            <div className="flex-1 overflow-y-auto pr-2 space-y-6">
              {stats.recentActivity.map((activity, idx) => (
                <div key={idx} className="relative pl-6 pb-2 border-l-2 border-muted last:border-0 last:pb-0">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                  <p className="text-sm font-medium text-foreground leading-snug">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
