"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, defaultViewport } from "@/utils/animations";

export default function ProductCTA() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-[#1c559d]">
      {/* Background Gradient & Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c559d] via-[#154685] to-[#0f386c] z-0" />
        <Image
          src="/images/product-cta-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10 z-0"
        />
      </div>

      {/* Content */}
      <motion.div
        className="mx-auto px-6 md:px-[70px] relative z-10 flex flex-col items-center text-center gap-8 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-bold font-display text-white max-w-4xl leading-tight"
          variants={fadeInUp}
        >
          Find Modern Smart Technology For The Best Education & Multimedia Experiences
        </motion.h2>

        <motion.div variants={scaleIn}>
          <Link
            href="/core-solutions"
            className="bg-[#8ed955] text-white text-base md:text-lg font-bold py-4 px-10 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-105 hover:shadow-lg w-full sm:w-auto inline-block"
          >
            Explore Products
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
