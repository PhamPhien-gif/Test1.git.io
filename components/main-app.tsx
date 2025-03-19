"use client"

import { useState, createContext, useContext } from "react"
import Header from "./header"
import ShopPage from "@/components/pages/shop-page"
import NewstandPage from "@/components/pages/newstand-page"
import WhoWeArePage from "@/components/pages/who-we-are-page"
import ProfilePage from "@/components/pages/profile-page"
import BasketPage from "@/components/pages/basket-page"
import LoginPage from "@/components/pages/login-page"


// Define routes
export type Route = "shop" | "newstand" | "who-we-are" | "profile" | "login" | "basket" 

// Create context for routing and basket state
type AppContextType = {
  currentRoute: Route
  navigateTo: (route: Route) => void
  basketCount: number
  updateBasketCount: (count: number) => void
}

const AppContext = createContext<AppContextType>({
  currentRoute: "shop",
  navigateTo: () => { },
  basketCount: 3,
  updateBasketCount: () => { },
})

export const useAppContext = () => useContext(AppContext)

export function MainApp() {
  const [currentRoute, setCurrentRoute] = useState<Route>("shop")
  const [basketCount, setBasketCount] = useState(3)

  const navigateTo = (route: Route) => {
    setCurrentRoute(route)
    // Scroll to top on navigation
    window.scrollTo(0, 0)
  }

  const updateBasketCount = (count: number) => {
    setBasketCount(count)
  }

  // Render the current page based on route
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case "shop":
        return <ShopPage />
      case "newstand":
        return <NewstandPage />
      case "who-we-are":
        return <WhoWeArePage />
      case "profile":
        return <ProfilePage />
      case "basket":
        return <BasketPage />
      case "login":
        return <LoginPage />
      default:
        return <ShopPage />
    }
  }

  return (
    <AppContext.Provider value={{ currentRoute, navigateTo, basketCount, updateBasketCount }}>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">{renderCurrentPage()}</main>
      </div>
    </AppContext.Provider>
  )
}

