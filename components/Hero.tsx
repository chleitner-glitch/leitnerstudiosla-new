"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      >
        <source src="https://assets.mixkit.co/videos/preview/754/754-small.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Bigger Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <img 
            src="/logowhite.JPG" 
            alt="Leitner Studios LA" 
            className="mx-auto max-h-40 w-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Your New Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-white/90 font-light tracking-wide mb-12"
        >
          Daylight Studio in DTLA.<br />Rentable. Collaborative.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-14 py-6 bg-white text-black rounded-3xl text-xl font-medium tracking-wide hover:bg-white/90 transition-all shadow-2xl"
        >
          Book Your Session
        </motion.button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center z-10">
        Scroll to explore
        <div className="w-px h-10 bg-white/40 mt-3 animate-bounce" />
      </div>
    </section>
  );
}