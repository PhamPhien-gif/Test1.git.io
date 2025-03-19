export default function WhoWeArePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Who We Are</h1>
        <p className="text-xl text-secondary mt-2">Our mission and values</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            World Peas began with a simple idea: make fresh, organic produce accessible to everyone. Founded in 2018 by
            a group of passionate farmers and food enthusiasts, we've grown from a small local operation to serving
            thousands of customers nationwide.
          </p>
          <p>
            We partner directly with organic farms to bring you the freshest seasonal produce, cutting out middlemen and
            reducing food waste in the process.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong>Sustainability:</strong> We use eco-friendly packaging and carbon-neutral delivery.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong>Community:</strong> We support local farmers and give back to food-focused charities.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong>Quality:</strong> We never compromise on the quality of our produce.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong>Transparency:</strong> We're open about where our food comes from and how it's grown.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

