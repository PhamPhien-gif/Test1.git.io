import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectSection() {
  const projectFeatures = [
    "Comprehensive problem analysis and solution design",
    "Iterative development with regular feedback cycles",
    "Scalable architecture for future growth",
    "User-centered design approach",
    "Thorough testing and quality assurance",
    "Detailed documentation and knowledge transfer",
  ]

  return (
    <section id="project" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here, we describe the current project we're working on, its objectives, scope, and expected outcomes. Our
            project aims to solve complex workflow challenges, and we plan to deliver a sustainable, effective solution
            that will continue to grow in the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Project Highlights</h3>
            <ul className="space-y-4">
              {projectFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="border border-border overflow-hidden">
            <CardHeader className="bg-primary/10 pb-2">
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Objectives</h4>
                  <p className="text-sm text-muted-foreground">
                    To develop an innovative solution that streamlines workflows, reduces manual effort, and improves
                    overall efficiency by at least 30%.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Scope</h4>
                  <p className="text-sm text-muted-foreground">
                    The project encompasses analysis, design, development, testing, deployment, and initial support
                    phases with a focus on core functionality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expected Outcomes</h4>
                  <p className="text-sm text-muted-foreground">
                    A fully functional, user-friendly solution that addresses the identified problems, with measurable
                    improvements in efficiency and user satisfaction.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Future Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    The solution is designed with scalability in mind, allowing for future enhancements and integration
                    with other systems as needs evolve.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

