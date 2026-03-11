"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/utils/animations";

const productTabs = [
  {
    tab: "Monitors",
    title: "1. Monitors",
    description:
      "We categorizes monitors by application and customer needs, helping distributors, system integrators, and business buyers quickly identify the ideal display for their market and project. Through our partnership with Tenfly, We are authorized manufacturers of envision monitors",
    image: "/images/product-monitors.jpg",
    subcategories: [
      {
        title: "Gaming & Esports Monitors",
        description: "Engineered for professional and immersive gameplay.",
      },
      {
        title: "Business & Office Monitors",
        description:
          "Designed to enhance productivity and comfort in the workplace.",
      },
      {
        title: "Education & Government",
        description:
          "Built for reliability, durability, and easy management in public and institutional settings.",
      },
    ],
  },
  {
    tab: "Laptops",
    title: "2. Laptops",
    description:
      "We provide laptops across mainstream sizes (13.3″ / 14″ / 15.6″ / 16″ / 17.3″) with customizable configurations to match regional market preferences.",
    image: "/images/laptop.png",
    imagePosition: "70% center",
    subcategories: [
      {
        title: "Laptop for Education",
        description: "Available in 14”–15.6” screen sizes with anti-glare FHD displays, these devices are optimised for student learning, teacher productivity, and institutional deployment.",
      },
      {
        title: "Laptop for Office Work",
        description: "Designed for everyday business operations, these laptops support multitasking, video conferencing, data analysis, and office productivity tools.",
      },
      {
        title: "Laptop for Technical Use",
        description:
          "Powered by AMD Ryzen™ or Intel® H-Series processors with optional dedicated graphics, these laptops handle 3D design, video editing, software development, simulations, and creative workflows.",
      },
    ],
  },
  {
    tab: "All in one PC",
    title: "3. All in one PC",
    description:
      "Looking for a space-saving, powerful and easy-to-deploy computer solution? An all in one PC (also called AIO desktop computer) integrates the core components – CPU, memory, storage, speakers, camera, and display – into one compact unit",
    image: "/images/aio.png",
    imagePosition: "85% center",
    subcategories: [
      {
        title: "All-in-One PC for Education",
        bestFor: "School labs, training centers",
        keySpecs: ["Intel N95/N100 • 8GB RAM • 128-256GB SSD • 21.5 • Anti-glare display"],
      },
      {
        title: "Business All-in-One PC",
        bestFor: "Offices, government admin, remote work",
        keySpecs: ["Intel i3/i5 • 8-16GB RAM • 256-512GB SSD•23.8″ FHD IPS display"],
      },
      {
        title: "High-Performance AIO PC",
        bestFor: "Design, engineering, data visualization",
        keySpecs: ["i7/Ryzen 7 • 16-32GB RAM • 512GB-1TB SSD• 27″ 4K UHD display "],
      },
    ],
  },
  {
    tab: "Interactive Displays",
    title: "4. Interactive Flat Panel Displays",
    description:
      "Our flat panel displays combine high-resolution display, touch/writing, wireless projection, built-in systems, and speakers to revolutionize the teaching and conferencing experience.",
    image: "/images/display.jpg",
    subcategories: [
      {
        title: "For Meeting",
        description:
          "This large touchscreen display supports multi-touch and multi-user operation, allowing teams to brainstorm, document, and share ideas in real time.",
      },
      {
        title: "For Classroom",
        description:
          "This smart board is a digital teaching tool that replaces traditional blackboards with a touch-sensitive display, enabling teachers and students to interact directly with lessons.",
      },
    ],
  },
];

function CheckmarkIcon() {
  return (
    <div className="shrink-0">
      <div className="bg-[#67dc0f] p-[3px] rounded-[12px] flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

export default function CoreSolutionsList() {
  return (
    <section className="bg-[#f3f3f3] py-[108px] px-6 md:px-[66px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16">

          {/* ===== Section 1: Smart Interactive Displays & Classrooms ===== */}
          <motion.div
            className="border-b-2 border-[#c6c6c6] pb-16 pt-8 flex flex-col gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            {/* Header + Intro */}
            <div className="flex flex-col gap-8">
              {/* Title Row */}
              <div className="flex items-center justify-between gap-8">
                <h2 className="font-display font-bold text-[28px] md:text-[32px] text-[#1c559d] tracking-[-0.64px] leading-[36px]">
                  1. Smart Interactive Displays & Classrooms
                </h2>
                <div className="shrink-0 w-8 h-8 relative rotate-180">
                  <Image
                    src="/images/arrow-up-2-fill.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Image + Description */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image Card */}
                <div className="bg-[#bfe2ff] p-3 rounded-[35px] shrink-0 w-full lg:w-[740px]">
                  <div className="relative h-[300px] lg:h-[510px] w-full rounded-[24px] overflow-hidden">
                    <Image
                      src="/images/Solar Panel (PV) 1.png"
                      alt="Smart Interactive Displays & Classrooms"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 text-[#1d1a22] text-[18px] font-sans tracking-[-0.36px] leading-[27px]">
                  <p>
                    <span className="font-bold">The foundation of modern teaching and collaboration. </span>
                    AnruiStar Smart Technologies delivers integrated smart education solutions by combining interactive displays, classroom all-in-one computing systems, and education-grade digital monitors into a single, unified learning ecosystem.
                  </p>
                  <br />
                  <p>
                    Designed for real classroom and training environments, our solutions help schools, universities, training centres, and system integrators build scalable, easy-to-manage digital classrooms that support modern teaching and collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-products */}
            <div className="flex flex-col gap-12">
              {/* Subtitle */}
              <h3 className="font-display font-bold text-[24px] md:text-[27px] text-[#1c559d] tracking-[-0.54px] leading-[36px] max-w-[1043px]">
                We combine interactive displays, classroom AIO computers, and education-grade monitors into a unified system designed for real teaching environments
              </h3>

              {/* Product Cards Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Interactive Flat Panel (IFP) */}
                <motion.div
                  className="bg-[#f0f0f0]/95 border border-[#e0e0e0] border-b-[5px] rounded-[16px] p-4 flex flex-col gap-6 overflow-hidden"
                  variants={staggerItem}
                >
                  <div className="relative h-[296px] w-full rounded-[8px] overflow-hidden">
                    <Image
                      src="/images/product-ifp.jpg"
                      alt="Interactive Flat Panel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h4 className="font-display font-bold text-[24px] text-[#2f95ec] text-center tracking-[-0.48px] leading-[27px]">
                      Interactive Flat Panel (IFP)
                    </h4>
                    <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px]">
                      Also known as digital whiteboard, smart board, or touch teaching display, designed for collaborative teaching and real-time interaction.
                    </p>
                  </div>
                </motion.div>

                {/* All-in-One PC */}
                <motion.div
                  className="bg-[#f0f0f0] border border-[#e0e0e0] border-b-[5px] rounded-[16px] p-4 flex flex-col gap-6 overflow-hidden"
                  variants={staggerItem}
                >
                  <div className="relative h-[296px] w-full rounded-[8px] overflow-hidden">
                    <Image
                      src="/images/product-aio-pc.jpg"
                      alt="All-in-One PC"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h4 className="font-display font-bold text-[24px] text-[#2f95ec] text-center tracking-[-0.48px] leading-[27px]">
                      All-in-One PC
                    </h4>
                    <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px]">
                      A classroom computer combining PC and display in one unit. Also known as All-in-One PC, teaching computer, or education AIO—ideal for lesson preparation, content control, and classroom management.
                    </p>
                  </div>
                </motion.div>

                {/* Extension Monitor */}
                <motion.div
                  className="bg-[#f0f0f0] border border-[#e0e0e0] border-b-[5px] rounded-[16px] p-4 flex flex-col gap-12 overflow-hidden"
                  variants={staggerItem}
                >
                  <div className="relative h-[296px] w-full rounded-[8px] overflow-hidden bg-[#2f95ec]">
                    <Image
                      src="/images/product-extension-monitor.jpg"
                      alt="Extension Monitor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h4 className="font-display font-bold text-[24px] text-[#2f95ec] text-center tracking-[-0.48px] leading-[27px]">
                      Extension Monitor
                    </h4>
                    <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px]">
                      A non-touch display designed for content extension and large-area visibility. Also known as education display, or lecture LCD monitor—used for content duplication, computer labs, and information display.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Advantages Section */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left: Title + Advantages Card + CTA */}
              <div className="flex-1 flex flex-col gap-8">
                <h3 className="font-display font-bold text-[24px] text-[#1c559d] tracking-[-0.48px] leading-[27px]">
                  Anrui smart tech Smart Interactive Displays & Classrooms Advantages
                </h3>

                <div className="bg-[#2f95ec] rounded-[16px] p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[18px] text-white leading-[27px]">
                        Applicable for diverse scenerios including, K12 Smart Classroom, Vocational & Technical Training Labs, Government-Funded Education Projects
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[18px] text-white leading-[27px]">
                        End-to-End Ecosystems; all designed to work as one connected classroom.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[18px] text-white leading-[27px]">
                        Adaptable for different teaching methods, age groups, language settings, and curriculum platforms.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[18px] text-white leading-[27px]">
                        Android / Windows dual-OS flexibility
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[18px] text-white leading-[27px]">
                        We deliver professional-grade education hardware with pricing and support that enable long-term sustainability
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="self-start bg-[#67dc0f] text-white font-bold text-[18px] py-3 px-8 rounded-[12px] border border-[#265900] border-b-4 tracking-[-0.36px] active:border-b active:translate-y-1 transition-all hover:brightness-105"
                >
                  Get a custom quote
                </Link>
              </div>

              {/* Right: Image */}
              <div className="bg-[#bfe2ff] p-3 rounded-[35px] shrink-0 w-full lg:w-[740px]">
                <div className="relative h-[300px] lg:h-[510px] w-full rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/product-ifp-classroom.jpg"
                    alt="Smart Interactive Displays Classroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== Section 2: Recording & Broadcasting Systems ===== */}
          <motion.div
            className="border-b-2 border-[#e0e0e0] pb-16 pt-8 flex flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            {/* Title Row */}
            <div className="flex items-center justify-between gap-8">
              <h2 className="font-display font-bold text-[28px] md:text-[32px] text-[#1c559d] tracking-[-0.64px] leading-[36px]">
                2. Recording & Broadcasting Systems
              </h2>
              <div className="shrink-0 w-8 h-8 relative rotate-180">
                <Image
                  src="/images/arrow-up-2-fill.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Description + Image */}
            <div className="flex flex-col gap-8 items-center">
              <p className="text-[#1d1a22] font-sans text-[18px] leading-[27px] tracking-[-0.36px] text-justify max-w-[1148px]">
                The Anrui Star Recording Classroom Solution is a streamlined camera system built for automated lecture capture, real-time streaming, and synchronous classroom delivery. Featuring AI-powered PTZ cameras, an integrated recording host, and intuitive controls. With customizable configurations to support synchronized classrooms, remote interactive teaching, and model lesson broadcasting,
                <br /><br />
                It helps institutions build flexible, future-ready learning environments with ease.
              </p>

              {/* Diagram Image */}
              <div className="relative w-full h-[350px] md:h-[564px] rounded-[41px] overflow-hidden border-2 border-[#2f95ec] border-b-8">
                <Image
                  src="/images/recording-diagram.jpg"
                  alt="Recording & Broadcasting System Diagram"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* For Teaching / For Learning Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* For Teaching */}
              <motion.div
                className="bg-[#f0f0f0]/95 border border-[#e0e0e0] border-b-[5px] rounded-[16px] p-6 flex flex-col gap-16 overflow-hidden"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-col gap-6">
                  <h4 className="font-display font-bold text-[24px] text-[#2f95ec] tracking-[-0.48px] leading-[27px]">
                    For Teaching
                  </h4>
                  <ul className="list-disc pl-6 font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px] space-y-1">
                    <li>Intuitive recording system for launching webcasts without needing technical assistance</li>
                    <li>Smooth switching between teacher and student views with focus on presentation content and seamless manuscript transitions</li>
                    <li>Ability for teachers to log into YouTube or similar platforms via PC or tablet to monitor live chat and conduct Q&A sessions in real time</li>
                  </ul>
                </div>
                <div className="relative h-[320px] w-full rounded-[8px] overflow-hidden">
                  <Image
                    src="/images/recording-teaching.png"
                    alt="Recording for Teaching"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* For Learning */}
              <motion.div
                className="bg-[#f0f0f0] border border-[#e0e0e0] border-b-[5px] rounded-[16px] p-6 flex flex-col gap-16 overflow-hidden"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[320px] w-full rounded-[8px] overflow-hidden">
                  <Image
                    src="/images/recording-learning.png"
                    alt="Recording for Learning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <h4 className="font-display font-bold text-[24px] text-[#2f95ec] tracking-[-0.48px] leading-[27px]">
                    For learning
                  </h4>
                  <ul className="list-disc pl-6 font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px] space-y-1">
                    <li>Access live streaming easily on mobile phones, tablets, or PCs with subscription support</li>
                    <li>No software installation required—direct access via web browser</li>
                    <li>Engage in real-time live chat and Q&A, take notes, and share class materials effortlessly</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Footer Bar */}
            <div className="bg-white rounded-[16px] p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_17px_10px_0px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <p className="flex-1 font-sans text-[18px] text-[#1d1a22] leading-[27px] tracking-[-0.36px]">
                  These systems support live streaming, on-demand playback, and content archiving—fully supported with installation, training, and ongoing maintenance.
                </p>
                <Link
                  href="/contact"
                  className="shrink-0 bg-[#67dc0f] text-white font-bold text-[18px] py-3 px-8 rounded-[12px] border border-[#265900] border-b-4 tracking-[-0.36px] active:border-b active:translate-y-1 transition-all hover:brightness-105"
                >
                  Get a custom quote
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ===== Section 3: OEM & Custom Technology Services ===== */}
          <motion.div
            className="border-b-2 border-[#c6c6c6] pb-16 pt-8 flex flex-col gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            {/* Header + Intro */}
            <div className="flex flex-col gap-8">
              {/* Title Row */}
              <div className="flex items-center justify-between gap-8">
                <h2 className="font-display font-bold text-[28px] md:text-[32px] text-[#1c559d] tracking-[-0.64px] leading-[36px]">
                  3. OEM & Custom Technology Services
                </h2>
                <div className="shrink-0 w-8 h-8 relative rotate-180">
                  <Image
                    src="/images/arrow-up-2-fill.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Image + Description */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image Card */}
                <div className="bg-[#bfe2ff] p-3 rounded-[35px] shrink-0 w-full lg:w-[740px]">
                  <div className="relative h-[300px] lg:h-[510px] w-full rounded-[24px] overflow-hidden">
                    <Image
                      src="/images/oem-factory.png"
                      alt="OEM & Custom Technology Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 text-[#1d1a22] text-[18px] font-sans tracking-[-0.36px] leading-[27px]">
                  <p>
                    <span className="font-bold">Powered by TENFLY — our manufacturing partner and parent brand — </span>
                    AnruiStar Smart Technologies offers full OEM and ODM capabilities for education technology hardware.
                  </p>
                  <br />
                  <p>
                    With over 15 years of production experience, TENFLY operates a state-of-the-art factory in Shenzhen, China, specializing in interactive flat panels, all-in-one PCs, digital signage, and custom display systems.
                  </p>
                  <br />
                  <p>
                    Whether you&apos;re a distributor, system integrator, or brand owner, we provide end-to-end OEM/ODM services — from concept to delivery — with the quality, flexibility, and scale to meet global market demands.
                  </p>
                </div>
              </div>
            </div>

            {/* Capability Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Manufacturing Scale & Capacity */}
              <motion.div
                className="bg-white rounded-[16px] p-6 flex gap-4 items-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_17px_10px_0px_rgba(0,0,0,0.05)]"
                variants={staggerItem}
              >
                <CheckmarkIcon />
                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-bold text-[20px] text-[#2f95ec] tracking-[-0.4px] leading-[27px]">
                    Manufacturing Scale & Capacity
                  </h4>
                  <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px]">
                    20,000㎡ facility with 6+ SMT and assembly lines, producing 500,000+ units annually across IFPs, AIOs, monitors, and digital signage.
                  </p>
                </div>
              </motion.div>

              {/* Quality Management */}
              <motion.div
                className="bg-white rounded-[16px] p-6 flex gap-4 items-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_17px_10px_0px_rgba(0,0,0,0.05)]"
                variants={staggerItem}
              >
                <CheckmarkIcon />
                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-bold text-[20px] text-[#2f95ec] tracking-[-0.4px] leading-[27px]">
                    Quality Management
                  </h4>
                  <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px]">
                    ISO 9001-certified processes with incoming material inspection, in-line QC, burn-in testing, and final audit — supporting CE, FCC, RoHS, and more.
                  </p>
                </div>
              </motion.div>

              {/* R&D & Engineering Support */}
              <motion.div
                className="bg-white rounded-[16px] p-6 flex gap-4 items-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_17px_10px_0px_rgba(0,0,0,0.05)]"
                variants={staggerItem}
              >
                <CheckmarkIcon />
                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-bold text-[20px] text-[#2f95ec] tracking-[-0.4px] leading-[27px]">
                    R&D & Engineering Support
                  </h4>
                  <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px]">
                    In-house R&D team offering hardware engineering, industrial design, firmware development, and custom UI/UX tailoring.
                  </p>
                </div>
              </motion.div>

              {/* Global Logistics & Supply Chain */}
              <motion.div
                className="bg-white rounded-[16px] p-6 flex gap-4 items-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_17px_10px_0px_rgba(0,0,0,0.05)]"
                variants={staggerItem}
              >
                <CheckmarkIcon />
                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-bold text-[20px] text-[#2f95ec] tracking-[-0.4px] leading-[27px]">
                    Global Logistics & Supply Chain
                  </h4>
                  <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px]">
                    End-to-end supply chain management with flexible MOQs, private labeling, custom packaging, and international shipping via sea, air, or rail.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Trusted Brand Cases & Customizable Services — single card */}
            <div className="bg-[#f0f0f0]/95 border-2 border-[#e0e0e0] border-b-8 rounded-[16px] p-8 flex flex-col gap-8 overflow-hidden">
              {/* Top Row: Text left + Brand logos image right */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 flex flex-col gap-6 justify-center lg:max-w-[575px]">
                  <h3 className="font-display font-bold text-[24px] text-[#2f95ec] tracking-[-0.48px] leading-[27px]">
                    Trusted Brand Cases
                  </h3>
                  <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] tracking-[-0.32px] max-w-[473px]">
                    From branded all-in-one PCs to gaming monitors, Our OEM/ODM projects are designed to meet specific market, branding, and performance requirements.
                  </p>
                </div>
                <div className="relative w-full lg:w-[661px] h-[300px] lg:h-[476px] shrink-0 rounded-[16px] overflow-hidden">
                  <Image
                    src="/images/oem-brand-cases.jpg"
                    alt="Trusted Brand Cases — Lenovo, AOC, ASUS, ZTE, Great Wall, and more"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Row: Monitor image left + Customizable Services right */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="relative w-full lg:w-[693px] h-[350px] lg:h-[551px] shrink-0 rounded-[16px] overflow-hidden">
                  <Image
                    src="/images/oem-customizable.jpg"
                    alt="Customizable Services"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Customizable Services Checklist */}
                <div className="flex-1 bg-[#f0f0f0] rounded-[16px] p-6 flex flex-col gap-8">
                  <h3 className="font-display font-bold text-[21px] text-[#2f95ec] tracking-[-1px] leading-[24px]">
                    Customizable Services
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px]">
                        <span className="font-bold">Hardware Configuration Customization; </span>
                        CPU & chipset options, Memory & storage configuration Touch, camera & speaker modules I/O port customization
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px]">
                        <span className="font-bold">Brand Identity & Appearance Customization;</span> across your product lines.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px]">
                        <span className="font-bold">Motherboard OEM Customization; </span>
                        Interface & port customization, Performance tuning, Windows compatibility
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px]">
                        <span className="font-bold">Dual OS Hardware Support (IFP); </span>
                        OPS slot integration, Dual OS hardware compatibility, System switching support
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px]">
                        <span className="font-bold">Mechanical & Structural Customization; </span>
                        Mounting & VESA options, Thermal optimization, Interface positioning
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckmarkIcon />
                      <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px]">
                        <span className="font-bold">ODM Co-Development Support;</span> Feasibility evaluation, Prototype & sample validation, BOM optimization, Manufacturing support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="bg-white rounded-[16px] p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_17px_10px_0px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <p className="flex-1 font-sans text-[18px] text-[#1d1a22] leading-[27px] tracking-[-0.36px]">
                  From concept to container — we handle design, production, quality control, and logistics so you can focus on your market.
                </p>
                <Link
                  href="/contact"
                  className="shrink-0 bg-[#67dc0f] text-white font-bold text-[18px] py-3 px-8 rounded-[12px] border border-[#265900] border-b-4 tracking-[-0.36px] active:border-b active:translate-y-1 transition-all hover:brightness-105"
                >
                  Get a custom quote
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ===== Section 4: Smart Campus Digital Infrastructure ===== */}
          <motion.div
            className="border-b-2 border-[#e0e0e0] pb-16 pt-8 flex flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            {/* Title + Description */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-8">
                <h2 className="font-display font-bold text-[28px] md:text-[32px] text-[#1c559d] tracking-[-0.64px] leading-[36px]">
                  4. Smart Campus Digital Infrastructure
                </h2>
                <div className="shrink-0 w-8 h-8 relative rotate-180">
                  <Image
                    src="/images/arrow-up-2-fill.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[#1d1a22] font-sans text-[18px] leading-[27px] tracking-[-0.36px] max-w-[1068px]">
                <span className="font-bold">A truly smart campus depends on reliable infrastructure</span>. We design and deploy digital backbones that connect classrooms, devices, and systems into a single, secure, and manageable environment.
              </p>
            </div>

            {/* Image + Solutions Card */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Image Card */}
              <div className="bg-[#bfe2ff] p-2 rounded-[24px] shrink-0 w-full lg:w-[758px]">
                <div className="relative h-[300px] lg:h-[416px] w-full rounded-[16px] overflow-hidden shadow-[0px_5px_11px_0px_rgba(51,76,141,0.1),0px_20px_20px_0px_rgba(51,76,141,0.09),0px_45px_27px_0px_rgba(51,76,141,0.05)]">
                  <Image
                    src="/images/smart-campus-infra.jpg"
                    alt="Smart Campus Digital Infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Blue Solutions Card */}
              <div className="flex-1 bg-[#2f95ec] rounded-[16px] px-11 py-12 flex flex-col gap-12 overflow-hidden">
                <h3 className="font-display font-bold text-[21px] text-white tracking-[-0.42px] leading-[36px]">
                  Our Smart Campus solutions include:
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="shrink-0">
                      <div className="bg-[#99ea5c] p-[2px] rounded-[9px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-display text-[18px] text-white leading-[18px] tracking-[-0.36px]">
                      High-speed wired and wireless networking<br />
                      Smart access control and security systems
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="shrink-0">
                      <div className="bg-[#99ea5c] p-[2px] rounded-[9px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-display text-[18px] text-white leading-[18px] tracking-[-0.36px]">
                      Centralised device and system management platforms
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="shrink-0">
                      <div className="bg-[#99ea5c] p-[2px] rounded-[9px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-display text-[18px] text-white leading-[18px] tracking-[-0.36px]">
                      Backend monitoring, analytics, and control dashboards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="bg-white rounded-[16px] p-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <p className="flex-1 font-sans text-[18px] text-[#1d1a22] leading-[27px] tracking-[-0.36px] max-w-[826px]">
                  This infrastructure enables interactive classrooms, digital signage, attendance capture, scheduling notifications, and campus-wide information systems—improving operational efficiency and learning continuity.
                </p>
                <Link
                  href="/contact"
                  className="shrink-0 bg-[#67dc0f] text-white font-bold text-[18px] py-3 px-8 rounded-[12px] border border-[#265900] border-b-4 tracking-[-0.36px] active:border-b active:translate-y-1 transition-all hover:brightness-105"
                >
                  Get a custom quote
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ===== Section 5: Smart Digital Products and Accessories ===== */}
          <ProductsCarouselSection />

        </div>
      </div>
    </section>
  );
}

/* ---------- Section 5 extracted as its own component for state ---------- */
function ProductsCarouselSection() {
  const [activeTab, setActiveTab] = useState(0);

  const prev = () => setActiveTab((i) => (i === 0 ? productTabs.length - 1 : i - 1));
  const next = () => setActiveTab((i) => (i === productTabs.length - 1 ? 0 : i + 1));

  const current = productTabs[activeTab];

  return (
    <motion.div
      className="pt-8 flex flex-col gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
    >
      {/* Title + Description */}
      <div className="flex gap-7 items-center">
        <div className="flex-1 flex flex-col gap-7">
          <h2 className="font-display font-bold text-[28px] md:text-[32px] text-[#1c559d] tracking-[-0.64px] leading-[36px]">
            5. Smart Digital Products and Accessories
          </h2>
          <p className="text-[#1d1a22] font-sans text-[18px] leading-[27px] tracking-[-0.36px] max-w-[845px]">
            As a professional manufacturer, we empower global brands and businesses with reliable smart technological products, for offices, government, schools, bulk supply and tender projects.
          </p>
        </div>
        <div className="shrink-0 w-8 h-8 relative rotate-180">
          <Image src="/images/arrow-up-2-fill.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex justify-center">
        <div className="bg-white rounded-[8px] flex overflow-hidden">
          {productTabs.map((item, index) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(index)}
              className={`h-[89px] px-8 py-2.5 font-display text-[22px] md:text-[27px] leading-[36px] whitespace-nowrap transition-colors ${
                activeTab === index
                  ? "bg-[#2f95ec] text-white font-bold"
                  : "bg-white text-[#68b0ef] font-medium hover:bg-[#f0f8ff]"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Content */}
      <div className="flex gap-6 items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="shrink-0 w-12 h-[47px] bg-[#2f95ec] rounded-[8px] flex items-center justify-center rotate-180 hover:brightness-110 transition-all"
          aria-label="Previous product"
        >
          <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.42508 0.146873L0 3.57195L11.1255 14.7218L0 25.8716L3.42508 29.2967L18 14.7218L3.42508 0.146873Z" fill="white"/>
          </svg>
        </button>

        {/* Content Card */}
        <div className="flex-1 bg-white border border-[#e0e0e0] border-b-[5px] rounded-[16px] px-6 py-8 flex flex-col gap-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              {/* Title + Description + Image */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-[89px] items-center">
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="font-display font-bold text-[28px] md:text-[32px] text-[#53a5ed] leading-[36px]">
                    {current.title}
                  </h3>
                  <p className="font-sans text-[16px] text-[#1d1a22] leading-[24px] max-w-[535px]">
                    {current.description}
                  </p>
                </div>
                <div className="relative h-[250px] lg:h-[326px] w-full lg:w-[427px] shrink-0 rounded-[9px] overflow-hidden bg-[#898989]">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                    style={current.imagePosition ? { objectPosition: current.imagePosition } : undefined}
                  />
                </div>
              </div>

              {/* Subcategory Cards */}
              <div className={`grid grid-cols-1 gap-2 ${current.subcategories.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                {current.subcategories.map((sub) => (
                  <div
                    key={sub.title}
                    className="bg-[#fafafa] border border-[#e0e0e0] border-b-2 rounded-[8px] p-4 flex flex-col gap-2"
                  >
                    <h4 className="font-display font-medium text-[18px] md:text-[21px] text-[#68b0ef] leading-[24px] whitespace-nowrap">
                      {sub.title}
                    </h4>
                    {sub.bestFor ? (
                      <div className="font-sans text-[12px] text-[#002d1b] leading-[18px] flex flex-col gap-1">
                        <div><span className="font-bold">Best For:</span> {sub.bestFor}</div>
                        {sub.keySpecs && (
                          <div><span className="font-bold">Key Specs:</span> {sub.keySpecs.join(", ")}</div>
                        )}
                      </div>
                    ) : (
                      <p className="font-sans text-[12px] text-[#002d1b] leading-[18px]">
                        {sub.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="shrink-0 w-12 h-[47px] bg-[#2f95ec] rounded-[8px] flex items-center justify-center hover:brightness-110 transition-all"
          aria-label="Next product"
        >
          <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.42508 0.146873L0 3.57195L11.1255 14.7218L0 25.8716L3.42508 29.2967L18 14.7218L3.42508 0.146873Z" fill="white"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
