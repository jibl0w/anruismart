"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn, defaultViewport } from "@/utils/animations";

export default function WhoWeServe() {
  const items = [
    "Public and private educational institutions",
    "Corporate training centres",
    "Government agencies",
    "Individual educators",
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-[70px] relative overflow-hidden">
      {/* CSS Pattern Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#48464c 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6 md:space-y-8 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInLeft}
        >
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#1c559d]">
              Who We Serve
            </h2>
            <p className="text-[18px] lg:text-[21px] font-normal leading-[1.5] lg:leading-[32px] tracking-[-0.42px] text-[#1D1A22] text-justify font-sans max-w-xl">
              Our consultative approach allows us assess needs, design fit-for-purpose solutions, and deliver outcomes that matter. We work seamlessly with
            </p>
          </div>

          {/* Service List Box */}
          <motion.div
            className="bg-[#2f95ec] border-b-8 border-[#001c3f] rounded-2xl p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 md:gap-4"
                variants={staggerItem}
              >
                <div className="bg-[#99ea5c] p-1.5 rounded-full shrink-0">
                   <Image
                    src="/images/checkmark-icon.svg"
                    alt="Check"
                    width={16}
                    height={16}
                    className="brightness-0 invert w-4 h-4 md:w-[18px] md:h-[18px]"
                  />
                </div>
                <span className="text-white text-base md:text-lg lg:text-xl font-medium font-display">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>


        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 w-full max-w-2xl lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInRight}
        >
          <div className="relative aspect-square md:aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden border-b-[20px] md:border-b-[40px] border-[#1c559d] shadow-2xl">
            <div className="absolute inset-0 bg-[#8ed955] z-0" />
            <Image
              src="/images/who-we-serve.jpg"
              alt="People collaborating in a modern office"
              fill
              className="object-cover relative z-10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}