import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Classy hero background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/classy-hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-8 py-20 md:py-32 text-center flex flex-col items-center">
        {/* Premium eyebrow text */}
        <p className="text-xs md:text-sm tracking-widest uppercase text-muted-foreground font-light mb-12 md:mb-16">
          Community Management Platform
        </p>

        {/* Main headline - elegant serif */}
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-tight tracking-tight text-balance max-w-5xl">
          Ethos 360
        </h1>

        {/* Premium divider */}
        <div className="mt-8 md:mt-12 w-12 h-px bg-primary"></div>

        {/* Subheading */}
        <p className="mt-8 md:mt-12 text-lg md:text-xl lg:text-2xl text-foreground max-w-2xl leading-relaxed font-light text-balance">
          Empower your community with seamless management, meaningful connections, and collective growth.
        </p>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16">
          <Button asChild size="lg" className="rounded-full px-10 py-3 text-base font-medium">
            <a href="#contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Trust indicator */}
        <p className="mt-12 md:mt-16 text-sm text-muted-foreground font-light">
          Trusted by communities worldwide
        </p>
      </div>
    </section>
  )
}
