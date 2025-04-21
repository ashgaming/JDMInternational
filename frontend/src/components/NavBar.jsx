"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Products", href: "/products" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ]

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-700">JDMInternational</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-700",
                pathname === link.href ? "text-green-700" : "text-muted-foreground"
              )}
            >
              {link.title}
            </Link>
          ))}
          <Button variant="accent" size="sm">Get a Quote</Button>
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="flex h-full flex-col items-center justify-center space-y-8 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-medium transition-colors hover:text-green-700",
                  pathname === link.href ? "text-green-700" : "text-muted-foreground"
                )}
              >
                {link.title}
              </Link>
            ))}
            <Button variant="accent" onClick={() => setIsOpen(false)}>Get a Quote</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar;