"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingSection() {
  const [date, setDate] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [duration, setDuration] = useState(2);

  // Demo booked times (replace with real Google Calendar later)
  const bookedTimes = new Set(["10:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"]);

  const timeSlots = Array.from({ length: 26 }, (_, i) => {
    const hour24 = 8 + Math.floor(i / 2);
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    const ampm = hour24 < 12 ? "AM" : "PM";
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hour12}:${minutes} ${ampm}`;
  });

  const price = duration * 50;

  const getHighlightedSlots = () => {
    if (!selectedStartTime) return new Set<string>();
    const startIndex = timeSlots.indexOf(selectedStartTime);
    if (startIndex === -1) return new Set<string>();

    const slotsNeeded = duration * 2;
    const highlighted = new Set<string>();

    for (let i = 0; i < slotsNeeded; i++) {
      const slot = timeSlots[startIndex + i];
      if (slot) highlighted.add(slot);
    }
    return highlighted;
  };

  const highlightedSlots = getHighlightedSlots();

  const handleTimeClick = (time: string) => {
    if (bookedTimes.has(time)) return;
    setSelectedStartTime(time);
  };

  const handleBook = () => {
    if (!date || !selectedStartTime) {
      alert("Please select a date and start time");
      return;
    }
    alert(`Booking confirmed!\n\nDate: ${date}\nStart: ${selectedStartTime}\nDuration: ${duration} hours\nTotal: $${price}`);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-light tracking-tight">Book the Studio</h2>
          <p className="text-gray-600 mt-2">$50/hour • 2h minimum</p>
        </div>

        <div className="bg-studio-bg rounded-3xl p-8 shadow-2xl">
          
          {/* Date */}
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-widest mb-2">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-black text-base"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Duration */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-3">
              <span>Duration</span>
              <span className="font-medium">{duration} hours — ${price}</span>
            </div>
            <input
              type="range"
              min="2"
              max="8"
              step="0.5"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />
          </div>

          {/* Time Slots */}
          <div className="mb-10">
            <label className="block text-xs uppercase tracking-widest mb-4">Start Time</label>
            <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-2">
              {timeSlots.map((time) => {
                const isBooked = bookedTimes.has(time);
                const isHighlighted = highlightedSlots.has(time);

                return (
                  <motion.button
                    key={time}
                    whileHover={{ scale: isBooked ? 1 : 1.04 }}
                    whileTap={{ scale: isBooked ? 1 : 0.96 }}
                    onClick={() => handleTimeClick(time)}
                    disabled={isBooked}
                    className={`p-3.5 rounded-2xl text-sm font-medium transition-all border ${
                      isBooked
                        ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through"
                        : isHighlighted || selectedStartTime === time
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-200 hover:border-black"
                    }`}
                  >
                    {time}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Confirm Button */}
          <motion.button
            onClick={handleBook}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={!date || !selectedStartTime}
            className="w-full py-5 bg-black text-white rounded-2xl text-base font-medium disabled:bg-gray-300"
          >
            Confirm Booking — ${price}
          </motion.button>
        </div>
      </div>
    </section>
  );
}