import React, { useState } from 'react';
import { MapPin, CalendarDays, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('Kandy Heritage');
  const [checkInDate, setCheckInDate] = useState('2026-06-15');
  const [checkOutDate, setCheckOutDate] = useState('2026-06-20');

  // Helper arrays for UI rendering
  const locations = ['Kandy Heritage', 'Hikkaduwa Beach'];
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  // A simple 30-day calendar array (placeholder for layout)
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <main className="relative flex flex-col justify-center min-h-[85vh] px-8 pt-24 overflow-hidden text-white bg-emerald-950 selection:bg-amber-600 selection:text-white">
      {/* Background Graphic Placeholder (Using subtle gradients & patterns) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/30 via-emerald-900 to-emerald-950 mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-2xl mt-12 md:mt-0 xl:ml-12">
        {/* Main Typography */}
        <h1 className="mb-4 text-5xl font-light leading-tight md:text-7xl font-serif">
          Welcome to <br />
          <span className="font-semibold text-amber-500">Sri Lankan</span>
        </h1>
        <p className="mb-10 text-lg font-light tracking-wide text-emerald-100 md:text-xl">
          Multi-chain Hotel Management System
        </p>

        {/* Floating Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl">
          <div className="flex items-center flex-1 w-full gap-4 px-4 border-r border-white/20">
            <span className="text-xs font-bold tracking-wider text-amber-500 uppercase shrink-0">Locations</span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-full whitespace-nowrap ${
                    selectedLocation === loc 
                      ? 'bg-amber-500 text-emerald-950 shadow-md' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  {loc}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center justify-center w-full px-8 py-4 font-bold tracking-wider text-emerald-950 transition-all bg-amber-500 rounded-full md:w-auto hover:bg-amber-400 group shrink-0">
            SEARCH
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* --- INTERACTIVE BOOKABLE CALENDAR CARD --- */}
      <div className="relative z-20 w-full max-w-sm mx-auto mt-12 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 xl:right-32 md:mt-0 md:mx-0">
        <div className="flex flex-col p-6 bg-white shadow-2xl rounded-3xl text-slate-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-emerald-950">Select Dates</h3>
              <p className="text-sm text-slate-500">{selectedLocation}</p>
            </div>
            <div className="p-2 rounded-full bg-emerald-50 text-emerald-700">
              <CalendarDays className="w-6 h-6" />
            </div>
          </div>

          {/* Calendar Controls */}
          <div className="flex items-center justify-between mb-4">
            <button className="p-1 transition-colors rounded-full hover:bg-slate-100"><ChevronLeft className="w-5 h-5" /></button>
            <span className="font-semibold text-slate-700">June 2026</span>
            <button className="p-1 transition-colors rounded-full hover:bg-slate-100"><ChevronRight className="w-5 h-5" /></button>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-xs font-bold text-center text-slate-400">{day}</div>
            ))}
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {calendarDays.map((day) => {
              const currentDateStr = `2026-06-${day.toString().padStart(2, '0')}`;
              const isCheckIn = currentDateStr === checkInDate;
              const isCheckOut = currentDateStr === checkOutDate;
              const isSelectedRange = day >= 15 && day <= 20;

              let dayClasses = "flex items-center justify-center h-10 text-sm font-medium rounded-full cursor-pointer transition-colors ";
              
              if (isCheckIn || isCheckOut) {
                dayClasses += "bg-emerald-800 text-white shadow-md";
              } else if (isSelectedRange) {
                dayClasses += "bg-emerald-100 text-emerald-900 rounded-none";
              } else {
                dayClasses += "text-slate-600 hover:bg-slate-100";
              }

              return (
                <div
                  key={day}
                  onClick={() => {
                    if (!checkInDate || (checkInDate && checkOutDate)) {
                      setCheckInDate(currentDateStr);
                      setCheckOutDate('');
                    } else {
                      setCheckOutDate(currentDateStr);
                    }
                  }}
                  className={dayClasses}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <button className="w-full py-4 text-sm font-bold tracking-wider text-center text-white transition-all shadow-lg rounded-xl bg-emerald-900 hover:bg-emerald-800 hover:shadow-xl active:scale-[0.98]">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
