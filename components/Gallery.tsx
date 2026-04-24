"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  "/gallery/studio-1.jpg",
  "/gallery/studio-2.jpg",
  "/gallery/studio-3.jpg",
  "/gallery/studio-4.jpg",
  "/gallery/studio-5.jpg",
  "/gallery/studio-6.jpg",
  "/gallery/studio-7.jpg",
  "/gallery/studio-8.jpg",
  "/gallery/studio-9.jpg",
  "/gallery/studio-10.jpg",
  "/gallery/studio-11.jpg",
  "/gallery/studio-12.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-studio-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">Natural light • Clean space • Ready for your vision</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Studio shot ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            More photos & reels on our Instagram <span className="font-medium">@leitnerstudiosla</span>
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-gray-100"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}