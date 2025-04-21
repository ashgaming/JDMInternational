"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"


export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Import Manager",
      company: "Global Foods Co.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      quote: "Working with AgroExport has transformed our supply chain. Their attention to quality and timely deliveries has made them our preferred agricultural supplier for three years running."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Director of Procurement",
      company: "Eastern Market Group",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      quote: "The export documentation and logistics support from AgroExport is unmatched. They've helped us navigate complex regulations and expand our product line with confidence."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "CEO",
      company: "Sunshine Organic Distributors",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote: "As a distributor focused on organic products, we need suppliers with impeccable standards. AgroExport consistently delivers premium organic produce that our customers love."
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    setIsVisible(true)
    
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-green-50 py-20 dark:bg-green-950/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            We take pride in building long-term relationships with businesses around the world.
          </p>
        </div>
        
        <div 
          className={`mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-opacity duration-1000 dark:bg-card md:p-8 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <Quote className="absolute left-0 top-0 h-12 w-12 -translate-x-1/4 -translate-y-1/4 text-green-200 opacity-80 dark:text-green-800" />
            
            <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border-4 border-green-100 dark:border-green-800">
              <Image 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            
            <blockquote className="mb-6 text-center text-lg italic text-slate-700 dark:text-slate-300 md:text-xl">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-bold">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === activeIndex ? "bg-green-600" : "bg-slate-300 dark:bg-slate-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}