import { FileText, Shield, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContractSection() {
  const contractItems = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Deliverables",
      description:
        "Clearly defined project outputs and milestones that will be delivered throughout the project lifecycle.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Timelines",
      description: "Agreed-upon schedules and deadlines for each phase of the project to ensure timely completion.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Terms & Conditions",
      description: "Legal framework and agreements that govern our collaboration and project execution.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Communication",
      description: "Established channels and protocols for regular updates and addressing any concerns.",
    },
  ]

  return (
    <section id="contract" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contract</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This section outlines the terms and conditions of our collaboration, including deliverables, timelines, and
            any agreements made for the project's execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {contractItems.map((item, index) => (
            <Card key={index} className="border border-border">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {item.icon}
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg border border-border p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Need More Details?</h3>
              <p className="text-muted-foreground">
                Please feel free to reach out if you need more details or have any questions about our contract terms.
              </p>
            </div>
            <Button size="lg" className="whitespace-nowrap">
              Request Contract Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

