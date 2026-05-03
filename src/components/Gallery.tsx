"use client";

import React from 'react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    title: "Mountain Peaks",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1526716173434-a2b561c6e8e1?q=80&w=1974&auto=format&fit=crop",
    title: "Sacred Temples",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1974&auto=format&fit=crop",
    title: "Local Life",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1585016495481-91613a3f583d?q=80&w=2070&auto=format&fit=crop",
    title: "Glacial Lakes",
    span: "md:col-span-1 md:row-span-1"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Visual Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Moments from the Trail</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A glimpse into the breathtaking landscapes and spiritual encounters we experience on our tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-3xl ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-xl font-bold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://instagram.com/__andip__" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors"
          >
            View more on Instagram @__andip__
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;