"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function TermsModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        Terms of Service
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          {/* Modal Content */}
          <div className="bg-card rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
              <h2 className="text-xl font-serif text-foreground">Terms & Conditions</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 prose prose-sm max-w-none text-foreground">
              <div className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  Welcome to Ethos. By accessing or using the Ethos platform, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
                </p>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. About Ethos</h3>
                  <p className="text-muted-foreground">
                    Ethos is a community-focused ERP platform designed to help churches, temples, family groups, and other community organizations manage communication, events, directories, announcements, and related activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Eligibility</h3>
                  <p className="text-muted-foreground">
                    You must be at least 18 years old or have appropriate authorization from your community or organization to use this platform.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Account Registration</h3>
                  <p className="text-muted-foreground">
                    Users are responsible for maintaining the confidentiality of their login credentials. You agree to provide accurate and up-to-date information during registration.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Use of the Platform</h3>
                  <p className="text-muted-foreground">
                    You agree to use Ethos only for lawful and community-related purposes. You must not misuse the platform for harmful, offensive, illegal, or unauthorized activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Community Content</h3>
                  <p className="text-muted-foreground">
                    Content such as announcements, events, prayer requests, images, or messages posted by users is the responsibility of the respective community or user. Ethos does not verify or endorse user-generated content.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">6. Data Accuracy</h3>
                  <p className="text-muted-foreground">
                    Ethos is not responsible for inaccuracies in data entered by users or community administrators.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">7. Payments and Subscriptions</h3>
                  <p className="text-muted-foreground">
                    Certain features may be offered under paid subscription plans. All payments are non-refundable unless explicitly stated otherwise.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">8. Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    All rights, trademarks, logos, and platform design related to Ethos belong exclusively to the company. Users may not copy, modify, or distribute any part of the platform without permission.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">9. Service Availability</h3>
                  <p className="text-muted-foreground">
                    While we strive for high availability, Ethos does not guarantee uninterrupted or error-free service and may perform maintenance or updates when required.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">10. Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    Ethos shall not be liable for any indirect, incidental, or consequential damages arising from the use of the platform.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">11. Termination</h3>
                  <p className="text-muted-foreground">
                    We reserve the right to suspend or terminate access if these terms are violated.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">12. Changes to Terms</h3>
                  <p className="text-muted-foreground">
                    These Terms may be updated periodically. Continued use of the platform constitutes acceptance of the revised Terms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">13. Governing Law</h3>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and interpreted in accordance with the laws of India.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground">
                    If you have any questions, please contact us at{" "}
                    <a
                      href="mailto:ethosadox@gmail.com"
                      className="text-primary hover:underline"
                    >
                      ethosadox@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
