"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/utils/animations";

const whyChooseUsItems = [
  {
    title: "Global Technology, Local Insight",
    description: "We combine world-class engineering and global technology partnerships with deep local market understanding—ensuring solutions are both innovative and practical.",
    image: "/images/why-choose-us-1.png",
  },
  {
    title: "Scalable & Future-Ready Solutions",
    description: "Our modular platforms scale from single classrooms to campus-wide deployments and are designed to evolve with your institution's growth and digital ambitions",
    image: "/images/why-choose-us-2.png",
  },
  {
    title: "Data-Driven Impact",
    description: "Integrated analytics and AI tools provide actionable insights into usage, engagement, and performance—helping institutions make smarter, evidence-based decisions.",
    image: "/images/why-choose-us-3.png",
  },
  {
    title: "Local Support & Capacity Building",
    description: "We combine world-class engineering and global technology partnerships with deep local market understanding—ensuring solutions are both innovative and practical.",
    image: "/images/why-choose-us-4.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-[70px]">
      <motion.div
        className="mx-auto flex flex-col gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        {/* Header */}
        <div className="text-center space-y-4 max-w-[1068px]">
          <h2 className="font-display font-bold text-[#1c559d] text-[32px] md:text-[42px] tracking-[-0.84px] leading-tight">
            Why choose us
          </h2>
          <p className="font-sans font-semibold text-[#1d1a22] text-lg tracking-[-0.36px]">
            We don't just deploy technology; <span className="font-medium">we design, localise, and support smart solutions that deliver real impact in classrooms, campuses, and organisations.</span>
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-white to-[#e4f3ff] border border-[#2f95ec] border-b-[3px] rounded-[16px] p-9 flex flex-col gap-4 items-center md:items-start text-center md:text-left transition-transform hover:-translate-y-1"
              variants={staggerItem}
            >
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display font-bold text-[#022b69] text-[27px] tracking-[-0.15px] leading-9">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans font-normal text-[#1d1a22] text-lg tracking-[-0.15px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
