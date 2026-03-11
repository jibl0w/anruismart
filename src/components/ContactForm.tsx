import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="w-full bg-[#f3f3f3]">
      {/* Header Section */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f386c] to-[#1c559d] z-0" />
        <Image
          src="/images/contact-header-bg.jpg"
          alt="Contact Header"
          fill
          className="object-cover opacity-20 z-0"
          priority
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-[#8ed955] leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-white max-w-2xl">
            Let’s Power What Matters to you, Together
          </p>
        </div>
      </div>

      {/* Main Content Container (Overlapping) */}
      <div className="container mx-auto px-6 md:px-[70px] -mt-32 md:-mt-48 relative z-20 pb-24 space-y-12">
        
        {/* Form and Image Card */}
        <div className="bg-white rounded-[24px] shadow-xl overflow-hidden flex flex-col lg:flex-row border-b-4 border-[#e0e0e0]">
          {/* Form Section */}
          <div className="flex-1 p-8 md:p-12 flex flex-col gap-8">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                Enter your Name <span className="text-red-500">*</span>
              </label>
              <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                Enter your Email <span className="text-red-500">*</span>
              </label>
              <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3">
                <input 
                  type="email" 
                  placeholder="Add Email Address" 
                  className="w-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans"
                />
              </div>
            </div>

            {/* Select Input */}
            <div className="space-y-2">
              <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                Select your product or solution <span className="text-red-500">*</span>
              </label>
              <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer relative">
                <select className="w-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans appearance-none z-10 cursor-pointer">
                  <option value="" disabled selected>Select</option>
                  <option value="smart-classroom">Smart Classroom</option>
                  <option value="multimedia">Multimedia Systems</option>
                  <option value="smart-campus">Smart Campus</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-0">
                  <Image src="/images/icon-select-arrow.svg" alt="v" width={24} height={24} />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                Tell us what you want <span className="text-red-500">*</span>
              </label>
              <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3 h-[142px] relative">
                <textarea 
                  placeholder="Your Message" 
                  className="w-full h-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans resize-none"
                />
                <div className="absolute bottom-2 right-2 pointer-events-none">
                   <Image src="/images/icon-resize.svg" alt="/" width={16} height={16} />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="bg-[#8ed955] text-white text-[18px] font-bold py-4 px-8 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-105 w-full sm:w-auto self-start">
              Contact Us
            </button>
          </div>

          {/* Side Image */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/contact-side-image.jpg"
              alt="Contact Side Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enquiries Card */}
          <div className="bg-white rounded-[16px] border-b-4 border-[#e0e0e0] p-8 md:p-12 flex flex-col gap-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative shrink-0">
                <Image src="/images/icon-enquiries.svg" alt="Enquiries" fill className="object-contain" />
              </div>
              <h3 className="text-3xl font-bold font-display text-[#1c559d]">Enquires</h3>
            </div>
            
            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#1d1a22] font-sans">
              Have a renewable energy project, partnership idea, technical enquiries or feed back. Our team is ready to collaborate on solar installations, EV infrastructure, or custom solutions that drive sustainable impact
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-[#8ed955] text-white font-bold py-3 px-6 rounded-lg border-b-4 border-[#265900] text-center">
                Call Us: +234 70 3266 6625
              </div>
              <div className="bg-[#fafafa] text-[#1d1a22] font-medium py-3 px-6 rounded-lg border-b-4 border-[#e0e0e0] text-center">
                Email us: info@anruistar.com
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-[16px] border-b-4 border-[#e0e0e0] p-8 md:p-12 flex flex-col gap-8 shadow-sm">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2f95ec] rounded-full flex items-center justify-center shrink-0">
                   <Image src="/images/icon-location.svg" alt="Location" width={28} height={28} />
                </div>
                <h3 className="text-3xl font-bold font-display text-[#1c559d]">Address</h3>
             </div>
             
             <p className="text-[18px] md:text-[21px] leading-relaxed text-[#1d1a22] font-sans">
               54 (14) Abayomi Akinmosa Crescent, Jericho, Ibadan, Nigeria.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
