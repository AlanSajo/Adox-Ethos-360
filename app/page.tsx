import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductOverview } from "@/components/product-overview"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      {/* Global background image across all sections */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <Navbar />
      <HeroSection />
      <ProductOverview />
      <ContactSection />
      <Footer />
    </main>
  )
}
