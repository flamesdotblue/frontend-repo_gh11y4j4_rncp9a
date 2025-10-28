import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">About</h3>
            <p className="mt-2 text-sm text-slate-600">Stride crafts performance footwear that blends innovation, comfort, and design for every run.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Support</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#">Help Center</a></li>
              <li><a className="hover:text-slate-900" href="#">Returns</a></li>
              <li><a className="hover:text-slate-900" href="#">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#">About us</a></li>
              <li><a className="hover:text-slate-900" href="#">Careers</a></li>
              <li><a className="hover:text-slate-900" href="#">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Stay in the loop</h3>
            <form className="mt-2 flex gap-2">
              <input type="email" required placeholder="Email address" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Subscribe</button>
            </form>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-slate-900"><Facebook size={18} /></a>
              <a href="#" aria-label="Email" className="hover:text-slate-900"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Stride. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
