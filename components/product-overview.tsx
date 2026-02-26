import { Users, Calendar, Bell, Heart, BookOpen, ImageIcon } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Community Directory",
    description:
      "Organize families and members with a searchable, always up-to-date directory.",
  },
  {
    icon: Bell,
    title: "Announcements",
    description:
      "Share important updates and news with your entire community instantly.",
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description:
      "Plan and manage events, schedules, and availability all in one place.",
  },
  {
    icon: Heart,
    title: "Prayer & Support",
    description:
      "Enable prayer requests and community support to strengthen bonds.",
  },
  {
    icon: BookOpen,
    title: "Records & Reports",
    description:
      "Maintain comprehensive records and generate insights for your community.",
  },
  {
    icon: ImageIcon,
    title: "Photo Gallery",
    description:
      "Capture and share memories with a beautiful community photo gallery.",
  },
]

export function ProductOverview() {
  return (
    <section id="product" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Product Overview
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight text-balance">
            Everything your community needs
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-balance">
            Ekklesia 360 is built for churches, temples, and social groups.
            A unified platform that simplifies management so you can focus
            on what matters most — your people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
