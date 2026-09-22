import React from 'react';

export default function Pagination({ currentPage = 1, totalPages = 5, totalItems = 24, onPageChange }) {
  return (
    <div className="px-4 py-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 bg-slate-50/50 rounded-b-xl">
      <div>
        Showing <span className="font-semibold text-slate-700">1</span> item (1 row static preview mode) &bull; Page <span className="font-semibold text-slate-700">{currentPage}</span> of <span className="font-semibold text-slate-700">{totalPages}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <button 
          disabled={currentPage === 1}
          className="px-2.5 py-1 rounded-md border border-slate-200 bg-white font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              className={`w-7 h-7 rounded-md font-medium text-xs transition-colors ${
                page === currentPage
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {page}
            </button>
          );
        })}
        <button 
          className="px-2.5 py-1 rounded-md border border-slate-200 bg-white font-medium hover:bg-slate-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
