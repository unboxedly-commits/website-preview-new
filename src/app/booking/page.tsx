"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, ChevronLeft, ChevronRight, Globe, CheckCircle2, User } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
    }
  };

  return (
    <main className="relative bg-[#050510] min-h-screen text-white overflow-hidden pb-20">
      <Navbar />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-32 min-h-screen">
        
        <Link href="/audit" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
          <ChevronLeft size={16} />
          <span className="text-sm font-mono tracking-widest uppercase">Back to Audit</span>
        </Link>

        {!isBooked ? (
          <div className="flex flex-col lg:flex-row gap-8 bg-[#0a0f1c] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            {/* Left Info Panel */}
            <div className="w-full lg:w-1/3 bg-white/5 p-8 border-r border-white/10 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <Video size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Strategy & Audit Review</h2>
              <p className="text-white/50 mb-8">45 min • Video Call</p>

              <div className="space-y-6 flex-1">
                <p className="text-white/70 text-sm leading-relaxed">
                  We'll review the vulnerabilities found in your funnel and demonstrate exactly how J.A.R.V.I.S. can automate your lead generation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <User size={16} className="text-blue-400" /> 1-on-1 with a ZevenBots Architect
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Globe size={16} className="text-blue-400" /> Web conferencing details provided upon confirmation.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Panel */}
            <div className="w-full lg:w-2/3 p-8">
              <h3 className="text-xl font-bold mb-6">Select a Date & Time</h3>
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Calendar View */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <button className="p-2 hover:bg-white/5 rounded-full"><ChevronLeft size={20} /></button>
                    <span className="font-bold">August 2026</span>
                    <button className="p-2 hover:bg-white/5 rounded-full"><ChevronRight size={20} /></button>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-xs text-white/50 mb-2 font-mono">
                    <div>SU</div><div>MO</div><div>TU</div><div>WE</div><div>TH</div><div>FR</div><div>SA</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {/* Dummy calendar days */}
                    {Array.from({ length: 31 }).map((_, i) => {
                      const day = i + 1;
                      const isPast = day < 15;
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={i}
                          disabled={isPast}
                          onClick={() => setSelectedDate(day)}
                          className={`aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                            isPast ? 'text-white/20 cursor-not-allowed' : 
                            isSelected ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 
                            'bg-white/5 hover:bg-white/10 text-white/80'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="w-full md:w-48 flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-white/60 mb-2">Available Times</h4>
                  {selectedDate ? (
                    <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`w-full py-3 rounded-lg text-sm font-bold transition-all border ${
                            selectedTime === time 
                              ? 'bg-blue-500/20 border-blue-500 text-blue-400' 
                              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/30'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/30 text-sm text-center border border-dashed border-white/10 rounded-xl p-4">
                      Select a date to see available times.
                    </div>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-sm text-white/60">
                  {selectedDate && selectedTime ? (
                    <span className="flex items-center gap-2 text-white font-medium">
                      <Calendar size={14} className="text-blue-400" /> Aug {selectedDate}, 2026 at {selectedTime}
                    </span>
                  ) : (
                    "Please select a date and time."
                  )}
                </div>
                
                <button
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${
                    selectedDate && selectedTime 
                      ? 'bg-white text-black hover:scale-105 active:scale-95' 
                      : 'bg-white/10 text-white/30 cursor-not-allowed'
                  }`}
                >
                  Confirm Booking
                </button>
              </div>

            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-[#0a0f1c] border border-blue-500/30 rounded-3xl p-12 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)]"
          >
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-extrabold mb-4">Booking Confirmed!</h2>
            <p className="text-white/60 text-lg mb-8">
              You are scheduled for <strong className="text-white">Aug {selectedDate}, 2026 at {selectedTime}</strong>. We've sent a calendar invitation with the meeting link to your email.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors">
                Return to Home
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
