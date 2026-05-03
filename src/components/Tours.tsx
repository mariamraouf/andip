"use client";

import React from 'react';
import { Clock, Users, Star, ArrowUpRight } from 'lucide-react';

const tourData = [
  {
    title: "Everest Base Camp Trek",
    duration: "14 Days",
    groupSize: "2-12 People",
    rating: 4.9,
    price: "1,450",
    image: "dyad-media://media/bold-hummingbird-skid/.dyad/media/6730c12d6f42c755486a683582856ad6.png",
    tag: "Most Popular"
  },
  {
    title: "Annapurna Circuit Adventure",
    duration: "12 Days",
    groupSize: "1-10 People",
    rating: 4.8,
    price: "1,200",
    image: "dyad-media://media/bold-hummingbird-skid/.dyad/media/9083041f747f5a939168f5aca54f63d5.png",
    tag: "Best Views"
  },
  {
    title: "Kathmandu Cultural Tour",
    duration: "3 Days",
    groupSize: "Any",
    rating: 5.0,
    price: "350",
    image: "dyad-media://media/bold-hummingbird-skid/.dyad/media/7b640412daf5e630b293a2514d809e91.png",
    tag: "Spiritual"
  }
];

const Tours = () => {
  return (
    <section id="tours" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Adventure Awaits</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Popular Expeditions</h3>
          </div>
          <p className="text-slate-500 max-w-md">
            Carefully curated experiences designed to show you the very best of Nepal's nature and heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tourData.map((tour, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 uppercase tracking-wider">
                  {tour.tag}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-slate-900">{tour.rating}</span>
                  </div>
                  <div className="text-slate-400 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {tour.title}
                </h4>

                <div className="flex items-center gap-4 mb-8 text-slate-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Starting from</p>
                    <p className="text-2xl font-bold text-slate-900">${tour.price}</p>
                  </div>
                  <button className="bg-slate-900 text-white p-3 rounded-xl group-hover:bg-orange-600 transition-colors">
                    <ArrowUpRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;