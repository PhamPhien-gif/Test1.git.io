import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Pencil } from "lucide-react"

export default function BasketPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-primary text-2xl font-medium">
            World Peas
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-foreground hover:text-primary">
              Shop
            </Link>
            <Link href="/newstand" className="text-foreground hover:text-primary">
              Newstand
            </Link>
            <Link href="/who-we-are" className="text-foreground hover:text-primary">
              Who we are
            </Link>
            <Link href="/my-profile" className="text-foreground hover:text-primary">
              My profile
            </Link>
          </nav>
          <Link
            href="/basket"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Basket (3)
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Basket Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-foreground">Basket</h1>
            <p className="text-xl text-secondary">3 items</p>
          </div>

          <hr className="border-muted mb-8" />

          {/* Basket Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product List */}
            <div className="md:col-span-2 space-y-4">
              {/* Heirloom Tomato */}
              <div className="bg-card rounded-lg overflow-hidden flex">
                <div className="w-32 h-32 relative bg-white p-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Heirloom tomato"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Heirloom tomato</h3>
                    <p className="text-primary font-medium">$5.99 / lb</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-full px-4 py-1 flex items-center space-x-2">
                      <span>1 lb</span>
                      <button className="text-secondary">
                        <Pencil size={16} />
                        <span className="sr-only">Edit quantity</span>
                      </button>
                    </div>
                    <span className="font-medium">$5.99</span>
                  </div>
                </div>
              </div>

              {/* Organic Ginger */}
              <div className="bg-card rounded-lg overflow-hidden flex">
                <div className="w-32 h-32 relative bg-white p-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Organic ginger"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Organic ginger</h3>
                    <p className="text-primary font-medium">$12.99 / lb</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-full px-4 py-1 flex items-center space-x-2">
                      <span>0.5 lb</span>
                      <button className="text-secondary">
                        <Pencil size={16} />
                        <span className="sr-only">Edit quantity</span>
                      </button>
                    </div>
                    <span className="font-medium">$6.50</span>
                  </div>
                </div>
              </div>

              {/* Sweet Onion */}
              <div className="bg-card rounded-lg overflow-hidden flex">
                <div className="w-32 h-32 relative bg-white p-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sweet onion"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Sweet onion</h3>
                    <p className="text-primary font-medium">$2.99 / lb</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-full px-4 py-1 flex items-center space-x-2">
                      <span>5 lb</span>
                      <button className="text-secondary">
                        <Pencil size={16} />
                        <span className="sr-only">Edit quantity</span>
                      </button>
                    </div>
                    <span className="font-medium">$14.95</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Order summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">$27.44</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium">$3.99</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-medium">$2.00</span>
                  </div>

                  <div className="pt-4 border-t border-muted flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">$33.43</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-primary text-white py-3 px-4 rounded flex items-center justify-between hover:bg-primary/90 transition-colors">
                  <span>Continue to payment</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

