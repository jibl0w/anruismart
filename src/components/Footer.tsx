import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c559d] text-white py-12 md:py-20 px-6 md:px-[70px] border-t border-white/10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center md:text-left items-center md:items-start">
        {/* Quick Links */}
        <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start w-full">
          <h3 className="text-xl md:text-2xl font-bold font-display capitalize">Quick Links</h3>
          <nav className="flex flex-col gap-3 md:gap-4 text-base md:text-lg lg:text-xl">
            <Link href="#" className="hover:text-[#99ea5c] transition-colors">Products</Link>
            <Link href="#" className="hover:text-[#99ea5c] transition-colors">Partners</Link>
            <Link href="#" className="hover:text-[#99ea5c] transition-colors">About us</Link>
            <Link href="#" className="hover:text-[#99ea5c] transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Address */}
        <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start w-full">
          <h3 className="text-xl md:text-2xl font-bold font-display capitalize">Address</h3>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-[240px]">
            54 (14) Abayomi Akinmosa Crescent, Jericho, Ibadan, Nigeria
          </p>
        </div>

        {/* Strategic Partners */}
        <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start w-full">
          <div className="bg-[#2f95ec] border-2 border-[#0f386c] rounded-xl p-4 w-full max-w-[200px] flex flex-col gap-4 items-center">
            <h4 className="text-xs md:text-sm font-bold font-display text-center uppercase tracking-wider">
              Strategic partners
            </h4>
            <div className="bg-white rounded-lg p-2 w-full flex flex-col items-center gap-2 overflow-hidden shadow-sm">
               <span className="text-[#1c559d] font-bold text-xs md:text-sm">Drawell Tenfly</span>
               <div className="relative w-full h-8 md:h-10">
                  <Image 
                    src="/images/footer-partner.png" 
                    alt="Drawell Tenfly" 
                    fill 
                    className="object-contain"
                  />
               </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start w-full">
          <h3 className="text-xl md:text-2xl font-bold font-display capitalize">Contact</h3>
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full">
            <a href="mailto:info@anruistar.com" className="flex items-center gap-3 hover:text-[#99ea5c] transition-colors underline decoration-1 underline-offset-4 text-base md:text-lg lg:text-xl">
              <div className="relative w-5 h-5 md:w-6 md:h-6 shrink-0">
                <Image src="/images/icon-email.svg" alt="Email" fill className="object-contain" />
              </div>
              info@anruistar.com
            </a>
            
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
              {[
                "+234 70 3266 6625",
                "+234 703 233 1115",
                "+234 705 798 3044"
              ].map((phone, idx) => (
                <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-[#99ea5c] transition-colors text-base md:text-lg lg:text-xl">
                  <div className="bg-[#2f95ec] p-1 rounded-full shrink-0">
                    <Image src="/images/icon-call.svg" alt="Call" width={14} height={14} className="object-contain w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  {phone}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 md:gap-5 pt-2 md:pt-4">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image src="/images/icon-instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6 md:w-7 md:h-7" />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image src="/images/icon-facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6 md:w-7 md:h-7" />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image src="/images/icon-linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 md:w-7 md:h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 text-center">
        <p className="text-base md:text-lg lg:text-xl opacity-80 font-sans">
          Copyright © All right Reserved , AnruiSmart tech
        </p>
      </div>
    </footer>
  );
}
