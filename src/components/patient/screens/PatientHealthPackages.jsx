import React from 'react';
import { Package, Check, ArrowRight } from 'lucide-react';
import Pagination from '../Pagination';

export default function PatientHealthPackages() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">Curated Health Check-up Packages</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">1 Package Row Static Preview</span>
        </div>
        <div className="p-4">
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded">Popular</span>
                <h4 className="text-sm font-bold text-slate-800">Executive Health Check-up</h4>
              </div>
              <p className="text-xs text-slate-500">Includes 60+ vital tests: Blood Sugar, Lipid Profile, Thyroid, Kidney & Liver Function Test</p>
              <p className="text-lg font-extrabold text-blue-600">₹3,999 <span className="text-xs text-slate-400 font-normal line-through">₹5,999</span></p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs whitespace-nowrap">
              Book Package Now
            </button>
          </div>
        </div>
        <Pagination currentPage={1} totalPages={3} totalItems={9} />
      </div>
    </div>
  );
}
