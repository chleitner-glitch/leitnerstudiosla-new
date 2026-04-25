"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-light tracking-tight text-black">
            Leitner Studios
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-black">
          <a href="#studio" className="hover:text-black/70 transition-colors">Studio</a>
          <a href="#gallery" className="hover:text-black/70 transition-colors">Gallery</a>
          <button 
            onClick={scrollToBooking}
            className="hover:text-black/70 transition-colors"
          >
            Book
          </button>
          <a href="#reviews" className="hover:text-black/70 transition-colors">Reviews</a>
        </div>

        {/* Book Now Button */}
        <motion.button
          onClick={scrollToBooking}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all"
        >
          Book Now
        </motion.button>
      </div>
    </nav>
  );
}