import React from 'react';
import { Leaf, Heart, Award, ArrowRight, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-stone-50 min-h-screen text-slate-800 selection:bg-amber-600 selection:text-white">
      {/* ======================================= */}
      {/* HERO SECTION                            */}
      {/* ======================================= */}
      <section className="relative bg-emerald-950 pt-32 pb-24 px-8 overflow-hidden text-center text-white">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 font-bold tracking-widest text-xs uppercase mb-6 shadow-sm">
            <History className="w-4 h-4" />
            Our Legacy
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">
            Crafting Sri Lankan <span className="font-semibold text-amber-500">Sanctuaries</span>
          </h1>
          <p className="text-emerald-100/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Since our inception, Siyala has been dedicated to marrying the raw natural beauty and deep-rooted heritage of Sri Lanka with world-class hospitality.
          </p>
        </div>
      </section>

      {/* ======================================= */}
      {/* OUR PILLARS SECTION                    */}
      {/* ======================================= */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">The Siyala Philosophy</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Every sanctuary we build stands on three immutable values that form the core of our brand identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 bg-white border border-stone-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-all duration-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Cultural Heritage</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We design our structures to blend traditional Sri Lankan architecture—featuring high ceilings, columns, and central courtyards—with ultra-modern luxuries.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 bg-white border border-stone-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-all duration-300">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Tropical Sustainability</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              From reducing waste to preserving surrounding flora, we ensure Siyala resorts exist in perfect ecological harmony with the tropical Sri Lankan environment.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 bg-white border border-stone-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-all duration-300">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Genuine Island Warmth</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our signature style of service is rooted in traditional Sri Lankan hospitality: warm smiles, attention to detail, and a focus on wellness.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* COLLAGE & STORY                         */}
      {/* ======================================= */}
      <section className="py-20 bg-emerald-950 text-emerald-50 overflow-hidden">
        <div className="max-w-7xl px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">A Blend of Eras</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
              Honoring Sri Lankan <br />
              <span className="font-semibold text-amber-500">History and Architecture</span>
            </h2>
            <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed">
              Sri Lankan architecture has evolved over thousands of years, influenced by Buddhist philosophy, ancient kingdoms, and later colonial arrivals. 
            </p>
            <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed">
              At Siyala, we don't just build hotels; we create living galleries. We collaborate with local artisans to integrate traditional timber carvings, terracotta tile roofs, and beautiful masonry into all our resorts.
            </p>
          </div>

          {/* Visual Grid */}
          <div className="relative flex gap-6 items-center justify-center">
            {/* Background glowing gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl rounded-full"></div>
            
            <img 
              src="/sl_culture_1.png" 
              alt="Sri Lankan Traditional Dancer" 
              className="relative z-10 w-44 md:w-56 h-64 md:h-80 object-cover rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/10 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
            />
            <img 
              src="/sl_culture_2.png" 
              alt="Traditional Sri Lankan Craftsmanship" 
              className="relative z-10 w-48 md:w-60 h-56 md:h-72 object-cover rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-300 -ml-8 mt-12"
            />
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* TIMELINE SECTION                        */}
      {/* ======================================= */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">Our Journey</h2>
          <p className="text-slate-500 text-sm">Milestones that defined Siyala Hotels & Resorts</p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-stone-200 pl-8 space-y-12 ml-4 md:ml-8">
          {/* Point 1 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-amber-500 border-4 border-stone-50 flex items-center justify-center"></span>
            <span className="text-xs font-bold text-amber-600 tracking-wider">2015</span>
            <h3 className="text-lg font-bold text-emerald-950 mt-1">Founding Siyala Kandy Heritage</h3>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              We opened our first sanctuary high up in the misty valleys of Kandy, featuring 32 luxury suites built in traditional Kandyan architectural style.
            </p>
          </div>

          {/* Point 2 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-amber-500 border-4 border-stone-50 flex items-center justify-center"></span>
            <span className="text-xs font-bold text-amber-600 tracking-wider">2019</span>
            <h3 className="text-lg font-bold text-emerald-950 mt-1">Expanding to Hikkaduwa Oceanfront</h3>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              Following the success in the hills, Siyala brought its luxury brand to the southern shores, launching a premium beachside sanctuary in Hikkaduwa.
            </p>
          </div>

          {/* Point 3 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-amber-500 border-4 border-stone-50 flex items-center justify-center"></span>
            <span className="text-xs font-bold text-amber-600 tracking-wider">2026</span>
            <h3 className="text-lg font-bold text-emerald-950 mt-1">Integrated Siyala HMS Launch</h3>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              Embracing technology to elevate guest experiences, we built the custom Siyala HMS digital platform to manage unified guest services across all chains.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* CTA SECTION                             */}
      {/* ======================================= */}
      <section className="pb-24 px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-amber-100 flex flex-col md:flex-row items-center justify-between p-12 md:p-16 shadow-md border border-amber-200">
          <div className="relative z-10 max-w-xl mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-3">Begin Your Experience</h2>
            <p className="text-emerald-900/80">
              Browse our diverse locations and let us plan the ultimate tropical getaway.
            </p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-emerald-950 text-amber-400 font-bold tracking-widest uppercase rounded-full shadow-lg hover:bg-emerald-900 hover:scale-105 transition-all group"
            >
              Browse Destinations
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
