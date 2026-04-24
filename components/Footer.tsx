export default function Footer() {
  return (
    <footer className="bg-black text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-2xl font-light tracking-tight mb-8 text-white">Leitner Studios LA</div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm mb-12">
          <a href="#studio" className="hover:text-white transition">Studio</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#book" className="hover:text-white transition">Book</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="https://www.instagram.com/leitnerstudiosla" target="_blank" className="hover:text-white transition">@leitnerstudiosla</a>
        </div>

        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Leitner Studios LA • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}