"use client"

import { useAppContext } from "./main-app"

export default function Header() {
  const { currentRoute, navigateTo, basketCount } = useAppContext()

  // Helper function to determine if a nav item is active
  const isActive = (route: string) => currentRoute === route

  return (
    <header className="border-b border-muted">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigateTo("shop")} className="text-primary text-2xl font-medium">
          World Peas
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => navigateTo("shop")}
            className={`hover:text-primary transition-colors ${isActive("shop") ? "text-primary font-medium" : "text-foreground"}`}
          >
            Shop
          </button>
          <button
            onClick={() => navigateTo("newstand")}
            className={`hover:text-primary transition-colors ${isActive("newstand") ? "text-primary font-medium" : "text-foreground"}`}
          >
            Newstand
          </button>
          <button
            onClick={() => navigateTo("who-we-are")}
            className={`hover:text-primary transition-colors ${isActive("who-we-are") ? "text-primary font-medium" : "text-foreground"}`}
          >
            Who we are
          </button>
          <button
            onClick={() => navigateTo("profile")}
            className={`hover:text-primary transition-colors ${isActive("profile") ? "text-primary font-medium" : "text-foreground"}`}
          >
            My profile
          </button>
        </nav>

        <button
          onClick={() => navigateTo("basket")}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Basket ({basketCount})
        </button>
      </div>
    </header>
  )
}

