"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/gallery/studio-1.JPG",
  "/gallery/studio-2.JPG",
  "/gallery/studio-3.JPG",
  "/gallery/studio-4.JPG",
  "/gallery/studio-5.JPG",
  "/gallery/studio-6.JPG",
  "/gallery/studio-7.JPG",
  "/gallery/studio-8.JPG",
  "/gallery/studio-9.JPG",
  "/gallery/studio-10.JPG",
  "/gallery/studio-11.JPG",
  "/gallery/studio-12.JPG",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight">The Studio</h2>
          <p className="text-xl text-gray-600 mt-4">Bright daylight. Endless possibilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer group shadow-md"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={src}
                alt={`Studio view ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elegant Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            
            {/* Left Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-6 text-white/70 hover:text-white text-5xl p-4 transition-all"
            >
              ←
            </button>

            <Image
              src={galleryImages[selectedIndex]}
              alt="Enlarged studio view"
              width={1200}
              height={800}
              className="rounded-3xl object-contain max-h-[85vh]"
            />

            {/* Right Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 text-white/70 hover:text-white text-5xl p-4 transition-all"
            >
              →
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl p-4"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}