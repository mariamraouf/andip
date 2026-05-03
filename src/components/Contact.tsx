"use client";

import React from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-orange-600 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Ready to start your <br /> Nepal adventure?
              </h2>
              <p className="text-orange-100 text-lg mb-12 leading-relaxed">
                Whether you have a specific trek in mind or need help planning your first trip to Nepal, I'm here to help. Send me a message and let's make it happen!
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-orange-200 text-sm font-medium uppercase">Email Me</p>
                    <p className="text-xl font-bold">hello@andipnepal.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-orange-200 text-sm font-medium uppercase">WhatsApp</p>
                    <p className="text-xl font-bold">+977 98XXXXXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Interested In</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none">
                    <option>Everest Base Camp</option>
                    <option>Annapurna Circuit</option>
                    <option>Kathmandu Cultural Tour</option>
                    <option>Custom Adventure</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your dream trip..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all"
                  ></textarea>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-200">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;