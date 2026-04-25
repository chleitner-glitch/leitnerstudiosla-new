"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src="/logowhite.JPG"
          alt="Leitner Studios"
          fill
          className="object-contain scale-[1.2]"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
          className="mb-8"
        >
          <Image
            src="/logowhite.JPG"
            alt="Leitner Studios"
            width={280}
            height={95}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        <div className="space-y-3 mb-16">
          <motion.p 
            className="text-3xl md:text-[42px] font-light text-white tracking-wide"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Daylight Studio in DTLA.
          </motion.p>

          <motion.p 
            className="text-3xl md:text-[42px] font-light text-white/90 tracking-wide"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Rentable. Collaborative.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <a
            href="#booking"
            className="inline-block px-10 py-4 border border-white/70 text-white rounded-full text-base font-light hover:bg-white/10 hover:border-white transition-all"
          >
            Book Your Session
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[3px]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        SCROLL TO EXPLORE
      </motion.div>
    </div>
  );
}