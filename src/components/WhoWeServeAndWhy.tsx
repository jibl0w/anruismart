"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, defaultViewport } from "@/utils/animations";

export default function WhoWeServeAndWhy() {
  const whoWeServeItems = [
    "Public and private educational institutions",
    "Corporate training centres",
    "Government agencies",
    "Individual educators",
  ];

  return (
    <section className="bg-[#fcfcfc] py-[108px] px-6 md:px-[70px]">
      <div className="mx-auto">

        {/* Who We Serve Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[108px] items-center justify-center">
          {/* Content */}
          <motion.div
            className="flex-1 space-y-8 max-w-[565px]"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <div className="space-y-4">
              <h2 className="font-display font-bold text-[#1c559d] text-[32px] md:text-[42px] tracking-[-0.84px] leading-tight">
                Who We Serve
              </h2>
              <p className="font-sans font-normal text-[#48464c] text-lg tracking-[-0.36px] leading-relaxed">
                Our consultative approach allows us assess needs, design fit-for-purpose solutions, and deliver outcomes that matter. We work seamlessly with
              </p>
            </div>

            <motion.div
              className="bg-[#2f95ec] border-b-2 border-[#001c3f] rounded-lg p-8 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {whoWeServeItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={staggerItem}
                >
                   <div className="bg-[#99ea5c] p-[3px] rounded-[11px] rotate-180 flex-none">
                     <div className="rotate-180 w-[18px] h-[18px] relative">
                        <Image src="/images/checkmark-icon.svg" alt="check" fill className="object-contain brightness-0 invert" />
                     </div>
                   </div>
                   <p className="font-display font-medium text-white text-xl tracking-[-0.42px] leading-6">
                     {item}
                   </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={defaultViewport}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-[#8ed955] text-white font-bold text-lg py-[17px] px-8 rounded-[12px] border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full max-w-[633px] h-[400px] md:h-[583px] rounded-[30px] border-b-[50px] border-[#1c559d] overflow-hidden shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
             <div className="absolute inset-0 bg-[#8ed955]" />
             <Image
              src="/images/who-we-serve-bg.jpg"
              alt="Who We Serve"
              fill
              className="object-cover relative z-10"
             />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
