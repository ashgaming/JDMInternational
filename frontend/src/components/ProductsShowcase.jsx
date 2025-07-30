"use client"

import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"


export function ProductsShowcase() {
  const productsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const products = [
    {
      id: 1,
      name: "Premium Wheat",
      category: "Grains",
      image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg",
      description: "High-quality wheat varieties suitable for bread, pasta, and pastry production.",
    },
    {
      id: 2,
      name: "Organic Apples",
      category: "Fruits",
      image: "https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg",
      description: "Crisp, juicy apples grown with organic farming practices."
    },
    {
      id: 3,
      name: "Carrots",
      category: "Vegetable",
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
      description: "Fresh, organic carrots grown in nutrient-rich soil."
    },
    {
      id: 4,
      name: "Exotic Spices",
      category: "Spices",
      image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg",
      description: "Carefully sourced spices including turmeric, cardamom, and saffron.",
    },
  ]

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

    if (productsRef.current) {
      observer.observe(productsRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Products</h2>
          <p className="text-lg text-muted-foreground">
            Discover our premium agricultural exports sourced from trusted growers and producers worldwide.
          </p>
        </div>

        <div
  ref={productsRef}
  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 py-8 max-w-7xl mx-auto"
>
  {products.map((product, index) => (
    <div
      key={product.id}
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-gray-800/80 shadow-lg backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col items-center justify-center text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400">
          {product.category}
        </span>
        <h3 className="mt-3 text-xl font-serif font-semibold text-gray-900 dark:text-gray-300 tracking-tight">
          {product.name}
        </h3>
        {/* Optional Price or CTA */}
      </div>

      {/* Decorative Border Effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500 pointer-events-none"></div>
    </div>
  ))}
</div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}