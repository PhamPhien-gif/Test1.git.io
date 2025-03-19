export default function NewstandPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Newstand</h1>
        <p className="text-xl text-secondary mt-2">Latest news and articles</p>
      </div>

      <div className="grid gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Seasonal Produce Guide: Spring Edition</h2>
            <p className="text-secondary mb-4">April 15, 2023</p>
            <p className="mb-4">
              Discover what's in season this spring and how to make the most of fresh, local produce. From asparagus to
              strawberries, we cover the best spring has to offer.
            </p>
            <button className="text-primary font-medium hover:underline">Read more</button>
          </div>
        ))}
      </div>
    </div>
  )
}

