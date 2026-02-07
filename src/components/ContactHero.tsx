import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[608px] overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f386c] to-[#1c559d] z-10 opacity-90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f386c]/80 to-[#1c559d]/80 z-20" /> {/* Adjusting overlay to match design */}
        <Image
          src="/images/contact-hero-bg.jpg"
          alt="Contact Hero Background"
          fill
          className="object-cover z-0"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-[56px] font-bold font-display text-[#8ed955] leading-tight tracking-[-1.12px]">
            Contact Us
          </h1>
          <p className="text-lg md:text-[21px] font-medium text-white font-sans">
            Let’s Power What Matters to you, Together
          </p>
        </div>
      </div>
    </section>
  );
}
