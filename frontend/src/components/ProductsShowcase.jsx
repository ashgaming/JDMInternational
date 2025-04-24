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
      name: "Organic Citrus",
      category: "Fruits",
      image: "https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg",
      description: "Fresh oranges, lemons, and grapefruits grown with organic farming practices.",
    },
    {
      id: 3,
      name: "Coffee Beans",
      category: "Specialty",
      image: "https://images.pexels.com/photos/34085/pexels-photo.jpg",
      description: "Premium Arabica and Robusta coffee beans from sustainable plantations.",
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
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-700 hover:shadow-xl dark:bg-card ${
                isVisible 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <Button variant="accent" size="sm" className="w-full">View Details</Button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{product.category}</span>
                <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
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