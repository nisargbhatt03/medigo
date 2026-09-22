import { UserPlus, Search, TrendingUp, MoreVertical } from 'lucide-react';

export default function AdminPatients() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Patients</h2>
          <p className="text-xs text-slate-500">Manage patient records, view history and personal information.</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs">
            <UserPlus className="w-4 h-4" /> Add Patient
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Patients</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">1,248</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> +12%</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">New Patients (This Month)</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">86</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> +8%</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Search patients by name, phone, UHID..." className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-700" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">UHID</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4">Age</th>
                <th className="py-3 px-4">Last Visit</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-slate-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-800">Rahul Mehta</td>
                <td className="py-3 px-4 font-mono text-blue-600">UHD001248</td>
                <td className="py-3 px-4 font-mono text-slate-600">+91 98765 43210</td>
                <td className="py-3 px-4 text-slate-700">Male</td>
                <td className="py-3 px-4 text-slate-700 font-medium">34</td>
                <td className="py-3 px-4 text-slate-500">Jan 15, 2025</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">Active</span>
                </td>
                <td className="py-3 px-4 text-right"><MoreVertical className="w-4 h-4 text-slate-400" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
