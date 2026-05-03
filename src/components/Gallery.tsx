"use client";

import React from 'react';

const galleryImages = [
  {
    url: "dyad-media://media/bold-hummingbird-skid/.dyad/media/9083041f747f5a939168f5aca54f63d5.png",
    title: "Crystal Waterfalls",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    url: "dyad-media://media/bold-hummingbird-skid/.dyad/media/7b640412daf5e630b293a2514d809e91.png",
    title: "Sacred Temples",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "dyad-media://media/bold-hummingbird-skid/.dyad/media/bb7d317a760444cae06ada0f1301b70b.png",
    title: "Mountain Companions",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    url: "dyad-media://media/bold-hummingbird-skid/.dyad/media/6730c12d6f42c755486a683582856ad6.png",
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