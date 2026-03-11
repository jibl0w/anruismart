"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, defaultViewport } from "@/utils/animations";

type Feature = {
  title: string;
  description?: string;
};

type Solution = {
  number: string;
  title: string;
  description: string;
  image: string;
  features: Feature[];
};

const solutions: Solution[] = [
  {
    number: "1.",
    title: "Smart Classroom & Interactive Learning Solutions",
    description: "Integrated classroom technologies designed to improve engagement, participation, and learning outcomes",
    image: "/images/Solar Panel (PV) 1.png",
    features: [
      { title: "Interactive Displays & Smart Whiteboards" },
      { title: "Digital Teaching & Presentation Tools" },
      { title: "Classroom Management Software" },
      { title: "Hybrid & Remote Learning Enablement" },
    ],
  },
  {
    number: "2.",
    title: "Multimedia, Recording & Broadcasting Systems",
    description: "Professional multimedia environments for education, training, and communication",
    image: "/images/multimedia.png",
    features: [
      { title: "Lecture Capture & Recording Systems" },
      { title: "Live Streaming & Broadcasting Solutions" },
      { title: "Studio & Media Room Setups" },
      { title: "Audio-Visual Integration (AV)" },
    ],
  },
  {
    number: "3.",
    title: "OEM & Custom Branding Solutions",
    description: "Tailored technology solutions designed to reflect each institution’s identity.",
    image: "/images/oem-list-monitor.png",
    features: [
      { 
        title: "White-Label Laptops & Tablets", 
        description: "Co-branded or fully customised devices for schools, universities, and education agencies" 
      },
      { 
        title: "Custom Software Skins", 
        description: "Personalised UI/UX and pre-installed educational tools aligned with institutional curricula" 
      },
      { 
        title: "Institutional Branding Packages", 
        description: "Hardware branding, packaging, and digital assets designed to match organisational identity" 
      },
    ],
  },
  {
    number: "4.",
    title: "Smart Campus & Digital Infrastructure",
    description: "Reliable, secure infrastructure to support modern learning environments",
    image: "/images/smart-campus.png",
    features: [
      { title: "Secure, High-Speed Campus Networking" },
      { title: "Smart Access Control Systems" },
      { title: "Integrated Classroom & Facility Connectivity" },
      { title: "Centralised Monitoring & Management" },
    ],
  },
];

export default function CoreSolutions() {
  return (
    <section className="bg-[#f3f3f3] py-16 md:py-24 px-6 md:px-[70px]">
      <div className="mx-auto space-y-12 md:space-y-16">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#1c559d] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          Core Solution Areas
        </motion.h2>

        <div className="flex flex-col gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-sm border border-[#e0e0e0]"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div className="flex-1 space-y-6 md:space-y-8 w-full">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-display text-[#1c559d]">
                      <span className="text-[#99ea5c] mr-2">{solution.number}</span>
                      {solution.title}
                    </h3>
                    <p className="text-[18px] lg:text-[21px] font-normal leading-[1.5] lg:leading-[32px] tracking-[-0.42px] text-[#1D1A22] text-justify font-sans">
                      {solution.description}
                    </p>
                  </div>

                  <motion.div
                    className="space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {solution.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-[#2f95ec] rounded-lg p-3 md:p-4 text-white border-b-2 border-[#001c3f]"
                        variants={staggerItem}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative w-4 h-4 md:w-5 md:h-5 shrink-0 mt-1">
                            <Image
                              src="/images/bullet-icon.svg"
                              alt="•"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium text-base md:text-lg leading-tight">
                              {feature.title}
                            </p>
                            {feature.description && (
                              <p className="text-xs md:text-sm md:text-base opacity-90 leading-relaxed text-justify">
                                {feature.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg border-b-[5px] border-[#001c3f]">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center pt-6 md:pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <button className="bg-[#8ed955] text-white text-lg font-bold py-4 px-12 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-105 shadow-lg w-full sm:w-auto">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}