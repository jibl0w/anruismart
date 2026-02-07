export default function StrategicAdvantages() {
  return (
    <section className="bg-[#8ed955] py-16 md:py-24 px-6 md:px-[70px] relative overflow-hidden">
      {/* CSS Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="mx-auto relative z-10 flex flex-col items-center gap-12 md:gap-16">
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold font-display text-white drop-shadow-sm">
            Partners & Strategic Advantages
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
            Leveraging 30+ Years Of High-Tech Enterprise Specialization With Drawel-Tenfly
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-[#265900]/60 backdrop-blur-sm border-b-4 border-[#265900] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center text-white gap-2 transition-transform hover:-translate-y-1">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">8</h3>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Production Line</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#265900]/60 backdrop-blur-sm border-b-4 border-[#265900] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center text-white gap-2 transition-transform hover:-translate-y-1">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">5+ Million</h3>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Unit Annual Capacity</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#265900]/60 backdrop-blur-sm border-b-4 border-[#265900] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center text-white gap-2 transition-transform hover:-translate-y-1">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">100+</h3>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Patent Granted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
