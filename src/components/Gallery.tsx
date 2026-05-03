"use client";

import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1000",
    title: "Himalayan Peaks",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000",
    title: "Sacred Temples",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000",
    title: "Mountain Trails",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1526718583451-e88ebf18734e?auto=format&fit=crop&q=80&w=1000",
    title: "Glacial Lakes",
    span: "md:col-span-1 md:row-span-1"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Visual Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Moments from the Trail</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A glimpse into the breathtaking landscapes and spiritual encounters we experience on our tours.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
            </motion.div>
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