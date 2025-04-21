"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
          alt="Agricultural fields"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 
            className={`mb-6 text-4xl font-bold text-white transition-all duration-1000 md:text-5xl lg:text-6xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-green-400">Global</span> Agricultural Export Solutions
          </h1>
          
          <p 
            className={`mb-8 text-lg text-slate-200 transition-all delay-300 duration-1000 md:text-xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Connecting premium agricultural products to international markets with expertise, 
            reliability, and sustainable practices. Your trusted partner in global agri-business.
          </p>
          
          <div 
            className={`flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transition-all delay-500 duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button variant="accent" size="lg">
              Explore Our Products
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}