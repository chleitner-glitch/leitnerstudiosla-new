"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const studios = [
  {
    id: 1,
    name: "Studio 1 - Unit 1112",
    image: "/gallery/studio-1.JPG",
    video: "/videos/studio-video.mov",
    description: "Bright modern daylight photography & video studio with high ceilings in DTLA.",
    size: "952 sq ft",
    features: "Abundant natural light, tall ceilings, white cyc wall option, versatile for photoshoots, video production, and brand campaigns.",
    status: "Available Now"
  },
  {
    id: 2,
    name: "Studio 2 - Coming Soon",
    image: "/gallery/studio-7.JPG",
    video: "",
    description: "Second creative space coming soon.",
    size: "TBA",
    features: "More details coming soon",
    status: "Coming Soon"
  },
  {
    id: 3,
    name: "Studio 3 - Coming Soon",
    image: "/gallery/studio-10.JPG",
    video: "",
    description: "Third studio coming soon.",
    size: "TBA",
    features: "More details coming soon",
    status: "Coming Soon"
  },
];

const studio1Photos = [
  "/gallery/studio-1.JPG", "/gallery/studio-2.JPG", "/gallery/studio-3.JPG",
  "/gallery/studio-4.JPG", "/gallery/studio-5.JPG", "/gallery/studio-6.JPG",
  "/gallery/studio-7.JPG", "/gallery/studio-8.JPG", "/gallery/studio-9.JPG",
  "/gallery/studio-10.JPG", "/gallery/studio-11.JPG", "/gallery/studio-12.JPG",
];

export default function StudioSection() {
  const [selectedStudio, setSelectedStudio] = useState<any>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const goToPrevious = () => setPhotoIndex((prev) => (prev === 0 ? studio1Photos.length - 1 : prev - 1));
  const goToNext = () => setPhotoIndex((prev) => (prev === studio1Photos.length - 1 ? 0 : prev + 1));

  return (
    <section id="studio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight">Our Studios</h2>
          <p className="text-xl text-gray-600 mt-4">Three unique creative spaces in DTLA</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studios.map((studio) => (
            <motion.div
              key={studio.id}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedStudio(studio)}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image src={studio.image} alt={studio.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">{studio.status}</div>
              </div>
              <h3 className="text-2xl font-light mt-6">{studio.name}</h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{studio.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Detail View - Feels like a new page */}
      {selectedStudio && (
        <div className="fixed inset-0 bg-white z-[100] overflow-auto">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <button
              onClick={() => setSelectedStudio(null)}
              className="mb-8 text-xl hover:text-gray-500 flex items-center gap-2"
            >
              ← Back to Studios
            </button>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Left: Video / Media */}
              <div className="relative aspect-video bg-black rounded-3xl overflow-hidden sticky top-8 self-start">
                {selectedStudio.video ? (
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={selectedStudio.video} type="video/quicktime" />
                  </video>
                ) : (
                  <Image src={selectedStudio.image} alt={selectedStudio.name} fill className="object-cover" />
                )}
              </div>

              {/* Right: Details */}
              <div>
                <h1 className="text-5xl font-light tracking-tight mb-6">{selectedStudio.name}</h1>
                <p className="text-2xl text-gray-600 mb-10">{selectedStudio.description}</p>

                <div className="space-y-10">
                  <div>
                    <p className="uppercase tracking-widest text-sm text-gray-500">Size</p>
                    <p className="text-4xl font-light">{selectedStudio.size}</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-widest text-sm text-gray-500">Features</p>
                    <p className="text-xl leading-relaxed">{selectedStudio.features}</p>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-16 w-full py-6 bg-black text-white rounded-2xl text-xl font-medium hover:bg-black/90"
                >
                  Book This Studio
                </button>
              </div>
            </div>

            {/* Gallery below for Studio 1 */}
            {selectedStudio.id === 1 && (
              <div className="mt-24">
                <h3 className="text-3xl font-light mb-10">More Photos</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {studio1Photos.map((src, index) => (
                    <div key={index} className="relative aspect-square rounded-3xl overflow-hidden">
                      <Image src={src} alt={`Photo ${index + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}