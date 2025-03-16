import { Card, CardContent } from "@/components/ui/card"

export default function TimelineSection() {
  const timelineItems = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      duration: "Weeks 1-2",
      description: "Initial research, requirement gathering, and project planning.",
      status: "Completed",
    },
    {
      phase: "Phase 2",
      title: "Design & Architecture",
      duration: "Weeks 3-4",
      description: "Solution design, technical architecture, and prototype development.",
      status: "In Progress",
    },
    {
      phase: "Phase 3",
      title: "Development",
      duration: "Weeks 5-10",
      description: "Core functionality development, integration, and initial testing.",
      status: "Upcoming",
    },
    {
      phase: "Phase 4",
      title: "Testing & Refinement",
      duration: "Weeks 11-12",
      description: "Comprehensive testing, bug fixes, and performance optimization.",
      status: "Upcoming",
    },
    {
      phase: "Phase 5",
      title: "Deployment & Handover",
      duration: "Weeks 13-14",
      description: "Solution deployment, documentation, and knowledge transfer.",
      status: "Upcoming",
    },
  ]

  return (
    <section id="timeline" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Working Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This section provides an overview of our project timeline, including key milestones, deadlines, and phases
            of development. We keep track of our progress to ensure timely delivery and efficient execution of all
            tasks.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 hidden md:block ${
                    item.status === "Completed"
                      ? "bg-primary border-primary/20"
                      : item.status === "In Progress"
                        ? "bg-secondary border-secondary/20"
                        : "bg-muted border-border"
                  }`}
                  style={{ top: "24px" }}
                />

                <Card
                  className={`border ${
                    item.status === "Completed"
                      ? "border-primary/20"
                      : item.status === "In Progress"
                        ? "border-secondary/20"
                        : "border-border"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className={`md:grid md:grid-cols-2 md:gap-4 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                      <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <div className="flex items-center mb-2 md:mb-0">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 md:hidden ${
                              item.status === "Completed"
                                ? "bg-primary"
                                : item.status === "In Progress"
                                  ? "bg-secondary"
                                  : "bg-muted"
                            }`}
                          />
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.phase} • {item.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>

                      <div className={`mt-2 md:mt-0 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                        <p className="text-muted-foreground">{item.description}</p>
                        <div
                          className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === "Completed"
                              ? "bg-primary/10 text-primary"
                              : item.status === "In Progress"
                                ? "bg-secondary/10 text-secondary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

