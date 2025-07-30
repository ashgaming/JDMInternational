"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import Corousel from "./Corousel"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden h-[90vh]">
      {/* Hero background */}
      <div className="absolute inset-0 z-10">
        <Corousel />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-10 md:py-32 lg:py-40">
        <div className="max-w-3xl md:pl-4">
          <h1
            className={`mb-6 text-3xl font-bold text-white transition-all duration-1000 md:text-5xl lg:text-6xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <span className="text-blue-400">Indian</span> Goods Export Solutions
          </h1>

          <p
            className={`mb-8 text-lg text-slate-200 transition-all delay-300 duration-1000 md:text-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            Connecting premium products to international markets with expertise,
            reliability, and sustainable practices. Your trusted partner in global export solutions.
          </p>

          <div
            className={`flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transition-all delay-500 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <Button variant="accent" size="lg">
            <Link href='/products' >
              Explore Our Products
            </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
              <Link href='/contact' >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}