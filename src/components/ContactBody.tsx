"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/utils/animations";

export default function ContactBody() {
  return (
    <section className="bg-[#f3f3f3] pt-[73px] pb-24 px-6 md:px-[70px] -mt-32 md:-mt-48 relative z-30">
      <div className="mx-auto space-y-12">

        {/* Main Form Card */}
        <motion.div
          className="bg-white rounded-[24px] shadow-xl overflow-hidden flex flex-col lg:flex-row border-b-4 border-[#e0e0e0]"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          {/* Form Section */}
          <div className="flex-1 p-8 md:p-12 flex flex-col gap-8">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                  Enter your Name <span className="text-red-500">*</span>
                </label>
                <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3">
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                  Enter your Email <span className="text-red-500">*</span>
                </label>
                <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3">
                  <input 
                    type="email" 
                    placeholder="Add Email Address" 
                    className="w-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans"
                  />
                </div>
              </div>

              {/* Select */}
              <div className="space-y-2">
                <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                  Select your product or solution <span className="text-red-500">*</span>
                </label>
                <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3 flex items-center relative">
                  <select defaultValue="" className="w-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans appearance-none z-10 cursor-pointer">
                    <option value="" disabled>Select</option>
                    <option value="smart-classroom">Smart Classroom</option>
                    <option value="multimedia">Multimedia Systems</option>
                    <option value="smart-campus">Smart Campus</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-0">
                    <Image src="/images/icon-select-arrow.svg" alt="v" width={24} height={24} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[21px] font-display font-semibold text-[#1c559d]">
                  Tell us what you want <span className="text-red-500">*</span>
                </label>
                <div className="bg-[#fafafa] border-b-4 border-[#e0e0e0] rounded-lg px-4 py-3 h-[183px] relative">
                  <textarea 
                    placeholder="Your Message" 
                    className="w-full h-full bg-transparent outline-none text-[21px] text-[#1d1a22] placeholder:text-[#c6c6c6] font-sans resize-none"
                  />
                  <div className="absolute bottom-4 right-4 pointer-events-none opacity-50">
                     <Image src="/images/icon-resize.svg" alt="/" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-[#8ed955] text-white text-[18px] font-bold py-4 px-10 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-105 w-full sm:w-auto self-start">
              Contact Us
            </button>
          </div>

          {/* Side Image Section */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/contact-side-image.jpg"
              alt="People working with technology"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {/* Enquiries Card */}
          <motion.div
            className="bg-white rounded-[16px] border-b-4 border-[#e0e0e0] p-8 md:p-12 flex flex-col gap-8 shadow-sm"
            variants={staggerItem}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2f95ec] rounded-full flex items-center justify-center shrink-0">
                <Image src="/images/icon-enquiries.svg" alt="Enquiries" width={28} height={28} />
              </div>
              <h3 className="text-[27px] font-bold font-display text-[#1c559d]">Enquires</h3>
            </div>

            <p className="text-[18px] lg:text-[21px] font-normal leading-[1.5] lg:leading-[32px] tracking-[-0.42px] text-[#1D1A22] text-justify font-sans">
              Looking to transform classrooms, deploy campus-wide technology, or explore a strategic partnership?
Our experts are available to provide consultations, technical guidance, and tailored solutions for your institution or organisation
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+2347032666625" className="bg-[#8ed955] text-white font-bold py-4 px-6 rounded-lg border-b-4 border-[#265900] text-center hover:brightness-105 transition-all">
                Call Us: +234 70 3266 6625
              </a>
              <a href="mailto:info@anruistar.com" className="bg-[#fafafa] text-[#1d1a22] font-bold py-4 px-6 rounded-lg border-b-4 border-[#e0e0e0] text-center hover:bg-gray-50 transition-all">
                Email us: info@anruistar.com
              </a>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div
            className="bg-white rounded-[16px] border-b-4 border-[#e0e0e0] p-8 md:p-12 flex flex-col gap-8 shadow-sm"
            variants={staggerItem}
          >
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2f95ec] rounded-full flex items-center justify-center shrink-0">
                   <Image src="/images/icon-location.svg" alt="Location" width={28} height={28} />
                </div>
                <h3 className="text-[27px] font-bold font-display text-[#1c559d]">Address</h3>
             </div>

             <p className="text-[18px] lg:text-[21px] font-normal leading-[1.5] lg:leading-[32px] tracking-[-0.42px] text-[#1D1A22] text-justify font-sans">
               54 (14) Abayomi Akinmosa Crescent, Jericho, Ibadan, Nigeria.
             </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
