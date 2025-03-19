"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useAppContext } from "@/components/main-app"

export default function ShopPage() {
  const { updateBasketCount, basketCount } = useAppContext()

  const addToBasket = () => {
    updateBasketCount(basketCount + 1)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Shop</h1>
        <p className="text-xl text-secondary mt-2">Browse our fresh organic produce</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample product cards */}
        {[
          { name: "Heirloom tomato", price: "$5.99", unit: "lb" },
          { name: "Organic ginger", price: "$12.99", unit: "lb" },
          { name: "Sweet onion", price: "$2.99", unit: "lb" },
          { name: "Fresh basil", price: "$3.49", unit: "bunch" },
          { name: "Avocado", price: "$2.50", unit: "each" },
          { name: "Organic carrots", price: "$4.99", unit: "bunch" },
        ].map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src={`/placeholder.svg?height=200&width=200&text=${product.name}`}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {product.price} / {product.unit}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={addToBasket} className="w-full">
                Add to basket
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

