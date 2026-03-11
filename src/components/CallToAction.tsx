"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, defaultViewport } from "@/utils/animations";

export default function CallToAction() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#2f95ec] to-[#1c559d]">
      {/* CSS Pattern Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <motion.div
        className="mx-auto px-6 md:px-[70px] relative z-10 flex flex-col items-center text-center gap-8 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
      >
        <div className="space-y-4 md:space-y-6 max-w-4xl text-center items-center flex flex-col">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight"
            variants={fadeInUp}
          >
            Transform The Way Learning And Collaboration Happen
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's build smarter classrooms and multimedia experiences that create lasting impact
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
          variants={scaleIn}
        >
          <Link
            href="/contact"
            className="bg-[#8ed955] text-white text-lg font-bold py-4 px-10 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-105 hover:shadow-lg w-full sm:w-auto inline-block"
          >
            Contact Us
          </Link>
          <Link
            href="/core-solutions"
            className="bg-white text-[#265900] text-lg font-bold py-4 px-10 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:bg-gray-50 hover:shadow-lg w-full sm:w-auto inline-block"
          >
            Explore Products
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
