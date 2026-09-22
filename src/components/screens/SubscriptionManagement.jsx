import React, { useState } from 'react';
import { Plus, Check, X, Edit, Layers, DollarSign, Users, Database, Calendar } from 'lucide-react';

export default function SubscriptionManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Pricing Cards Grid - 1 Row of 3 Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tier 1: Basic */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Basic</span>
            <div className="mt-2 flex items-baseline">
              <span className="text-3xl font-extrabold text-slate-900">₹999</span>
              <span className="text-xs text-slate-400 font-medium ml-1">/month</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Up to 5 doctors</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Basic features</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 5 GB storage</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Email support</li>
            </ul>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-6 w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Edit className="w-3.5 h-3.5" /> Edit Plan
          </button>
        </div>

        {/* Tier 2: Standard (Popular) */}
        <div className="bg-white p-6 rounded-xl border-2 border-blue-600 shadow-sm flex flex-col justify-between relative">
          <span className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Popular
          </span>
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Standard</span>
            <div className="mt-2 flex items-baseline">
              <span className="text-3xl font-extrabold text-slate-900">₹2,999</span>
              <span className="text-xs text-slate-400 font-medium ml-1">/month</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Up to 20 doctors</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Advanced features</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 50 GB storage</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Priority support</li>
            </ul>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Edit className="w-3.5 h-3.5" /> Edit Plan
          </button>
        </div>

        {/* Tier 3: Premium */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Premium</span>
            <div className="mt-2 flex items-baseline">
              <span className="text-3xl font-extrabold text-slate-900">₹9,999</span>
              <span className="text-xs text-slate-400 font-medium ml-1">/month</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Unlimited doctors</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> All features included</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 500 GB storage</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 24/7 Priority support</li>
            </ul>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-6 w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Edit className="w-3.5 h-3.5" /> Edit Plan
          </button>
        </div>
      </div>

      {/* Feature Comparison Matrix Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Feature Comparison</h3>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" /> Create Plan
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4">Features</th>
                <th className="py-3 px-4">Basic</th>
                <th className="py-3 px-4">Standard</th>
                <th className="py-3 px-4">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-medium text-slate-800">Doctors Limit</td>
                <td className="py-3 px-4 text-slate-600">5</td>
                <td className="py-3 px-4 text-slate-600">20</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Create New Subscription Plan Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 border border-slate-100 space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Create New Subscription Plan</h3>
                <p className="text-xs text-slate-500 mt-0.5">Set up a new subscription plan with pricing and features for clinics.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Basic Information */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Basic Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Plan Name *</label>
                  <div className="relative">
                    <Layers className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input 
                      type="text" 
                      placeholder="e.g. Basic, Pro, Enterprise" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Plan Type</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none">
                    <option>Paid Plan</option>
                    <option>Free Trial</option>
                    <option>Custom Enterprise</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Pricing</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Price (INR) *</label>
                  <div className="relative">
                    <span className="text-slate-400 font-bold absolute left-3 top-2">₹</span>
                    <input 
                      type="text" 
                      placeholder="e.g. 999" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Billing Interval *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none">
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Annual</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Plan Limits */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Plan Limits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Doctors Limit *</label>
                  <input type="text" placeholder="e.g. 5" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                  <label className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-500"><input type="checkbox" /> Unlimited</label>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Storage Limit (GB) *</label>
                  <input type="text" placeholder="e.g. 5" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                  <label className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-500"><input type="checkbox" /> Unlimited</label>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Appointments/month *</label>
                  <input type="text" placeholder="e.g. 1000" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
                  <label className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-500"><input type="checkbox" /> Unlimited</label>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Included Features *</label>
                  <textarea 
                    rows={3}
                    placeholder="Enter features (one per line)&#10;e.g. Appointment booking&#10;Video consultation&#10;Lab management"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Excluded Features (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Enter excluded features (one per line)&#10;e.g. Advanced analytics&#10;API access&#10;White labeling"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Plan Status */}
            <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider">Plan Status</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-5 bg-blue-600 rounded-full p-0.5 cursor-pointer flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full shadow-xs" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Active</p>
                  <p className="text-[11px] text-slate-500">Make this plan available for clinics to subscribe.</p>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-colors"
              >
                Create Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

