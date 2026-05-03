"use client";

import React from 'react';
import { Instagram, CheckCircle2, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1974&auto=format&fit=crop" 
                alt="Andip in the mountains" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Award className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Experience</p>
                  <p className="text-lg font-bold text-slate-900">10+ Years</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Your Local Guide</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Namaste, I'm Andip.
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              I was born and raised in the shadows of the Himalayas. For over a decade, I've been sharing the magic of my homeland with travelers from all over the world. My mission is to provide more than just a tour—I want to give you a deep, authentic connection to the culture, people, and landscapes of Nepal.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Certified Professional Mountain Guide",
                "Expert in Cultural & Spiritual Tours",
                "Fluent in English, Nepali, and Hindi",
                "Customized Itineraries for All Levels"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://instagram.com/__andip__" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              >
                <Instagram className="w-5 h-5" />
                @__andip__
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  <span className="text-slate-900 font-bold">500+</span> Happy Travelers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;