import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Innovative Solutions <br className="hidden sm:block" />
          <span className="text-primary">Creative Execution</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          We are a team of 5 experts dedicated to developing and executing creative projects that provide practical
          solutions and improve workflows.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">Our Projects</Button>
          <Button size="lg" variant="outline">
            Meet The Team
          </Button>
        </div>
      </div>
    </section>
  )
}

