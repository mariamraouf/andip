"use client";

import React from 'react';
import { Mountain, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Mountain className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold tracking-tighter text-slate-900">
                ANDIP NEPAL
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Professional mountain guide and cultural expert based in Kathmandu. Dedicated to providing authentic, safe, and unforgettable Himalayan experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md hover:text-orange-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md hover:text-orange-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md hover:text-orange-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-500 hover:text-orange-600 transition-colors">About Andip</a></li>
              <li><a href="#tours" className="text-slate-500 hover:text-orange-600 transition-colors">Tour Packages</a></li>
              <li><a href="#gallery" className="text-slate-500 hover:text-orange-600 transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-orange-600 transition-colors">Contact & Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Andip Nepal Adventures. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Designed for the spirit of adventure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;