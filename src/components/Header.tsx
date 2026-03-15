"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e0e0e0]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto px-6 md:px-[70px] h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-10 w-40 md:h-12 md:w-48 shrink-0">
           <Image
            src="/images/logo-mark.png"
            alt="AnruiStar Smart Technologies"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12 font-bold text-[18px] tracking-[-0.36px] text-[#48464c]">
          <Link href="/#about" className="hover:text-[#1c559d] transition-colors">About us</Link>
          <Link href="/core-solutions" className="hover:text-[#1c559d] transition-colors">Solutions</Link>
          <Link href="/#partners" className="hover:text-[#1c559d] transition-colors">Strategic Partners</Link>
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden lg:block bg-[#8ed955] text-white font-bold text-[15px] py-[17px] px-[32px] rounded-[12px] border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-105"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-[#1c559d]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#e0e0e0] p-6 shadow-xl flex flex-col gap-6 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6 font-bold text-[18px] text-center text-[#48464c]">
              <Link href="/#about" className="hover:text-[#1c559d]" onClick={() => setIsMenuOpen(false)}>About us</Link>
              <Link href="/core-solutions" className="hover:text-[#1c559d]" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
              <Link href="/#partners" className="hover:text-[#1c559d]" onClick={() => setIsMenuOpen(false)}>Strategic Partners</Link>
            </nav>
            <Link
              href="/contact"
              className="bg-[#8ed955] text-white font-bold text-[15px] py-4 rounded-[12px] border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
