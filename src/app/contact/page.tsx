import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactBody from "@/components/ContactBody";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <Header />
      {/* Selection 1: Contact Hero Section */}
      <ContactHero />
      
      {/* Selection 2: Contact Form & Info Cards */}
      <ContactBody />
      
      <Footer />
    </main>
  );
}