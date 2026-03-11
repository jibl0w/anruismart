"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

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
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6 -mt-16 md:-mt-20">
        <motion.div
          className="space-y-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl md:text-[56px] font-bold font-display text-[#8ed955] leading-tight tracking-[-1.12px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-[21px] font-medium text-white font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let's help you deploy smart classroom, campus, and smart multimedia solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
