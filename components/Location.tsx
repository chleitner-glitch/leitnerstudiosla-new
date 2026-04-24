export default function Location() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-light tracking-tight mb-8">Visit Us in DTLA</h2>
            <div className="space-y-6 text-lg">
              <div>
                <div className="font-medium">719 S Los Angeles St (or your exact address)</div>
                <div className="text-gray-600">Los Angeles, CA</div>
              </div>
              <div>
                <div className="font-medium">Parking</div>
                <div className="text-gray-600">Street parking + nearby lots</div>
              </div>
              <div>
                <div className="font-medium">Hours</div>
                <div className="text-gray-600">Available 7 days a week • Book in advance</div>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden">
            {/* Replace with real Google Maps embed later */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.123456789!2d-118.25!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAyJzU1LjAiTiAxMTjCsDE1JzAwLjAiVw!5e0!3m2!1sen!2sus!4v123456789" 
              className="w-full h-full"
              allowFullScreen 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}