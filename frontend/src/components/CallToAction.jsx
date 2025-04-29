"use client"

import React, { useRef, useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function CallToAction() {
  const ctaRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="bg-green-700 py-20 text-white">
      <div 
        ref={ctaRef}
        className={`container mx-auto px-4 transition-all duration-1000 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Expand Your Export Business Globally?</h2>
          <p className="mb-8 text-lg text-green-100">
            Join hundreds of agricultural producers who trust us with their export needs. 
            Get in touch today for a personalized export solution.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}