"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Formspree will handle the form submission automatically
    // Set submitted state for success message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      // Reset form
      const form = e.currentTarget as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight text-balance">
              Contact Us
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              {"Ready to transform how your community connects? Reach out to us and we'll help you get started with Ethos 360."}
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">
                  9061213589
                </span>
              </div>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">
                  Thank you!
                </h3>
                <p className="text-sm text-muted-foreground">
                  {"We'll be in touch soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} action="https://formspree.io/f/xaqddp" method="POST" className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="rounded-xl h-11"
                  />
                </div>
                <div>
                  <label
                    htmlFor="community"
                    className="block text-sm font-medium text-card-foreground mb-1.5"
                  >
                    Community Name
                  </label>
                  <Input
                    id="community"
                    name="community"
                    placeholder="e.g. St. Mary's Parish"
                    required
                    className="rounded-xl h-11"
                  />
                </div>
                <div>
                  <label
                    htmlFor="members"
                    className="block text-sm font-medium text-card-foreground mb-1.5"
                  >
                    Number of People
                  </label>
                  <Input
                    id="members"
                    name="members"
                    type="number"
                    placeholder="Approximate community size"
                    required
                    className="rounded-xl h-11"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-card-foreground mb-1.5"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      className="rounded-xl h-11"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-card-foreground mb-1.5"
                    >
                      Mobile Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      required
                      className="rounded-xl h-11"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-xl mt-2 w-full text-base"
                >
                  Get in Touch
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
