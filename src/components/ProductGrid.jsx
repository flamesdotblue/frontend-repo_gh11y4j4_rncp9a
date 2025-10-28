import React from 'react';
import { Star, Truck, ShieldCheck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Stride Pro X',
    price: 149.0,
    color: 'Midnight Blue',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Stride Air Lite',
    price: 129.0,
    color: 'Cloud White',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Stride Trail Max',
    price: 159.0,
    color: 'Forest Green',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Stride Everyday',
    price: 99.0,
    color: 'Charcoal',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1600&auto=format&fit=crop',
    rating: 4.6,
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Best Sellers</h2>
            <p className="mt-2 text-slate-600">Hand-picked favorites loved by runners worldwide.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-600">
            <Badge><Truck size={14} className="mr-1" /> Free shipping</Badge>
            <Badge><ShieldCheck size={14} className="mr-1" /> 30-day returns</Badge>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.name} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute left-3 top-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  <Star size={12} className="text-amber-400 fill-amber-400 mr-1" /> {p.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.color}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">${p.price.toFixed(2)}</span>
                  <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-white text-sm font-semibold hover:bg-slate-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
