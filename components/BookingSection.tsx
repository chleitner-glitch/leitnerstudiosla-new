"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingSection() {
  const [date, setDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [duration, setDuration] = useState(2);

  const timeSlots = Array.from({ length: 25 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8;
    const min = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, '0')}:${min}`;
  });

  return (
    <section id="book" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-light tracking-tight mb-4">Book the Studio</h2>
        <p className="text-xl text-gray-600 mb-16">$50 per hour • 2 hour minimum</p>

        <div className="bg-studio-bg rounded-3xl p-12 shadow-xl">
          {/* Date */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Select Date</p>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                setDate(e.target.value);
                setSelectedSlot("");
              }}
              className="w-full max-w-xs mx-auto block bg-white border border-gray-200 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-black"
            />
          </div>

          {/* Time Slots */}
          {date && (
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                Select Start Time — {date}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSlot(time)}
                    className={`py-5 rounded-2xl text-sm font-medium transition-all border ${
                      selectedSlot === time 
                        ? "bg-black text-white border-black" 
                        : "bg-white border-gray-200 hover:bg-emerald-50 hover:border-emerald-200"
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Duration */}
          {selectedSlot && (
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Duration (2 hour minimum)</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {[2, 3, 4, 5, 6, 7, 8].map((hours) => (
                  <motion.button
                    key={hours}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDuration(hours)}
                    className={`px-8 py-4 rounded-2xl text-sm font-medium transition-all ${
                      duration === hours 
                        ? "bg-black text-white" 
                        : "bg-white border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {hours} hours — ${50 * hours}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Pay to Book Button */}
          {selectedSlot && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-black text-white rounded-3xl text-lg font-medium tracking-wide"
              onClick={() => alert(`Payment required to secure:\n${date} at ${selectedSlot} for ${duration} hours\n\nTotal: $${50 * duration}\n\nYou will be redirected to secure payment.`)}
            >
              Pay ${50 * duration} to Reserve
            </motion.button>
          )}

          <p className="text-xs text-gray-500 mt-8">
            Secure payment required to confirm booking • Synced with Google Calendar
          </p>
        </div>
      </div>
    </section>
  );
}