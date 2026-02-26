"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        Privacy Policy
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <div className="bg-card rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
              {/* Sticky Header */}
              <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card rounded-t-lg">
                <h2 className="font-serif text-2xl text-foreground">Privacy Policy</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 p-6 text-sm text-foreground leading-relaxed">
                <p className="mb-4">
                  Ethos respects your privacy and is committed to protecting the personal information of users and communities.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Information We Collect</h3>
                    <p className="text-muted-foreground">
                      We may collect personal information such as name, email address, phone number, community details, and profile information provided during registration or usage of the platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Community Data</h3>
                    <p className="text-muted-foreground">
                      Information related to families, members, events, announcements, prayer requests, and media content is collected only to provide platform functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. How We Use Information</h3>
                    <p className="text-muted-foreground mb-2">We use collected data to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Provide and improve platform services</li>
                      <li>Enable community communication and management</li>
                      <li>Support customer service and technical operations</li>
                      <li>Send service-related notifications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Data Sharing</h3>
                    <p className="text-muted-foreground">
                      We do not sell or share personal data with third parties, except when required by law or with trusted service providers for platform operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5. Data Security</h3>
                    <p className="text-muted-foreground">
                      We implement reasonable security measures to protect user data from unauthorized access, misuse, or disclosure.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6. User Control</h3>
                    <p className="text-muted-foreground">
                      Community administrators control visibility and access to community-specific data. Users may request updates or deletion of their personal data.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7. Cookies and Analytics</h3>
                    <p className="text-muted-foreground">
                      Ethos may use cookies or analytics tools to improve user experience and platform performance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8. Children's Privacy</h3>
                    <p className="text-muted-foreground">
                      Ethos is not intended for children under 13 without supervision or authorization from community administrators or guardians.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9. Data Retention</h3>
                    <p className="text-muted-foreground">
                      We retain data only as long as necessary to provide services or comply with legal obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10. Changes to Privacy Policy</h3>
                    <p className="text-muted-foreground">
                      This Privacy Policy may be updated periodically. Continued use of the platform indicates acceptance of the updated policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11. Contact Information</h3>
                    <p className="text-muted-foreground">
                      For privacy-related concerns, contact us at{" "}
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
        </>
      )}
    </>
  )
}
