"use client";

import Image from "next/image";
import { useState } from "react";

const objectives = [
  {
    title: "Transform Learning & Collaboration",
    content: "Provide smart, interactive solutions that enhance teaching, learning, and communication.",
  },
  {
    title: "Drive Local Innovation",
    content: "Leveraging local talent and resources to create sustainable technological advancements tailored for the African market.",
  },
  {
    title: "Enable Sustainable Digital Growth",
    content: "Building infrastructure that supports long-term digital adoption and economic development across the continent.",
  },
  {
    title: "Quality First. Lasting Impact.",
    content: "Delivering durable, high-performance solutions that create measurable positive outcomes for our partners and communities.",
  },
];

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-[70px] text-[#1D1A22]">
      <div className="mx-auto space-y-16 md:space-y-24">
        {/* Introduction */}
        <div className="space-y-6 md:space-y-8 w-full text-justify">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#1c559d] text-left">
            About AnruiStar Smart technologies
          </h2>
          <div className="space-y-4 md:space-y-6 text-[18px] lg:text-[21px] font-normal leading-[1.5] lg:leading-[32px] tracking-[-0.42px] font-sans">
            <p>
              We bring advanced classroom and multimedia technology to Africa. We design, supply, install, and support integrated smart classroom systems, interactive displays, recording and broadcasting solutions, and tailored multimedia environments that empower institutions, organisations, and individuals to teach, learn, and collaborate more effectively.
            </p>
            <p>
              By combining global technical expertise with strong local market knowledge, we deliver solutions engineered for real-world African environments. Our technical partner provides manufacturing expertise and product innovation while we lead market strategy, customer engagement, and local operations. Together we operate assembly and R&D labs in Nigeria to adapt, test, and refine products for local needs and to accelerate delivery and service.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="bg-[#f3f3f3] p-8 md:p-10 rounded-2xl border border-[#e0e0e0] flex flex-col gap-6 md:gap-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 bg-[#2f95ec] rounded-full p-3 flex items-center justify-center">
               <Image src="/images/mission-icon-v2.svg" alt="Mission Icon" width={32} height={32} className="object-contain" />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-[#1c559d]">Our Mission</h3>
              <p className="text-[16px] lg:text-[18px] leading-relaxed text-justify">
                We are committed to delivering world-class digital and multimedia solutions that empower institutions, businesses, and individuals. By combining global technical expertise with local market knowledge, we provide smart technologies that transform classrooms, workplaces, and communities.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#f3f3f3] p-8 md:p-10 rounded-2xl border border-[#e0e0e0] flex flex-col gap-6 md:gap-8 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 bg-[#2f95ec] rounded-full p-3 flex items-center justify-center">
               <Image src="/images/vision-icon-v2.svg" alt="Vision Icon" width={32} height={32} className="object-contain" />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-[#1c559d]">Our Vision</h3>
              <p className="text-[16px] lg:text-[18px] leading-relaxed text-justify">
                To redefine education and multimedia experiences in Africa by creating smart, interactive, and innovative environments that inspire learning, collaboration, and creativity.
              </p>
            </div>
          </div>

          {/* Strategic Partners Card */}
          <div className="bg-[#1c559d] p-8 md:p-10 rounded-2xl border border-[#001c3f] flex flex-col gap-6 md:gap-8 text-white shadow-lg">
             <div className="bg-[#2f95ec] rounded-lg p-2 flex items-center gap-2 self-start">
               <div className="relative w-20 h-8 md:w-24 md:h-10 bg-white rounded px-2">
                 <Image src="/images/partner-logo.png" alt="Drawel Tenfly" fill className="object-contain" />
               </div>
               <span className="font-serif font-black text-xs md:text-sm tracking-tighter">Strategic partners</span>
             </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-[#99ea5c]">Drawel Tenfly</h3>
              <p className="text-[16px] lg:text-[18px] leading-relaxed text-justify text-white/90">
                With more than 30 years of industry experience and ISO-certified operations, Partnering with Anruistar Smart technologies transform how people teach, learn, and collaborate.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives Accordion */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#1c559d] text-left">
            Our Objectives
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {objectives.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg md:text-xl lg:text-2xl font-bold font-display text-[#1c559d] pr-4">
                    {item.title}
                  </span>
                  <div className={`transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="text-[#1c559d]"
                    >
                      <path d="M12 16L6 10H18L12 16Z" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-60 pb-6 md:pb-8 opacity-100" : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <p className="text-[16px] lg:text-[21px] font-normal leading-[1.5] lg:leading-[32px] tracking-[-0.42px] text-[#1D1A22] text-justify font-sans">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}