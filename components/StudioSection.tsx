export default function StudioSection() {
  return (
    <section id="studio" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight mb-4">The Studio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bright Modern Daylight Photography & Video Studio with High Ceilings in DTLA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vertical Video - Premium Look */}
          <div className="relative aspect-[9/16] max-w-[380px] mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/studio-video.mov" type="video/quicktime" />
              <source src="/videos/studio-video.mp4" type="video/mp4" /> {/* fallback if you convert later */}
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light mb-4">952 sq ft of Perfect Light</h3>
              <p className="text-gray-600 leading-relaxed">
                Minimalist design, tall ceilings, abundant natural light — ideal for photoshoots, video production, brand campaigns, and content creation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>✓ Bright natural light & tall ceilings</div>
              <div>✓ White backdrop included</div>
              <div>✓ White designer couch & stone coffee table</div>
              <div>✓ Air conditioning</div>
              <div>✓ Stocked fridge</div>
              <div>✓ Restrooms + Breakout space</div>
              <div>✓ Wheelchair accessible</div>
              <div>✓ Optional lighting & backdrop add-ons</div>
            </div>

            <a href="#book" className="inline-block px-8 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Book This Studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}