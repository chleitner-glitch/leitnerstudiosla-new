"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.jpg" 
            alt="Leitner Studios LA" 
            width={160} 
            height={48}
            className="h-10 w-auto"
            priority
          />
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#studio" className="hover:text-studio-accent transition-colors">Studio</a>
          <a href="#gallery" className="hover:text-studio-accent transition-colors">Gallery</a>
          <a href="#book" className="hover:text-studio-accent transition-colors">Book</a>
          <a href="#reviews" className="hover:text-studio-accent transition-colors">Reviews</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium"
          onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Now
        </motion.button>
      </div>
    </nav>
  );
}export default Navbar;