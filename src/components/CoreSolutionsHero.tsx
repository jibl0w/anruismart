"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function CoreSolutionsHero() {
  return (
    <div className="relative bg-gradient-to-b from-[#0f386c] to-[#1c559d] overflow-hidden">
      <Header />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
        <Image
          src="/images/core-solutions-bg-pattern.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 pt-48 pb-32 px-6 md:px-[70px] text-center flex flex-col items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1
          className="font-display font-bold text-[40px] md:text-[56px] text-[#8ed955] leading-[1.1] tracking-[-1.12px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Core Solutions
        </motion.h1>
        <motion.p
          className="font-sans font-medium text-[18px] md:text-[21px] text-white mt-6 max-w-[900px] leading-[32px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We transform classrooms, campuses, and institutions into connected, intelligent environments
        </motion.p>
      </motion.div>
    </div>
  );
}
