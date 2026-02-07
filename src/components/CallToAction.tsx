export default function CallToAction() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#2f95ec] to-[#1c559d]">
      {/* CSS Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="mx-auto px-6 md:px-[70px] relative z-10 flex flex-col items-center text-center gap-8 md:gap-10">
        <div className="space-y-4 md:space-y-6 max-w-4xl text-center items-center flex flex-col">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
            Transform The Way Learning And Collaboration Happen
          </h2>
          <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
            Let’s build smarter classrooms and multimedia experiences that create lasting impact
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button className="bg-[#8ed955] text-white text-lg font-bold py-4 px-10 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-105 hover:shadow-lg w-full sm:w-auto">
            Contact Us
          </button>
          <button className="bg-white text-[#265900] text-lg font-bold py-4 px-10 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:bg-gray-50 hover:shadow-lg w-full sm:w-auto">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}
