import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Stethoscope, 
  MoreVertical, 
  Users, 
  UserCheck, 
  UserX, 
  Calendar, 
  Filter, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Eye, 
  Phone, 
  Mail, 
  Clock, 
  Building 
} from 'lucide-react';

export default function AdminDoctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [sortBy, setSortBy] = useState('Name (A-Z)');
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDocForModal, setSelectedDocForModal] = useState(null);

  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      degrees: 'MBBS, MD',
      email: 'priya@sunrisecare.com',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
      spec: 'General Medicine',
      dept: 'Medicine',
      appts: '28 today',
      status: 'Active',
      nextAvailable: 'Today, 11:00 AM',
      verified: true
    }
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedDoctors(doctorsData.map(d => d.id));
    } else {
      setSelectedDoctors([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedDoctors.includes(id)) {
      setSelectedDoctors(selectedDoctors.filter(item => item !== id));
    } else {
      setSelectedDoctors([...selectedDoctors, id]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Doctors</h1>
          <p className="text-xs text-slate-500 mt-0.5">Manage doctors, their schedules and availability.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowScheduleModal(true)}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <Calendar className="w-4 h-4 text-blue-600" /> View Schedule
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" /> Add Doctor
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Doctors */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-semibold">Total Doctors</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">24</h3>
            <p className="text-xs text-emerald-600 font-bold flex items-center gap-1 mt-1.5">
              <span>↑ 12%</span>
              <span className="text-slate-400 font-normal">from last month</span>
            </p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Users className="w-5 h-5" />
          </div>
        </div>

        {/* Active Doctors */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-semibold">Active Doctors</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">22</h3>
            <p className="text-xs text-emerald-600 font-bold flex items-center gap-1 mt-1.5">
              <span>↑ 10%</span>
              <span className="text-slate-400 font-normal">from last month</span>
            </p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <UserCheck className="w-5 h-5" />
          </div>
        </div>

        {/* On Leave */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-semibold">On Leave</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">2</h3>
            <p className="text-xs text-rose-500 font-bold flex items-center gap-1 mt-1.5">
              <span>↓ 50%</span>
              <span className="text-slate-400 font-normal">from last month</span>
            </p>
          </div>
          <div className="p-3 bg-rose-50 text-rose-500 rounded-xl">
            <UserX className="w-5 h-5" />
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-semibold">Today's Appointments</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">48</h3>
            <p className="text-xs text-blue-600 font-bold flex items-center gap-1 mt-1.5">
              <span>↑ 18%</span>
              <span className="text-slate-400 font-normal">vs. yesterday</span>
            </p>
          </div>
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <Calendar className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search doctors by name, specialization, or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Department Filter */}
          <select 
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option>All Departments</option>
            <option>Medicine</option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Orthopedics</option>
            <option>ENT</option>
            <option>Gynecology</option>
            <option>Pediatrics</option>
            <option>Radiology</option>
          </select>

          {/* Status Filter */}
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>On Leave</option>
            <option>Inactive</option>
          </select>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Sort by</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
              <option>Most Appointments</option>
              <option>Department</option>
            </select>
          </div>
        </div>

        <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors self-end md:self-auto">
          <Filter className="w-3.5 h-3.5" /> Filter
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] uppercase tracking-wider font-bold text-slate-500">
                <th className="py-3.5 px-4 w-10 text-center">
                  <input 
                    type="checkbox" 
                    checked={selectedDoctors.length === doctorsData.length}
                    onChange={handleSelectAll}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="py-3.5 px-4 w-12 text-slate-400">#</th>
                <th className="py-3.5 px-4">Doctor</th>
                <th className="py-3.5 px-4">Specialization</th>
                <th className="py-3.5 px-4">Department</th>
                <th className="py-3.5 px-4">Appointments</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Next Available</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {doctorsData.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 text-center">
                    <input 
                      type="checkbox" 
                      checked={selectedDoctors.includes(doc.id)}
                      onChange={() => handleSelectOne(doc.id)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-400 font-semibold">{doc.id}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={doc.avatar} 
                        alt={doc.name} 
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-2xs"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-slate-900">{doc.name}</span>
                          {doc.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-600/10" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">{doc.degrees}</p>
                        <p className="text-[11px] text-slate-400">{doc.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">{doc.spec}</td>
                  <td className="py-3.5 px-4 text-slate-600">{doc.dept}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">{doc.appts}</td>
                  <td className="py-3.5 px-4">
                    {doc.status === 'Active' && (
                      <span className="bg-emerald-50 border border-emerald-200/60 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full text-[11px] inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                      </span>
                    )}
                    {doc.status === 'On Leave' && (
                      <span className="bg-amber-50 border border-amber-200/60 text-amber-700 font-bold px-2.5 py-0.5 rounded-full text-[11px] inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> On Leave
                      </span>
                    )}
                    {doc.status === 'Inactive' && (
                      <span className="bg-rose-50 border border-rose-200/60 text-rose-700 font-bold px-2.5 py-0.5 rounded-full text-[11px] inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Inactive
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{doc.nextAvailable}</td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => { setSelectedDocForModal(doc); setShowScheduleModal(true); }}
                        className="border border-slate-200 hover:border-blue-300 text-blue-600 hover:bg-blue-50/50 font-semibold px-3 py-1 rounded-lg text-xs transition-colors"
                      >
                        View
                      </button>
                      <button className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="font-medium">Showing 1 to 8 of 24 doctors</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <select className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-700 focus:outline-none">
                <option>10 per page</option>
                <option>20 per page</option>
                <option>50 per page</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-700 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-2xs">
                1
              </button>
              <button className="px-3 py-1 rounded-lg hover:bg-white text-slate-600 font-semibold text-xs transition-colors">
                2
              </button>
              <button className="px-3 py-1 rounded-lg hover:bg-white text-slate-600 font-semibold text-xs transition-colors">
                3
              </button>
              <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-700 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Doctor Modal Popup */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Add New Doctor</h3>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700">First Name</label>
                  <input type="text" placeholder="Dr. Priya" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Last Name</label>
                  <input type="text" placeholder="Sharma" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Degrees / Qualification</label>
                  <input type="text" placeholder="MBBS, MD" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Department</label>
                  <select className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Orthopedics</option>
                    <option>ENT</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Email Address</label>
                  <input type="email" placeholder="priya@sunrisecare.com" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">Consultation Fee (₹)</label>
                <input type="number" placeholder="500" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
              >
                Save Doctor
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Doctor Schedule Modal Popup */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {selectedDocForModal ? `${selectedDocForModal.name} - Schedule` : 'Doctor Availability & Schedule'}
                  </h3>
                  <p className="text-xs text-slate-500">Sunrise Care Clinic • OP OPD Shift Timings</p>
                </div>
              </div>
              <button 
                onClick={() => { setShowScheduleModal(false); setSelectedDocForModal(null); }}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                  <p className="text-[11px] text-slate-500 font-semibold">Morning Shift</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">09:00 AM - 01:00 PM</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                  <p className="text-[11px] text-slate-500 font-semibold">Evening Shift</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">05:00 PM - 08:30 PM</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                  <p className="text-[11px] text-slate-500 font-semibold">Slot Duration</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">15 Mins / Patient</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/50">
                <p className="text-xs font-bold text-slate-800 mb-2">Weekly Working Days</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <span key={day} className="bg-blue-600 text-white font-bold px-2.5 py-1 rounded-lg text-xs">
                      {day}
                    </span>
                  ))}
                  <span className="bg-slate-200 text-slate-500 font-bold px-2.5 py-1 rounded-lg text-xs">
                    Sun (Off)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button 
                onClick={() => { setShowScheduleModal(false); setSelectedDocForModal(null); }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

