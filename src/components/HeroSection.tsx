import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white text-[#48464c] font-sans selection:bg-[#1c559d] selection:text-white relative overflow-hidden">
      {/* Global Dotted Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#48464c 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      ></div>

      <Header />

      {/* Hero Section Container */}
      <main className="mx-auto px-6 md:px-[70px] pb-20 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left pt-32 lg:pt-[290px] w-full">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold font-display text-[#1c559d] leading-[1.2] lg:leading-[56px] tracking-tight lg:tracking-[-0.96px] max-w-full lg:max-w-[565px] mx-auto lg:mx-0">
            Redefining Smart Education & Multimedia Experiences in Africa
          </h1>
          
          <p className="mt-6 text-[18px] lg:text-[21px] font-normal leading-[1.5] lg:leading-[32px] tracking-[-0.42px] text-[#1D1A22] text-justify max-w-full lg:max-w-[565px] font-sans mx-auto lg:mx-0">
            AnruiStar Smart Technologies Limited delivers world-class smart classroom, multimedia, and collaboration solutions—combining global engineering excellence with deep local insight to transform how people teach, learn, and collaborate
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#8ed955] text-white text-[16px] md:text-[18px] font-bold py-4 md:py-[17px] px-8 md:px-[32px] rounded-[12px] border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all text-center hover:brightness-105"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto bg-white text-[#1c559d] text-[16px] md:text-[18px] font-bold py-4 md:py-[17px] px-8 md:px-[32px] rounded-[12px] border border-[#1c559d] border-b-4 active:border-b active:translate-y-1 transition-all text-center hover:bg-gray-50"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Right Content - Image Grid */}
        <div className="flex-1 relative w-full max-w-[600px] lg:max-w-[710px] pt-10 lg:pt-[223px]">
           {/* Green Depth Ellipse */}
           <div className="absolute top-10 lg:top-[223px] left-0 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] lg:w-[98px] lg:h-[98px] bg-[#8ed955] rounded-full border-b-[6px] lg:border-b-[8px] border-[#265900] z-0 hidden md:block"></div>
           
           {/* Image Grid */}
           <div className="relative z-10 space-y-[10px] lg:space-y-[15px]">
              <div className="relative h-[240px] md:h-[320px] w-full rounded-[16px] overflow-hidden border-b-[5px] border-[#001c3f]">
                <Image
                  src="/images/hero-main.png"
                  alt="Smart Education Presentation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="flex gap-[10px] lg:gap-[13px]">
                <div className="relative h-[140px] md:h-[258px] w-1/2 rounded-[16px] overflow-hidden border-b-[5px] border-[#001c3f]">
                  <div className="absolute inset-0 bg-[#99ea5c]/20 z-10 pointer-events-none"></div>
                  <Image
                    src="/images/hero-camera.jpg"
                    alt="Multimedia Camera Equipment"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[140px] md:h-[258px] w-1/2 rounded-[16px] overflow-hidden border-b-[5px] border-black">
                   <Image
                    src="/images/hero-screen.jpg"
                    alt="Smart Screen Projection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
           </div>

           {/* Blue Depth Ellipse */}
           <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[72px] h-[72px] lg:w-[98px] lg:h-[98px] bg-[#1c559d] rounded-full border-b-[6px] lg:border-b-[8px] border-[#001c3f] z-0 hidden md:block"></div>
        </div>
      </main>
    </div>
  );
}
