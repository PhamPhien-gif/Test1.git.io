import { Users, Lightbulb, Target, Puzzle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntroductionSection() {
  const teamValues = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative Approach",
      description: "We believe in the power of diverse perspectives working together toward common goals.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Creative Problem Solving",
      description: "We tackle challenges with innovative thinking and out-of-the-box solutions.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that create real value.",
    },
    {
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      title: "Adaptable Expertise",
      description: "Our diverse skill sets allow us to adapt to any project requirements.",
    },
  ]

  return (
    <section id="introduction" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Introduction</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of 5 members, each bringing different skills and expertise to the table. We focus on
            developing and executing creative projects with the goal of providing practical solutions and improving
            workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamValues.map((value, index) => (
            <Card key={index} className="border border-border">
              <CardHeader className="pb-2">
                <div className="mb-2">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((member) => (
              <div key={member} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-secondary mb-4 flex items-center justify-center text-secondary-foreground font-bold text-xl">
                  TM{member}
                </div>
                <h4 className="font-medium">Team Member {member}</h4>
                <p className="text-sm text-muted-foreground text-center">
                  {
                    ["Project Manager", "UX Designer", "Frontend Developer", "Backend Developer", "QA Specialist"][
                      member - 1
                    ]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

