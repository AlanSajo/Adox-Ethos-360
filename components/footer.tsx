import { TermsModal } from "./terms-modal"
import { PrivacyModal } from "./privacy-modal"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-card-foreground mb-1">
              Ethos 360
            </h3>
            <p className="text-xs text-muted-foreground">
              A product by Adox
            </p>
          </div>

          {/* About Info */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm text-muted-foreground">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
                Company
              </span>
              <span className="text-card-foreground font-medium">Adox</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
                Support Email
              </span>
              <a
                href="mailto:ethosadox@gmail.com"
                className="text-card-foreground hover:text-primary transition-colors"
              >
                ethosadox@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
                Contact
              </span>
              <a
                href="tel:9061213589"
                className="text-card-foreground hover:text-primary transition-colors"
              >
                9061213589
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Adox. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <PrivacyModal />
            <TermsModal />
          </div>
        </div>
      </div>
    </footer>
  )
}
