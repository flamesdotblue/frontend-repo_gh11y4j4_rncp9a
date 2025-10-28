import React from 'react';
import { Shoe, ShoppingCart, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Shoe size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight">Stride</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#new" className="hover:text-blue-600 transition-colors">New Arrivals</a>
            <a href="#men" className="hover:text-blue-600 transition-colors">Men</a>
            <a href="#women" className="hover:text-blue-600 transition-colors">Women</a>
            <a href="#sale" className="hover:text-blue-600 transition-colors">Sale</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:border-slate-300 hover:bg-slate-50">
              <Search size={18} />
              <span className="hidden md:inline">Search</span>
            </button>
            <button className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">2</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
