"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = [
  {
    src: "/images/menu-dashboard.png",
    caption: "Main Dashboard",
  },
  {
    src: "/images/settings.png",
    caption: "Profile & Settings",
  },
  {
    src: "/images/directory.png",
    caption: "Online Directory",
  },
  {
    src: "/images/announcements.png",
    caption: "Announcements",
  },
  {
    src: "/images/prayers.png",
    caption: "Prayer Requests",
  },
  {
    src: "/images/events-calendar.png",
    caption: "Events Calendar",
  },
  {
    src: "/images/support.png",
    caption: "Community Support",
  },
  {
    src: "/images/club-gallery.png",
    caption: "Club Gallery",
  },
]

export function ScreenshotCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()

    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => {
      clearInterval(interval)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section id="screenshots" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            See it in action
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight text-balance">
            Designed for simplicity
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A clean, intuitive interface that your community will love from day one.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.caption}
                  className="flex-[0_0_280px] sm:flex-[0_0_300px] md:flex-[0_0_320px] px-3"
                >
                  <div
                    className={`rounded-2xl border border-border bg-card shadow-sm overflow-hidden transition-all duration-500 ${
                      index === selectedIndex
                        ? "scale-100 opacity-100 shadow-lg"
                        : "scale-95 opacity-60"
                    }`}
                  >
                    <div className="p-3">
                      <img
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.caption}
                        className="w-full h-auto rounded-xl"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-4 pb-4 pt-1 text-center">
                      <p className="text-sm font-medium text-card-foreground">
                        {screenshot.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full h-10 w-10 bg-transparent"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.caption}
                  type="button"
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground/30"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full h-10 w-10 bg-transparent"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
