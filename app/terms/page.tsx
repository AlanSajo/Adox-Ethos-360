import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Ethos 360",
  description: "Terms and Conditions for Ethos 360 platform",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        {/* Header */}
        <Link href="/" className="inline-block mb-8">
          <Button variant="outline" size="sm" className="rounded-full">
            ← Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-sm max-w-none text-card-foreground space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">Welcome to Ethos 360</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Ethos 360 platform, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">1. About Ethos 360</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ethos 360 is a community-focused ERP platform designed to help churches, temples, family groups, and other community organizations manage communication, events, directories, announcements, and related activities.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">2. Eligibility</h3>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old or have appropriate authorization from your community or organization to use this platform.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">3. Account Registration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Users are responsible for maintaining the confidentiality of their login credentials. You agree to provide accurate and up-to-date information during registration.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">4. Use of the Platform</h3>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use Ethos 360 only for lawful and community-related purposes. You must not misuse the platform for harmful, offensive, illegal, or unauthorized activities.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">5. Community Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              Content such as announcements, events, prayer requests, images, or messages posted by users is the responsibility of the respective community or user. Ethos 360 does not verify or endorse user-generated content.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">6. Data Accuracy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ethos 360 is not responsible for inaccuracies in data entered by users or community administrators.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">7. Payments and Subscriptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Certain features may be offered under paid subscription plans. All payments are non-refundable unless explicitly stated otherwise.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">8. Intellectual Property</h3>
            <p className="text-muted-foreground leading-relaxed">
              All rights, trademarks, logos, and platform design related to Ethos 360 belong exclusively to the company. Users may not copy, modify, or distribute any part of the platform without permission.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">9. Service Availability</h3>
            <p className="text-muted-foreground leading-relaxed">
              While we strive for high availability, Ethos 360 does not guarantee uninterrupted or error-free service and may perform maintenance or updates when required.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">10. Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ethos 360 shall not be liable for any indirect, incidental, or consequential damages arising from the use of the platform.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">11. Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate access if these terms are violated.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">12. Changes to Terms</h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms may be updated periodically. Continued use of the platform constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-foreground mb-3">13. Governing Law</h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of India.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h3 className="font-serif text-xl text-foreground mb-3">Contact Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at{" "}
              <a
                href="mailto:ethosadox@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                ethosadox@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
