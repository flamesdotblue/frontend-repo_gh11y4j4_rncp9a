import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <Rocket size={14} /> New Drop
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Elevate Your Run with Stride Pro X
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 text-lg">
              Ultra-light cushioning, breathable mesh, and responsive energy return. Built for speed, designed for style.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm shadow-blue-600/20 hover:bg-blue-700">
                Shop Now
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                Learn More
              </a>
              <div className="ml-2 inline-flex items-center text-sm text-slate-600">
                <Star className="text-amber-400 fill-amber-400" size={18} />
                <Star className="text-amber-400 fill-amber-400" size={18} />
                <Star className="text-amber-400 fill-amber-400" size={18} />
                <Star className="text-amber-400 fill-amber-400" size={18} />
                <Star className="text-amber-400 fill-amber-400" size={18} />
                <span className="ml-2">4.9/5 from 2,341 runners</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-xl">
              <div className="h-full w-full rounded-[22px] bg-white p-6 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 rotate-12 rounded-[30px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-2xl" />
                  <img
                    alt="Featured running shoe"
                    className="relative z-10 w-[520px] max-w-full drop-shadow-2xl"
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
